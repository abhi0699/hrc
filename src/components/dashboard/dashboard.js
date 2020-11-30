import React, { Component, useState } from "react";
import Header from "../header/header";

class Dashboard extends Component {
  state = {
    onLogin: false,
    error: null,
    data: [],
    filterText: '',
  }

  filterChange = (e) => {
    this.setState({ filterText: e.target.value });
  }

  componentDidMount() {
    console.log("in compdidMount");
    this.getRecords()
  }

  getRecords() {
    fetch("http://localhost:8080/HighradiusWinterInternship2020/")
      .then(res => res.data.json())
      .then(
        (result) => {
          this.setState({
            data: result
          });
        },
        (error) => {
          this.setState({ error })
        }
      )
  }


  render() {
    let filterData = null;
    if (this.state.filterText != '') {
      filterData = this.state.data.filter(d => {
        return d.order_id.indexOf(this.state.filterText) !== -1;;
      })
    }
    const { error, data } = this.state;
    if (error) {
      return (
        <div>Error: {error.message}</div>
      )
    }
    else {
      return (
        <>
          <div>
            <Header onLogin />
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
                <input type="text" className="form-control" placeholder="Search"  onChange={this.filterChange}/>
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

              <tbody>
                {filterData != null ?
                  filterData.map(item => (
                    <tr key={item.order_id}>
                      <td>{item.order_date}</td>
                      <td>{item.approved_by}</td>
                      <td>{item.order_id}</td>
                      <td>{item.customer_name}</td>
                      <td>{item.customer_id}</td>
                      <td>{item.order_amount}</td>
                      <td>{item.approval_status}</td>
                      <td>{item.notes}</td>
                    </tr>
                  )) : data.map(item => (
                    <tr key={item.order_id}>
                      <td>{item.order_date}</td>
                      <td>{item.approved_by}</td>
                      <td>{item.order_id}</td>
                      <td>{item.customer_name}</td>
                      <td>{item.customer_id}</td>
                      <td>{item.order_amount}</td>
                      <td>{item.approval_status}</td>
                      <td>{item.notes}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )
    }
  }
}
export default Dashboard;