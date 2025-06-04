let body = $response.body;

body = body.replace(
  /<\/head>/i,
  `<style>
    /* 精确隐藏广告图（仅限 /adcg/ 广告目录） */
    img[src^="/adcg/"],
    img[src*="mmfree3.com/A_PH/"] {
      display: none !important;
    }

    /* 只隐藏典型广告块容器，保留播放页结构 */
    div#ad_right,  /* 右侧广告 */
    div#ad_left,   /* 左侧广告 */
    div#ad_top,    /* 顶部广告 */
    div#ad_bottom, /* 底部广告 */
    iframe[src*="/adcg/"],
    table:has(img[src^="/adcg/"]),
    a[href*="/adcg/"] {
      display: none !important;
    }
  </style></head>`
);

$done({ body });
