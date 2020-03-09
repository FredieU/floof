import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api';

export default (endpoint, value = '') => {
  let url = '';
  switch (endpoint) {
    case 'breed-list': {
      url = `${BASE_URL}/breeds/list/all`;
      break;
    }
    case 'random-all': {
      url = `${BASE_URL}/breeds/image/random`;
      break;
    }
    case 'random-breed': {
      url = `${BASE_URL}/breed/${value}/images/random`;
      break;
    }
    default: {
      url = `${BASE_URL}/breeds/image/random`;
      break;
    }
  }

  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: url,
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};
