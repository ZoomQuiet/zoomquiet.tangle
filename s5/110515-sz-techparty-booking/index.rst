.. include:: <s5defs.txt>

==================================================================
图书工程学?
==================================================================

～点解技术图书分布式团队的建立和管理 (powered by rst2S5)

:Authors: `Zoom.Quiet <zoomquiet+sns@gmail.com>`__
:URL:    http://zoomquiet.org/res/s5/110515-sz-techparty-booking/

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

   `Zoom.Quiet`_ v11.03.20 |cc-byncsa15| 推荐用 `FireFox`_ 获得最佳游览效果

<免责/>
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



.. container:: notes

   - 免责是必须的，分享是无理由的！





高橋流!
=========

.. container:: handout

   `Takahashi-method 幻灯风格 <http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/>`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center

    .. image:: pix/Takahashi-method.jpg
        :scale: 150 %
        :alt: 高橋流
        :align: center
        :target: http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/

文字
=========

.. container:: handout

   `Takahashi-method 幻灯风格 <http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/>`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi9

    巨大


幻灯
=========

.. container:: handout

   `Takahashi-method 幻灯风格 <http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/>`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi9

    很多


播放
=========

.. container:: handout

   `Takahashi-method 幻灯风格 <http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/>`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi9

    快!


播放
=========

.. container:: handout

   `Takahashi-method 幻灯风格 <http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/>`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi8

    很快!


播放
=========

.. container:: handout

   `Takahashi-method 幻灯风格 <http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/>`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi7

    非常快!


所以:
=========

.. container:: handout

   `Takahashi-method 幻灯风格 <http://blog.derjohng.com/2006/04/12/takahashi-method-%E7%B0%A1%E5%A0%B1/>`__ 
   源自 Ruby 创始人高橋征義(Masayoshi Takahashi)


.. class:: center takahashi10

    :orange:`听`


<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |lovpy|


.. class:: takahashi

    - :orange:`3' 自述`
    - :silver:`15' 团队`
    - :silver:`15' 出版`
    - :silver:`12'小经验`


.. container:: notes

    .::

        1）多人协作写作或翻译中高效协同的技术与方法；
        2）多人协作写作或翻译中质量控制的方法与管理机制；
        3）图书项目中进度管理与督促的有效措施与思路探讨；
        4）品质保证中版式相关的一些好的做法；
        5）品种保证中代码准确性相关你的一些好的做法；
        6）团队写作中初始与最终人选确定的科学评定机制。













<俺>
==================

.. container:: handout

   37,有娃没车,长年大妈 |zqeye|


.. class:: takahashi

    .. image:: i/id/100514-zq-eye.png
        :align: center
        :scale: 80 %
        :alt: 是也乎,是也乎

    .. image:: i/map/50ren-ZoomQuiet-s5-v800.png
        :align: center
        :scale: 100 %
        :target: http://zoomquiet.org



.. container:: notes

   - 刚刚过了生日,应该说已经37岁了
   - 已经工作了12年




牛妞
==================

.. container:: handout

    \\ (^o^) / +726d  |zqeye|


.. class:: takahashi

    .. image:: i/foto/niuniu-110316.jpeg
        :align: center
        :scale: 100 %


.. container:: notes

   - 我的女儿刚刚一岁半,非常牛,,,脾气牛,头脑牛,虽然不会说话,但是已经能指挥我们干活了...


</俺>
==================

.. container:: handout

    高兴/紧张... 分享学习的个人思考 |zqeye|


.. class:: takahashi8

   (^.^)


.. container:: notes

   - 这次可以和大家见面,并高兴的聊天非常高兴!
   - 不仅高兴可以和大家分享我认为很好玩的事儿,
   - 更加高兴可以从大家这儿听到从前的自个儿可能都没有想到的事儿



可愛的Python
==================

.. container:: handout

   2009-09-02出版 |zqeye|


.. class:: takahashi

    .. image:: i/090902-lovpy.jpg
        :align: center
        :scale: 120 %
        :alt: 封面
        :target: http://www.china-pub.com/195771


