import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <section>
        <div className={classes.footer}>
          <ul>
            <h2>TravelInspo</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
          </ul>
          <ul>
            <h2>Company</h2>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
          <ul>
            <h2>Contact</h2>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
          <ul>
            <h2>More</h2>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
