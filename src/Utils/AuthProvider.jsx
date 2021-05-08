import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./AuthConfig.firebase";
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export const AuthContext = createContext();
export const emptyUser = {
  isLoggedIn: false,
  username: "",
  email: "",
  photoURL: "",
};
export const AuthProvider = ({ children }) => {
  const [AuthInfo, setAuthInfo] = useState(emptyUser);

  //persistence by localstorage
  useEffect(() => {
    if (localStorage.getItem(`LoginData`)) {
      setAuthInfo(JSON.parse(localStorage.getItem(`LoginData`)));
    }
    return () => {};
  }, []);

  return (
    <AuthContext.Provider value={[AuthInfo, setAuthInfo]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const [AuthInfo, setAuthInfo] = React.useContext(AuthContext);
  return [AuthInfo, setAuthInfo];
};

export const loginWithGoogle = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  // return firebase
  //   .auth()
  //   .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  //   .then(() => {
  //     console.log("using persistence");
  //     return firebase
  //       .auth()
  //       .signInWithPopup(providerGoogle)
  //       .then((result) => {
  //         return result;
  //       })
  //       .catch((error) => {
  //         throw error;
  //       });
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     throw error;
  //   });

  return firebase
    .auth()
    .signInWithPopup(providerGoogle)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
};

export const loginWithFacebook = () => {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(providerFacebook)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
};

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.setItem(`LoginData`, JSON.stringify(emptyUser));
      return true;
    })
    .catch((error) => {
      throw error;
    });
};

export const signUpwithEmailPassword = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      throw error;
    });
};
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      throw error;
    });
};
