import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js"
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

  let fname=document.getElementById("name");
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
