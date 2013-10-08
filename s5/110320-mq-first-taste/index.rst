.. include:: <s5defs.txt>

==================================================================
MQ初品
==================================================================

～用消息来解耦I/O延迟 (powered by rst2S5)

:Authors: `Zoom.Quiet <zoomquiet+sns@gmail.com>`__
:URL:    http://zoomquiet.org/res/s5/110320-mq-first-taste/

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

.. |lr_s5| image:: i/levelradar_s5.png
    :scale: 100 %

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



<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :orange:`5' 背景故事`
    - :silver:`10' 演变和解决`
    - :silver:`10' 清点回顾`
    - :silver:`5'自由沟通`


.. container:: notes

   - 










背景
=========

.. container:: handout

   已经有了... |zqeye|


.. class:: takahashi9

    SSO


.. container:: notes

   - 










需求
=========

.. container:: handout

   问题是... |zqeye|


.. class:: takahashi

    口令管理


.. container:: notes

   - 










LDAP
=========

.. container:: handout

   问题是... |zqeye|


.. class:: takahashi8

    .. image:: i/logo/LDAPworm.gif
        :align: center
        :scale: 150 %
        :target: http://www.openldap.org/


.. container:: notes

   - 










选择
=========

.. container:: handout

   这货忒复杂! |zqeye|


.. class:: takahashi8

    .. image:: i/logo/gosa-logo.png
        :align: center
        :scale: 200 %
        :target: https://oss.gonicus.de/labs/gosa/


.. container:: notes

   - 










选择
=========

.. container:: handout

   这货忒依赖! |zqeye|


.. class:: takahashi8

    .. image:: i/snap/chpasswd-2011-03-18_688x420_scrot.png
        :align: center
        :scale: 100 %
        :target: #


.. container:: notes

   - 










本质上
=========

.. container:: handout

   也就3个命令 |zqeye|


.. class:: takahashi8

    .. image:: i/map/ldap-acl-cil.png
        :align: center
        :scale: 200 %
        :target: #


.. container:: notes

   - 










作出來
=========

.. container:: handout

   就复杂了 |zqeye|


.. class:: takahashi8

    .. image:: i/map/ldap-acl-web.png
        :align: center
        :scale: 200 %
        :target: #


.. container:: notes

   - 










问题
=========

.. container:: handout

   等待 |zqeye|


.. class:: takahashi8

    SMTP


.. container:: notes

   - 










<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :gray:`5' 背景故事`
    - :orange:`10' 演变和解决`
    - :silver:`10' 清点回顾`
    - :silver:`5'自由沟通`


.. container:: notes

   - 










尝试
=========

.. container:: handout

   没整成... |zqeye|


.. class:: takahashi8

    线程


.. container:: notes

   - 










消息吧
=========

.. container:: handout

   立即的... |zqeye|


.. class:: takahashi8

    `MQ <http://www.rockstarprogrammer.org/post/2008/oct/04/what-matters-asynchronous-job-queue/>`__


.. container:: notes

   - 











什么?
=========

.. container:: handout

   当然的... |zqeye|


.. class:: takahashi8

    .. image:: i/foto/MaggiQ.jpg
        :align: center
        :scale: 100 %
        :target: http://www.verycd.com/entries/506739/


.. container:: notes

   - 










理解
=========

.. container:: handout

   先进先出... |zqeye|


.. class:: takahashi10

    队列


.. container:: notes

   - 













选择
=========

.. container:: handout

   豆聊... |zqeye|


.. class:: takahashi4

    `beanstalkd <https://github.com/kr/beanstalkd/wiki/client-libraries>`__


.. container:: notes

   - 



业务流程
=========

.. container:: handout

   加入MQ... |zqeye|


.. class:: takahashi8

    .. image:: i/map/mq-reset-flow_wsd-napkin.png
        :align: center
        :scale: 120 %
        :target: #


.. container:: notes

   - 










植入
==================

