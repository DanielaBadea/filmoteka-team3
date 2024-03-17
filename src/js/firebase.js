import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfSnlYUdcEqahuE0nuEPgZtyc05nxjtHE",
    authDomain: "filmoteka-582f6.firebaseapp.com",
    databaseURL: "https://filmoteka-582f6-default-rtdb.firebaseio.com",
    projectId: "filmoteka-582f6",
    storageBucket: "filmoteka-582f6.appspot.com",
    messagingSenderId: "218771303492",
    appId: "1:218771303492:web:8772c72c18d03702ab6011",
    measurementId: "G-239H878QXK"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
console.log(app);

function registerModal() {
    email = document.getElementById("register_email").value;
    password = document.getElementById("register_password").value;

    if (validate_email(email) == false || validate_password(password) == false) {
        alert("Email or Password is Outta Line!!")
            return
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(function(userCredential) {
        const user = userCredential.user;
        const databaseRef = ref(database);
        const user_data = {
            email: email,
            last_login: Date.now()
        };
        
        set(ref(database, 'users/' + user.uid), user_data)
            .then(() => {
                alert('User Created!!');
            })
            .catch((error) => {
                alert('Error creating user data: ' + error.message);
            });
    })
    .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
}

function loginModal() {
    email = document.getElementById("login_email").value;
    password = document.getElementById("login_password").value;
    
    if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!")
    return
    }
    
    signInWithEmailAndPassword(auth, email, password)
    .then(function() {
    const user = currentUser;
    const database_ref = database.ref()

    const user_data = {
        last_login : Date.now()
    }
    
    database_ref.child('users/' + user.uid).update(user_data)
    alert("User Logged In!!!")
    })
    .catch(function(error) {
    const error_code = error.code;
    const error_message = error.message;
    alert(error_message);
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const loginModalUs = document.querySelector(".submit-btn[onclick='loginModal()']");
    const registerModalUs = document.querySelector(".submit-btn[onclick='registerModal()']");
  
    if (loginModalUs) {
        loginModalUs.onclick = null;
        loginModalUs.addEventListener("click", loginModal);
    }
    if (registerModalUs) {
        registerModalUs.onclick = null;
        registerModalUs.addEventListener("click", registerModal); 
    }

})

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password > 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }
    
    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}
