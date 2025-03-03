# Model Relationships in Sequelize

## Challenge

In the code in the exercise folder, you'll find an existing `Post` model and a new model called `Category`.

- In `models/index.js`, you'll see how a relationship is set up where:
  - A **Category** can have multiple **Posts**
  - A **Post** belongs to a **Category**

This creates a **one-to-many** relationship between Categories and Posts.

### Your Task

Your challenge is to set up a new model called `User`:

- A **Post** belongs to a **User**
- A **User** can have multiple **Posts**

This is a similar one-to-many relationship as the one between `Post` and `Category`.

To complete this challenge, you need to:

1. **Create a new `User` model** in the `models` folder
2. **Define the relationship** in `models/index.js`
3. **Rebuild the database** since a new model changes the data structure

## Key Learnings

- How to define data table relationships within Sequelize
- How to create new models in Sequelize
- How to rebuild database definitions after changes

## User Story

**As a** backend developer,  
**I want to** define relationships between models in Sequelize,  
**So that** I can structure my database efficiently.

## Acceptance Criteria

### 1. Set Up the Project

- Install dependencies (if not already installed):

```bash
npm install
```

- Start the server

```bash
npm run dev
```

### 2. Create the User Model

- In the models folder, create a new file called user.js.
- Define a Sequelize model for User with at least these fields:
  id (Primary Key, auto-increment)
  name (String, not null)
  email (String, unique, not null)

### 3. Define the Relationship

- Modify models/index.js to define the relationships:
  A User has many Posts
  A Post belongs to a User

### 4. Rebuild the Database

- Since the data structure has changed, run:

```bash
npm run rebuild
```

### 5. Verify the Relationships

Use Postman or another API client to test:

- Creating a new User
- Assigning a Post to a User
- Fetching Posts along with their User

Good luck!
