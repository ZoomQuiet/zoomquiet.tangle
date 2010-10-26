# -*- coding: utf-8 -*-
'''素数相关模块
'''
import sys
def chkPrime(N):
    '''判定是否素数
    >>> chkPrime(5)
    True
    >>> chkPrime(4)
    False
    '''
    return 0 not in [N%d for d in range(2,N)]
def foundPrime(N):
    '''
    #   找出所有素数
    >>> foundPrime(10)
    [2, 3, 5, 7]
    '''
    return [P for P in range(2,N) if chkPrime(P)]
if __name__ == '__main__':      # this way the module can be
    import doctest
    doctest.testmod()
