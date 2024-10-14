import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="max-w-screen-sm mx-auto min-h-screen flex flex-col bg-gradient-to-bl from-amber-100 to-pink-300">
        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
