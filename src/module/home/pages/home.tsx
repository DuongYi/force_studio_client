/* eslint-disable @next/next/no-img-element */
import React from "react";
import Hero from "../components/hero";
import Platform from "../components/platform";
import HomeContent from "../components/home_content";
import CompanyDescription from "../components/company_description";


const HomePage: React.FC = () => {
  return (
    <div className="w-full relative bg-white">
      <div className="pl-0 pr-0">
        <div className="relative z-[1]">
          <div className="container absolute block h-full w-full left-1/2 -translate-x-1/2">
            <img className="mt-24 top-1/2 right-[300px] absolute z-[0] -translate-y-[58%] w-[28%]" src="asset/top_bg.png" alt="Bg" />
            <img className="mt-24 top-1/2 -right-40 absolute z-[0] -translate-y-[54%] w-[30%]" src="asset/top_bg_2.png" alt="Bg" />
          </div>
          <Hero />
        </div>
      </div>
      <Platform />
      <HomeContent>
        <CompanyDescription description="ha ha" />
      </HomeContent>
    </div>
  );
};

export default HomePage;
