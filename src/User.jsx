import { useState } from "react";

const users = [
  {
    id: "SPONTAN-001",
    name: "Thoriq",
    gender: "male",
  },
  {
    id: "SPONTAN-002",
    name: "Rijaldo",
    gender: "male",
  },
  {
    id: "SPONTAN-003",
    name: "Awalya",
    gender: "female",
  },
  {
    id: "SPONTAN-004",
    name: "Ayu",
    gender: "female",
  },
  {
    id: "SPONTAN-005",
    name: "Deka",
    gender: "male",
  },
  {
    id: "SPONTAN-006",
    name: "Jacob",
    gender: "male",
  },
];

const UserCard = ({ user }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}>
      <h4>ID: {user.id}</h4>
      <p>Name: {user.name}</p>
      <p>
        Gender:{" "}
        <span style={{ color: user.gender === "male" ? "blue" : "pink" }}>
          {user.gender}
        </span>
      </p>
    </div>
  );
};

const UserList = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
