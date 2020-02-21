import React, { Component } from 'react';
import ApplicantList from './ApplicantList/ApplicantList';
import Context from './context';
import './App.css';

class App extends Component {

  state = {
    applicants: []
  }

  static contextType = Context;

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
      applicants: this.state.applicants
    }

    return (
      <Context.Provider value={value}>
        <main className='App'>
          <ApplicantList/>
        </main>
      </Context.Provider>
    );
  }
}
export default App;
