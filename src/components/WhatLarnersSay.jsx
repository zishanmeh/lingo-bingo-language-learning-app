import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhatLarnersSay = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold bg-white text-primary_color px-3 py-4 rounded-lg shadow-lg w-fit mx-auto -rotate-3">
        What our learners are saying
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 justify-center items-start md:gap-10 gap-6 mt-16">
        <div
          className="flex flex-col justify-start items-start gap-4"
          data-aos="zoom-in"
        >
          <div className="text-yellow-500 flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-white">
            "Lingo Bingo has completely transformed the way I learn languages!
            The interactive games make it so fun that I forget I’m studying.
            I’ve expanded my vocabulary faster than I ever thought possible!"
          </p>
          <small className="text-gray-400">Sophia R.</small>
        </div>
        <div
          className="flex flex-col justify-start items-start gap-4"
          data-aos="zoom-in"
        >
          <div className="text-yellow-500 flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-white">
            "I’ve tried countless language apps, but Lingo Bingo stands out.
            It’s intuitive, engaging, and the progress tracking keeps me
            motivated. Highly recommend it to anyone serious about learning!"
          </p>
          <small className="text-gray-400">James P.</small>
        </div>
        <div
          className="flex flex-col justify-start items-start gap-4"
          data-aos="zoom-in"
        >
          <div className="text-yellow-500 flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-white">
            "Thanks to Lingo Bingo, I aced my Spanish vocabulary test! The
            practice sessions feel more like play than work, and the results
            speak for themselves. Absolutely love it!"
          </p>
          <small className="text-gray-400">Amara K.</small>
        </div>
      </section>
    </div>
  );
};

export default WhatLarnersSay;
