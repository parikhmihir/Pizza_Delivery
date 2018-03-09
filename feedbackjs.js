function validate()
{
var contact= document.forms["feedback"]["contactno"].value;
if(contact=="")
{
alert("Please Enter the Contact Number");
document.feedback.contactno.focus();
return false;
}
if(isNaN(document.feedback.contactno.value))
{
alert("Enter the valid Mobile Number(Like : 9566137117)");
document.feedback.contactno.focus();
return false;
}
if(contact.length !=10)
{
alert(" Your Mobile Number must be 10 digit");
document.feedback.contactno.focus();
return false;
}
var feedbck=document.forms["feedback"]["feed"].value;
if(feedbck=="")
{
	alert("Drop your valuable Feedback ,so we can serve better to you");
	document.feedback.feedbck.select();
	return false;
}

var name=prompt("Please enter your name");
if(name!="")
{
	alert("Thank You "+name+ " for your valuable time");
	window.location('feedbacksubmitted.html');
}
else
{
	alert("Name must be filled ");
	return false;
}
}