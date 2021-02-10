import React from 'react';
import { NavLink } from "react-router-dom";

const navs = [
  {
      path: '/'
      name: 'Home'
      },
        { path: '/about',
        name:'About' },

        { path: '/contact',
         name:'Contact' },
       ];

const Nav = () => (
  <nav className='bg-grey-200 text-black p-4'>
    <ul className='flex space-x-4' justify-mid>
      {ul className='flex space-x-6 justify-mid'>
    {navs.map((navItem) => (
        <li>
         <NavLink exact to={navItem.path} activeClassName='border-b-2 border black'>
          {navItem.name}
          </NavLink>
            </li>
          ))}
        </ul>
     </nav>
);

export default Nav;
