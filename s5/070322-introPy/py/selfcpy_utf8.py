#--GBK--
正文 = "<h3>中蟒 参考手册(自省生成)</h3>"
正文 +="""<style>table{width : ;}
    ul{margin:0px;padding:0px;}
    li{background-color :#eee;font-size:92%;list-style-position : inside ;list-style-type : decimal;}
    p{font-size:80%;color:#fff;background-color :#454;margin:4px 0px;}
    </style>"""
正文 +="<table><tr>"
# 定义名为汇报() 的函式，自动收集模板信息，组织为页面记录下来
定义 汇报(名字,模块):
    正文 = "<td valign=top width=250>"
    正文 += "<ul>%s 含操作:</ul><ul>"""%(名字)
    表 = 内容(模块)
    写 变字串(模块),"\t 内置操作已经记录!"
    取 条目 自 表:
        正文 += "<li>%s"%(条目)
        说明 = "%s.%s.__说明__"%(名字,条目)
        试:
            正文 += "<p>%s</p>"%(推算(说明))
        失败:
            忽略
    正文 += "</ul></td>"
    传回 正文

正文+=汇报("__內建__ ", __內建__)
正文+=汇报("\'字串\'","字串")
正文+=汇报("['数组']", ['数组'])
正文+=汇报("{'字典':'值'}", {'字典':'值'})
正文+=汇报("('元组')", ('元组'))
载入 系统
正文+=汇报("系统", 系统)
#写 长度(正文)
正文+="</tr></table>"
打开("cpy-selfintro.html", 'w').输出(正文)
写 "\n中蟒自省说明汇报文件 `%s`己写入 %s 字节 \n\n" % ("cpy-selfintro.html",长度(正文))




#载入 异常
#正文+=自省汇报("异常", 异常, 'exception')
#正文+=汇报('档案', 打开('中蟒自省.py','r'), 'file')
#文件.关闭()
"""
操作字典 = []

如 名字 == '"__內建__"':      
        表 = [ 甲 取 甲 自 表 如 甲[-4:] != '异常' ] 

        #写 模块.条目
        试:
            #正文 += "<p>%s</p>"%(推算(说明))
            正文 += "<p>%s</p>"%(条目.__说明__)
        失败:
            忽略
"""

定义 遍历(模块):
    试:传回 操作字典.附加(内容(模块))
    失败:
        取 内含 自 模块:
            传回 遍历(内含)
        #操作.附加(内容(模块))
        #忽略

#操作字典 = 遍历("是也乎",操作字典)
#写 操作字典
    

    
