import React from "react";
import Search from "./Search";

function Header( {handleChange} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleChange = {handleChange}/>
    </header>
  );
}

export default Header;
