import { useMemo, useState } from "react"
import type { VocabWord } from "../../data/words"

type Props = {
  word: VocabWord
  options: string[]
  onSuccess: () => void
}

export function ListenAndChooseRound({ word, options, onSuccess }: Props) {
  const [error, setError] = useState<string | null>(null)

  const shuffledOptions = useMemo(() => {
    return [...options].sort(() => Math.random() - 0.5)
  }, [options])

  const handleSelect = (choice: string) => {
    if (choice === word.word) {
      onSuccess()
    } else {
      setError("Wrong answer. Try again.")
    }
  }

  return (
    <div>
      <p>Listen and choose the correct word:</p>

      {word.audioUrl && (
        <audio controls src={word.audioUrl} />
      )}

      <ul>
        {shuffledOptions.map(option => (
          <li key={option}>
            <button onClick={() => handleSelect(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  )
}
