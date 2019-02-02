import firebase from 'firebase'

const REACT_APP_API_KEY="AIzaSyDwPbrYyKjoj9llXkcKL2EVCiy0hoVbKyw"
const REACT_APP_AUTH_DOMAIN="moodcalendar-6676d.firebaseapp.com"
const REACT_APP_DATABASE_URL="https://moodcalendar-6676d.firebaseio.com"
const REACT_APP_PROJECT_ID="moodcalendar-6676d"
const REACT_APP_STORAGE_BUCKET="moodcalendar-6676d.appspot.com"
const REACT_APP_MESSAGING_SENDER_ID="7576934015"

const config = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

export default firebase;