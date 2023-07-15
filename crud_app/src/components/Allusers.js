import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Allusers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3333/customer/all");
        const data = await response.json();

        if (data.status === 200) {
          setCustomers(data.data);
          console.log("Customers fetched successfully.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // method to handling delete operation
  const customerDelete = async (customerId) => {
    try {
      console.log(customerId);
      const config = {
        url: `http://127.0.0.1:3333/customer/delete/${customerId}`,
        method: "post",
      };
      const response = await axios(config);

      if (response["status"] === 200) {
        console.log("Customer deleted successfully");
        return "successfully";
      }

      console.log("Failed to deleted customer.");
      return "failed";
    } catch (error) {
      console.log("Error in deleting the customer", error);
    }
  };
  return (
    <>
      <div className="container">
        <div>
          <h1>All users</h1>
        </div>
        <div className="row">
          <div className="col">
            <h3>NAME</h3>
          </div>
          <div className="col">
            <h3>EMAIL</h3>
          </div>
          <div className="col">
            <h3>Phone number</h3>
          </div>
          <div className="col">
            <h3>User action</h3>
          </div>
        </div>
        <hr />
        {customers.map((customer) => (
          <div className="row" key={customer.id}>
            <div className="col">
              <h3>{customer.name}</h3>
            </div>
            <div className="col">
              <h3>{customer.email}</h3>
            </div>
            <div className="col">
              <h3>{customer.number}</h3>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary mx-2">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => customerDelete(customer.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
