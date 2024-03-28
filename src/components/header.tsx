/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const [header, setHeader] = useState(false);

  const toggleMenu = () => {
    setNavbar(!navbar);
  }

  const scrollHeader = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 300) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }, []);

  return (
    <div className="relative">
      <nav className={`w-full ${header ? 'bg-white shadow-md drop-shadow-sm' : 'bg-transparent'} fixed top-0 left-0 right-0 z-10`}>
        <div className="">
          <div className="container max-w-screen-2xl mx-auto flex justify-start items-center py-2 max-md:justify-between">
            {/* LOGO */}
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/asset/pictures/logo/Force.png"
                  width={80}
                  height={80}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
                <div>
                  <h1 className="text-xl font-extrabold text-black font-mono">Force</h1>
                  <h2 className="text-xl font-extrabold text-black font-mono">Studio</h2>
                </div>
              </div>
            </Link>
            <nav className="ml-16 max-md:hidden">
              <ul className="flex">
                <li>
                  <a href="/" className="text-green-500 relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="/" className="text-green-500 relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="/" className="text-green-500 relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="/" className="text-green-500 relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
                    Tuyển dụng
                  </a>
                </li>
              </ul>
            </nav>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden mx-4">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleMenu}
              >
                {navbar ? (
                  <div>
                    <span className="sr-only">Close main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ) : (
                  <div>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`flex-1 bg-white justify-self-center pb-3 md:pb-0 md:mt-0 md:hidden ${navbar ? 'md:p-0 block' : 'hidden'
            }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex ">
            <li className="text-base font-semibold text-black py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Trang chủ
              </Link>
            </li>
            <li className="text-base font-semibold text-black py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Giới thiệu
              </Link>
            </li>
            <li className="text-base font-semibold text-black py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Sản phẩm
              </Link>
            </li>
            <li className="text-base font-semibold text-black py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Tuyển dụng
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
