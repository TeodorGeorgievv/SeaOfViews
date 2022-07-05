import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";

import classes from "./DestinationsList.module.css";

// import required modules

const DestinationsList = () => {
  const DUMMY_DATA = [
    {
      id: "iceland",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Church_of_light.jpg/1024px-Church_of_light.jpg",
      name: "Iceland",
      testimonial: "Years of Insipiring Travelers",
    },
    {
      id: "switzerland",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Zermatt_-_Mattervispa_und_Matterhorn.jpg/1024px-Zermatt_-_Mattervispa_und_Matterhorn.jpg",
      name: "Switzerland",
      testimonial: "Happy Travellers",
    },
    {
      id: "france",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg/1024px-Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg",
      name: "France",
      testimonial: "Places Featured",
    },
    {
      id: "spain",
      image:
        "https://i.postimg.cc/1zwL09RN/logan-armstrong-h-Vhfqh-DYci-U-unsplash.jpg",
      name: "Spain",
      testimonial: "Travel History",
    },
    {
      id: "italy",
      image:
        "https://i.postimg.cc/cLsgxQkD/jordan-steranka-z0-L0mo-9bg-unsplash.jpg",
      name: "Italy",
      testimonial: "Places Featured",
    },
    {
      id: "turkey",
      image:
        "https://i.postimg.cc/SK6v6bfQ/mehmet-turgut-kirkgoz-0-ASU0-LSWp6g-unsplash.jpg",
      name: "Turkey",
      testimonial: "Years of Insipiring Travelers",
    },
    {
      id: "usa",
      image:
        "https://i.postimg.cc/MTRVMz7t/ganapathy-kumar-L75-D18a-Val8-unsplash.jpg",
      name: "USA",
      testimonial: "Happy Travellers",
    },
    {
      id: "china",
      image:
        "https://i.postimg.cc/xCyGp0X8/william-olivieri-vh-KZv-NFmp-PU-unsplash.jpg",
      name: "China",
      testimonial: "Travel History",
    },
  ];

  return (
    <Fragment>
      <div className={classes.wrapper}>
        {DUMMY_DATA.map((user) => (
          <div key={user.id} className={classes.card}>
            <Card>
              <Link
                style={{ textDecoration: "none" }}
                to={`/travel/${user.id}`}
              >
                <div>
                  <div className={classes.image}>
                    <img src={user.image} alt={user.name} />
                  </div>
                  <div className={classes.content}>
                    <h3>{user.name}</h3>
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default DestinationsList;
