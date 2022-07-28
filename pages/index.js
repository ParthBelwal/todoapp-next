import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { CreateLoginForm } from '../components/createform'
import Sidenav from '../components/sidenav'
import { BigButton } from "../components/buttons"
import classes from "./index.module.css"
export default function Home() {
  return (
    <div>
      <Sidenav pagetitle="Login To Access" />
      <div className={classes.main} >
      <button className={classses.lbtn} onClick={() => signIn()}>Sign In through Google</button>
    </div></div>
  )
}
