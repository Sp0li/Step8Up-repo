# Improving the Shop

## Objective

In the previous exercise, you explored an online shop application and gained an understanding of how it uses React Context for global state management. Now, it’s time to expand on this foundation and add new features that enhance the app's functionality and user experience. Your challenge is to implement the following improvements:

1. **Remove from Cart**: Add a feature that allows users to remove items from their cart.
2. **Light and Dark Mode Theme**: Add support for a light and dark theme that users can toggle between.
3. **Product Images**: Add images for each product, either by loading static images or dynamically fetching them.

> **Note**: Although you have worked with single-context applications, it’s common for more complex applications to use multiple Context Providers to separate concerns. This challenge will give you experience with multiple Context Providers.

## Key Learnings

- Extending global functionality using Context Providers
- Implementing multiple Context Providers in a single React app
- Loading and displaying static or dynamic assets in React

## User Story

**As a user**, I want to be able to manage items in my cart, toggle between light and dark themes, and see images of products **so that** I have a full-featured, user-friendly shopping experience.

## Acceptance Criteria

- **Remove from Cart**:
  - Implement a method in the cart context to remove items.
  - Add a "Remove from Cart" button to each cart item that uses this method.
  - Update the cart's total and item count whenever an item is removed.
- **Theme Toggle**:
  - Create a theme context with a light and dark mode.
  - Provide a toggle function that allows users to switch between light and dark themes.
  - Style the application to respond to theme changes.
- **Product Images**:
  - Add images to each product item in the shop.
  - These images can be loaded statically or fetched dynamically based on your preference.
  - Display product images in the shop’s product listings and the cart.

### Additional Criteria (Stretch Goals)

- **Persisted Theme**: Save the user’s theme preference to `localStorage` so it persists on reload.
- **Animated Theme Toggle**: Add a smooth transition effect when switching between light and dark themes.
- **Product Image Modal**: Allow users to click on a product image to view a larger version in a modal.

## Instructions

1. **Set Up Contexts**:
   - Modify the existing cart context to include a `removeItem` method for removing items from the cart.
   - Create a new theme context with `theme` and `toggleTheme` properties for light/dark mode functionality.
2. **Implement Remove from Cart**:
   - In your cart display component, add a "Remove from Cart" button for each item.
   - Connect this button to the `removeItem` method in the cart context.
   - Verify that removing items updates the cart’s total and item count.
3. **Implement Theme Toggle**:
   - Set up a toggle button that allows users to switch between light and dark modes.
   - Use theme context values to apply appropriate styles based on the selected theme.
4. **Add Product Images**:
   - Update each product with an image property.
   - Decide whether to load images statically or dynamically and implement accordingly.
   - Display product images in both the product listing and the cart view.
5. **Stretch Goals (Optional)**:
   - Persist the user’s theme choice across page reloads.
   - Add CSS transitions to make the theme toggle smoother.
   - Create a modal view for product images to allow for larger image previews.

Happy coding!
