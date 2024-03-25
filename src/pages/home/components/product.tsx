import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const Product: React.FC = () => {

  const productList: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300
    }
  ];

  return (
    <section className="bg-[url('/asset/white-bg.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col flex-wrap w-full pt-14 pb-14">
        <div className='pt-24 pb-10 max-w-screen-2xl w-full mx-auto px-4'>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <h1 className='text-lg font-sans text-red-500 font-bold leading-tight text-center'>Thông tin</h1>
              <p className='text-2xl text-black mt-3 text-center'>Tuyển dụng</p>
            </div>
            {productList.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add to cart</button>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Product;