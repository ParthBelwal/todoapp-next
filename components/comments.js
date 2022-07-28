import classes from "./profpost.module.css"
function Comments(props){
    return(
        <div>
        <h6><span>{props.commentcontent}<span className={classes.author}>- {props.commentauthor}</span></span></h6><br /></div>
    )
}
export default Comments;