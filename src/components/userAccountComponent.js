import React from "react";
import UserAccountForm from "../forms/userAccount";


const UserAccountComponent = (props) => {

    return(
        <div>
            <h1>User Profile</h1>
            <img alt="User Profile" src={props.userAccountData["image_url"]}/>
            <UserAccountForm username={props.userAccountData.username} password={props.userAccountData.password} bio={props.userAccountData.bio}/>
        </div>
    )
}

export default UserAccountComponent;

//make a textarea or input field light grey background when not focused, white when focused.

//save changes/update profile button