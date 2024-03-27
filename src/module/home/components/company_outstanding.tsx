import React from 'react';
import { CompanyPersonModel } from '../models/company_person_model';
import PersonCard from '@/components/home/person_card';

interface CompanyOutstandingProps {
  title?: string;
  description?: string;
  members?: CompanyPersonModel[];
}

const CompanyOutstanding: React.FC<CompanyOutstandingProps> = (props: CompanyOutstandingProps) => {
  return (
    <div className='py-16 mt-5 mx-auto'>
      <h1 className='text-black text-center text-xl sm:text-3xl lg:text-5xl font-bold mb-6 max-w-screen-lg mx-auto leading-[30px] sm:leading-[45px] lg:leading-[60px]'>{props.title}</h1>
      <p className='text-black text-center text-base sm:text-xl lg:text-2xl max-w-screen-md mx-auto leading-6 sm:leading-7 lg:leading-8'>{props.description}</p>
      <div className='grid grid-cols-5 justify-center gap-10 mt-16'>
        {props.members?.map((member) => (
          <PersonCard
            key={member.id}
            image={member.image}
            name={member.name}
            jobTitle={member.jobTitle}
            link={member.link}
          />
        ))}
      </div>
    </div>
  );
};

CompanyOutstanding.defaultProps = {
  title: 'Get to know the exceptional professionals who make our team shine',
  description: 'Discover the exceptional professionals talent driving our team success - our brilliant game developers.',
  members: [
    new CompanyPersonModel(1, 'Thị Dũng', 'CEO', 'asset/pictures/member/person_1.jpg', 'https://www.google.com'),
    new CompanyPersonModel(2, 'Đức Dương', 'HR', 'asset/pictures/member/person_2.jpg', 'https://www.google.com'),
    new CompanyPersonModel(3, 'Thị Anh', 'Checker', 'asset/pictures/member/person_3.jpg', 'https://www.google.com'),
    new CompanyPersonModel(4, 'Thị Đăng', 'COO', 'asset/pictures/member/person_4.jpg', 'https://www.google.com'),
    new CompanyPersonModel(4, 'Thị Huy', 'DEV', 'asset/pictures/member/person_5.jpg', 'https://www.google.com'),
  ]
};

export default CompanyOutstanding;