import React, { Component } from 'react';
import ApplicantListItem from '../ApplicantListItem/ApplicantListItem';
import Context from '../context';
import './ApplicantList.css';

class ApplicantList extends Component {

    static contextType = Context;

    render() {
        const { applicants } = this.context;

        return (
            <div className='ApplicantList'>
                <h1 className="applicant-list-heading">Applicant List</h1>
                <button onClick={()=>console.log(applicants)}>Applicants</button>
                <ul className="categories">
                    <li className="category-item"><h3>Date Created</h3></li>
                    <li className="category-item"><h3>First Name</h3></li>
                    <li className="category-item"><h3>Last Name</h3></li>
                    <li className="category-item"><h3>Credit Indicator</h3></li>
                </ul>
                {applicants.map(applicant => 
                    <ApplicantListItem
                        key={applicant.id}
                        created={applicant.created}
                        firstName={applicant.firstName}
                        lastName={applicant.lastName}
                        credit={applicant.credit}
                    />
                )}
            </div>
        );
    }
}
export default ApplicantList;