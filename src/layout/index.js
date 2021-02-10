import React from "react";

import Nav from './Nav';

const Layout = (props) => <div>
  <div className='bg-grey-500 border
  border-black m-5'>
<nav>
    <ul>
        <li>
         <a href="#">Home</a>
            </li>
        <li>
        <a href="#">About</a>
           </li>
        <li>
        <a href="#">Contact</a>
            </li>
        </ul>
     </nav>
      {props.children}
    </div>;
);


export { Layout, Nav };
