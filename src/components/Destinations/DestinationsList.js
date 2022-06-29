import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";

import classes from "./DestinationsList.module.css";

// import required modules

const DestinationsList = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const DUMMY_DATA = [
    {
      id: 'reykjavik',
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Church_of_light.jpg/1024px-Church_of_light.jpg",
      name: "Reykjavik, Iceland",
      testimonial: "Years of Insipiring Travelers",
    },
    {
      id: 'zermatt',
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Zermatt_-_Mattervispa_und_Matterhorn.jpg/1024px-Zermatt_-_Mattervispa_und_Matterhorn.jpg",
      name: "Zermatt, Switzerland",
      testimonial: "Happy Travellers",
    },
    {
      id: 'paris',
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg/1024px-Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg",
      name: "Paris, France",
      testimonial: "Places Featured",
    },
    {
      id: 'barcelona',
      image:
        "https://i.postimg.cc/1zwL09RN/logan-armstrong-h-Vhfqh-DYci-U-unsplash.jpg",
      name: "Barcelona, Spain",
      testimonial: "Travel History",
    },
    {
      id: 'maldives',
      image:
        "https://i.postimg.cc/VL2GK3V9/rayyu-maldives-x-Ps-FXsb-XJRg-unsplash.jpg",
      name: "Maldives",
      testimonial: "Years of Insipiring Travelers",
    },
    {
      id: 'sydney',
      image:
        "https://i.postimg.cc/wMmJNgD0/dan-freeman-7-Zb7k-Uy-Qg1-E-unsplash.jpg",
      name: "Sydney, Australia",
      testimonial: "Happy Travellers",
    },
    {
      id: 'positano',
      image:
        "https://i.postimg.cc/cLsgxQkD/jordan-steranka-z0-L0mo-9bg-unsplash.jpg",
      name: "Positano, Italy",
      testimonial: "Places Featured",
    },
    {
      id: 'kenya',
      image:
        "https://i.postimg.cc/Y9ww7xb0/craig-stevenson-gf3-v7-Pmp7-M-unsplash.jpg",
      name: "Kenya",
      testimonial: "Travel History",
    },
    {
      id: 'cappadocia',
      image:
        "https://i.postimg.cc/SK6v6bfQ/mehmet-turgut-kirkgoz-0-ASU0-LSWp6g-unsplash.jpg",
      name: "Cappadocia, Turkey",
      testimonial: "Years of Insipiring Travelers",
    },
    {
      id: 'grandcanyon',
      image:
        "https://i.postimg.cc/MTRVMz7t/ganapathy-kumar-L75-D18a-Val8-unsplash.jpg",
      name: "Grand Canyon, USA",
      testimonial: "Happy Travellers",
    },
    {
      id: 'patagonia',
      image:
        "https://i.postimg.cc/vT4RLSmP/hans-jurgen-weinhardt-5-RFMPuf-TKPA-unsplash.jpg",
      name: "Patagonia, Argentina",
      testimonial: "Places Featured",
    },
    {
      id: 'beijing',
      image:
        "https://i.postimg.cc/xCyGp0X8/william-olivieri-vh-KZv-NFmp-PU-unsplash.jpg",
      name: "Beijing, China",
      testimonial: "Travel History",
    },
  ];

  return (
    <Fragment>
      <div className={classes.wrapper}>
        {DUMMY_DATA.map((user) => (
          <div className={classes.card}>
            <Card>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className={classes.image}>
                  <img src={user.image} alt={user.name} />
                </div>
                <div className={classes.content}>
                  <h3>{user.name}</h3>
                  {isHovering && (
                    <Link to={`/travel/${user.id}`}>
                      <button>Read more</button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default DestinationsList;
