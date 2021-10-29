import { Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Products } from "../Pages/Products";
import { Register } from "../Pages/Register";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Switch>
  );
};
