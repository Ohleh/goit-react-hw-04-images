import axios from 'axios';

const API_KEY = '27852972-cf3b4cc0dfb2dc5cda9d2c741';
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  key: API_KEY,
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
};

const getImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};

// const ddd = async (query, page) => {
//   const { data } = await axios.get(`?q=${query}&page=${page}`);
//   console.log(data);
//   return data;
// };

// export default { getImages };

const exprt = { getImages };

export default exprt;
