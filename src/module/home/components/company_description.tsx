import React from 'react';
import { CompanyCardModel } from '../models/company_card_model';
import CompanyCard from '@/components/home/company_card';

interface CompanyDescriptionProps {
  title?: string;
  description?: string;
  positiveList?: CompanyCardModel[];
}

const CompanyDescription: React.FC<CompanyDescriptionProps> = (props: CompanyDescriptionProps) => {
  return (
    <div className='py-16 mt-20'>
      <h1 className='text-black text-center text-5xl font-bold mb-6 px-16 max-w-screen-lg mx-auto leading-[60px]'>{props.title}</h1>
      <p className='text-black text-center text-2xl max-w-screen-md mx-auto leading-8'>{props.description}</p>
      <div className='flex gap-10'>
        {props.positiveList?.map((item) => (
          <CompanyCard key={item.id} icon={item.icon} color={item.color} shadowColor={item.shadowColor} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

// default props
CompanyDescription.defaultProps = {
  title: 'We believe strong company come from strong value and visions',
  description: 'Building a foundation for success - the power of shared values and visions in creating a strong company.',
  positiveList: [
    new CompanyCardModel(1, "asset/pictures/icon/next.svg", "bg-[#ffc700]", "shadow-[#f2d885]", 'Collaborations #1', 'Fostering innovation and unlocking new possibilities through partnerships - the story of Collaborations #1.'),
    new CompanyCardModel(2, "asset/pictures/icon/vercel.svg", "bg-[#24dbda]", "shadow-[#8ef2f2]", 'Keep Growing', 'Embracing change, cultivating resilience, and striving for excellence - the journey of those who Keep Growing.'),
    new CompanyCardModel(3, "asset/pictures/icon/vercel.svg", "bg-[#80db24]", "shadow-[#c7fd92]", 'Team Chemistry', 'A cohesive team is greater than the sum of its parts, and the secret to our success lies in the unique contributions.'),
  ]
};

export default CompanyDescription;