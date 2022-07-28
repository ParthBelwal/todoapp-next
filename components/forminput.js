import classes from "./forminput.module.css";
function FormInput(props){
    return(
        <div className={classes.formgroup}><div>
                            <label><h2>{props.title}</h2></label></div>
                            <input type={props.type} name={props.name} required className={classes.formcontrol} placeholder={props.placeholder}/>
                         </div>
    )
}
function UnreqFormInput(props){
    return(
        <div className={classes.formgroup}><div>
                            <label>{props.title}</label></div><br />
                            <input type="text" name={props.name}  className={classes.formcontrol} placeholder={props.placeholder}/>
                         </div>
    )
}

export {FormInput,UnreqFormInput} ;