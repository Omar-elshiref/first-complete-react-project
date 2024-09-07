import { initializeApp } from "firebase/app";
import variables from "./envVariables"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: variables.firebaseApiKey,
    authDomain: variables.firebaseAuthDomain,
    projectId: variables.firebaseProjectId,
    storageBucket: variables.firebaseStorageBucket,
    messagingSenderId: variables.firebaseMessagingSenderId,
    appId: variables.firebaseAppId
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;