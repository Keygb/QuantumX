let body = $response.body;

body = body.replace(
  /<\/head>/i,
  `<style>
    /* 1. 隐藏广告图片和外链图 */
    img[src^="/adcg/"],
    img[src*="mmfree3.com/A_PH/"] {
      display: none !important;
    }

    /* 2. 隐藏包含广告图的容器（避免误删播放器） */
    div:has(img[src^="/adcg/"]),
    div:has(img[src*="mmfree3.com/A_PH/"]) {
      display: none !important;
    }

    /* 3. 隐藏典型广告容器 */
    #ad_right, #ad_left, #ad_top, #ad_bottom,
    .adbox, .adsbygoogle, .banner-ad, .google-auto-placed {
      display: none !important;
    }

    /* 4. 删除广告专属 iframe，但保留主播放器 iframe */
    iframe[src*="/adcg/"],
    iframe[src*="doubleclick"] {
      display: none !important;
    }

    /* 5. 仅隐藏无内容又非主播放器的空 div */
    div:not(#videoplayer):not(.video-js):not(#main):empty {
      display: none !important;
    }

    /* 6. 清除冗余 margin/padding，避免页面空白 */
    body {
      margin: 0 !important;
      padding: 0 !important;
    }

    /* 7. 显式保留播放器结构 */
    #videoplayer, .video-js, #main, .main-video {
      display: block !important;
      visibility: visible !important;
    }
  </style></head>`
);

$done({ body });
