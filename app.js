(function () {
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

    var my_obj = getElementById('my_obj');
    const ref = firebase.database().ref().child('my_obj');
    ref.on('value', snap => console.log(snap.val()));

}());
