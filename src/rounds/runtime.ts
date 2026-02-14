import type { RoundType } from "./types"
import type { VocabWord } from "../data/words"

export type RoundState = {
  type: RoundType
  wordIndex: number
  words: VocabWord[]
  completed: boolean
  score: number
}
