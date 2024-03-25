import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id,logo,job_title,job_description,company_name,remote_or_onsite,location,job_type,salary,job_responsibility,contact_information}=job
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src= {logo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name} </p>
        <div>
          <button className='btn mx-5 text-gradient-to-r from-cyan-500 to-blue-500'>{remote_or_onsite} </button>
          <button className='btn mx-5'>{job_type} </button>
        </div>
        <div className="flex gap-10 items-center">
          <address className="bg-gradient-to-r from-cyan-500 to-blue-500"><CiLocationOn /> {location} </address>
          <p><MdOutlineAttachMoney /> {salary} </p>
        </div>
        <div className="card-actions ">
         <Link to={`/job/${id}`}> <button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  )
}

Job.propTypes = {
  job: PropTypes.object.isRequired
}

export default Job