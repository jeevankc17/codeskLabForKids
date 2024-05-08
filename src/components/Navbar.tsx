import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import DrawerMenus from "./DrawerMenus";
import PortalDrawer from "./PortalDrawer";

export type NavbarType = {
  /** Style props */
  coDeskLabColor?: CSSProperties["color"];
};

const Navbar: FunctionComponent<NavbarType> = ({ coDeskLabColor }) => {
  const coDeskLabStyle: CSSProperties = useMemo(() => {
    return {
      color: coDeskLabColor,
    };
  }, [coDeskLabColor]);

  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  const openDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(true);
  }, []);

  const closeDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(false);
  }, []);

  return (
    <>
      <header className="self-stretch h-[77px] rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[18] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <Link
            className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center p-2.5 text-[inherit]"
            to="/"
          >
            <div
              className="relative tracking-[-0.01em] leading-[40px] font-semibold"
              style={coDeskLabStyle}
            >
              CoDeskLab
            </div>
          </Link>
          <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black1 font-body-large-600 sm:flex">
            <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                to="/coursepage"
              >
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-large-600 text-black1 text-left inline-block">
                  Courses
                </button>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end text-[inherit]"
                to="/quizpage"
              >
                <div className="relative leading-[150%]">Quizzes</div>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end text-[inherit]"
                to="/competetionspage"
              >
                <div className="relative leading-[150%]">Competetions</div>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                to="/aboutuspage"
              >
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-large-600 text-black1 text-left inline-block">
                  About Us
                </button>
              </Link>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
              onClick={openDrawerMenus}
            >
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
            </button>
          </div>
        </div>
      </header>
      {isDrawerMenusOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenus}
        >
          <DrawerMenus onClose={closeDrawerMenus} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Navbar;
