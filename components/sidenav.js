import classes from "./sidenav.module.css";
 function Sidenav(props){
    return(
        <div className={classes.sidenav}>
        <div className={classes.loginmaintext}>
           <h1>{props.pagetitle}</h1>
        </div>
     </div>
    )

    }
    export default Sidenav;