import React, { useState } from "react";
import "../css/UpdateModelCss.css";
import axios from "axios";

export default function UpdateModel({ closeModel, customerId }) {
  // creating initial data that will be post to the customer update api
  const data = {
    name: "",
    email: "",
    number: "",
  };

  const [updateData, setUpdateData] = useState(data);

  // Setting value of the input field to the initial data that will be send to the update customer api
  const setValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUpdateData({ ...updateData, [name]: value });
  };

  // handlesubmit is used at the time when user click the update button
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data that will be post to the customer update api
    const postData = {
      id: customerId,
      name: updateData.name,
      email: updateData.email,
      number: updateData.number,
    };

    // making configuration
    const config = {
      method: "post",
      url: "http://127.0.0.1:3333/customer/update",
      data: postData,
    };
    try {
      const response = await axios(config);

      // this condition will execute then customer data updated successfully and api return response 200.
      if (response.status === 200) {
        console.log("User details updated successfully.");
      } else {
        console.log("Failed to update user.");
      }
    } catch (error) {
      console.log(customerId);
      console.log("Some error occured.");
    }
  };
  return (
    <>
      <div className="container" id="UpdateForm">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
                name="name"
                value={updateData.name}
                onChange={(e) => setValue(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="email"
                value={updateData.email}
                onChange={(e) => setValue(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your number"
                name="number"
                value={updateData.number}
                onChange={(e) => setValue(e)}
              />
            </div>
          </div>
          <div className="container">
            <button type="submit" className="btn btn-primary mx-3">
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => closeModel(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
