(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{236:function(v,_,t){"use strict";t.r(_);var r=t(6),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"观察者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[v._v("#")]),v._v(" 观察者模式")]),v._v(" "),t("p",[v._v("所谓观察者模式，其实就是为了实现 "),t("strong",[v._v("松耦合（loosely coupled）")]),v._v("。")]),v._v(" "),t("p",[v._v("用《Head First设计模式》里的气象站为例子，每当气象测量数据有更新，"),t("code",[v._v("changed()")]),v._v(" 方法就会被调用，于是我们可以在 "),t("code",[v._v("changed()")]),v._v(" 方法里面，更新气象仪器上的数据，比如温度、气压等。")]),v._v(" "),t("p",[v._v("但是这样写有个问题，就是如果我们想在 "),t("code",[v._v("changed()")]),v._v(" 方法被调用时，更新更多的信息，比如湿度，那就需要去修改 "),t("code",[v._v("changed()")]),v._v(" 的代码，这就是紧耦合的坏处。")]),v._v(" "),t("p",[t("strong",[v._v("怎么解决呢？使用观察者模式，面向接口编程，实现松耦合")]),v._v("。")]),v._v(" "),t("p",[v._v("观察者模式里面，"),t("code",[v._v("changed()")]),v._v(" 方法所在的实例对象，也就是被观察者（Subject，或者叫 Observable），它只需要维护一套观察者（Observer）的集合，这些 Observer 实现相同的接口，Subject 只需要知道，通知 Observer 时，需要调用那个统一方法就好了：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/8/167897b2ad53afb3?imageslim",alt:"img"}})]),v._v(" "),t("h1",{attrs:{id:"发布订阅模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式"}},[v._v("#")]),v._v(" 发布订阅模式")]),v._v(" "),t("p",[v._v("很多人都和我一样，认为发布订阅模式里面的 Publisher，就是观察者模式里面的 Subject，而 Subscriber 就是 Observer。Publisher 变化时，就会去主动通知 Subscriber。")]),v._v(" "),t("p",[v._v("其实并不是。")]),v._v(" "),t("p",[t("strong",[v._v("在发布订阅模式里，发布者并不会主动通知订阅者，换句话说，发布者和订阅者彼此互不相识。")])]),v._v(" "),t("p",[v._v("互不相识？那么他们是如何通信的？")]),v._v(" "),t("p",[t("strong",[v._v("答案是，通过第三者，也就是在消息队列里面，我们常说的经纪人 Broker")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/8/167897b4e2f5584a?imageslim",alt:"img"}})]),v._v(" "),t("p",[v._v("发布者只需要告诉 Broker，我要发送的消息，topic 时 AAA；")]),v._v(" "),t("p",[v._v("订阅这只需要告诉 Broker，我要订阅的消息是 AAA；")]),v._v(" "),t("p",[v._v("于是当 Broker 收到发布者发过来的消息时，就会把消息推送给订阅方，当然也有可能是订阅方主动过来取，具体看实现方式。")]),v._v(" "),t("p",[t("strong",[v._v("也就是说，发布订阅模式里，发布者和订阅者这件不是松耦合，而是完全解耦。")])]),v._v(" "),t("p",[v._v("放一张极简图给大家对比：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/8/167897b76f2530d6?imageslim",alt:"img"}})]),v._v(" "),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("从表面上看：")]),v._v(" "),t("ul",[t("li",[v._v("观察者模式里，只有两个角色 —— 观察者 + 被观察者")]),v._v(" "),t("li",[v._v("而发布订阅模式里，却不仅仅只有发布者和订阅者两个角色，还有一个经常被我们忽略的 —— 经纪人Broker")])]),v._v(" "),t("p",[v._v("往更深层次讲：")]),v._v(" "),t("ul",[t("li",[v._v("观察者和被观察者，是松耦合的关系")]),v._v(" "),t("li",[v._v("发布者和订阅者，则完全不存在耦合")])]),v._v(" "),t("p",[v._v("从使用层面上讲：")]),v._v(" "),t("ul",[t("li",[v._v("观察者模式，多用于单个应用内部")]),v._v(" "),t("li",[v._v("发布订阅模式，则更多的是一种跨应用的模式(cross-application pattern)，比如我们常用的消息中间件")])])])}),[],!1,null,null,null);_.default=e.exports}}]);