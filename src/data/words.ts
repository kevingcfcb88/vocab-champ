export type VocabWord = {
  id: string
  word: string
  category?: string
  hints?: string[]
  imageUrl?: string
  translation?: string
  audioUrl?: string
}

export const VOCABULARY: VocabWord[] = [
  {
    id: "amusement-park",
    word: "amusement park",
    category: "places",
    hints: ["place with rides"],
  },
  {
    id: "ride",
    word: "ride",
    category: "activities",
    hints: ["fun thing to go on"],
  },
  {
    id: "exciting",
    word: "exciting",
    category: "adjectives",
    hints: ["very fun"],
  },
  {
    id: "haunted-house",
    word: "haunted house",
    category: "places",
    hints: ["scary house"],
  },
  {
    id: "scream",
    word: "scream",
    category: "actions",
    hints: ["loud shout"],
  },
  {
    id: "slide",
    word: "slide",
    category: "actions",
    hints: ["go down"],
  },
  {
    id: "roller-coaster",
    word: "roller coaster",
    category: "rides",
    hints: ["fast train ride"],
  },
  {
    id: "ferris-wheel",
    word: "ferris wheel",
    category: "rides",
    hints: ["big round wheel"],
  },
  {
    id: "log-ride",
    word: "log ride",
    category: "rides",
    hints: ["water ride"],
  },
  {
    id: "ghost",
    word: "ghost",
    category: "things",
    hints: ["spooky spirit"],
  },
  {
    id: "fun",
    word: "fun",
    category: "feelings",
    hints: ["makes you happy"],
  },
  {
    id: "fork",
    word: "fork",
    category: "objects",
    hints: ["eat with it"],
  },
  {
    id: "knife",
    word: "knife",
    category: "objects",
    hints: ["cut with it"],
  },
  {
    id: "chopstick",
    word: "chopstick",
    category: "objects",
    hints: ["sticks to eat"],
  },
  {
    id: "taste",
    word: "taste",
    category: "senses",
    hints: ["feel food in mouth"],
  },
  {
    id: "yummy",
    word: "yummy",
    category: "adjectives",
    hints: ["very tasty"],
  },
  {
    id: "enjoy",
    word: "enjoy",
    category: "actions",
    hints: ["have fun"],
  },
  {
    id: "hands",
    word: "hands",
    category: "body",
    hints: ["hold things"],
  },
  {
    id: "friend",
    word: "friend",
    category: "people",
    hints: ["person you like"],
  },
  {
    id: "spoon",
    word: "spoon",
    category: "objects",
    hints: ["eat soup"],
  },
  {
    id: "brush",
    word: "brush",
    category: "objects",
    hints: ["clean with it"],
  },
  {
    id: "wink",
    word: "wink",
    category: "actions",
    hints: ["close one eye"],
  },
  {
    id: "tongue",
    word: "tongue",
    category: "body",
    hints: ["inside your mouth"],
  },
  {
    id: "mirror",
    word: "mirror",
    category: "objects",
    hints: ["see yourself"],
  },
  {
    id: "teeth",
    word: "teeth",
    category: "body",
    hints: ["chew food"],
  },
  {
    id: "shake",
    word: "shake",
    category: "actions",
    hints: ["move fast"],
  },
  {
    id: "slow",
    word: "slow",
    category: "adjectives",
    hints: ["not fast"],
  },
  {
    id: "circle",
    word: "circle",
    category: "shapes",
    hints: ["round shape"],
  },
]
