import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import QuizCards from "../components/Quiz/QuizCards";
import Footer from "../components/Footer";

const QuizPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-29xl text-nero font-body-tiny-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <Navbar
        coDeskLabColor="#1f95f2"
        coursesColor="#000"
        aboutUsColor="#000"
        competetionsColor="#000"
        quizzesColor="FF5A43"
      />
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
              Coding Quizes for Kids
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch relative leading-[150%]">
              Fun way to learn coding for kids using quizzes
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-600 text-nero text-center inline-block max-h-[58px]">
              View a Quizzes
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
          alt=""
          src="/image-59@2x.png"
        />
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[1] text-center text-17xl text-black1">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold">
              Coding quizzes for kids
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
            <div className="flex-1 relative leading-[150%]">
              Great collection of fun and interactive coding quizzes for kids to
              assess and acquire computer science knowledge.
            </div>
          </div>
        </div>
        <QuizCards />
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
