import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:8000/api";

const apiClient = async (
  endpoint,
  { method = "GET", body = null, params = null } = {}
) => {
  try {
    const response = await axios({
      url: `${API_URL}${endpoint}`,
      method,
      data: body,
      params,
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const handleApiError = (error) => {
  console.log(error);
  if (error.code === "ECONNABORTED") {
    toast.error(
      "Request timed out. Please check your internet connection and try again."
    );
  } else {
    toast.error(error?.response?.data?.message || "Something went wrong!!");
  }
};

export default apiClient;
