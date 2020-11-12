(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{255:function(t,v,_){"use strict";_.r(v);var s=_(6),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-协议相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-协议相关"}},[t._v("#")]),t._v(" HTTP 协议相关")]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP（Hyper Text Transfer Protocol）超文本协议的缩写，是一个用于从 WWW 服务器传输超文本到本地浏览器的传输协议。HTTP 是一个应用层协议，有请求和相应构成，是一个标准的客户端和服务器模型")]),t._v(" "),_("p",[t._v("特点：")]),t._v(" "),_("ul",[_("li",[t._v("基于请求/响应模型的协议")]),t._v(" "),_("li",[t._v("简单快速")]),t._v(" "),_("li",[t._v("灵活")]),t._v(" "),_("li",[t._v("无连接")]),t._v(" "),_("li",[t._v("无状态")])])]),t._v(" "),_("h2",{attrs:{id:"http-报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-报文"}},[t._v("#")]),t._v(" HTTP 报文")]),t._v(" "),_("h3",{attrs:{id:"请求报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[t._v("#")]),t._v(" 请求报文")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/31/16f5b1adba0c553c?imageslim",alt:"请求报文"}})]),t._v(" "),_("h3",{attrs:{id:"响应报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[t._v("#")]),t._v(" 响应报文")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/31/16f5b1a90ff07fbb?imageslim",alt:"响应报文"}})]),t._v(" "),_("h2",{attrs:{id:"http-方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-方法"}},[t._v("#")]),t._v(" HTTP 方法")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("GET")])]),t._v(" "),_("p",[t._v("请求指定的页面信息，并返回实体主体")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("HEAD")])]),t._v(" "),_("p",[t._v("类似于 get 请求，只不过返回的响应中没有具体的内容，用于获取报文头部")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("POST")])]),t._v(" "),_("p",[t._v("想指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("PUT")])]),t._v(" "),_("p",[t._v("从客户端想服务器传送的数据取代指定的文档内容")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("DELETE")])]),t._v(" "),_("p",[t._v("请求服务器删除指定的页面")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("CONNECT")])]),t._v(" "),_("p",[t._v("HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("OPTIONS")])]),t._v(" "),_("p",[t._v("允许客户端查看服务器性能")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("TRACE")])]),t._v(" "),_("p",[t._v("会先服务器收到的请求，主要用于测试或诊断")])])]),t._v(" "),_("blockquote",[_("p",[t._v("get 和 post 的区别")]),t._v(" "),_("ol",[_("li",[t._v("get 请求会被浏览器主动 cache；post 则需要手动设置")]),t._v(" "),_("li",[t._v("get 请求把请求参数放在 url 上，即 HTTP 协议头；post 把参数放在 HTTP 包体内")]),t._v(" "),_("li",[t._v("get 请求传输数据量小，一般限制在 2KB 左右，但是执行效率高；post 请求传输数据比较大（IIS4 80KB，IIS5100KB），执行效率稍低")]),t._v(" "),_("li",[t._v("get 请求只能进行 url 编码；post 请求支持多种编码方式")]),t._v(" "),_("li",[t._v("get 产生的 url 可以加入浏览器书签；post 不可以")]),t._v(" "),_("li",[t._v("get 请求参数会被完整保留在浏览器历史记录；post 请求参数不会被保留")]),t._v(" "),_("li",[t._v("get 比 post 更不安全，因为参数直接暴露在 url 上，所以不能用来传递敏感信息")])])]),t._v(" "),_("h2",{attrs:{id:"http-状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" HTTP 状态码")]),t._v(" "),_("blockquote",[_("p",[t._v("状态码：有三位数字组成，第一个数字定义了响应类型")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("1xx")]),t._v("：指示信息，表示请求已接受，继续处理")]),t._v(" "),_("li",[_("strong",[t._v("2xx")]),t._v("：成功，表示请求已成功接受，处理")]),t._v(" "),_("li",[_("strong",[t._v("3xx")]),t._v("：重定向")]),t._v(" "),_("li",[_("strong",[t._v("4xx")]),t._v("：客户端错误")]),t._v(" "),_("li",[_("strong",[t._v("5xx")]),t._v("：服务端错误")])]),t._v(" "),_("h2",{attrs:{id:"http-持久化连接与管道化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-持久化连接与管道化"}},[t._v("#")]),t._v(" HTTP 持久化连接与管道化")]),t._v(" "),_("blockquote",[_("p",[t._v("持久化连接：在事务处理结束后仍然保持打开状态的 TCP")]),t._v(" "),_("p",[t._v("持久连接会在不同事务之间保持打开状态，直到客户端或服务端决定关闭为止。重用已对目标服务器打开的空闲持久连接，就可以避开缓慢的连接建立阶段。而且，已经打开的连接还可以避免慢启动的拥塞适应阶段，以便更快速的进行数据传输。所以，持久连接降低了时延和连接建立的开销，将连接保持在已调谐状态，而且减少了打开连接的潜在数量")])]),t._v(" "),_("p",[t._v("在 HTTP 1.0 中，默认的是"),_("strong",[t._v("短链接")]),t._v("，没有正式规定 Connection: Keep-alive 操作")]),t._v(" "),_("p",[t._v("在 HTTP 1.1 中，所有连接都是 Keep-alive，也就是默认持久化连接。HTTP 1.1 允许在持久连接上可选的使用"),_("strong",[t._v("请求管道")]),t._v("，是相对于 Keep-alive 连接的又一性能优化。在响应到达之前，可以将多条请求放入队列，当第一条请求通过网络流向服务器时，第二条和第三条请求也可以开始发送了。在高时延的网络条件下，这样做可以降低网络的环回时间，提高性能")]),t._v(" "),_("blockquote",[_("p",[t._v("管道连接注意点：")]),t._v(" "),_("ol",[_("li",[t._v("如果 HTTP 客户端无法确认连接是持久的，就不应该使用管道")]),t._v(" "),_("li",[t._v("必须按照与请求相同的顺序回送 HTTP 响应")]),t._v(" "),_("li",[t._v("HTTP 客户端必须做好连接会在任一时刻关闭的准备，还要准备好重发所有未完成管道化的请求")]),t._v(" "),_("li",[t._v("出错的时候，管道连接会阻碍客户端了解服务器执行的那些请求，由于无法安全地重试 post 请求这样的非幂请求，所以出错时就存在某些方法永远不会被执行的风险")])])]),t._v(" "),_("h2",{attrs:{id:"keep-alive-长连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-长连接"}},[t._v("#")]),t._v(" Keep-Alive（长连接）")]),t._v(" "),_("h3",{attrs:{id:"tcp-长连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-长连接"}},[t._v("#")]),t._v(" TCP 长连接")]),t._v(" "),_("p",[t._v("TCP 长连接是一种保持 TCP 连接的一种机制。当一个 TCP 连接建立时，启动 TCP 连接的一端便会设置一个计时器，当计时器到 0 时，便会发送一个 TCP 探测包，如果对方收到信息并且给出响应，则 TCP 连接保持，否则断开。")]),t._v(" "),_("p",[t._v("keep alive 技术是 TCP 技术的一个可选项，因为不当的配置可能会导致一个正在使用的 TCP 连接被提前关闭，所以默认是关闭的。")]),t._v(" "),_("h3",{attrs:{id:"http-长连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-长连接"}},[t._v("#")]),t._v(" HTTP 长连接")]),t._v(" "),_("p",[t._v("要开启 HTTP 长连接，只需要在请求头和响应头加上 "),_("code",[t._v("Connection: Keep-Alive")]),t._v("，如要断开，则换成 "),_("code",[t._v("Connection: Close")]),t._v("。其实现方式与 TCP 长连接类似，不过他是通过每次请求来确定是否继续保持连接。")]),t._v(" "),_("h3",{attrs:{id:"两者的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#两者的关系"}},[t._v("#")]),t._v(" 两者的关系")]),t._v(" "),_("p",[t._v("TCP 和 HTTP 的长连接是两种不同的技术，不存在谁依赖于谁。TCP 长连接是用于探测对端是否存在，HTTP 长连接则用于协商以复用 TCP长连接。即使 TCP 未开启长连接，也不妨碍在 HTTP 层开启长连接。")])])}),[],!1,null,null,null);v.default=a.exports}}]);