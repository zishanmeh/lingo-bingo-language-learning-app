import { Link } from "react-router-dom";

const OnlineCommunity = () => {
  return (
    <div className="bg-white p-14 rounded-md text-center mt-14 flex flex-col justify-center gap-4">
      <h1 className="text-3xl font-bold text-primary_color">
        Join our online learning community
      </h1>
      <p className="text-sm font-semibold text-gray-600">
        An award-winning language learning platform for new and advanced
        learners.
      </p>
      <Link className="btn btn-neutral w-fit mx-auto" to="/about">
        Get Started
      </Link>
    </div>
  );
};

export default OnlineCommunity;
