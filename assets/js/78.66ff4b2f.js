(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{260:function(t,v,_){"use strict";_.r(v);var s=_(6),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"生成-http-请求消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成-http-请求消息"}},[t._v("#")]),t._v(" 生成 HTTP 请求消息")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("输入网址")])]),t._v(" "),_("li",[_("p",[t._v("浏览器解析 URL")])]),t._v(" "),_("li",[_("p",[t._v("生成 HTTP 请求信息")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf1adcbc3b?imageslim",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf46abdd35?imageslim",alt:""}})])]),t._v(" "),_("li",[_("p",[t._v("收到响应")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1**")]),t._v(" "),_("td",[t._v("告知请求的处理进度和情况")])]),t._v(" "),_("tr",[_("td",[t._v("2**")]),t._v(" "),_("td",[t._v("成功")])]),t._v(" "),_("tr",[_("td",[t._v("3**")]),t._v(" "),_("td",[t._v("表示需要进一步操作")])]),t._v(" "),_("tr",[_("td",[t._v("4**")]),t._v(" "),_("td",[t._v("客户端错误")])]),t._v(" "),_("tr",[_("td",[t._v("5**")]),t._v(" "),_("td",[t._v("服务端错误")])])])])])]),t._v(" "),_("h1",{attrs:{id:"向-dns-服务器查询-web-服务器的-ip-地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#向-dns-服务器查询-web-服务器的-ip-地址"}},[t._v("#")]),t._v(" 向 DNS 服务器查询 Web 服务器的 IP 地址")]),t._v(" "),_("ol",[_("li",[t._v("Socket 库提供查询 IP 地址的功能")]),t._v(" "),_("li",[t._v("通过解析器向 DNS 服务器发出查询")])]),t._v(" "),_("h1",{attrs:{id:"全世界-dns-服务器的大接力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全世界-dns-服务器的大接力"}},[t._v("#")]),t._v(" 全世界 DNS 服务器的大接力")]),t._v(" "),_("ol",[_("li",[t._v("寻找相应的 DNS 服务器并获取 IP 地址")]),t._v(" "),_("li",[t._v("通过缓存加快 DNS 服务器的响应")])]),t._v(" "),_("h2",{attrs:{id:"委托协议栈发送消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#委托协议栈发送消息"}},[t._v("#")]),t._v(" 委托协议栈发送消息")]),t._v(" "),_("blockquote",[_("p",[t._v("协议栈通过 TCP 协议收发数据的操作")])]),t._v(" "),_("h3",{attrs:{id:"创建套接字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建套接字"}},[t._v("#")]),t._v(" 创建套接字")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf1a8c3ee1?imageslim",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("浏览器，邮件等一般的应用程序收发数据时用 TCP")]),t._v(" "),_("li",[t._v("DNS 查询等手法较短的控制数据时用 UDP")])]),t._v(" "),_("h3",{attrs:{id:"连接服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接服务器"}},[t._v("#")]),t._v(" 连接服务器")]),t._v(" "),_("blockquote",[_("p",[t._v("浏览器调用 Socket.connect")])]),t._v(" "),_("ul",[_("li",[t._v("在 TCP 模块处创建表示连接控制信息的头部")]),t._v(" "),_("li",[t._v("通过 TCP 头部中的发送方和接收方端口号找到要连接的套接字")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf19074f7d?imageslim",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"收发数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#收发数据"}},[t._v("#")]),t._v(" 收发数据")]),t._v(" "),_("blockquote",[_("p",[t._v("浏览器调用 Socket.write")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("将 HTTP 请求消息交给协议栈")])]),t._v(" "),_("li",[_("p",[t._v("对焦的数据进行拆分，拆分的每一块数据加上 TCP 头，由 IP 模块来发送")])]),t._v(" "),_("li",[_("p",[t._v("使用 ACK 号确认网络包已收到")])]),t._v(" "),_("li",[_("p",[t._v("根据网络包平均往返时间调整 ACK 号等待时间")])]),t._v(" "),_("li",[_("p",[t._v("使用窗口有效管理 ACK 号")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf1b1ee6ed?imageslim",alt:""}})])]),t._v(" "),_("li",[_("p",[t._v("ACK 和窗口合并")])]),t._v(" "),_("li",[_("p",[t._v("接收 HTTP 响应消息")])])]),t._v(" "),_("h3",{attrs:{id:"断开管道并删除套接字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#断开管道并删除套接字"}},[t._v("#")]),t._v(" 断开管道并删除套接字")]),t._v(" "),_("blockquote",[_("p",[t._v("浏览器调用 Socket.close")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("数据发送完毕后断开连接")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf2059a037?imageslim",alt:""}})])]),t._v(" "),_("li",[_("p",[t._v("删除套接字")]),t._v(" "),_("ol",[_("li",[t._v("客户端发送 FIN")]),t._v(" "),_("li",[t._v("服务端返回 ACK 号")]),t._v(" "),_("li",[t._v("服务端发送 FIN")]),t._v(" "),_("li",[t._v("客户端返回 ACK 号")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf517330cb?imageslim",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/23/17240ccf4d6a0a3d?imageslim",alt:""}})])])}),[],!1,null,null,null);v.default=a.exports}}]);