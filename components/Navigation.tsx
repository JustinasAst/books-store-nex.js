import React from 'react';
import { BiHeadphone } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { VscBellDot } from 'react-icons/vsc';

interface ComponentPromps {
  menuToggle: boolean;
  menuTurnOff: () => void;
}

const Navigation: React.FC<ComponentPromps> = ({ menuTurnOff, menuToggle }) => {
  return (
    <nav className={`navigation ${menuToggle ? 'opened' : ''}`}>
      <ul className="navbar">
        <div className="user-navigation-box">
          <li className="exit-navigation" onClick={menuTurnOff}>
            <ImCross />
          </li>
          <li className="navigation-item bell-icon">
            <VscBellDot />
          </li>
          <li className="navigation-item lisen-item">
            <BiHeadphone />
          </li>
          <li className="navigation-item">
            <img
              className="user-img"
              src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
              alt="person"
            />
          </li>
        </div>

        <li className="navigation-item home">
          <AiFillHome />
        </li>
        <li className="navigation-item home">
          <AiOutlineHeart />
        </li>
        <li className="navigation-item home">
          <FiShoppingCart />
        </li>
        <li className="navigation-item person">
          <BsPerson />
        </li>

        <li className="navigation-item home">
          <MdLogout />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
