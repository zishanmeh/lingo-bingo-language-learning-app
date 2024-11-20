import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LetsLearn = () => {
  const lessons = Array.from(
    { length: 10 },
    (_, index) => `Lesson ${index + 1}`
  );
  const navigate = useNavigate();
  const handleCardClick = (lessonNo) => {
    navigate(`/lesson/${lessonNo}`);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="font-poppins">
      <h1 className="text-3xl font-bold text-center text-white">
        Let's Learn Protuguies now!!!
      </h1>
      <div className="grid mt-5 grid-cols-2 lg:grid-cols-5 md:grid-cols-4 justify-between items-center gap-6">
        {lessons.map((lesson, idx) => (
          <div
            onClick={() => handleCardClick(idx + 1)}
            data-aos="zoom-in-up"
            className="text-xl btn font-bold hover:bg-secondary_color bg-primary_color px-4 py-3 rounded-md text-white"
            key={idx}
          >
            {lesson}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetsLearn;
