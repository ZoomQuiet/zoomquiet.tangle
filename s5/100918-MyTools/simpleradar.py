#!/usr/bin/env python
# -*- coding: utf-8 -*-
#from pychartdir import *
from ChartDirector.pychartdir import *
import sys
CFONT = "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc"
#CFONT = "/usr/share/fonts/truetype/VeraSansYuanTi/VeraSansYuanTiMono-Regular.ttf"
if __name__ == '__main__':      # this way the module can be
    print sys.argv
    if 3!= len(sys.argv):
        print """usage::
$python simpleradar.py [1,2,3,4,5] demo.png
                        | | | | |   +-- 输出图片文件名
                        | | | | +-- 社区活跃度     
                        | | | +-- 扩展能力   
                        | | +-- CLI控制力
                        | +-- 易用度
                        +-- 专注度 
        """
    else:
        # The data for the chart
        data = eval(sys.argv[1])
        #[4, 3, 3, 1, 5]

        # The labels for the chart
        labels = ["专注","易用", "CLI", "扩展","社区"]

        # Create a PolarChart object of size 450 x 350 pixels
        c = PolarChart(200, 180,'0x333333')
        #c = PolarChart(600, 500,'0x333333')
        # Set center of plot area at (225, 185) with radius 150 pixels
        c.setPlotArea(100, 90, 58,'0xffffff')
        #c.setPlotArea(295, 265, 200,'0xffffff')        
        #c.setPlotAreaBg('0xffffff', '0xeeeeee')
        #c.radialAxis().addZone(1, 2, '0x99ff99')
        #c.radialAxis().setTickDensity(12)
        # Use 1 pixel width semi-transparent black (c0000000) lines as grid lines
        c.setGridColor('0xc0000000', 2, '0xc0000000', 1)

        c.angularAxis().addZone(4.7, 5.3, '0xFF94AB')
        c.angularAxis().addZone(0.7, 1.3, '0xD0E7B1')
        c.angularAxis().addZone(1.7, 2.3, '0xE3B6EC')
        c.angularAxis().addZone(2.7, 3.3, '0x007cdc')
        c.angularAxis().addZone(3.7, 4.3, '0xd1d2d4')

        #c.setGridStyle(0)
        # Add an area layer to the polar chart
        #c.addAreaLayer(data, '0x9999ff')
        c.addSplineAreaLayer(data, '0x33ff33')

        # Set the labels to the angular axis as spokes
        #c.angularAxis().setLabels(labels)
        c.angularAxis().setLabels(labels).setFontStyle(CFONT)
        c.angularAxis().setLabels(labels).setFontColor('0xffffff')
        c.angularAxis().setLabels(labels).setFontSize(11)
        # Just show the radial axis as a grid line. Hide the axis labels by setting the label
        # color to Transparent
        #c.radialAxis().setLabelStyle().setBackground(goldColor(), 0)
        #c.radialAxis().setLabelStyle().setFontSize(14)
        c.radialAxis().setColors('0xc0000000', Transparent)
        
        # Output the chart
        c.makeChart(sys.argv[2]) #"simpleradar.png"

