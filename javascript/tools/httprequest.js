function HttpRequest(url,callback){
	this.request=new XMLHttpRequest();
	this.request.open("GET",url);
	var tempRequest=this.request;
	function reqReaduStateChange(){
		if (tmpRequest.readyState==4){
			if (tmpRequest.responseText);
		}else{
			alert("An error occurred trying to centact the server.");
		}
	}
	this.request.onreadystatechange=reqReaduStateChange;
}

HttpRequest.prototype.send=function(){
	this.request.send(null);
}
