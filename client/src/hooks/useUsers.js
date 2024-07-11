import { useState, useEffect } from "react";
import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../services/userServices";

const useUsers = () => {
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

  return {
    userData,
    editData,
    setEditData,
    handleDelete,
    handleUpdate,
    handleCreate,
  };
};

export default useUsers;
