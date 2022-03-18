import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({onItemFormSubmit, items}) {
  const [formData, setForm] = useState({
    filter: "All",
    search: ""
  });

  function handleFormChange(e) {
    setForm({...formData, [e.target.name]: e.target.value});
  }

  const itemsToDisplay = items.filter((item) => {
    if (formData.filter === "All") {
      return item.name.includes(formData.search);
    }

    return item.category === formData.filter && item.name.includes(formData.search);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={console.log(formData.search)} onSearchChange={handleFormChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;