import classes from "./navbar.module.css"
import { SignOut } from "./buttons.js";
import {LinkButton} from "./buttons.js"
function Navbar(props){
    return(
            <div className={classes.navbar}><h1>Hello {props.name}</h1><span >
                <LinkButton link="/teams" name="Teams" />
                <LinkButton link="/profile" name="Profile" />
                <SignOut name="Sign Out" />
                </span></div>
    )
}
export default Navbar;