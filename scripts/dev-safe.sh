#!/usr/bin/env bash
# Roda `next dev` com um watchdog: mata o dev server antes que ele derrube o Mac.
#
# Uso:
#   scripts/dev-safe.sh            # turbopack (padrão do Next 16)
#   scripts/dev-safe.sh --webpack  # webpack (bem mais leve em memória no Apple Silicon)
#
# Variáveis:
#   MAX_RSS_MB   limite de RSS somado da árvore do dev server (padrão 3500)
#   MAX_SWAP_MB  limite de swap usado pelo sistema (padrão 1500)
#   MIN_FREE_MB  mínimo de memória "free+inactive" do sistema (padrão 600)
set -u
MAX_RSS_MB=${MAX_RSS_MB:-3500}
MAX_SWAP_MB=${MAX_SWAP_MB:-1500}
MIN_FREE_MB=${MIN_FREE_MB:-600}

# Roda em QoS "utility": o macOS prioriza a UI sobre o compilador.
taskpolicy -c utility ./node_modules/.bin/next dev "$@" &
DEV=$!
trap 'kill -TERM $DEV 2>/dev/null; wait $DEV 2>/dev/null' EXIT INT TERM

tree_pids() { # $DEV + todos os descendentes, separados por espaço (sem espaços sobrando)
  local out="$1" q="$1" kids
  while [ -n "$q" ]; do
    kids=$(pgrep -P "$(echo "$q" | tr ' ' ',')" | xargs)
    q="$kids"; [ -n "$kids" ] && out="$out $kids"
  done
  echo "$out" | xargs
}

PAGE=$(sysctl -n hw.pagesize)
while kill -0 $DEV 2>/dev/null; do
  sleep 1
  PIDS=$(tree_pids $DEV)
  RSS_MB=$(ps -o rss= -p "$(echo "$PIDS" | tr " " ",")" 2>/dev/null | awk '{s+=$1} END{printf "%d", s/1024}')
  SWAP_MB=$(sysctl -n vm.swapusage | awk '{gsub("M","",$6); printf "%d", $6}')
  FREE_MB=$(vm_stat | awk -v p="$PAGE" '/Pages free|Pages inactive|Pages speculative/ {gsub("\\.","",$NF); s+=$NF} END{printf "%d", s*p/1048576}')
  printf '\r[dev-safe] rss=%sMB swap=%sMB free=%sMB   ' "$RSS_MB" "$SWAP_MB" "$FREE_MB" >&2
  if [ "${RSS_MB:-0}" -gt "$MAX_RSS_MB" ] || [ "$SWAP_MB" -gt "$MAX_SWAP_MB" ] || [ "$FREE_MB" -lt "$MIN_FREE_MB" ]; then
    echo >&2; echo "[dev-safe] LIMITE ESTOURADO (rss=${RSS_MB}MB swap=${SWAP_MB}MB free=${FREE_MB}MB) — matando next dev" >&2
    kill -KILL $PIDS 2>/dev/null
    exit 2
  fi
done
wait $DEV
