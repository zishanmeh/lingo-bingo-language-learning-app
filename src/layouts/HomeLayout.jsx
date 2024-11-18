import Header from "../components/Header";
import SuccessRate from "../components/SuccessRate";
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
      </main>
    </div>
  );
};

export default HomeLayout;
