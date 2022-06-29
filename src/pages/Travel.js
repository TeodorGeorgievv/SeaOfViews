import { Fragment } from "react";
import Header from "../components/Layout/Header";
import DestinationsList from "../components/Destinations/DestinationsList";

const Travel = () => {
  return (
    <Fragment>
      <Header
        heading="Top 12 Destinations of 2022"
        mainHeader="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Floatplane_at_Bathala_%28Maldives%29.jpg/1280px-Floatplane_at_Bathala_%28Maldives%29.jpg"
      />
      <DestinationsList />
    </Fragment>
  );
};

export default Travel;
