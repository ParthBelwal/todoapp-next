import classes from "./profpost.module.css";
import { LinkBigButton,SmallButton } from "./buttons.js";
function passteams(team){
    return(
        <LinkBigButton
        key={team.id}
        name={team.name}
        link={"../pages/[teamid]"}
        />
    )
}
function teams(props){
    <div className={classes.team}>
                      {props.teams.map(passteams)} </div>
}
export default teams;