.. include:: <s5defs.txt>

==================================================================
MQ解耦开发
==================================================================

～ 分享如何偷懒 (powered by rst2S5)

:Authors: `Zoom.Quiet <zoomquiet+sns@gmai.com>`__
:URL:    http://zoomquiet.org/res/s5/111111-pyconchina-mq-taste

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
.. _提问的智慧:
    http://wiki.woodpecker.org.cn/moin/AskForHelp

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
.. |lovpy| image:: i/logo/110409-book-logo-h90.png
    :alt: 可爱的Python
    :scale: 100 %
    :target: http://lovelypython.zoomquiet.org/

.. footer:: 

   `Zoom.Quiet`_ v11.11.11 |cc-byncsa15| 推荐用 `FireFox`_ 获得最佳游览效果

<免责/>
=========

.. container:: handout

   山寨的，非业界公认的，个人体验为基础!
   |zqeye|


.. class:: takahashi1

    参考所有同好行为总结而得


    - 一切资料来自网络互动挖掘
    - 一切想法来自日常学习工作
    - 一切体悟来自各种沟通交流
    - 一切知识来自社区分享印证
    - 一切经验来自个人失败体验



.. container:: notes

   - 免责是必须的，分享是无理由的！





<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :orange:`5' 起因`
    - :silver:`10' 对策`
    - :silver:`10' 实现`
    - :silver:`5'沟通`


.. container:: notes

   - 





起因
==================

.. container:: handout

   各种杯具的根源 |zqeye|


.. class:: takahashi8

    复杂


.. container:: notes

   - 是也乎?










根源在哪儿?!
==================

.. container:: handout

   多变/前后依赖/矛盾的业务 |zqeye|


.. class:: takahashi8

    业务


.. container:: notes

   - 是也乎?










为毛有乱来的业务?
======================================================

.. container:: handout

   是共军太狡猾 |zqeye|


.. class:: takahashi8

    设计


.. container:: notes

   - 是也乎?










为毛要乱实现业务?
======================================================

.. container:: handout

   - 没空宏观规划 |zqeye|
   - 没空回顾整理
   - 没心情...


.. class:: takahashi8

    :orange:`被` 开发


.. container:: notes

   - 是也乎?










真正的原因?
======================================================

.. container:: handout

   经验不足吧 |zqeye|


.. class:: takahashi8

    :orange:`被` 耦合


.. container:: notes

   - 是也乎?










依赖是种心理反应
======================================================

.. container:: handout

   不受控制的功能/代码叠加 |zqeye|


.. class:: takahashi8

    蔓生


.. container:: notes

   - 是也乎?










<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :gray:`5' 起因`
    - :orange:`10' 对策`
    - :silver:`10' 实现`
    - :silver:`5'沟通`


.. container:: notes

   - 



对策
==================

.. container:: handout

   简单的保持需要更加简单的设计 |zqeye|


.. class:: takahashi8

    :orange:`K` ISS


.. container:: notes

   - 是也乎?










复杂的标志性表现
====================================

.. container:: handout

   牵一发动全身 |zqeye|


.. class:: takahashi8

    耦合


.. container:: notes

   - 是也乎?










功能代码的模块化不解决问题
====================================

.. container:: handout

   业务的纠结是根源 |zqeye|


.. class:: takahashi8

    模块


.. container:: notes

   - 是也乎?










此"业务"非彼"业务"
====================================

.. container:: handout

   - 不是商业过程 |zqeye|
   - 是指系统内部过程


.. class:: takahashi8

    "业务"


.. container:: notes

   - 是也乎?










Application
====================================

.. container:: handout

   实现方案的是应用 |zqeye|


.. class:: takahashi8

    应用


.. container:: notes

   - 是也乎?










Entities
====================================

.. container:: handout

   组成应用的实体 |zqeye|


.. class:: takahashi8

    实体


.. container:: notes

   - 是也乎?










Transactions
====================================

.. container:: handout

   实体完成的行动是事务 |zqeye|


.. class:: takahashi8

    事务


.. container:: notes

   - 是也乎?










目标在于:应用...
====================================

.. container:: handout

   - Almost-Infinite Scaling of Applications |zqeye|
   - 考虑无限伸缩应用 
   - 怎么KISS 的来?!


.. class:: takahashi

    可伸缩


.. container:: notes

   - 是也乎?










对策基于以下理论
====================================

.. container:: handout

   `[翻译] 超越分布式事务的方法 - 一个叛逆者的观点 - riccc - 博客园 <http://www.cnblogs.com/RicCC/archive/2008/03/30/life-beyond-distributed-transactions.html>`_ |zqeye|
   

.. class:: takahashi8

    假设


.. container:: notes

   - 是也乎?










伸缩性与应用的分层无关
====================================

.. container:: handout

   `[翻译] 超越分布式事务的方法 - 一个叛逆者的观点 - riccc - 博客园 <http://www.cnblogs.com/RicCC/archive/2008/03/30/life-beyond-distributed-transactions.html>`_ |zqeye|
   

.. class:: takahashi8

    分层?


.. container:: notes

   - 是也乎?










事务序列化范畴与伸缩性有关
====================================

.. container:: handout

   `[翻译] 超越分布式事务的方法 - 一个叛逆者的观点 - riccc - 博客园 <http://www.cnblogs.com/RicCC/archive/2008/03/30/life-beyond-distributed-transactions.html>`_ |zqeye|
   

.. class:: takahashi

    事务范围


.. container:: notes

   - 是也乎?










多数应用的消息方式与伸缩性有关
====================================

.. container:: handout

   - At-Least-Once 模式 |zqeye|
   - 消息分发与持久化数据的更新不是直接结合在一起
   

