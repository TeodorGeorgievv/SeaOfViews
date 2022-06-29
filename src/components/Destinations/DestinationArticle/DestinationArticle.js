import classes from "./DestinationArticle.module.css";

const DestinationArticle = (props) => {
  return (
    <section className={classes.articleWrapper}>
      <figure className={classes.imageWrapper}>
        <img src={props.image} alt={props.heading} />
      </figure>
      <div className={classes.text}>
        <span>/ {props.country}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae
          aut, deserunt excepturi adipisci placeat, asperiores architecto nisi
          laborum veniam praesentium a magnam cupiditate vel.
        </p>
      </div>
    </section>
  );
};

export default DestinationArticle;
