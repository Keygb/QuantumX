let body = $response.body;

body = body.replace('</head>', `
  <style>
    /* 通杀常见广告容器样式 */
    img[src*="A_PH"],
    iframe[src*="adcg"],
    div[class*="ad"],
    div[id*="ad"],
    ins,
    .adsbygoogle {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 0 !important;
    }

    /* 递归上溯，隐藏父容器的间距 */
    div[class*="ad"] * {
      margin: 0 !important;
      padding: 0 !important;
      height: 0 !important;
      line-height: 0 !important;
    }

    /* 全局容器修正（暴力清理可能残留间距） */
    body, html, div, section, article {
      margin: 0 !important;
      padding: 0 !important;
    }
  </style>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const selectors = [
        'img[src*="A_PH"]',
        'iframe[src*="adcg"]',
        'div[class*="ad"]',
        'div[id*="ad"]',
        'ins',
        '.adsbygoogle'
      ];
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          let parent = el.parentElement;
          el.remove();
          // 如果父级只有这个广告，顺带清空父级样式
          if (parent && parent.children.length === 0) {
            parent.style.margin = '0';
            parent.style.padding = '0';
            parent.style.height = '0';
            parent.style.lineHeight = '0';
          }
        });
      });
    });
  </script>
</head>
`);

$done({ body });
