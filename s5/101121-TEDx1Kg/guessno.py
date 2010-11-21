# -*- coding: utf-8 -*-
from random import uniform

myNumber = int(uniform(2,99))
noGuess = 1
while noGuess:
    urNumber = int(raw_input('猜个1~99的数字? --> '))
    if urNumber < myNumber:
        print "...(~_~)小了"
    elif urNumber > myNumber:
        print "......大了(^_-"
    else:
        print "猜对了\(^o^)/下次再来玩!"
        break
