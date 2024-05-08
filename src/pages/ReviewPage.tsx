import { FunctionComponent, useCallback } from "react";
import Navbar from "../components/Navbar";
import ReviewCards from "../components/ReviewCards";
import Footer from "../components/Footer";

const ReviewPage: FunctionComponent = () => {
  const onScrollBannerButtonvClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksheetSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-21xl text-nero font-inter sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <Navbar
        coDeskLabColor="#1f95f2"
        coursesColor="#000"
        aboutUsColor="#000"
        competetionsColor="#000"
        quizzesColor="#000"
      />
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative tracking-[-0.01em] leading-[48px] font-semibold whitespace-pre-wrap sm:text-21xl">{`Testimonials  & Reviews By Our Little Coders And their well wishers`}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base font-body-tiny-600">
            <div className="self-stretch relative leading-[150%]">
              Hear our students their parents and their teachers share the many
              reasons why they love CoDesk
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonvClick}
          >
            <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
              View Testimonials
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
          alt=""
          src="/image-54@2x.png"
        />
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] relative z-[1] text-center text-black1">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative tracking-[-0.01em] leading-[48px] font-semibold whitespace-pre-wrap">{`Testimonials  & Reviews`}</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm font-body-tiny-600">
            <div className="flex-1 relative leading-[150%]">
              Reviews and testimonials from students, parents and teachers
            </div>
          </div>
        </div>
        <ReviewCards />
        <div
          className="absolute left-[0] top-[-70px]"
          data-scroll-to="worksheetSectionContainer"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPage;
