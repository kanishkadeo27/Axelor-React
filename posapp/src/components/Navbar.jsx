import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#334155"}}>
        <div className="container-fluid">
          <a href="#home" className="navbar-brand" style={{color:"#fafafa"}}>
            GroceryBasket
          </a>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
