import axios from 'axios';
import {UserResponse} from '../models/user';
import {BASE_URL, USERS} from '../utils/constants';

const userMiddleware = {
  getUsers(): Promise<UserResponse> {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}${USERS}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },
};

export default userMiddleware;
