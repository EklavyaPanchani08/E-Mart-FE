import React from "react";
import { useState } from "react";
import Img from "../assets/register_img.png";
import "../css/register.css";

const Regiter = () => {

    // All States
    const [inputData, setinputData] = useState([]);

    const inputDataStore = (value,name) =>{
      let data = {[name]: value}
        setinputData([...inputData, data]);    
    }
    const handleSubmit = () =>{
      console.log('===',inputData)
    }
  return (
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6">
          <img className="register-img" src={Img} alt="" />
        </div>
        <div className="col-lg-6 align-align-items-center">
          <div className="mb-2">
            <label htmlFor="staticEmail" className=" col-form-label">
              Full Name
            </label>
            <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='fullName' type="text" className="form-control all-input" />
          </div>
          <div className="mb-2">
            <label htmlFor="staticEmail" className=" col-form-label">
              User Name
            </label>
            <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='userName' type="text" className="form-control all-input" />
          </div>
          <div className="mb-2">
            <label htmlFor="staticEmail" className=" col-form-label">
              Mobile No.
            </label>
            <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='mobile' type="number" className="form-control all-input" />
          </div>
          <div className="mb-2">
            <label htmlFor="staticEmail" className=" col-form-label">
              Email
            </label>
            <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='email' type="email" className="form-control all-input" />
          </div>
          <div className="mb-2">
            <label htmlFor="inputPassword" className=" col-form-label">
              Password
            </label>
            <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='password' type="password" className="form-control all-input" />
          </div>
          <div className="mb-2">
            <label htmlFor="inputPassword" className=" col-form-label">
              Conform Password
            </label>
            <input onChange={(e)=>{inputDataStore(e.target.value , e.target.name)}} name='conform password' type="password" className="form-control all-input" />
          </div>
          <div className="mb-1 d-flex">
            <div className="form-check me-2">
              <input onChange={(e)=>{inputDataStore(e.target.checked , e.target.name)}}
                name='male'
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Male
              </label>
            </div>
            <div className="form-check me-2">
              <input onChange={(e)=>{inputDataStore(e.target.checked , e.target.name)}}
                name='female'
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Female
              </label>
            </div>
            <div className="form-check me-2">
              <input onChange={(e)=>{inputDataStore(e.target.checked , e.target.name)}}
              
              name='other'
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Other
              </label>
            </div>
          </div>
        </div>
      </div>
          <div className="text-center mt-5">
            <button className="btn btn-outline-dark px-4 py-2" onClick={()=>{handleSubmit()}}>Sign Up</button>
          </div>
    </div>
  );
};

export default Regiter;
