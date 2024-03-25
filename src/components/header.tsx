/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent absolute  left-0 right-0 z-50">
      <div className="container max-w-screen-2xl mx-auto flex justify-start items-center py-4">
        <a href="/" className="flex items-center">
          <img className="w-24" src="/asset/logo/Force.png" alt="Logo" />
          <div>
            <h1 className="text-xl font-extrabold text-black font-mono">Force</h1>
            <h2 className="text-xl font-extrabold text-black font-mono">Studio</h2>
          </div>
        </a>
        <nav className="ml-16">
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
      </div>
    </header>
  );
};

export default Header;
