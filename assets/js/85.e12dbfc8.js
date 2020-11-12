(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{267:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"seo-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seo-优化"}},[t._v("#")]),t._v(" SEO 优化")]),t._v(" "),s("h2",{attrs:{id:"搜索引擎的工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索引擎的工作原理"}},[t._v("#")]),t._v(" 搜索引擎的工作原理")]),t._v(" "),s("blockquote",[s("p",[t._v("搜索引擎网站的后台会有一个非常庞大的数据库，里面存储了海量的关键词，而每个关键词有对应着很多网址，这些网址是被称之为“搜索引擎蜘蛛”或“网络爬虫”程序从互联网上收集而来的。")])]),t._v(" "),s("p",[t._v("这些“爬虫”在互联网上爬行，从一个链接到另一个链接，对内容进行分析，提炼关键词加入数据库中；如果爬虫认为是垃圾或重复信息，就会跳过继续爬行。当用户进行搜索时，就能检索出与关键词相关的网址显示给用户看。")]),t._v(" "),s("p",[t._v("当用户在搜索引擎搜索时，比如搜索“前端”，则挑出所有含有“前端”二字关键字的网页，然后根据特定算法给每个含有“前端”二字的网页一个评分进行排序后返回搜索结果。而这些包含“前端”的内容，可能是文章标题、描述、关键字、内容甚至可以是链接。当然，也有可能是广告优先置顶。")]),t._v(" "),s("blockquote",[s("p",[t._v("一个关键词对应多个网址，因此出现了排序问题，相应的当与关键词最吻合的网址就会排在前面。在“爬虫“抓取网页内容的时候，“爬虫”不一定能看懂网页的内容，同样的如果内容能被“爬虫”看懂，那么搜索引擎就会提高该网站的权重，增加对该网站的友好度。这个过程就叫做搜索引擎优化（seo优化）。")])]),t._v(" "),s("h2",{attrs:{id:"seo-目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seo-目的"}},[t._v("#")]),t._v(" SEO 目的")]),t._v(" "),s("p",[t._v("让网站更利于个大搜索引擎抓取和收录，增加对搜索引擎的友好度，使得用户在搜索对应关键词时网站能排在前面，增加产品的曝光率和流量。")]),t._v(" "),s("h2",{attrs:{id:"seo-优化方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seo-优化方式"}},[t._v("#")]),t._v(" SEO 优化方式")]),t._v(" "),s("p",[t._v("这里主要讲前端能参与做的优化方式。比如很多优化方式中都有介绍：控制首页链接数量，扁平化目录层级，优化网站结构布局，分页导航写法这些，但实际上，日常前端开发也充当不了网站整体设计的角色，只能是协调，这些大部分都是一开始就规定好的东西。")]),t._v(" "),s("p",[t._v("比如新闻媒体类等网站比较重视 SEO 的，通常公司还会设有 SEO 部门或者 SEO 优化工程师，像上面说的，还有网页关键词、描述的就交给他们参与和提供，有些优化方式我们难以触及的就不细谈，有兴趣的自己了解。")]),t._v(" "),s("h3",{attrs:{id:"网页-tdk-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页-tdk-标签"}},[t._v("#")]),t._v(" 网页 TDK 标签")]),t._v(" "),s("ul",[s("li",[t._v("title：当前页面的标题（强调重点即可，每个页面的 title 尽可能不要相同）")]),t._v(" "),s("li",[t._v("description：当前页面的描述（列举几个关键词即可，不要过分堆积）")]),t._v(" "),s("li",[t._v("keywords：当前页面的关键词（高度概括页面内容）")])]),t._v(" "),s("p",[t._v("每个页面的 TDK 都不一样，需要根据具体的业务进行提炼。")]),t._v(" "),s("p",[t._v("在 Next.js 中有单独的 Head 组件，只需要单独配置即可。")]),t._v(" "),s("h3",{attrs:{id:"语义化标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语义化标签"}},[t._v("#")]),t._v(" 语义化标签")]),t._v(" "),s("p",[t._v("根据内容的结构化，选择合适的 HTML5 标签尽量让其语义化，如使用 header、footer、section、aside、article、nav 等语义化标签可以让搜索引擎爬虫更好地解析。")]),t._v(" "),s("h3",{attrs:{id:"合理使用标题标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合理使用标题标签"}},[t._v("#")]),t._v(" 合理使用标题标签")]),t._v(" "),s("p",[t._v("一个页面最多只能出现一次 h1 标签，h2 标签通常作为二级标题或文章的小标题。其余的 h3 ～ h6 标签如要使用，应当按照顺序层层嵌套下去，不可以断层或反序。")]),t._v(" "),s("p",[t._v("比如通常在首页的 logo 上加 h1 标签，但网站的设计只展示 logo 无文字的情况下，h1 的文字就可以设置 "),s("code",[t._v("font-size: 0")]),t._v(" 来隐藏。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("logo.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jacky"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jacky的个人博客"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"图片的-alt-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片的-alt-属性"}},[t._v("#")]),t._v(" 图片的 alt 属性")]),t._v(" "),s("p",[t._v("一般来说，除非图片仅仅是纯展示类没有任何实际信息的话，alt 属性可以为空，否则使用 img 标签时都应该加上 alt 属性，使得“爬虫”可以抓取图片的信息。当网络加载不出来或者图片地址失效的时候，alt 属性的内容才会代替图片呈现出来。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dog.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("300"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("哈士奇"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h3",{attrs:{id:"a-标签的-title-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-标签的-title-属性"}},[t._v("#")]),t._v(" a 标签的 title 属性")]),t._v(" "),s("p",[t._v("同理，a 标签的 title 属性其实就是提示文字作用，当鼠标移动到该超链接时，就会有提示文字出现，这也有微小的作用。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://github.com/Jacky-Summer/personal-blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("了解更多关于Jacky的个人博客"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("了解更多"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_404页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_404页面"}},[t._v("#")]),t._v(" 404页面")]),t._v(" "),s("p",[t._v("404页面首先是用户体验良好，不会莫名报一些其他错误。其次对爬虫也友好，不会因为页面错误而停止抓取，可以返回抓取网站其他页面。")]),t._v(" "),s("h3",{attrs:{id:"nofollow-忽略追踪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nofollow-忽略追踪"}},[t._v("#")]),t._v(" nofollow 忽略追踪")]),t._v(" "),s("p",[t._v("nofollow 有两种用法：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用于 meta 元标签，告诉爬虫该页面上所有链接都无需追踪。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("robots"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nofollow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("用于 a 标签，告诉爬虫该页面无需追踪")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.xxxx?login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nofollow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("登录/注册"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("通常在 a 标签上用的比较多，主要有三个作用：")]),t._v(" "),s("ol",[s("li",[t._v("“爬虫”分配到每个页面的权重是一定的，为了集中网页权重，所以无需把权重分配给一些无关链接；")]),t._v(" "),s("li",[t._v("付费链接：为了防止付费链接影响搜索结果，搜索引擎建议对付费链接使用 nofollow 属性；")]),t._v(" "),s("li",[t._v("防止不可信内容：最常见的是博客上的垃圾浏览与评论为了获取外链的垃圾链接，为了防止页面指向一些垃圾页面和站点。")])]),t._v(" "),s("h3",{attrs:{id:"建立-robots-txt-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立-robots-txt-文件"}},[t._v("#")]),t._v(" 建立 robots.txt 文件")]),t._v(" "),s("blockquote",[s("p",[t._v("robots.txt 文件由一条或多条规则组成。每条规则可禁止（或允许）特定抓取工具抓取相应网站中的指定文件路径。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("User-agent: *\nDisallow:/admin/\nSiteMap: http://www.xxxx.com/sitemap.xml\n复制代码\n")])])]),s("p",[t._v("关键词：")]),t._v(" "),s("ol",[s("li",[t._v("User-agent 表示网页抓取工具的名称")]),t._v(" "),s("li",[t._v("Disallow 表示不应抓取的目录或网页")]),t._v(" "),s("li",[t._v("Allow 应抓取的目录或网页")]),t._v(" "),s("li",[t._v("Sitemap 网站的站点地图的位置")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("User-agent: *")]),t._v("表示对所有的搜索引擎有效")]),t._v(" "),s("li",[s("code",[t._v("User-agent: Baiduspider")]),t._v(" 表示百度搜索引擎，还有谷歌 Googlebot 等等搜索引擎名称，通过这些可以设置不同搜索引擎访问的内容")])]),t._v(" "),s("p",[t._v("robots 文件是搜索引擎访问网站时第一个访问的，然后根据文件里面设置的规则，进行网站内容的爬取。通过设置 "),s("code",[t._v("Allow")]),t._v(" 和 "),s("code",[t._v("Disallow")]),t._v(" 访问目录和文件，引导爬虫抓取网站的信息。")]),t._v(" "),s("p",[t._v("它主要用于使你的网站避免收到过多请求，告诉搜索引擎应该与不应抓取哪些页面。如果你不希望网站的某些页面被抓取，这些页面可能对用户无用，就通过 "),s("code",[t._v("Disallow")]),t._v(" 设置。实现定向 SEO 优化，曝光有用的链接给爬虫，将敏感无用的文件保护起来。")]),t._v(" "),s("p",[t._v("即使网站上面所有内容都希望被搜索引擎抓取到，也要设置一个空的 robot 文件。因为当蜘蛛抓取网站内容时，第一个抓取的文件 robot 文件，如果该文件不存在，那么蜘蛛访问时，服务器上就会有一条 404 的错误日志，多个搜索引擎抓取页面信息时，就会产生多个的 404 错误，故一般都要创建一个 robots.txt 文件到网站根目录下。")]),t._v(" "),s("h3",{attrs:{id:"建立网站地图-sitemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立网站地图-sitemap"}},[t._v("#")]),t._v(" 建立网站地图 sitemap")]),t._v(" "),s("p",[t._v("当网站刚刚上线的时候，连往该网站的外部链接并不多，爬虫可能找不到这些网站；或者该网站的页面之间没有较好的衔接关系，爬虫容易漏掉部分页面。这时候，sitemap 就派上用场了。")]),t._v(" "),s("p",[t._v("sitemap 是一个将网站栏目和连接归类的一个文件，让搜索引擎全面收录站点网页地址，了解站点地址的权重分布以及站点内容更新情况， 提高爬虫的爬去效率。sitemap 文件包含的网址不可以超过5万个，且文件可得超过10Mb。")]),t._v(" "),s("p",[t._v("sitemap 地图文件包含 html（针对用户）和 xml（针对搜索引擎）两种，最常见的就是 xml 文件。XML 格式的 sitemap 一共用到 6 个标签，其中关键标签包括链接地址（loc）、更新时间（lastmod）、更新频率（changefreq）和索引优先权（priority）。")])])}),[],!1,null,null,null);a.default=e.exports}}]);