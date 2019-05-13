import axios from "axios";

export const postLogin = (username, password) => {
  return axios
    .post(`https://pure-falls-39051.herokuapp.com/login`, {
      username,
      password
    })
    .then(({ data }) => {
      return data;
    });
};
