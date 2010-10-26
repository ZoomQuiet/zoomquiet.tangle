function _formatter() {
 var w		= this.node.childNodes[0].clientWidth;
 var ul		= this.node.getElementsByTagName("ul");
 var node	= null;
 if(ul.length==0) return; else ul = ul[0];
 for(var i=ul.childNodes.length-1;i>=0;i--) if(ul.childNodes[i].nodeName=="#text")
  ul.removeChild(ul.childNodes[i]);
 if(this.node.childNodes[0].childNodes.length<4 && ul.className=="blah") {
  var mw = w;
  for(var i=0;i<ul.childNodes.length;i++) {
   if(ul.childNodes[i].clientWidth<mw) mw = ul.childNodes[i].clientWidth;
  } if(mw<0.2*w) {
   ul.rf	= 1;
   node		= ul;
   while(node && node.className!="ipage") {
    node.style.width = "100%";
    node	= node.parentNode;
   }
   var cx = ul.offsetLeft + ul.clientWidth/4;
   var cy = ul.offsetTop + ul.clientHeight/2;
   var cw = (ul.clientHeight+ul.clientWidth)/8;
   for(var i=0;i<ul.childNodes.length;i++) {
    var ny = parseInt(cy+cw*Math.sin((i/ul.childNodes.length)*6.28318));
    var nx = parseInt(cx+cw*Math.cos((i/ul.childNodes.length)*6.28318));
    with(ul.childNodes[i].style) {
     position	= "absolute";
     display	= "block";
     top	= ny+"px";
     left	= nx+"px";
    }
   }
  }
 }

 /*
 if(lis.length) {
  node		= lis[0].parentNode;
  while(node && node.className!="ipage") {
  node.style.width="100%";
  node.style.margin = "0";
  node		= node.parentNode;
  }
 }
 for(var i=0;i<lis.length;i++) {
  with(lis[i].style) {
   listStyleType= "none";
   fontSize	= "0.9em";
   lineHeight	= "100%";
   marginLeft	= (20)+"px";
   display	= "block";
   position	= "relative";
   cssFloat	= "left";
   width	= "16%";
   margin	= "1%";
   border	= "1px solid #000";
   textAlign	= "center";
   marginTop	= parseInt(Math.abs(20*(((lis.length-1)/2)-i)))+"px";
  }
 }*/
}

colorx = new Array("#900","#090","#009","#660","#606","#066","#444");
for(var i=0;i<pages.item.length;i++) {
 with(pages.item[i].node.style) {
  color		= "#fff";
  background	= colorx[i%7];
  fontFamily	= "Arial";
 } pages.item[i].addhandler("format", _formatter);
}

function _destroy() {
 for(var i=0;i<pages.item.length;i++) {
  with(pages.item[i].node.style) {
   color	= "";
   background	= "";
   fontFamily	= "";
  }
 }
}
