import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCORVJ2PxiGiOwskTFfn_nRgJg8hcAzDQ8",
  authDomain: "disneyplus-clone-ae763.firebaseapp.com",
  projectId: "disneyplus-clone-ae763",
  storageBucket: "disneyplus-clone-ae763.appspot.com",
  messagingSenderId: "325205077179",
  appId: "1:325205077179:web:5d56819f15e8cfecd08d9e"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export{auth,provider,storage};
export default db;