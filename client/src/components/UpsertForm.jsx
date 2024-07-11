import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";
import { useUserContext } from "../context/UserContext";

const UpsertForm = ({ onSubmit }) => {
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const { editData } = useUserContext();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (editData) {
      reset({
        name: editData.name,
        email: editData.email,
        password: editData.password,
        confirmPassword: editData.confirmPassword,
      });
    }
  }, [editData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1 mb-4">
        <label
          htmlFor="name"
          className="text-base text-neutral-700 font-medium "
        >
          Name:
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="text-xl p-2 outline-none rounded-md text-neutral-500 placeholder-neutral-300"
          placeholder="Enter yor name"
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label
          htmlFor="email"
          className="text-base text-neutral-700 font-medium "
        >
          Email:
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="text-xl p-2 outline-none rounded-md text-neutral-500 placeholder-neutral-300"
          placeholder="Enter yor email"
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label
          htmlFor="password"
          className="text-base text-neutral-700 font-medium "
        >
          Password:
        </label>
        <div className="flex items-center gap-4">
          <input
            {...register("password")}
            type={showPasswords.password ? "text" : "password"}
            id="password"
            className="text-xl p-2 outline-none rounded-md text-neutral-500 placeholder-neutral-300 w-full"
            placeholder="Enter yor password"
          />
          <span
            onClick={() =>
              setShowPasswords((prev) => ({
                ...prev,
                password: !prev.password,
              }))
            }
            className=" cursor-pointer text-xl text-blue-600"
          >
            {showPasswords.password ? <LiaEyeSolid /> : <LiaEyeSlash />}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label
          htmlFor="confirmpassword"
          className="text-base text-neutral-700 font-medium "
        >
          Confirm Password:
        </label>
        <div className="flex items-center gap-4">
          <input
            {...register("confirmPassword")}
            type={showPasswords.confirmPassword ? "text" : "password"}
            id="confirmpassword"
            className="text-xl p-2 outline-none rounded-md text-neutral-500 placeholder-neutral-300 w-full"
            placeholder="Confirm your password"
          />
          <span
            onClick={() =>
              setShowPasswords((prev) => ({
                ...prev,
                confirmPassword: !prev.confirmPassword,
              }))
            }
            className=" cursor-pointer text-xl text-blue-600"
          >
            {showPasswords.confirmPassword ? <LiaEyeSolid /> : <LiaEyeSlash />}
          </span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          className="bg-blue-600 text-neutral-100 py-2 px-4 rounded-md hover:bg-blue-500"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default UpsertForm;
