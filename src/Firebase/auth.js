import { auth } from "./firebase";

// Sign Up
export const doCreateUserWithEmailAndPassword = ({ email, password }) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = ({ email, password }) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign Out
export const doSignOut = () => auth.signOut();

export const getUser = () => auth.currentUser;
