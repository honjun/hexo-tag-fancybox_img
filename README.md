# hexo-tag-fancybox_img
Embed fancybox img in Hexo posts/pages [中文文档](https://github.com/honjun/hexo-tag-fancybox_img/blob/master/README-zh_cn.md)

## Syntax:
{% fb_img src [caption] %}

## Usage
In Hexo blog run
```cmd
npm i hexo-tag-fancybox_img --save
```

In Hexo posts/pages
```markdown
{% fb_img src [caption] %}
```

Add latest jQuery and fancyBox files in theme

```html
<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js"></script>
```

## Example: 

{% fb_img https://ws3.sinaimg.cn/large/006bYVyvly1fxxewq3plij30yn0jjkjl.jpg sakura %}

