import type { VocabWord } from "../../data/words"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

export function PicturePowerRound({ word, onSuccess }: Props) {
  return (
    <div>
      <p>Look at the image and think of the word.</p>

      <div style={{ margin: "16px 0" }}>
        {word.imageUrl ? (
          <img
            src={word.imageUrl}
            alt={word.word}
            style={{ maxWidth: 300 }}
          />
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

      <button onClick={onSuccess}>
        I know this word
      </button>
    </div>
  )
}
