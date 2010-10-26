var config	= {
 despace	: /^[ \t]*|[ \t]*$/g,
 init		: function() {
  var node	= document.getElementById("config");
  var conf	= "";
  var confa	= null;
  var i,j,k	= 0;
  var n,v	= "";
  if(!node || !node.childNodes.length) return;
  for(i=0;i<node.childNodes.length;i++) conf+=node.childNodes[i].nodeValue;
  conf		= conf.replace(/\r|\n/g,"");
  confa		= conf.split(";");
  for(i=0;i<confa.length;i++) if(confa[i]!="") if(j=confa[i].indexOf(":")){
   n		= new RegExp("^"+confa[i].substring(0,j).replace(config.despace,"")+"$","i");
   v		= new RegExp("^"+confa[i].substring(j+1).replace(config.despace,"")+"$","i");
   for(j=0;j<control.item.length;j++) if(n.test(control.item[j].name))
    for(k=0;k<control.item[j].fvalue.length;k++) if(v.test(control.item[j].fvalue[k])) {
     control.set(j,control.item[j].fvalue[k]);
     control.item[j].index = k;
     if(control.item[j].onchange) control.item[j].onchange();
    }
  }
 }
};
/* TKSLIDE v4 control.js 2006/03/25 */

var control	= {
 visible	: false,
 pvisible	: false,
 panel		: null,
 ppanel		: null,
 ptable		: null,
 ppage		: null,
 item		: new Array(),
 init		: function() {
  var pptitle	= null;
  with((this.panel=document.createElement("div")))
   id="ctrlpanel", className="ctrl_large";
  with((this.panel.btn1=document.createElement("span"))) {
   this.panel.btn1.onclick = function(){pages.open(pages.index-1);};
   title = "previous slide";
   appendChild(document.createTextNode("\u21e6"));
  }
  with(this.panel.btn2=document.createElement("span")) {
   this.panel.btn2.onclick = function(){pages.open(pages.index+1);};
   title = "next slide";
   appendChild(document.createTextNode("\u21e8"));
  }
  with(this.panel.btn3=document.createElement("span")) {
   this.panel.btn3.onclick = function(){
    control.pvisible=!control.pvisible;control.display(control.visible);
   }; title = "toggle property panel";
   appendChild(document.createTextNode("\u2117"));
  } 
  with(this.panel.btn4=document.createElement("span")) {
   this.panel.btn4.onclick = function(){control.display(!control.visible);};
   title = "close toolbar";
   appendChild(document.createTextNode("\u2297"));
  } 
  
  with(this.panel) {
   appendChild(btn1);appendChild(btn2);appendChild(btn3);appendChild(btn4);
  } document.body.appendChild(this.panel);
  /*with(this.item) {
   push(new control.property("Auto Margin",this.on,null,this.on,this.off));
  }*/
  with((this.ppanel=document.createElement("div"))) 
   id="property", className="property_large";
  with((pptitle=document.createElement("div"))) className = "title";
  pptitle.appendChild(document.createTextNode("Property"));
  with((this.ptable=document.createElement("table"))) border="0px";
  with(this.ppanel) { appendChild(pptitle); appendChild(this.ptable); }
  with(body) { appendChild(this.panel); appendChild(this.ppanel); }
  keylistener.addhandler(this.keyhandler);

  control.insert("Small Toolbar","off",function() {
   if(this.index==0) { 
    control.panel.className = "ctrl_small";
    pages.indexbox.parentNode.removeChild(pages.indexbox);
    control.ppanel.parentNode.removeChild(control.ppanel);
    control.panel.insertBefore(pages.indexbox,control.panel.childNodes[0]);
    control.panel.appendChild(control.ppanel);
    pages.indexbox.className = "indexbox_small";
    control.ppanel.className = "property_small";
   } else { 
    control.panel.className = "ctrl_large";
    pages.indexbox.parentNode.removeChild(pages.indexbox);
    control.ppanel.parentNode.removeChild(control.ppanel);
    body.appendChild(pages.indexbox);
    body.appendChild(control.ppanel);
    pages.indexbox.className = "indexbox_large";
    control.ppanel.className = "property_large";
   }
  },"on","off");
 },
 set		: function(pos,v) {
  with(control.ptable.rows[pos].cells[1]) {
   childNodes[0].nodeValue=v;
   style.color = "#000";
   if(v=="on") style.color = "#0f0";
   if(v=="off")style.color = "#f00";
  }
 },
 insert		: function() {
  var nitem	= null;
  var cpos	= this.ptable.rows.length;
  var clkfunc	= "with(control.item["+cpos+"]){"
  		+ "control.set("+cpos
		+ ",(value=fvalue[(index=(index+1>=fvalue.length?0:index+1))]));"
		+ "if(control.item["+cpos+"].onchange) onchange();}"
  this.ptable.insertRow(cpos);
  this.ptable.rows[cpos].onclick = new Function(clkfunc);
  this.item.push((nitem=new this.property(arguments)));
  this.rindex		= resizelistener.addhandler(this.resizehandler,0.0,0,1.0,1);
  with(this.ptable.rows[cpos]) {
   insertCell(0); insertCell(1);
   nitem.cell		= cells[1];
   cells[0].appendChild(document.createTextNode(nitem.name));
   cells[1].appendChild(document.createTextNode(""));
   control.set(cpos,nitem.value);
   with(cells[1].style) {
    textAlign		= "center";
    padding		= "2px";
    paddingLeft		= "20px";
    lineHeight		= "100%";
    fontSize		= "1em";
   }
  } return nitem;
 },
 display	: function(v) {
  this.visible	= v;
  var vstr	= (this.visible?"block":"none");
  control.panel.style.display = vstr;
  pages.indexbox.style.display = vstr;
  control.ppanel.style.display = (this.pvisible?vstr:"none");
 },
 resizehandler	: function() {
  if(control.visible) { 
   control.display(!control.visible);
   setTimeout("control.display(!control.visible);",100);
  }
 },
 keyhandler	: function(c) {
  if(c==27) control.display(!control.visible);
 },
 property	: function(args) {
  this.name	= args[0];
  this.value	= args[1];
  this.index	= 0;
  this.onchange	= args[2];
  this.fvalue	= new Array();
  for(var i=3;i<args.length;i++) {
   this.fvalue.push(args[i]);
   if(args[i]==args[1]) this.index = i-3;
  }
 }
};
/* TKSLIDE v4 display.js 2006/03/25 */

