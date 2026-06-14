/*
[Script]
# 拦截微信农场获取 code 的请求
# 请将此脚本配置为 http-response 或 http-request，
# 在 MITM 设置中确保开启 gate-obt.nqf.qq.com
# QX 专用配置文件名: qq_farm_code.js

# 下面的正则匹配：只要请求域名是 gate-obt.nqf.qq.com 且包含 code=
[rewrite_local]
^https:\/\/gate-obt\.nqf\.qq\.com\/prod\/ws url script-request-header qq_farm_code.js

[mitm]
hostname = gate-obt.nqf.qq.com
*/

const url = $request.url;

if (url.includes("code=")) {
    // 提取 code
    const codeMatch = url.match(/code=([^&]+)/);
    const code = codeMatch ? codeMatch[1] : null;

    if (code) {
        console.log("🎯 成功获取 code: " + code);
        
        // 自动复制到剪贴板
        $persistentStore.write(code, "qq_farm_code");
        $notification.post("QQ农场 Code", "", "已复制: " + code);
        
        // 注意：如果不发送请求，游戏登录会失败。
        // 如果想让游戏正常运行仅复制 code，请注释掉下面这行
        // $done({response: {status: 404}}); 
    }
}

$done({});
