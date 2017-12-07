# Multi Timer
The basic idea is to have a user enter multiple countdown timers to a list. The list is then displayed for the user to modify at their will. A countdown at the top of the page will then run through each timer, one by one, until all timers are exhausted.

## Main Design/Features
### Top Section (100% single column)
* Large countdown timer
	* This timer will run through the timer list created from the user, one-by-one. Once one timer is exhausted, the next timer will begin.
* The countdown timer will have  Start Session, Pause/Start, Reset, and Next buttons
	* Start Session will begin running through the timers in the list
	* Pause/Start will toggle starting and pausing the current, main timer
	* Reset will reset the current timer to the original time
	* Next will skip the current timer and begin the next timer in the list
* Description text will display below the timer

### Bottom Left Section (25-50% single column)
* Form with 4 textboxes
	* Hours
	* Minutes
	* Seconds
	* Description
* Add Timer button below textboxes
	* Upon hitting Add Timer, the credentials will populate a list in the bottom-right section

### Bottom Right Section (50-75% single column)
* List of timers created from the form to the left
* Each timer added will list all details entered from the form
* Timer list items will each contain a Delete and Edit button
	* Delete button will remove items from the list
	* Edit button will allow the user to edit any of the information

## Future Features/Ideas
* Share/collaborate
* Save/load session
* Theme swap (dark/light)