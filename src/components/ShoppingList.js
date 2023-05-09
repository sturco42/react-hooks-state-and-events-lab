import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleChange(e) {
    setSelectedCategory(e.target.value)
  }

  const filteredItems = items.filter((item) => (
    selectedCategory === 'All' || selectedCategory === item.category
  ))

  const mappedItems = filteredItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {mappedItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
