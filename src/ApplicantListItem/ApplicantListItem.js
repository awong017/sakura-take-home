import React, { Component } from 'react';
import { format } from 'date-fns';
import './ApplicantListItem.css';

class ApplicantListItem extends Component {
  render() {
    const { created, firstName, lastName, credit } = this.props

    return (
      <div className='ApplicantListItem'>
          <ul className="applicant-detail-list">
              <li className="applicant-detail">{format(created, 'M/d/yy')}</li>
              <li className="applicant-detail">{firstName}</li>
              <li className="applicant-detail">{lastName}</li>
              <li className="applicant-detail">{credit}</li>
          </ul>
      </div>
    );
  }
}
export default ApplicantListItem;