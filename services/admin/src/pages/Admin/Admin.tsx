import { Link } from "react-router-dom";
import { UserCard } from "@packages/shared/src/components/UserCard";

export default function Admin() {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Admin</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        deleniti, deserunt eaque eius eos ex laborum nihil, officia quas, quia
        quidem sed tempore?
      </p>

      <h2>Users</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea excepturi
        magni saepe!
      </p>
      <UserCard id="1" name="Alex" about="Frontend developer" />
    </div>
  );
}
