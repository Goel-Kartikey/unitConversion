function convertTemp(){
	var cel = document.getElementById("c");
	var fh = document.getElementById("f");
	if (cel.value == "" && fh.value == ""){
		alert("Enter temperature")
		cel.focus();
		return false;
	}
	if (!cel.value && fh.value)
	{
		cel.value = (fh.value-32)*5/9;
		return true;
	}
	fh.value = (c.value*9/5)+32;
	return true;
}
function convertWeight(){
	var kg = document.getElementById("kg");
	var pnd = document.getElementById("pound");
	if (kg.value == "" && pnd.value == ""){
		alert("Enter weight")
		kg.focus();
		return false;
	}
	if (!kg.value && pnd.value)
	{
		kg.value = pnd.value/2.205;
		return true;
	}
	pnd.value = kg.value*2.205;
	return true;
}
function convertDistance(){
	var kg = document.getElementById("km");
	var ml = document.getElementById("ml");
	if (km.value == "" && ml.value == ""){
		alert("Enter weight")
		km.focus();
		return false;
	}
	if (!km.value && ml.value)
	{
		km.value = ml.value/1.609;
		return true;
	}
	ml.value = km.value*1.609;
	return true;
}