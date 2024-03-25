import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const HomeContent: React.FC<ContentProps> = ({ children }) => {
  return (
    <section className="relative z-[2] pt-24">
      <div className="flex flex-col flex-wrap w-full pt-14 pb-14">
        {children}
      </div>
    </section>
  );
};

export default HomeContent;