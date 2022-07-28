import Link from "next/link";
import classes from "./buttons.module.css";
function BigButton(props){
    return(
        <button type="submit" className={classes.big}>{props.name}</button>
    )
}
function SmallButton(props){
    return(
        <button type="submit" className={classes.small}>{props.name}</button>
    )
}
function LinkButton(props){
    return(
        <Link href={props.link}>
        <button  className={classes.link}>{props.name}</button></Link>
    )
}
function LinkBigButton(props){
    return(
        <Link href={props.link}>
        <button  className={classes.big}>{props.name}</button></Link>
    )
}
export default linkbutton;
export {BigButton,SmallButton,LinkBigButton};