const BASE_URL = 'https://thinkful-list-api.herokuapp.com/maria-nate';

const getItems = function (BASE_URL) {
  return fetch(`${BASE_URL}/items`); 
};




export default {
  getItems
};