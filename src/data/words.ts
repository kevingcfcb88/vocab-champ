export type VocabWord = {
  id: string
  word: string
  category?: string
  hints?: string[]
}

export const VOCABULARY: VocabWord[] = [
  {
    id: "amusement-park",
    word: "amusement park",
    hints: ["rides", "fun place", "games"],
  },
  {
    id: "slow",
    word: "slow",
    hints: ["not fast", "low speed", "taking time"],
  },
  {
    id: "ghost",
    word: "ghost",
    hints: ["spooky", "spirit", "scary"],
  },
  // we’ll add the full list incrementally
]
