import { createFileRoute } from "@tanstack/react-router";
import LogoHeader from "../components/LogoHeader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <LogoHeader />
      <p>TOPページ</p>
    </>
  );
}
