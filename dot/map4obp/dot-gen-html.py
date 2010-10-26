#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''dot-gen-html.py
    - 9.11.29 for obp.zoomquiet.org 兼容目录根
    - 9.11.03 for 兼容 KUP++ 主机拓扑
    - 9.05.16 for kup.s.kingsoft.net/map as root
    - 9.04.21 for deep dir gen html
    - 9.03.12 for KUP.rdev dot mapping gen html
usage:
$ python dot-gen-html.py kupmapidx.dot index.htm
'''
import os,sys,time
from subprocess import Popen

VERSION = "dot-gen-html v9.11.29"
GENTIME = time.strftime("%Y-%m-%d %H:%M:%S",time.localtime())
#TPL = "res/index.tpl"
DODOT = "dot %s.dot -Tpng -o %s.png -Tcmapx -o %s.map"
DOFDP = "fdp %s.dot -Tpng -o %s.png -Tcmapx -o %s.map"
#FOOTCSS="css/stickyfooter/footer.css"
ROOTURL="/map/"  #/map/

def gen(dotis,tplf,dotf,mapname,wxpf):
    """usage dot exp png+img map,auto usage html tpl writ out idenx page!
    """
    if "dot" in dotis:
        runtpl = DODOT
    else:
        runtpl = DOFDP
    script = VERSION
    gentime = GENTIME
    TPL = tplf
    dotmap = dotf.split(".")[0]
    #mapname = dotmap.split("/")[-1]
    #print dotmap
    #css = open(FOOTCSS).read()
    genmap = runtpl%(dotmap,dotmap,dotmap)
    expath = os.path.dirname(wxpf)
    #r, w, e = popen2.popen3(genmap)
    p = Popen(genmap, shell=True, close_fds=True)
    (r, w, e) = (p.stdin, p.stdout, p.stderr)
    #print e.readlines()
    print e
    print r
    #r.close()
    #e.close()
    #w.close()
    time.sleep(1)
    cmapx = open("%s.map"%dotmap).read()#.decode('utf8')
    #dotmap = dotmap
    urlroot = ROOTURL
    #.encode('unicode_escape').decode('string_escape')
    #print cmapx
    #print wxpf
    #print open(TPL).read() % locals()
    open(wxpf,"w").write(open(TPL).read() % locals())
    print "%s done gen mapping @%s"%(VERSION,GENTIME)

if __name__ == '__main__':      # this way the module can be
    if 6 != len(sys.argv):
        print """ %s usage::
$ dot-gen-html.py dot|fdp 'path/to/u.tpl' 'path/2/u.dot' "MapName" exPageNam[like index.html)
        """%VERSION
    else:
        dotis = sys.argv[1]
        tplf = sys.argv[2]
        dotf = sys.argv[3]
        mapname = sys.argv[4]
        expf = sys.argv[5]
        #mapn = dotf.split(".")[0]
        #print dir()
        gen(dotis,tplf,dotf,mapname,expf)
    #open(exrep,"w").write(open(tpl).read() % locals())
    





