function validEmail(str) {
  //your JS code here.
	const re = /^[a-z0-9.]*@[a-z]*.[a-z]{2,10}$/;
	if (str.length<3) {
		return false;
	}
	return re.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
