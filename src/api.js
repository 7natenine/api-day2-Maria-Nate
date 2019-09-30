const BASE_URL = 'https://thinkful-list-api.herokuapp.com/maria-nate';

const getItems = function () {
  api.getItems {
    .then(res => res.json())
    .then(res => console.log(res));
  });
  return Promise.resolve('A successful response!');
};

export default {
  getItems
};