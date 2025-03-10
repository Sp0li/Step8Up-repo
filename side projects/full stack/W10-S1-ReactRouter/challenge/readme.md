# Using 3rd Party Libraries for Forms in React

## Challenge

Now that you've implemented a form from scratch in React, it’s time to explore how third-party libraries can streamline form handling and validation. One popular library for this purpose is [React Hook Form](https://react-hook-form.com/get-started), which provides a set of hooks to manage forms in a way that is both efficient and easy to integrate with React components. In this exercise, your challenge is to refactor the form you created in the previous exercise to use the React Hook Form library, making it more efficient and maintainable.

## Key Learnings

- Installing and setting up React Hook Form
- Refactoring form logic to use `useForm` and other hooks from React Hook Form
- Simplifying form validation and handling using React Hook Form
- Comparing custom form handling with a third-party solution

## User Story

**As a developer**, I want to use a third-party form library like React Hook Form to handle form input and validation **so that** my code is cleaner and easier to maintain.

## Acceptance Criteria

- **Library Setup**: Install the React Hook Form library using `npm` or `yarn`.
- **Refactor Form**: Replace custom form handling logic in your existing form with React Hook Form’s `useForm` hook to manage form state and validation.
- **Validation**: Use React Hook Form’s validation rules to enforce required fields for all form inputs.
- **Dropdown and Conditional Field**: Ensure the "How did you hear of us" dropdown and the conditional "Please specify" input field work seamlessly with React Hook Form.
- **Error Messages**: Display validation error messages using React Hook Form’s error handling methods.

### Additional Criteria (Stretch Goals)

- **Custom Validation**: Add custom validation rules to one of the fields (e.g., email format validation or character length restrictions).
- **Form Reset**: Use the `reset` function from React Hook Form to implement a "Clear" button that resets the form.
- **Enhanced UI**: Integrate with a UI library like Material UI or Bootstrap to style form elements, using React Hook Form’s `Controller` component if needed.

## Instructions

1. **Set Up React Hook Form**: Install React Hook Form by running `npm install react-hook-form` or `yarn add react-hook-form`.
2. **Import and Use `useForm`**: In your form component, import `useForm` from React Hook Form and initialize it. Use `register` to connect each input field to the form’s state.
3. **Refactor Validation**: Use validation rules within React Hook Form (e.g., `required`, `minLength`, etc.) to handle required fields and display error messages when fields are invalid.
4. **Handle Conditional Fields**: Ensure that the conditional "Please specify" input field (displayed when "Other" is selected in the dropdown) is properly managed with React Hook Form.
5. **Test Form**: Verify that all required fields show an error message if they are empty upon submission, and that validation works as expected.
6. **Stretch Goals (Optional)**:
   - Add custom validation for fields like email or text length.
   - Implement a "Clear" button using the `reset` function from React Hook Form.
   - Use a UI library like Material UI to enhance the form’s appearance with styling.

Happy coding!
