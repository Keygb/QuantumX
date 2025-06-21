var url = $request.url;
var objc = JSON.parse($response.body);
const URL1 = '/vip/info';
const URL2 = '/about';
const URL3 = '/allSubscriptionStatus';
if (url.indexOf(URL1) != -1) {
  objc.data.expire = "2099-09-09T00:00:00+09:00";
  objc.data.status = "ok";
  objc.data.type = "platinum";
  objc.data.vipItem = [
      {
        "status" : "ok",
        "expire" : "2099-09-09T00:00:00+09:00",
        "type" : "regional",
        "description" : "Regional members",
        "surplus_day" : 747364014
      }
    ];
};
if (url.indexOf(URL2) != -1) {
  objc.quota.limit = "10999166278790";
};
if (url.indexOf(URL3) != -1) {
  objc.apple = {"subscribed":true,"purchased":true,"status":"trial","interval":"year","product":"sub.year","past_due_deadline":"","pay_type":"","region":"regional"};
};
$done({body:JSON.stringify(objc)});