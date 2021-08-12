
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
    //updating name
    var username= localStorage.getItem("name");
    document.getElementById("user_name").innerHTML="welcome "+ username + " !"
    //add room btn
    function roomadd(){
          var strroom= document.getElementById("room_name").value
firebase.database().ref("/").child(strroom).update(
      {
            key1:"value1",
            key2:"value2"
      }
)
localStorage.setItem("room", strroom)
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
var var1="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=var1
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room")
      window.location="index.html"
}
function redirect(name){
      console.log(name)
      localStorage.setItem("room",name)
      window.location="kwitter_page.html"
}