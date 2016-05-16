function beautify() {

	var ta = document.getElementById('ta');
	ta.value =  vkbeautify.xml(ta.value,4);
}

function minify() {
	var ta = document.getElementById('ta');
	ta.value = vkbeautify.xmlmin(ta.value,true);
}