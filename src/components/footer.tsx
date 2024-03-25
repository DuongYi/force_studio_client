import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam consequat, arcu nunc vestibulum nisl, in lacinia nunc metus id metus.</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <p className="text-sm">123 Main Street</p>
          <p className="text-sm">City, State 12345</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@example.com</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 10.5H13V15H11V10.5H8.5V8H11V6C11 5.17 11.17 4.5 12 4.5H13.5V7H12C11.67 7 11 7 11 7V8.5H13.5V11H11V15H15.5V10.5Z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 9.5C16.5 9.5 16.5 9.5 16.5 9.5C17.33 9.5 18 10.17 18 11C18 11.83 17.33 12.5 16.5 12.5C15.67 12.5 15 11.83 15 11C15 10.17 15.67 9.5 16.5 9.5ZM12 9C12.83 9 13.5 9.67 13.5 10.5C13.5 11.33 12.83 12 12 12C11.17 12 10.5 11.33 10.5 10.5C10.5 9.67 11.17 9 12 9ZM9.5 9.5C10.33 9.5 11 10.17 11 11C11 11.83 10.33 12.5 9.5 12.5C8.67 12.5 8 11.83 8 11C8 10.17 8.67 9.5 9.5 9.5ZM7 15.5C7 15.5 7 15.5 7 15.5C7 16.33 7.67 17 8.5 17H15.5C16.33 17 17 16.33 17 15.5V8.5C17 7.67 16.33 7 15.5 7H8.5C7.67 7 7 7.67 7 8.5V15.5Z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 9.5C17.83 9.5 18.5 10.17 18.5 11C18.5 11.83 17.83 12.5 17 12.5C16.17 12.5 15.5 11.83 15.5 11C15.5 10.17 16.17 9.5 17 9.5ZM12 9C12.83 9 13.5 9.67 13.5 10.5C13.5 11.33 12.83 12 12 12C11.17 12 10.5 11.33 10.5 10.5C10.5 9.67 11.17 9 12 9ZM9.5 9.5C10.33 9.5 11 10.17 11 11C11 11.83 10.33 12.5 9.5 12.5C8.67 12.5 8 11.83 8 11C8 10.17 8.67 9.5 9.5 9.5ZM7 15.5C7 15.5 7 15.5 7 15.5C7 16.33 7.67 17 8.5 17H15.5C16.33 17 17 16.33 17 15.5V8.5C17 7.67 16.33 7 15.5 7H8.5C7.67 7 7 7.67 7 8.5V15.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;