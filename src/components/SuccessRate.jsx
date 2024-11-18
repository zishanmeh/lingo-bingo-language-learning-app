import CountUp from "react-countup";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPlayLesson } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsFillFileEarmarkPlayFill } from "react-icons/bs";

const SuccessRate = () => {
  return (
    <div className="my-24 text-white">
      <div>
        <h1 className="text-center text-4xl font-bold text-white">
          Our Success Histroy
        </h1>
        <p className="w-full md:w-2/3 mx-auto text-center text-sm text-gray-400 my-5">
          "Join millions of learners worldwide who trust **Lingo Bingo** to make
          language mastery fun, effective, and unforgettable!"
        </p>
      </div>
      <section className="text-primary_color grid grid-cols-2 md:grid-cols-4 md:justify-center md:items-center gap-6">
        <div className="p-5 rounded-md shadow-md bg-white gap-2 flex flex-col justify-center items-center">
          <p>
            <IoMdPersonAdd
              className="text-secondary_color"
              size={50}
            ></IoMdPersonAdd>
          </p>
          <p className="text-3xl font-bold">
            <CountUp end={1100000} enableScrollSpy />+
          </p>
          <h2 className="text-xl font-bold">Total user</h2>
        </div>
        <div className="p-5 rounded-md shadow-md bg-white gap-2 flex flex-col justify-center items-center">
          <p>
            <MdPlayLesson
              className="text-secondary_color"
              size={50}
            ></MdPlayLesson>
          </p>
          <p className="text-3xl font-bold">
            <CountUp end={12} enableScrollSpy />+
          </p>
          <h2 className="text-xl font-bold">Total Lesson</h2>
        </div>
        <div className="p-5 rounded-md shadow-md bg-white gap-2 flex flex-col justify-center items-center">
          <p>
            <FaBook className="text-secondary_color" size={50}></FaBook>
          </p>
          <p className="text-3xl font-bold">
            <CountUp end={200} enableScrollSpy />+
          </p>
          <h2 className="text-xl font-bold">Total Vocabulary</h2>
        </div>
        <div className="p-5 rounded-md shadow-md bg-white gap-2 flex flex-col justify-center items-center">
          <p>
            <BsFillFileEarmarkPlayFill
              className="text-secondary_color"
              size={50}
            ></BsFillFileEarmarkPlayFill>
          </p>
          <p className="text-3xl font-bold">
            <CountUp end={8} enableScrollSpy />+
          </p>
          <h2 className="text-xl font-bold">Total Tutorial</h2>
        </div>
      </section>
    </div>
  );
};

export default SuccessRate;
