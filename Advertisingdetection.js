// 广告请求检测器 by ChatGPT
const url = $request.url.toLowerCase();

// 广告特征关键词，可自行扩展
const adKeywords = [
  'ad', 'ads', 'advert', 'track', 'click', 'log', 'report', 'impr',
  'stat', 'event', 'sdk', 'promotion', 'analytics', 'doubleclick', 'mobads'
];

// 检测是否包含广告关键词
const isAd = adKeywords.some(keyword => url.includes(keyword));

if (isAd) {
  console.log('🚫 [广告嫌疑请求] => ' + $request.method + ' ' + $request.url);
} else {
  console.log('✅ [正常请求] => ' + $request.method + ' ' + $request.url);
}

$done({});
