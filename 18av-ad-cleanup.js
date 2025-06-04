let body = $response.body;

body = body.replace(
  /<\/head>/i,
  `<style>
    /* 1. 隐藏所有广告图像 */
    img[src*="/adcg/"],
    img[src*="mmfree3.com/A_PH/"] {
      display: none !important;
    }

    /* 2. 隐藏含广告图的容器（但避免误删主视频播放器） */
    div:has(img[src*="/adcg/"]),
    div:has(img[src*="mmfree3.com/A_PH/"]) {
      display: none !important;
    }

    /* 3. 精准隐藏广告 iframe，但保留主 iframe 播放器 */
    iframe[src*="ad"],
    iframe[src*="doubleclick"],
    iframe[src*="googlesyndication"],
    iframe[src*="mmfree3.com"] {
      display: none !important;
    }

    /* 4. 清除广告区域容器 */
    .adbox, .adsbygoogle, .banner-ad, #ad_top, #ad_bottom, #ad_left, #ad_right {
      display: none !important;
    }

    /* 5. 删除非关键空 div，保留播放器相关 id/class */
    div:empty:not(#videoplayer):not(#main):not(.video-js) {
      display: none !important;
    }

    /* 6. 重置 body 样式避免因广告占位导致页面错乱 */
    body {
      margin: 0 !important;
      padding: 0 !important;
    }

    /* 7. 保证播放器显示 */
    #videoplayer,
    .video-js,
    #main,
    .main-video,
    iframe[src*="player"],
    iframe[src*="m3u8"],
    iframe[src*="embed"] {
      display: block !important;
      visibility: visible !important;
      height: auto !important;
    }
  </style></head>`
);

$done({ body });
