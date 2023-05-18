import axios from "axios";

export const getChar = async () => {
  try {
    const response = await axios.get("http://189.1.158.241:8080/api");
    // Handle the response data
    return response.data;
  } catch (error) {
    // Handle the error
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};
