// CSS and JS resources for ad removal
const CSS_URL = "https://limbopro.com/CSS/Adblock4limbo.user.css";
const JS_URL = "https://limbopro.com/Adguard/Adblock4limbo.user.js";

// Injection strings for <title> and <body>
const TITLE_INJECTION = `</title>
<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
<script type="text/javascript" async="async" src="${JS_URL}"></script>
`;

const BODY_INJECTION = `
<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
<script type="text/javascript" async="async" src="${JS_URL}"></script>
<script>
document.addEventListener("visibilitychange", e => e.stopImmediatePropagation());
document.addEventListener("blur", e => e.stopImmediatePropagation());
document.addEventListener("pagehide", e => e.stopImmediatePropagation());
Object.defineProperty(document, 'hidden', { value: false });
Object.defineProperty(document, 'visibilityState', { value: 'visible' });
</script></body>
`;

// Regular expressions
const TARGET_SITES_REGEX = /(missav|netflav|supjav|njav|javday|javbus)/i;
const TITLE_REGEX = /<\/title>/i;
const BODY_REGEX = /<\/body>/i;
const WINDOW_OPEN_REGEX = /window\.open/g;

function processResponse() {
    const requestUrl = $request.url;
    let responseBody = $response.body;

    if (!responseBody) {
        console.log("Response body is null or undefined");
        $done({});
        return;
    }

    if (requestUrl.match(TARGET_SITES_REGEX)) {
        responseBody = responseBody
            .replace(TITLE_REGEX, TITLE_INJECTION)
            .replace(WINDOW_OPEN_REGEX, "")
            .replace(BODY_REGEX, BODY_INJECTION);
    }

    $done({ body: responseBody });
}

try {
    processResponse();
} catch (error) {
    console.log(`Error processing response: ${error.message}`);
    $done({});
}
