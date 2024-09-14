import { Link, useNavigate, useLocation } from 'react-router-dom';
import cc from '../assets/cclogo.png';
import avatar from '../assets/avatar.jpg';
import ccicon from '../assets/cclogoicon.png';
import { MdDashboard } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedIndex = localStorage.getItem('activeLink');
    if (savedIndex !== null) {
      setActiveLink(Number(savedIndex));
    }
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    localStorage.setItem('activeLink', index);
  };

  const handleLogout = () => {
    // Clear user session or token if needed
    // Example: localStorage.removeItem('userToken');
    navigate('/login');
  };

  const handleAccountClick = () => {
    setActiveLink(0);
    navigate('/overview');
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const Sidebar_Links = [
    { id: 1, path: '/overview', name: "Overview", icon: MdDashboard },
    { id: 2, path: '/patients', name: "Patients", icon: IoPeople },
    { id: 3, path: '/doctors', name: "Doctors & Staff", icon: FaUserDoctor },
    { id: 4, path: '/inventory', name: "Inventory", icon: MdInventory2 },
  ];

  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return null;
  }

  return (
    <>
      {/* Menu icon for opening sidebar on mobile */}
      {!isSidebarOpen && (
        <button
          className="fixed top-4 left-4 z-20 text-2xl text-gray-600 md:hidden"
          onClick={handleSidebarToggle}
        >
          <HiMenu />
        </button>
      )}

      {/* Sidebar container */}
      <div
        className={`fixed left-0 top-0 z-10 h-screen transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-white border-r md:translate-x-0 md:w-56 md:border-0 w-16`}
      >
        {/* Close button */}
        {isSidebarOpen && (
          <button
            className="absolute top-4 right-4 text-2xl text-gray-600 md:hidden"
            onClick={handleSidebarToggle}
          >
            <IoMdClose />
          </button>
        )}

        {/* logo */}
        <div className="md:py-6 md:px-3 md:pb-2 md:mb-8 flex items-center relative pt-12">
          <Link>
            <img src={cc} alt="careconnectlogo" className='w-42 hidden md:block md:mt-4' />
            <img src={ccicon} alt="careconnectlogo" className='w-36 mt-2 md:hidden' />
          </Link>
        </div>
        {/* logo */}

        {/* navigation links */}
        <ul className='flex-1 flex-col mt-8 space-y-6'>
          {
            Sidebar_Links.map((link, index) => (
              <li key={index} className={`font-medium rounded-md py-2 md:px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-200 text-indigo-500 hover:bg-indigo-200" : ""}`}>
                <Link onClick={() => handleLinkClick(index)} to={link.path} className='flex items-center md:space-x-3 justify-center md:justify-start md:items-start'>
                  <span className='text-lg pt-[2px]'>{link.icon()}</span>
                  <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
        {/* navigation links */}

        {/* Account */}
        <hr className='w-48 ml-2 absolute bottom-20 left-0 hidden md:block' />
        <div className='flex items-center space-x-6 p-4 w-2/3 absolute bottom-4 left-4 px-1 py-2'>
          <div className='flex items-center cursor-pointer w-full' onClick={handleAccountClick}>
            <img src={avatar} alt="" className='w-12 hidden md:block h-8 rounded-full md:w-10 md:h-10' />
            <div className='flex-1 justify-between items-center leading-5 w-52 ml-3'>
              <div className='font-semibold hidden md:block '>John Doe</div>
              <span className='text-xs text-gray-600 hidden md:block'>Receptionist</span>
            </div>
          </div>
          <div className="flex text-center items-center">
            <button
              className="text-lg font-medium text-neutral-600 relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-bottom data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:bottom-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-1.5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-black data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(100%_0,0_0,50%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:bottom-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px] max-md:right-14"
              data-tooltip="Logout"
              onClick={handleLogout}
            >
              <IoMdExit />
            </button>
          </div>
        </div>
        {/* Account */}
      </div>
    </>
  );
}

export default Sidebar;
