import { useState } from 'react';
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import flash from '../assets/logo.png';

const Header = () => {
  const [drop, setDrop] = useState(null);

  const handleMouseEnter = () => {
    setDrop('lang');
  };

  const handleMouseLeave = () => {
    setDrop(null);
  };

  return (
    <div className="flex justify-around items-center bg-black text-white h-[64px]">
      <img src={flash} width="44px" height="44px" alt="Flash" className="my-3" />
      <nav className="flex items-center overflow-visible">
        <ul className="flex flex-row gap-8">
          <li><a href="/">Home</a></li>
          <li><a href="/case-studies">Case studies</a></li>
          <li><a href="/about-us">About us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/what-we-do">What we do</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="flex flex-row gap-2">
              <LiaFlagUsaSolid /> English 
              {drop ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </a>
            {drop === 'lang' && (
              <ul className='absolute h-max bg-black text-white gap-1 p-2 rounded-sm'>
                <li className='hover:underline cursor-pointer'>French</li>
                <li className='hover:underline cursor-pointer'>Spanish</li>
                <li className='hover:underline cursor-pointer'>Danish</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;