.. container:: notes

   - 这本书,是有关开发语言 Python 的,
   - 不过,今天说的和内容无关,是和怎么写出这样一本挺厚的书相关的
   - 写成一本书,真的不是难事儿...




`O.B.P计划 <http://wiki.woodpecker.org.cn/moin/OBP>`_
======================================================

.. container:: handout

   2005创建 |zqeye|


.. class:: takahashi

    .. image:: i/logo/OpenBookProject.png
        :align: center
        :scale: 100 %
        :target: http://code.google.com/p/openbookproject/


.. container:: notes

   - 这本书,是有关开发语言 Python 的,
   - 不过,今天说的和内容无关,是和怎么写出这样一本挺厚的书相关的
   - 写成一本书,真的不是难事儿...




继续...
==================

.. container:: handout

   义务摧生婆... |zqeye|


.. class:: takahashi8

    大妈



.. container:: notes

   - 










<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |lovpy|


.. class:: takahashi

    - :gray:`3' 自述`
    - :orange:`15' 团队`
    - :silver:`15' 出版`
    - :silver:`12'小经验`


.. container:: notes

   - 










什么是
==================

.. container:: handout

   有什么不同? |lovpy|


.. class:: takahashi8

    ?图书



.. container:: notes

   - 










vs Blog?
==================

.. container:: handout

   系列文章? |lovpy|


.. class:: takahashi8

    文章



.. container:: notes

   - 










vs Manual?
==================

.. container:: handout

   纯知识 |lovpy|


.. class:: takahashi8

    手册



.. container:: notes

   - 










vs mindmapping?
==================

.. container:: handout

   知识网络... |lovpy|


.. class:: takahashi8

    图谱



.. container:: notes

   - 










技术图书来说:
==================

.. container:: handout

   个人直觉... |lovpy|


.. class:: takahashi8

    图书~



.. container:: notes

   - 










有关技术的...
==================

.. container:: handout

   作者/领域/案例.... |lovpy|


.. class:: takahashi8

    故事



.. container:: notes

   - 










有关问题的...
==================

.. container:: handout

   解决思路/方案/代码/技巧.... |lovpy|


.. class:: takahashi8

    +知识



.. container:: notes

   - 










有关知识的...
==================

.. container:: handout

   内置有知识结构和引导.... |lovpy|


.. class:: takahashi8

    +学习  



.. container:: notes

   - 










好图书~=
==================

.. container:: handout

   用学习连接起来知识和领域问题 |lovpy|


.. class:: takahashi3

    (问题 :orange:`+` 知识)\ :sup:`故事`\  



.. container:: notes

   - 










图书工程
==================

.. container:: handout

   根儿上的不同... |lovpy|


.. class:: takahashi8

    类型



.. container:: notes

   - 










翻译图书
==================

.. container:: handout

   ... |lovpy|


.. class:: takahashi9

    译



.. container:: notes

   - 










原创图书
==================

.. container:: handout

   ... |lovpy|


.. class:: takahashi9

    撰



.. container:: notes

   - 










很不同
==================

.. container:: handout

   ... |lovpy|


.. class:: takahashi9

    区别



.. container:: notes

   - 










格式化输入
==================

.. container:: handout

   对于翻译的使命... |lovpy|


.. class:: takahashi8

    输入



.. container:: notes

   - 










所以要求对于领域知识
====================================

.. container:: handout

   由于翻译的使命...... |lovpy|


.. class:: takahashi8

    全面



.. container:: notes

   - 










格式化输出
==================

.. container:: handout

   对于原创的使命... |lovpy|


.. class:: takahashi8

    输出



.. container:: notes

   - 










所以要求对于领域知识
====================================

.. container:: handout

   出于原创的使命... |lovpy|


.. class:: takahashi8

    独到



.. container:: notes

   - 










從而
==================

.. container:: handout

   构成要求也不同 |lovpy|


.. class:: takahashi8

    团队!



.. container:: notes

   - 










结构上
==================

.. container:: handout

   这是相同的.... |lovpy|


.. class:: takahashi8

    构成



.. container:: notes

   - 










内容生产
==================

.. container:: handout

   Codeing.... |lovpy|


.. class:: takahashi8

    核心



