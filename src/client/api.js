import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const api = {
  posts: {
    async fetchPosts(page = 1) {
      const url = `${baseURL}/posts?_page=${page}`;

      const response = await axios.get(url);
      const posts = response.data;

      return posts;
    },
  },
};

export default api;
