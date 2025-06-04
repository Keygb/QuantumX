let body = $response.body;

body = body.replace(
  /<\/head>/i,
  `<style>
    /* 隐藏被拦截广告图的占位容器 */
    img[src*="/adcg/"],
    img[src*="mmfree3.com/A_PH/"] {
      display: none !important;
    }

    div:has(img[src*="/adcg/"]),
    div:has(img[src*="mmfree3.com/A_PH/"]),
    a:has(img[src*="/adcg/"]),
    a:has(img[src*="mmfree3.com/A_PH/"]),
    table:has(img[src*="/adcg/"]),
    table:has(img[src*="mmfree3.com/A_PH/"]),
    iframe[src*="/adcg/"] {
      display: none !important;
    }
  </style></head>`
);

$done({ body });
