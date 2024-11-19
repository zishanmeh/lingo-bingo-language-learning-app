import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LessonPage = () => {
  const navigate = useNavigate();
  const { lesson_no } = useParams();
  const vocabulary = useLoaderData();
  const lessonVocabulary = vocabulary.filter(
    (word) => word.Lesson_no === parseInt(lesson_no, 10)
  );

  const speakWord = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "pt-PT"; // Portuguese
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis not supported in this browser.");
    }
  };
  const [selectedWord, setSelectedWord] = useState([]);
  const openModal = (lesson) => {
    setSelectedWord(lesson); // Update state with clicked word data
    document.getElementById("my_modal_3").showModal(); // Show modal
  };
  return (
    <div>
      <div className="max-w-7xl w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary_color my-8">
          Lesson No: {lesson_no}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6">
          {lessonVocabulary.map((lesson) => (
            <div
              onClick={() => speakWord(lesson.word)}
              key={lesson.Id}
              className={`${
                lesson.difficulty === "easy"
                  ? "bg-gradient-to-r from-green-300 to-green-500"
                  : lesson.difficulty === "medium"
                  ? "bg-gradient-to-r from-yellow-300 to-yellow-500"
                  : "bg-gradient-to-r from-red-300 to-red-500"
              } p-3 rounded-md shadow-md hover:scale-105 transition-all duration-300 flex flex-col gap-4 cursor-pointer`}
            >
              <div className="grid grid-cols-2 justify-center items-center">
                <p className="font-semibold">Word : </p>
                <p className="font-bold">{lesson.word}</p>
              </div>
              <div className="grid grid-cols-2 justify-center items-center">
                <p className="font-semibold">Meaning : </p>
                <p className="font-bold">{lesson.meaning}</p>
              </div>
              <div className="grid grid-cols-2 justify-center items-center">
                <p className="font-semibold">Pronunciation : </p>
                <p className="font-bold">{lesson.pronunciation}</p>
              </div>
              <div className="grid grid-cols-2 justify-center items-center">
                <p className="font-semibold">Part Of Speech : </p>
                <p className="font-bold">{lesson.part_of_speech}</p>
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="btn btn-sm btn-neutral"
                  onClick={() => openModal(lesson)}
                >
                  When to Say
                </button>
                <Link
                  className="btn btn-sm btn-accent"
                  onClick={() => navigate(-1)}
                >
                  Go back
                </Link>
              </div>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div>
                    <div className="grid grid-cols-2 justify-center items-center">
                      <p className="font-semibold">Word : </p>
                      <p className="font-bold">{selectedWord.word}</p>
                    </div>
                    <div className="grid grid-cols-2 justify-center items-center">
                      <p className="font-semibold">Meaning : </p>
                      <p className="font-bold">{selectedWord.meaning}</p>
                    </div>
                    <div className="grid grid-cols-2 justify-center items-center">
                      <p className="font-semibold">When to say : </p>
                      <p className="font-bold">{selectedWord.when_to_say}</p>
                    </div>
                    <div className="grid grid-cols-2 justify-center items-center">
                      <p className="font-semibold">Example : </p>
                      <p className="font-bold">{lesson.example}</p>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </div>
  );
};

export default LessonPage;
