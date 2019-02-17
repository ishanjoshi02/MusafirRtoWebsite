import { auth } from "./firebase";

// Sign Up
export const doCreateUserWithEmailAndPassword = ({ email, password }) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
// Sign In
export const doSignInWithEmailAndPassword = ({ email, password }) => {
  return auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
};

// Sign Out
export const doSignOut = () => {
  document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  auth.signOut();
};

export const getUser = () => auth.currentUser;
