function validateForm() 
{
	var contact=document.forms["signup"]["contactno"].value;
	if(isNaN(document.signup.contactno.value))
	{
		alert("Enter the valid Mobile Number(Like : 9566137117)");
		document.signup.contactno.focus();
		return false;
	}
	if(contact.length<10)
	{	
		alert("The contact number must be of 10 digits");
		document.signup.contactno.focus();
		return false;
	}
    var x = document.forms["signup"]["mail"].value;
	if(x=="")
	{
		alert("Please enter your e-mail");
		return false;
	}
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
	{
        alert("Not a valid e-mail address");
        return false;
    }
	var pswrd=document.forms["signup"]["password"].value;
	if(pswrd=="")
	{
		alert("Please Enter Your Password");
		document.signup.password.focus();
		return false;
	}
	else
	{
		
	}
	if(pswrd.length < 8 || pswrd.length > 13)
	{
		alert("Your Password must be atleast 8 characters and atmost 13 characters");
		document.signup.password.select();
		return false;
	}

	var rpswrd=document.forms["signup"]["rpassword"].value;
	if(pswrd==rpswrd)
	{
		 alert("Password matched succesfully");
		 return true;
	}
	else
	{
		if(rpswrd=="")
		{
			alert("Enter the password in third box once again");
			document.signup.rpassword.focus();
			return false;
		}
		alert("Recheck Your password");
		return false;
		
	}
}