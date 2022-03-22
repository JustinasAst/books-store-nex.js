import React from 'react';
import { VscBellDot } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaLongArrowAltUp, FaSearch } from 'react-icons/fa';

interface ComponentPromps {
  menuTurnOn: () => void;
  searchTurnOn: () => void;
  searchTurnOff: () => void;
  searchToggle: boolean;
}

const Header: React.FC<ComponentPromps> = ({
  menuTurnOn,
  searchTurnOn,
  searchToggle,
  searchTurnOff,
}) => {
  return (
    <div className="header-box">
      <div className="burger-menu" onClick={menuTurnOn}>
        <GiHamburgerMenu className="burger" />
      </div>
      <div className="turn-on-search" onClick={searchTurnOn}>
        <FaSearch />
      </div>

      <h2 className="greeting">Good Morning, Justinas</h2>

      <div className="input-bell-box">
        <div className={`search-imput-box ${searchToggle ? 'open' : ''} `}>
          <div className="search-imput-icon-box">
            <i className="search-label">
              <BsSearch />
            </i>

            <input
              className="book-search-input"
              type="text"
              placeholder="Search books here"
            />
          </div>

          <button className="close-search" onClick={searchTurnOff}>
            <FaLongArrowAltUp />
          </button>
        </div>

        <p className="bell-icon">
          <VscBellDot />
        </p>
      </div>
    </div>
  );
};

export default Header;
