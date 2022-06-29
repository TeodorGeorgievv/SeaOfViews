import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Travel from "./pages/Travel";
import CountryDetail from "./pages/CountryDetail";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/travel" exact>
          <Travel />;
        </Route>
        <Route path="/travel/:countryId">
          <CountryDetail />
        </Route>
        <Route path="/home">
          <HomePage />;
        </Route>
        <Route path="/about">
          <About />;
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
