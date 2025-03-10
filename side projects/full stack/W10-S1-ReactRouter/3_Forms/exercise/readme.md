# Working with Forms in React

## Challenge

In this exercise, you’ll extend a simple contact form built in React to make it more interactive and user-friendly. Currently, the form includes basic fields like text inputs and a textarea, but forms in real-world applications often require more variety and functionality. Your task is to add form validation for all fields and introduce a dropdown list labeled "How did you hear of us" with the options "Search Engine", "Social Media", "Word of mouth", and "Other". If the user selects "Other," an additional input field should appear to allow them to specify how they heard about the service.

## Key Learnings

- Building and managing forms in React
- Adding form validation for required fields
- Implementing conditional form elements based on user selection
- Enhancing user experience with dynamic form behavior

## User Story

**As a user**, I want to fill out a contact form with required fields and a dropdown to indicate how I heard about the service. If I select "Other," I should be prompted to specify the method.

## Acceptance Criteria

- **Form Structure**: The form should include text input fields, a textarea, and a dropdown list with the label "How did you hear of us."
- **Dropdown Options**: The dropdown should contain the options: "Search Engine," "Social Media," "Word of mouth," and "Other."
- **Conditional Field**: When the user selects "Other" in the dropdown, display an additional text input labeled "Please specify" for the user to provide details.
- **Validation**: All fields in the form should be required, and submission should only proceed if all required fields are completed.
- **Error Messages**: Display an error message below each field if it is left empty and the form is submitted.

### Additional Criteria (Stretch Goals)

- **Real-Time Validation**: Implement validation feedback as the user types, rather than waiting for form submission.
- **Clear Button**: Add a button that clears all form fields and resets any validation messages.
- **Submit Feedback**: Display a success message after the form is successfully submitted.

## Instructions

1. **Review Existing Form Code**: Open the contact form example provided in the project to understand the initial setup.
2. **Add Dropdown**: In the form component, add a dropdown (`<select>`) with the label "How did you hear of us" and the options "Search Engine," "Social Media," "Word of mouth," and "Other."
3. **Implement Conditional Field**: Set up a state to track the selected value in the dropdown. When "Other" is selected, display an additional input field labeled "Please specify" for users to add more information.
4. **Form Validation**: Implement form validation that requires all fields to be completed before submission. Display error messages under fields left empty.
5. **Test Form**: Test the form to ensure that:
   - All required fields show an error message if they are empty upon submission.
   - Selecting "Other" in the dropdown reveals an additional input field.
   - Successfully submitting the form clears any validation errors.
6. **Stretch Goals (Optional)**:
   - Add real-time validation feedback as the user types.
   - Implement a "Clear" button to reset the form.
   - Display a success message upon successful form submission.

Happy coding!
