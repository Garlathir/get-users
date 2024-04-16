import React, { memo, useCallback } from "react";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const UserList = ({ userList, deleteUser }) => {
  const deleteFunction = useCallback((id) => {
    deleteUser(id);
  }, []);
  return (
    <ul className="user-list">
      {userList.map((user) => (
        <UserCard
          key={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          photoLink={user.avatar}
          deleteUser={deleteFunction}
          id={user.id}
        />
      ))}
    </ul>
  );
};

export default UserList;
