(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"es6中的let与const"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6中的let与const","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6中的let与const")]),t._v(" "),s("h2",{attrs:{id:"在-es5-中-var-与-function-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-es5-中-var-与-function-的特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 ES5 中 var 与 function 的特点")]),t._v(" "),s("ul",[s("li",[t._v("var 与 function 存在变量提升")]),t._v(" "),s("li",[t._v("var 只会提前声明，function 既声明又定义")]),t._v(" "),s("li",[t._v("在全局作用域下，使用 var 和 function 声明的变量会给 window 增加属性")])]),t._v(" "),s("h3",{attrs:{id:"变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量提升","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量提升")]),t._v(" "),s("p",[t._v("在当前的作用域当中，JS 代码执行之前，浏览器首先会默认的把所有带 var 和 function 的进行提前的声明或者定义")]),t._v(" "),s("ul",[s("li",[t._v("理解声明和定义：var num =12;\n声明(declare)：var num; –> 告诉浏览器在全局作用域中有一个 num 变量了–>但是如果一个变量只是声明了但是没有赋值，默认值是 undefined\n定义(defined)：num = 12; –> 给我们的变量进行赋值")]),t._v(" "),s("li",[t._v("对于带 var 和 function 关键字的在预解释的时候操作还是不一样的\nvar：在预解释的时候只是提前的声明\nfunction：在预解释的时候提前的声明+定义都完成了")]),t._v(" "),s("li",[t._v("预解释直发生在当前的作用域中，开始只对 window 下的进行预解释，只有函数执行的时候，才会对函数里面的内容进行预解释(也就是说，window 下的预解释不会预解释 fn 中的 var total ···)")])]),t._v(" "),s("h2",{attrs:{id:"在-es6-中-let-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-es6-中-let-的特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 ES6 中 let 的特点")]),t._v(" "),s("ul",[s("li",[t._v("使用 let 没有变量提升")]),t._v(" "),s("li",[t._v("不可以重复声明：即在"),s("code",[t._v("let a = 1")]),t._v("之后，不可以再"),s("code",[t._v("let a = 2")])]),t._v(" "),s("li",[t._v("不会给 window 增加属性")])]),t._v(" "),s("h2",{attrs:{id:"在-es6-中-const-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-es6-中-const-的特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 ES6 中 const 的特点")]),t._v(" "),s("ul",[s("li",[t._v("没有变量提升")]),t._v(" "),s("li",[t._v("不可以重复声明")]),t._v(" "),s("li",[t._v("不会给 window 增加属性")]),t._v(" "),s("li",[t._v("const 定义变量，一旦声明必须赋值")]),t._v(" "),s("li",[t._v("const 定义的是一个常量，不可以重新赋值")])]),t._v(" "),s("h2",{attrs:{id:"块级作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 块级作用域")]),t._v(" "),s("p",[t._v("其实一个"),s("code",[t._v("{}")]),t._v("就是一个块级作用域，但在 ES5 与 ES6 中，块级作用域的表现会有不同。")]),t._v(" "),s("ul",[s("li",[t._v("块级作用域下 var 和 function 声明的变量依然是全局的")]),t._v(" "),s("li",[t._v("块级作用域下 let 和 const 声明的变量是私有的，在外面是获取不到的")])]),t._v(" "),s("h3",{attrs:{id:"在不同语言版本下，需要注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在不同语言版本下，需要注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 在不同语言版本下，需要注意")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("var")]),t._v("和"),s("code",[t._v("let")]),t._v("的使用，会被引擎解析成不同的含义，即使同一段代码，也会有不同的表现。")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//能够成功打印")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成功执行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log(b);//报错：b is not defined")]),t._v("\n")])])]),s("ul",[s("li",[t._v("单纯的表现一个对象，应该显式的声明它是个对象，不然会被当做块级作用域。")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cyan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上面的写法会报错，当做块级作用域，下面的就很安全")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cyan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Aqing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("for")]),t._v("循环与"),s("code",[t._v("if")]),t._v("，"),s("code",[t._v("while")]),t._v("判断都会形成块级作用域\n"),s("ul",[s("li",[t._v("if 语句中的 function 只会提前声明，并不会同时定义，它的定义发生在 if 判断为真的时候，进入 if 作用域的第一件事就是，给 function 赋值，代码再执行")]),t._v(" "),s("li",[t._v("使用 var 声明的 for 循环中的循环值，在循环外是可以访问到的，也就是说，这个值是全局的。同时，这个值在外面访问时，是已经步长累加完的值")]),t._v(" "),s("li",[t._v("使用 let 声明的 for 循环中的循环值，因为是属于块级作用域私有的，所以循环体外是访问不到的。")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("主要的代码展示仍然在同名文件夹中，阅读代码与相关注释，才能更好的理解。")])])])}],!1,null,null,null);a.default=e.exports}}]);