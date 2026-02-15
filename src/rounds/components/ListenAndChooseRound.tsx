import { useMemo, useState } from "react"
import type { VocabWord } from "../../data/words"
import { speak } from "../../utils/speech"

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
    setError("")
    if (choice === word.word) {
      onSuccess()
    } else {
      setError("Wrong answer. Try again.")
    }
  }

  const handlePlay = () => {
    setError("")
    if(word.hints){
      speak(word.hints[0])
    }else{
      speak("Cannot reproduce")
    }
  }

  return (
    <div data-word={word.word}>
      <p>Listen and choose the correct word:</p>

      <button
        onClick={handlePlay}
        style={{
          fontSize: 18,
          padding: "10px 14px",
          borderRadius: 8,
          cursor: "pointer",
          marginBottom: 16,
        }}
      >
        🔊 Play definition
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {shuffledOptions.map(option => (
          <li key={option} style={{ margin: "8px 0" }}>
            <button
              onClick={() => handleSelect(option)}
              style={{
                fontSize: 16,
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}
