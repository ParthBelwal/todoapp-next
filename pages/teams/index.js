import Home from "../index.js"
import { CreateTeamForm } from "../../components/createform.js"
import Sidenav from "../../components/sidenav.js"
import classes from "../index.module.css"
import { useSession } from "next-auth/react"
import Navbar from "../../components/navbar.js"
export default function Team(){
    const {data,session}=useSession();
    if(data){return(
    <div>
       <Sidenav  pagetitle="Teams"/><div className={classes.main}>
        <Navbar name={data.user.name}/>
        <CreateTeamForm /></div>
    </div>)}
    else{
        return(
      <Home />)
    }
}