// 2025.05.29 18av.mm-cg.com 去广告 JS

let body = $response.body;
const url = $request.url;

// 删除广告图片块（通过 class 名匹配）
body = body.replace(/<div[^>]+class="ad[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');

// 删除底部广告或浮动条
body = body.replace(/<div[^>]*class="float[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');

// 删除 Google Analytics 或统计代码
body = body.replace(/<script[^>]*src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=[^"]*"[^>]*><\/script>[\s\S]*?<script>[\s\S]*?<\/script>/g, '');
body = body.replace(/<script>[\s\S]*?(new Image\(\);.*?)<\/script>/g, '');

// 删除页面中大块推荐、推广类内容
body = body.replace(/<section[^>]*class="recommended[^"]*"[^>]*>[\s\S]*?<\/section>/g, '');
body = body.replace(/<div[^>]+id="ad-top"[^>]*>[\s\S]*?<\/div>/g, '');
body = body.replace(/<div[^>]+id="sponsor"[^>]*>[\s\S]*?<\/div>/g, '');
body = body.replace(/<div[^>]+id="banner"[^>]*>[\s\S]*?<\/div>/g, '');

// 可选：注入 CSS 样式彻底隐藏残留空白
body = body.replace(
  /<head>/,
  `<head><style>
    .ad, .adsbygoogle, #banner, .float, #sponsor, .recommended, .modal, .popup {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  </style>`
);

$done({ body });
