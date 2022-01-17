import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

})
const SearchComponent = () => {
    const classes = useStyles();
    return (
      <div className={classes.mainSearchDiv}>
          <FontAwesomeIcon icon={faSearch} />
        
      </div>
    );
}
 
export default SearchComponent;