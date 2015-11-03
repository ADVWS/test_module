var args = arguments[0] || {};
function closescan(){
	
	$.scanner2.close();
}
function pausescan(){
	QRscanner.pause();
}
function resumescan(){
	QRscanner.resume();
}
QRscanner.start($.scanner2);
$.scanner2.open();

$.scanner2.addEventListener('close',function(){
	
	QRscanner.close();
	$.destroy();
	
});
