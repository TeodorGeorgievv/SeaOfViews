import { Fragment } from "react";
import { Parallax } from "react-parallax";
import classes from "./HighlightedCountry.module.css";
import DestinationArticle from "./DestinationArticle/DestinationArticle";
import DestinationArticleReversed from "./DestinationArticle/DestinationArticleReversed";

const HighlightedCountry = (props) => {

  return (
    <Fragment>
      <Parallax bgImage={props.headImage} strength={400}>
        <div style={{ width: "500px", height: "46rem" }}></div>
      </Parallax>
      <div className={classes.country}>
        <div className={classes.innerDiv}>
          <h1>{props.country.toUpperCase()}</h1>
        </div>
      </div>
      <div className={classes.description}>
        <h3>/ {props.country.toLowerCase()}</h3>
        <p style={{ fontFamily: "Jost, sans-serif" }}>
          SUPERB HIKING AND ENTHRALLING HISTORY
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          perspiciatis eius consequatur ut debitis! Dolores quae consequuntur
          omnis, architecto, ipsa labore provident vitae nihil, esse aspernatur
          cupiditate odio recusandae! Ab!
        </p>
        <p>
          Accusantium eveniet tenetur sapiente aliquid quae quod voluptates
          magnam, quisquam soluta reprehenderit odio velit iste quos
          perspiciatis dolore ipsum aspernatur nulla distinctio accusamus,
          tempora numquam odit eum saepe! Rerum, ducimus!
        </p>
        <p>
          Repellendus cupiditate vero ipsa cum earum nostrum, fugiat
          voluptatibus quod suscipit? Totam incidunt ipsam deserunt similique
          reiciendis? Ea explicabo esse reprehenderit dolores aliquam quas id
          cum. Voluptatem unde dolor libero.
        </p>
        <p>
          Dolorem ipsum quia assumenda alias sed reiciendis sequi labore est
          mollitia officia. Ea dolores temporibus tempore eveniet nisi earum
          aliquid veritatis deleniti optio perspiciatis fugit, alias dicta
          praesentium explicabo nostrum.
        </p>

        <DestinationArticle
          heading={props.description}
          location={props.firstArticleHeading}
          image={props.firstArticleImage}
        />
        <DestinationArticleReversed
          heading={props.description}
          location={props.secondArticleHeading}
          image={props.secondArticleImage}
        />
      </div>
    </Fragment>
  );
};

export default HighlightedCountry;
