import { useParams } from "react-router-dom";
import { Fragment } from "react";

import HighlightedCountry from "../components/Destinations/HighlightedCountry";

const DUMMY_COUNTRIES = [
  {
    id: "iceland",
    country: "Iceland",
    headImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Jokulsarlon_lake%2C_Iceland.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Church_of_light.jpg/2560px-Church_of_light.jpg",
    firstArticleHeading: "church of light",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sk%C3%B3gafoss_July_2014.JPG/2560px-Sk%C3%B3gafoss_July_2014.JPG",
    secondArticleHeading: "skógafoss",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "switzerland",
    country: "Switzerland",
    headImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Zermatt_-_Mattervispa_und_Matterhorn.jpg/2560px-Zermatt_-_Mattervispa_und_Matterhorn.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Matterhorn_Riffelsee_Spiegelung.jpg/2560px-Matterhorn_Riffelsee_Spiegelung.jpg",
    firstArticleHeading: "matterhorn",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Lucerne%2C_Switzerland_-_panoramio_%284%29.jpg/2560px-Lucerne%2C_Switzerland_-_panoramio_%284%29.jpg",
    secondArticleHeading: "lucerne",
    description:
      "‘In a country where peace prevails in every corner, everything looks prettier, calmer and wiser! – Mehmet Murat Ildan",
  },
  {
    id: "france",
    country: "France",
    headImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg/2560px-Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Un_canal_de_la_petite_Venise_de_Colmar.jpg/2560px-Un_canal_de_la_petite_Venise_de_Colmar.jpg",
    firstArticleHeading: "colmar",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Street_in_Larnagol.jpg/2560px-Street_in_Larnagol.jpg",
    secondArticleHeading: "larnagol",
    description:
      "“A walk about Paris will provide lessons in history, beauty, and in the point of life.” —Thomas Jefferson",
  },
  {
    id: "spain",
    country: "Spain",
    headImage:
      "https://i.postimg.cc/5Njm84PF/logan-armstrong-h-Vhfqh-DYci-U-unsplash-1.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Spain_Andalusia_Cordoba_BW_2015-10-27_16-19-27_stitch.jpg/2560px-Spain_Andalusia_Cordoba_BW_2015-10-27_16-19-27_stitch.jpg",
    firstArticleHeading: "cordoba",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bilbao_-_Ria.jpg/2560px-Bilbao_-_Ria.jpg",
    secondArticleHeading: "bilbao",
    description:
      "“Even the moon was embarrassed by the beauty of Barcelona.” – Andrew Barger",
  },
  {
    id: "italy",
    country: "Italy",
    headImage:
      "https://i.postimg.cc/qM73HgJw/rich-martello-Phaz4-Fc-Cuf0-unsplash-1.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Como_Vista_sul_Lago_di_Como_17.jpg/2560px-Como_Vista_sul_Lago_di_Como_17.jpg",
    firstArticleHeading: "lake como",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tuscany_%28Toscana%29_views%2C_Siena%2C_Italy.jpg/2560px-Tuscany_%28Toscana%29_views%2C_Siena%2C_Italy.jpg",
    secondArticleHeading: "toscana",
    description:
      "“Positano bites deep. It is a dream place that is not quite real when you are there and becomes beckoningly real after you have gone.” - John Steinbeck",
  },
  {
    id: "turkey",
    country: "Turkey",
    headImage:
      "https://i.postimg.cc/SK6v6bfQ/mehmet-turgut-kirkgoz-0-ASU0-LSWp6g-unsplash.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Marmaris%2C_Turkey._Photo_2021.jpg/2560px-Marmaris%2C_Turkey._Photo_2021.jpg",
    firstArticleHeading: "marmaris",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Turkey-3019_-_Hagia_Sophia_%282216460729%29.jpg/2560px-Turkey-3019_-_Hagia_Sophia_%282216460729%29.jpg",
    secondArticleHeading: "istanbul",
    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "usa",
    country: "USA",
    headImage:
      "https://i.postimg.cc/MTRVMz7t/ganapathy-kumar-L75-D18a-Val8-unsplash.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/North_View_of_Miami_and_Miami_River_from_1st_St_20160709_1.jpg/2560px-North_View_of_Miami_and_Miami_River_from_1st_St_20160709_1.jpg",
    firstArticleHeading: "miami",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Yosemite_National_Park_Unsplash.jpg/2560px-Yosemite_National_Park_Unsplash.jpg",
    secondArticleHeading: "yosemite",

    description:
      "ICELAND IS BEAUTIFUL. SOMETIMES IT’S HARD TO IMAGINE LIVING ANYWHERE ELSE.” – BALTASAR KORMAKUR",
  },
  {
    id: "china",
    country: "China",
    headImage:
      "https://i.postimg.cc/xCyGp0X8/william-olivieri-vh-KZv-NFmp-PU-unsplash.jpg",
    firstArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Shanghai_-_Yu_Garden_-_0035.jpg/2560px-Shanghai_-_Yu_Garden_-_0035.jpg",
    firstArticleHeading: "yu garden, shanghai",
    secondArticleImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gebouw_voorstellende_een_boot_in_de_Chinese_tuin_Het_Verborgen_Rijk_van_Ming_in_de_Hortus_Haren_02.jpg/2560px-Gebouw_voorstellende_een_boot_in_de_Chinese_tuin_Het_Verborgen_Rijk_van_Ming_in_de_Hortus_Haren_02.jpg",
    secondArticleHeading: "beijing",

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
        headImage={country.headImage}
        firstArticleImage={country.firstArticleImage}
        firstArticleHeading={country.firstArticleHeading}
        secondArticleImage={country.secondArticleImage}
        secondArticleHeading={country.secondArticleHeading}
        country={country.country}
        text={country.description.toUpperCase()}
      />
      {/* <Route path={`/travel/${params.countryId}/comments`}></Route> */}
    </Fragment>
  );
};

export default CountryDetail;
