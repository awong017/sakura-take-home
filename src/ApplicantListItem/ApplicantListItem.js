import React, { Component } from 'react';
import { format } from 'date-fns';
import './ApplicantListItem.css';

// Class component used to render the each individual applicant

class ApplicantListItem extends Component {

  checkCredit = (credit) => {
    if(credit>7) {
      return "good-score"
    }
    else if(credit>5 && credit<7) {
      return "neutral-score"
    }
    else {
      return "bad-score"
    }
  }

  render() {
    const { created, firstName, lastName, credit } = this.props

    return (
      <div className='applicant-list-item'>
          <ul className="applicant-detail-list">
              <li className="applicant-detail">{format(created, 'M/d/yy')}</li>
              <li className="applicant-detail">{firstName}</li>
              <li className="applicant-detail">{lastName}</li>
              <li className={this.checkCredit(credit)}>{credit}</li>
          </ul>
      </div>
    );
  }
}
export default ApplicantListItem;