import React, { useState } from "react";

function Item({ name, category }) {

  const [cartStatus, setCartStatus] = useState(false)
  
  function handleClick() {
    setCartStatus(currentStatus => !currentStatus)
  }

  const appClass = cartStatus ? "in-cart" : ""

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cartStatus ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;