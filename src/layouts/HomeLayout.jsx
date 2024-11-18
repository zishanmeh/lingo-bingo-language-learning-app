import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessRate from "../components/SuccessRate";
import WhatLarnersSay from "../components/WhatLarnersSay";
import WhatWeDo from "../components/WhatWeDo";

const HomeLayout = () => {
  return (
    <div className="bg-primary_color min-h-screen font-poppins">
      <header className="mb-10">
        <Header></Header>
      </header>
      <main className="max-w-7xl w-11/12 mx-auto">
        <WhatWeDo></WhatWeDo>
        <SuccessRate></SuccessRate>
        <WhatLarnersSay></WhatLarnersSay>
      </main>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
