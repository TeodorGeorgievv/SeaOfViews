import Card from "../UI/Card";
import classes from "./RecommendedCountryItem.module.css";

const RecommendedCountryItem = (props) => {
  return (
    <div className={classes.wrapper}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default RecommendedCountryItem;
