// 18av.mm-cg.com 强化广告移除（v2）
let body = $response.body;
const url = $request.url;

// 删除典型广告区块（含 class 和 id）
const blockRules = [
  /<div[^>]+class="sponsor"[\s\S]*?<\/div>/g,
  /<div[^>]+class="adsbygoogle"[\s\S]*?<\/div>/g,
  /<div[^>]+id="ad-top"[\s\S]*?<\/div>/g,
  /<div[^>]+id="banner"[\s\S]*?<\/div>/g,
  /<iframe[^>]*src="[^"]*ads[^"]*"[^>]*>[\s\S]*?<\/iframe>/g,
  /<script[^>]+src="[^"]*googletagmanager[^"]*"[^>]*><\/script>[\s\S]*?<script>[\s\S]*?<\/script>/g,
  /<script>[\s\S]*?(new Image\(\);.*?)<\/script>/g
];

blockRules.forEach(rule => {
  body = body.replace(rule, '');
});

// 注入 CSS 进一步压缩间距
body = body.replace('</head>', `<style>
  .sponsor, .adsbygoogle, #ad-top, #banner, iframe[src*="ads"], .float-ad {
    display: none !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }
</style></head>`);

$done({ body });
