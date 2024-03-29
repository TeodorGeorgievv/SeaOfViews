import classes from "./DestinationArticle.module.css";

const DestinationArticle = (props) => {
  return (
    <section className={classes.articleWrapper}>
      <figure className={classes.imageWrapper}>
        <img src={props.image} alt={props.heading} />
      </figure>
      <div className={classes.text}>
        <span>/ {props.location}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae
          aut, deserunt excepturi adipisci placeat.
        </p>
      </div>
    </section>
  );
};

export default DestinationArticle;
