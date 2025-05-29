let body = $response.body;

// 删除广告图块
body = body.replace(/<div class="di_img">[\s\S]*?<\/div>/g, '');

// 删除 footer
body = body.replace(/<div class="footer">[\s\S]*?<\/div>/g, '');

// 删除 footer 的 js
body = body.replace(/<script[^>]*footer_html_font_to_cn\.js[\s\S]*?<\/script>/g, '');

// 删除所有 style="all: initial;" 的 div
body = body.replace(/<div style="all: initial;">[\s\S]*?<\/div>/g, '');

// 移除空白段落/空的 <p> 标签（页面压缩关键）
body = body.replace(/<p>\s*<\/p>/g, '');
body = body.replace(/<br\s*\/?>/g, ''); // 移除 <br> 换行
body = body.replace(/\n{2,}/g, '\n');   // 连续换行压缩成一行

// 精简 .main 内部布局样式（只在结构中调整）
body = body.replace(/<div class="main">/, '<div class="main" style="margin:0;padding:0;">');

// 可选：压缩整个 body 的顶部和底部空隙
body = body.replace(/<body>/, '<body style="margin:0;padding:0;">');

$done({ body });
