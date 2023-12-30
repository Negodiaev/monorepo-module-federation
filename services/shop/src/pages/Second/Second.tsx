import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { UserCard } from "@packages/shared/src/components/UserCard";

export default function Second() {
  return (
    <div>
      <Link to={shopRoutes.main}>Back</Link>
      <h2>Users</h2>
      <p style={{ color: "blueviolet" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
        laboriosam provident unde.
      </p>
      <UserCard id="1" name="Alex" about="Tennis player" />
    </div>
  );
}
