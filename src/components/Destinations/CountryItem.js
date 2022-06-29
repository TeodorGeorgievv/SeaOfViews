import Card from "../UI/Card";
import classes from "./CountryItem.module.css";

const CountryItem = (props) => {
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.content}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default CountryItem;
