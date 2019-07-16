# Train-Scheduler

Welcome to the Train Scheduler! This scheduler uses firebase as a database to store train information. By entering the information for any train you like you can see when it will next arrive and how many minutes away.

This is all done by using the first train time and frequency and sending that information to firebase. When the site retrieves the information from the database it uses a couple of javascript formulas to display the relevant information regarding its next arrival. 

Most of the time on this site is gathered and converted using moment.js.