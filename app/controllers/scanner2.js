var args = arguments[0] || {};
function closescan(){
	
	$.scanner2.close();
}

QRscanner.start($.scanner2);
$.scanner2.open();

QRscanner.onScan(function(e){
	alert(e);
	QRscanner.pause();
});
$.scanner2.addEventListener('close',function(){
	
//	
	if(OS_IOS) QRscanner.close();
	$.destroy();
	
});


function pausescan(){
	QRscanner.pause();
}
function resumescan(){
	QRscanner.resume();
}

