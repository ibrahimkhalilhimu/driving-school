import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";



export const initializeLoginInFrameWorker = () => {

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }
}

export const googleBtn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var { displayName, email, photoURL } = result.user;
      const signInUser = { name: displayName, email, photoURL };
      return signInUser

    }).catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      console.log(email, errorMessage, errorCode);
      // ...
    });
}


export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword( email, password)
    .then(res => {
      // const newUserInfo = res.user
      // console.log(res.user);
      // newUserInfo.error = '';
      // newUserInfo.success = true
      updateUserName(name)
      return handleResponse(res)
      // return newUserInfo


    })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode, errorMessage);
    // });
}

export const signInWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => 
      handleResponse(res)

    )
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode, errorMessage);
    //   const newUserInfo = {};
    //   newUserInfo.error = errorMessage;
    //   return newUserInfo;

    // });
}


const handleResponse =(res)=>{
  const { displayName, email } = res.user;
  const newUserInfo ={ name: displayName, email}
      newUserInfo.error = '';
      newUserInfo.success = true
      return newUserInfo;
}



const updateUserName = name => {
  var user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name,

  }).then(function () {
    console.log('user name sent successfully')
  }).catch(function (error) {
    console.log(error)
  });
}

export const handleSignOut = ()=>{
  return  firebase.auth().signOut()
    .then(res=>{
      const singOutUser ={
        displayName:'', 
        email:'',
        error:'',
        success:false

      }
      
      return singOutUser;
    })
    .catch(err=>{
      console.log(err)
    })
  }