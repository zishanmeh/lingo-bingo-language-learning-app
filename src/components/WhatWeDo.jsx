import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      once: false, // Animation happens only once on scroll
    });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-white">
        What We Teach?
      </h1>
      <section className="my-10">
        <div className="flex justify-between items-center gap-12 mb-10 md:flex-row flex-col">
          <div className="w-1/2">
            <img
              src="https://placehold.co/500x200"
              alt=""
              className="rounded-lg"
              data-aos="flip-left"
            />
          </div>
          <div className="w-1/2">
            <p className="text-white" data-aos="fade-left">
              At Lingo Bingo, we believe that learning a new language should be
              fun, engaging, and effective! Our platform is your ultimate
              destination for mastering vocabulary, the cornerstone of any
              language. Whether you're a beginner or polishing up your skills,
              we've got the tools and activities to make your language journey
              exciting.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row-reverse justify-between items-center gap-12 mb-10 flex-col">
          <div className="w-1/2">
            <img
              src="https://placehold.co/500x200"
              alt=""
              className="rounded-lg"
              data-aos="flip-right"
            />
          </div>
          <div className="w-1/2">
            <p className="text-white" data-aos="fade-right">
              Dive into interactive exercises, challenge yourself with
              vocabulary games, and track your progress—all while having a
              blast. With Lingo Bingo, you'll turn words into your greatest
              superpower and unlock the world of languages like never before.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-12 md:flex-row flex-col">
          <div className="w-1/2">
            <img
              src="https://placehold.co/500x200"
              alt=""
              className="rounded-lg"
              data-aos="flip-left"
            />
          </div>
          <div className="w-1/2">
            <p className="text-white" data-aos="fade-left">
              Our mission is simple: to make language learning accessible and
              enjoyable for everyone. Whether you're preparing for travel,
              advancing your career, or just exploring a new passion, we’re here
              to support you every step of the way. With Lingo Bingo, you'll go
              beyond memorization and develop lasting skills that stick!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
