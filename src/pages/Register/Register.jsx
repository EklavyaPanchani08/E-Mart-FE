import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import Img from "../../assets/signup.jpg";
import "./register.css";
import "../Home/home.scss";
import '../../scss/comman.scss'
import "../../scss/button.scss";
import { Link } from "react-router-dom";

const Register = () => {
  // All States
  const [inputData, setInputData] = useState({});
  console.log("🚀 ~ file: Register.jsx ~ line 11 ~ Register ~ inputData", inputData)

  const inputDataStore = (name,value) => {
    setInputData({ ...inputData, [name]: value });
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const submitHandle = () => {
    if(inputData.pasword.length <= 8){
      document.getElementById('errorName').innerHTML = "Enter passowrd up 8 char"
    }
    else if(inputData.pasword === inputData.conformpasword){
      console.log("=====")
    }
    else{
        inputData({})
    }
  }
  return (
    <div className="container">
      <div className="row justify-contact-center align-item-center mt-5">
        <div className="col-lg-6">
          <img className="register-img" src={Img} alt="Register Now" />
        </div>
        <div className="col-lg-6">
          <Form
            className="form"
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
              label="First Name"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Please input your Firstname!",
                },
              ]}
            >
              <Input name="firstname" onChange={(e) => { inputDataStore( e.target.name ,e.target.value) }} />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="Lastname"
              rules={[
                {
                  required: true,
                  message: "Please input your Lastname!",
                },
              ]}
            >
              <Input name="lastname" onChange={(e) => { inputDataStore(e.target.name , e.target.value) }} />
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
              <Input name="email" type="email" onChange={(e) => { inputDataStore(e.target.name , e.target.value) }} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password name="pasword" onChange={(e) => { inputDataStore(e.target.name , e.target.value) }} />
              <p id="errorName"></p>
            </Form.Item>

            <Form.Item
              label="Conform Password"
              name="conformPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your conform password!",
                },
              ]}
            >
              <Input.Password name="conformpassword" onChange={(e) => { inputDataStore(e.target.name , e.target.value) }} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* <Form.Item
              name="Gender"
              rules={[
                {
                  required: true,
                  message: "Please input your gender !",
                },
              ]}
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox name="male" onChange={(e) => { inputDataStore(e.target.name , e.target.checked) }}>Male</Checkbox>
              <Checkbox name="female" onChange={(e) => { inputDataStore(e.target.name , e.target.checked)}}>Female</Checkbox>
              <Checkbox name="other" onChange={(e) => { inputDataStore(e.target.name , e.target.checked)}}>Other</Checkbox>
            </Form.Item> */}

            <Form.Item
              className="mt-3"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Link to="/login">You have already account ?</Link>
              <br />
              <button className='my-btn theme-btn mt-2' onClick={()=> submitHandle()}>
                Sign Up
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
