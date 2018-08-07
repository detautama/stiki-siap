import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCVVOSf_MPvRgUV7mVKZ_gkqXaOuNJW48s",
  authDomain: "mh-pos.firebaseapp.com",
  databaseURL: "https://mh-pos.firebaseio.com",
  projectId: "mh-pos",
  storageBucket: "mh-pos.appspot.com",
  messagingSenderId: "644094208452"
};
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()
