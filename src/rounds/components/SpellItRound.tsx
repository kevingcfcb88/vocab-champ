import { useState } from "react"
import type { VocabWord } from "../../data/words"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

export function SpellItRound({ word, onSuccess }: Props) {
  const [value, setValue] = useState("")
  const [error, setError] = useState<string | null>(null)

  const checkAnswer = () => {
    const normalizedInput = value.trim().toLowerCase()
    const normalizedWord = word.word.toLowerCase()

    if (normalizedInput === normalizedWord) {
      onSuccess()
    } else {
      setError("Not quite. Try again.")
    }
  }

  return (
    <div>
      <p>Spell the word: {word.word.toLowerCase()} </p>

      {/* optional hint */}
      {word.translation && (
        <p><em>Hint: {word.translation}</em></p>
      )}

      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type the word"
      />

      <div style={{ marginTop: 8 }}>
        <button onClick={checkAnswer}>
          Check
        </button>
      </div>

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  )
}
