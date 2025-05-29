if ($response.body) {
  let body = $response.body;

  // 注入一段 <style> 样式，强制压缩 main 区域间距
  const compressStyle = `
    <style>
      .main {
        padding: 0 !important;
        margin: 0 !important;
        line-height: 1.2 !important;
      }
      .main * {
        margin: 0 !important;
        padding: 0 !important;
      }
      p, br {
        display: none !important;
      }
    </style>
  `;

  // 把 <style> 插入到 </head> 前（如果 head 存在）
  body = body.replace('</head>', compressStyle + '</head>');

  $done({ body });
} else {
  $done({});
}
