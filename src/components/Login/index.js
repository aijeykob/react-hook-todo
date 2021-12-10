import React from 'react';
import {connect} from "react-redux";
import { Form, Input, Button, Card } from 'antd';

import './index.scss'
import Header from './header'
import { Link } from 'react-router-dom'

const Login = (props) => {
  console.log('props',props)
  const onSubmit = (values) => {
    console.log('Success:', values);
  };

  return (
    <div>
    <Header/>
    <div className='loginForm'>
      <Card>
        <h3>Sign In</h3>
        <p>New to this site? <Link className='registerTxt' to={'/registration'}>Register</Link></p>
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
          Sign In
        </Button>
      </Form.Item>
    </Form>
      </Card>
    </div>
    </div>
  );
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    // logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
