# -*- coding: utf-8 -*-
tg=("甲","乙","丙","丁","戊","己","庚","辛","壬","葵")
dz=("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥")
tgloop = 0
dzloop = 0
count = 1
while 1:
    print tg[tgloop]+dz[dzloop],count
    if count == 60: break
    else: count +=1
    if tgloop == 9: tgloop = 0
    else: tgloop +=1
    if dzloop == 11: dzloop = 0
    else: dzloop +=1

