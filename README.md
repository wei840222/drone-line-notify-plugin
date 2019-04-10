# drone-line-notify-plugin

1. You shoud have a LINE Notify token, see [Doc](https://notify-bot.line.me/zh_TW/) for more information

2. Add following step in your drone pipeline  

```
pipeline:
    line-notify:
        image: wei840222/drone-line-notify-plugin
        access_token: accessToken
```
