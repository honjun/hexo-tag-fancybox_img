# hexo-tag-fancybox_img
在Hexo博客文章或者单页面中加入fancybox（简易相册）。[中文文档](https://github.com/honjun/hexo-tag-fancybox_img/blob/master/README-zh_cn.md)

## 语法:
{% fb_img src [caption] %}

## 使用方式
在Hexo博客目录使用npm安装插件
```cmd
npm i hexo-tag-fancybox_img --save
```

在Hexo博客的文章或者单页面中使用以下标签语法插入图片以及描述
```markdown
{% fb_img src [caption] %}
```

在主题文件中引入需要的css和js。一般在主题的head中引入css，footer中引入js.(考虑了很久，是不是要直接插件中渲染加入。一是做法灵活度不好，二是有些主题可能会对js等进行优化打包或者以及集成jquery，所以还是手动引入比较合适）

```html
<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js"></script>
```

## 例子: 

{% fb_img https://ws3.sinaimg.cn/large/006bYVyvly1fxxewq3plij30yn0jjkjl.jpg sakura %}
