import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex justify-center items-center gap-4 flex-col">
        <h1 className="text-3xl font-bold text-center text-primary_color">
          Page Not Found!!
        </h1>
        <p className="text-sm text-center text-gray-500 font-semibold">
          Something is wrong. Try again later.
        </p>
        <Link className="btn btn-neutral" onClick={navigate("/")}>
          Go back to home
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Errorpage;
