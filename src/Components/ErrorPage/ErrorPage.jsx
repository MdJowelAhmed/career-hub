import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-6xl font-bold flex justify-center items-center">Oops !!!!</h2>
           <div className="text-2xl font-bold flex justify-center items-center my-6"> <Link to='/'><button className="btn">Home</button></Link></div>
        </div>
    );
};

export default ErrorPage;