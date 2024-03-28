/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface PlatformModule {
  id: number;
  name: string;
  image: string;
}

const Platform: React.FC = () => {

  const platformList: PlatformModule[] = [
    {
      id: 1,
      name: 'Apple',
      image: 'asset/pictures/logo/apple.png'
    },
    {
      id: 2,
      name: 'CH Play',
      image: 'asset/pictures/logo/chplay.png'
    },
    {
      id: 3,
      name: 'Window',
      image: 'asset/pictures/logo/window.png'
    }
  ];

  return (
    <section className="bg-[url('/asset/pictures/home/white-bg.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col flex-wrap w-full py-6 px-5">
        <div className='max-w-screen-2xl w-full mx-auto'>
          <div className='flex justify-between items-center overflow-hidden'>
            {platformList.map((platform) => (
              <div key={platform.id} >
                <img src={platform.image} alt={platform.name} className="max-h-8 max-w-52 sm:max-h-14 sm:max-w-64 md:max-h-16 md:max-w-72 xl:max-h-24 xl:max-w-96" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Platform;