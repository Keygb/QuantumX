let body = $response.body;

body = body.replace(
  /<\/head>/i,
  `<style>
    /* 隐藏广告图片 */
    img[src^="/adcg/"],
    img[src*="mmfree3.com/A_PH/"] {
      display: none !important;
    }

    /* 隐藏包含这些图片的容器 */
    div:has(img[src^="/adcg/"]),
    div:has(img[src*="mmfree3.com/A_PH/"]),
    table:has(img[src^="/adcg/"]),
    a[href*="/adcg/"],
    iframe[src*="/adcg/"] {
      display: none !important;
    }

    /* 精准隐藏常见广告位容器 */
    #ad_right, #ad_left, #ad_top, #ad_bottom,
    .adbox, .adsbygoogle, .banner-ad, .google-auto-placed {
      display: none !important;
    }

    /* 清除可能残留的空白块 */
    div:empty, p:empty, section:empty {
      display: none !important;
    }

    /* 移除多余边距和空白 */
    body {
      margin: 0 !important;
      padding: 0 !important;
    }

    /* 避免误伤主内容区 */
    #videoplayer, .video-js, .main-video, #main {
      display: block !important;
    }
  </style></head>`
);

$done({ body });
