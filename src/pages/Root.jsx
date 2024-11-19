import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="bg-primary_color min-h-screen font-poppins">
      <header className="mb-10">
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
