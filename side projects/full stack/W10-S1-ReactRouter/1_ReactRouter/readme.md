# Implementing React Router

## Challenge

In the last session, we used a basic, custom routing method in the Layout Exercise. While this approach was functional, it lacked scalability and some of the powerful features provided by dedicated routing libraries. In this exercise, you'll revisit the code from the Layout Exercise and implement routing using `react-router-dom`, a popular and scalable solution for managing routes in React applications. By the end, your app will have a more maintainable and scalable structure for handling different views.

## Key Learnings

- Installing and setting up React Router DOM in a React project
- Defining and configuring routes with `react-router-dom`
- Structuring a React application to support multiple views using routing
- Navigating between views using React Router

## User Story

**As a developer**, I want to implement React Router to manage navigation between views, **so that** my application is easier to maintain and extend with new routes.

## Acceptance Criteria

- **Setup**: Install the `react-router-dom` package using `npm` or `yarn`.
- **Define Routes**: Implement routing for at least three views, such as `Home`, `About`, and `Contact`.
- **Layout Component**: Create a `Layout` component that includes navigation links to each of the defined routes.
- **Route Configuration**: Use `<Routes>` and `<Route>` components from React Router to define paths and render components for each view.
- **Navigation**: Each navigation link in the `Layout` should render the correct component when clicked without refreshing the page.
- **404 Page**: Implement a simple 404 component that displays a "Page Not Found" message for undefined routes.

### Additional Criteria (Stretch Goals)

- **Nested Routes**: Add a nested route for one of the views (e.g., a specific section within the `About` page).
- **Dynamic Routing**: Create a dynamic route (e.g., `/products/:id`) that displays details for a specific item using route parameters.

## Instructions

1. **Setup Project**: Clone your existing Layout Exercise code or create a new React project.
2. **Install React Router**: Run `npm install react-router-dom` or `yarn add react-router-dom` to add React Router to your project.
3. **Define Routes**: In your `App.js` or a dedicated routes file, use the `Routes` and `Route` components to define paths for `Home`, `About`, and `Contact`.
4. **Create Components**: Create simple functional components for each route (e.g., `Home.js`, `About.js`, `Contact.js`).
5. **Implement Layout Component**: Create a `Layout` component that includes navigation links to each route. Use `<Link>` from `react-router-dom` for navigation.
6. **Test Navigation**: Verify that clicking each link in `Layout` changes the displayed component without refreshing the page.
7. **404 Handling**: Add a catch-all `<Route path="*">` to display a 404 component for undefined paths.
8. **Stretch Goals (Optional)**: Try implementing nested and dynamic routes to deepen your understanding.

Happy coding!
