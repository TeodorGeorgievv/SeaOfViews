import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecommendedCountryItem from "./RecommendedCountryItem";
import classes from "./RecommendedList.module.css";

const RecommendedList = (props) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://travel-blog-8a688-default-rtdb.firebaseio.com/countries.json"
      );
      const responseData = await response.json();

      const loadedCountries = [];

      for (const key in responseData) {
        loadedCountries.push({
          id: key,
          name: responseData[key].name,
          image: responseData[key].image,
          description: responseData[key].description,
        });
      }

      setCountryData(loadedCountries);
    };
    fetchData();
  }, []);

  const countriesList = countryData.map((country) => (
    <Link style={{textDecoration: "none", color: 'black'}} to={`/travel/${country.name.toLowerCase()}`}>
      <RecommendedCountryItem
        key={country.id}
        id={country.id}
        name={country.name}
        image={country.image}
        description={country.description}
      />
    </Link>
  ));

  return (
    <section className={classes.countries}>
      <div className={classes.labelWrap}>
        <h2 className={classes.label}>{props.label}</h2>
      </div>
      <ul>{countriesList}</ul>
    </section>
  );
};

export default RecommendedList;
