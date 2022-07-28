import classes from "./navbar.module.css"
import LinkButton from "./buttons.js"
function Navbar(){
    return(
            <span className={classes.navbar}>Hello <span>
                <LinkButton link="/teams" name="Teams" />
                <LinkButton link="/profile" name="Profile" />
                <LinkButton link="/" name="SignOut" /></span>
                </span>
    )
}
export default Navbar;