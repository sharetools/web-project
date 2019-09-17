(function() {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAHlWieXK2sZ9mu3pTj0zc-IE9aDqlNmFw",
    authDomain: "realtime-database-f2149.firebaseapp.com",
    databaseURL: "https://realtime-database-f2149.firebaseio.com",
    projectId: "realtime-database-f2149",
    storageBucket: "",
    messagingSenderId: "202215573165",
    appId: "1:202215573165:web:abbfc9d7e666ba55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get Elements
  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');

  // Create References
  const dbRefObject = firebase.database().ref().child('financeiro');
  const dbRefList = dbRefObject.child('mensal');

  // Sync Object Changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  // Sync List Changes
  dbRefList.on('child_added', snap => {
    const span = document.createElement('span');
    span.innerText = snap.val();
    span.id = snap.key;
    ulList.appendChild(span);
  });

  dbRefList.on('child_changed', snap => {
    const spanChanged = document.getElementById(snap.key);
    spanChanged.innerText = snap.val();
  });

}());