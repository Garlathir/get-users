import React, { memo, useCallback, useMemo } from "react";
import UserCard from "../UserCard/UserCard";

const UserList = ({ userArray, deleteUser }) => {
  return (
    <ul>
      {userArray.map((user) => (
        <UserCard
          key={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          photoLink={user.avatar}
          deleteUser={() => deleteUser(user.id)}
        />
      ))}
    </ul>
  );
};

export default UserList;
