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
        <div className='max-w-screen-2xl w-full mx-auto '>
          {props.children}
        </div>
      </div>
    </section>
  );
};

// default props
HomeContent.defaultProps = {
  classNameSection: '',
  classNameDiv: 'flex flex-col flex-wrap w-full',
};

export default HomeContent;