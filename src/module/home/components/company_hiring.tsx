import React from 'react';

interface CompanyHiringProps {
  title?: string;
  description?: string;
  slogan?: string;
}

const CompanyHiring: React.FC<CompanyHiringProps> = (props: CompanyHiringProps) => {
  return (
    <div className='flex flex-col py-20 shadow-xl drop-shadow-lg px-8 mb-28 rounded-3xl bg-gradient-to-r from-[#41445c] via-[#0d1130] to-[#0a0e2e]'>
      <p className='text-white text-center font-bold uppercase mb-2'>{props.slogan}</p>
      <h1 className='text-white text-center text-xl sm:text-3xl lg:text-5xl font-bold mb-6 max-w-screen-lg mx-auto leading-[30px] sm:leading-[45px] lg:leading-[60px]'>{props.title}</h1>
      <p className='text-white text-center text-base sm:text-xl lg:text-2xl max-w-screen-md mx-auto leading-6 sm:leading-7 lg:leading-8'>{props.description}</p>
      <div className='mt-10 mx-auto'>
        <button type="button" className="text-[#162c48] text-base sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full px-10 py-5 text-center shadow-lg shadow-yellow-500/30">Open Positions</button>
      </div>
    </div>
  );
};

CompanyHiring.defaultProps = {
  title: 'Gia nhập đội ngũ của chúng tôi và trở thành những nhà phát triển game hàng đầu!',
  description: 'Khai phá tiềm năng và xây dựng sự nghiệp mơ ước của bạn trong thế giới phát triển game đầy thú vị.',
  slogan: ' We are hiring!'
};

export default CompanyHiring;