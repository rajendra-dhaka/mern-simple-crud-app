import { CardWrapper, UpsertForm } from "../components";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const AddUser = () => {
  const { handleCreate } = useUserContext();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    await handleCreate(values);
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl">
        <CardWrapper>
          <div className="flex flex-col p-4">
            <Link to={"/"} className="mb-6">
              <button>
                <MdArrowBackIos />
              </button>
            </Link>
            <UpsertForm onSubmit={onSubmit} />
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};

export default AddUser;
