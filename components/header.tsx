import React from 'react';
import { VscBellDot } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="header-box">
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
