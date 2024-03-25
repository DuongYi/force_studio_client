import React from 'react';

interface CompanyDescriptionProps {
  description: string;
}

const CompanyDescription: React.FC<CompanyDescriptionProps> = ({ description }) => {
  return (
    <div>
      <h2 className='text-black'>Company Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default CompanyDescription;