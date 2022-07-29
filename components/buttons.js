import Link from "next/link";
import classes from "./buttons.module.css";
import { useSession, signIn, signOut } from "next-auth/react"
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
function Signin(props){
    return(
    <button onClick={()=> signIn()} className={classes.sign}>{props.name}</button>)
}
function SignOut(props){
    return(
    <button onClick={()=> signOut()} className={classes.link}>{props.name}</button>)
}
export {BigButton,SmallButton,LinkButton,LinkBigButton,Signin,SignOut};