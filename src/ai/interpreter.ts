type NoEnglishZoneInput = {
  word: string
  explanation: string
}

type InterpretationResult = {
  ok: boolean
  message: string
}

/**
 * Temporary FREE interpreter.
 * Heuristic-based, no API calls.
 * Replace later with real AI if desired.
 */
export async function interpretNoEnglishZone(
  input: NoEnglishZoneInput
): Promise<InterpretationResult> {
  const explanation = input.explanation.toLowerCase()
  const forbidden = input.word.toLowerCase()

  if (explanation.includes(forbidden)) {
    return {
      ok: false,
      message: "❌ No puedes decir la palabra en inglés",
    }
  }

  if (explanation.length < 10) {
    return {
      ok: false,
      message: "🤔 Intenta explicar un poco más",
    }
  }

  return {
    ok: true,
    message: "✅ ¡Bien hecho!",
  }
}
