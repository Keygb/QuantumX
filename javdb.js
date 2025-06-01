const url = $request.url;
let header = $request.headers;

if (url.includes("/api/v1/movies/") && url.includes("/play?")) {
  header.authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MzE4OTE0NSwidXNlcm5hbWUiOiJjaHhtMTAyNSJ9.9biip2hb60jXeakBMbnP-5QiLyycLj9s7dpHyXNUp7E"
  $done({ headers: header });
} else {
  $done({});
}
//
if (!/html>/.test($response.body)) $done({});

// 去顶部域名,底部下载提醒,播放页广告
const body = $response.body.replace(
  /<\/head>/,
  "<style> .sub-header, .app-desktop-banner, .moj-content {display:none!important;} </style> \n </head>"
);

$done({ body });
