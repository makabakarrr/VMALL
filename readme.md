### 一、项目名称： 华为商城

### 二、项目内容：

1. 商城首页
2. 产品详情页
3. 登录/注册页面 
4. 购物车页面
5. 完成添加购物车功能
6. 其它页面同步购物车的内容
7. 在产品详情页展示浏览记录

参照华为商城官网（https://www.vmall.com/） 基本实现华为商城的页面效果与各项功能。

### 三、项目分工

- 江琴：商城首页
- 陈婷、庄重：产品详情页
- 段步坤：购物车页面布局及功能
- 王耀：登录注册页

### 四、项目书写规范

**1.项目工程文件规范：**

![Image text](https://github.com/xiaofupo/VMALL/blob/master/img/folder.jpg)
![Image text](https://github.com/xiaofupo/VMALL/blob/master/img/img.jpg)
> 图片、css文件、js文件按文件名放置，路径一致方便以后整合。由于图片过多，img文件夹内部如右图所示，按文件名存放各个页面所需的图片。

**2.文件命名：**

- 首页：index.html  
- 产品详情：details.html
- 购物车：shoppingCart.html
- 注册：login.html

> html页面统一文件名，方便各个页面之间通过a标签实现跳转，统一放置于根目录方便统一路径

**3.iconfont存放格式**



> iconfont存放在css文件内部，在css文件内新建存放各页面用到的iconfont文件夹，如：首页用到的iconfont存放于indexIcon文件夹。reset.css为重置样式表。

**4.提交规范**

将代码提交到以页面命名的分支，确认后我会合并到主分支。