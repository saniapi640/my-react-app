import React from "react";
import Navigation from './Navigation';

function Header(){
  return (
        <header className="border-b p-3 flex justify-between items-center bg-white">
            <span className="font-bold text-3xl">AC QD Funnel</span> 
            { <Navigation /> }
        </header>
    );
}
export default Header;