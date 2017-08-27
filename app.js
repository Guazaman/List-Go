// Initialize Firebase
var config = {
  apiKey: "AIzaSyDnL_Q28S278fyMs_WcvBEMsxn-7DITkTw",
  authDomain: "list-go-22a0a.firebaseapp.com",
  databaseURL: "https://list-go-22a0a.firebaseio.com",
  projectId: "list-go-22a0a",
  storageBucket: "list-go-22a0a.appspot.com",
  messagingSenderId: "44651498422"
};
firebase.initializeApp(config);

var my_object = document.getElementById('my_object');
var baseRef = firebase.database().ref()
//var adminsRef = baseRef.child('admins').child('admin');
    //adminsRef.on('value', snap => my_object.innerText = snap.val());


function saveAdmin() {
    var leader_name = 'Mike';//document.getElementById("admin_name").value;
    var tripName = 'hackaton';//document.getElementById("event_name").value;
    var travel_code = 'HackMTY2017';//document.getElementById("trip_code").value;

    var another_child = baseRef.child(travel_code);
        another_child.update({
            tripName: tripName,
            administrator: leader_name
    });

}

function saveTraveler() {
    var traveler_name = 'migue'; //document.getElementById("traveler_name").value;
    var travel_code =  'HackMTY2017';//document.getElementById("travel_code").value;

    var code_trip = baseRef.equalTo(travel_code);

    var trip_ref = baseRef.child(travel_code).child("userList").child(traveler_name);
    trip_ref.update({
        tripUser: traveler_name
    });
}

function nukeDB(){
    baseRef.remove();
}

function createTable() {
 //Miguel shit
}

function createUser() {
    var email = document.getElementById('email').value.toString().trim();
    var pasword = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, String(password))
    .then(function(success){
        console.log(success, 'SUCCESS');
        return success;
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage,'ERROR');
        return errorMessage;
    });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user, 'user heerrre');
  } else {
    console.log('no fucking users');
  }
});
