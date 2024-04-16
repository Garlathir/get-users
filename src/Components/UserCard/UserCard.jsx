import React from "react";
import "./UserCard.css";

const UserCard = ({ firstName, lastName, photoLink, deleteUser }) => {
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
      <button onClick={deleteUser}>Delete</button>
    </li>
  );
};

export default UserCard;
