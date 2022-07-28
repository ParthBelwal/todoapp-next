import classes from "./forminput.module.css";
function FormInput(props){
    return(
        <div className={classes.form-group}>
                            <label>{props.title}</label>
                            <input type={props.type} name={props.name} required className={classes.form-control} placeholder={props.placeholder}/>
                         </div>
    )
}
function UnreqFormInput(props){
    return(
        <div className={classes.form-group}>
                            <label>{props.title}</label>
                            <input type="text" name={props.name}  className={classes.form-control} placeholder={props.placeholder}/>
                         </div>
    )
}

export {FormInput,UnreqFormInput} ;