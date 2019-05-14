import axios from "axios";
const URL = "https://pure-falls-39051.herokuapp.com";

export const postLogin = (username, password) => {
  return axios
    .post(`${URL}/login`, {
      username,
      password
    })
    .then(({ data }) => {
      return data;
    });
};
export const postArticle = (article, token) => {
  const config = {
    headers: { Authorization: "bearer " + token }
  };
  return axios
    .post(`${URL}/api/articles`, article, config)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getUserInfo = username => {
  return axios.get(`${URL}/api/users/${username}`).then(({ data }) => {
    return data;
  });
};

export const getArticle = article_id => {
  return axios.get(`${URL}/api/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticles = config => {
  return axios
    .get(`https://pure-falls-39051.herokuapp.com/api/articles`, {
      params: config
    })
    .then(({ data }) => {
      return data.articles;
    });
};
