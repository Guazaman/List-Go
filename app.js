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
    var traveler_name = 'Eric'; //document.getElementById("traveler_name").value;
    var travel_code =  'HackMTY2017';//document.getElementById("travel_code").value;

    //var travel_code = baseRef.equalTo(travel_code);

    var trip_ref = baseRef.child(travel_code).child('userList');
    trip_ref.update({
        tripUser: traveler_name
    });
}

function nukeDB(){
    baseRef.remove();
}

function createTable() {
    baseRef
}

function createUser() {
    var email = document.getElementById('email');
    var pasword = document.getElementById('password');
    firebase.auth().createUserWithEmailAndPassword(string(email), string(password)).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
});
    // body...
}
