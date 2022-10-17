import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import "antd/dist/antd.css";
import Img from "../../assets/signup.jpg";
import "./register.css";
import "../Home/home.scss";
import "../../scss/comman.scss";
import "../../scss/button.scss";
import { Link } from "react-router-dom";
import { CREATE_USER } from "./RegisterMutation";
import { gql, useMutation } from "@apollo/client";

const Register = () => {
  // All States
  const [inputData, setInputData] = useState({});
  console.log(
    "🚀 ~ file: Register.jsx ~ line 11 ~ Register ~ inputData",
    inputData
  );

  const inputDataStore = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [userRegister, { data, error, loading }] = useMutation(CREATE_USER);
  console.log("🚀 ~ file: Register.jsx ~ line 33 ~ Register ~ error", error)
  console.log("🚀 ~ file: Register.jsx ~ line 33 ~ Register ~ data", data)
  const submitHandle = () => {
    debugger;
    userRegister({
      variable: {
        createUser: {
          firstName : inputData.firstname,
          lastName: inputData.lastname,
          email : inputData.email,
          password : inputData.pasword,
          gender : inputData.gender,
        },
      },
    });
  };
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
              <Input
                name="firstname"
                onChange={(e) => {
                  inputDataStore(e.target.name, e.target.value);
                }}
              />
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
              <Input
                name="lastname"
                onChange={(e) => {
                  inputDataStore(e.target.name, e.target.value);
                }}
              />
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
              <Input
                name="email"
                type="email"
                onChange={(e) => {
                  inputDataStore(e.target.name, e.target.value);
                }}
              />
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
              <Input.Password
                name="pasword"
                onChange={(e) => {
                  inputDataStore(e.target.name, e.target.value);
                }}
              />
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
              <Input.Password
                name="conformpassword"
                onChange={(e) => {
                  inputDataStore(e.target.name, e.target.value);
                }}
              />
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

            <Form.Item
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
              <Radio.Group name="gender" onChange={(e)=>inputDataStore("gender", e.target.value)}>
                <Radio value={"male"}>Male</Radio>
                <Radio value={"female"}>Female</Radio>
                <Radio value={"other"}>Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              className="mt-3"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Link to="/login">You have already account ?</Link>
              <br />
              <button
                className="my-btn theme-btn mt-2"
                onClick={() => submitHandle()}
              >
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
