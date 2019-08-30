# React Example

This directory is a brief example of a [React](https://reactjs.org/) app with serverless functions that can be deployed to ZEIT Now with zero configuration.

## How we created this example

To get started with React on Now, you can use the [Create-React-App CLI](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to initialize the project:

```shell
$ npx create-react-app my-app
```

## Deploying this Example

Once initialized, you can deploy the React example with just a single command:

```shell
$ now
```

Co-authored-by: Dennis Mercado <denmercs@gmail.com>

# React Unit 1

Product Canvas Link: 
https://docs.google.com/document/d/1atHk_oKKmjSuvMExzm94qxir-vC5FrwZYhHRwGSB0oE/edit#

UI Link: 
https://5thwheel-markking.netlify.com/index.html

Intro:
Our website allows RV owners and campers to find affordable places to stay in hihgh demand areas. It also allows land owners to list their land for available bookings.


Team: Front-End Developers Unit1: Devin Bielejec and Taylor Hunkler

TeamWork

-Spent a lot of time working with FE Unit 2 Developers where we learned:
    -Basics of Redux State Managament (Global State Management)
    -CRUD terminology (Created Read Update Delete)
    -Proper file names (Naming a file descriptively because it may be confusing on imports otherwise)
    -Proper file structure (Forms, components, scss, pages, images)
    -Gained knowledge of organization for a React Product (Splitting tasks into create dummy app and managing state)
    -Met with backend person about EndPoint (Places where data are stored and retrieved)
    -Collaboration with Team (Daily team meetings and separately completing indepedent tasks)

Created functional components (80% or more are functional with the state)
    -BookingsPage
    -Date Picker
    -Footer
    -LandOwner
    -LandOwnerCard
    -ListingsCard
    -ListingsPage
    -NavBar
    -Profile Page

Used Event in JSX to add dynamic functionality to app
    -Modals (Clicking edit button pops up a modal)
    -Formik Form (Changing input fields based on errors, red box around input and password)
    -Add Button (Sending data to server)

Organized At The Component Level
    -See Functional Components Above

Proper use of state and props are demonstrated throughout the project
    -FE Unit 2 members took care of state using Redux, but we passed props appropriately through our components and learned how to name them properly to appease everyone including the backend person

UI is composed of small reusable components
    -For most of the pages, we mapped through a list of data and rendered invidiaul resuable components.

Proper usage of useState and useEffect hooks are clearly incoporated and correctly implemented
    -FE Unit 2 members took care of state using Redux, but they showed us many instances of useEffect and useState.

Student implemented Read operations using either Axios or Fetch to display 3rd party data on page.
    -see listingAction.js
    -Many axios requests were made to get, post, update, and delete data.

Route management properly installed and used to show top level pages as well as nested views where necessary.
    -see App.js
    -Routes were used to link the different pages together and some protected routes were used as well

Data displayed on page is properly laid out in a modern easy to interperate fashion. Seemless integration of UI static landing page now incorporated.
    -Semantic UI and CSS helped to make this.

Brief Overview of Site and Technology Decisions

Welcome Page (Choices for User)
-User can view all listings
    -This allows users to look at the listings while not being signed in, so they look first. This is a marketing strategy to get people looking at the main content of the site first without any hurdles.
-Log In
    -User can log in with their credentials.
    -Login form will display red text and red borders for incorrect information.
-Sign Up
    -User can sign up or click a link and login.
    -We added the extra link for functionality.
    -Sign up form will display red text and red borders for incorrect information.
    -If the user wants to post bookings (aka they have land), they can sign up as a land owner.

There are two types of users: Land Owners and RV Owners (assuming RV owners don't want to find RVs)

After being logged in:

My Listings (for land owners)
    -Here the user (if owning land) can add a listing to the marketplace. The add button created a form for the user to fill out and then saving the changes dynamically add the listing to the marketplace.
    -If the user does not own land, they will be redirected.

My Bookings 
    -Here the user can see all of the RV spots that they have booked. They also have the option of deleting them.

Marketplace
    -Here the user can view all of the RV spots to rent. They can book a site and input the correct start date and end date into the pop up modal. Once completed, the booking will be added to their My Bookings Page.

Profile
    -Here the user can customize their profile page. They can change their image url, username, or bio.

Logout
    -Finally the user can log out.