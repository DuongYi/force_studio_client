'use client';
import React, { useEffect, useRef } from 'react';
import CompanyCard from '@/components/home/company_card';

interface CompanyDescriptionProps {
  title?: string;
  description?: string;
  positiveList?: {
    id: number;
    icon: React.ReactNode;
    color: string;
    shadowColor: string;
    title: string;
    description: string;
  }[];
}

// Icon: Gamepad / Controller
const IconGamepad = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="6" width="20" height="12" rx="4" />
    <path d="M6 12h4M8 10v4" />
    <circle cx="16" cy="11" r="1" fill="currentColor" />
    <circle cx="18" cy="13" r="1" fill="currentColor" />
  </svg>
);

// Icon: Rocket / Launch
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

// Icon: Team / Users
const IconTeam = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const defaultList = [
  {
    id: 1,
    icon: <IconGamepad />,
    color: 'bg-[#ffc700]',
    shadowColor: 'shadow-[#f2d885]',
    title: 'Đam mê Game',
    description: 'Bằng sức mạnh cộng tác - Mở đường cho sáng tạo và những trải nghiệm chơi game độc đáo, đáng nhớ.',
  },
  {
    id: 2,
    icon: <IconRocket />,
    color: 'bg-[#24dbda]',
    shadowColor: 'shadow-[#8ef2f2]',
    title: 'Vươn lên',
    description: 'Chấp nhận thay đổi, nuôi dưỡng khả năng thích nghi và phấn đấu xuất sắc - Hành trình của những người không ngừng phát triển.',
  },
  {
    id: 3,
    icon: <IconTeam />,
    color: 'bg-[#80db24]',
    shadowColor: 'shadow-[#c7fd92]',
    title: 'Sự gắn kết',
    description: 'Một đội ngũ gắn kết mạnh mẽ sẽ vượt trội hơn tổng các cá nhân riêng lẻ, và bí quyết thành công nằm ở đóng góp độc đáo của từng thành viên.',
  },
];

const CompanyDescription: React.FC<CompanyDescriptionProps> = (props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer cho title/description fade-in-up
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.15 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    // Observer riêng cho từng card với delay stagger
    const cards = cardsRef.current?.querySelectorAll('.company-card');
    cards?.forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 120}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const list = props.positiveList ?? defaultList;

  return (
    <div className='py-16 mt-1 md:mt-10 lg:mt-14 xl:mt-20 mb-7 md:mb-14 xl:mb-20'>
      <div ref={sectionRef} className='opacity-0 translate-y-8 transition-all duration-700 ease-out'>
        <h1 className='text-black text-center text-xl sm:text-3xl lg:text-5xl font-bold mb-6 max-w-screen-lg mx-auto leading-[30px] sm:leading-[45px] lg:leading-[60px]'>
          {props.title ?? 'Chúng tôi tin rằng các công ty vững mạnh xuất phát từ những giá trị và tầm nhìn vững chắc'}
        </h1>
        <p className='text-black text-center text-base sm:text-xl lg:text-2xl max-w-screen-md mx-auto leading-6 sm:leading-7 lg:leading-8'>
          {props.description ?? 'Xây dựng nền tảng vững chắc cho thành công - Sức mạnh của giá trị và tầm nhìn chung trong việc tạo ra một công ty vững mạnh.'}
        </p>
      </div>

      <div ref={cardsRef} className='grid grid-cols-3 gap-10 mt-5'>
        {list.map((item) => (
          <CompanyCard
            key={item.id}
            icon={item.icon}
            color={item.color}
            shadowColor={item.shadowColor}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyDescription;