import React, { Component } from "react";
import validate from "validate.js";
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
  FormGroup
} from "shards-react";

class Signup extends Component {
  state = {
    name: null,
    username: null,
    email: null,
    password: null
  };
  render() {
    const { name, username, email, password } = this.state;
    return (
      <Container className="col-sm-12 col-md-6 col-lg-4 col-md-4">
        <Row>
          <Col>
            <Card>
              <CardHeader>Signup!</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <label htmlFor="#name">name</label>
                    <FormInput valid={name} id="#name" placeholder="name" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#username">Username</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
                      valid={username}
                      id="#username"
                      placeholder="Username"
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="#E-mail">Username</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
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
                      valid={null}
                      type="password"
                      id="#password"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#avatar-url">Username</label>
                    <FormInput
                      onChange={e => {
                        this.checkInput(e.target);
                      }}
                      valid={null}
                      id="#E-avatar-url"
                      placeholder="avatar-url"
                    />
                  </FormGroup>
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
    const constraints = {
      username: {
        presence: true,
        exclusion: {
          within: ["nicklas"],
          message: "'%{value}' is not allowed"
        }
      },
      password: {
        presence: true,
        length: {
          minimum: 6,
          message: "must be at least 6 characters"
        }
      }
    };
    if (!validate(target.val, constraints)) {
    }
  };
}

export default Signup;
