export function speak(text: string) {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = "en-US"
  utterance.rate = 0.7 // slightly slower for kids
  utterance.pitch = 1
  window.speechSynthesis.cancel() // stop previous speech
  window.speechSynthesis.speak(utterance)
}
