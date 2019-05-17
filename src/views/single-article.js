import React from "react";
import ArticleMain from "../components/article-main";
import { Row, Col } from "shards-react";
const SingleArticle = ({ article_id, loggedInUser, token }) => {
  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <ArticleMain
          token={token}
          loggedInUser={loggedInUser}
          article_id={article_id}
        />
      </Col>
    </Row>
  );
};

export default SingleArticle;
