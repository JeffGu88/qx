clubhouse自用规则

两条规则需同时添加搭配使用

Clubhouse.list解决无法使用问题

Clubhouse_IP.list解决进入Room没有声音问题


#[policy]
#策略组
static=Clubhouse, direct, proxy, img-url=https://raw.githubusercontent.com/tengyuankoo/qx/main/Clubhouse.png

#[filter_remote]
#域名规则
https://raw.githubusercontent.com/tengyuankoo/qx/main/Clubhouse.list, tag=Clubhouse, force-policy=Clubhouse, update-interval=86400, opt-parser=false, enabled=true
#IP规则
https://raw.githubusercontent.com/tengyuankoo/qx/main/Clubhouse_IP.list, tag=Clubhouse_IP, force-policy=direct, update-interval=86400, opt-parser=false, enabled=true
