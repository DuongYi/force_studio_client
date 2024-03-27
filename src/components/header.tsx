/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent absolute left-0 right-0 z-50">
      <div className="container max-w-screen-2xl mx-auto flex justify-start items-center py-4 max-lg:justify-between">
        <a href="/" className="flex items-center">
          <img className="w-24" src="/asset/pictures/logo/Force.png" alt="Logo" />
          <div>
            <h1 className="text-xl font-extrabold text-black font-mono">Force</h1>
            <h2 className="text-xl font-extrabold text-black font-mono">Studio</h2>
          </div>
        </a>
        <nav className="ml-16 max-lg:hidden">
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

        <div className="lg:hidden mr-3">
          <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="hidden w-full" id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header >
  );
};

export default Header;
