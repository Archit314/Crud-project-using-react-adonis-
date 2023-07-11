import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  // payload of data
  const initialData = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  // Use state hook for initial data and for updated data
  const [data, setData] = useState(initialData);

  // handling input values from the form
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  // Handling submit form data
  let handleSubmit = async (e) => {
    e.preventDefault();

    // Data that will be post to create user API
    let postData = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    try {
      // Calling third create user api
      let res = await axios.post("http://127.0.0.1:3333/create", postData);
      // let resJson = await res.json();
      console.log(res);
      if (res.status === 200) {
        console.log(`New user created successfully`);
        // setName("");
        // setEmail("");
        // setMessage("User created successfully");
      } else {
        console.log(`Some error occured.`);
        // setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* creating form so that user can enter his/her details  */}
      <div className="container mt-4">
        <div className="container">
          <h1>Fill the below form to create user</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputValue}
              name="name"
              value={data.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Number
            </label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              onChange={handleInputValue}
              value={data.phoneNumber}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleInputValue}
              value={data.email}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
