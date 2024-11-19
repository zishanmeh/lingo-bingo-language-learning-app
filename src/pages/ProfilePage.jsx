import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center">
      {user ? (
        <div className="bg-white p-10 flex flex-col justify-center items-center rounded-lg shadow-md gap-4">
          <img
            className="max-w-xs"
            src={user?.photoURL}
            alt={`Photo of ${user?.displayName}`}
          />
          <p className="text-gray-500">Name: {user.displayName}</p>
          <p className="text-gray-500">Email: {user.email}</p>
          <Link className="btn btn-neutral" to="/update-profile">
            Update profile
          </Link>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default ProfilePage;
