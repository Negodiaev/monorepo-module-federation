import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/Router";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element is not found");
}

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
