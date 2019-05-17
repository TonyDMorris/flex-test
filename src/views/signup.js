import React, { Component } from "react";
import axios from "axios";
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
  Button,
  Popover,
  PopoverBody
} from "shards-react";

class Signup extends Component {
  state = {
    toggles: { name: false, username: false, email: false, password: false },
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
    avatarUrl: "",
    error: false
  };
  render() {
    const { error, highligthing } = this.state;
    const { name, username, email, password } = highligthing;

    return (
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <CardHeader>Signup!</CardHeader>
            <CardBody>
              <small style={{ color: "red" }}>{error}</small>
              <Form>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput
                    onBlur={this.handlePopOver}
                    onFocus={this.handlePopOver}
                    onChange={e => {
                      this.checkInput(e.target);
                    }}
                    name="name"
                    invalid={name === null ? null : !name}
                    valid={name}
                    id="name"
                    placeholder="Name"
                  />
                  <Popover
                    placement="left"
                    target="#name"
                    open={this.state.toggles.name}
                  >
                    <PopoverBody>
                      Your name must be between 4 - 14 characters and not
                      include any numbers or spaces.
                    </PopoverBody>
                  </Popover>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#username">Username</label>
                  <FormInput
                    onBlur={this.handlePopOver}
                    onFocus={this.handlePopOver}
                    onChange={e => {
                      this.checkInput(e.target);
                    }}
                    name="username"
                    invalid={username === null ? null : !username}
                    valid={username}
                    id="username"
                    ref="username"
                    placeholder="Username"
                  />
                  <Popover
                    placement="left"
                    target="#username"
                    open={this.state.toggles.username}
                  >
                    <PopoverBody>
                      Your username is your unique identifier and must be
                      between 5 - 15 characters long and contain no spaces or
                      spectial characters E.g.!"%{" "}
                    </PopoverBody>
                  </Popover>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="#E-mail">Email</label>
                  <FormInput
                    onBlur={this.handlePopOver}
                    onFocus={this.handlePopOver}
                    onChange={e => {
                      this.checkInput(e.target);
                    }}
                    name="email"
                    invalid={email === null ? null : !email}
                    valid={email}
                    id="email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <small>Optional</small>
                  <Popover
                    placement="left"
                    target="#email"
                    open={this.state.toggles.email}
                  >
                    <PopoverBody>
                      Email addresses are for promotional purposes only and are
                      not required to create an account.
                    </PopoverBody>
                  </Popover>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#avatar-url">Avatar url</label>
                  <FormInput
                    onChange={e => {
                      this.checkInput(e.target);
                    }}
                    name="avatarUrl"
                    id="avatar-url"
                    placeholder="Avatar-url"
                  />
                  <small>optional</small>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#password">Password</label>
                  <FormInput
                    onBlur={this.handlePopOver}
                    onFocus={this.handlePopOver}
                    onChange={e => {
                      this.checkInput(e.target);
                    }}
                    name="password"
                    invalid={password === null ? null : !password}
                    valid={password}
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                  <Popover
                    placement="left"
                    target="#password"
                    open={this.state.toggles.password}
                  >
                    <PopoverBody>
                      Your password must be atleast 7 characters long, contain a
                      number, and contain no spaces.
                    </PopoverBody>
                  </Popover>
                </FormGroup>
                <Row className="row justify-content-md-center">
                  <Col style={{ textAlign: "center" }}>
                    <Button onClick={this.submitUser} className="col-4">
                      Sign up!
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter />
          </Card>
        </Col>
      </Row>
    );
  }
  handlePopOver = e => {
    const { name } = e.target;
    this.setState({
      toggles: { [name]: !this.state.toggles[name] }
    });
  };
  checkInput = target => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const { name, value } = target;
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
        value.length > 6 && /\d\w/.test(value) && !/\s/.test(value)
          ? (newHighlighting[name] = true)
          : (newHighlighting[name] = false);
        break;
      default:
        return;
    }

    this.setState({ highligthing: newHighlighting });
    this.state.highligthing[name]
      ? this.setState({ [name]: value })
      : this.setState({ [name]: "" });
  };
  submitUser = () => {
    const { name, username, avatarUrl, password } = this.state;
    if (name && username && password) {
      return axios
        .post("https://pure-falls-39051.herokuapp.com/signup", {
          password: password,
          username: username.toLowerCase(),
          name: name,
          avatar_url: avatarUrl
            ? avatarUrl
            : "http://chittagongit.com/images/default-profile-icon/default-profile-icon-24.jpg"
        })
        .then(({ data }) => {
          navigate("/login", { replace: false });
        })
        .catch(() => {
          this.setState({ error: "username already exists" });
        });
    } else {
      this.setState({
        error: "Name Username and password fields are mandatory"
      });
    }
  };
}
export default Signup;
