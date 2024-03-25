import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../JobApplication/JobApplication";


const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJob, setAppliedJob] = useState([])
    const [displayJobs,setDisplayJobs]=useState([])

    const handleDisplayJobs=filter=>{
        if(filter=== 'all'){
            setDisplayJobs(appliedJob)
        }
        else if(filter === 'remote'){
            const remoteJobs=appliedJob.filter(job=> job.remote_or_onsite==='Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter=== 'onsite'){
            const onsiteJobs=appliedJob.filter(job => job.remote_or_onsite=== 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storeJobId = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of storeJobId) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            // console.log(jobs,storeJobId, jobApplied,)
            setAppliedJob(jobApplied)
        }
    }, [jobs])
    return (
        <div>
            <h2>I apply this job:{appliedJob.length} </h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleDisplayJobs('all')}><a>All</a></li>
                    <li onClick={()=>handleDisplayJobs('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleDisplayJobs('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul className="my-9 text-center">
                {
                     displayJobs.map(job => <li key={job.id}><span>{job.job_title}  </span> <span>{job.company_name}</span> <span>{job.remote_or_onsite} </span> </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;