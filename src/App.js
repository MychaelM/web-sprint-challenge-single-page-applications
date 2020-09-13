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
            <img src="../Assets/Pizza.jpg" alt="pizza" />
            <Link to="/pizza">
              <button>Pizza</button>
            </Link>
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
