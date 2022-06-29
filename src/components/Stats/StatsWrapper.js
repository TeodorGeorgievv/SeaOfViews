import classes from "./StatsWrapper.module.css";

const StatsWrapper = (props) => {
  return <section className={classes.wrapper}>{props.children}</section>;
};

export default StatsWrapper;
