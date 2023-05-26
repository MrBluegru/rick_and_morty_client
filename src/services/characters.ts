import axios from "axios";
const CORS = process.env.REACT_APP_CORS;

export const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${CORS}/characters/all`);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};