.. container:: notes

   - 










质量保障
==================

.. container:: handout

   支持.... |lovpy|


.. class:: takahashi8

    校对



.. container:: notes

   - 










持续测试
==================

.. container:: handout

   支持.... |lovpy|


.. class:: takahashi8

    试阅



.. container:: notes

   - 










产品保障
==================

.. container:: handout

   支持.... |lovpy|


.. class:: takahashi8

    编辑



.. container:: notes

   - 










市场动力
==================

.. container:: handout

   支持.... |lovpy|


.. class:: takahashi8

    关注



.. container:: notes

   - 










比例?
==================

.. container:: handout

   最好.... |lovpy|


.. class:: takahashi1

    ===== ===== ===== ===== =====
    编辑  :核心 :校对 :试阅 :关注
    ----- ----- ----- ----- -----
    1      :2    :7    :21  :1000
    ===== ===== ===== ===== =====



.. container:: notes

   - 










召集团队
==================

.. container:: handout

    怎么选择?! |lovpy|


.. class:: takahashi8

    人选



.. container:: notes

   - 










表临时聚集
==================

.. container:: handout

    最好... |lovpy|


.. class:: takahashi8

    囤积



.. container:: notes

   - 










原因？！
==================

.. container:: handout

    源自信任！... |lovpy|


.. class:: takahashi8

    效率



.. container:: notes

   - 










翻译团队的核心
==================

.. container:: handout

    尽量找... |lovpy|


.. class:: takahashi7

    领域专家



.. container:: notes

   - 










撰写团队的核心
==================

.. container:: handout

    尽量找... |lovpy|


.. class:: takahashi7

    活跃作者



.. container:: notes

   - 










选择依据
==================

.. container:: handout

    怎么明确... |lovpy|


.. class:: takahashi7

    ?考察



.. container:: notes

   - 










优先...
==================

.. container:: handout

    公开的... |lovpy|


.. class:: takahashi7

    证据!



.. container:: notes

   - 










进入领域的时间
==================

.. container:: handout

    老中医... |lovpy|


.. class:: takahashi7

    时间



.. container:: notes

   - 










参加/主持的..
==================

.. container:: handout

    公开的... |lovpy|


.. class:: takahashi7

    项目



.. container:: notes

   - 










Blogging
==================

.. container:: handout

    公开的... |lovpy|


.. class:: takahashi7

    文章



.. container:: notes

   - 










SNS
==================

.. container:: handout

    圏内推荐... |lovpy|


.. class:: takahashi7

    推荐



.. container:: notes

   - 










<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |lovpy|


.. class:: takahashi

    - :gray:`3' 自述`
    - :gray:`15' 团队`
    - :orange:`15' 出版`
    - :silver:`12'小经验`


.. container:: notes

   - 










管理?!
========================

.. container:: handout

    |zqeye|


.. class:: takahashi8

    協同


.. container:: notes

   - ?










管!
========================

.. container:: handout

    及时建立沟通渠道! |zqeye|


.. class:: takahashi8

    沟通


.. container:: notes

   - ?










理?
========================

.. container:: handout

    持续的士气激励! |zqeye|


.. class:: takahashi8

    关怀


.. container:: notes

   - ?










有关
========================

.. container:: handout

    团队的唯一成立原因... |zqeye|


.. class:: takahashi7

    <协同>


.. container:: notes

   - ?










工程化组织
========================

.. container:: handout

    将图书的生长作为软件工程来实施... |zqeye|


.. class:: takahashi7

    工件


.. container:: notes

   - ?










水银
====================================

.. container:: handout

   	推荐原因 `PEP 0374 <http://www.python.org/dev/peps/pep-0374/>`__ |zqeye|


.. class:: takahashi7

    .. image:: i/logo/logo-mercurial-200.png
        :align: center
        :scale: 100 %
        :alt: 水银
        :target: http://mercurial.selenic.com/

    .. image:: i/logo/logo-tortoisehg.png
        :align: center
        :scale: 100 %
        :alt: 乌亀水银
        :target: https://bitbucket.org/tortoisehg/stable/wiki/Home


.. container:: notes

    - 稳定
    - 兼容
    - GUI






