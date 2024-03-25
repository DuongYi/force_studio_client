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
      image: 'asset/logo/apple.png'
    },
    {
      id: 2,
      name: 'CH Play',
      image: 'asset/logo/chplay.png'
    },
    {
      id: 3,
      name: 'Window',
      image: 'asset/logo/window.png'
    }
  ];

  return (
    <section className="bg-[url('/asset/white-bg.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col flex-wrap w-full py-6">
        <div className='max-w-screen-2xl w-full mx-auto px-4'>
          <div className='flex justify-between content-center'>
            {platformList.map((platform) => (
              <div key={platform.id} >
                <img src={platform.image} alt={platform.name} className="h-24 max-w-96" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Platform;