import { createContext, useContext, useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../services/userServices";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUserData(users);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUserData(null); /* To Get skeleton*/
    const users = await getUsers();
    setUserData(users);
  };

  const handleCreate = async (values) => {
    await createUser(values);
    const users = await getUsers();
    setUserData(users);
  };

  const handleUpdate = async (id, values) => {
    await updateUser(id, values);
    setUserData(null); /* To Get skeleton*/
    const users = await getUsers();
    setUserData(users);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        editData,
        setEditData,
        handleDelete,
        handleUpdate,
        handleCreate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserProvider };
