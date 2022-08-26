import React from 'react'
import Img from '../../assets/contact.jpg'
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import '../../scss/button.scss'
import '../Home/home.scss'
const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-6 text-center'>
          <h2>ContactUs</h2>
          <Form
            className=""
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
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your fullname !",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <TextArea rows={4} maxLength={6} />
            </Form.Item>

            <Form.Item
              className="mt-3"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <button className='my-btn theme-btn'>
                Send
              </button>
            </Form.Item>
          </Form>
        </div>
        <div className='col-lg-6'>
          <img src={Img} alt="Contact Us" width='100%' />
        </div>
      </div>
    </div>

  )
}

export default Contact
