import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ForgetPassword = () => {
  const { email, setEmail, forgotPassword } = useContext(AuthContext);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email to reset the password");
      return;
    }
    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent");
        window.location.href = "https://www.gmail.com";
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Forgot Password- Lingo Bingo</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-bold text-center text-2xl">
          Restore Your Password
        </h2>
        <form className="card-body" onSubmit={handleForgotPassword}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={email && email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Send email</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
