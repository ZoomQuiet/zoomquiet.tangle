# translated by: albertlee

from ctypes import *
import httplib

GOOGLE_MAGIC = 0xE6359A60
def zeroFill(a, b):        
    z = 0x80000000
    if z & a:
        a = a >> 1
        a &= ~z
        a |= 0x40000000
        a = a >> (b - 1)

    else:
        a = a >> b
            
    return a

def c32to8bit(arr32):      
    arr8 = [0] * (len(arr32) * 4 + 3)
    for i in range(len(arr32)):
        for bitOrder in range(i * 4, i * 4 + 4):
            arr8[bitOrder] = c_uint(arr32[i].value & 255)
            arr32[i] = c_uint(zeroFill(arr32[i].value, 8))
    return arr8

def mix(a,b,c):                     
    a = c_uint(a.value - b.value)
    a = c_uint(a.value - c.value)
    a = c_uint(a.value ^ zeroFill(c.value, 13))
    b = c_uint(b.value - c.value)
    b = c_uint(b.value - a.value)
    b = c_uint(b.value ^ (a.value << 8))
    c = c_uint(c.value - a.value)
    c = c_uint(c.value - b.value)
    c = c_uint(c.value ^ zeroFill(b.value, 13))
    a = c_uint(a.value - b.value)
    a = c_uint(a.value - c.value)
    a = c_uint(a.value ^ zeroFill(c.value, 12))
    b = c_uint(b.value - c.value)
    b = c_uint(b.value - a.value)
    b = c_uint(b.value ^ (a.value << 16))
    c = c_uint(c.value - a.value)
    c = c_uint(c.value - b.value)
    c = c_uint(c.value ^ zeroFill(b.value, 5))
    a = c_uint(a.value - b.value)
    a = c_uint(a.value - c.value)
    a = c_uint(a.value ^ zeroFill(c.value, 3))
    b = c_uint(b.value - c.value)
    b = c_uint(b.value - a.value)
    b = c_uint(b.value ^ (a.value << 10))
    c = c_uint(c.value - a.value)
    c = c_uint(c.value - b.value)
    c = c_uint(c.value ^ zeroFill(b.value, 15))

    return a, b, c

        
