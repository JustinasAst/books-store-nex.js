import React from 'react';
import { BiHeadphone } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navbar-nav">
        <div className="user-nav-box">
          <li className="nav-item lisen-item">
            <BiHeadphone />
          </li>
          <li className="nav-item">
            <img
              className="user-img"
              src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
              alt="person"
            />
          </li>
        </div>

        <li className="nav-item">
          <AiFillHome />
        </li>
        <li className="nav-item">
          <AiOutlineHeart />
        </li>
        <li className="nav-item">
          <FiShoppingCart />
        </li>
        <li className="nav-item">
          <BsPerson />
        </li>
        <li className="nav-item">
          <MdLogout />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
