# Implementing React Context Consumers

## Challenge

After successfully adding a Context Provider to the Y!? App to store global data, it's time to use that data within specific components. In this exercise, you’ll implement a Context Consumer within the `Tweet.jsx` file, using the `useContext` React Hook to consume data and methods from the Theme Context Provider that was previously created. Specifically, the `Tweet.jsx` component should retrieve the username stored in the context and use the theme preferences to adjust styling as necessary.

## Key Learnings

- Consuming data and methods from a React Context Provider
- Using the `useContext` hook to access context within components
- Applying global context data in individual component logic and styling

## User Story

**As a developer**, I want to consume context data and methods in specific components using `useContext` **so that** I can access global values like username and theme preferences.

## Acceptance Criteria

- **Context Access**: In `Tweet.jsx`, use the `useContext` hook to access the Theme Context, retrieving both the `username` and `theme` values.
- **Dynamic Content**: Display the `username` from context within the `Tweet` component to personalize content.
- **Theming**: Use the `theme` value from context to adjust the styling of the `Tweet` component (e.g., applying light or dark mode based on the theme).
- **Error-Free**: Ensure that the `Tweet.jsx` component functions correctly with no errors or warnings related to context consumption.

### Additional Criteria (Stretch Goals)

- **Theme-Based Styling**: Apply conditional styles based on the theme context (e.g., switch background color and text color for dark/light themes).
- **Custom Hook**: Create a custom hook, `useThemeContext`, that wraps `useContext` for easier access to theme-related data and methods across other components.
- **Testing**: Write a test to verify that `Tweet.jsx` renders the correct username and applies the theme styles based on context values.

## Instructions

1. **Review the Context Provider**: Open your existing Theme Context Provider file to confirm the properties and methods it provides, including `username` and `theme`.
2. **Consume Context in Tweet.jsx**:
   - Import the `useContext` hook and the Theme Context.
   - Use `useContext` within `Tweet.jsx` to access `username` and `theme` from the Theme Context.
3. **Display Context Data**: Display the `username` from context within the `Tweet.jsx` component.
4. **Apply Theme-Based Styling**: Use the `theme` value to conditionally style the component, applying different styles based on light or dark mode.
5. **Test and Verify**: Test the component in the browser to ensure it displays the username correctly and adjusts styles based on the theme.
6. **Stretch Goals (Optional)**:
   - Create a `useThemeContext` hook that wraps `useContext` for easy access to the theme data and methods in other components.
   - Write a test to confirm that `Tweet.jsx` renders the `username` and applies the theme correctly.

Happy coding!
