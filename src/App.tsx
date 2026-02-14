import { useState } from "react"
import { SessionSetup } from "./components/SessionSetup"
import { createSession } from "./data/sessionEngine"
import type { SessionConfig, SessionState } from "./data/session"

type AppView = "setup" | "session"

export default function App() {
  const [view, setView] = useState<"setup" | "session">("setup")
  const [session, setSession] = useState<SessionState | null>(null)

  const startSession = (config: SessionConfig) => {
    const newSession = createSession(config)
    setSession(newSession)
    setView("session")
  }

  if (view === "setup") {
    return <SessionSetup onStart={startSession} />
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Session started 🎉</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
