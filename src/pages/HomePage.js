import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Header from "../components/Layout/Header";
import RecommendedList from "../components/Destinations/RecommendedList";
import Stats from "../components/UI/Stats";

const HomePage = () => {
  return (
    <Fragment>
      <Header
        mainHeader="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Vinci%2C_Tuscany_05.08.2012.jpg/1280px-Vinci%2C_Tuscany_05.08.2012.jpg"
        heading="Inspiration for your next travel"
        label="Editor's recommendations"
      />
      <Link to="/travel">
        <Button title="Discover more" />
      </Link>
      <RecommendedList />
      <Stats />
    </Fragment>
  );
};

export default HomePage;
