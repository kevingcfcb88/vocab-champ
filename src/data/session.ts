import type { RoundType } from "../rounds/types"

export type SessionConfig = {
  profileId: string
  wordsPerRound: number
  enabledRounds: RoundType[]
}
