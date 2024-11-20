import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser, setUser, signInWithGoogle, forgotPassword, setEmail } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        setErrorMessage(null);
        toast.success("Successfully register with google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => setErrorMessage(err.message));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password Regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    // Function to validate password
    // const validatePassword = (password) => passwordRegex.test(password);
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least 6 characters, one Upper case and one lower case letter"
      );
      return;
    }
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Logged in");
        setErrorMessage(null);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  //   const handleForgotPassword = () => {
  //     if (!email) {
  //       toast.error("Please enter your email to reset the password");
  //       return;
  //     }
  //     forgotPassword(email)
  //       .then(() => {
  //         toast.success("Password reset email sent");
  //       })
  //       .catch((err) => setErrorMessage(err.message));
  //   };
  const [showPass, setShowPass] = useState(false);
  const handleShowPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Login- Lingo Bingo</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-bold text-center text-2xl">Login Your Account</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mt-3">{errorMessage}</p>
        )}
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                autoComplete="false"
                required
              />
              {!showPass ? (
                <FaEye
                  className="absolute top-4 right-3 cursor-pointer"
                  onClick={handleShowPassword}
                ></FaEye>
              ) : (
                <FaEyeSlash
                  className="absolute top-4 right-3 cursor-pointer"
                  onClick={handleShowPassword}
                ></FaEyeSlash>
              )}
            </div>
            <label className="label">
              <Link
                className="label-text-alt link link-hover"
                to="/forget-password"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p>
          Don't have an Account?{" "}
          <Link to="/auth/register" className="hover:underline text-red-500">
            Register Now
          </Link>
        </p>
        <p className="text-center my-3">Or</p>
        <button
          className="btn border-gray-500 w-fit mx-auto"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle size={20} /> Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
