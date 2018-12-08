import firebase from 'firebase';
import 'firebase/firestore';
//Create firebaseConfig file with obj {firebase config}
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();