export function noEnglishZonePrompt(
  word: string,
  userAnswer: string
) {
  return `
You are checking a child's answer.

Word: "${word}"
Child explanation in spanish: "${userAnswer}"

Reply ONLY with:
- "CORRECT" if the explanation shows understanding
- "INCORRECT" otherwise
`
}

export function sentenceMasterPrompt(
  word: string,
  sentence: string
) {
  return `
Check if the sentence correctly uses the word.

Word: "${word}"
Sentence: "${sentence}"

Reply ONLY with:
- "CORRECT"
- "INCORRECT"
`
}
