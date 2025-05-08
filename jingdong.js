const body = $response.body;
try {
    let obj = JSON.parse(body);
    
    // 修改 socketmonitor 参数
    if (obj?.data?.JDMessage?.socketmonitor) {
        obj.data.JDMessage.socketmonitor.isSocketEstablishedAhead = 0;
        obj.data.JDMessage.socketmonitor.isSocketReport = 0;
    }
    
    // 关闭 httpdns
    if (obj?.data?.JDHttpToolKit?.httpdns) {
        obj.data.JDHttpToolKit.httpdns.httpdns = 0;
    }
    
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    console.log(`JSON修改失败: ${e}`);
    $done({});
