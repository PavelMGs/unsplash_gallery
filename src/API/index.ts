import axios from "axios";

type GetParams = {
  endpoint: string;
  query?: Record<string, string>;
};
const API_HOST = "https://api.unsplash.com/";
const API_KEY =
  "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";

const get = async ({ endpoint, query = {} }: GetParams) => {
  try {
    const url = API_HOST + endpoint;
    query.client_id = API_KEY;
    const { data } = await axios.get(url, { params: query });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const API = {
  get,
};

export default API;
