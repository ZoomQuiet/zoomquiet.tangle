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
