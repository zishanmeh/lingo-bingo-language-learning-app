import { Link } from "react-router-dom";
import image from "../assets/learn1.webp";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About- Lingo Bingo</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-primary_color">
              Lingo Bingo
            </h1>
            <p className="mt-2 text-gray-600">Portuguies learning app</p>
            <p className="py-6 text-gray-700">
              This project is a **React-based web application** designed to help
              users learn Portuguese vocabulary through interactive lessons. It
              includes features like Google and email/password authentication
              via Firebase, interactive vocabulary cards with audio
              pronunciation, and a responsive UI using Tailwind CSS. Users can
              navigate through lessons, track their progress, and access
              tutorial videos, all while enjoying dynamic animations powered by
              AOS. The app also ensures a smooth user experience with toast
              notifications and error handling.
            </p>
            <Link to="/" className="btn btn-neutral">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
