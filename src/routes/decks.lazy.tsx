import { createLazyFileRoute } from "@tanstack/react-router";
import Decks from "../Decks";

export const Route = createLazyFileRoute("/decks")({
  component: DecksComponent,
});

function DecksComponent() {
  return <Decks />;
}
