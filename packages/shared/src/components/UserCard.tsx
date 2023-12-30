import { Link } from "react-router-dom";

interface IUserCardProps {
  id: string;
  name: string;
  about: string;
}

export function UserCard({ name, about }: IUserCardProps) {
  return (
    <Link
      to="#"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        padding: 16,
        minWidth: 200,
        border: "1px solid #373737",
        borderRadius: 8,
        textDecoration: "none",
        color: "#2e3d65",
      }}
    >
      <h3>{name}</h3>
      <p>{about}</p>
    </Link>
  );
}
