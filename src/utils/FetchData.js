import Axios from "axios"

export const getData = async (url) => {
  const res = await Axios.get(url);
  return res;
}