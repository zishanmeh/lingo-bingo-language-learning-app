import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Tutorial = () => {
  return (
    <div>
      <Helmet>
        <title>Tutorials- Lingo Bingo</title>
      </Helmet>
      <div className="">
        <h1 className="text-3xl font-bold text-white text-center">
          Watch our latest tutorial
        </h1>
        <p className="text-sm text-gray-300 font-semibold mt-4 text-center">
          Empower Your Learning Journey, One Lesson at a Time!
        </p>
        <div className="w-full flex justify-center mt-5">
          <Link
            className="btn text-center w-fit mx-auto btn-neutral"
            to="/learn"
          >
            Learn Vocabularies
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 w-full my-14">
          <iframe
            className="shadow-lg mx-auto"
            width="300"
            height="150"
            src="https://www.youtube.com/embed/iDsD0jLF63g?si=aUxqg6lrUotMkmj4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="300"
            height="150"
            src="https://www.youtube.com/embed/JoaGC5BIh9s?si=yNISrMk-3hbpD7Oj"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="mx-auto"
          ></iframe>
          <iframe
            width="300"
            height="150"
            className="mx-auto"
            src="https://www.youtube.com/embed/Yjq5eJn530Y?si=0zIjeDx7WXEBBJTZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="300"
            height="150"
            className="mx-auto"
            src="https://www.youtube.com/embed/GovdKElUX5k?si=7rsO2DhyKNwSbjIM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="300"
            height="150"
            className="mx-auto"
            src="https://www.youtube.com/embed/amrx8aTP3gs?si=Os8vdfF4rFXKibka"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="300"
            height="150"
            className="mx-auto"
            src="https://www.youtube.com/embed/Q8hbNbuvfgU?si=n8vA6umQbuSxrFMl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
