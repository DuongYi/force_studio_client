import React from 'react';

interface HomeContentProps {
  classNameSection?: string;
  classNameDiv?: string;
  children: React.ReactNode;
}


const HomeContent: React.FC<HomeContentProps> = (props: HomeContentProps) => {
  return (
    <section className={props.classNameSection}>
      <div className={props.classNameDiv}>
        {props.children}
      </div>
    </section>
  );
};

// default props
HomeContent.defaultProps = {
  classNameSection: 'relative z-[2] pt-24',
  classNameDiv: 'flex flex-col flex-wrap w-full pt-14 pb-14',
};

export default HomeContent;