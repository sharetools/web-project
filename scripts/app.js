(function() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCmN74u5KvHBjRGZr35H3PAUN4CMCGH6Po",
    authDomain: "sharetools-467e4.firebaseapp.com",
    databaseURL: "https://sharetools-467e4.firebaseio.com",
    projectId: "sharetools-467e4",
    storageBucket: "",
    messagingSenderId: "385950103801",
    appId: "1:385950103801:web:3844bb9993236ff698ca28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add Login Event
  btnLogin.addEventListener('click', e => {
      // Get Email and Password
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      
      // Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
  });

  // Add SignUp Event
  btnSignUp.addEventListener('click', e => {
    // Get Email and Password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Log Out
  btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
  });

  // Add a Realtime Listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          window.location.href = "index.html";
          btnLogout.classList.remove('hide');
      } else {
          console.log('not logged in');
          btnLogout.classList.add('hide');
      }
  });

}());