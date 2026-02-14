import { useState } from "react"
import type { VocabWord } from "../../data/words"
import { interpretNoEnglishZone } from "../../ai/interpreter"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

export function NoEnglishZoneRound({ word, onSuccess }: Props) {
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    setLoading(true)
    setFeedback(null)

    const result = await interpretNoEnglishZone({
      word: word.word,
      explanation: answer,
    })

    setLoading(false)
    setFeedback(result.message)

    if (result.ok) {
      onSuccess()
    }
  }

  return (
    <div>
      <h3>Explain this word in Spanish</h3>
      <h2>{word.word}</h2>

      <textarea
        rows={4}
        style={{ width: "100%", fontSize: 16 }}
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />

      <button
        onClick={handleCheck}
        disabled={!answer || loading}
        style={{ marginTop: 12, fontSize: 16 }}
      >
        {loading ? "Checking..." : "Check"}
      </button>

      {feedback && <p>{feedback}</p>}
    </div>
  )
}
