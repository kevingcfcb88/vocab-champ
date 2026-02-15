import { useState } from "react"
import { profiles } from "../data/profiles"
import { ROUNDS } from "../rounds/types"
import type { RoundType } from "../rounds/types"
import { VOCABULARY } from "../data/words"
import type { SessionConfig } from "../data/session"

type Props = {
  onStart: (config: SessionConfig) => void
}

export function SessionSetup({ onStart }: Props) {
  const [profileId, setProfileId] = useState(profiles[0].id)
  const [wordsPerRound, setWordsPerRound] = useState(2)
  const [enabledRounds, setEnabledRounds] = useState<RoundType[]>(
    Object.keys(ROUNDS) as RoundType[]
)      

  const handleStart = () => {
    onStart({
      profileId,
      wordsPerRound,
      enabledRounds
    })
  }

  return (
    <div style={{ padding: 16, maxWidth: 500, margin: "0 auto" }}>
      <h1>Vocabulary Championship</h1>

      {/* Profile */}
      <label>
        Profile
        <select
          value={profileId}
          onChange={e => setProfileId(e.target.value)}
        >
          {profiles.map(p => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <hr />

      {/* Words per round */}
      <label>
        Words per round: {wordsPerRound}
        <input
          type="range"
          min={2}
          max={VOCABULARY.length}
          value={wordsPerRound}
          onChange={e => setWordsPerRound(Number(e.target.value))}
        />
      </label>

      <hr />

      {/* Rounds */}
      <h3>Rounds</h3>
      {Object.entries(ROUNDS).map(([key, def]) => {
        const round = key as RoundType
        const definition = def as {
            label: string
            points: number
        }

        return (
            <label key={round}>
            <br />
            {definition.label} ({definition.points} pts)
            </label>
        )
    })
}

      <hr />

      <button
        disabled={enabledRounds.length === 0}
        onClick={handleStart}
        style={{ fontSize: 18, padding: 12, width: "100%" }}
      >
        Start Session
      </button>
    </div>
  )
}
