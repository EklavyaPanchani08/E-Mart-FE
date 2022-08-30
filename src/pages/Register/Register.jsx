import { React } from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Radio, message } from "antd";
import "antd/dist/antd.css";
import Img from "../../assets/signup.jpg";
import "./register.css";
import "../Home/home.scss";
import "../../scss/comman.scss";
import "../../scss/button.scss";
import { Link } from "react-router-dom";
import { CREATE_USER } from "./RegisterMutation";
import { useMutation } from '@apollo/client';

const Register = () => {
  // All States
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    conformpassword: "",
    gender: "",
  });
  console.log("🚀 ~ file: Register.jsx ~ line 23 ~ Register ~ inputData", inputData)

  const [createUser, { loading }] = useMutation(CREATE_USER);

  const inputDataStore = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };
  const submitHandle = (e) => {
    console.log("e", e);
    debugger
    e.preventDefault();
    if (
      inputData.firstname == "" &&
      inputData.lastname == "" &&
      inputData.email == "" &&
      inputData.password == "" &&
      inputData.conformPassword == ""
    ) {
      message.error("Please Enter All Filed");
    } else {
      createUser({
        variable: {
          input: {
            firstName: inputData?.firstname,
            lastName: inputData?.lastname,
            email: inputData?.email,
            password: inputData?.password,
            gender: inputData?.gender,
          }
        },
      })
        .then(({ data }) => {
          console.log("🚀 ~ file: Register.jsx ~ line 51 ~ .then ~ data", data)
          message.success("Account Successfully Added");
          setInputData({ ...inputData, firstname: "", lastname: "", email: "", password: "", conformPassword: "" });
        })
        .catch((error) => {
          console.log("🚀 ~ file: Register.jsx ~ line 60 ~ submitHandle ~ error", error.message)
          console.log("++++++++++++++++")
          message.error(error.message);
        });
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
              name="lastname"
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
                {
                  pattern: /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    "Password must be 8 characters & include letters & numbers",
                },
              ]}
            >
              <Input.Password
                name="password"
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
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
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
              <Radio.Group name="gender">
                <Radio
                  name="male"
                  value={"male"}
                  onChange={(e) => {
                    inputDataStore(e.target.name, e.target.value);
                  }}
                >
                  male
                </Radio>
                <Radio
                  name="female"
                  value={"female"}
                  onChange={(e) => {
                    inputDataStore(e.target.name, e.target.value);
                  }}
                >
                  female
                </Radio>
                <Radio
                  name="other"
                  value={"other"}
                  onChange={(e) => {
                    inputDataStore(e.target.name, e.target.value);
                  }}
                >
                  other
                </Radio>
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
                onClick={(e) => submitHandle(e)}
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
