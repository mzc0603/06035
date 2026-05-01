# 星座运势网站

一个纯前端的星座运势查询网站，采用梦幻星空风格设计，支持手机和电脑自适应显示。

## 功能特点

- **12星座大全** - 包含白羊座、金牛座、双子座、巨蟹座、狮子座、处女座、天秤座、天蝎座、射手座、摩羯座、水瓶座、双鱼座
- **每日运势** - 综合、爱情、事业、财运、健康五大维度运势分析
- **每周运势** - 本周运势总结及每日运势提示
- **性格解析** - 深入分析各星座基本特征、优缺点、情感表达和职场表现
- **星座配对** - 12星座之间的配对指数分析
- **日期查询** - 输入生日日期即可查询对应星座

## 技术特性

- 纯前端实现，无需后端服务器
- 响应式设计，完美适配手机和电脑
- 支持深色/浅色模式切换
- SEO优化，每个星座有独立页面和meta标签
- 生成sitemap.xml便于搜索引擎收录
- 代码结构清晰，易于维护和更新

## 部署说明

### GitHub Pages 部署

1. 将项目推送到GitHub仓库
2. 进入仓库 Settings > Pages
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main" (或您的默认分支)
5. 点击 Save
6. 等待几分钟，您的网站将上线

### 自定义域名（可选）

1. 在域名服务商处添加CNAME记录指向您的GitHub用户名.github.io/仓库名
2. 在项目根目录添加 `CNAME` 文件，内容为您自定义的域名
3. 在GitHub Pages设置中填写自定义域名

## 目录结构

```
/
├── index.html          # 主页面
├── sitemap.xml        # 网站地图
├── robots.txt         # 搜索引擎指令
├── css/
│   ├── style.css      # 主样式文件
│   └── animations.css # 动画样式
├── js/
│   ├── data.js        # 星座数据
│   ├── main.js        # 主逻辑
│   └── zodiac-page.js # 星座页面逻辑
└── pages/
    ├── aries.html     # 白羊座
    ├── taurus.html    # 金牛座
    ├── gemini.html    # 双子座
    ├── cancer.html    # 巨蟹座
    ├── leo.html       # 狮子座
    ├── virgo.html     # 处女座
    ├── libra.html     # 天秤座
    ├── scorpio.html   # 天蝎座
    ├── sagittarius.html # 射手座
    ├── capricorn.html # 摩羯座
    ├── aquarius.html  # 水瓶座
    └── pisces.html    # 双鱼座
```

## 如何更新运势文案

运势数据位于 `js/data.js` 文件中，每个星座包含以下数据：

- `name` - 星座名称
- `emoji` - 星座符号
- `date` - 日期范围
- `element` - 元素属性
- `rulingPlanet` - 守护星
- `personality` - 性格解析
- `dailyFortune` - 每日运势基础数据
- `weeklyFortune` - 每周运势数据
- `compatibility` - 星座配对数据

## 许可证

MIT License
