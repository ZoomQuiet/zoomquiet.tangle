<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
  <title>%(mapname)s {gen by %(script)s at %(gentime)s}</title>
<link rel="shortcut icon" href="%(urlroot)sres/kspeg-logo.ico" type="image/x-icon" />
<link rel="icon" href="%(urlroot)sres/kspeg-logo.ico" type="image/x-icon" />


<link rel="stylesheet" href="%(urlroot)scss/blueprint/screen.css" type="text/css" media="screen, projection">
<link rel="stylesheet" href="%(urlroot)scss/blueprint/print.css" type="text/css" media="print">    
<!--[if IE]><link rel="stylesheet" href="css/blueprint/ie.css" type="text/css" media="screen, projection"><![endif]-->

<style type="text/css">
/*img { border: 0;}
*/
#mapping {text-align:center;
    border: 1px solid #eee;
    }
#powerby { text-align:right; 
    border: 1px solid #eee;
    }
#blueprintbutton { float:left; margin-top:3px; margin-right:24px; vertical-align:middle; 
    }

/*usage http://www.cssstickyfooter.com/cn/using-sticky-footer-code.html 
zip hight 150->90px*/
html, body, #wrap {height: 100%%;}
body > #wrap {height: auto; min-height: 100%%;}
#main {padding-bottom: 90px;}  /* must be same height as the footer */
#footer {position: relative;
	margin-top: -90px; /* negative value of footer height */
	height: 90px;
	clear:both;
	} 
</style>

</head>
<div id="wrap">

<div id="main" class="clearfix">

<div id="mapping">

%(cmapx)s

<img src="%(urlroot)s%(dotmap)s.png" usemap="#mainmap"/>

</div><!-- class="container"-->

</div><!-- id="main" class="clearfix"-->
</div><!-- id="wrap"-->


<div id="footer">
<div class="container">
	<div class="last">
	<a href="http://blueprintcss.org/">
	<img id="blueprintbutton" src="%(urlroot)sres/button.png" width="80" height="15" alt="blueprintcss.org" /> 
	</a>
    <a href="http://validator.w3.org/check?uri=referer">
    <img id="blueprintbutton" src="%(urlroot)sres/valid.png" alt="Valid HTML 4.01 Strict" height="31" width="88" class="top">
    </a>
    <a href="http://code.google.com/p/openbookproject/">
    <img id="blueprintbutton" src="%(urlroot)sres/OpenBookProject-h90.png" alt="O.B.P" >
    </a>
    </div><!--class="column span-19 last"-->

<div id="powerby">
powered by:
<!--
<a href="http://www.freebsd.org/">FreeBSD</a>;
<a href="http://www.nginx.net/">nginx</a>;
<a href="http://haproxy.1wt.eu/">HAProxy</a>;
-->
<a href="http://www.python.org/">Python 2.6</a>;
<a href="http://www.graphviz.org/">Graphviz 2.20.2</a>;
<a href="http://sphinx.pocoo.org/">Sphinx 0.6.3</a>;
</div>
<!--<p class="bottom quiet" id="footer"></p>-->
    
</div><!-- class="container"-->
</div><!-- id="footer"-->


<body>

</body>
</html>







