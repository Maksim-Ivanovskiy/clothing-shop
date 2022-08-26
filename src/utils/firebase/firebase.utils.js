import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCOZCITEanXHUqXzJGKH_1Gnknovv4LNKs",
    authDomain: "clothing-shop-287c0.firebaseapp.com",
    projectId: "clothing-shop-287c0",
    storageBucket: "clothing-shop-287c0.appspot.com",
    messagingSenderId: "22269068149",
    appId: "1:22269068149:web:86eca1a1874b1d291e093c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

