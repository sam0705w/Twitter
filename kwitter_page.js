var firebaseConfig = {
      apiKey: "AIzaSyASNN0d-9a7VpDndH2hf6XN55fvE8Sb7sc",
      authDomain: "kwitter-8d93a.firebaseapp.com",
      databaseURL: "https://kwitter-8d93a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d93a",
      storageBucket: "kwitter-8d93a.appspot.com",
      messagingSenderId: "1033266603151",
      appId: "1:1033266603151:web:7a79e7f88c4a92ce137cfa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 var username= localStorage.getItem("name");
 var roomname= localStorage.getItem("room")
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room")
      window.location="index.html"
}