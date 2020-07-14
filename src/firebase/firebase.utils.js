// core import
import firebase from 'firebase/app';

// only import what you need, in this case firestore and auth 
import 'firebase/firestore';
import 'firebase/auth';

/* MAIN CONFIG OBJECT FROM GOOGLE */
const config = {
    apiKey: "AIzaSyBFCS5cJtKv_wkoK0VqAIYNlt3CwQndbqo",
    authDomain: "shopp-8bcb6.firebaseapp.com",
    databaseURL: "https://shopp-8bcb6.firebaseio.com",
    projectId: "shopp-8bcb6",
    storageBucket: "shopp-8bcb6.appspot.com",
    messagingSenderId: "811540959116",
    appId: "1:811540959116:web:9c34fa8ca7d94616d410a9",
    measurementId: "G-GKDQC3Q2QH"
};


export const createUserProfileDocument = async (userAuth, additionalData = null) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user ', error.message);
        }
    }

    return userRef;

}

// init app with given config 
firebase.initializeApp(config);

// export vars for use in other modules 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;