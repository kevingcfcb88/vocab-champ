import type { SessionState } from "../session/runtime"
import type { RoundDefinition } from "../rounds/types"
import { getCurrentRound, nextRound } from "../session/runtime"
import { NoEnglishZoneRound } from "../rounds/components/NoEnglishZoneRound"


type Props = {
  state: SessionState
  onStateChange: (state: SessionState | null) => void
}

export function RoundRunner({ state, onStateChange }: Props) {
  const round = getCurrentRound(state)
const currentWord = state.currentWords[0]

  const handleNext = () => {
    const next = nextRound(state)
    onStateChange(next)
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>{round.label}</h2>
      <p>Points: {round.points}</p>

      <ul>
        {round.type === "NO_ENGLISH_ZONE" && currentWord && (
          <NoEnglishZoneRound
            word={currentWord}
            onSuccess={handleNext}
          />
        )}

      </ul>

      <button onClick={handleNext}>
        Next Round
      </button>
    </div>
  )
}
