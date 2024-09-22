import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          TOP
        </Link>
        <Link to="/decks" className="[&.active]:font-bold">
          decks
        </Link>
      </div>
      <hr />
      <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg mx-auto min-h-screen flex flex-col bg-gradient-to-bl from-amber-100 to-pink-300">
        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
