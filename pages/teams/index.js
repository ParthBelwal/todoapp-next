import Link from "next/link"
import { CreateTeamForm } from "../../components/createform.js"
import Sidenav from "../../components/sidenav.js"
import classes from "../index.module.css"
import Navbar from "../../components/navbar.js"
export default function team(){
    return(
    
    <div>
       <Sidenav  pagetitle="Teams"/><div className={classes.main}>
        <Navbar />
        <h1>Teams</h1>
        <Link href="/">Home</Link>
        <CreateTeamForm /></div>
    </div>)
}