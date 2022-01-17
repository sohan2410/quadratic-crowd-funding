import SearchComponent from "../components/Projects/SearchBar";
import "./Projects.css"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

})
const ProjectPage = () => {
    const classes = useStyles();
    return (
        <div className="project-page">
            <div className="topBar">
                <h1>Projects</h1>
                <SearchComponent />
            </div>
        </div>
    );
}
 
export default ProjectPage;