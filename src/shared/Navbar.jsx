import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                
                
                <div className="text-xl font-black">Floka-Studio</div>

                <ul className="hidden lg:flex space-x-8 font-medium text-gray-600">
                    <li><a href="#" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600">Services</a></li>
                    <li><a href="#" className="hover:text-blue-600">About</a></li>
                </ul>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-2xl focus:outline-none" 
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {isOpen && (
                <ul className="lg:hidden mt-4 space-y-4 bg-gray-50 p-4 rounded-lg">
                    <li><a href="#" className="block text-gray-700">Home</a></li>
                    <li><a href="#" className="block text-gray-700">Services</a></li>
                    <li><a href="#" className="block text-gray-700">About</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;