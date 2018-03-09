function validate()
{
	var c=0;
	var ct = document.forms["personal"]["tomatotype"].value;
	var cs = document.forms["personal"]["countrytype"].value;
	var c9 = document.forms["personal"]["cloudtype"].value;
	var mt = document.forms["personal"]["margheritatype"].value;
	var contact=document.forms["personal"]["contactno"].value;
	ct=Number(ct);
	cs=Number(cs);
	c9=Number(c9);
	mt=Number(mt)
	if(isNaN(document.personal.contactno.value))
	{
		alert("Enter the valid Mobile Number(Like : 9566137117)");
		document.personal.contactno.focus();
		return false;
	}
	if(contact.length<10)
	{	
		alert("The contact number must be of 10 digits");
		document.personal.contactno.focus();
		return false;
	}
	
	var c=confirm("Are you sure to confirm your order?");
	if(c)
	{
	var total=ct+cs+mt+c9;
	alert("Your Order amounts to Rupees "+(total));
	}
	else
	{
		return false;
	}
}

