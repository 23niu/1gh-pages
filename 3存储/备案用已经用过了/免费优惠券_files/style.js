var z=1;
$(window).scroll( function() {
//document.getElementById("Float_002").innerHTML=$(window).scrollTop()
	if($(window).scrollTop()>405 && (z==1)){
		z=2;
		//alert("大于453展开")
		//document.getElementById("Float_003").innerHTML="展开"
		document.getElementById("Float_002").style.cssText = "height: 54px";
	}
	if($(window).scrollTop()<404 && (z==2)){
		z=1;
		//document.getElementById("Float_003").innerHTML="收起"
		document.getElementById("Float_002").style.cssText = "height: 0px";
		//alert("小于453收起")
	}
});