.. container:: handout

   最终版本的消息抛出... |zqeye|


.. code-block:: python

    def __zqecho(logtype,matter):
        beanstalk = beanstalkc.Connection(host='127.0.0.1', port=11300,parse_yaml=True)
        beanstalk.use(logtype)
        beanstalk.put(matter)
        beanstalk.close()
        return


.. container:: notes

   - swallower.py





e.g 首页
==================

.. container:: handout

   测试业务日志.. |zqeye|


.. code-block:: python

    @route('%s/'%ini.urlprefix)
    def index():
        __urlog("INFO","idx++")
        return template('index.tpl',urlprefix=ini.urlprefix)


.. container:: notes

   - swallower.py





e.g __urlog
==================

.. container:: handout

   日志消息丢出器.. |zqeye|


.. code-block:: python

    def __urlog(level,msg):
        urlmsg = "%.4f|%s|%s"%(time.time(),level,msg)
        __zqecho("LOG"
            ,base64.urlsafe_b64encode(urlmsg)
            )


.. container:: notes

   - swallower.py





swallower.py
==================

.. container:: handout

   吞食者... |zqeye|


.. code-block:: python

    while True:
        job = beanstalk.reserve()
        if "LOG" == job.stats()['tube']:
            __rlog(beanstalk,job)
        elif "MAIL" == job.stats()['tube']:
            __mail(beanstalk,job)


.. container:: notes

   - swallower.py





__mail()
==================

.. container:: handout

   在用的邮件书记員... |zqeye|


.. code-block:: python

    def __mail(beanstalk,job):
        body = base64.urlsafe_b64decode(job.body)
        minfo = eval(body)
        if 'local' == minfo['smtp_type']:
            from plugins.smtploc import mail
        eles:
            from plugins.smtpgml import mail
        job.delete()


.. container:: notes

   - swallower.py





<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :gray:`5' 背景故事`
    - :gray:`10' 演变和解决`
    - :orange:`10' 清点回顾`
    - :silver:`5'自由沟通`


.. container:: notes

   - 










时间消耗:初期
==================

.. container:: handout

   集中力哪! |zqeye|


.. class:: takahashi

    .. class:: incremental

    - 5.0D 决策重作轮子
    - 1.0H Bottle 学习
    - 0.5H 核心命令测试
    - 2.0H 本地环境准备
    - 2.5H 完成基本网站


.. container:: notes

   - 





时间消耗:引入MQ
==================

.. container:: handout

   集中力哪! |zqeye|


.. class:: takahashi

    .. class:: incremental

    - 25' 决策上MQ
    - 1.0H Beanstalkd 学习
    - 1.5H 引入MQ
    - 2.0H 本地开发测试
    - 4.0H 生产环境部署


.. container:: notes

   - 





时间消耗:重构
==================

.. container:: handout

   集中力哪! |zqeye|


.. class:: takahashi

    .. class:: incremental

    - 5次重构
    - 平均每次 1.0H
    - 平均每次中断 3次
    - 平均每次全情投入 <15'


.. container:: notes

   - 





配置
==================

.. container:: handout

   .ini;.py;内置字典;YAML;... |zqeye|


.. code-block:: python

    class Borg():
        __collective_mind = {}
        def __init__(self):
            self.__dict__ = self.__collective_mind
        # ...< <configures> >
    ini = Borg()


.. container:: notes

   - 





过期
==================

.. container:: handout

   BDB很爽的NoSQL... |zqeye|


.. code-block:: python

        #... overdue     = 73728
        hashed = db[linkback].split(",")
        if ini.overdue < int(time.time())-int(hashed[0]):
            __redirect("Overdue",ini.msgTPLoverdue)
        # else: ...


.. container:: notes

   - 





配合的
==================

.. container:: handout

   BDB很爽的NoSQL... |zqeye|


