import React from 'react';
import { ProductCardModel } from '../models/product_card_model';
import ProductCard from '@/components/home/product_card';

interface CompanyProductProps {
  title?: string;
  products?: ProductCardModel[];
}

const CompanyProduct: React.FC<CompanyProductProps> = (props: CompanyProductProps) => {
  return (
    <div className='pb-1 md:pb-10'>
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
  title: 'Hãy xem những gì chúng tôi đã sáng tạo nên',
  products: [
    new ProductCardModel(1, 'asset/pictures/product/product_1.jpg', 'Red Dragon', "Tuyệt vời! Hãy cùng KHÁM PHÁ! CHIẾN ĐẤU! XÂY DỰNG! Tham gia cùng cộng đồng hàng triệu chiến binh!", ['Survival', 'Action', 'Adventure']),
    new ProductCardModel(2, 'asset/pictures/product/product_2.jpg', 'Đấu phá vô song', "Một trong những tựa game online nổi tiếng và được đánh giá cao nhất mọi thời đại hiện nay", ['Multiplayers', 'Online', 'Action', 'Adventure']),
    new ProductCardModel(3, 'asset/pictures/product/product_3.jpg', 'Greate Wall Def', "Đây là một game phòng thủ, nơi bạn xây dựng và điều khiển quân đội để bảo vệ lâu đài chống lại sự tấn công của kẻ thù", ['Survival', 'Offline', 'Defense']),
    new ProductCardModel(4, 'asset/pictures/product/product_4.jpg', 'Dragon Slayder', "Đây là một game hành động bảo vệ lâu đài chống lại sự tấn công của loài rồng.", ['Survival', 'Offline', 'Defense']),
  ]
};

export default CompanyProduct;