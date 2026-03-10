import { auth } from "./firebaseconfig.js";
import { signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location = "admin.html")
    .catch(err => alert(err.message));
};
