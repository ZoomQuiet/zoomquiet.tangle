import sys
"""
This is a test module
"""

print sys.version


def fact(n):
    """
    This function gives factorial.
    """
    if n == 1:
        return 1
    else:
        return n * fact(n-1)

class Person:
    
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def speak(self):
        print 'My name is %s, my age is %s' % (self.name, self.age)

class Logger:
    def log(self, s):
        f = open('log.txt', 'a+').write(s)
        print 'This will log in a file:', s
        f.close()

def qsort(lis):
    h = lis[0]
    l = qsort([i for i in lis[1:] if i < h])
    r = qsort([i for i in lis[1:] if i > h])
    l.append(h)
    l.extend(r)
    return l


