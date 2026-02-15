import { useEffect, useState } from "react"
import type { VocabWord } from "../../data/words"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

export function PicturePowerRound({ word, onSuccess }: Props) {
  const [images, setImages] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_KEY}&q=${word.word}&image_type=photo&safesearch=true&per_page=10`
        )
        const data = await response.json()
        if (data.hits && data.hits.length > 0) {
          // Pick 3 random images from the results
          const shuffled = data.hits.sort(() => 0.5 - Math.random())
          const selected = shuffled.slice(0, 3).map((hit: any) => hit.webformatURL)
          setImages(selected)
        }
      } catch (error) {
        console.error("Failed to fetch images:", error)
      }
    }

    fetchImages()
  }, [word.word])

  const handleCheck = () => {
    if (inputValue.trim().toLowerCase() === word.word.toLowerCase()) {
      setFeedback("✅ Correct!")
      setInputValue("")
      onSuccess()
    } else {
      setFeedback("❌ Try again")
    }
  }

  return (
    <div data-word={word.word} style={{ textAlign: "center", maxWidth: 600, margin: "40px auto" }}>
      <p style={{ fontSize: "1.2rem" }}>Look at the images and think of the word.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, margin: "16px 0" }}>
        {images.length > 0 ? (
          images.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={word.word}
              style={{ maxWidth: 180, borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
            />
          ))
        ) : (
          <div
            style={{
              width: "100%",
              height: 200,
              background: "#eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            Images coming soon...
          </div>
        )}
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type the word here"
          style={{ fontSize: 16, padding: 6, width: "60%", borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button
          onClick={handleCheck}
          style={{
            marginLeft: 8,
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 6,
            backgroundColor: "#4f46e5",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Check
        </button>
      </div>

      {feedback && <p style={{ marginTop: 12, fontSize: 16 }}>{feedback}</p>}
    </div>
  )
}
