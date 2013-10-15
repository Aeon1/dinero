var myScroll, wrapper, scroller, ul, capacargando, elemento, node, anchoscroller;

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
	
	capacargando.style.display='block';
	wrapper.style.display='none';
	
	setTimeout(function() {
		if(window.orientation == -90 || window.orientation == 90){
			orientacion(window.innerHeight,window.innerWidth);
		}else{
			orientacion(window.innerWidth,window.innerHeight);
		}
	}, 300);
	
}, false);

window.onload = function() {
	
	if(window.orientation == -90 || window.orientation == 90){
		orientacion(window.innerHeight,window.innerWidth);
	}else{
		orientacion(window.innerWidth,window.innerHeight);
	}
	
}

function loaded() {
	
	myScroll = new iScroll('wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
		}
 	});	
	
}

function orientacion(anchoPantalla,altoPantalla){
	
	ul=document.getElementById('thelist');
	scroller=document.getElementById('scroller');
	wrapper=document.getElementById('wrapper');
	
	//le restamos al alto de la pantalla tanto el alto del pie como de la cabecera
	anchoPantalla=window.innerWidth;
	altoPantalla=window.innerHeight-45-48;
	
	node = ul.children;// elementos li de la lista.
	
	anchoscroller=anchoPantalla*node.length;//el ancho del será el ancho de la pantalla tantas veces como fotos haya en la lista.
	scroller.style.width=anchoscroller+'px';
	
	for (i = 0; i < node.length; i++) {//Recorremos los elementos de la lista
		var li = node[i];
		li.style.width=anchoPantalla+'px';
		li.style.height=altoPantalla+'px';
		li.style.lineHeight=altoPantalla+'px';
	}
	
	//refrescamos el iscroll
	wrapper.style.display='block';
	
	elemento = node[myScroll.currPageX];

	myScroll.refresh();
	myScroll.scrollToElement(elemento, 0);
		
}

document.addEventListener('DOMContentLoaded', loaded, false);