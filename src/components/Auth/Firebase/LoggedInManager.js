// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebaseConfig";



// export const initializeLoginInFrameWorker = () =>{

//     if(firebase.apps.length === 0){
//       firebase.initializeApp(firebaseConfig)
//     }
//     }

//     export const googleBtn =()=> {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         return firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//           var {displayName,email,photoURL} = result.user;
//           const signInUser ={name:displayName,email,photoURL};
//           return signInUser
         
//         }).catch((error) => {
          
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           var email = error.email;
//           console.log(email, errorMessage, errorCode);
//           // ...
//         });
//       }