# Project Overview
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App.

## How to run project
1. Go to HTML file and open live-server
2. Open dev tools (right-click on mouse and go to 'inspect') and go to console tab

## Implementations:
- Created separate files for **actions**, **reducers**, **store** and placed in a **model** folder.
- Defined action types and assigned them to variables.
- Created a reducer to update the state based on the action type.
- Created the store.
- Dispatched actions and console logged results to see the different states.
  
**Challenges:** <br>
1. **Importing file without adding extension**
  - When I imported the **actions.js** file without an extension, the console displayed an error, whereas it had auto-filled for me in that format(**./actions**). I struggled to find the issue, but eventually saw that I had not added an extension.
2. **Global store**
  - I struggled to understand the global store and what exactly needs to be inside it. 
  - I also struggled to understand the concept of the subscribers
3. **JS Doc**
  - I am currently not entirely comfortable using JS Doc, so it is something I'd like to come back to and learn properly because I see the benefit of using it - It seems that you need to be proficient enough to anticipate certain scenarios.
4. **What I learned**
  - I learned that in the observer pattern, the store is the subject and the subsctribers are the observers/listeners.
  - The store holds the entire state of an application, its the single source of truth and the only way to get those states or changes is by dispatching the actions.
  
## DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App
In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Your primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## Objective
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.

Observer Pattern resource from Refactoring Guru: https://refactoring.guru/design-patterns/observer

## User Stories (Gherkin Syntax)
Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## Requirements
- **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
- **State Management Functions**:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
- **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

## Submission Guidelines
Your submission should consist of a JavaScript file(s) that encapsulate your Redux-inspired store and the logic for dispatching actions and subscribing to changes. Include a README.md file explaining:
- How to run your code.
- A brief overview of your approach.
- Any challenges you faced and how you overcame them.

Ensure your code is well-commented and adheres to best practices for readability and maintainability.

## Evaluation Criteria
- **Correctness**: Your implementation should correctly handle the scenarios as outlined in the user stories.
- **Code Quality**: Use of functional programming principles, clear naming conventions, and code organization.
- **Documentation**: Clarity of your approach and reflections in the README.md.

This challenge is an excellent opportunity to demonstrate your understanding of state management concepts and functional programming principles. Good luck!