mailing list
========================

.. container:: handout

    包含一系列文化的优雅沟通... |zqeye|


.. class:: takahashi7

    异步沟通


.. container:: notes

   - ?










团队知识
========================

.. container:: handout

    可持续积累的固定场所... |zqeye|


.. class:: takahashi8

    维基


.. container:: notes

   - ?










`WYSIWYG`_
==============================================================================================

.. container:: handout

    单纯的角色才有助于卓越的成果生产!任何所见即所得的撰写环境都是扯!... |zqeye|


.. class:: takahashi5

    `所想`__

    `即所得`__

__ http://wiki.woodpecker.org.cn/moin/WyTiWyG
__ http://wiki.woodpecker.org.cn/moin/WyTiWyG


.. container:: notes

   - IME
   - OOo zh_openoffice_wel.png
   - Mail
   - IM
   - 网银
   - mov



|logo-rst|
==============================================================================================

.. |logo-rst| image:: i/logo/rst.png
    :align: top
    :scale: 100 %
    :target: http://docutils.sourceforge.net/rst.html


.. container:: handout

    最标准和强大的结构化文本协议!... |zqeye|


.. class:: takahashi7

    .. image:: i/snap/zqtool-rst_853x423_scrot.png
        :align: center
        :scale: 100 %
        :target: #


.. container:: notes

   - IME


|logo_sphinx|
==============================================================================================

.. |logo_sphinx| image:: i/logo/sphinx_barnner.png
    :align: top
    :scale: 100 %
    :target: http://sphinx.pocoo.org

.. container:: handout

    图书/帮助/网站，rST组织/管理/发布工具集... |zqeye|

.. class:: takahashi7

    .. image:: i/snap/zqtool-sphinx_942x520_scrot.png
        :align: center
        :scale: 100 %
        :target: http://zoomquiet.org/w2py_manual_zh/



.. container:: notes

   - IME


|logo_rst2a|
==============================================================================================

.. |logo_rst2a| image:: i/logo/rst2a.gif
    :align: top
    :scale: 100 %
    :target: http://rst2a.com/api/


.. container:: handout

    最标准和强大的结构化文本协议!... |zqeye|


.. class:: takahashi

    在线转换



.. container:: notes

   - IME



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







手工 |S5icon|
==============================================================================================

.. container:: handout

    简洁的幻灯解决方案... |zqeye|


.. class:: takahashi7

    .. image:: i/snap/zq_s5html_scrot.png
        :align: center
        :scale: 100 %
        :target: #


.. container:: notes

   - IME





|logo-rst| 之 `rst2s5 <http://docutils.sourceforge.net/docs/user/slide-shows.html>`__
==============================================================================================

.. container:: handout

    禅样的幻灯解决方案... |zqeye|


.. class:: takahashi7

    .. image:: i/snap/zq_s5rst_scrot.png
        :align: center
        :scale: 100 %
        :target: #


.. container:: notes

   - IME


靠谱原则
========================

.. container:: handout

    权力对等... |zqeye|


.. class:: takahashi9

    `AKA <http://wiki.woodpecker.org.cn/moin/KaoPulity>`_


.. container:: notes

   - ?










品质保证
========================

.. container:: handout

    关键是... |zqeye|


.. class:: takahashi7

    全体拥有


.. container:: notes

   - ?










自动化测试
========================

.. container:: handout

    技术手段是好的... |zqeye|


.. class:: takahashi9

    CI


.. container:: notes

   - ?










经验不一定普适
========================

.. container:: handout

    但是效果应该一致!... |zqeye|


.. class:: takahashi7

    </协同>


.. container:: notes

   - ?










动力保障
========================

.. container:: handout

    工程技术手段之外的... |zqeye|


.. class:: takahashi8

    士气


.. container:: notes

   - ?










鼓励
========================

.. container:: handout

    将图书的生成可视化... |zqeye|


.. class:: takahashi7

    随时展示


.. container:: notes

   - ?










编辑?
========================

.. container:: handout

    心理坐标... |zqeye|


.. class:: takahashi7

    定时器


.. container:: notes

   - ?










提醒?
========================

