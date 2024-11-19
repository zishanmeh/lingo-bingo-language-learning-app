import Footer from "../components/Footer";
import LetsLearn from "../components/LetsLearn";
import Navbar from "../components/Navbar";

const StartLearnLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto max-w-7xl min-h-screen">
        <LetsLearn></LetsLearn>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default StartLearnLayout;
