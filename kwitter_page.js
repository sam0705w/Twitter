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
console.log(firebase_message_id)
console.log(message_data)
var lik= message_data['like']
var nam= message_data['name']
var messag= message_data['message']
var name_html= "<h4>"+ nam+ "<img class= 'user_tick' src='tick.png'></h4>"
message_html= "<h4 class='message_h4'>"+ messag + "</h4>"
var like_html="<button class='btn btn-warning' id="+firebase_message_id+" value="+lik+" onclick='update_like(this.id)'>"
var th_html="<span class='glyphicon glyphicon-thumbs-up'>"+lik+"</span></button><hr>"
var row=name_html+ message_html+like_html+th_html
document.getElementById("output").innerHTML+=row
//End code
 } });  }); }
getData();
function update_like(msg_id){
      var likes=document.getElementById(msg_id).value
      var update=Number(likes)+1
      firebase.database().ref(roomname).child(msg_id).update({
            like: update
      });
}
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
