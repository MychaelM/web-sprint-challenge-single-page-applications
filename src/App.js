import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
      </header>
      <div>
        <Switch>
          <Route path="/pizza">
            <Form />
          </Route>
          <Route path="/">
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="pizza"
              width="30%"
            />
            <br/>
            
            <Link to="/pizza">
              <button data-cy="pizzaFormButton">Pizza</button>
            </Link>
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
