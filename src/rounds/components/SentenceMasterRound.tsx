import { useState } from "react"
import type { VocabWord } from "../../data/words"
import { callAI } from "../../ai/client"
import { sentenceMasterPrompt } from "../../ai/prompts"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

async function checkSentence(word: string, sentence: string) {
  const result = await callAI(
    sentenceMasterPrompt(word, sentence)
  )

    if (!result) return false

    return result.trim().toUpperCase() === "CORRECT"
}

export function SentenceMasterRound({ word, onSuccess }: Props) {
  const [sentence, setSentence] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)

  const handleCheck = async () => {
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

    setFeedback("⏳ Checking...")

    try {
      const isValid = await checkSentence(word.word, text)

      if (isValid) {
        setFeedback("✅ Great sentence!")
        onSuccess()
      } else {
        setFeedback("❌ The sentence doesn’t use the word correctly")
      }
    } catch {
      setFeedback("⚠️ Something went wrong, try again")
    }
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
