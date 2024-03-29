import axios from "axios";
const PostAPI = {
  getPosts: async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_SERVER}/blog`
    );
    return response.data.data;
  },
  getPostById: async (id) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_SERVER}/blog/find/${id}`
    );
    return response.data.data;
  },
  plusOneView: async (payload) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_URL_SERVER}/blog/edit/${payload._id}`,
      payload
    );
    return response.data.data;
  },
};

export default PostAPI;
