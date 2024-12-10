import React, { useContext, useState } from 'react';
import { JobsContext } from '../components/Jobsdata';


const Pagination = () => {
    const {jobsData}= useContext(JobsContext);
    const [currentPage, setCurrentPage]= useState(1);
    const jobsPerPage= 5;

    const startIndex= (currentPage - 1) * jobsPerPage;
    const endIndex= startIndex + jobsPerPage;
    const paginatedJobs= jobsData.slice(startIndex, endIndex);

const totalpages= Math.ceil(jobsData.length / jobsPerPage);

const handleNext=()=>{
    if(currentPage<totalpages){
        setCurrentPage(currentPage+1);
    }
};

const handlePrevious=()=>{
    if(currentPage>1){
        setCurrentPage(currentPage-1);
    }
};

  return (
    <div>
      <h1>JobsList</h1>
      <ul>
        {paginatedJobs.map((job, index) => (
          <li key={index}>
            {job.jobRole} at {job.companyName} having salary: Rs.{job.salary} at {job.location} location
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalpages}</span>
        <button onClick={handleNext} disabled={currentPage === totalpages}>Next</button>
    </div>


    </div>
  );
};

export default Pagination;
