


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
         $done({response: {status: 404}}); 
    }
}

$done({});
