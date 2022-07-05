import classes from "./DestinationsListItem.module.css";
import Card from '../UI/Card';
import {Link} from 'react-router-dom';

const DestinationListItem = (props) => {
  return (
    <Card>
      <Link style={{ textDecoration: "none" }} to={`/travel/${props.id}`}>
        <div>
          <div className={classes.image}>
            <img src={props.image} alt={props.name} />
          </div>
          <div className={classes.content}>
            <h3>{props.name}</h3>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default DestinationListItem;
