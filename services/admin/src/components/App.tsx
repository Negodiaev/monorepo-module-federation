import { Outlet } from "react-router-dom";
// import { deepMerge } from "@packages/shared/src/utils/deepMerge";

export function App() {
  return (
    <div>
      <h1>ADMIN module</h1>
      <Outlet />
    </div>
  );
}
