# Train-Scheduler
https://mattdague.github.io/Train-Scheduler/

Welcome to the Train Scheduler! This scheduler uses firebase as a database to store train information. By entering the information for any train you like you can see when it will next arrive and how many minutes away.

This is all done by using the first train time and frequency and sending that information to firebase. When the site retrieves the information from the database it uses a couple of javascript formulas to display the relevant information regarding its next arrival. 

Most of the time on this site is gathered and converted using moment.js.

Challenge
-------------------------------------
The goal of this project was to set up a table that connects to Firebase, allows the user to submit information and displays a response to that information based on real world time. To achieve this the javascript is coded so that every time a user enters train information it is submitted to Firebase and immediately after recieving new information the database returns it to the page. When it displays on the page I used a series of formulas to conver the time and countdown information for the display on the table.