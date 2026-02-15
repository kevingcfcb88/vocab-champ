import { useState } from "react"
import type { VocabWord } from "../../data/words"

type Props = {
  word: VocabWord
  onSuccess: () => void
}

export function SpellItRound({ word, onSuccess }: Props) {
  const [value, setValue] = useState("")

  return (
    <div>
      <p>Spell the word:</p>
      <h2>{word.word}</h2>

      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type the word"
        style={{ marginRight: 8 }}
      />

      <div style={{ marginTop: 8 }}>
        <button onClick={onSuccess}>Next Word ➡️</button>
      </div>
    </div>
  )
}
