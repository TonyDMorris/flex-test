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
    password: ""
  };
  render() {
    return (
      <Container className="col-sm-12 col-md-6 col-lg-4 col-md-4">
        <Row>
          <Col>
            <Card>
              <CardHeader>Signup!</CardHeader>
              <CardBody>
                <Form>
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

                  <Col className="row justify-content-md-center">
                    <Button onClick={this.validateUserInfo} className="col-4">
                      Login!
                    </Button>
                  </Col>
                </Form>
              </CardBody>
              <CardFooter />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  handleUserInput = e => {
    console.log("hello");
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };
  validateUserInfo = () => {
    const { username, password } = this.state;
    return postLogin(username, password).then(token => {
      this.props.login(username, token);
      navigate("/", { replace: false });
    });
  };
}

export default Login;
