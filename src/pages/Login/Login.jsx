import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import Img from '../../assets/login.jpg'
import './login.css'
import '../../scss/comman.scss'
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <div className='row align-items-center justify-content-between'>
        <div className='col-lg-6'>
          <img src={Img} className='login-img' alt="" />
        </div>
        <div className='col-lg-6'>
          <Form
            className='form'
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox className='mb-2'>Remember me</Checkbox>
              <br />
              <Link to="/regiter">You haven't account ?</Link>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <button className='my-btn theme-btn' type="primary" htmlType="submit">
                Submit
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
