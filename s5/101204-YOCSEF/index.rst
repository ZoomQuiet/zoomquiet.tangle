.. include:: <s5defs.txt>

==================================================================
 :orange:`云` 安全
==================================================================

～云计算时代的安全对抗

:讲者: `Zoom.Quiet <zoomquiet+knoss@gmai.com>`__
:URL:   http://zoomquiet.org/res/s5/101204-YOCSEF

.. This document has been placed in the CC domain.
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
.. |knoss| image:: i/id/101201-kn-k-logo-h50.png
   :alt: 开源不仅是行为,更加是信仰!
   :target: http://code.ijinshan.com

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



.. footer:: 

   `Zoom.Quiet`_ v10.12.22 |cc-byncsa15| 推荐用 `FireFox`_ 获得最佳翻阅效果

<免责/>
=========

.. container:: handout

   非业界公认的，个人体验为基础的
   |knoss|


.. class:: takahashi1

    参考所有同好成果总结而得

    - 一切资料来自网络互动挖掘
    - 一切想法来自日常学习工作
    - 一切体悟来自各种沟通交流
    - 一切知识来自社区分享印证
    - 一切经验来自个人失败体验

<Zoom.Quiet>
==================

.. container:: handout

   |zqeye|


.. class:: takahashi7

    本命年


.. container:: notes

   - 刚刚过了生日,应该说已经37岁了
   - 已经工作了12年


牛妞
==================

.. container:: handout

   \\ (^o^) / 582d



.. image:: i/foto/faces-niuniu.jpg
    :align: center
    :scale: 85 %
    :alt: 表情牛妞


.. container:: notes

   - 我的女儿刚刚一岁半,非常牛,,,脾气牛,头脑牛,虽然不会说话,但是已经能指挥我们干活了...


</Zoom.Quiet>
==================

.. container:: handout

    高兴/紧张... 分享云安全的个人思考 |zqeye|


.. class:: takahashi8

   (^.^)


.. container:: notes

   - 这次可以和大家见面,并高兴的聊天非常高兴!
   - 不仅高兴可以和大家分享我认为很好玩的事儿,
   - 更加高兴可以从大家这儿听到从前的自个儿可能都没有想到的事儿



"云"安全
==================

.. container:: handout

   前世,今生,来生... |knoss|


.. class:: takahashi7

    .. image:: i/av-industry.png
        :align: center
        :scale: 100 %
        :alt: 形势逼人


.. container:: notes

   - 历史
   - 杀毒
   - 查毒
   - 防毒
   - 云安全能力:

    - 每日可承载文件安全查询30亿次以上,可同时并发接受200万个文件的安全查询;平均每文件完成鉴定<0.2秒;任意新增病毒样本将在一分钟之内完成鉴定,使全体用户获得免疫!
    - 每日可承载网址安全查询10亿次,可同时并发接受20万个可疑网址的查询;平均每网页分析完成<0.03秒;任意新增恶意网址能在90秒之内完成分析,使全体用户获得免疫!

   - 开源后,任何人可以:

    - 自动化同步金山云安全各类特征库,在客户端本地通过黑+白特征库,实时识别98%以上的常见/热点病毒;
    - 自动化向金山云安全平台提交查询,进一步在黑+白特征全库中,及时确认最新病毒/恶意网址;
    - 自动化上报最新可疑文件/网址,在金山云安全平台完成自动化鉴定,实时发布,从而形成一人发现全体免疫的全网实时病毒监察的云安全态势!


金山卫士开源计划
==================

.. container:: handout

   未来... |knoss|


.. class:: takahashi

    .. image:: i/map/system_arch_pic.gif
        :align: center
        :scale: 100 %
        :alt: 开源范畴
        :target: http://code.ijinshan.com


.. container:: notes

   - 扶助开源,共同成长!
   - 




"云"端结构
==================

.. container:: handout

   现在... |knoss|


.. class:: takahashi

    .. image:: i/map/kcs-structure-map.gif
        :align: center
        :scale: 100 %
        :alt: 云端结构


.. container:: notes

   - 依然得有客户端的配合
   - 




金山卫士开源社区
==================

.. container:: handout

   未来... |knoss|


.. class:: takahashi9

    :orange:`社区`


.. container:: notes

   - 在学习如何培育，同赢！
   - 




总之
=========

.. container:: handout

   期望可以记住的 |knoss|


.. class:: incremental takahashi

    * 安全对抗永远不会终止
    * 安全对抗本质是人的对抗
    * 云安全真正实现非常困难
    * 云安全要靠所有人的努力!



.. container:: notes

   - ~单位时间可以记住的只有7+-2 个



最后:感谢一切!
==================

.. container:: handout

   |knoss|


.. class:: takahashi7

    Q&A

.. container:: notes

   - ...






<版本/>
=========

.. container:: handout

   |knoss|


- 101222 for YY语音会议 修订牛妞成日
- 101218 for OSCamp 修订牛妞成日
- 101203 追加开源相关
- 101129 调整讲演策略,精简所有页面
- 101120 增补图片
- 101115 起草


:反馈:
    `Zoom.Quiet@gmail.com <zoomquiet+sns@gmai.com>`__
:查阅:
    http://zoomquiet.org/res/s5/101204-YOCSEF


`S5 <http://www.meyerweb.com/eric/tools/s5/>`__
==============================================================================================

.. container:: handout

    纯HTML 幻灯撰写框架!... |zqeye|


- S\ :sup:`5`\ == a :orange:`S` imple :orange:`S` tandards-based :orange:`S` lide :orange:`S` how :orange:`S` ystem 
- 仅用 CSS+JS 实现的HTML格式幻灯演示工具~ `本地介绍 <s5.html>`__
- 我的编辑工具: |LeoProse| ~ `文学化编辑环境 <http://en.wikipedia.org/wiki/Literate_programming>`__


.. image:: pix/2010-01-18-230729_605x421_leo.png
    :align: center
    :scale: 100 %
    :target: http://wiki.woodpecker.org.cn/moin/LeoEnvironment



