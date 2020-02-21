import React, { Component } from 'react';
import ApplicantListItem from '../ApplicantListItem/ApplicantListItem';
import Context from '../context';
import './ApplicantList.css';

class ApplicantList extends Component {

    static contextType = Context;

    render() {
        const { applicants, sortDate, sortFirstName, sortLastName, sortCredit } = this.context;

        return (
            <div className='applicant-list'>
                <h1 className="applicant-list-heading">Applicant List</h1>
                <ul className="categories">
                    <li className="category-item">
                        <label className="category-label">Created</label>
                        <button className="sort" onClick={() => applicants.sort(sortDate)}>{'\u25bc'}</button>
                    </li>
                    <li className="category-item">
                        <label className="category-label">First Name</label>
                        <button className="sort" onClick={() => applicants.sort(sortFirstName)}>{'\u25bc'}</button>
                    </li>
                    <li className="category-item">
                        <label className="category-label">Last Name</label>
                        <button className="sort" onClick={() => applicants.sort(sortLastName)}>{'\u25bc'}</button>
                    </li>
                    <li className="category-item">
                        <label className="category-label">Credit Indicator</label>
                        <button className="sort" onClick={() => applicants.sort(sortCredit)}>{'\u25bc'}</button>
                    </li>
                </ul>
                <section className="applicant-section">
                    {applicants.map(applicant => 
                        <ApplicantListItem
                            key={applicant.id}
                            created={applicant.created}
                            firstName={applicant.firstName}
                            lastName={applicant.lastName}
                            credit={applicant.credit}
                        />
                    )}
                </section>
            </div>
        );
    }
}
export default ApplicantList;