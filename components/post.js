import classes from "./profpost.module.css";
import Comments from "./comments.js"
import { CreateCommentForm } from "./createform";
function passcomments(comment){
    return(
        <Comments 
        key={comment.id}
        commmentcontent={comment.content}
        commentauthor={comment.author}
        />
    )
}
function post(props){
                    <div className={classes.posts}>
                    <h2>{props.posttitle}</h2><br /><h4 className={classes.author}>- {props.authorname}</h4><h3>{props.postcontent}</h3><br /><h5>Comments :</h5><br />
                    {props.comments.map(passcomments)} 
                    <CreateCommentForm />  </div>
}
export default post;