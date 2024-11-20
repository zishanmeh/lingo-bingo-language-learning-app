import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OnlineCommunity from "../components/OnlineCommunity";
import SuccessRate from "../components/SuccessRate";
import WhatLarnersSay from "../components/WhatLarnersSay";
import WhatWeDo from "../components/WhatWeDo";
import { Helmet } from "react-helmet";

const HomeLayout = () => {
  return (
    <div className="bg-primary_color min-h-screen font-poppins">
      <Helmet>
        <title>Home- Lingo Bingo</title>
      </Helmet>
      <Banner></Banner>
      <WhatWeDo></WhatWeDo>
      <SuccessRate></SuccessRate>
      <WhatLarnersSay></WhatLarnersSay>
      <OnlineCommunity></OnlineCommunity>
    </div>
  );
};

export default HomeLayout;
