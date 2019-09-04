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
  //const preObject = document.getElementById('object');
  //const ulList = document.getElementById('list');
  const nomeMes = document.getElementById('mensal');

  // Get Database Reference
  //const dbRefObject = firebase.database().ref().child('object');
  //const dbRefList = dbRefObject.child('hobbies');
  const dbRefMes = firebase.database().ref().child('mensal')

  // Sync Mensal Changes
  dbRefMes.on('value', snap => {
    nomeMes.innerText = JSON.stringify(snap.val());
  });

  // Sync Object Changes
  //dbRefObject.on('value', snap => {
  //    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  //});

  //Sync List Changes
  //dbRefList.on('child_added', snap => {
  //    const li = document.createElement('li');
  //    li.innerText = snap.val();
  //    li.id = snap.key;
  //    ulList.appendChild(li);
  //});

  //dbRefList.on('child_changed', snap => {
  //    const liChanged = document.getElementById(snap.key);
  //    liChanged.innerText = snap.val();
  //});

  //dbRefList.on('child_removed', snap => {
  //  const liRemoved = document.getElementById(snap.key);
  //  liRemoved.remove();
  //});

}());