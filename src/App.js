import React, { Component } from 'react';
import ApplicantList from './ApplicantList/ApplicantList';
import Context from './context';
import './App.css';

class App extends Component {

  state = {
    applicants: [],
    dateOrder: false,
    firstNameOrder: false,
    lastNameOrder: false,
    creditOrder: false
  }

  static contextType = Context;

  sortDate = (a,b) => {
    const { dateOrder } = this.state
    this.setState(prevState => ({
      dateOrder: !prevState.dateOrder
    }))
    const order = (dateOrder === false) ? a.created-b.created : b.created-a.created
    return order
  }

  sortFirstName = (a,b) => {
    const { firstNameOrder } = this.state
    this.setState(prevState => ({
      firstNameOrder: !prevState.firstNameOrder
    }))
    const order = (firstNameOrder === false) ? -1 : 1
    return order * a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
  }

  sortLastName = (a,b) => {
    const { lastNameOrder } = this.state
    this.setState(prevState => ({
      lastNameOrder: !prevState.lastNameOrder
    }))
    const order = (lastNameOrder === false) ? -1 : 1
    return order * a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())
  }

  sortCredit = (a,b) => {
    const { creditOrder } = this.state
    this.setState(prevState => ({
      creditOrder: !prevState.creditOrder
    }))
    const order = (creditOrder === false) ? a.credit-b.credit : b.credit-a.credit
    return order
  }

  unixTime = (date) => {
    return new Date(date).getTime()
  }

  componentDidMount() {
    const url = "http://private-041255-sakura3.apiary-mock.com/applicants";
    const options = {
      "method": "GET"
    }

    fetch(url, options)
      .then((res) => res.json())
      .then((resJson) => { 
        const convertDate = (applicant) => ({
          id: applicant.id,
          created: this.unixTime(applicant.created_at),
          firstName: applicant.first_name,
          lastName: applicant.last_name,
          credit: applicant.credit_indicator
        })
        let updatedApplicantDetails = resJson.map((applicant) => {
          return convertDate(applicant)
        })
        this.setState({
          applicants: updatedApplicantDetails
        })
      })
    }

  render() {
    const value = {
      applicants: this.state.applicants,
      sortDate: this.sortDate,
      sortFirstName: this.sortFirstName,
      sortLastName: this.sortLastName,
      sortCredit: this.sortCredit,
      dateOrder: this.state.dateOrder,
      firstNameOrder: this.state.firstNameOrder,
      lastNameOrder: this.state.lastNameOrder,
      creditOrder: this.state.creditOrder
    }

    return (
      <Context.Provider value={value}>
        <main className="app">
          <ApplicantList/>
        </main>
      </Context.Provider>
    );
  }
}
export default App;
