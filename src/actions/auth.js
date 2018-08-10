import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logIn = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logInFail = (error) => ({
    type: 'LOGIN_FAIL',
    error
});

export const startLogOut = () => dispatch => {
    return firebase.auth().signOut();
};

export const logOut = () => ({
    type: 'LOGOUT'
});
