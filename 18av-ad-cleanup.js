let body = $response.body;

body = body.replace(
  /<\/head>/i,
  `<style>
    /* 隐藏广告图片 */
    img[src*="/adcg/"],
    img[src*="mmfree3.com/A_PH/"] {
      display: none !important;
    }

    /* 隐藏包含广告图的容器 */
    div:has(img[src*="/adcg/"]),
    div:has(img[src*="mmfree3.com/A_PH/"]) {
      display: none !important;
    }

    /* 隐藏典型广告容器 */
    .adsbygoogle, .adbox, .ad, #ad_top, #ad_left, #ad_right, #ad_bottom {
      display: none !important;
    }

    /* 精准隐藏广告 iframe，保留播放器 iframe */
    iframe[src*="ad"],
    iframe[src*="doubleclick"],
    iframe[src*="googlesyndication"],
    iframe[src*="/adcg/"] {
      display: none !important;
    }

    /* 删除非主内容的空div */
    div:empty:not(#videoplayer):not(#main):not(.video-js):not(.main-video) {
      display: none !important;
    }

    /* 重置边距避免空白 */
    body {
      margin: 0 !important;
      padding: 0 !important;
    }

    /* 强制保留播放器 iframe 和容器显示 */
    #videoplayer,
    .main-video,
    iframe[src*="embed"],
    iframe[src*="player"],
    iframe[src*="m3u8"] {
      display: block !important;
      height: auto !important;
      visibility: visible !important;
    }
  </style></head>`
);

$done({ body });
