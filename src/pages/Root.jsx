import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Root = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="bg-primary_color min-h-screen font-poppins">
      <header className="mb-10">
        {(location.pathname === "/" || location.pathname === "/profile") &&
          user && (
            <div className="text-center shadow-md text-primary_color px-3 py-3 rounded-md w-fit mx-auto bg-white">
              <p>Welcome {user?.displayName || user?.email}</p>
            </div>
          )}
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
