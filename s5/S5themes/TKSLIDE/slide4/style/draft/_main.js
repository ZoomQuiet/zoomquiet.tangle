var panel1	= document.createElement("div");
var panel2	= document.createElement("div");
var link	= document.createElement("link");
link.rel	= "stylesheet";
link.type	= "text/css";
link.href	= "style/draft/main.css";

panel1.id	= "panel1";
panel2.id	= "panel2";
body.appendChild(panel1);
body.appendChild(panel2);
head.appendChild(link);
function _destroy() {
 head.removeChild(link);
 body.removeChild(panel1);
 body.removeChild(panel2);
}
var drop = null;
var ts		= new Array();
var pts		= null;
function blah() {
 if(pts) return;
 var h1		= this.node.getElementsByTagName("h1");
 var text	= "";
 var nodes	= new Array();
 var xpos	= new Array();
 var ypos	= new Array();
 var yacc	= new Array();
 var timer	= null;
 if(ts.length) for(var i=0;i<ts.length;i++) if(ts[i]) clearInterval(ts[i]);
 if(h1.length==0) h1=this.node.getElementsByTagName("h2");
 if(!h1.length) return; else h1 = h1[0];
 text		= h1.innerText?h1.innerText:h1.textContent;
     h1.innerHTML	= "&#160;";
 for(var i=0;i<text.length;i++) {
  var node	= document.createElement("span");
  node.innerHTML= text.charAt(i);
  h1.appendChild(node);
  nodes.push(node);
  xpos.push(0); ypos.push(0); ts.push(null); yacc.push(0);
 }
 drop		= function(j) {
  ypos[j]+=(yacc[j]=yacc[j]+(Math.random()));
  nodes[j].style.top		= (parseInt(ypos[j])+"px");
  if(parseInt(nodes[j].offsetTop)>=parseInt(h1.offsetTop)) {
   nodes[j].style.top		= (parseInt(h1.offsetTop)+1)+"px";
   clearInterval(ts[j]);
   ts[j]			= null;
  }
 }
 pts = setTimeout(function() {
  for(var i=0;i<nodes.length;i++) xpos[i] = parseInt(nodes[i].offsetLeft);
  for(var i=0;i<nodes.length;i++) {
   nodes[i].style.position	= "absolute";
   nodes[i].style.top		= "-10px";
   nodes[i].style.left		= ((xpos[i]-20)+"px");
   ypos[i]			= -10;
   if(!ts[i]) ts[i]		= setInterval(new Function("var j="+i+";drop(j);"),10);
  } pts = null;
 },10);
}
for(var i=0;i<pages.item.length;i++)
pages.item[i].addhandler("show", blah);
