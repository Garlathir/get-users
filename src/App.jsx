import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import UserList from "./Components/UserList/UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await axios.get("https://reqres.in/api/users");
    setUsers(response.data.data);
  }

  const deleteUser = (id) => {
    const idx = users.findIndex((el) => el.id === id);
    let copyUsers = [...users.slice(0, idx), ...users.slice(idx + 1)];
    setUsers(copyUsers);
  };

  return (
    <div className="App">
      <UserList userArray={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
