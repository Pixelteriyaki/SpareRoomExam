function FillEventDetails(){
	$.getJSON("event.json", function(json) {
		console.log(json); // this will show the info it in firebug console
	});
	document.getElementById("areaDetail").innerHTML = "test";
	document.getElementById("addressDetail").innerHTML = "test";
	document.getElementById("directionDetail").innerHTML = "test";
	document.getElementById("subwayDetail").innerHTML = "test";
	document.getElementById("mapDetail").innerHTML = "test";


}
FillEventDetails();