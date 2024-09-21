import { createFileRoute } from '@tanstack/react-router'
import DecksIds from '../DecksIds'

export const Route = createFileRoute('/decks_id')({
  component: DecksId,
})

function DecksId() {
  return <DecksIds />
}
