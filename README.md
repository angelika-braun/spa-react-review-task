# Review tasks for React

## Task 1

Passing props from parent component to child components

1. In `App.jsx` create an object with basic user information, `name`, `email`, etc.
2. Create a separate component is a new file `DisplayUser.jsx`
3. Use this new component in `App.jsx` and pass in the user data object as a prop
4. In `DisplayUser`, render out the data received in the props

## Task 2

Managing form data

1. Create a new component `ContactForm.jsx` and and use it inside of App
2. The form should have three fields for name, email and textarea plus a submit button
3. Manage the state inside of the component itself
4. If all the field are filled, display a success message upon submission
5. Log the data itself in the console and clear the form fields

## Task 3

Add routing for the components created in the previous tasks.

1. `DisplayUser` is to be displayed directly at the homepage
2. `ContactForm` should have its own new route at `/contact/`
3. Non-exiting routes should display an error message using a new component and file; `NotFound.jsx`
4. Create a layout page with a navigation to be shared across pages

## Task 4

Create a context for the user information.

1. Create a new context for holding the user information
2. Create a Provider to pass this information from `App.jsx`
3. Consume the state in `DisplayUser` component
4. Add a functionality so that the `ContactForm` allows changing the user name

## Task 5

Fetch data from an API

1. Create a new page `friends` and create and use the componets `FriendsList.jsx`
2. `FriedsList` should have its own new route at `/friends/`
3. In `FriedsList`, make a fetch request to `https://jsonplaceholder.typicode.com/users`
4. Save the data to a state managed inside to the component itself
5. The request is made upon a page mount. Use `useEffect` for this
6. Using `Array.prototype.map` loop through the data and display the list of friends