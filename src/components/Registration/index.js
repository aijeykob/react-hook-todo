import React from 'react';
import {connect} from "react-redux";
import { Button, Card, Form, Input, Layout, Menu } from 'antd'

import {submitRegistration} from 'actions'

import './index.scss'
import Header from '../Login/header'
import { Link } from 'react-router-dom'

const Registration = (props) => {
  const onSubmit = (values) => {
    console.log('Success:', values);
    props.submitRegistration(values)
  };

    return (
      <div>
          <Header/>
          <div className='loginForm'>
              <Card>
                  <h3>Registration</h3>
                  <p>New to this site? <Link className='registerTxt' to={'/login'}>Login</Link></p>
                  <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onSubmit}
                    autoComplete="off"
                  >
                      <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                      >
                          <Input />
                      </Form.Item>

                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                      >
                          <Input.Password />
                      </Form.Item>

                      <Form.Item
                        // wrapperCol need for position element
                        wrapperCol={{}}
                      >
                          <Button type="primary" htmlType="submit">
                              Register
                          </Button>
                      </Form.Item>
                  </Form>
              </Card>
          </div>
      </div>)
}

const mapStateToProps = state => ({
    // currentUser: state.currentUser
});

const mapDispatchToProps = {
  submitRegistration
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
