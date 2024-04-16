import React, { memo } from "react";
import "./UserCard.css";

const UserCard = memo(({ firstName, lastName, photoLink, deleteUser, id }) => {
  return (
    <li className="user-card">
      <img
        className=""
        src={`${photoLink}`}
        width="100"
        height="100"
        alt="avatar"
      />
      <p>{`${firstName} ${lastName}`}</p>
      <button onClick={() => deleteUser(id)}></button>
    </li>
  );
});

export default UserCard;
