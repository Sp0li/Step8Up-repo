# Passing Parameters with React Router

## Challenge

In this exercise, you'll explore different ways to pass parameters in React Router. Currently, the code is set up to handle URL parameters using the `useParams` hook, which is useful for passing single parameters in a route (like an ID for database lookups). However, when dealing with multiple parameters, query string parameters are often a better option. Using online resources and following the `TODO` prompts in `components/Search.jsx`, implement query string parameters to pick up the parameter `q` and display the passed value within the component.

## Key Learnings

- Understanding the difference between URL and query string parameters
- Implementing query string parameters in React Router
- Retrieving and handling multiple query parameters in a component

## User Story

**As a developer**, I want to use query string parameters to pass multiple values to a component **so that** I can handle and display more complex parameter data in the UI.

## Acceptance Criteria

- **Initial Setup**: Review the existing code and understand the `useParams` implementation for single URL parameters.
- **Update Routing**: Modify the routing to support query string parameters for the `Search` component.
- **Implement Query Parameter Retrieval**: Update `components/Search.jsx` to retrieve the query string parameter `q`.
- **Display Parameter Value**: Render the value of `q` dynamically within the `Search` component.
- **Error Handling**: Display an appropriate message if the `q` parameter is missing or empty.

### Additional Criteria (Stretch Goals)

- **Multiple Parameters**: Modify `components/Search.jsx` to handle additional query string parameters, if provided.
- **Input Handling**: Create a form input that allows users to enter a value, which updates the query string parameter dynamically.

## Instructions

1. **Review Existing Code**: Open the project and review the code in `components/Search.jsx` to understand how `useParams` is currently used for URL parameters.
2. **Add Query Parameter Routing**: In `App.js` or your routes configuration file, update the routing to allow for query string parameters in the `Search` component’s route.
3. **Implement Query String Handling**: In `components/Search.jsx`, use a method (such as `useLocation` from React Router or `URLSearchParams`) to retrieve the value of `q` from the query string.
4. **Render Query Parameter Value**: Display the retrieved `q` value inside the `Search` component.
5. **Test**: Verify that when a query string parameter `q` is included in the URL, its value appears correctly in the `Search` component. Test what happens if `q` is missing.
6. **Stretch Goals (Optional)**:
   - Modify `Search.jsx` to retrieve additional query parameters if present.
   - Add an input field that, when submitted, updates the `q` parameter in the URL without a full page reload.

Happy coding!
