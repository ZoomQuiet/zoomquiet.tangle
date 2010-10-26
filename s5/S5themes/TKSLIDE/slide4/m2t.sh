#!/usr/local/bin/bash

echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>
<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\">
<head profile=\"http://www.w3.org/2000/08/w3c-synd/#\">
 <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8;\"/>
 <link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"user.css\"/>
 <link rel=\"stylesheet\" type=\"text/css\" media=\"print\" href=\"print.css\"/>
 <title></title>
 <script type=\"text/javascript\" src=\"slide.js\"></script>
</head>
<body>";

markdown.pl $1

echo "
</body>
</html>";
