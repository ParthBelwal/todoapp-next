
import { useSession, signIn, signOut } from "next-auth/react"
import { Signin } from "../components/buttons"
import Link from 'next/link'
import Team from "./teams"
import { CreateLoginForm } from '../components/createform'
import Sidenav from '../components/sidenav'
import { BigButton } from "../components/buttons"

import classes from "./index.module.css"

export default function Home() {
    return (
    <div>
      <Sidenav pagetitle="Login To Access" />
      <div className={classes.main} >
      <Signin name="Sign In Through Google" />
    </div></div>
  )
    }
