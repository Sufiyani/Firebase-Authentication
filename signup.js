import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js"
  const firebaseConfig = {
   apiKey: "AIzaSyBFywzWO26fnbQfg5NC924oPcsQL2zyheY",
  authDomain: "fir-authentication-4d7a9.firebaseapp.com",
  projectId: "fir-authentication-4d7a9",
  storageBucket: "fir-authentication-4d7a9.firebasestorage.app",
  messagingSenderId: "724815931531",
  appId: "1:724815931531:web:a0384e710241e6f67c0c8e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let email=document.getElementById("email");
  let password=document.getElementById("password");
  let submit=document.getElementById("submit");
  
  submit.addEventListener("click",signup);
async function signup(event) {
    event.preventDefault();
    try{
    const userCredential=await createUserWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user;
    console.log(user);
    alert("Success")
    verify();
    }
    catch (e) {
    console.error("Signup error:", e.message);
    alert(`Error: ${e.message}`);{

    }
  }
}
async function verify(params) {
   await sendEmailVerification(auth.currentUser);
}
