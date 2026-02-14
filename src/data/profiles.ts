export type Profile = {
  id: string
  name: string
  createdAt: string
}

export const profiles: Profile[] = [
  {
    id: "demo-1",
    name: "Player 1",
    createdAt: new Date().toISOString(),
  },
]
