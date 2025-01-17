# 🦆 THE HORSE SIZED DUCK KATA 🦆

## Overview

This project was created during a hackathon challenge, where the goal was to design and solve a Code Wars-style kata while writing unit tests using **Vitest** to validate the solutions. My kata focuses on categorising ducks fetched from an API based on their status codes, providing a practical challenge that combines API handling and data manipulation.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Planning Phase](#planning-phase)
3. [Brainstorming](#brainstorming)
4. [Implementation](#implementation)
5. [Challenge Overview](#challenge-overview)
6. [Installation Instructions](#installation-instructions)
7. [How to Play](#how-to-play)
8. [Solution Explanation](#solution-explanation)

## Project Overview

This project is a hackathon challenge focused on creating a Code Wars-style kata. The goal was to develop a problem related to data manipulation and categorisation, then validate the solution by writing unit tests using **Vitest**. The main challenge involves working with API data and categorising the ducks based on status codes, allowing participants to practice handling APIs, nested objects, and arrays.

## Planning Phase

### Project Requirements

- Design a kata that encourages participants to practice handling API data and categorising nested objects and arrays
- Write unit tests using **Vitest** to ensure the solution meets all requirements

## Brainstorming

### Ideas & Concepts

- **Farm Animals Idea**: Initially inspired by farm animals, but the duck theme was definitely more engaging.
- **Horse-Size Duck: Final Challenge**: Based on the question: _Would you rather fight a hundred little ducks or a horse-sized duck?_
- **Duck HTTP Status Codes API**: Using [https://random-d.uk/api](https://random-d.uk/api).
- **Nested Objects & Arrays**: Manipulate API data containing nested objects and arrays.
- **Asynchronous Data**: Practice handling promises and async/await with API calls.
- **Data Manipulation**: Participants will parse and manipulate API data to group ducks based on their status codes.

## Implementation

- [x] **Task 1**: Set up project structure and dependencies.
  - [x] Install **Vitest** for testing.
  - [x] Set up initial project folder structure.
- [x] **Task 2**: Implement API fetch function.
  - [x] Research API fetching methods.
  - [x] Implement fetch logic and handle responses.
- [x] **Task 3**: Categorise ducks based on status codes.
  - [x] Parse API response data.
  - [x] Group ducks into categories.
- [x] **Task 4**: Write unit tests using Vitest.
  - [x] Test API response handling.
  - [x] Test categorisation logic.

### My Challenges & Solutions

| Challenge                              | Solution                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Testing the API using Vitest           | Ran into multiple approaches for mocking API requests. Focused on testing data manipulation instead of actual API fetch calls. This led to the creation of **Easy Mode** and **Hard Mode**: <br> **Easy Mode**: Focuses on data manipulation with the `fetch` API already implemented. <br> **Hard Mode**: Requires participants to implement the `fetch` API and handle asynchronous responses, adding complexity. |
| Categorising ducks from nested data    | Had to figure out how to access nested properties reliably. Used object destructuring and helper functions.                                                                                                                                                                                                                                                                                                         |
| Handling asynchronous data with Vitest | Initially struggled with async testing. Used `async/await` to resolve promises in tests.                                                                                                                                                                                                                                                                                                                            |

# How to play

### Challenge Overview

In this kata, you'll work with an API that serves duck images and their associated status codes. Your mission is to create a categorisation system that sorts these ducks based on their status codes. Think of it as organizing an army of ducks - but be careful, one of them might be horse-sized!

### What You'll Learn

- API data handling
- Working with nested objects and arrays
- Data categorisation and manipulation
- Asynchronous programming

## Difficulty Modes

### 🐥 Easy Mode

- Pre-implemented API fetch functionality.
- Focus purely on duck categorisation logic.
- Perfect for practicing data structure manipulation.

### 🦢 Hard Mode

- Implement your own API fetch functionality.
- Handle asynchronous operations.

## Installation Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/SchoolOfCode/week-6-hackathon-sumeyacodes.git
```

### 2. Choose your battleground:

#### For Easy Mode

```bash
cd "easy mode"
```

### For Hard Mode

```bash
cd "hard mode"
```

### 🌟 Good luck & happy coding ! 🌟