var display	= {
 ratio		: 4/3,
 margin		: 0.98,
 fontRatio	: 40,
 mmax		: 0.2,
 mmin		: 0.2,
 mspc		: 0.1,
 fixhead	: false,
 resizeImg	: true,
 fritem		: null,
 clickmove	: true,
 /* Sometimes layout broken when resizing or change style. Then Turn fixblink off (false) */
 fixblink	: true, 
 init		: function() {
  control.insert("Center Content",(display.fixhead?"off":"on"),function() {
   display.fixhead=(this.index==1?true:false);
   pages.formatall();
   pages.item[pages.index].onevent("format");
  },"on","off");
  control.insert("Slide W/H Ratio","8/5",function() {
   eval("display.ratio="+this.fvalue[this.index]+";");
   window.onresize();
  },"4/3","8/5","16/9","2/1");
  fritem=control.insert("FontSize Ratio","40",function() {
   eval("display.fontRatio="+this.fvalue[this.index]+";");
   window.onresize();
  },"25","30","40","50","60");
  control.insert("Resize Image","on", function() {
   display.resizeImg=(this.index==1?false:true);
   pages.formatall();
   pages.item[pages.index].onevent("format");
  },"on","off");
  control.insert("Show Page No.", "on", function() {
   pages.ppage.style.display = (this.index==1?"none":"block");
  }, "on", "off");
  control.insert("Next/Previous on Click", "on", function() {
   display.clickmove=(this.index==1?false:true);
  }, "on", "off");
  control.insert("Fix blinking", "on", function() {
   display.fixblink=(this.index==1?false:true);
  }, "on", "off");
  keylistener.addhandler(this.keyhandler);
  clicklistener.addhandler(this.clickhandler);
 },
 clickhandler	: function(e) {
  window.focus();
  e.fename	= (e.fromElement?e.fromeElement:e.target);
  e.fename	= (e.fename?e.fename.nodeName:"");
  if(display.clickmove && (e.fename!="a" && e.fename!="A")) 
   pages.open(pages.index+1);
 },
 keyhandler	: function(c) {
  if(c==91 || c==93 || c==219 || c==221) {
   if(c==91 || c==219) display.fontRatio+=(display.fontRatio<60?5:0);
   if(c==93 || c==221) display.fontRatio-=(display.fontRatio>25?5:0);
   fritem.cell.childNodes[0].nodeValue = display.fontRatio;
   window.onresize();
  }
 }
};
/* TKSLIDE v4 cookie.js 2006/03/25 */

