# -*- coding: utf-8 -*-
天干 = ("甲","乙","丙","丁","戊","己","庚","辛","壬","葵")
地支 = ("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥")
天干步进 = 0
地支步进 = 0
总数 = 1
没列完 = 真
当 没列完:
    打印 天干[天干步进]+地支[地支步进],总数
    如果 总数 == 60: 中断
    否则: 总数 +=1
    如果 天干步进 == 9: 天干步进 = 0
    否则: 天干步进 += 1
    如果 地支步进 == 11: 地支步进 = 0
    否则: 地支步进 += 1
