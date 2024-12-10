import React ,{createContext, useContext, useState}from 'react';

export const JobsContext= createContext();

export const JobsProvider=({children})=>{

const [jobsData] = useState( [
    { id: 1, jobRole: "Software Engineer", companyName: "Tech Corp", location: "New York, NY", salary: "$120,000" },
    { id: 2, jobRole: "Data Scientist", companyName: "Data Works", location: "San Francisco, CA", salary: "$130,000" },
    { id: 3, jobRole: "Product Manager", companyName: "Innovate Ltd.", location: "Austin, TX", salary: "$115,000" },
    { id: 4, jobRole: "UX Designer", companyName: "Creative Studio", location: "Chicago, IL", salary: "$95,000" },
    { id: 5, jobRole: "DevOps Engineer", companyName: "Cloud Solutions", location: "Seattle, WA", salary: "$125,000" },
    { id: 6, jobRole: "Marketing Specialist", companyName: "Ad Agency", location: "Denver, CO", salary: "$70,000" },
    { id: 7, jobRole: "Cybersecurity Analyst", companyName: "SecureTech", location: "Boston, MA", salary: "$110,000" },
    { id: 8, jobRole: "Full Stack Developer", companyName: "Webify", location: "Remote", salary: "$100,000" },
    { id: 9, jobRole: "AI Researcher", companyName: "Future AI", location: "Palo Alto, CA", salary: "$140,000" },
    { id: 10, jobRole: "HR Manager", companyName: "HR Hub", location: "Atlanta, GA", salary: "$90,000" },
    { id: 11, jobRole: "Cloud Architect", companyName: "Cloudy", location: "Phoenix, AZ", salary: "$135,000" },
    { id: 12, jobRole: "Graphic Designer", companyName: "Artistic Minds", location: "Portland, OR", salary: "$80,000" },
]);

return(

    <JobsContext.Provider value={{jobsData}}>
        {children}
    </JobsContext.Provider>
)

}