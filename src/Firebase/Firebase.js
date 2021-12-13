import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBYEwtRdwrA6WiZr7Az1mUg7P6PIBOyAbY",
    authDomain: "bag-auth-dev.firebaseapp.com",
    projectId: "bag-auth-dev",
    storageBucket: "bag-auth-dev.appspot.com",
    messagingSenderId: "1067861698774",
    appId: "1:1067861698774:web:2486cba31875c238660177"
};



const fireApp = initializeApp(firebaseConfig);

export const auth = getAuth(fireApp);

export default fireApp;