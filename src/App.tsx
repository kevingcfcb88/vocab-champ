import { useState } from "react"
import { SessionSetup } from "./components/SessionSetup"
import { RoundRunner } from "./components/RoundRunner"
import { createSession } from "./session/runtime"
import type { SessionState } from "./session/runtime"
import type { SessionConfig } from "./data/session"


type AppView = "setup" | "session" | "done"

export default function App() {
  const [view, setView] = useState<AppView>("setup")
  const [session, setSession] = useState<SessionState | null>(null)

  const handleStart = (config: SessionConfig) => {
    setSession(createSession(config))
    setView("session")
  }

  const handleStateChange = (next: SessionState | null) => {
    if (next === null) {
      setView("done")
      setSession(null)
    } else {
      setSession(next)
    }
  }

  if (view === "setup") {
    return <SessionSetup onStart={handleStart} />
  }

  if (view === "session" && session) {
    return (
      <RoundRunner
        state={session}
        onStateChange={handleStateChange}
      />
    )
  }

  return (
    <div style={{ padding: 16, textAlign: "center" }}>
      <h1>🎉 Session Complete!</h1>
      <button
        onClick={() => setView("setup")}
        style={{ fontSize: 18, padding: 12 }}
      >
        Start Again
      </button>
    </div>
  )
}
