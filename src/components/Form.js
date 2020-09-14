import React, { useState } from 'react';

function Form() {

  const [formData, setFormData] = useState({
    name: "",
    pizzaSize: "",
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    grilledChicken: false,
    specialInstructions: ""
  });

  const inputChange = (e) => {
    e.persist();
    // console.log(e.target.value);
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value }) 
  }

  return (
    <div>
      <h2>Build Your Own Pizza!</h2>
      <form>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={inputChange}
          />
        </label>
        <br />

        <label htmlFor="pizzaSize">
          Choice of Size:
          <p>Required</p>
          <select
            id="pizzaSize"
            name="pizzaSize"
            value={formData.pizzaSize}
            onChange={inputChange}
          >
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <br />

        <label htmlFor="toppings">
          Add Toppings:
          <p>Choose up to 2</p>
          <div>
            <input
              type="checkbox"
              id="pepperoni"
              name="pepperoni"
              checked={formData.pepperoni}
              onChange={inputChange}
            />
            <label htmlFor="pepporoni">Pepperoni</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sausage"
              name="sausage"
              checked={formData.sausage}
              onChange={inputChange}
            />
            <label htmlFor="sausage">Sausage</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="canadianBacon"
              name="canadianBacon"
              checked={formData.canadianBacon}
              onChange={inputChange}
            />
            <label htmlFor="canadianBacon">Canadian Bacon</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="grilledChicken"
              name="grilledChicken"
              checked={formData.grilledChicken}
              onChange={inputChange}
            />
            <label htmlFor="grilledChicken">Grilled Chicken</label>
          </div>
        </label>
        <br />

        <label htmlFor="specialInstructions">
          Special Instructions:
          <br />
          <textarea
            type="textArea"
            id="specialInstructions"
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={inputChange}
            placeholder="Anything else you'd like to add?"
          />
        </label>
        <br />
        <button type="submit">Add to Order</button>
      </form>
    </div>
  );
}

export default Form;