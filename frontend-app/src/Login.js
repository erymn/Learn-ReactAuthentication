import React, { Fragment, useState } from "react";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleNameField = (value) => {
    setName(value);
  };

  const handlePhoneField = (value) => {
    setPhoneNo(value);
  };

  const handleLogin = (e) => {
    const data = {
      Name: name,
      PhoneNo: phoneNo,
    };

    const url = "https://localhost:44330/api/Employee/login";
    axios
      .post(url, data)
      .then((result) => {
        if (result.data === "Login successfully.") {
          alert("Login successful");
        }
        console.log(result);
      })
      .catch((err) => {
        alert("Login failed. " + err.message);
        console.log(err.message);
      });
  };

  return (
    <div>
      <Fragment>
        <div>Login</div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleNameField(e.target.value)}
        />
        <br />
        <label htmlFor="phoneNo">Phone Number</label>
        <input
          type="text"
          id="phoneNo"
          name="phoneNo"
          placeholder="Enter Phone No"
          onChange={(e) => handlePhoneField(e.target.value)}
        />
        <br />
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </Fragment>
    </div>
  );
}
