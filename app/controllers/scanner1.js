var args = arguments[0] || {};
function closescan(){
	
	$.scanner1.close();
}

QRscanner.start($.scanner1);
$.scanner1.open();

QRscanner.onScan(function(e){
	alert(e);
	QRscanner.pause();
});
$.scanner1.addEventListener('close',function(){
	
//	
	if(OS_IOS) QRscanner.close();
	$.destroy();
	
});
