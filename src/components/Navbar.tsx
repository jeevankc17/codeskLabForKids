import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NavbarType = {
  /** Style props */
  coDeskLabColor?: CSSProperties["color"];
  coursesColor?: CSSProperties["color"];
  aboutUsColor?: CSSProperties["color"];
  competetionsColor?: CSSProperties["color"];
  quizzesColor?: CSSProperties["color"];
};

const Navbar: FunctionComponent<NavbarType> = ({
  coDeskLabColor,
  coursesColor,
  aboutUsColor,
  competetionsColor,
  quizzesColor,
}) => {
  const coDeskLabStyle: CSSProperties = useMemo(() => {
    return {
      color: coDeskLabColor,
    };
  }, [coDeskLabColor]);

  const coursesStyle: CSSProperties = useMemo(() => {
    return {
      color: coursesColor,
    };
  }, [coursesColor]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      color: aboutUsColor,
    };
  }, [aboutUsColor]);

  const competetionsStyle: CSSProperties = useMemo(() => {
    return {
      color: competetionsColor,
    };
  }, [competetionsColor]);

  const quizzesStyle: CSSProperties = useMemo(() => {
    return {
      color: quizzesColor,
    };
  }, [quizzesColor]);

  return (
    <header className="self-stretch h-[77px] rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[18] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-center">
          <div
            className="relative text-13xl tracking-[-0.01em] leading-[40px] font-semibold font-inter text-dodger-blue text-left"
            style={coDeskLabStyle}
          >
            CoDeskLab
          </div>
        </button>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-600 text-black1 text-left inline-block"
                style={coursesStyle}
              >
                Courses
              </button>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end">
              <div
                className="relative text-sm leading-[150%] font-body-tiny-600 text-black1 text-left"
                style={quizzesStyle}
              >
                Quizzes
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end">
              <div
                className="relative text-sm leading-[150%] font-body-tiny-600 text-black1 text-left"
                style={competetionsStyle}
              >
                Competetions
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-600 text-black1 text-left inline-block"
                style={aboutUsStyle}
              >
                About Us
              </button>
            </button>
          </div>
          <div className="flex flex-row items-center justify-center">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 w-8 relative overflow-hidden shrink-0 lg:flex md:flex">
              <img
                className="absolute top-[6px] left-[2.1px] max-h-full w-[19.8px]"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute top-[12px] left-[2.1px] max-h-full w-[19.8px]"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute top-[18px] left-[2.1px] max-h-full w-[19.8px]"
                alt=""
                src="/vector-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
