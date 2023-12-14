import React from "react";
function Footer(){
    const currentYear = new Date().getFullYear();
  return (
        <footer className="w-full bg-white text-center text-xs p-3 absolute bottom-0">
            &copy; Copyright {currentYear}
        </footer>
    );
}
export default Footer;