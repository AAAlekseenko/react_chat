import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBab-bC4UyTeOHYdy7eN0oWuP3C8HUyh2o",
    authDomain: "testprj-1-6f0cb.firebaseapp.com",
    projectId: "testprj-1-6f0cb",
    storageBucket: "testprj-1-6f0cb.appspot.com",
    messagingSenderId: "264099164968",
    appId: "1:264099164968:web:522640dd3baf6c4421961d"
});
export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
