import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js"
  const firebaseConfig = {
    apiKey: "AIzaSyAcIuCtCzhhZ-WMI7sgPzmc9K5FQGk_w-M",
    authDomain: "fir-81683.firebaseapp.com",
    projectId: "fir-81683",
    storageBucket: "fir-81683.firebasestorage.app",
    messagingSenderId: "185136678567",
    appId: "1:185136678567:web:5e1a404a9bbde7c3a77d82"
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
      location.href="todo.html";
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