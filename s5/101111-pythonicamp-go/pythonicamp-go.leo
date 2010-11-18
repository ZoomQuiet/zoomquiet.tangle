<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet ekr_stylesheet?>
<leo_file>
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="zoomq.20101116152553.7384"><vh>@chapters</vh></v>
<v t="zoomq.20101116152553.7459" a="E"><vh>101111-pythonicamp-go</vh>
<v t="zoomq.20101116152553.7460"><vh>@nosent index.rst</vh>
<v t="zoomq.20101116152553.7461"><vh>&lt;&lt;DOCDEFINE&gt;&gt;</vh></v>
<v t="zoomq.20101116152553.7462"><vh>&lt;&lt;footer&gt;&gt;</vh></v>
<v t="zoomq.20101116152553.7463"><vh>免责</vh>
<v t="zoomq.20101116152553.7498"><vh>&lt;&lt;S5&gt;&gt;</vh></v>
<v t="zoomq.20101116152553.7465"><vh>Takahashi</vh>
<v t="zoomq.20101116152553.7466"><vh>Takahashi</vh></v>
<v t="zoomq.20101116152553.7467"><vh>Takahashi</vh></v>
<v t="zoomq.20101116152553.7468"><vh>Takahashi</vh></v>
<v t="zoomq.20101116152553.7469"><vh>Takahashi</vh></v>
<v t="zoomq.20101116152553.7470"><vh>Takahashi</vh></v>
<v t="zoomq.20101116152553.7471"><vh>Takahashi</vh></v>
</v>
</v>
<v t="zoomq.20101116152553.7472"><vh>brief0</vh>
<v t="zoomq.20101116152553.7473"><vh>&lt;Goal&gt;</vh>
<v t="zoomq.20101116152553.7474"><vh>学生</vh></v>
<v t="zoomq.20101116152553.7475"><vh>学校</vh></v>
<v t="zoomq.20101116152553.7476"><vh>公司</vh></v>
<v t="zoomq.20101116152553.7477"><vh>社区</vh></v>
</v>
<v t="zoomq.20101116152553.7478"><vh>&lt;/Goal&gt;</vh></v>
</v>
<v t="zoomq.20101116152553.7479"><vh>brief1</vh>
<v t="zoomq.20101116152553.7480"><vh>&lt;Flow&gt;</vh>
<v t="zoomq.20101116152553.7481"><vh>0.</vh></v>
<v t="zoomq.20101116152553.7482"><vh>1.</vh></v>
<v t="zoomq.20101116152553.7483"><vh>2.</vh></v>
<v t="zoomq.20101116152553.7484"><vh>3.</vh></v>
<v t="zoomq.20101116152553.7485"><vh>end.</vh></v>
</v>
<v t="zoomq.20101116152553.7486"><vh>&lt;/Flow&gt;</vh></v>
</v>
<v t="zoomq.20101116152553.7487"><vh>brief2</vh>
<v t="zoomq.20101116152553.7488"><vh>突破</vh>
<v t="zoomq.20101116152553.7489"><vh>工具</vh></v>
<v t="zoomq.20101116152553.7490"><vh>沟通</vh></v>
<v t="zoomq.20101116152553.7491"><vh>版本</vh></v>
<v t="zoomq.20101116152553.7492"><vh>态度</vh></v>
<v t="zoomq.20101116152553.7493"><vh>时限</vh></v>
</v>
<v t="zoomq.20101116152553.7494"><vh>/突破</vh></v>
</v>
<v t="zoomq.20101116152553.7495"><vh>briefEND</vh>
<v t="zoomq.20101116152553.7496"><vh>&lt;/Flow&gt;</vh></v>
</v>
<v t="zoomq.20101116152553.7497"><vh>version</vh>
<v t="zoomq.20101116152553.7498"></v>
<v t="zoomq.20101116152553.7499"><vh>abt.ZQ</vh></v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="zoomq.20101116152553.7384"></t>
<t tx="zoomq.20101116152553.7459">#注意，使用@path 命令指向你的幻灯目录，
#如果部署在同一目录中就不用了
</t>
<t tx="zoomq.20101116152553.7460">@language rest
@tabwidth -4
.. include:: &lt;s5defs.txt&gt;

==================================================================
go!蟒营
==================================================================

～PythoniCamp 是什么和怎么玩

:作者: `Zoom.Quiet &lt;zoomquiet+sns@gmai.com&gt;`__
:URL:   http://zoomquiet.org/res/s5/101111-pythonicamp-go

