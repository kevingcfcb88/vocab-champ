export type RoundType =
  | "NO_ENGLISH_ZONE"
  | "PICTURE_POWER"
  | "SPELL_IT"
  | "LISTEN_AND_CHOOSE"
  | "SENTENCE_MASTER"

export type RoundDefinition = {
  type: RoundType
  label: string
  points: number
  usesAI: boolean
  requiresInput: boolean
}

export const ROUNDS: RoundDefinition[] = [
  {
    type: "NO_ENGLISH_ZONE",
    label: "No English Zone",
    points: 50,
    usesAI: true,
    requiresInput: true,
  },
  {
    type: "PICTURE_POWER",
    label: "Picture Power",
    points: 60,
    usesAI: false,
    requiresInput: false,
  },
  {
    type: "SPELL_IT",
    label: "Spell it or write it",
    points: 70,
    usesAI: false,
    requiresInput: true,
  },
  {
    type: "LISTEN_AND_CHOOSE",
    label: "Listen and choose",
    points: 80,
    usesAI: true,
    requiresInput: false,
  },
  {
    type: "SENTENCE_MASTER",
    label: "Sentence Master",
    points: 100,
    usesAI: true,
    requiresInput: true,
  },
]
