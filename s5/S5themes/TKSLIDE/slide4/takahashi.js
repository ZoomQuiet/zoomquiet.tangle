var takahashi	= {
 evamode	: 0,
 evatext	: "color:#fff;background:#000!important;",
 nmltext	: "color:#000;background:#fff!important;",
 style		: null,
 keyhandler	: function(c) { if(c=='69') {
  takahashi.evamode	 = 1 - takahashi.evamode;
  with(takahashi.style) { 
   removeRule(".slide");
   addRule(".slide",takahashi.evamode?takahashi.evatext:takahashi.nmltext); 
  }
 }},
 init		: function() {
  var str		= "";
  var h2s		= document.getElementsByTagName("h2");
  takahashi.style	= document.createElement("style");
  head.appendChild(takahashi.style);
  keylistener.addhandler(takahashi.keyhandler);
  for(var i=0;i<h2s.length;i++) {
   str			= h2s[i].childNodes[0].nodeValue;
   if(str.length<7) with(h2s[i].style) fontSize = "7em",fontWeight="700";
   if(str.length<5) with(h2s[i].style) fontSize = "11em",fontWeight="700";
   if(str.length<3) with(h2s[i].style) fontSize = "18em",fontWeight="700";
  } 
  takahashi.style	= document.styleSheets[document.styleSheets.length-1];
  if(!takahashi.style.removeRule) {
   takahashi.style.removeRule	= takahashi.style.deleteRule;
   takahashi.style.addRule	= function(target,rule) {
    this.insertRule(target+" {"+rule+"};",0);
   };
  } with(takahashi.style) {
   addRule("h2","font-size:5.5em");
   addRule("body","background:#000");
   addRule(".slide","");
  }
  window.onresize();
 }
};

initializer.addinitializer(takahashi.init);
