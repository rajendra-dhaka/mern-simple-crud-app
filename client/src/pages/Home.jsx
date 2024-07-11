import { CardWrapper, Modal, ReactTable, UpsertForm } from "../components";
import { createColumnHelper } from "@tanstack/react-table";
import { MdDelete, MdEditNote } from "react-icons/md";
import { Link } from "react-router-dom";

import { useModal } from "../hooks";
import { useUserContext } from "../context/UserContext.jsx";

const Home = () => {
  const { userData, editData, setEditData, handleDelete, handleUpdate } =
    useUserContext();
  const { isModalOpen, closeModal, openModal } = useModal();
  const columnHelper = createColumnHelper();

  const userColumns = [
    columnHelper.accessor("Name", {
      cell: (info) => info.row.index + 1,
      header: () => <h3 className="text-slate-700 font-bold text-xl">S.no</h3>,
    }),
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: () => <h3 className="text-slate-700 font-bold text-xl">Name</h3>,
    }),
    columnHelper.accessor("email", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <h3 className="text-slate-700 font-bold text-xl">Email</h3>,
    }),
    columnHelper.accessor("_id", {
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => (
        <h3 className="text-slate-700 font-bold text-xl">Unique ID</h3>
      ),
    }),
    columnHelper.accessor("password", {
      header: () => (
        <h3 className="text-slate-700 font-bold text-xl">Password</h3>
      ),
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("actions", {
      header: <h3 className="text-slate-700 font-bold text-xl">Actions</h3>,
      cell: ({ row }) => (
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => handleEdit(row.original)}
            className="bg-green-600 py-1 px-4 rounded-lg hover:bg-green-500"
          >
            <MdEditNote color="white" size={24} />
          </button>
          <button
            onClick={() => handleDelete(row.original._id)}
            className="bg-red-600  py-1 px-4 rounded-lg hover:bg-red-500"
          >
            <MdDelete color="white" size={24} />
          </button>
        </div>
      ),
    }),
  ];

  const handleEdit = async (data) => {
    setEditData(data);
    openModal();
  };

  const onSubmit = async (values) => {
    await handleUpdate(editData._id, values);
    closeModal();
  };

  return (
    <CardWrapper>
      <div className="relative min-h-10">
        <h3 className="absolute left-1/2 transform -translate-x-1/2 text-neutral-700 font-extrabold text-2xl">
          Users Data
        </h3>
        <Link
          to={"/upsert"}
          className="absolute right-0 bg-blue-600 text-neutral-100 py-2 px-4 rounded-md hover:bg-blue-500"
        >
          Add User
        </Link>
      </div>

      <ReactTable data={userData} columns={userColumns} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CardWrapper>
          <UpsertForm onSubmit={onSubmit} editData={editData} />
        </CardWrapper>
      </Modal>
    </CardWrapper>
  );
};

export default Home;
