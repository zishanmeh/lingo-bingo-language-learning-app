import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="max-w-7xl w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
