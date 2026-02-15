import { useEffect, useState } from "react"
import type { VocabWord } from "../../data/words"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

export function PicturePowerRound({ word, onSuccess }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(word.imageUrl || null)
  const [inputValue, setInputValue] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [hintIndex, setHintIndex] = useState(0)

  // Generate masked word for hints
  const maskedWord = word.word
    .split("")
    .map((char, idx) => (idx < hintIndex ? char : "_"))
    .join("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_KEY}&q=${word.word}&safesearch=true`
        )
        const data = await response.json()
        setImageUrl(data.hits[0]?.webformatURL || null)
      } catch (error) {
        console.error("Failed to fetch image:", error)
      }
    }

    fetchData()
  }, [word.word])

  const handleCheck = () => {
    if (inputValue.trim().toLowerCase() === word.word.toLowerCase()) {
      setFeedback("✅ Correct!")
      setHintIndex(0)
      setInputValue("")
      onSuccess()
    } else {
      setFeedback("❌ Try again")
    }
  }

  const handleHint = () => {
    if (hintIndex < word.word.length) {
      setHintIndex(hintIndex + 1)
    }
  }

  return (
    <div>
      <p>Look at the image and think of the word.</p>

      <div style={{ margin: "16px 0" }}>
        {imageUrl ? (
          <img src={imageUrl} alt={word.word} style={{ maxWidth: 300 }} />
        ) : (
          <div
            style={{
              width: 300,
              height: 200,
              background: "#eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Image coming soon
          </div>
        )}
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type the word here"
          style={{ fontSize: 16, padding: 4 }}
        />
        <button onClick={handleCheck} style={{ marginLeft: 8, fontSize: 16 }}>
          Check
        </button>
      </div>

      <div style={{ marginTop: 8 }}>
        <button onClick={handleHint} style={{ fontSize: 16 }}>
          Hint
        </button>
        <span style={{ marginLeft: 8, fontSize: 18, letterSpacing: 2 }}>
          {maskedWord}
        </span>
      </div>

      {feedback && <p>{feedback}</p>}
    </div>
  )
}
