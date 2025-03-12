# medTrack - A Comprehensive Medical Tracking App

This project, "medTrack," is a React Native application built with Expo, designed to provide users with a robust platform for managing their medical information. It integrates Firebase for authentication and database management, offering a seamless and secure experience.

## Features

* **Create React Native App with Expo:** Leverages the power of Expo for rapid development and cross-platform compatibility.
* **Emulator and Actual Device Setup:** Guides you through setting up both emulators and physical devices for testing and development.
* **Username/Password Authentication with Firebase:** Implements secure user authentication using Firebase Authentication.
* **Modern App UI:** Features a clean and intuitive user interface designed for optimal user experience.
* **FlatList Implementation:** Efficiently renders large lists of medical data using React Native's `FlatList`.
* **AsyncStorage (Local Storage):** Utilizes `AsyncStorage` for persistent local data storage.
* **React Navigation with Expo Router:** Implements smooth navigation using Expo Router, including tab and stack navigation.
* **Expo Native Functionality:** Integrates various Expo native functionalities to enhance the app's capabilities.
* **Backend Setup with Firebase:** Sets up a robust backend using Firebase services.
* **Firebase Database CRUD Operations:** Enables users to add, retrieve, delete, and update medical data stored in the Firebase Realtime Database or Firestore.
* **React Expo Router Tab Navigation & Stack Navigation:** Creates a well structured navigation system.

## Getting Started

Follow these steps to get your local development environment set up:

### Prerequisites

* Node.js (>= 18) and npm or yarn
* Expo CLI (`npm install -g expo-cli`)
* Firebase account and project
* Android Studio (for Android emulator) or Xcode (for iOS simulator)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd medTrack
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Set up Firebase:**

    * Create a Firebase project on the Firebase console.
    * Enable Authentication (Email/Password) and Realtime Database or Firestore.
    * Create a `firebaseConfig.js` file in your project's root directory with your Firebase configuration:

        ```javascript
        // firebaseConfig.js
        import { initializeApp } from 'firebase/app';
        import { getAuth } from 'firebase/auth';
        import { getFirestore } from 'firebase/firestore'; // or getDatabase if using realtime database.

        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID",
          measurementId: "YOUR_MEASUREMENT_ID"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app); // or getDatabase(app);

        export { auth, db };
        ```

    * Replace the placeholder values with your Firebase project's credentials.

4.  **Run the app:**

    ```bash
    npx expo start
    ```

    * This will open the Expo DevTools in your browser.
    * You can then run the app on an emulator or physical device.

### Project Structure
