import React from 'react';
import { ProductCardModel } from '../models/product_card_model';
import ProductCard from '@/components/home/product_card';

interface CompanyProductProps {
  title?: string;
  products?: ProductCardModel[];
}

const CompanyProduct: React.FC<CompanyProductProps> = (props: CompanyProductProps) => {
  return (
    <div className='pb-10'>
      <h1 className='text-black text-xl sm:text-3xl lg:text-5xl font-bold max-w-screen-sm leading-[30px] sm:leading-[45px] lg:leading-[60px]'>{props.title}</h1>
      <div className='grid grid-cols-4 items-start mt-10 gap-10'>
        {props.products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

CompanyProduct.defaultProps = {
  title: 'Our lovely children. See what we have created',
  products: [
    new ProductCardModel(1, 'asset/pictures/product/product_1.jpg', 'Red Dragon', "DIG! FIGHT! EXPLORE! BUILD! Join the community of millitons of Terrarians", ['Survival', 'Action', 'Adventure']),
    new ProductCardModel(2, 'asset/pictures/product/product_2.jpg', 'Đấu phá vô song', "One of the most popular and highest rated game online of all time now", ['Multiplayers', 'Online', 'Action', 'Adventure']),
    new ProductCardModel(3, 'asset/pictures/product/product_3.jpg', 'Greate Wall Def', "It is a defense game to protect the castle from enemy attack", ['Survival', 'Offline', 'Defense']),
    new ProductCardModel(4, 'asset/pictures/product/product_4.jpg', 'Dragon Slayder', "It is a action game to protect the castle from dragon attack", ['Survival', 'Offline', 'Defense']),
  ]
};

export default CompanyProduct;