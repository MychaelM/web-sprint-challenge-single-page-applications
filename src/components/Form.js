import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
        .string()
        .min(2, "Names must be at least 2 characters long.")
        .required("Must include your name.")
})

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

  const [errorState, setErrorState] = useState({
    name: ""
  })

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value; 

      yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
          setErrorState({
            ...errorState,
            [e.target.name]: ''
          });
        })
        .catch(err => {
          setErrorState({
            ...errorState,
            [e.target.name]: err.errors[0]
          });
        })
  }

  const inputChange = (e) => {
    e.persist();
    // console.log(e.target.value);
    validate(e);
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value }) 
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form');
    axios
      .post(`https://reqres.in/api/users`, formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      setFormData({
        name: "",
        pizzaSize: "",
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        grilledChicken: false,
        specialInstructions: "",
      });
  }

  return (
    <div>
      <h2>Build Your Own Pizza!</h2>
      <form onSubmit={formSubmit}>
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
        {errorState.name.length > 0 ? (
          <p>{errorState.name}</p>
        ) : null}
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