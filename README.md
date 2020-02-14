# work-day-scheduler


##WORK DAY SCHEDULER
 https://tannerleach90.github.io/work-day-scheduler/

 Methods: Linked moment.js and added a date and time into the header for user reference and ease of use. 
 
 Imported some bootstrap forms into my hmtl, modified them to have buttons, and added some buttons from fontawesome.com. copy/pasted the first form 8 more times, changing their IDs, classes, and hardcoded names into a 9 to 5 schedule for a day.

 Implemented on-click function to each button in order to save the info for that day into the local storage.

 For further ease of use, we were tasked with implementing background colors provided to us in CSS to each hour slot, corresponding to the time. This was tricky, but ended up being if statements connecting the javascript to each time slot and cross referencing that with the current time using THIS statements. Else value would be equal to the current time based on the IF and Else If statements, turning one specific hour block per hour to a red color. Though syntax issues were abound, it ended up working.