import Link from "next/link"
import { CreateTeamForm } from "../../components/createform.js"
import Sidenav from "../../components/sidenav.js"
import classes from "../index.module.css"
import { signOut } from "next-auth/react"
import Navbar from "../../components/navbar.js"
export default function Team(props){
    return(
    
    <div>
       <Sidenav  pagetitle="Teams"/><div className={classes.main}>
        <Navbar name={props.name}/>
        <CreateTeamForm /></div>
    </div>)
}