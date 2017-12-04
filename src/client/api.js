import axios from 'axios';

const baseURL = 'https://jwsonplaceholder.typicode.com';

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
  },
};

export default api;
