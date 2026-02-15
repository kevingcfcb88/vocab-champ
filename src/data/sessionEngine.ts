function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

import type { SessionConfig, SessionState, RoundState } from "./session"
import { VOCABULARY } from "./words"

export function createSession(config: SessionConfig): SessionState {
  return {
    profileId: config.profileId,
    currentRoundIndex: 0,
    rounds: []
  }
}

function resolveWordsPerRound(
  session: SessionState,
  defaultCount: number
) {
  // first round uses config or 5
  if (session.rounds.length === 0) return defaultCount
  // later rounds reuse the previous
  return session.rounds[session.rounds.length - 1].wordsPerRound
}

export function startRound(
  session: SessionState,
  config: SessionConfig,
  overrideCount?: number
): SessionState {
  const baseCount = config.wordsPerRound ?? 5
  const count = overrideCount ?? resolveWordsPerRound(session, baseCount)

  const safeCount = Math.min(
    Math.max(count, 5),
    VOCABULARY.length
  )

  const words = shuffleArray(VOCABULARY).slice(0, safeCount)

  const newRound: RoundState = {
    roundType: config.enabledRounds[session.currentRoundIndex],
    words,
    wordsPerRound: safeCount,
    currentWordIndex: 0,
    completed: false
  }

  return {
    ...session,
    rounds: [...session.rounds, newRound]
  }
}

export function nextWord(session: SessionState): SessionState {
  const rounds = [...session.rounds]
  const round = rounds[session.currentRoundIndex]

  if (!round) return session

  const nextIndex = round.currentWordIndex + 1
  // if at end, do nothing
  if (nextIndex >= round.words.length) return session

  round.currentWordIndex = nextIndex

  return { ...session, rounds }
}

export function completeRound(session: SessionState): SessionState {
  const rounds = [...session.rounds]
  const round = rounds[session.currentRoundIndex]

  if (!round) return session

  round.completed = true

  return { ...session, rounds }
}

export function nextRound(session: SessionState): SessionState {
  const nextIdx = session.currentRoundIndex + 1

  if (nextIdx >= session.rounds.length) return session

  return {
    ...session,
    currentRoundIndex: nextIdx
  }
}
