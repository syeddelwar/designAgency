"use client";
import { AiOutlineMenu } from "react-icons/ai";
import menuList from "@/utils/menuList";
import Link from "next/link";
import React, { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import NextTopLoader from "nextjs-toploader";
import useWindowDimensions from "@/hook/getWindowDimensions";

export default function Navbar() {
  const { width } = useWindowDimensions();
  const [isSidebarOpen, setSidebarOpen] = useState(width > 768);
  const [scroll, setScroll] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const scrollFunc = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  if (typeof window !== "undefined"){
    window.addEventListener("scroll", scrollFunc);
  }
    

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`w-full top-0 left-0 fixed z-50 py-4 h-14 md:h-20 transition duration-[.2s] ${
        scroll && "bg-white shadow"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="containerCustom flex items-center justify-between h-full">
          <div>
            <Link
              href="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <h4 className="flex items-center text-xl">
                <div className="text-2xl font-bold">
                  Design<span className="text-[#F55F1D]">AGENCY</span>
                </div>
              </h4>
            </Link>
          </div>
          <div className="flex items-center">
            <div className=" hidden md:block">
              <ul className="flex">
                {menuList.map((menu, idx) => (
                  <Link href={menu?.link} className="capitalize" key={idx}>
                    <li className={`px-3 hover:text-[#20B15A]`}>{menu.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="items-center gap-4 hidden md:flex">
              <Link href="/">
                <div className="border border-[#20B15A] px-5 py-2 rounded-lg hover:bg-[#20B15A] hover:text-white transition ease-in-out delay-150 cursor-pointer">
                  Login
                </div>
              </Link>
              <Link href="/">
                <div className="bg-[#20B15A] text-white px-5 py-2 rounded-lg cursor-pointer">
                  Register
                </div>
              </Link>
            </div>
            <div
              className="md:hidden flex flex-col items-start text-[1.9rem] ml-2"
              onClick={toggleSidebar}
            >
              <AiOutlineMenu size={20} />
            </div>
          </div>
        </div>

        <MobileDrawer setSidebar={setSidebarOpen} isOpen={isSidebarOpen} />
        <NextTopLoader
          color="#20B15A"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
      </div>
    </div>
  );
}
