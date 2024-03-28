/* eslint-disable @next/next/no-img-element */
import React from "react";
import Hero from "../components/hero";
import Platform from "../components/platform";
import HomeContent from "../components/home_content";
import CompanyDescription from "../components/company_description";
import CompanyProduct from "../components/company_product";
import CompanyOutstanding from "../components/company_outstanding";
import CompanyHiring from "../components/company_hiring";


const HomePage: React.FC = () => {
  return (
    <div className="w-full relative bg-white">
      <div className="pl-0 pr-0">
        <div className="relative z-[1]">
          <div className="container absolute block h-full w-full left-1/2 -translate-x-1/2 overflow-hidden max-lg:hidden">
            <img className="mt-24 top-1/2 left-[36%] absolute z-[0] -translate-y-[58%] w-[100%]" src="asset/pictures/home/top_bg_4.png" alt="Bg" />
          </div>
          <Hero />
        </div>
      </div>
      <Platform />
      <HomeContent>
        <CompanyDescription />
        <CompanyProduct />
        <CompanyOutstanding />
        <CompanyHiring />
      </HomeContent>
    </div>
  );
};

export default HomePage;
