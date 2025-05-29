let body = $response.body;

// 删除广告图块
body = body.replace(/<div class="di_img">[\s\S]*?<\/div>/g, '');

// 删除 footer
body = body.replace(/<div class="footer">[\s\S]*?<\/div>/g, '');

// 删除 footer 相关脚本
body = body.replace(/<script[^>]*footer_html_font_to_cn\.js[\s\S]*?<\/script>/g, '');

// 删除所有 style="all: initial;" 的 div
body = body.replace(/<div style="all: initial;">[\s\S]*?<\/div>/g, '');

// 可选：去掉所有空白行压缩间距
body = body.replace(/^\s*[\r\n]/gm, '');

$done({ body });
