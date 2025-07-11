import React, { Fragment, useState } from "react";
import axios from "axios";

export default function Registration() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const handleNameField = (value) => {
    setName(value);
  };

  const handlePhoneField = (value) => {
    setPhoneNo(value);
  };

  const handleAddressField = (value) => {
    setAddress(value);
  };

  const handleSave = (e) => {
    const data = {
      Name: name,
      PhoneNo: phoneNo,
      Address: address,
      IsActive: true,
    };

    const url = "https://localhost:44330/api/Employee/registration";
    axios
      .post(url, data)
      .then((result) => {
        if (result.data === "Successfully saved") {
          alert("Successfully saved");
        }
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Fragment>
        <div>Registration</div>
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
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter address"
          onChange={(e) => handleAddressField(e.target.value)}
        />
        <br />
        <button onClick={(e) => handleSave(e)}>Save</button>
      </Fragment>
    </div>
  );
}
