import classes from "./createform.module.css";
import { FormInput,UnreqFormInput } from "./forminput";
import {BigButton, SmallButton,LinkButton } from "./buttons";
import React from "react";
function CreatePostForm(){
    return(<div className={classes.create}>
        <form   method="post"
        action="/posts"
        >
            <FormInput title="Post Title" type="text" placeholder ="Task Heading" name="posttitle" />
            <UnreqFormInput title="Post Content" placeholder ="Task Details" name="postcontent" />
            <BigButton name="Create Post" />
        </form></div>
    )
}
function CreateTeamForm(){
    return(<div className={classes.create}>
        <form   method="post"
        action="/teams"
        >
            <FormInput title="Team Title" type="text" placeholder ="Backend" name="teamname" />
            <BigButton name="Create" />
        </form></div>
    )
}
function CreateCommentForm(){
    return(<div className={classes.create}>
        <form   method="post"
        action="/teams"
        >
            <FormInput title="Add Comment" type="text" placeholder ="Your Commment" name="comment" />
            <BigButton name="Add Comment" />
        </form></div>
    )
}
function CreateLoginForm(){
    return(<div className={classes.create}>
        <form   method="post"
        action="/"
        >
            <FormInput title="Email" type="email" placeholder ="abc@gmail.com" name="email" />
            <FormInput title="Password" type="password" placeholder ="Password" name="password" />
            <SmallButton name="Login" />
            <LinkButton link="/register" name="Registration" />
            
        </form></div>
    )
}
function CreateRegistrationForm(props){
    return(<div className={classes.create}>
        <form   method="post"
        action="/register"
        >
            <FormInput title="Email" type="email" placeholder ="abc@gmail.com" name="email" />
            <FormInput title="UserName" type="text" placeholder ="John Doe" name="username" />
            <FormInput title="Password" type="password" placeholder ="Password" name="password" />
            <SmallButton name="Register" />
            <LinkButton link="/" name="Login" />
        </form></div>
    )
}

export {CreatePostForm,CreateTeamForm,CreateCommentForm,CreateLoginForm,CreateRegistrationForm};