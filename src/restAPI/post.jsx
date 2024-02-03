import axios from "axios";
import { url } from "./url";
const PostAPI = {
  getPosts: async () => {
    const response = await axios.get(`${url}/blog`);
    return response.data.data;
  },
  getPostById: async (id) => {
    const response = await axios.get(`${url}/blog/find/${id}`);
    return response.data.data;
  },
  plusOneView: async (payload) => {
    const response = await axios.put(
      `${url}/blog/edit/${payload._id}`,
      payload
    );
    return response.data.data;
  },
};

export default PostAPI;