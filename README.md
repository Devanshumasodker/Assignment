# Assignment

## Overview

This project is a React Native application built with Expo. It features a user directory with a custom drawer navigation and user cards. The application fetches user data from an API and displays it in a user-friendly interface.

## Tech Stack

- **React Native**: For building the mobile application.
- **Expo**: For development and build tools.
- **React Navigation**: For navigation within the app.
- **Axios**: For making API requests.
- **Expo Linear Gradient**: For gradient backgrounds.
- **React Native Reanimated**: For animations.
- **React Native Gesture Handler**: For handling gestures.

## Features

- Custom drawer navigation with user list.
- User cards with expandable details.
- Smooth animations for user selection.
- Fetches user data from an API with caching.
- Error handling and loading states.

## Installation

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd Assignment
    ```

2. **Install Expo CLI:**
    ```sh
    npm install -g expo-cli
    ```

3. **Install dependencies:**
    ```sh
    npm install
    ```

4. **Start the application:**
    ```sh
    npm start
    ```

## Demo Videos

### Demo 1: Extra Features
![Application View](./Demo/Demo1.gif)

### Demo 2: Basic Features
![Application View](./Demo/Additional_feat.gif)

## Directory Structure

```
Assignment/
├── .expo/
├── .vscode/
├── assets/
├── Demo/
│   ├── Demo1.gif
│   ├── Additional_feat.gif
├── node_modules/
├── src/
│   ├── components/
│   │   ├── navigationButtons.js
│   │   ├── userCard.js
│   ├── hooks/
│   ├── screens/
│   ├── Services/
│   ├── utils/
│   │   ├── Theme.js
├── App.js
├── .gitignore
├── app.json
├── index.js
├── package-lock.json
├── package.json
├── README.md
```

## Unique Features

- Added a user list for easy navigation.
- Directly check user details from the list.
- Seamless navigation to each user.