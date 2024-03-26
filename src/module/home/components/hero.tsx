/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative z-[2] pt-24">
      <div className="flex flex-col flex-wrap w-full pt-14 pb-14">
        <div className="max-w-screen-2xl w-full mx-auto px-4 py-32">
          <div className="flex-1 w-2/5">
            <h1 className="text-6xl font-extralight font-sans text-black leading-tight">
              Đột phá, sáng tạo,
              <br />
              và chất lượng
            </h1>
            <p className="text-lg text-black mt-8">
              Since our foundation in 2024, we have put our heart and soul into what we enjoy the most, Video Games. We contribute the best of ourselves, understanding each project as an exciting challenge that we face with enthusiasm, perseverance, and seriousness.
            </p>
            <h2 className="text-black text-xl pt-10 pb-3">
              Cùng nhau sáng tạo!
            </h2>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Liên hệ ngay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
