import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCILGHa6GWf5Y4PcEb5MtnAzid6-DCVbcw",
  authDomain: "todoist-a2831.firebaseapp.com",
  projectId: "todoist-a2831",
  storageBucket: "todoist-a2831.appspot.com",
  messagingSenderId: "869921734433",
  appId: "1:869921734433:web:f6b5ff334ce78746d48860"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { firebaseApp };
  export { auth };
  export default db; 