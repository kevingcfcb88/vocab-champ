import type { RoundType } from "../rounds/types"
import type { VocabWord } from "../data/words"

export type RoundState = {
  roundType: RoundType
  words: VocabWord[]
  wordsPerRound: number
  currentWordIndex: number
  completed: boolean
}

export type SessionState = {
  profileId: string

  rounds: RoundState[]
  currentRoundIndex: number

  startedAt: number
  finishedAt?: number
}
