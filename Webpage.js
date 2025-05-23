let url = $request.url;
let url_target = url.match(/(missav|netflav|supjav|njav|javday)/i);
let javbus_target = url.match(/javbus/i);

let body = $response.body;

if (body) {
    const titleRegex = /<\/title>/gi;
    const titleInject = '</title>\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>';

    const bodyRegex = /<\/body>/gi;
    const bodyInject = '<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script></body>';

    if (url_target) {
        body = body.replaceAll(titleRegex, titleInject).replaceAll('window.open', '');
    } else if (javbus_target) {
        body = body.replaceAll(bodyRegex, bodyInject);
    } else {
        body = body.replaceAll(titleRegex, titleInject);
    }

    let headers = $response.headers;
    delete headers['Content-Security-Policy'];
    delete headers['X-Frame-Options'];
    delete headers['Referrer-Policy'];
    headers['Cross-Origin-Embedder-Policy'] = 'unsafe-none';
    headers['Cross-Origin-Opener-Policy'] = 'unsafe-none';
    headers['Cross-Origin-Resource-Policy'] = 'cross-origin';

    $done({ headers, body, url });
}
