import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/components/App";
import { ShopLazy } from "@/pages/Shop/ShopLazy";
import { SecondLazy } from "@/pages/Second/SecondLazy";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback="Loading...">
            <ShopLazy />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback="Loading...">
            <SecondLazy />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
