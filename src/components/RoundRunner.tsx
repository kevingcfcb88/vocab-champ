import type { SessionState } from "../session/runtime"
import { getCurrentRound, nextWordOrRound } from "../session/runtime"
import { NoEnglishZoneRound } from "../rounds/components/NoEnglishZoneRound"
import { SentenceMasterRound } from "../rounds/components/SentenceMasterRound"
import { PlaceholderRound } from "../rounds/components/PlaceholderRound"
import { PicturePowerRound } from "../rounds/components/PicturePowerRound"
import { SpellItRound } from "../rounds/components/SpellItRound"
import { ListenAndChooseRound } from "../rounds/components/ListenAndChooseRound"

type Props = {
  state: SessionState
  onStateChange: (state: SessionState | null) => void
}

function renderRound(
  round: ReturnType<typeof getCurrentRound>,
  currentWord: SessionState["currentWords"][number] | undefined,
  options: string[],
  onSuccess: () => void
) {
  switch (round.type) {
    case "NO_ENGLISH_ZONE":
      return currentWord ? (
        <NoEnglishZoneRound
          word={currentWord}
          onSuccess={onSuccess}
        />
      ) : null

    case "SENTENCE_MASTER":
      return currentWord ? (
        <SentenceMasterRound
          word={currentWord}
          onSuccess={onSuccess}
        />
      ) : null

    case "PICTURE_POWER":
      return currentWord ? (
        <PicturePowerRound
          word={currentWord}
          onSuccess={onSuccess}
        />
      ) : null
    case "SPELL_IT":
      return currentWord ? (
        <SpellItRound
          word={currentWord}
          onSuccess={onSuccess}
        />
      ) : null
    case "LISTEN_AND_CHOOSE":
      return currentWord ? (
        <ListenAndChooseRound
          word={currentWord}
          options={options}
          onSuccess={onSuccess}
        />
      ) : null

    default:
      return (
        <PlaceholderRound
          label={round.label}
          onNext={onSuccess}
        />
      )
  }
}

export function RoundRunner({ state, onStateChange }: Props) {
  const round = getCurrentRound(state)
const currentWord = state.currentWords[state.wordIndex]
  const options = state.currentWords.map(w => w.word)
  const handleNext = () => {
    onStateChange(nextWordOrRound(state))
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>{round.label}</h2>

      <ul>
        {renderRound(round, currentWord, options, handleNext)}
      </ul>
    </div>
  )
}
