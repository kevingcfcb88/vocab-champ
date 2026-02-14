import { VOCABULARY } from "../data/words"
import { ROUNDS } from "../rounds/types"
import type { RoundType } from "../rounds/types"
import type { SessionConfig } from "../data/session"
import type { VocabWord } from "../data/words"
import type { RoundDefinition } from "../rounds/types"
import type { RoundState } from "../rounds/runtime"


export type SessionState = {
  roundIndex: number
  rounds: RoundType[]
  wordsPerRound: number
  currentWords: VocabWord[]
}

export function createSession(config: SessionConfig): SessionState {
  return {
    roundIndex: 0,
    rounds: config.enabledRounds,
    wordsPerRound: config.wordsPerRound,
    currentWords: pickWords(config.wordsPerRound),
  }
}

function pickWords(count: number): VocabWord[] {
  const shuffled = [...VOCABULARY].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function nextRound(state: SessionState): SessionState | null {
  const nextIndex = state.roundIndex + 1

  if (nextIndex >= state.rounds.length) {
    return null
  }

  return {
    ...state,
    roundIndex: nextIndex,
    currentWords: pickWords(state.wordsPerRound),
  }
}

export function getCurrentRound(
  state: SessionState
): RoundDefinition {
  const roundType = state.rounds[state.roundIndex]

  const round = ROUNDS.find(r => r.type === roundType)

  if (!round) {
    throw new Error(`Round definition not found for ${roundType}`)
  }

  return round
}
