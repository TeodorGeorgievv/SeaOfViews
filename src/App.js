import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Travel from "./pages/Travel";
import CountryDetail from "./pages/CountryDetail";
import Layout from "./components/Layout/Layout";
import ScrollToTop from './components/UI/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
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
          <AboutPage />;
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
