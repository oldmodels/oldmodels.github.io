/* 
	This code will check each field if it has any value or if it's empty.
	If it's empty it will give an alert message with an appropriate messsage.
	If all the fields are filled out, it will give a message with another appropriate message.
*/
function checkforblank() {
	 if (document.getElementById("charName").value == "") {
		 alert("Please enter  your character name.");
		 return false;
	 }
	 if (document.getElementById("serverName").value == "") {
		 alert("Please enter the name of your server.");
		 return false;
	 }
	 if (document.getElementById("battleTag").value == "") {
		 alert("Please enter your BattleTag");
		 return false;
	 }
	 if (document.getElementById("comments").value == "") {
		 alert("Please tell us something about yourself");
		 return false;
	 }
	 else{
		 alert("Thank you for showing intereset in this.\nWe'll get back to you as soon as possible!")
	 }
}