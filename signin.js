import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js"
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
  let forget=document.getElementById("forget");
  submit.addEventListener("click",signin);
  forget.addEventListener("click",reset);


  async function signin(event) {
      event.preventDefault();
      try{
      const userCredential=await  signInWithEmailAndPassword(auth, email.value, password.value)
      const user = userCredential.user;
      console.log(user);
      alert("Success")
      }
      catch (e) {
      console.error("Signup error:", e.message);
      alert(`Error: ${e.message}`);{
  
      }
    }
  }

  async function reset(event) {
    event.preventDefault();
    try{
        await sendPasswordResetEmail(auth, email.value);
        alert("Password reset email sent!");
    }
  
  catch (error) {
    console.error(error.message);
    alert(`Error: ${error.message}`);
  }
}