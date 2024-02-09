import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import config from "../../firebase_key"

export const googleLogin = async () => {
    const app = initializeApp(config);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return user;
    } catch (error) {
        throw error;
    }
};

export const githubLogin = async () => {
    const app = initializeApp(config);
    const provider = new GithubAuthProvider();
    const auth = getAuth(app);
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return user;
    } catch (error) {
        throw error;
    }
}


