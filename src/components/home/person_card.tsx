/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface PersonCardProps {
  name: string;
  jobTitle: string;
  image: string;
  link: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, jobTitle, image, link }) => {
  return (
    <div className="person-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{jobTitle}</h3>
      <a href={link}>Learn More</a>
    </div>
  );
};

export default PersonCard;