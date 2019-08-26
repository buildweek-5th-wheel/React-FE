import React from "react";
import UserAccountForm from "../forms/userAccount";

/* Username, password, image_url, bio */ 
const fakeData = {username: "johnsmithiscool", password: "tacos", image_url: "https://images.unsplash.com/photo-1566781939916-4432f51a493a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", bio: "I like turtles"}

const UserAccountComponent = (props) => {
    console.log(props);
    return(
        <div>
            <img src={fakeData["image_url"]}/>

            <div className="loginInfo">
                {fakeData.username}
                {fakeData.password}
            </div>

            <div className="bio">
                <p>{fakeData.bio}</p>
            </div>

            <UserAccountForm username={"Devin"} password={"apwoeifjapoweifjpaoweifj"}/>
        </div>
    )
}

export default UserAccountComponent;