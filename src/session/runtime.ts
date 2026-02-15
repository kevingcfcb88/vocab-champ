import { VOCABULARY } from "../data/words"
import { ROUNDS } from "../rounds/types"
import type { RoundType } from "../rounds/types"
import type { SessionConfig } from "../data/session"
import type { VocabWord } from "../data/words"
import type { RoundDefinition } from "../rounds/types"
import type { RoundState } from "../rounds/runtime"


export type SessionState = {
  roundIndex: number
  wordIndex: number
  rounds: RoundType[]
  wordsPerRound: number
  currentWords: VocabWord[]
}

export function createSession(config: SessionConfig): SessionState {
  return {
    roundIndex: 0,
    wordIndex: 0,
    rounds: config.enabledRounds,
    wordsPerRound: config.wordsPerRound,
    currentWords: pickWords(config.wordsPerRound),
  }
}

function pickWords(count: number): VocabWord[] {
  const shuffled = [...VOCABULARY].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function nextWordOrRound(state: SessionState): SessionState | null {
  const { wordIndex, currentWords, roundIndex, rounds, wordsPerRound } = state

  // More words left in this round?
  if (wordIndex + 1 < currentWords.length) {
    return {
      ...state,
      wordIndex: wordIndex + 1,
    }
  }

  // No more words in this round → next round
  const nextRoundIndex = roundIndex + 1
  if (nextRoundIndex >= rounds.length) {
    return null  // session finished
  }

  return {
    roundIndex: nextRoundIndex,
    wordIndex: 0,
    rounds,
    wordsPerRound,
    currentWords: pickWords(wordsPerRound),
  }
}

export function getCurrentRound(state: SessionState): RoundDefinition {
  const roundType = state.rounds[state.roundIndex]
  //const roundType = state.rounds[2]
  const def = ROUNDS[roundType]

  if (!def) {
    throw new Error(`Round definition not found for ${roundType}`)
  }

  return def
}

