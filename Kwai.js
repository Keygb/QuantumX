let body = $response.body;
let obj = JSON.parse(body);

// 删除 reskinConfig
delete obj.reskinConfig;

// 删除 sidebarExSquareStyle.moreList 和 topList
if (obj.sidebarExSquareStyle) {
    delete obj.sidebarExSquareStyle.moreList;
    delete obj.sidebarExSquareStyle.topList;

    // 保留 commonlyUsedList 指定 title
    if (Array.isArray(obj.sidebarExSquareStyle.commonlyUsedList)) {
        const keepTitles = ["设置", "历史记录", "草稿箱", "我的钱包", "小程序", "未成年人模式", "官方客服", "内容偏好", "离线模式", "稍后再看", "举报中心", "挂件"];
        obj.sidebarExSquareStyle.commonlyUsedList = obj.sidebarExSquareStyle.commonlyUsedList.filter(item => keepTitles.includes(item?.title));
    }
}

// 删除 data.banners
if (obj.data) {
    delete obj.data.banners;
}

// feeds 去除包含 ad 字段的项
if (Array.isArray(obj.feeds)) {
    obj.feeds = obj.feeds.filter(item => !item?.ad);
}

// 删除 postRecommends
delete obj.postRecommends;

$done({ body: JSON.stringify(obj) });