var cookie	= {
 vars		: null,
 _encode	: function(str) {
  var retval	= ""; str = str +"";
  for(var i=str.length-1;i>=0;i--) {
   retval	+= str.charCodeAt(i);
   if(i) retval	+= "a";
  } return retval;
 },

 _decode	: function(str) {
  var a,retval	= "";
  if(typeof(str)!="string" || str=="") return "";
  a		= str.split("a");
  for(var i=a.length-1;i>=0;i--)
   retval	+= String.fromCharCode(a[i]);
  return retval;
 },

 init		: function() {
  var i, j, tmp1, tmp2		= null;
  if(cookie.vars) return;
  cookie.vars			= new Array();
  if(!document.cookie) return;
  tmp1				= document.cookie.split(";");
  for(i=0;i<tmp1.length;i++) {
   tmp2				= tmp1[i].split("=");
   for(j=0;j<tmp2[0].length;j++) if(tmp2[0].charAt(j)!=" ") { 
    tmp2[0] = unescape(cookie._decode(tmp2[0].substring(j))); break; 
   } cookie.vars[tmp2[0]]	= unescape(cookie._decode(tmp2[1]));
  }
 },

 isEnabled	: function() { 
  return window.navigator.cookieEnabled;
 },

 set		: function(name, value, date) {
  ename				= escape(cookie._encode(name));
  document.cookie		= ename + "=" + escape(cookie._encode(value)) 
  				+ (date?"; expires="+date.toGMTString():"");
  cookie.vars[name]		= value;
 },

 setEx		: function(name, value, date, path, domain, secure) {
  ename				= escape(cookie._encode(name));
  var str			= ename +"="+escape(cookie._encode(value))+"; ";
  if(date) str			+="expires="+date.toGMTString()+"; ";
  if(path) str			+="path="+path+"; ";
  if(domain) str		+="domain="+domain+"; ";
  if(secure) str		+="secure";
  document.cookie		= str;
  cookie.vars[name]		= value;
 },

 get		: function(name, defval) {
  return (cookie.vars[name]?cookie.vars[name]:defval);
 },

 setExpire	: function(name, date) {
  ename				= escape(cookie._encode(name));
  document.cookie		= ename + "=" + cookie.vars[name]
  				+ "; expires="+date.toGMTString();
 }
};

cookie.init();
/* TKSLIDE v4 document.js 2006/05/08 */

