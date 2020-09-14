import React from 'react';

function Form() {
  return (
    <div>
      <h2>Build Your Own Pizza!</h2>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" value="" onChange="" />
        </label>
        <br />

        <label htmlFor="pizzaSize">
          Choice of Size:
          <p>Required</p>
          <select id="pizzaSize" name="pizzaSize" value="" onChange="">
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
              checked=""
              onChange=""
            />
            <label htmlFor="pepporoni">Pepperoni</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sausage"
              name="sausage"
              checked=""
              onChange=""
            />
            <label htmlFor="sausage">Sausage</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="canadianBacon"
              name="canadianBacon"
              checked=""
              onChange=""
            />
            <label htmlFor="canadianBacon">Canadian Bacon</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="grilledChicken"
              name="grilledChicken"
              checked=""
              onChange=""
            />
            <label htmlFor="grilledChicken">Grilled Chicken</label>
          </div>
        </label>
        <br />

        <label htmlFor="specialInstructions">
          Special Instructions:
          <br/>
          <textarea
            type="textArea"
            id="specialInstructions"
            name="specialInstructions"
            value=""
            onChange=""
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