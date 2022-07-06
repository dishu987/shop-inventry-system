import React from "react";
function Navbar(props) {
  return (
    <div>
      <nav className="p-3 h3">{props.text}</nav>
    </div>
  );
}
export default Navbar;
