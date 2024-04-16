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
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const userList = useMemo(() => [...users], [users]);

  return (
    <div className="App">
      <UserList userList={userList} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
