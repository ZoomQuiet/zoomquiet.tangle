var source	= "";
var sourcebk	= document.getElementById("x");
if(sourcebk) {
sourcebk.style.display="none";

for(var i=0;i<sourcebk.childNodes.length;i++) {
 source		= source + (sourcebk.childNodes[i].nodeValue?sourcebk.childNodes[i].nodeValue:"");
}

// Now, We have *source* as input //

// Currently js-Markdown only works on Firefox. Thus I'll not test other platform//
result	= Markdown(source);

document.open();
document.write("<html><head>");
document.write(" <link rel='stylesheet' type='text/css' media='all' href='user.css'/>");
document.write(" <link rel='stylesheet' type='text/css' media='print' href='print.css'/>");
document.write(" <script type='text/javascript' src='slide.js'></script>");
document.write("</head><body>");
document.write(result);
document.write("<script type='text/javascript' style='display:none'>");
document.write("window.onload();</script>");
document.write("</body></html>");
document.close();
}
