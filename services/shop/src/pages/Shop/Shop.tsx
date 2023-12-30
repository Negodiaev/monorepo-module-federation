import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

export default function Shop() {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Shop</h1>
      <p>
        <Link to={shopRoutes.second}>Second shop page</Link>
      </p>
    </div>
  );
}
