import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const api = {
  posts: {
    async fetchPosts(page = 1) {
      const url = `${baseURL}/posts?_page=${page}`;
      let result = null;

      try {
        const response = await axios.get(url);
        result = response.data;
      } catch (error) {
        result = { error: error.message };
      }

      return result;
    },

    async fetchSingle(id) {
      const url = `${baseURL}/posts/${id}`;
      let result;

      try {
        const response = await axios.get(url);
        result = response.data;
      } catch (error) {
        result = { error: error.message };
      }

      return result;
    },

    async fetchComments(id) {
      const url = `${baseURL}/posts/${id}/comments`;
      let result;

      try {
        const response = await axios.get(url);
        result = response.data;
      } catch (error) {
        result = { error: error.message };
      }

      return result;
    },
  },
};

export default api;
