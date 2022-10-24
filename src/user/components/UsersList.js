import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UI/Card";
import "./UsersList.css";

const UsersList = ({ users }) => {
  if (users.length === 0) {
    // user가 없음
    return (
      <div className="center">
        <Card>
          <h2>No Users Found!</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
