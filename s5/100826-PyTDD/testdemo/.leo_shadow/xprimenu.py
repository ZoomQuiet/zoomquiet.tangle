#@+leo-ver=4-thin
#@+node:zoomq.20100825215032.8066:@shadow primenu.py
#@@language python
#@@tabwidth -4
# -*- coding: utf-8 -*-
'''素数相关模块
'''
#@+others
#@+node:zoomq.20100825215032.8145:defines
import sys
#@nonl
#@-node:zoomq.20100825215032.8145:defines
#@+node:zoomq.20100825215032.8067:测素数
def chkPrime(N):
    '''判定是否素数
    >>> chkPrime(5)
    True
    >>> chkPrime(4)
    False
    '''
    return 0 not in [N%d for d in range(2,N)]
#@-node:zoomq.20100825215032.8067:测素数
#@+node:zoomq.20100826101657.6540:找素数
def foundPrime(N):
    '''
    #   找出所有素数
    >>> foundPrime(10)
    [2, 3, 5, 7]
    '''
    return [P for P in range(2,N) if chkPrime(P)]
#@-node:zoomq.20100826101657.6540:找素数
#@-others
if __name__ == '__main__':      # this way the module can be
    import doctest
    doctest.testmod()
#@-node:zoomq.20100825215032.8066:@shadow primenu.py
#@-leo
