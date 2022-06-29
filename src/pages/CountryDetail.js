import { useParams } from "react-router-dom";
import { Fragment } from "react";

import HighlightedCountry from "../components/Destinations/HighlightedCountry";

const DUMMY_COUNTRIES = [
  {
    id: "reykjavik",
    country: "Reykjavik, Iceland",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Jokulsarlon_lake%2C_Iceland.jpg",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "zermatt",
    country: "Zermatt, Switzerland",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Zermatt_-_Mattervispa_und_Matterhorn.jpg/2560px-Zermatt_-_Mattervispa_und_Matterhorn.jpg",
    description:
      "‘In a country where peace prevails in every corner, everything looks prettier, calmer and wiser! – Mehmet Murat Ildan",
  },
  {
    id: "paris",
    country: "Paris, France",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg/2560px-Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg",
    description:
      "“A walk about Paris will provide lessons in history, beauty, and in the point of life.” —Thomas Jefferson",
  },
  {
    id: "barcelona",
    country: "Barcelona, Spain",
    image:
      "https://i.postimg.cc/1zwL09RN/logan-armstrong-h-Vhfqh-DYci-U-unsplash.jpg",
    description:
      "“Even the moon was embarrassed by the beauty of Barcelona.” – Andrew Barger",
  },
  {
    id: "maldives",
    country: "Maldives",
    image:
      "https://i.postimg.cc/VL2GK3V9/rayyu-maldives-x-Ps-FXsb-XJRg-unsplash.jpg",
    description:
      "If you follow your heart just right, it will get you to the Maldives",
  },
  {
    id: "sydney",
    country: "Sydney, Australia",
    image:
      "https://i.postimg.cc/wMmJNgD0/dan-freeman-7-Zb7k-Uy-Qg1-E-unsplash.jpg",
    description:
      "“If Paris is a city of lights, Sydney is the city of fireworks.” – Baz Luhrmann",
  },
  {
    id: "positano",
    country: "Positano, Italy",
    image:
      "https://i.postimg.cc/cLsgxQkD/jordan-steranka-z0-L0mo-9bg-unsplash.jpg",
    description:
      "“Positano bites deep. It is a dream place that is not quite real when you are there and becomes beckoningly real after you have gone.” - John Steinbeck",
  },
  {
    id: "kenya",
    country: "Kenya",
    image:
      "https://i.postimg.cc/Y9ww7xb0/craig-stevenson-gf3-v7-Pmp7-M-unsplash.jpg",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "cappadocia",
    country: "Cappadocia, Turkey",
    image:
      "https://i.postimg.cc/SK6v6bfQ/mehmet-turgut-kirkgoz-0-ASU0-LSWp6g-unsplash.jpg",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "grandcanyon",
    country: "Grand Canyon, USA",
    image:
      "https://i.postimg.cc/MTRVMz7t/ganapathy-kumar-L75-D18a-Val8-unsplash.jpg",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "patagonia",
    country: "Patagonia, Argentina",
    image:
      "https://i.postimg.cc/vT4RLSmP/hans-jurgen-weinhardt-5-RFMPuf-TKPA-unsplash.jpg",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "beijing",
    country: "Beijing, China",
    image:
      "https://i.postimg.cc/xCyGp0X8/william-olivieri-vh-KZv-NFmp-PU-unsplash.jpg",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
];

const CountryDetail = () => {
  const params = useParams();
  const country = DUMMY_COUNTRIES.find(
    (country) => country.id === params.countryId
  );

  if (!country) {
    return <p>No country found!</p>;
  }

  return (
    <Fragment>
      <HighlightedCountry
        image={country.image}
        country={country.country}
        text={country.description.toUpperCase()}
      />
      {/* <Route path={`/travel/${params.countryId}/comments`}></Route> */}
    </Fragment>
  );
};

export default CountryDetail;
