import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import Img from "../assets/signup.jpg";
import "../scss/register.css";
import "../scss/home.scss";
import "../scss/button.scss";

const Register = () => {
  // All States
  const [inputData, setInputData] = useState({});
  console.log("🚀 ~ file: Register.jsx ~ line 11 ~ Register ~ inputData", inputData)

  const inputDataStore = (value, name) => {
    setInputData({ ...inputData, [name]: value });
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const submitHandle = () => {

  }
  return (
    // <div className="container">
    //   <div className="row align-items-center justify-content-between">
    //     <div className="col-lg-6">
    //       <img className="register-img" src={Img} alt="" />
    //     </div>
    //     <div className="col-lg-6 align-align-items-center">
    //       <div className="mb-2">
    //         <label htmlFor="staticEmail" className=" col-form-label">
    //           Full Name
    //         </label>
    //         <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='fullName' type="text" className="form-control all-input" />
    //       </div>
    //       <div className="mb-2">
    //         <label htmlFor="staticEmail" className=" col-form-label">
    //           User Name
    //         </label>
    //         <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='userName' type="text" className="form-control all-input" />
    //       </div>
    //       <div className="mb-2">
    //         <label htmlFor="staticEmail" className=" col-form-label">
    //           Mobile No.
    //         </label>
    //         <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='mobile' type="number" className="form-control all-input" />
    //       </div>
    //       <div className="mb-2">
    //         <label htmlFor="staticEmail" className=" col-form-label">
    //           Email
    //         </label>
    //         <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='email' type="email" className="form-control all-input" />
    //       </div>
    //       <div className="mb-2">
    //         <label htmlFor="inputPassword" className=" col-form-label">
    //           Password
    //         </label>
    //         <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='password' type="password" className="form-control all-input" />
    //       </div>
    //       <div className="mb-2">
    //         <label htmlFor="inputPassword" className=" col-form-label">
    //           Conform Password
    //         </label>
    //         <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='conform password' type="password" className="form-control all-input" />
    //       </div>
    //       <div className="mb-1 d-flex">
    //         <div className="form-check me-2">
    //           <input onChange={(e)=>{inputDataStore(e.target.checked , e.target.name)}}
    //             name='male'
    //             className="form-check-input"
    //             type="checkbox"
    //             value=""
    //             id="flexCheckDefault"
    //           />
    //           <label className="form-check-label" htmlFor="flexCheckDefault">
    //             Male
    //           </label>
    //         </div>
    //         <div className="form-check me-2">
    //           <input onChange={(e)=>{inputDataStore(e.target.checked , e.target.name)}}
    //             name='female'
    //             className="form-check-input"
    //             type="checkbox"
    //             value=""
    //             id="flexCheckDefault"
    //           />
    //           <label className="form-check-label" htmlFor="flexCheckDefault">
    //             Female
    //           </label>
    //         </div>
    //         <div className="form-check me-2">
    //           <input onChange={(e)=>{inputDataStore(e.target.checked , e.target.name)}}

    //           name='other'
    //             className="form-check-input"
    //             type="checkbox"
    //             value=""
    //             id="flexCheckDefault"
    //           />
    //           <label className="form-check-label" htmlFor="flexCheckDefault">
    //             Other
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //       <div className="text-center mt-5">
    //         <button className="btn btn-outline-dark px-4 py-2" onClick={()=>{handleSubmit()}}>Sign Up</button>
    //       </div>
    // </div>
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
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your fullname!",
                },
              ]}
            >
              <Input onChange={(e) => { inputDataStore(e.target.value, 'fullName') }} />
            </Form.Item>

            <Form.Item
              label="User Name"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input onChange={(e) => { inputDataStore(e.target.value, 'UserName') }} />
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
              <Input onChange={(e) => { inputDataStore(e.target.value, 'email') }} />
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
              <Input.Password onChange={(e) => { inputDataStore(e.target.value, 'password') }} />
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
              <Input.Password onChange={(e) => { inputDataStore(e.target.value, 'conformPassword') }} />
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
              <Checkbox onChange={(e) => { inputDataStore(e.target.checked, 'male') }}>Male</Checkbox>
              <Checkbox onChange={(e) => { inputDataStore(e.target.checked, 'felmale') }}>Female</Checkbox>
              <Checkbox onChange={(e) => { inputDataStore(e.target.checked, 'other') }}>Other</Checkbox>
            </Form.Item>

            <Form.Item
              className="mt-3"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <button className='my-btn theme-btn'>
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
