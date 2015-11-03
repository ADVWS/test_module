var args = arguments[0] || {};
function closescan(){
	
	$.scanner1.close();
}

QRscanner.start($.scanner1);
$.scanner1.open();

$.scanner1.addEventListener('close',function(){
	
	QRscanner.close();
	$.destroy();
	
});
