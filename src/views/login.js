import React from "react";
import { postLogin } from "../api/api";
import { navigate } from "@reach/router";
import {
  Card,
  CardFooter,
  CardHeader,
  Container,
  Row,
  Col,
  CardBody,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
    error: null
  };
  render() {
    const { error } = this.state;
    return (
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <CardHeader>Login!</CardHeader>
            <CardBody>
              <Form>
                <small style={{ color: "red" }}>{error}</small>
                <FormGroup>
                  <label htmlFor="#username">Username</label>
                  <FormInput
                    onChange={this.handleUserInput}
                    name="username"
                    id="username"
                    placeholder="username"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#password">Password</label>
                  <FormInput
                    onChange={this.handleUserInput}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </FormGroup>

                <Col style={{ textAlign: "center" }}>
                  <Button onClick={this.validateUserInfo}>Login!</Button>{" "}
                  <Button onClick={this.defaultLogin}>Default Login</Button>
                </Col>
              </Form>
            </CardBody>
            <CardFooter />
          </Card>
        </Col>
      </Row>
    );
  }
  handleUserInput = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };
  validateUserInfo = () => {
    const { username, password } = this.state;
    return postLogin(username, password)
      .then(token => {
        this.props.login(username, token);
        navigate("/", { replace: false });
      })
      .catch(() => {
        this.setState({ error: "incorrect username or password" });
      });
  };
  defaultLogin = () => {
    this.setState({ username: "niceperson", password: "password123" }, () => {
      this.validateUserInfo();
    });
  };
}

export default Login;
