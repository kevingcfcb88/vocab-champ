type Props = {
  label: string
  onNext: () => void
}

export function PlaceholderRound({ label, onNext }: Props) {
  return (
    <div>
      <p>{label} (coming soon)</p>
      <button onClick={onNext}>Continue</button>
    </div>
  )
}
