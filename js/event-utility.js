var evt={
	addListener: function(obj,type,fn){
		if(obj.addEventListener){
			obj.addEventListener(type,fn);
		}else{
			obj.attachEvent("on"+type,fn);
		}
	},
	removeListener:function(obj,type,fn){
		if(obj.removeEventListener){
			obj.removeEventListener(type,fn);
		}else{
			obj.detachEvent("on"+type,fn);
		}
	},
	getTarget:function(e){
		if(e.target){
			return e.target;
		}
		return e.srcElement;
	},
	preventDefault:function(e){
		if(e.preventDefault){
			e.preventDefault;
		}else{
			e.returnValue=false;
		}
	},
	getChildrenIndex:function(ele){
		//IE is simplest and fastest
		if(ele.sourceIndex){
		return ele.sourceIndex - ele.parentNode.sourceIndex - 1;
		}
		//other browsers
		var i=0;
		while(ele = ele.previousElementSibling){
		i++;
		}
		return i;
	},
	pageX:function(elem){
		return elem.offsetParent?(elem.offsetLeft+evt.pageX(elem.offsetParent)):elem.offsetLeft;
	},
	pageY:function(elem){
	return elem.offsetParent?(elem.offsetTop+evt.pageY(elem.offsetParent)):elem.offsetTop;
	},
	stopBubble:function(e){
	if (e && e.stopPropagation)
		e.stopPropagation()
	else
		window.event.cancelBubble=true
	},
	getStyle:function(ele){
		return ele.currentStyle? ele.currentStyle : window.getComputedStyle(ele, null);
	}
}