var generic		= {
 parameter		: function(name) {
  var pageurl            = String(document.location);
  if(/#page([0-9]+)/.test(pageurl)) return RegExp.$1;
  else if(/\?page([0-9]+)/.test(pageurl)) return RegExp.$1;
  else return null;
 },

 addhandler		: function(name, func) {
  if(!this.event[name]) this.event[name] = new Array();
  this.event[name].push(func);
 },
 onevent		: function() {
  if(!this.event[arguments[0]]) return;
  for(var i=1,args=new Array();i<arguments.length;i++) args.push(arguments[i]);
  if(this.ievent) for(var i=this.event[arguments[0]].length-1;i>=0;i--)
   this.event[arguments[0]][i].apply(this,args);
  else for(var i=0;i<this.event[arguments[0]].length;i++)
   this.event[arguments[0]][i].apply(this,args);
 }
};

var clicklistener	= {
 handlers		: new Array(),
 addhandler		: function(func) { this.handlers.push(func); },
 dhandler		: function(eve) {
  var e			= (eve?eve:event);
  for(var i=0;i<clicklistener.handlers.length;i++)
   if(clicklistener.handlers[i](e)) break;
 }
};

var keylistener		= {
 handlers		: new Array(),
 addhandler		: function(func) { this.handlers.push(func); },
 dhandler		: function(eve) {
  var e			= (eve?eve:event);
  var code		= (e.which?e.which:e.keyCode);
  for(var i=0;i<keylistener.handlers.length;i++)
   if(keylistener.handlers[i](code)) break;
 }
};

var resizelistener	= {
 handlers		: new Array(),
 sizer			: new Array(),
 addhandler		: function(func,x,y,w,h) { 
  this.handlers.push(func); 
  return this.sizer.push({x:x,y:y,w:w,h:h})-1;
 },
 update			: function(i,nx,ny,nw,nh) {
  with(this.sizer[i]) { x = nx, y = ny, w = nw, h = nh; }
 },
 dhandler		: function(eve) {
  if(typeof(styles)!="undefined" && styles.print) return;
  var dw		= (document.body.clientWidth-2);
  var dh		= (document.body.clientHeight-2);
  var sr		= null;
  var mx		= (dw-(dw*display.margin))/2;
  var my		= (dh-(dh*display.margin))/2;
  for(var i=resizelistener.handlers.length-1;i>=0;i--) {
   sr			= resizelistener.sizer[i];
   if(resizelistener.handlers[i](mx+sr.x*dw,my+sr.y*dh, sr.w*dw*display.margin,sr.h*dh*display.margin)) break;
  }
 }
};

var initializer		= {
 initer			: new Array(),
 init			: function() {
  for(var i=0;i<this.initer.length;i++) this.initer[i]();
 },
 addinitializer		: function(func) {
  this.initer.push(func);
 }
};
/* TKSLIDE v4 page.js 2006/03/25 */

var pages		= {
 index			: -1,
 oindex			: -1,
 rindex			: 0,
 input			: "",
 ppage			: null,
 indexbox		: null,
 container		: null,
 metas			: null,
 item			: new Array(),
 event			: new Array(),
 addhandler		: generic.addhandler,
 onevent		: generic.onevent,
 init			: function() {
  var i,node		= null;
  var slidesrc,sep	= /h1/i;
  with(this.container=document.createElement("div"))
   id			= "container",
   className 		= "container";
  with(this.metas=document.createElement("div")) style.display="none";
  with(this.ppage=document.createElement("div")) id="pagenumber";
  if(node=document.getElementById("config")) {
   node.parentNode.removeChild(node);
   this.metas.appendChild(node);
  }
  this.ppage.onclick=function() {
   if(typeof(control)!="undefined") control.display(!control.visible);};
  this.ppage.appendChild(document.createTextNode(""));
  for(i=0;i<body.childNodes.length;i++) with(body.childNodes[i]) 
   if(nodeName=="div" || nodeName=="DIV") {
    if(className=="presentation") break;
    else if(className=="slide") break;
  } if(i==body.childNodes.length || body.childNodes[i].className=="slide") 
   slidesrc		= body;
  else slidesrc		= body.childNodes[i];
  if(i==body.childNodes.length && document.getElementsByTagName("h1").length==0)
   sep			= /H2/i;
  node			= null;
  while(slidesrc.childNodes.length) with(slidesrc.childNodes[0]) {
   if(nodeName=="#text") {
    if(node) node.appendChild(cloneNode(true));
   } else if(sep.test(nodeName)) {
    if(node) pages.item.push(new pages.page(node));
    node		= document.createElement("div");
    if(!childNodes.length || childNodes[0].nodeValue!="#")
    node.appendChild(cloneNode(true));
   } else if(className=="slide") {
    if(node) pages.item.push(new pages.page(node));
    node		= cloneNode(true);
   } else if(className=="slidebreak" ||
            (childNodes.length==1 && childNodes[0].className=="slidebreak")) {
    if(node) pages.item.push(new pages.page(node));
    node		= document.createElement("div");
   } else if(nodeName=="script" || nodeName=="SCRIPT") {
    // do nothing
   } else if(node) node.appendChild(cloneNode(true));
   slidesrc.removeChild(slidesrc.childNodes[0]);
  } 
  if(node) pages.item.push(new pages.page(node));
  for(i=0;i<body.childNodes.length;i++) if(body.childNodes[i].style)
   body.childNodes[i].style.display="none";
  body.appendChild(this.container);
  body.appendChild(this.ppage);
  body.appendChild(this.metas);
  keylistener.addhandler(this.keyhandler);
  this.rindex		= resizelistener.addhandler(this.resizehandler,0.0,0,1.0,1);
  with(this.indexbox=document.createElement("select")) {
   className		= "indexbox_large";
   id			= "indexbox";
  } this.indexbox.onclick = function() { pages.open(parseInt(pages.indexbox.value)); };
  for(var i=0;i<pages.item.length;i++) {
   node			= document.createElement("option");
   node.value		= i;
   node.appendChild(document.createTextNode(pages.item[i].title));
   this.indexbox.appendChild(node);
  } document.body.appendChild(pages.indexbox);
  if(generic.parameter()) this.open(parseInt(generic.parameter())-1);
  else this.open(parseInt(cookie.get("page",0)));
  window.onresize(); pages.item[pages.index].format = 0;
  setTimeout(function(){pages.open(pages.index);},100);
 },
 extend			: function(v) {
  if(v) resizelistener.update(this.rindex,0,0,1,1);
  else resizelistener.update(this.rindex,0.2,0,0.8,1);
 },
 resizehandler		: function(x,y,w,h) {
  var r			= w/h;
  var nw		= (r>display.ratio?h*display.ratio:w);
  var nh		= (r<display.ratio?w/display.ratio:h);
  if(display.fixblink)
   setTimeout("pages.container.style.display='none';pages.container.style.display='block';",10);
  else setTimeout("pages.container.style.display='none';"+
  	     "setTimeout('pages.container.style.display=\"block\";',10);",10);
  document.body.style.fontSize = Math.round(nw/display.fontRatio)+"px";
  //document.body.style.lineHeight= "200%";
  pages.ppage.style.bottom	= ((h-nh)/2+y+1)+"px";
  for(var i=0;i<pages.item.length;i++) pages.item[i].format = 0;
  with(pages.container.style) {
   width		= nw + "px";
   height		= nh + "px";
   left			= (x+(w-nw)/2) + "px";
   top			= (y+(h-nh)/2) + "px";
  } if(pages.index!=-1) pages.item[pages.index].onevent("format");
 },
 formatall		: function() {
  for(var i=0;i<pages.item.length;i++) pages.item[i].format = 0;
 },
 formatter		: function() {
  var w			= parseInt(this.node.childNodes[0].childNodes[0].offsetWidth);
  var h			= parseInt(this.node.childNodes[0].childNodes[0].offsetHeight);
  var ip		= this.node.childNodes[0].childNodes[0];
  var figs		= this.node.getElementsByTagName("img");
  var ml,wv,wc		= 0;
  var i,mt,Hsum		= 0;
  if(h==0) return;
  wtm			= function(n1,n2) {
   var v1		= (/h1|h2/i.test(n1)?1:(/img/i.test(n1)?2:(/null/i.test(n1)?3:1.2)));
   var v2		= (/h1|h2/i.test(n2)?1:(/img/i.test(n2)?2:(/null/i.test(n2)?3:1.2)));
   return (Math.sqrt((v1-v2)*(v1-v2))+0.2)*(n1=="null"?1.1:1)*(n2=="null"?1:1);
  };
  for(i=0;i<figs.length;i++) with(figs[i]) {
   if(!figs[i].ratio) figs[i].style.position="static", figs[i].ratio= (figs[i].height/768);
   if(!figs[i].px) {
    figs[i].px		= (w && offsetLeft/w?offsetLeft/w:0);
    figs[i].py		= (h && offsetTop/h?offsetTop/h:0);
   } 
   if(display.resizeImg)
      with(style) left=(px*w)+"px", top=(py*h)+"px", height=parseInt(ratio*h)+"px";
     else with(style) left=(px*w)+"px", top=(py*h)+"px", height=parseInt(ratio*768)+"px";
  }
  for(i=0;i<ip.childNodes.length;i++) with(ip.childNodes[i]) {
   style.width		= "";
   if((tagName!="IMG" && tagName!="img") || style.position!="absolute") {
    var mk		= 0;
    var av=w,avL=w,avR	= w;
    for(j=0;j<figs.length;j++) { if(figs[j].style.position=="absolute")
     if(offsetTop+offsetHeight>figs[j].offsetTop*0.95 && 
      offsetTop*0.95<figs[j].offsetTop+figs[j].offsetHeight) with(figs[j])
     avL		= (avL<offsetLeft?avL:offsetLeft),
     avR		= (avR<w-offsetLeft-offsetWidth?avR:w-offsetLeft-offsetWidth);
    } av		= (avL>avR?avL:avR); if(avL<avR) mk=1;
    if(tagName!="IMG" && tagName!="img") if(av!=w) style.width=(av*0.8)+"px";//if(offsetWidth>av*0.9 && av!=w) style.width=(av*0.8)+"px";
    ml			= ((av-offsetWidth)/2);
    if(!/h1|h2/i.test(nodeName)) {
     if(ml<(display.mmin*0.5*w)) ml=(0.5*display.mmin*w);
     if(ml>(display.mmax*0.5*w)) ml=(0.5*display.mmax*w);
    } 
    style.marginLeft	= (mk?w-ml-offsetWidth:ml)+"px";
    style.marginRight	= (mk?w-ml-offsetWidth:ml)+"px";
    Hsum		= Hsum + offsetHeight;
   } 
   wc			+=wtm((i!=0?previousSibling.tagName:"null"),tagName);
   wc			+=wtm(tagName,(i!=ip.childNodes.length-1?nextSibling.tagName:"null"));
  } 
  Hsum		= h - Hsum;
  
  for(i=0;i<ip.childNodes.length;i++) with(ip.childNodes[i]) if(nodeName!="IMG" && nodeName!="img") {
   wv			= wtm((i!=0?previousSibling.nodeName:"null"),tagName);
   mt			= ((mt=parseInt(wv*Hsum/wc))<0?0:mt);
   style.marginTop	= mt+"px";
   if(display.fixhead) if(i==0 && (/h2/i.test(nodeName) || /h1/i.test(nodeName))) 
    style.marginTop = "5%";
   wv			= wtm(tagName,(i!=ip.childNodes.length-1?nextSibling.tagName:"null"));
   mt			= ((mt=parseInt(wv*Hsum/wc))<0?0:mt);
   style.marginBottom	= mt+"px";
   style.visibility	= "visible";
  }
  if(i) ip.childNodes[i-1].style.marginBottom = "0";
  for(i=0;i<ip.childNodes.length;i++) ip.childNodes[i].style.visibility= "visible";
  this.format		= 1;
 },
 keyhandler		: function(c) {
  with(pages){ if(c>=48 && c<=57){
   input += (input==""&&c==48?"":""+(c-48)); 
   if(input!="") pages.ppage.childNodes[0].nodeValue = input + " . ";
   return;
  }
  switch(c) {
   case 13: case 32: if(input) open(parseInt(input)-1); input=""; break;
   case 27: if(input) { input=""; pages.ppage.childNodes[0].nodeValue=(pages.index+1)+" / "+pages.item.length; return 1; } break;
   case 40:case 39: open(index+1); break;
   case 38:case 37: open(index-1); break;
   case 33: open(index-5); break;
   case 34: open(index+5); break;
   case 35: open(item.length); break;
   case 36: open(0); break;
   case 192: case 96: open(oindex); break;
  }}
 },
 __hidepage		: function() {
  if(pages.oindex!=pages.index && pages.item[pages.oindex]) with(pages.item[pages.oindex].node) { 
   style.display	= "none";
   style.visibility	= "hidden";
   for(var i=0;i<childNodes[0].childNodes.length;i++)
    childNodes[0].childNodes[i].style.visibility = "hidden";
   pages.item[pages.oindex].onevent("hide");
  }
 },
 open			: function(page, force) {
  if(page<0) page=0; if(page>=this.item.length) page=this.item.length-1; 
  if(page==this.index && !force) { if(pages.input) 
   this.ppage.childNodes[0].nodeValue = (this.index+1)+" / "+this.item.length;
   return;
  } 
  this.oindex		= this.index;
  this.index		= page;
  if(display.fixblink) this.__hidepage(); else setTimeout(pages.__hidepage,10);
  with(this.item[this.index]) {
   node.style.display	= "block";
   node.style.visibility= "visible";
   if(!format) onevent("format");
   else for(var i=0;i<node.childNodes[0].childNodes.length;i++)
    node.childNodes[0].childNodes[i].style.visibility = "visible";
   onevent("show");
  } cookie.set("page",page,null);
  this.onevent("change",page);
  pages.ppage.childNodes[0].nodeValue = (this.index+1)+" / "+this.item.length;
  pages.indexbox.value	= page;
 },
 page			: function(nnode) {
  var that		= this;
  var header		= null;
  this.event		= new Array();
  this.addhandler	= generic.addhandler;
  this.onevent		= generic.onevent;
  this.format		= 0;
  this.ievent		= 0;
  this.figs		= null;
  this.node		= document.createElement("div");
  pages.container.appendChild(this.node);
  var islide		= document.createElement("div");
  islide.className	= "islide";
  this.node.appendChild(islide);
  islide.appendChild(nnode);
  with(this.node) {
   className		= "slide";
   id			= "page"+(pages.item.length+1);
   style.display	= "none";
  } this.node.onclick	= function(eve) { that.onevent("click",eve?eve:event); };
  nnode.className	= "ipage";
  if((header=nnode.getElementsByTagName("h1")).length==0)
  if((header=nnode.getElementsByTagName("h2")).length==0)
      header=nnode.getElementsByTagName("h3");
  if(header.length==0 || !header[0].childNodes.length) this.title="- untitled -";
  else this.title=header[0].childNodes[0].nodeValue;
  for(var i=nnode.childNodes.length-1;i>=0;i--) with(nnode) {
   if(childNodes[i].nodeName=="#text") { if(!/^ *\r?\n$/.test(childNodes[i].nodeValue)) {
    var snode		= document.createElement("div");
    snode.appendChild(document.createTextNode(childNodes[i].nodeValue));
    insertBefore(snode, childNodes[i]);
    removeChild(childNodes[i+1]);
   } else { removeChild(childNodes[i]); continue; }}
   with(childNodes[i].style) visibility="hidden", display="block", overflow="visible";
  } this.addhandler("format", pages.formatter);
 }
};

/* TKSLIDE v4 style.js 2006/03/25 */

var styles	= {
 index		: -1,
 print		: false,
 item		: new Array(),
 init		: function() {
  var meta	= document.getElementsByTagName("meta");
  for(var i=0;i<meta.length;i++) if(meta[i].name=="style") 
   this.item.push(new styles.style(meta[i]));
  if(this.item.length)
   this.open(parseInt(cookie.get("style",(this.index==-1?0:this.index))));
  keylistener.addhandler(this.keyhandler);
 },
 keyhandler	: function(c) {
  switch(c) {
   case 65:case 83: styles.open(styles.index+(c==65?-1:1)); break;
   case 80: 
    var pos,dis,vis,hei;
    pages.ppage.style.display="none";
    if(!(styles.print=!styles.print))
     pos = "absolute", dis="none", vis="hidden",hei="100%",body.scroll="no",body.scrollTop=0;
    else pos="static", dis="block",vis="visible",hei="auto",body.scroll="yes";
    if(styles.print) for(var i=0;i<pages.item.length;i++) {
     pages.item[i].node.style.width="26.0cm";
     pages.item[i].node.style.height="18.4cm";
     pages.item[i].onevent("format");
    }
    body.style.position		= pos;
    body.style.background	= (styles.print?"#fff":"");
    pages.container.style.position= pos;
    pages.container.style.overflow="visible";
    for(var i=0;i<pages.item.length;i++) with(pages.item[i].node.style) {
     position=pos; display=dis; visibility=vis; 
     if(!styles.print) width="100%";height=hei;
     pages.item[i].node.childNodes[0].style.position=pos;
     for(var j=0;j<pages.item[i].node.childNodes[0].childNodes.length;j++) 
     with(pages.item[i].node.childNodes[0].childNodes[j].style) visibility=vis;
    }
    with(document) 
     onselectstart = onmousedown = (styles.print?null:function(){return false;});
    if(!styles.print) { 
     pages.ppage.style.display="block";
     pages.open(pages.index, true);
     window.onresize();
    } break;
  } if(styles.print) return 1;
 },
 open		: function(style) {
  if(!this.item.length) return;
  if(style<0) style			= this.item.length-1;
  if(style>=this.item.length) style	= 0;
  if(this.index>=0 && this.index<this.item.length) with(this.item[this.index]) {
   head.removeChild(node(1)); 
   onevent("hide");
  }
  with(this.item[(this.index=style)]) {
   head.appendChild(node(0));
   onevent("show");
  } cookie.set("style", this.index);
 },
 style		: function(node) {
  this.src		= node.content;
  this.event		= new Array();
  this.addhandler	= generic.addhandler;
  this.onevent		= generic.onevent;
  this.onode		= null;
  this.node		= function(v) {
   if(v) { if(typeof(_destroy)!="undefined") _destroy(); _destroy=undefined; return this.onode; }
   if(/\.js$/.test(this.src)) {
    var node		= document.createElement("script");
    with(node) {
     type		= "text/javascript";
     src		= this.src;
    } this.onode	= node;
   } else {
    var node		= document.createElement("link");
    with(node) {
     rel		= "stylesheet";
     type		= "text/css";
     href		= this.src;
    } this.onode	= node;
   }
   return node;
  };
 }
};
/* TKSLIDE v4 load.js 2006/05/08 */

var body		= null;
var head		= null;

window.onload		= function() {
 var t1,t2;
 t1 = new Date();
 body			= document.body;
 head			= document.getElementsByTagName("head")[0];
 body.scroll		= "no";
 document.onkeydown	= keylistener.dhandler;
 document.onmousemove	= function(eve) {
  var e			= (eve?eve:event);
  if(typeof(control)!="undefined" &&
     e.clientX-document.body.offsetWidth>-30 &&
     e.clientY-document.body.offsetHeight>-30) control.display(true);
 };
 window.onresize	= resizelistener.dhandler;
 with(document) onselectstart = onmousedown = function(){return false};
 styles.init();
 pages.init();
 control.init();
 display.init();
 config.init();
 initializer.init();
 pages.container.onclick= clicklistener.dhandler;
 t2 = new Date();
 t2.getTime()-t1.getTime();
};
