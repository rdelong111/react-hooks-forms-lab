import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, onFormDataChange] = useState({
    name: "",
    category: "Produce"
  });

  function handleFormDataChange(e) {
    onFormDataChange({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({...formData, id: uuid()})
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleFormDataChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleFormDataChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;