import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Button from "../button/Button";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='shadow py-8'>
          <div className="container mx-auto px-8 lg:px-24 lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to={'/'}>
              <h1 className="text-2xl font-semibold">Scic<span className="text-primary">Task</span></h1>
              </Link>
  
  
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu">
                  <RiMenu3Fill className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} />
                  <RxCross2 className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </div>
  
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                }`}
            >
              {/* nav menu items */}
              <div className="flex flex-col lg:flex-row lg:items-center">
                <Link to={'/'} className="hover:text-primary">
                  <Button text={"Home"} />
                </Link>
              </div>
  
              <div className="flex">
                {/* tailwind button components */}
                <Link to={'/login'} className="hover:text-primary">
                  <button className="lg:ml-20 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primaryGray focus:outline-none focus:bg-primaryGray cursor-pointer">Login</button>
                </Link>
              </div>
            </div>
          </div>
      </nav>
    );
};

export default Navbar;