#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import re

VERSION = "takahashi4xul2s5.py v12.05.4"
TPLS5PAGE = '''

%(title)s
==============================================================================

.. container:: handout

    - %(topic)s

.. class:: takahashi
    
    %(content)s    


.. container:: notes

    - %(note)s

'''


def chk2s5(file):
    s5 = []
    page = {}
    for l in open(file):
        #l = l.replace("\r\n","")
        if "----" in l:
            s5.append(page)
            page = {}
        else:
            #print l
            if "HEADER::" in l:
                if "-http://" in l:
                    l = rst4link(l)
                if "[[IMG" in l:
                    l = rst4img(l)
                if "[[EM:" in l:
                    l = rst4em(l)
                page["HEADER"] = l[8:]
            elif "FOOTER::" in l:
                if "-http://" in l:
                    l = rst4link(l)
                if "[[IMG" in l:
                    l = rst4img(l)
                if "[[EM:" in l:
                    l = rst4em(l)
                page["FOOTER"] = l[8:]
            elif "ALIGN::" in l:
                pass
            elif "CHAPTER::" in l:
                page["CHAPTER"] = l[9:]
            else:
                if "-http://" in l:
                    l = rst4link(l)
                if "[[IMG" in l:
                    l = rst4img(l)
                if "[[EM:" in l:
                    l = rst4em(l)

                if not page.has_key("CONTENT"):
                    page["CONTENT"] = ""
                #print(type(page["FOOTER"]))
                page["CONTENT"] += l.replace("*"," - ")

    print "xul2s5 PAGES:\t", len(s5)
    print "xul2s5 IMAGE:\t", len(ALLIMG.keys())
    #TPLS5PAGE
    exp = ""
    tpl = ".. |%s| image:: i/%s \n"
    for i in ALLIMG:
        exp += tpl%(i, ALLIMG[i])
    for p in s5:
        if p.has_key("CONTENT"):
            content = p["CONTENT"].replace("\r\n","")
        else:
            content = "..."
        if p.has_key("HEADER"):
            title = p["HEADER"].replace("\r\n","")
            if 40<len(title):
                if p.has_key("CHAPTER"):
                    p["CHAPTER"] += "\n    - %s"%title
                else:
                    p["CHAPTER"] = "\n    - %s"%title
                title = "嗯嗯嗯"

        else:
            title = "嗯嗯嗯"
        if p.has_key("FOOTER"):
            topic = p["FOOTER"].replace("\r\n","")
        else:
            topic = ""
        if p.has_key("CHAPTER"):
            note = p["CHAPTER"].replace("*"," ")
        else:
            note = ""
        #print TPLS5PAGE%locals()
        exp += TPLS5PAGE%locals()
    #print exp
    open("%s.rst"%file,"w").write(exp)


ALLIMG = {}
def rst4img(xul):
    '''[[IMG src="images/wedding.png" width="96" height="96"]]
    .. image:: i/forgelogo.jpg
        :align: center
    '''
    tpl = ".. |%s| image:: i/%s"

    p = re.compile('\[\[IMG ')
    p2 = re.compile(' height=\"\d+\"\]\]')
    p3 = re.compile(' width=\"\d+\" ')
    p4 = re.compile(' src=\S{1,} ')

    def reimg(match):
        path = match.group().split("=")[-1][2:-2]
        pic = path.split("/")[-1]
        picid = pic.split(".")[0]
        #print picname
        if picid not in ALLIMG:
            ALLIMG[picid] = pic
        return " |%s| "%picid

    xul = p.sub(" ", xul)
    xul = p2.sub(" ", xul)
    xul = p3.sub(" ", xul)
    xul = p4.sub(reimg, xul)
    #m = p4.match(xul)
    #print m.groups()
    #xul = p4.sub(" ", xul)
    #print xul
    return xul

def rst4link(xul):
    '''-洋蔥酷樂部-http://blog.roodo.com/onion_club
    `林誠夏 <http://www.openfoundry.org/tw/activities/details/4>`_
    '''
    s = xul.split("-")
    tpl = "%s `%s <%s>`_ "
    #print s[-1]
    #print tpl%("".join(s[:-2]), s[-2], s[-1])
    return tpl%("".join(s[:-2]), s[-2], s[-1])

def rst4em(xul):
    '''[[EM:不動產]]
    :orange:`???`
    '''
    tpl = " :orange:`%s` "

    p = re.compile('\[\[EM:\S{1,}\]\]')
    def reem(match):
        return  tpl%match.group()[5:-2]
    #print p.sub(reem,xul)
    return p.sub(reem,xul)

if __name__ == '__main__':      # this way the module can be
    if 2 != len(sys.argv):
        print '''%s ~ 快速 s5 转换脚本; 
        usage::
$ takahashi4xul2s5.py path/2/takahashi.txt
        '''% VERSION
    else:
        takahashi = sys.argv[1] #"napkin"
        #print takahashi
        chk2s5(takahashi)