&lt;&lt;DOCDEFINE&gt;&gt;

&lt;&lt;footer&gt;&gt;

@others

</t>
<t tx="zoomq.20101116152553.7461">.. This document has been placed in the CC domain.
.. _Docutils: http://docutils.sourceforge.net/
.. _reStructuredText: http://docutils.sourceforge.net/rst.html
.. _S5: http://meyerweb.com/eric/tools/s5/
.. _Firefox: http://www.mozilla.com/firefox/

.. _Zoom.Quiet:
    http://code.google.com/p/openbookproject/wiki/ZoomQuiet
.. _(CC)by-nc-sa:
    http://creativecommons.org/licenses/by-nc-sa/2.5/cn/
.. _FireFox:
    http://www.mozilla.com/firefox/
.. _S5介绍:
    http://zoomquiet.org/res/s5/100826-PyTDD/s5.html
.. _WYTIWYG:
    http://wiki.woodpecker.org.cn/moin/WyTiWyG

.. 图片定义区
.. |bullet| unicode:: U+02022
.. |mode| unicode:: U+00D8 .. capital o with stroke

.. |S5icon| image:: pix/S5icon.GIF
    :align: top
    :scale: 100 %
    :target: http://www.meyerweb.com/eric/tools/s5/
.. |LeoProse| image:: pix/LeoProse.gif
    :align: top
    :scale: 100 %
    :target: http://wiki.woodpecker.org.cn/moin/LeoEnvironment
.. |cc-byncsa31| image:: i/icon/cc-byncnd-88x31.png
   :alt: (CC)by-nc-sa 许可证
   :target: http://creativecommons.org/licenses/by-nc-sa/2.5/cn/
.. |cc-byncsa15| image:: i/icon/cc-byncnd-80x15.png
   :alt: (CC)by-nc-sa 许可证
   :target: http://creativecommons.org/licenses/by-nc-sa/2.5/cn/
.. |zqeye| image:: i/id/zoomquiet_1-1_outline.png
   :alt: 是也乎;-)
   :target: http://wiki.woodpecker.org.cn/moin/ZoomQuiet

</t>
<t tx="zoomq.20101116152553.7462">.. footer:: 

   `Zoom.Quiet`_ v10.11.11 |cc-byncsa15| 推荐用 `FireFox`_ 获得最佳游览效果
</t>
<t tx="zoomq.20101116152553.7463">&lt;免责/&gt;
=========

.. container:: handout

   山寨的，非业界公认的，个人体验为基础!
   |zqeye|


.. class:: takahashi1

    参考所有同好行为总结而得


    .. class:: incremental

    - 一切资料来自网络互动挖掘
    - 一切想法来自日常学习工作
    - 一切体悟来自各种沟通交流
    - 一切知识来自社区分享印证
    - 一切经验来自个人失败体验



&lt;&lt;S5&gt;&gt;

</t>
<t tx="zoomq.20101116152553.7465">高橋流!
=========

.. container:: handout

   `Takahashi-method 幻灯风格 &lt;http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/&gt;`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center

    .. image:: pix/Takahashi-method.jpg
        :scale: 150 %
        :alt: 高橋流
        :align: center
        :target: http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/

</t>
<t tx="zoomq.20101116152553.7466">文字
=========

.. container:: handout

   `Takahashi-method 幻灯风格 &lt;http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/&gt;`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi9

    巨大


</t>
<t tx="zoomq.20101116152553.7467">幻灯
=========

.. container:: handout

   `Takahashi-method 幻灯风格 &lt;http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/&gt;`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi9

    很多


</t>
<t tx="zoomq.20101116152553.7468">播放
=========

.. container:: handout

   `Takahashi-method 幻灯风格 &lt;http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/&gt;`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi9

    快!


</t>
<t tx="zoomq.20101116152553.7469">播放
=========

.. container:: handout

   `Takahashi-method 幻灯风格 &lt;http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/&gt;`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi8

    很快!


</t>
<t tx="zoomq.20101116152553.7470">播放
=========

.. container:: handout

   `Takahashi-method 幻灯风格 &lt;http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/&gt;`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi7

    非常快!


</t>
<t tx="zoomq.20101116152553.7471">所以:
=========

.. container:: handout

   `Takahashi-method 幻灯风格 &lt;http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/&gt;`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi10

    :orange:`听`


</t>
<t tx="zoomq.20101116152553.7472">&lt;进度/&gt;
=========

