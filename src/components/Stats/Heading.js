import classes from "./Heading.module.css";

const Heading = (props) => {
  return (
    <div className={classes.heading}>
      <h1>{props.heading}</h1>
      <p>
        {props.description}
      </p>
    </div>
  );
};

export default Heading;
