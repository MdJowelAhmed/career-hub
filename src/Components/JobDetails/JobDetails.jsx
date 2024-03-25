import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../JobApplication/JobApplication";


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)

    const handleApplyJob =()=>{
        saveJobApplication(idInt)
        toast('You Applied Job Successfully')
    }

    console.log(job)
    return (
        <div>
            <h3 className="text-center m-8">Job details:{job.job_title}</h3>
            <div className="grid md:grid-cols-7 gap-5  ">
                <div className="border-solid border-2 border-indigo-600 rounded-2xl col-span-5 p-5">
                    <p><span className="text-xl font-bold">Job Description:</span> {job.job_description} </p>
                    <p><span className="text-xl font-bold">Job Responsibility:</span> {job.job_responsibility} </p>
                    <p><span className="text-xl font-bold">EducationalRequirements:</span> {job.educational_requirements} </p>
                    <p><span className="text-xl font-bold">Job Experiences:</span> {job.experiences} </p>
                </div>
                <div className="border-solid border-2 border-indigo-600 rounded-2xl col-span-2 p-5">
                    <h2> Job Details</h2>
                    <hr />
                    <h3>{job.salary} </h3>
                    <h3> {job.job_title}</h3>

                    <h2>Contact Information</h2>
                    <hr />
                    <h3>{job.contact_information.phone}</h3>
                    <h3>{job.contact_information.email}</h3>
                    <address>{job.contact_information.address}</address>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;