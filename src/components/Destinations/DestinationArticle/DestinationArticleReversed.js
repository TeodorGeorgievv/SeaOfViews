import classes from "./DestinationArticle.module.css";

const DestinationArticleReversed = (props) => {
  return (
    <section className={classes.articleWrapper}>
      <div className={classes.text}>
        <span>/ {props.location}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae
          aut, deserunt excepturi adipisci placeat.
        </p>
      </div>
      <figure className={classes.imageWrapper}>
        <img src={props.image} alt={props.heading} />
      </figure>
    </section>
  );
};

export default DestinationArticleReversed;
