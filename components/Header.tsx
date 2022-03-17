import React from 'react';
import { VscBellDot } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

interface ComponentPromps {
  menuTurnOn: () => void;
}

const Header: React.FC<ComponentPromps> = ({ menuTurnOn }) => {
  return (
    <div className="header-box">
      <div className="burger-menu" onClick={menuTurnOn}>
        <GiHamburgerMenu />
      </div>

      <h2 className="greeting">Good Morning, Justinas</h2>

      <div className="input-bell-box">
        <label className="search-label">
          <BsSearch />
        </label>

        <input
          className="book-search-input"
          type="text"
          placeholder="Search books here"
        />

        <p className="bell">
          <VscBellDot />
        </p>
      </div>
    </div>
  );
};

export default Header;
