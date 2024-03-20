import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./customers";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MoviesForm from "./components/moviesForm";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/movies" component={MoviesForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
