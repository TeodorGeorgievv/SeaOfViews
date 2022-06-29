import React from "react";
import Card from "./Card";
import StatsWrapper from "../Stats/StatsWrapper";
import Heading from "../Stats/Heading";

import classes from "./Stats.module.css";

// import required modules

const Stats = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      image: "https://i.postimg.cc/wT9m3NDC/calendar.png",
      name: "2+",
      testimonial: "Years of Insipiring Travelers",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/MHdX1Mqt/stats.png",
      name: "10k+",
      testimonial: "Happy Travellers",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/52h9QcZX/placeholder.png",
      name: "650+",
      testimonial: "Places Featured",
    },
    {
      id: 4,
      image: "https://i.postimg.cc/598fTkQJ/history.png",
      name: "2k+",
      testimonial: "Travel History",
    },
  ];

  return (
    <StatsWrapper>
      <Heading
        heading="We always try to give you the best service"
        description="We always try to make our customer happy. We provide all kind of
        facilities. Your Satisfaction is our main priority."
      />
      <div className={classes.card}>
        {DUMMY_DATA.map((user) => (
          <Card>
            <div className={classes.image}>
              <img src={user.image} alt={user.name} />
            </div>
            <div className={classes.content}>
              <h3>{user.name}</h3>
              <p>{user.testimonial}</p>
            </div>
          </Card>
        ))}
      </div>
    </StatsWrapper>
  );
};

export default Stats;
