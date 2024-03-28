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
    <div className='py-16 mt-1 md:mt-10 lg:mt-14 xl:mt-20 mb-7 md:mb-14 xl:mb-20'>
      <h1 className='text-black text-center text-xl sm:text-3xl lg:text-5xl font-bold mb-6 max-w-screen-lg mx-auto leading-[30px] sm:leading-[45px] lg:leading-[60px]'>{props.title}</h1>
      <p className='text-black text-center text-base sm:text-xl lg:text-2xl max-w-screen-md mx-auto leading-6 sm:leading-7 lg:leading-8'>{props.description}</p>
      <div className='grid grid-cols-3 gap-10 mt-16'>
        {props.positiveList?.map((item) => (
          <CompanyCard key={item.id} icon={item.icon} color={item.color} shadowColor={item.shadowColor} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

// default props
CompanyDescription.defaultProps = {
  title: 'Chúng tôi tin rằng các công ty vững mạnh xuất phát từ những giá trị và tầm nhìn vững chắc',
  description: 'Xây dựng nền tảng vững chắc cho thành công - Sức mạnh của giá trị và tầm nhìn chung trong việc tạo ra một công ty vững mạnh.',
  positiveList: [
    new CompanyCardModel(1, "asset/pictures/icon/next.svg", "bg-[#ffc700]", "shadow-[#f2d885]", 'Cộng tác #1', 'Bằng Sức Mạnh Cộng tác - Mở đường cho Sáng tạo và Khả năng Mới #1.'),
    new CompanyCardModel(2, "asset/pictures/icon/vercel.svg", "bg-[#24dbda]", "shadow-[#8ef2f2]", ' Vươn lên', 'Chấp nhận thay đổi, nuôi dưỡng khả năng thích nghi và phấn đấu xuất sắc - Hành trình của những người Không ngừng phát triển.'),
    new CompanyCardModel(3, "asset/pictures/icon/vercel.svg", "bg-[#80db24]", "shadow-[#c7fd92]", 'Sự gắn kết', 'Một đội ngũ gắn kết mạnh mẽ sẽ vượt trội hơn tổng các cá nhân riêng lẻ, và bí quyết thành công của chúng tôi nằm ở những đóng góp độc đáo của từng thành viên.'),
  ]
};

export default CompanyDescription;