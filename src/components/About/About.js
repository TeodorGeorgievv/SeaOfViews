import { Link } from "react-router-dom";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <div className={classes.about}>
      <div>
        <h2>We are inspiring the people around the world</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          veritatis itaque facilis tempore impedit neque similique nulla? Minus
          id nostrum repellat dicta laboriosam corrupti blanditiis soluta ut
          asperiores.
        </p>
        <Link style={{ textDecoration: "none" }} to="/travel">
          <button className={classes.button}>Show more</button>
        </Link>
      </div>
      <div>
        <img src={props.image} alt="About us" />
      </div>
    </div>
  );
};

export default About;
