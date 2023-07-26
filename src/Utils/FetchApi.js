import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "c6dbd926a6msh7221910b84ff127p18f144jsn5c991fb97179",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  return response.data;
};
