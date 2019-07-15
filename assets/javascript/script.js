    var firebaseConfig = {
    apiKey: "AIzaSyCO3GWGFUQE5CjCYpAb346YB8OnibRRC-I",
    authDomain: "mattsproject-54627.firebaseapp.com",
    databaseURL: "https://mattsproject-54627.firebaseio.com",
    projectId: "mattsproject-54627",
    storageBucket: "mattsproject-54627.appspot.com",
    messagingSenderId: "1015675607617",
    appId: "1:1015675607617:web:ba6417b6a5bbac8f"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  var train = "";
  var destination = "";
  var firstTrainTime = 0;
  var frequency = 0;

  $("#submitButton").on("click", function (event) {
    event.preventDefault();


    train = $("#inputName").val().trim();
    destination = $("#inputDestination").val().trim();
    firstTrainTime= $("#inputTrainTime").val();
    frequency = $("#inputFrequency").val().trim();

    var newTrain = {
        train: train,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    }
    database.ref().push(newTrain);

});

// database.ref().on("child_added", function (snapshot) {
//   var store = snapshot.val();
//   var tRow = $("<tr>");
//   var nameTd = $("<td>").text(store.name);
//   var roleTd = $("<td>").text(store.role);
//   var startTd = $("<td>").text(store.start);
//   var rateTd = $("<td>").text("$"+ store.rate + ".00");
//   var convertedDate = moment(store.start, "MM/DD/YYYY");
//   var months=moment().diff(moment(store.start, "YYYY/MM/DD"), "months");
//   var workedTd = $("<td>").text(months);
//   var billedTd = $("<td>").text("$" + months*store.rate + ".00");
//   tRow.append(nameTd, roleTd, startTd, workedTd, rateTd,billedTd);
//   $("tbody").append(tRow);
//   console.log(employeeName);
//   console.log(convertedDate);
//   console.log(months);
//   console.log(store.start);



})