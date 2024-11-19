import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Errorpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex justify-center items-center gap-4 flex-col">
        <h1 className="text-3xl font-bold text-center text-primary_color">
          404 Error!
        </h1>
        <p className="text-sm text-center text-gray-500 font-semibold">
          Something is wrong. Try again later.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Errorpage;