.. container:: handout

   追求-&gt;过程-&gt;使劲交流 |zqeye|


.. class:: takahashi3

    - :orange:`3' 目标`
    - :silver:`11' 过程`
    - :silver:`19' 要点`
    - :silver:`17' 提问`



</t>
<t tx="zoomq.20101116152553.7473">&lt;Goal&gt;
==================

.. container:: handout

    玩好学好,体验靠谱! |zqeye|


.. class:: takahashi10

   共赢


.. container:: notes

   - 






</t>
<t tx="zoomq.20101116152553.7474">学生
==================

.. container:: handout

    获得真实的开发导引 |zqeye|


.. class:: takahashi8

   +引导


.. container:: notes

   - 






</t>
<t tx="zoomq.20101116152553.7475">学校
==================

.. container:: handout

    获得免费的技术导师 |zqeye|


.. class:: takahashi8

   +导师


.. container:: notes

   - 






</t>
<t tx="zoomq.20101116152553.7476">企業
==================

.. container:: handout

    获得高效的潜在员工鳞选 |zqeye|


.. class:: takahashi8

   +预训


.. container:: notes

   - 






</t>
<t tx="zoomq.20101116152553.7477">社区
==================

.. container:: handout

    获得持续的沟通机会 |zqeye|


.. class:: takahashi8

   +交流


.. container:: notes

   - 






</t>
<t tx="zoomq.20101116152553.7478">&lt;/Goal&gt;
==================

.. container:: handout

    玩好学好,体验靠谱! |zqeye|


.. class:: takahashi8

   (^.^)


.. container:: notes

   - 









</t>
<t tx="zoomq.20101116152553.7479">&lt;进度/&gt;
=========

.. container:: handout

   追求-&gt;过程-&gt;使劲交流 |zqeye|


.. class:: takahashi3

    - :gray:`3' 目标`
    - :orange:`11' 过程`
    - :silver:`19' 要点`
    - :silver:`17' 提问`



</t>
<t tx="zoomq.20101116152553.7480">标准化流程
==================

.. container:: handout

   |zqeye|


.. class:: takahashi8

    &lt;Flow&gt;


</t>
<t tx="zoomq.20101116152553.7481">开营
==================

.. container:: handout

   |zqeye|


.. class:: takahashi

    .. image:: i/map/pyicamp-flow-0_wsd-napkin.png
        :align: center
        :scale: 200 %
        :alt: 主动报名!

.. container:: notes

   - 




</t>
<t tx="zoomq.20101116152553.7482">作品
==================

.. container:: handout

   |zqeye|


.. class:: takahashi

    .. image:: i/map/pyicamp-flow-1_wsd-napkin.png
        :align: center
        :scale: 150 %
        :alt: 承诺!

.. container:: notes

   - 




</t>
<t tx="zoomq.20101116152553.7483">计划
==================

.. container:: handout

   |zqeye|


.. class:: takahashi

    .. image:: i/map/pyicamp-flow-2_wsd-napkin.png
        :align: center
        :scale: 130 %
        :alt: 合理

.. container:: notes

   - 




</t>
<t tx="zoomq.20101116152553.7484">日常
==================

.. container:: handout

   |zqeye|


.. class:: takahashi

    .. image:: i/map/pyicamp-flow-3_wsd-napkin.png
        :align: center
        :scale: 120 %
        :alt: 节奏

.. container:: notes

   - 时间安排和沟通...




</t>
<t tx="zoomq.20101116152553.7485">闭营
==================

.. container:: handout

   |zqeye|


.. class:: takahashi

    .. image:: i/map/pyicamp-flow-all_wsd-napkin.png
        :align: center
        :scale: 110 %
        :alt: 正式

.. container:: notes

   - 文档!仓库!




</t>
<t tx="zoomq.20101116152553.7486">敏捷...
==================

.. container:: handout

   |zqeye|


.. class:: takahashi7

    &lt;/Flow&gt;


</t>
<t tx="zoomq.20101116152553.7487">&lt;进度/&gt;
=========

.. container:: handout

   追求-&gt;过程-&gt;使劲交流 |zqeye|


.. class:: takahashi3

    - :gray:`3' 目标`
    - :gray:`11' 过程`
    - :orange:`19' 要点`
    - :silver:`17' 提问`



</t>
<t tx="zoomq.20101116152553.7488">必须要突破的
==================

.. container:: handout

    心理定式... |zqeye|


.. class:: takahashi

   &lt;HOPE&gt;


.. container:: notes

   - 



