/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative z-[2] pt-24 pb-6 md:pb-14">
      <div className="flex flex-col flex-wrap w-full pt-14">
        <div className="max-w-screen-2xl w-full mx-auto px-4 py-8 lg:py-24 xl:py-32">
          <div className="flex-1 w-2/5 max-lg:w-full">
            <h1 className="text-5xl md:text-6xl font-extralight font-sans text-black leading-tight md:leading-[80px]">
              Đột phá, sáng tạo,
              <br />
              và chất lượng
            </h1>
            <p className="text-lg text-black mt-8">
              Kể từ khi thành lập vào năm 2024, chúng tôi đã dồn hết tâm huyết vào thứ chúng tôi yêu thích nhất, Trò chơi điện tử. Chúng tôi cống hiến hết mình, hiểu mỗi dự án là một thách thức thú vị mà chúng tôi đối mặt với lòng nhiệt tình, kiên trì và nghiêm túc.
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm md:text-base lg:text-xl px-6 py-4 lg:py-5 lg:px-8 text-center me-2 mb-2 mt-4 lg:mt-8">Liên hệ ngay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
