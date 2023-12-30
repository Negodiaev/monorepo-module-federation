import { NavLink, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRoutes } from "@packages/shared/src/routes/shop";
// import Layout from "@packages/shared/src/components/Layout";

export function App() {
  return (
    <div data-test-id="App">
      {/*<Layout></Layout>*/}
      <h1>Main page</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={adminRoutes.admin}>Admin</NavLink>
        </li>
        <li>
          <NavLink to={shopRoutes.main}>Shop</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