</t>
<t tx="zoomq.20101116152553.7489">人类的摧生婆
==================

.. container:: handout

    能够限制你的只有你自个儿 |zqeye|


.. class:: takahashi9

   工具


.. container:: notes

   - 



</t>
<t tx="zoomq.20101116152553.7490">最古老也是最高效的沟通方式
====================================

.. container:: handout

    怎么强调也不为过 |zqeye|


.. class:: takahashi10

   :orange:`邮件`


.. container:: notes

   - 



</t>
<t tx="zoomq.20101116152553.7491">版本管理
==================

.. container:: handout

    最贴心的工具 |zqeye|


.. class:: takahashi

    .. image:: i/logo/logo-hg-200.png
        :align: center
        :scale: 120 %
        :alt: Hg
        :target: http://code.google.com/p/kcpycamp/wiki/HowtoScm

.. container:: notes

   - 



</t>
<t tx="zoomq.20101116152553.7492">核心转变
==================

.. container:: handout

    为自己负责! |zqeye|


.. class:: takahashi10

    `态度 &lt;http://wiki.woodpecker.org.cn/moin/KaoPulity&gt;`__

.. container:: notes

   - 從此开始经营自个儿的社会信用!



</t>
<t tx="zoomq.20101116152553.7493">时限!
==================

.. container:: handout

    不能无限尝试! |zqeye|


.. class:: takahashi9

    :orange:`100h`

.. container:: notes

   - 100小时~2周全职工作时间
   - 期望持续的每天花一定时间在蟒营
   - 每天1小时,3个月,完成进化!



</t>
<t tx="zoomq.20101116152553.7494">海宽天高!
==================

.. container:: handout

    能够限制你的只有你自个儿 |zqeye|


.. class:: takahashi

   &lt;/HOPE&gt;


.. container:: notes

   - 



</t>
<t tx="zoomq.20101116152553.7495">&lt;进度/&gt;
=========

.. container:: handout

   追求-&gt;过程-&gt;使劲交流 |zqeye|


.. class:: takahashi3

    - :gray:`3' 目标`
    - :gray:`11' 过程`
    - :gray:`19' 要点`
    - :orange:`17' 提问`



</t>
<t tx="zoomq.20101116152553.7496">嗯嗯嗯?!
==================

.. container:: handout

   |zqeye|


.. class:: takahashi10

    Q&amp;A


</t>
<t tx="zoomq.20101116152553.7497">&lt;版本/&gt;
=========

.. container:: handout

   |zqeye|


- 101011 使用"高桥流白样式"并迁移为 rst2s5 格式
- 101021 根据暨大交流修订别字
- 100819 upgrade for 金山俱乐部
- 080918 upgrade for OSCamp
- 080810 fixed 4 internat
- 080806 fixed for new KC people
- 080619 创建


:反馈:
    `Zoom.Quiet@gmail.com &lt;zoomquiet+sns@gmai.com&gt;`__
:查阅:
    http://zoomquiet.org/res/s5/101111-pythonicamp-go


&lt;&lt;S5&gt;&gt;

</t>
<t tx="zoomq.20101116152553.7498">`S5 &lt;http://www.meyerweb.com/eric/tools/s5/&gt;`__
==============================================================================================

.. container:: handout

    纯HTML 幻灯撰写框架!... |zqeye|


- S\ :sup:`5`\ == a :orange:`S` imple :orange:`S` tandards-based :orange:`S` lide :orange:`S` how :orange:`S` ystem 
- 仅用 CSS+JS 实现的HTML格式幻灯演示工具~ `本地介绍 &lt;s5.html&gt;`__
- 我的编辑工具: |LeoProse| ~ `文学化编辑环境 &lt;http://en.wikipedia.org/wiki/Literate_programming&gt;`__


.. image:: pix/2010-01-18-230729_605x421_leo.png
    :align: center
    :scale: 100 %
    :target: http://wiki.woodpecker.org.cn/moin/LeoEnvironment


</t>
<t tx="zoomq.20101116152553.7499">&lt;Zoom.Quiet/&gt;
==================

.. container:: handout

   |zqeye|


.. class:: takahashi

    .. image:: i/id/100514-zq-eye.png
        :align: center
        :scale: 80 %
        :alt: 是也乎,是也乎

    .. image:: i/map/50ren-ZoomQuiet-s5-v800.png
        :align: center
        :scale: 100 %
        :alt: Zoom.Quiet
        :target: http://zoomquiet.org


</t>
</tnodes>
</leo_file>
