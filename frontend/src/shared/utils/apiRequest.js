import axios from 'axios';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function apiRequest(method, endpoint, data, params) {
  const headers = {
    'Content-Type': 'application/json'
  };

  return new Promise(function (resolve, reject) {
    axios({
      url: apiUrl + endpoint,
      method: method,
      headers: headers,
      params: params,
      data: data
    }).then(function (response) {
      resolve(response.data);
    }, function (error) {
      console.log(error);
      reject(error.response.data);
    });
  });
}

export default apiRequest;
