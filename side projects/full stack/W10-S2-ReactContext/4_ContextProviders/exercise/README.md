# Providers in React

## Challenge

World-renowned pioneer and Yorkshireman Ely Musket has rebranded a popular social media platform to "Y!?". After a code review, Ely has identified areas in the codebase that could benefit from a more organized state management solution. Your challenge is to refactor the code to use Providers to store global data: specifically, the logged-in user's ID and their theme preference (light or dark mode). This information should be accessible across the app by implementing a React Context Provider, which will store the user ID and theme mode, and provide methods for switching the theme’s mode.

Once implemented, use React DevTools to verify that your provider and context setup are configured correctly.
Use the [React Developer Tools - Chrome Web Store](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1) Browser Extension to test this.

## Key Learnings

- Creating and configuring a Context Provider in React
- Providing global state with React Context
- Accessing and updating Context data across the app
- Using React DevTools to inspect Context and Providers

## User Story

**As a developer**, I want to implement a global state solution using React Context Providers to store user ID and theme preferences **so that** this information is accessible and manageable throughout the entire application.

## Acceptance Criteria

- **Context Setup**: Create a new context for managing the user’s ID and theme preference.
- **Provider Component**: Implement a Provider component that wraps the app and stores:
  - `userId`: the ID of the logged-in user.
  - `theme`: the current theme mode, either "light" or "dark."
  - `toggleTheme`: a function to toggle the theme between light and dark modes.
- **Global Access**: Ensure that any component in the app can access `userId`, `theme`, and `toggleTheme` from the context.
- **React DevTools Verification**: Use React DevTools to confirm that the context and provider are configured correctly and that context values are updating as expected.

### Additional Criteria (Stretch Goals)

- **Persist Theme**: Store the theme preference in `localStorage` so it persists on page reloads.
- **Custom Hook**: Create a custom hook (e.g., `useTheme`) to simplify accessing and managing the theme data within any component.
- **User Settings Component**: Build a simple settings component that allows the user to toggle the theme and see their user ID.

## Instructions

1. **Set Up Context**: Create a new file (e.g., `AppContext.js`) and set up a context for managing user ID and theme data.
2. **Implement Provider**: In the context file, create a Provider component that:
   - Stores `userId` and `theme` in the state.
   - Provides a `toggleTheme` function that switches the theme between "light" and "dark" modes.
3. **Wrap App in Provider**: In `App.js`, wrap the entire app with your Provider component to make the context data available globally.
4. **Access Context in Components**: In at least two components, use the context to display the user ID and theme mode, and include a button to toggle the theme.
5. **Test with React DevTools**: Use React DevTools to confirm the context is correctly providing `userId`, `theme`, and `toggleTheme` and that the theme toggle function updates the context value.
6. **Stretch Goals (Optional)**:
   - Store the theme in `localStorage` to retain user preferences on page reload.
   - Create a custom hook (e.g., `useTheme`) to access theme-related data and functions more easily in your components.
   - Add a `UserSettings` component where users can view their ID and toggle the theme.

Happy coding!