.. code-block:: python

    def __bdburl(mailink):
        db = bdb.btopen(ini.todaydb, 'c')
        urlink = "%s,%s"%(int(time.time()),mailink)
        urlkey = hashlib.sha224(urlink).hexdigest()
        db[urlkey] = urlink
        return urlkey


.. container:: notes

   - 





Supervisor
==================

.. container:: handout

   好用的进程远程管理服务... |zqeye|


.. class:: takahashi

    .. image:: i/snap/supervisor-2011-03-19_817x289_scrot.png
        :align: center
        :scale: 120 %
        :alt: supervisord
        :target: http://supervisord.org/

.. container:: notes

   - 





Bottle的模板
==================

.. container:: handout

   简洁,有包含,可用!... |zqeye|


.. code-block:: html

    %include header title='notify@ '

    <h2>== notify @ <a href="{{urlprefix}}/">
        lpasswd.py</a> ==</h2>
    <p>{{alert}}::</p>

    %include footer4notify


.. container:: notes

   - 





TODO
==================

.. container:: handout

   集中力哪! |zqeye|


.. class:: takahashi

    .. class:: incremental

    - 消费者单点
    - 远程消息
    - 消息集中统计
    - 任务消息持久化


.. container:: notes

   - 





<brief/>
=========

.. container:: handout

   简单想,简单试,简单用... |zqeye|


.. class:: takahashi

    - :gray:`5' 背景故事`
    - :gray:`10' 演变和解决`
    - :gray:`10' 清点回顾`
    - :orange:`5'自由沟通`


.. container:: notes

   - 









总之
=========

.. container:: handout

   期望记住的~单位时间能记住的只有7+-2 个 |zqeye|


.. class:: incremental takahashi

    * MQ应该简单用
    * 解耦I/O依赖得业务重构
    * 调试很烦 ;-(
    * 不要用 Ubuntu One 作工作备份
    * `ZqLogging <https://bitbucket.org/ZoomQuiet/zqlogging/src>`__ 发布

.. container:: notes

   - 








<discuss/>
==========

.. container:: handout

   |zqeye|


.. class:: takahashi8

    Q&A



.. class:: takahashi0

    ...

    http://zoomquiet.org/res/s5/110311-why-km



.. container:: notes

   - 



最后...
==================

.. container:: handout

   好书推荐... |zqeye|


.. class:: takahashi

    .. image:: i/s4599081-pomodoro.jpg
        :align: center
        :scale: 100 %
        :alt: 番茄工作法图解
        :target: http://book.douban.com/subject/5916234/

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

   |zqeye|


- 110320 增补BDB感觉
- 110319 增补代码分享
- 110318 增补dot图谱
- 110317 增补MaggiQ 照片
- 110315 为珠三角技术沙龙创建


:反馈:
    Zoom.Quiet@gmail.com
:查阅:
    http://zoomquiet.org/res/s5/110320-mq-first-taste/


`S5 <http://www.meyerweb.com/eric/tools/s5/>`__
==============================================================================================

.. container:: handout

    纯HTML 幻灯撰写框架!... |lr_s5| 


- S\ :sup:`5`\ == a :orange:`S` imple :orange:`S` tandards-Based :orange:`S` lide :orange:`S` how :orange:`S` ystem 

 - 仅仅依靠 CSS+JS 的HTML格式幻灯演示框架

- 我的编辑环境: |LeoProse| ~ `文学化编辑器 <http://en.wikipedia.org/wiki/Literate_programming>`__


.. image:: pix/2010-01-18-230729_605x421_leo.png
    :align: center
    :scale: 100 %
    :target: http://wiki.woodpecker.org.cn/moin/LeoEnvironment



.. container:: notes

   - 



<Zoom.Quiet/>
==================

.. container:: handout

 本命+1,有娃没车,长年大妈  |zqeye|


.. class:: takahashi

    .. image:: i/foto/niuniu-110316.jpeg
        :align: center
        :scale: 100 %
        :alt: 是也乎,是也乎




