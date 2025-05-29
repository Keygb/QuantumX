let body = $response.body;

body = body.replace('</head>', `
  <style>
    /* 图片类广告 */
    img[src*="A_PH"],
    img[src*="adcg"],
    iframe[src*="adcg"],
    div[id*="ad"],
    div[class*="ad"],
    div[class*="banner"],
    ins,
    .adsbygoogle,
    [id^="ad"],
    [class^="ad"] {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    /* 去除广告占位空间 */
    body > * {
      margin: 0 !important;
      padding: 0 !important;
    }
  </style>
</head>
`);

$done({ body });
