import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "@reach/router";
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
  Button,
  Popover,
  PopoverBody,
  PopoverHeader
} from "shards-react";

class Signup extends Component {
  state = {
    toggles: { name: true, username: false, email: false, password: false },
    highligthing: {
      name: null,
      username: null,
      email: null,
      password: null
    },
    name: "",
    username: "",
    email: "",
    password: "",
    avatarUrl: ""
  };
  render() {
    const { name, username, email, password } = this.state.highligthing;

    return (
      <Container className="col-sm-12 col-md-6 col-lg-4 col-md-4">
        <Row>
          <Col>
            <Card>
              <CardHeader>Signup!</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <label htmlFor="#name">Name</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
                      name="name"
                      invalid={name === null ? null : !name}
                      valid={name}
                      id="#name"
                      placeholder="Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#username">Username</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
                      name="username"
                      invalid={username === null ? null : !username}
                      valid={username}
                      id="#username"
                      placeholder="Username"
                    />
                    <Popover
                      placement="left"
                      target="#username"
                      open={this.state.toggles.name}
                    >
                      <PopoverHeader>info</PopoverHeader>
                      <PopoverBody>somehting something</PopoverBody>
                    </Popover>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="#E-mail">Email</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
                      name="email"
                      invalid={email === null ? null : !email}
                      valid={email}
                      id="#E-mail"
                      type="email"
                      placeholder="E-mail"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
                      name="password"
                      invalid={password === null ? null : !password}
                      valid={password}
                      type="password"
                      id="#password"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#avatar-url">Avatar url</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
                      name="avatarUrl"
                      id="#avatar-url"
                      placeholder="Avatar-url"
                    />
                  </FormGroup>
                  <Col className="row justify-content-md-center">
                    <Button onClick={this.submitUser} className="col-4">
                      Sign up!
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
  checkInput = target => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { value } = target;

    const { name } = target;
    let newHighlighting = this.state.highligthing;
    switch (name) {
      case "name":
        value.length > 3 && value.length < 15 && !/[0-9\s]/.test(value)
          ? (newHighlighting[name] = true)
          : (newHighlighting[name] = false);

        break;
      case "username":
        value.length > 5 && value.length < 15 && !/[\W\s]/.test(value)
          ? (newHighlighting[name] = true)
          : (newHighlighting[name] = false);

        break;
      case "email":
        emailRegex.test(value)
          ? (newHighlighting[name] = true)
          : (newHighlighting[name] = false);

        break;
      case "password":
        console.log(value);
        value.length > 6 && /\d\w/.test(value) && !/\s/.test(value)
          ? (newHighlighting[name] = true)
          : (newHighlighting[name] = false);

        break;
    }

    this.setState({ highligthing: newHighlighting });
    this.state.highligthing[name]
      ? this.setState({ [name]: value })
      : this.setState({ [name]: "" });
  };
  submitUser = () => {
    const { name, username, email, avatarUrl, password } = this.state;
    if ((name, username, password)) {
      return axios
        .post("https://pure-falls-39051.herokuapp.com/signup", {
          password: password,
          username: username,
          name: name,
          avatar_url: avatarUrl
            ? avatarUrl
            : "http://chittagongit.com/images/default-profile-icon/default-profile-icon-24.jpg"
        })
        .then(({ data }) => {
          console.log(data);
          if (data.error) return <Redirect from="/signup" to="/home" />;
        });
    }
  };
}

export default Signup;
