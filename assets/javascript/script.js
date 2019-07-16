//firebase connection
var firebaseConfig = {
  apiKey: "AIzaSyCO3GWGFUQE5CjCYpAb346YB8OnibRRC-I",
  authDomain: "mattsproject-54627.firebaseapp.com",
  databaseURL: "https://mattsproject-54627.firebaseio.com",
  projectId: "mattsproject-54627",
  storageBucket: "mattsproject-54627.appspot.com",
  messagingSenderId: "1015675607617",
  appId: "1:1015675607617:web:ba6417b6a5bbac8f"
};
//initialize call to firebase
firebase.initializeApp(firebaseConfig);
//variable for firebase database
var database = firebase.database();

var train = "";
var destination = "";
var firstTrainTime = 0;
var frequency = 0;
//on clikc function for form
$("#submitButton").on("click", function (event) {
  event.preventDefault();

//gathers values from each of the input lines
  train = $("#inputName").val().trim();
  destination = $("#inputDestination").val().trim();
  firstTrainTime = $("#inputTrainTime").val();
  frequency = $("#inputFrequency").val().trim();
//variable for a new train to be added to database
  var newTrain = {
    train: train,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  }
  //pushes the new trains information to the database
  database.ref().push(newTrain);
  // clears the boxes after getting the information
  $("#inputName").val("");
  $("#inputDestination").val("");
  $("#inputTrainTime").val("");
  $("#inputFrequency").val("");

});

database.ref().on("child_added", function (snapshot) {
  //variable for database response
  var store = snapshot.val();
  // creates row to add to table later
  var tRow = $("<tr>");
  // adds train name text
  var trainTd = $("<td>").text(store.train);
  // adds train destination text
  var destinationTd = $("<td>").text(store.destination);
  // adds train frequency text
  var frequencyTd = $("<td>").text("Every " + store.frequency + " min");
  // converts time of the first train using momentjs
  var timeConvert = moment(store.firstTrainTime, "HH:mm").subtract(1, "years");
  // difference in time from first train to now
  var diffTime = moment().diff(moment(timeConvert), "minutes");
  // remaining minutes after dividing the difference and frequency
  var tRemainder = diffTime % store.frequency;
  // formula for getting the minutes until train arrives
  var minutesTil = store.frequency - tRemainder
  // adds minutes til train arrives text
  var minutesAwayTd = $("<td>").text(minutesTil);
  // minutes until next train arrives
  var nextTrain = moment().add(minutesTil, "minutes");
  // adds arrival time text
  var nextArrivalTd = $("<td>").text(moment(nextTrain).format("hh:mm"));
  // adds all tds to the row created
  tRow.append(trainTd, destinationTd, frequencyTd, nextArrivalTd, minutesAwayTd);
  // adds the new row to the table 
  $("tbody").append(tRow);

});