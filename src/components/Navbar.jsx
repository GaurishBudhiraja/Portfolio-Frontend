import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 
      bg-[rgba(10,10,10,0.78)] backdrop-blur-md border-b border-white/10`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* LOGO + NAME */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[48px] h-[48px] object-contain"
          />

          <h1 className="text-white text-[24px] font-bold font-poppins tracking-normal">
            Gaurish Budhiraja
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-gray-300'
              } hover:text-white text-[14px] font-semibold font-poppins uppercase tracking-[2px] cursor-pointer transition-all duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-5 bg-[rgba(15,15,15,0.96)] absolute top-0 right-0 w-[220px] min-h-screen z-20 backdrop-blur-lg`}
            >
              <div className="flex justify-end mb-6">
                <img
                  src={close}
                  alt="close"
                  className="w-6 h-6 object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>

              <ul className="list-none flex flex-col gap-6">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-white' : 'text-gray-300'
                    } text-[15px] font-semibold font-poppins uppercase tracking-[2px] cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-7 h-7 object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