.. class:: takahashi

    至少一次


.. container:: notes

   - 是也乎?










综上应对
====================================

.. container:: handout

   |zqeye|
   

.. class:: takahashi8

    原则


.. container:: notes

   - 是也乎?


只包含单一事务
====================================

.. container:: handout

   |zqeye|
   
   

.. class:: takahashi8

    小实体


.. container:: notes

   - 是也乎?










用消息来协调
====================================

.. container:: handout

   |zqeye|
   
   

.. class:: takahashi8

    消息


.. container:: notes

   - 是也乎?










<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :gray:`5' 起因`
    - :gray:`10' 对策`
    - :orange:`10' 实现`
    - :silver:`5'沟通`


.. container:: notes

   - 








支撑核心
==================

.. container:: handout

   异步化一切 |zqeye|


.. class:: takahashi8

    MQ


.. container:: notes

   - 是也乎?










Message
==================

.. container:: handout

   无状态事务的实体键 |zqeye|


.. class:: takahashi8

    :orange:`M` Q


.. container:: notes

   - 是也乎?










Queue
==================

.. container:: handout

   FIFO的管道 |zqeye|


.. class:: takahashi8

    M :orange:`Q`


.. container:: notes

   - 是也乎?










Queue的能力
==================

.. container:: handout

   分支式请求可耐受 |zqeye|


.. class:: takahashi8

    迸发


.. container:: notes

   - 是也乎?










Queue的内容
==================

.. container:: handout

   - Atomic Transactions |zqeye|
   - 幂等性 Idempotent


.. class:: takahashi8

    原子性


.. container:: notes

   - 是也乎?










Queue的监测
==================

.. container:: handout

   有方法将意外的任务回收 |zqeye|


.. class:: takahashi8

    可回收


.. container:: notes

   - 是也乎?










业务原子化
==================

.. container:: handout

   内部全部 RESTful 接口化 |zqeye|


.. class:: takahashi8

    前提


.. container:: notes

   - 是也乎?










网站注册
==================

.. container:: handout

   标准作法... |zqeye|


.. class:: incremental takahashi

    - 填写登录表单
    - 入库
    - 发送邮件
    - 返回页面


.. container:: notes

   - 是也乎?










解耦邮件等待
==================

.. container:: handout

   MQ异步... |zqeye|


.. class:: incremental takahashi

    - 填写登录表单
    - 发布事务消息
    - 返回页面


.. container:: notes

   - 是也乎?










工作组件
==================

.. container:: handout

   MQ之后... |zqeye|


.. class:: incremental takahashi

    - 认领消息
    - 处理
    - 返回消息

.. container:: notes

   - 是也乎?










`Karait <https://github.com/bcoe/karait>`_
========================================================================

.. container:: handout

   轻便MQ选择... |zqeye|


.. class:: incremental takahashi

    - 纯Py
    - 跨语言接口
    - MongoDB 后端!

.. container:: notes

   - 是也乎?










`芹菜 <http://celeryproject.org/`_
========================================================================

.. container:: handout

   高档MQ选择... |zqeye|


.. class:: incremental takahashi

    - 纯Py
    - 多后端选择
    - 多框架结合
    - 多线程动力(gevent/Eventlet)
    - ... 

.. container:: notes

   - 是也乎?










demo:准备中...
========================================================================

.. container:: handout

   示例代码 |zqeye|


.. code-block:: python

        #... overdue     = 73728
        hashed = db[linkback].split(",")
        if ini.overdue < int(time.time())-int(hashed[0]):
            __redirect("Overdue",ini.msgTPLoverdue)
        # else: ...


.. container:: notes

   - 是也乎?










<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :gray:`5' 起因`
    - :gray:`10' 对策`
    - :gray:`10' 实现`
    - :orange:`5'沟通`


.. container:: notes

   - 








总之:任何好想法
====================================

.. container:: handout

   期望记住的~单位时间能记住的只有7+-2 个 |zqeye|


.. class:: incremental takahashi

    - 复杂事关态度
    - 耦合的根源在业务
    - 异步业务靠设计
    - 用MQ我选择...
    - 革命尚未成功


.. container:: notes

    - Doing now! don't thinking!








<discuss/>
==========

.. container:: handout

   |zqeye|


.. class:: takahashi8

    Q&A





.. container:: notes

   - 



<版本/>
=========

.. container:: handout

   |zqeye|


- 111114 增补叙述
- 111112 调整结构
- 111111 创建幻灯

:反馈:
    `Zoom.Quiet <zoomquiet+sns@gmai.com>`__

http://zoomquiet.org/res/s5/111111-pyconchina-mq-taste




`S5 <http://www.meyerweb.com/eric/tools/s5/>`__
==============================================================================================

.. container:: handout

    纯HTML 幻灯撰写框架!... |S5icon|


- S\ :sup:`5`\ == a :orange:`S` imple :orange:`S` tandards-Based :orange:`S` lide :orange:`S` how :orange:`S` ystem 

 - 仅仅依靠 CSS+JS 的HTML格式幻灯演示框架

- 我的编辑环境: |LeoProse| ~ `文学化编辑器 <http://en.wikipedia.org/wiki/Literate_programming>`__


.. image:: pix/2010-01-18-230729_605x421_leo.png
    :align: center
    :scale: 100 %
    :target: http://wiki.woodpecker.org.cn/moin/LeoEnvironment



.. container:: notes

   - 虽然有很多其它替代方案，至今用得最爽的还是 S5
   - 最好也是最不好的，就是S5 需要专用的http 空间发布，无法直接分享到 slidshare.com 之类SNS空间中








