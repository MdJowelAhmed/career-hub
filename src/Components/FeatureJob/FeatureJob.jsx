import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength,setDataLength]=useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">

                <h2 className="text-5xl text-center font-semibold">This page is feature job section {jobs.length} </h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 my-16">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className= {dataLength=== jobs.length && "hidden"}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary text-center">Show all details</button>
            </div>
        </div>
    );
};

export default FeatureJob;