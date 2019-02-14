import axios from 'axios';

export default (endpoint, value = '') => {
  let url = '';
  switch(endpoint) {
    case 'random-all': {
      url = 'https://dog.ceo/api/breeds/image/random';
      break;
    }
    case 'random-breed': {
      url = `https://dog.ceo/api/breed/${value}/images/random`;
      break;
    }
    default: {
      url = 'https://dog.ceo/api/breeds/image/random';
      break;
    }
  }

  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: url
    })
    .then(res => resolve(res.data))
    .catch(err => reject(err));
  });
}