import { useUsers } from "@/context/user-context";

export default function Users() {
  const { users } = useUsers();

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}
