// 精简 body
let body = $response.body;

// 1. 隐藏不必要的顶部导航及广告（如之前）
body = body.replace(/<div class='htmleaf-container'>[\s\S]*?<ul class='animenu__nav'>/, '<div style="display:none;">已隐藏顶部</div><ul class="animenu__nav">')
  .replace(/<li class='animenu__nav_transparent'>[\s\S]*?<\/ul>\s*<\/li>/g, '')
  .replace(/<li>\s*<a[^>]+裸聊[\s\S]*?<\/li>/g, '')
  .replace(/<li>\s*<a[^>]+影城[\s\S]*?<\/li>/g, '')
  .replace(/<li class='animenu__nav_transparent'>\s*<a[^>]+91[\s\S]*?<\/ul>\s*<\/li>/g, '');

// 2. 压缩 .main 区域上下间距及内边距
body = body.replace(/<div class='main'[^>]*>/, `<div class='main' style="margin-top:5px; margin-bottom:5px; padding:4px 2px;">`);

// 3. 去掉搜索栏类目下拉菜单
body = body.replace(/<ul class='sun_input_group__child'>[\s\S]*?<\/ul>/, '');

// 4. 注入更紧凑的 CSS 样式，尽量减少所有 margin、padding、line-height
body = body.replace(
  '</head>',
  `<style>
    body, html { margin:0; padding:0; }
    .main { 
      margin:0 !important; 
      padding: 4px 2px !important; 
      line-height:1.2 !important; 
      font-size:14px !important; 
    }
    .sun-search_input_group { padding: 2px 0 !important; }
    .sun_input_group_btn, .sun_input_group_dropdown { display:none !important; }
    ul, li { margin:0; padding:0; list-style:none; }
    p, div, span { margin:0; padding:0; }
  </style></head>`
);

$done({ body });
