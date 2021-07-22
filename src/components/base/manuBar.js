import React from "react";

const NavBar = ({ filterItem, manuList }) => {
  return (
    <div>
      <nav className="navbar">
        {manuList.map((item, index) => (
          <button
            key={index}
            className={item === manuList ? "active" : "navBtn"}
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
