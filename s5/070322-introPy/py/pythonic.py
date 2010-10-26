# coding : utf-8
''' prime = sieve [2..]         ---改进后的素数数列 
  sieve (x:xs) = x : sieve (filter (\y ->y `rem` x /= 0) xs) 
'''
#想将数组中大于某个数值的数选出来构成一个新的数列
li = range(3)
import random
random.shuffle(li)
[item for item in li if item > 3.5 ] #(注：source是一个List)

###############  数据类型
素数计算
http://aspn.activestate.com/ASPN/Cookbook/Python/Recipe/162479

N = 40
[p for p in range(2,N) if 0 not in [p%d for d in range(2,p)]]

- replace 'range(2,p)' by 'range(2,p/2+1)',
- replace 'range(2,p)' by 'int(sqrt(p))+1)' (sqrt is imported from the math module),
- replace 'range(...)' by 'xrange(...)', in both places.


from math import sqrt
N = 100
[ p for p in   range(2, N) if 0 not in [ p% d for d in range(2, int(sqrt(p))+1)] ]
^ ^  ^     ^               ^    ^      ^  ^              ^            ^      ^
| |  |     |               |    |      |  |              |            |      +- 弥补
| |  |     |               |    |      |  |              |            +- 通过平方精简尝试
| |  |     |               |    |      |  |              +- 组织所有 2~p 之间可能为公因子的数列
| |  |     |               |    |      |  +- 求余,尝试整除
| |  |     |               |    |      +- 列表运算,直接将以上计算结果组成数组 返回 
| |  |     |               |    +- 余数0 不在求余结果列表中
| |  |     |               +- 即2~p 都不能整除 p 的p
| |  |     +- 提取运算
| |  +- for..in 循环取数,从2~p 的连续数组中
| +- 素数!
+- 列表计算组织所有结果为数组返回!



就是判断是否有 2-p 之间的数可以整除 p ，如果有的话， 后面的列表中就会有一个余数为0，   所以要没有 0 存在才能判定为没有可整除他的（也就是素数）

###############  自省！
在一个函数中如何知道调用者（Python）

def fun():pass

这个函数如何知道是谁调用了它呢？  在C类语言中好像是很难的。但在 Python中却很简单

import traceback

def fun():
      s =  traceback.extract_stack()
      print '%s Invoked me!'%s[-2][2]

这个 fun 函数就可以知道是谁调用了它，并打印出来， 我们来试一下：
 

>>> def a():fun()

>>> def b():fun()

>>> a()
a Invoked me!
>>> b()
b Invoked me!
>>>

ok! 怎么应用这个特性呢？ 发挥各位的想象力了。

MixIn 技术  （感谢 limdou 的介绍）

def MixIn(pyClass, mixInClass):
    print "Mix class:",mixInClass, " into: ",pyClass,'\n'
    pyClass.__bases__ += (mixInClass,)

class A:
    def __init__(self):
        self.name = "Class A"
    def fun(self):
        print self.name

class B:
    def __init__(self):
        self.name = "Class B"
    def add(self, a,b):
        print 'function defined in B'
        return a + b

obj_a = A()

print obj_a
print dir(obj_a),'\n'

MixIn(A,B)

print obj_a
print dir(obj_a),'\n'

print obj_a.add(3,5)


-----------------------------------------〉
执行结果：

>>>
<__main__.A instance at 0x00BB7F80>
['__doc__', '__init__', '__module__', 'fun', 'name']

Mix class: __main__.B  into:  __main__.A

<__main__.A instance at 0x00BB7F80>
['__doc__', '__init__', '__module__', 'add', 'fun', 'name']

function defined in B
8

解释一下 MixIn 技术，就是使 一个类成为另一个类的基类， 这样会使 被 MixIn 的那个类具有了新的特性。
在例子程序中， 我们将 B 类 MixIn 进 A 类， 成为 A 的基类，于是， A 类的实例便具有了 B 类的方法（add)


obj_a = A()                  obj_a  是 类 A  的一个实例

print obj_a                <__main__.A instance at 0x00BB7F80>
print dir(obj_a),'\n'      ['__doc__', '__init__', '__module__', 'fun', 'name'] 

MixIn(A,B)                将B MixIn 进 A

print obj_a             <__main__.A instance at 0x00BB7F80>

print dir(obj_a),'\n'    ['__doc__', '__init__', '__module__', 'add', 'fun', 'name'] 
注意，这时候，多了一个 add 方法（类B 中定义）

print obj_a.add(3,5)        现在 A 的实例可以使用 B 中的方法了
