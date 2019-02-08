
/**
* hexo-tag-fancybox_img
* https://github.com/honjun/hexo-tag-fancybox_img.git
* 
/**
* FancyBox tag
*
* Syntax:
*   {% fb_img src, [caption] %}
*
* Example
*   {% fb_img https://ws3.sinaimg.cn/large/006bYVyvly1fxxewq3plij30yn0jjkjl.jpg sakura %}
*/
hexo.extend.tag.register('fb_img', function(args){
  var src = args[0];
  var caption = args[1] || '主人没有描述我哦~';

  return `<a href="${src}" data-fancybox="images" data-caption="${caption}"><img src="${src}" /></a>`;
});