.. container:: handout

    跟我上 vs 给我上... |zqeye|


.. class:: takahashi7

    带领


.. container:: notes

   - ?










起伏
========================

.. container:: handout

    我们是人... |zqeye|


.. class:: takahashi7

    顺其自然


.. container:: notes

   - ?










心理引导
========================

.. container:: handout

    逐步兑换成义务... |zqeye|


.. class:: takahashi8

    兴趣?


.. container:: notes

   - ?










<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |lovpy|


.. class:: takahashi

    - :gray:`3' 自述`
    - :gray:`15' 团队`
    - :gray:`15' 出版`
    - :orange:`12'小经验`


.. container:: notes

   - feh -FZd -D 3 ./*









GTD
========================

.. container:: handout

    |zqeye|


.. class:: takahashi7

    时间管理


.. container:: notes

   - ?










促成习惯
========================

.. container:: handout

    |zqeye|


.. class:: takahashi7

    定期


.. container:: notes

   - ?










个人知识管理!
==================

.. container:: handout

   从尊重自个儿掌握的知识开始! |zqeye|


.. class:: takahashi7

    `PKM <http://sociallearnlab.org/wiki/index.php?title=PKM&variant=zh-cn>`__

.. container:: notes

   - IME



SNS学习原理:0
=======================

.. container:: handout

   小时的我... |zqeye|


.. class:: takahashi7

    .. image:: i/_know-me.gif
        :align: center
        :scale: 150 %
        :alt: ScrapBook
        :target: http://wiki.woodpecker.org.cn/moin/WeKnow

.. container:: notes

   - IME




SNS学习原理:1
=======================

.. container:: handout

   成长的我... |zqeye|


.. class:: takahashi7

    .. image:: i/_know-me1.gif
        :align: center
        :scale: 150 %
        :alt: ScrapBook
        :target: http://wiki.woodpecker.org.cn/moin/WeKnow

.. container:: notes

   - IME




SNS学习原理:2
=======================

.. container:: handout

   成为一体的大家... |zqeye|


.. class:: takahashi7

    .. image:: i/_know-we.gif
        :align: center
        :scale: 150 %
        :alt: ScrapBook
        :target: http://wiki.woodpecker.org.cn/moin/WeKnow


.. container:: notes

   - IME




SNS学习原理:反証
=======================

.. container:: handout

   向反方向... |zqeye|


.. class:: takahashi7

    .. image:: i/_know-dot.gif
        :align: center
        :scale: 150 %
        :alt: ScrapBook
        :target: http://wiki.woodpecker.org.cn/moin/WeKnow


.. container:: notes

   - IME




总之
=========

.. container:: handout

   期望记住的~单位时间能记住的只有7+-2 个 |zqeye|


.. class:: incremental takahashi

    - 慢慢来;比较快!
    - 知人善用
    - AKA 才靠谱
    - `提问的智慧`_ 
    - 强扭的瓜不甜


.. container:: notes

   - http://fosschef.com/2011/04/one-funny-wallpaper-of-why-linux/









不要争论!
==================

.. container:: handout

   因为... |zqeye|


.. class:: takahashi

    .. image:: i/canot-fight-sability.jpg
        :align: center
        :scale: 90 %
        :target: http://www.70man.com/?p=7462

.. container:: notes

   - 





<discuss/>
==========

.. container:: handout

   |zqeye|


.. class:: takahashi8

    Q&A





.. container:: notes

   - 



最后的最后...
==================

.. container:: handout

   好书推荐... |zqeye|


.. class:: takahashi

    .. image:: i/s4279952-zen4talk.jpg
        :align: center
        :scale: 100 %
        :alt: 讲演之禅
        :target: http://book.douban.com/subject/4760725/

.. container:: notes

   - 





<版本/>
=========

.. container:: handout

   |lovpy|


- 110513 创建幻灯草案
- 110503 博文侠少为 110515 珠三角技术沙龙深圳场 倡议

:反馈:
    `Zoom.Quiet <zoomquiet+sns@gmail.com>`__
:查阅:
    http://zoomquiet.org/res/s5/110515-sz-techparty-booking/




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