def GoogleCH(url, length, init):  
    if length == 0:
        length = len(url)

    a = c_uint(0x9E3779B9)
    b = c_uint(0x9E3779B9)
    c = c_uint(init)
    k = 0
    
    len2 = length
    while (len2 >= 12):
        a = c_uint(a.value + url[k + 0] + (url[k + 1] << 8) + (url[k + 2] << 16) + (url[k + 3] << 24))
        b = c_uint(b.value + url[k + 4] + (url[k + 5] << 8) + (url[k + 6] << 16) + (url[k + 7] << 24))
        c = c_uint(c.value + url[k + 8] + (url[k + 9] << 8) + (url[k + 10] << 16) + (url[k + 11] << 24))
        a, b, c = mix(a, b, c)
        k += 12
        len2 -= 12

    c = c_uint(c.value + length)   # ok
    
    if len2 == 11:
        c = c_uint(c.value + (url[k + 10] << 24))
        c = c_uint(c.value + (url[k + 9] << 16))
        c = c_uint(c.value + (url[k + 8] << 8))
        b = c_uint(b.value + (url[k + 7] << 24))
        b = c_uint(b.value + (url[k + 6] << 16))
        b = c_uint(b.value + (url[k + 5] << 8))
        b = c_uint(b.value + (url[k + 4]))
        a = c_uint(a.value + (url[k + 3] << 24))
        a = c_uint(a.value + (url[k + 2] << 16))
        a = c_uint(a.value + (url[k + 1] << 8))
        a = c_uint(a.value + (url[k + 0]))
    elif len2 == 10:
        c  = c_uint(c.value +  (url[k + 9] << 16))
        c  = c_uint(c.value +  (url[k + 8] << 8))
        b  = c_uint(b.value +  (url[k + 7] << 24))
        b  = c_uint(b.value +  (url[k + 6] << 16))
        b  = c_uint(b.value +  (url[k + 5] << 8))
        b  = c_uint(b.value +  (url[k + 4]))
        a  = c_uint(a.value +  (url[k + 3] << 24))
        a  = c_uint(a.value +  (url[k + 2] << 16))
        a  = c_uint(a.value +  (url[k + 1] << 8))
        a  = c_uint(a.value +  (url[k + 0]))
    elif len2 == 9:
        c = c_uint(c.value +  (url[k + 8] << 8))
        b = c_uint(b.value +  (url[k + 7] << 24))
        b = c_uint(b.value +  (url[k + 6] << 16))
        b = c_uint(b.value +  (url[k + 5] << 8))
        b = c_uint(b.value +  (url[k + 4]))
        a = c_uint(a.value +  (url[k + 3] << 24))
        a = c_uint(a.value +  (url[k + 2] << 16))
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
    elif len2 == 8:
        b = c_uint(b.value +  (url[k + 7] << 24))
        b = c_uint(b.value +  (url[k + 6] << 16))
        b = c_uint(b.value +  (url[k + 5] << 8))
        b = c_uint(b.value +  (url[k + 4]))
        a = c_uint(a.value +  (url[k + 3] << 24))
        a = c_uint(a.value +  (url[k + 2] << 16))
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
    elif len2 == 7:
        b = c_uint(b.value +  (url[k + 6] << 16))
        b = c_uint(b.value +  (url[k + 5] << 8))
        b = c_uint(b.value +  (url[k + 4]))
        a = c_uint(a.value +  (url[k + 3] << 24))
        a = c_uint(a.value +  (url[k + 2] << 16))
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
    elif len2 == 6:
        b = c_uint(b.value +  (url[k + 5] << 8))
        b = c_uint(b.value +  (url[k + 4]))
        a = c_uint(a.value +  (url[k + 3] << 24))
        a = c_uint(a.value +  (url[k + 2] << 16))
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
    elif len2 == 5:
        b = c_uint(b.value +  (url[k + 4]))
        a = c_uint(a.value +  (url[k + 3] << 24))
        a = c_uint(a.value +  (url[k + 2] << 16))
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
    elif len2 == 4:
        a = c_uint(a.value +  (url[k + 3] << 24))
        a = c_uint(a.value +  (url[k + 2] << 16))
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
    elif len2 == 3:
        a = c_uint(a.value +  (url[k + 2] << 16))
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
            
    elif len2 == 2:
        a = c_uint(a.value +  (url[k + 1] << 8))
        a = c_uint(a.value +  (url[k + 0]))
    elif len2 == 1:
        a = c_uint(a.value +  (url[k + 0]))

    ret = mix(a, b, c)[2]
    return ret


def CaculateChecksum(sURL):
    url = "info:" + sURL
    m_urluint = [0] * len(url)
    for i in range(len(url)):
        m_urluint[i] = ord(url[i])
    
    ch = GoogleCH(m_urluint, 0, GOOGLE_MAGIC)

    ch = c_uint(((ch.value / 7) << 2) | ((ch.value % 13) & 7))
    prbuf = [ch]
    for i in range(1, 20):
        prbuf.append(c_uint(prbuf[i-1].value-9))           
    
    _prbuf = c32to8bit(prbuf)
    buf = [i.value for i in _prbuf[:80]]
    ch = GoogleCH(buf, 80, GOOGLE_MAGIC)                
        
    return '6' + str(ch.value)

def getPRurl(url):    
    return "http://www.google.cn" + getPRuri(url) 
    
def getPRuri(url):
    sum = CaculateChecksum(url)
    url = "/search?client=navclient-auto&features=Rank:&q=info:%s&ch=%s" % (url, sum)
    return url

#print CaculateChecksum("http://www.google.com/")    # "6828860321"
#print CaculateChecksum("http://www.kingsoft.com/")  # "62991403292"

#print getPRurl('http://www.kingsoft.com/')
# http://www.google.cn/search?client=navclient-auto&features=Rank:&q=info:...

def querypr(site_url):
    uri = getPRuri(site_url)
    conn = httplib.HTTPConnection("www.google.cn")
    conn.request("GET", uri)
    r1 = conn.getresponse()
    
    data1 = r1.read()
    conn.close()
    
    toks = data1.split(':')
    if len(toks) == 3:
        return toks[-1]
    else:
        return "err"
    
print 'www.kingsoft.com:',
print querypr("http://www.kingsoft.com")

print 'www.baidu.com:',
print querypr("http://www.baidu.com")

