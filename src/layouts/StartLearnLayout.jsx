import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LetsLearn from "../components/LetsLearn";
import Navbar from "../components/Navbar";

const StartLearnLayout = () => {
  return (
    <div className="w-11/12 mx-auto max-w-7xl min-h-screen">
      <LetsLearn></LetsLearn>
      <div className="my-14">
        <h1 className="text-center text-white font-bold text-3xl">
          Learning The Alphabet
        </h1>
        <div className=" mx-auto mt-10 flex justify-center md:w-[560px] md:h-[315px]">
          <iframe
            className="w-full h-[300px] rounded-md"
            src="https://www.youtube.com/embed/ar7wP-gjvJk?si=PR65au60i7OdMbI4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-center mt-10">
          <Link to="/tutorials" className="btn btn-neutral">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartLearnLayout;
