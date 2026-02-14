import { useState } from "react"
import type { VocabWord } from "../../data/words"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

export function SentenceMasterRound({ word, onSuccess }: Props) {
  const [sentence, setSentence] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)

  const handleCheck = () => {
    const text = sentence.trim().toLowerCase()
    const target = word.word.toLowerCase()

    if (!text.includes(target)) {
      setFeedback("❌ Your sentence must include the word")
      return
    }

    if (text.split(" ").length < 3) {
      setFeedback("❌ Try a longer sentence")
      return
    }

    setFeedback("✅ Great sentence!")
    onSuccess()
  }

  return (
    <div>
      <h3>Make a sentence using:</h3>
      <h2>{word.word}</h2>

      <textarea
        rows={3}
        style={{ width: "100%", fontSize: 16 }}
        value={sentence}
        onChange={e => setSentence(e.target.value)}
        placeholder="Write your sentence here"
      />

      <button
        onClick={handleCheck}
        disabled={!sentence}
        style={{ marginTop: 12, fontSize: 16 }}
      >
        Check
      </button>

      {feedback && <p>{feedback}</p>}
    </div>
  )
}
