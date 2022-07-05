import { Fragment } from "react";
import Header from "../components/Layout/Header";
import About from "../components/About/About";

const AboutPage = () => {
  return (
    <Fragment>
      <Header
        heading="About Sea Of Views"
        mainHeader="https://i.postimg.cc/bYxKtJ2N/matt-hardy-6-Ar-TTluciu-A-unsplash.jpg"
      />
      <About image="https://i.postimg.cc/rsC9ryXb/mike-swigunski-cl-IW7-Gb-VIJo-unsplash-2.jpg" />
    </Fragment>
  );
};

export default AboutPage;
