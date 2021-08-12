function login(){
    var store= document.getElementById("user_name").value
    localStorage.setItem("name",store)
    window.location="kwitter_room.html"
}