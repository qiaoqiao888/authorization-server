(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{264:function(v,_,e){"use strict";e.r(_);var t=e(19),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("blockquote",[e("p",[v._v("在使用之前，您还是需要对 OAuth2 开放授权协议具有一定的认识。")])]),v._v(" "),e("h2",{attrs:{id:"简述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[v._v("#")]),v._v(" 简述")]),v._v(" "),e("p",[v._v("在大多数情况之下，此协议是作为第三方客户端进行接入的时候进行使用，例如 QQ 的 OAuth2 授权码流程如下：")]),v._v(" "),e("ol",[e("li",[v._v("在第三方客户端应用（例如某个社交网站，域名为 "),e("code",[v._v("example.com")]),v._v(" ）点击 “使用 QQ 帐号进行登录”。")]),v._v(" "),e("li",[v._v("跳转到 QQ 登录的网页，此时域名为 "),e("code",[v._v("qq.com")]),v._v("，也就是到了 QQ 的 OAuth 授权服务器之上了，这个时候输入帐号密码就是在他的网页上面进行输入的就是安全的。")]),v._v(" "),e("li",[v._v("在 "),e("code",[v._v("qq.com")]),v._v(" 登录成功以后，他会跳转到第三方客户端指定的一个地址，我们称之为 "),e("strong",[v._v("回调地址")]),v._v("，同时携带一个 "),e("strong",[v._v("授权码")]),v._v(" 的参数（大多数情况下是 url 参数）。")]),v._v(" "),e("li",[v._v("我们在回调地址之中获取到 "),e("strong",[v._v("授权码")]),v._v(" 参数，然后携带这个参数以及我们第三方客户端的信息（一般是客户端id和客户端密钥）去请求指定的接口获取用户的个人信息或者登录凭证。")])]),v._v(" "),e("p",[v._v("这样一个 OAuth2 的一个第三方客户端进行授权操作就完成了。在这个过程中有如下几点好处：")]),v._v(" "),e("ol",[e("li",[v._v("保护用户账户信息安全：输入用户帐号密码的过程是在应用中完成的而不是第三方客户端那里完成的（即使用 QQ 登录时，帐号密码的输入是在 "),e("code",[v._v("qq.com")]),v._v(" 的域名下完成的）")]),v._v(" "),e("li",[v._v("当有新的客户端接入时变得极其容易，只需要添加客户端的信息即可。")]),v._v(" "),e("li",[v._v("有效管理客户端权限：例如某些客户端只能够读取用户信息而不能够修改用户信息，完全可以通过使用客户端 id 进行具体的接口、权限管理")])]),v._v(" "),e("h2",{attrs:{id:"权限控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[v._v("#")]),v._v(" 权限控制")]),v._v(" "),e("p",[v._v("那么在 OAuth2 我们如何来进行用户的权限管理和权限鉴定呢？在一般情况下，可以用通过 "),e("code",[v._v("scope")]),v._v(" 来完成这么一个过程。")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("scope")]),v._v(" 可以简单可以复杂也可以完全没有。")])]),v._v(" "),e("h3",{attrs:{id:"不使用-scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不使用-scope"}},[v._v("#")]),v._v(" 不使用 scope")]),v._v(" "),e("p",[v._v("不使用 scope 意味着你所有的资源都是开放的，在这种情况下一般都是只提供 "),e("strong",[v._v("读取")]),v._v(" 接口，例如允许某个第三方客户端读取用户信息、角色信息等。")]),v._v(" "),e("ul",[e("li",[v._v("好处：简单、快捷")]),v._v(" "),e("li",[v._v("坏处：只能读取无法修改")])]),v._v(" "),e("h3",{attrs:{id:"简单-scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单-scope"}},[v._v("#")]),v._v(" 简单 scope")]),v._v(" "),e("p",[v._v("简单的 "),e("code",[v._v("scope")]),v._v(" 一般就只提供几种描述动作的操作符，最为常见的是 "),e("code",[v._v("READ")]),v._v("、"),e("code",[v._v("WRITE")]),v._v("、"),e("code",[v._v("ALL")]),v._v("；通过第三方客户端接入，每个客户端可以获取到不同的权限。")]),v._v(" "),e("p",[v._v("例如： A 应用可以修改用户的信息，其申请的 "),e("code",[v._v("scope")]),v._v(" 应该为 "),e("code",[v._v("WRITE")]),v._v("，B 应用只能够读取用户信息，其申请的 "),e("code",[v._v("scope")]),v._v(" 应该位 "),e("code",[v._v("READ")]),v._v("。")]),v._v(" "),e("ul",[e("li",[v._v("好处：简单的资源操作控制")]),v._v(" "),e("li",[v._v("坏处：没有对资源的具体操作限制")])]),v._v(" "),e("h3",{attrs:{id:"复杂的-scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复杂的-scope"}},[v._v("#")]),v._v(" 复杂的 scope")]),v._v(" "),e("p",[v._v("复杂的 "),e("code",[v._v("scope")]),v._v(" 就涉及到对于某个资源的详细控制，可以把它看成 "),e("code",[v._v("ACL")]),v._v(" 权限控制。")]),v._v(" "),e("ul",[e("li",[v._v("比如 "),e("code",[v._v("message:READ")]),v._v(" 表示对 "),e("code",[v._v("message")]),v._v(" 的资源具有 "),e("code",[v._v("READ")]),v._v(" 权限")]),v._v(" "),e("li",[v._v("比如 "),e("code",[v._v("user:WRITE")]),v._v(" 表示对 "),e("code",[v._v("user")]),v._v(" 的资源具有 "),e("code",[v._v("WRITE")]),v._v(" 权限")])]),v._v(" "),e("p",[v._v("这样的权限控制基本覆盖大多数的使用情况")]),v._v(" "),e("ul",[e("li",[v._v("好处：详细的资源权限控制")]),v._v(" "),e("li",[v._v("坏处：实现具有一定难度，不可动态修改，灵活性较低")])]),v._v(" "),e("h3",{attrs:{id:"rbac-动态模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rbac-动态模型"}},[v._v("#")]),v._v(" RBAC 动态模型")]),v._v(" "),e("p",[v._v("在我们的应用中，涉及到了一个最为重要的东西："),e("strong",[v._v("角色（ROLE）")]),v._v("。我们使用 "),e("strong",[v._v("RBAC(Role-based access control)")]),v._v(" 进行我们的权限管理。")]),v._v(" "),e("p",[e("img",{attrs:{src:"/images/rbac.png",alt:"rbac"}})]),v._v(" "),e("p",[v._v("所以在使用 "),e("code",[v._v("scope")]),v._v(" 的情况对我们来说是不适用的，这种情况下我们如何去管理权限呢？我更希望使用 OAuth2 来完全的管理我们的用户角色等信息而不是再去引入一些其他的东西，我将它与 RBAC 授权模型进行搭配使用。如何做呢？")]),v._v(" "),e("ol",[e("li",[v._v("授权服务器的资源只提供 "),e("strong",[v._v("读")]),v._v(" 权限，所有的客户端只能够读取用户的信息，而不能够修改任何信息。")]),v._v(" "),e("li",[v._v("下发令牌时，提供用户用的 "),e("code",[v._v("scope")]),v._v(" 信息以外的 "),e("code",[v._v("ROLE")]),v._v(" 信息。")]),v._v(" "),e("li",[v._v("提供一个独立客户端专门来进行修改授权服务器的资源，即："),e("strong",[v._v("授权中心")]),v._v("。")])]),v._v(" "),e("p",[v._v("角色我们会给客户端，那么图中的 "),e("strong",[v._v("资源")]),v._v(" 应该是什么呢？那应该是第三方客户端的资源，由第三方客户端自己掌控。")]),v._v(" "),e("p",[v._v("换句话说，第三方客户端可以很自由的选择权限控制方式。")]),v._v(" "),e("ol",[e("li",[v._v("使用 "),e("code",[v._v("scope")]),v._v("：我们不使用 "),e("code",[v._v("scope")]),v._v(" 但是不代表第三方客户端不能使用，在客户端足够简单的情况下，可以使用 "),e("code",[v._v("scope")]),v._v(" 来对你的应用进行权限控制。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("role")]),v._v("：在应用使用的时候，我们会下发给客户端用户的角色信息，客户端完全可以使用他进行 RBAC 权限控制")]),v._v(" "),e("li",[v._v("使用自己的用户系统：如果你想完全脱离我们的应用使用，完全可以在得到我们给予的用户信息以后，自己创建用户并使用一套新的用户管理系统，这个也是 OAuth2 最为本质的使用方式。")])]),v._v(" "),e("h2",{attrs:{id:"授权模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权模式"}},[v._v("#")]),v._v(" 授权模式")]),v._v(" "),e("p",[v._v("前面我们提到的 QQ 的栗子就是授权模式中的授权码模式。在我们的授权服务器中提供四种授权模式：")]),v._v(" "),e("ol",[e("li",[v._v("授权码模式")]),v._v(" "),e("li",[v._v("密码模式")]),v._v(" "),e("li",[v._v("手机验证码模式")]),v._v(" "),e("li",[v._v("邮箱验证码模式")])]),v._v(" "),e("p",[v._v("对于不同的模式")]),v._v(" "),e("ul",[e("li",[v._v("安全级别： 1 > 3 > 4 > 2")]),v._v(" "),e("li",[v._v("复杂级别： 1 > 3 = 4 > 2")]),v._v(" "),e("li",[v._v("上手难度： 1 > 2 = 3 = 4")]),v._v(" "),e("li",[v._v("推荐指数： 1 > 2 > 3 = 4")])]),v._v(" "),e("h3",{attrs:{id:"授权码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权码模式"}},[v._v("#")]),v._v(" 授权码模式")]),v._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("\n     +----------+\n     | Resource |\n     |   Owner  |\n     |          |\n     +----------+\n          ^\n          |\n         (B)\n     +----|-----+          Client Identifier      +---------------+\n     |         -+----(A)-- & Redirection URI ----\x3e|               |\n     |  User-   |                                 | Authorization |\n     |  Agent  -+----(B)-- User authenticates ---\x3e|     Server    |\n     |          |                                 |               |\n     |         -+----(C)-- Authorization Code ---<|               |\n     +-|----|---+                                 +---------------+\n       |    |                                         ^      v\n      (A)  (C)                                        |      |\n       |    |                                         |      |\n       ^    v                                         |      |\n     +---------+                                      |      |\n     |         |>---(D)-- Authorization Code ---------'      |\n     |  Client |          & Redirection URI                  |\n     |         |                                             |\n     |         |<---(E)----- Access Token -------------------'\n     +---------+       (w/ Optional Refresh Token)\n\n\n   Note: The lines illustrating steps (A), (B), and (C) are broken into\n   two parts as they pass through the user-agent.\n\n")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);