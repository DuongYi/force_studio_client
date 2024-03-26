import React from 'react';
import { CompanyPersonModel } from '../models/company_person_model';

interface CompanyOutstandingProps {
  title: string;
  description: string;
  members: CompanyPersonModel[];
}

const CompanyOutstanding: React.FC<CompanyOutstandingProps> = (props: CompanyOutstandingProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ul>
        {props.members.map((member) => (
          <li key={member.id}>{ }</li>
        ))}
      </ul>
    </div>
  );
};

CompanyOutstanding.defaultProps = {
  title: 'Get to know the exceptional professionals who make our team shine',
  description: 'Discover the exceptional professionals talent driving our team success - our brilliant game developers.',
  members: [
    new CompanyPersonModel(1, 'Thị Dũng', 'CEO', 'asset/person/person_1.jpg', 'https://www.google.com'),
    new CompanyPersonModel(2, 'Đức Dương', 'HR', 'asset/person/person_2.jpg', 'https://www.google.com'),
    new CompanyPersonModel(3, 'Thị Anh', 'CFO', 'asset/person/person_3.jpg', 'https://www.google.com'),
    new CompanyPersonModel(4, 'Thị Đăng', 'COO', 'asset/person/person_4.jpg', 'https://www.google.com'),
    new CompanyPersonModel(4, 'Thị Huy', 'DEV', 'asset/person/person_4.jpg', 'https://www.google.com'),
  ]
};

export default CompanyOutstanding;