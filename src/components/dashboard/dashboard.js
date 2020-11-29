import React, { Component, useState } from "react";
import Header from "../header/header";

function Dashboard(props) {
  const [onLogin, setOnLogin] = useState(false)


  return (
    <>
      <div>
        <Header onLogin={onLogin} />
      </div>
      <div className="container-fluid">
        <div className="row pt-2 pb-3">
          <div className="col-1">
            <button className="btn btn-success ml-auto mr-auto"
              onClick="">ADD</button>
          </div>
          <div className="col-1">
            <button className="btn btn-warning ml-auto mr-auto"
              onClick="">EDIT</button>
          </div>
          <div className="col-6"></div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="text-left container-fluid">
        <table className="table text-left">
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Approved By</th>
              <th>Order ID</th>
              <th>Company Name</th>
              <th>Company ID</th>
              <th>Order Amount</th>
              <th>Approval Status</th>
              <th>Notes</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}
export default Dashboard;