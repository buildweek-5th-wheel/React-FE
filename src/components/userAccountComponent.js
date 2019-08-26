import React from "react";
import UserAccountForm from "../forms/userAccount";


const UserAccountComponent = (props) => {
    
    //TESTING - Changing props to fake data
    props = {username: "johnsmithiscool", password: "tacos", image_url: "https://images.unsplash.com/photo-1566781939916-4432f51a493a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", bio: "I like turtles"};

    return(
        <div>
            <UserAccountForm username={props.username} password={props.password} bio={props.bio}/>
        </div>
    )
}

export default UserAccountComponent;