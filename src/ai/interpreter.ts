export type InterpretationResult = "PASS" | "FAIL" | "PARTIAL"

export async function interpretAnswer(_: {
  roundType: string
  word: string
  userInput: string
}): Promise<InterpretationResult> {
  // AI will live here later
  return "PASS"
}
