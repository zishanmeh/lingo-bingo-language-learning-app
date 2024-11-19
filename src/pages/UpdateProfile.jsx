import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile({ displayName: name, photoURL: photo })
      .then((result) => {
        toast.success("Profile updated");
        navigate("/profile");
      })
      .catch((err) => toast.error(err.message));
    console.log(name, photo);
  };
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="font-bold text-center text-2xl">
            Update Your Profile
          </h2>
          <form className="card-body" onSubmit={handleUpdateUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
