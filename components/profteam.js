import classes from "./profpost.module.css";
import { LinkBigButton,SmallButton } from "./buttons.js";
function passteams(team){
    return(
        <span>
        <LinkBigButton
        key={team.id}
        name={team.name}
        link={"../pages/[teamid]"}
        />
        <SmallButton 
        name="Delete" /></span>
    )
}
function profteams(props){
    <div className={classes.yourposts}><h2>Your Teams</h2>
                      {props.teams.map(passteams)} </div>
}
export default profteams;