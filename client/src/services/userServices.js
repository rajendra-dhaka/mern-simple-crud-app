import apiClient from "./apiClient";
import toast from "react-hot-toast";

export const getUsers = async () => {
  return await apiClient("/user");
};

export const deleteUser = async (id) => {
  const data = await apiClient(`/user/${id}`, { method: "DELETE" });
  toast.success("User Deleted successfully");
  return data;
};

export const createUser = async (values) => {
  const data = await apiClient("/user", { method: "POST", body: values });
  toast.success("User Created successfully");
  return data;
};

export const updateUser = async (id, values) => {
  const data = await apiClient(`/user/${id}`, { method: "PUT", body: values });
  toast.success("User Updated successfully");
  return data;
};
