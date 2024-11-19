import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessRate from "../components/SuccessRate";
import WhatLarnersSay from "../components/WhatLarnersSay";
import WhatWeDo from "../components/WhatWeDo";

const HomeLayout = () => {
  return (
    <div className="bg-primary_color min-h-screen font-poppins">
      <Banner></Banner>
      <WhatWeDo></WhatWeDo>
      <SuccessRate></SuccessRate>
      <WhatLarnersSay></WhatLarnersSay>
    </div>
  );
};

export default HomeLayout;
