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
      console.log(data);
      return data.articles ? data.articles : [data.article];
    });
};

export const patchVotes = (id, isComment, n, token) => {
  const config = {
    headers: { Authorization: "bearer " + token }
  };
  const selector = { true: "comments", false: "articles" };
  return axios
    .patch(`${URL}/api/${selector[isComment]}/${id}`, { inc_votes: n }, config)
    .then(({ data }) => {
      return data.comment ? data.comment : data.article;
    });
};

export const submitComment = (comment, token) => {
  const config = {
    headers: { Authorization: "bearer " + token }
  };
  return axios
    .post(`${URL}/api/articles/${comment.article_id}/comments`, comment, config)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteArticle = (article_id, token) => {
  const config = {
    headers: { Authorization: "bearer " + token }
  };
  return axios.delete(`${URL}/api/articles/${article_id}`, config);
};
export const deleteComment = (comment_id, token) => {
  const config = {
    headers: { Authorization: "bearer " + token }
  };
  return axios.delete(`${URL}/api/comments/${comment_id}`, config);
};

export const getTopics = () => {
  return axios.get(`${URL}/api/topics`).then(({ data }) => data.topics);
};

export const postTopic = (topic, description, token) => {
  const config = {
    headers: { Authorization: "bearer " + token }
  };
  const newTopic = { slug: topic, description };
  return axios
    .post(`${URL}/api/topics`, newTopic, config)
    .then(({ data }) => {});
};

export const getArticleComments = article_id => {
  return axios
    .get(`${URL}/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
