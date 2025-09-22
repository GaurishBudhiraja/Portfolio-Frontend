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
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          <span className="text-[24px] sm:text-[28px] font-bold text-black">
            Gaurish Budhiraja
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-4 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-60 max-h-screen overflow-y-auto z-10 rounded-lg menu ${toggle ? 'menu-open' : 'menu-close'}`}
            >
              <div className="flex justify-end mb-4">
                <img
                  src={close}
                  alt="close"
                  className="w-6 h-6 object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>

              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-xl font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
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
              className="w-8 h-8 object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
