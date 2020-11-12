(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{407:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"学习算法和刷题的框架思维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习算法和刷题的框架思维"}},[t._v("#")]),t._v(" 学习算法和刷题的框架思维")]),t._v(" "),a("p",[t._v("首先这里讲的都是普通的数据结构，前端面试普遍算法难度较低，所以只介绍常规问题的解决办法。")]),t._v(" "),a("p",[t._v("从整体到细节，自顶向下，从抽象到具体的框架思维是通用的，不只是学习数据结构和算法，学习其它任何知识都是高效的。")]),t._v(" "),a("h2",{attrs:{id:"数据机构的存储方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据机构的存储方式"}},[t._v("#")]),t._v(" 数据机构的存储方式")]),t._v(" "),a("p",[t._v("数据结构的存储方式只有 "),a("strong",[t._v("两种")]),t._v(" ：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数组（顺序存储）")])]),t._v(" "),a("li",[a("strong",[t._v("链表（链式存储）")])])]),t._v(" "),a("p",[t._v("这句话该怎么理解，不是还有散列表、栈、队列、堆、树、图等等各种数据结构吗？")]),t._v(" "),a("p",[t._v("我们分析问题一定要有递归的思想，自顶向下，从抽象到具体。你上来就列出这么多，那些都属于「上层建筑」，而数组和链表才是「结构基础」。因为那些多样化的数据结构，归根到底都是在链表或者数组的基础上进行封装不同的 API。")]),t._v(" "),a("p",[t._v("比如说「队列」、「栈」这两种数据结构既可以用链表也可以用数组实现。用数组实现就要处理扩容缩容问题；用链表实现就没有这个问题，但需要更多的内存空间存储节点指针。")]),t._v(" "),a("p",[t._v("「图」的两种表示方法，邻接表就是链表，邻接矩阵就是二维数组。邻接矩阵判断连通性迅速，并可以进行矩阵运算解决问题，但是如果图比较稀疏的话很耗费空间。邻接表比较节省空间，但是很多操作的效率上肯定比不过邻接矩阵。")]),t._v(" "),a("p",[t._v("「散列表」就是通过散列函数把键映射到一个大数组里。而且对于解决散列冲突的方法，拉链法需要链表特性，操作简单，但需要额外的空间存储指针；线性探查法就需要数组特性，以便连续寻址，不需要指针存储空间，但操作稍微复杂些。")]),t._v(" "),a("p",[t._v("「树」，用数组实现就是「堆」，因为「堆」是一个完全二叉树，用数组存储不需要节点指针，操作也比较简单；用链表实现就是常见的那种「树」，因为不一定是完全二叉树，所以不适合用数组存储。为此，在这种链表「树」结构上，又衍生出各种巧妙的设计，比如二叉搜索树、AVL树、红黑树、区间树、B树等等，以应对不同的问题。")]),t._v(" "),a("p",[t._v("了解Redis数据库的朋友可能知道，Redis提供列表、字符串、集合等等几种常见的数据结构，但是对于每种数据结构，底层的存储方式都至少有两种，以便于根据存储数据的实际情况使用合适的存储方式。")]),t._v(" "),a("p",[t._v("综上，数据结构种类很多，甚至你也可以发明自己的数据结构，但是底层存储无非数组或者链表，"),a("strong",[t._v("二者的优缺点如下：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数组")]),t._v(" 由于是紧凑连续存储，可以随机访问，通过索引快速找到对应元素，而且相对节约存储空间。但正是因为连续存储，内存空间必须一次性分配够，所以说数组如果要扩容，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度是 "),a("code",[t._v("O(n)")]),t._v(" ；而且你如果想在数组中间进行叉如何删除，每次必须搬移后面的所有数据以保持连续，时间复杂度是 "),a("code",[t._v("O(n)")]),t._v(" 。")]),t._v(" "),a("li",[a("strong",[t._v("链表")]),t._v(" 因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，时间复杂度 "),a("code",[t._v("O(1)")]),t._v(" 。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的位置，所以不能随机访问；而且由于每个元素必须存储指向前后元素的指针，会消耗更多的存储空间。")])]),t._v(" "),a("h2",{attrs:{id:"数据结构的基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构的基本操作"}},[t._v("#")]),t._v(" 数据结构的基本操作")]),t._v(" "),a("p",[t._v("对于任何数据结构，其基本操作无非遍历 + 访问，再具体一点就是："),a("strong",[t._v("增删改查")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("数据结构种类很多，但它们存在的目的是在不同的应用场景下，尽可能高效地增删改查。")])]),t._v(" "),a("p",[t._v("如何遍历 + 访问？我们仍然从最高层来看，各种数据结构的遍历 + 访问无非两种形式：线性和非线性。")]),t._v(" "),a("p",[t._v("线性就是 for/while 迭代为代表，非线性就是递归为代表。再具体一步，无非以下几种框架：")]),t._v(" "),a("p",[t._v("数组遍历框架，典型的线性迭代结构：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 迭代访问 list[i]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("链表遍历框架，兼具迭代和递归结构：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本的单链表节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n  next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ListNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 迭代访问")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归访问")]),t._v("\n  node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("二叉树遍历框架，典型的非线性递归遍历结构：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n  left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归访问")]),t._v("\n\tnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你看二叉树的递归遍历方式和链表的递归遍历方式是不是很相似，再看看二叉树结构和单链表结构是不是很相似？")]),t._v(" "),a("p",[t._v("如果再过几条叉，N叉树你会不会遍历？")]),t._v(" "),a("p",[t._v("二叉树遍历框架可以扩展为N叉树遍历框架：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" child "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("N叉树的遍历又可以扩展为图的遍历，因为图就是好多N叉树的结合体。你说图如果出现环？这个很好办，用个布尔值来做标记即可。")]),t._v(" "),a("p",[a("strong",[t._v("所谓框架，就是套路。不管增删改查，这些代码都是永远无法脱离的结构，你可以把这个结构作为大纲，根据具体问题在框架上添加代码即可。")])]),t._v(" "),a("h2",{attrs:{id:"算法刷题指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法刷题指南"}},[t._v("#")]),t._v(" 算法刷题指南")]),t._v(" "),a("p",[t._v("首先要明确的是，"),a("strong",[t._v("数据结构是工具，算法是通过合适的工具解决特定问题的方法。")]),t._v(" 也就是说，学习算法之前，最起码得了解哪些常见的数据结构，了解他们的特性和缺陷。")]),t._v(" "),a("p",[t._v("那么该如何在 LeetCode 刷题呢？最通俗的讲就是按照题型刷，但是最直接的方法是：")]),t._v(" "),a("p",[a("strong",[t._v("先刷二叉树，先刷二叉树，先刷二叉树！")])]),t._v(" "),a("p",[t._v("因为二叉树是最容易培养框架思维的，而且大部分算法技巧，本质上都是树的遍历。")]),t._v(" "),a("p",[t._v("刷二叉树看到题目没思路？其实不是没有思路，只是没有理解我们所说的「框架」是什么。"),a("strong",[t._v("不要小看这几行代码，几乎所有二叉树的题目都是一套这个框架就出来了。")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前序遍历")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中序遍历")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后序遍历")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对于一个理解二叉树的人来说，刷一到二叉树的题目花不了多少时间。那么如果你对刷题无从下手或者有畏惧心理，不妨从二叉树下手。只要刷完二叉树，再去做什么回溯动态规划分治，"),a("strong",[t._v("你就会发现只要涉及递归的问题，都是树的问题。")])]),t._v(" "),a("h2",{attrs:{id:"总结几句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结几句"}},[t._v("#")]),t._v(" 总结几句")]),t._v(" "),a("p",[t._v("数据结构的基本存储方式是链式和顺序两种，基本操作就是增删改查，遍历方式无非递归和迭代。")]),t._v(" "),a("p",[t._v("刷题建议从「树」分类开始刷，结合框架思维，把几十道题刷完，对于树结构的理解应该就到位了。这时候再去看回溯、动态规划、分治等算法专题，对思路的理解可能会更加深刻一下。")])])}),[],!1,null,null,null);s.default=e.exports}}]);