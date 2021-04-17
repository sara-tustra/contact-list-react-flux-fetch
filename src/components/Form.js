import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
      <>
      <div className="row justify-content-center py-4 my-4">
          <h2 className="text-center">Add a new contact</h2>
      </div>
    <div class="container p-4">
      <form>
        <div className="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
          />         
        </div>
        <div className="form-group">
          <label >Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter phone"
          />         
        </div>
        <div className="form-group">
          <label >Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter address"
          />         
        </div>
        <button type="submit" className="btn btn-primary  btn-lg btn-block">
          Submit
        </button>
      </form>
      <Link to="/" className="stretched-link">or get back to contacts</Link>
    </div>
    </>
  );
};

export default Form;
