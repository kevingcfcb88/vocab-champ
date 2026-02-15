import type { RoundType } from "../rounds/types"
import type { VocabWord } from "./words"

export type SessionConfig = {
  wordsPerRound: number
  enabledRounds: RoundType[]
}

// ------ new stateful types -------

export type RoundState = {
  roundType: RoundType
  words: VocabWord[]       // chosen words for this round
  wordsPerRound: number    // count used in this round
  currentWordIndex: number // for UI to know which word is showing
  completed: boolean
}

export type SessionState = {
  currentRoundIndex: number
  rounds: RoundState[]
}
