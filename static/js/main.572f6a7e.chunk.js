(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{274:function(e,t,n){},397:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(23),r=n.n(a),s=(n(274),n(107)),o=n(81),j=n(249),l=n(252),d=n(248),b=n(449),m={fields:[{component:"field-array",name:"categories",label:"\u5927\u5206\u7c7b",defaultItem:{name:"\u5206\u7c7b\u540d\u79f0",items:[{content:"\u9879\u76ee\u5185\u5bb9"}]},validate:[{type:"min-items",threshold:1}],noItemsMessage:"\u8bf7\u6dfb\u52a0\u5206\u7c7b",buttonLabels:{add:"\u6dfb\u52a0\u5206\u7c7b",remove:"\u5220\u9664\u5206\u7c7b"},fields:[{component:"text-field",label:"\u5206\u7c7b\u540d\u79f0",name:"name"},{component:"field-array",name:"items",label:"\u9879\u76ee",noItemsMessage:"\u8bf7\u6dfb\u52a0\u9879\u76ee",FieldContainerProps:{container:!0,style:{paddingLeft:"5%",paddingRight:"5%"}},defaultItem:{content:"\u9879\u76ee\u5185\u5bb9"},validate:[{type:"min-items",threshold:1}],fields:[{component:"textarea",label:"Item",name:"content"}],buttonLabels:{add:"\u6dfb\u52a0\u9879\u76ee",remove:"\u5220\u9664\u9879\u76ee"}}]}]},h=n(14),O=function(e){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)("h2",{children:"\u52a8\u6001\u8868\u5355 - \u5217\u8868\u5b57\u6bb5"}),Object(h.jsx)(j.a,{schema:m,FormTemplate:function(e){return Object(h.jsx)(l.a,Object(o.a)({submitLabel:"\u63d0\u4ea4\u4fdd\u5b58"},e))},componentMapper:d.a,onSubmit:console.log})]})},u=n(95),x=n(82),f=n(29),p=n(444),g=n(246),v=n.n(g),y=n(251),C=n(432),F=n(443),I=n(445),S=n(438),w=n(446),L=n(448),k=n(447),E=n(453),M=n(241),T=n.n(M),P=n(242),D=n.n(P),B=n(452),H="/mui-templates",J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return H+"/"+e},N=Object(C.a)((function(){return Object(F.a)({root:{width:"100%",maxWidth:360}})})),z=function(e){var t=e.title,n=e.url,c=e.children,a=e.icon,r=i.a.useState(!0),o=Object(y.a)(r,2),j=o[0],l=o[1],d=Object(s.c)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(w.a,{button:!0,onClick:function(){c?l(!j):void 0!==n&&Object(s.b)(J(n))},selected:n===d.pathname,children:[Object(h.jsx)(L.a,{children:Object(h.jsx)(B.a,{children:a})}),Object(h.jsx)(k.a,{primary:t}),c&&(j?Object(h.jsx)(T.a,{}):Object(h.jsx)(D.a,{}))]}),c&&Object(h.jsx)(E.a,{in:j,timeout:"auto",unmountOnExit:!0,children:Object(h.jsx)(A,{items:c})})]})},A=function(e){var t=e.title,n=e.items,i=N(),a=t?Object(h.jsx)(I.a,{component:"div",children:t}):void 0;return Object(h.jsx)(S.a,{component:"nav",subheader:a,className:i.root,children:Object(h.jsx)(h.Fragment,{children:n.map((function(e,t){return Object(c.createElement)(z,Object(o.a)(Object(o.a)({},e),{},{key:t}))}))})})},G=[{items:[{title:"Dashboard",icon:"home",url:""},{title:"\u52a8\u6001\u8868\u5355",icon:"home",children:[{title:"\u5217\u8868\u5b57\u6bb5",url:"form/list"}]}]}];function R(){return Object(h.jsx)(h.Fragment,{children:G.map((function(e,t){return Object(c.createElement)(A,Object(o.a)(Object(o.a)({},e),{},{key:t}))}))})}var U=n(454),W=Object(x.d)(u.a),q=Object(x.c)(u.a),K=Object(x.e)(u.a),Q=Object(x.f)(u.a),V=Object(x.b)(u.a),X=v()();X.configureHeader((function(e){e.registerConfig("xs",{position:"relative",initialHeight:56}).registerConfig("md",{position:"fixed"})})),X.configureEdgeSidebar((function(e){e.create("primarySidebar",{anchor:"left"}).registerTemporaryConfig("xs",{width:256}).registerPermanentConfig("md",{width:256,collapsible:!1})}));var Y=function(e){var t=e.children,n=Object(f.a)();return Object(h.jsxs)(x.a,{theme:n,scheme:X,children:[Object(h.jsx)(W,{children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(Q,{sidebarId:"primarySidebar"}),Object(h.jsx)(U.a,{textAlign:"center",flexGrow:1,children:Object(h.jsx)("h1",{children:"Material UI Templates"})})]})}),Object(h.jsx)(q,{sidebarId:"primarySidebar",children:Object(h.jsx)(K,{children:Object(h.jsx)(R,{})})}),Object(h.jsx)(V,{children:t})]})},Z=n(250),$=n(450),_=n(253),ee=n(247),te=function(e){return Object(h.jsx)(b.a,{children:Object(h.jsx)("h2",{children:"Dashboard"})})},ne=Object(Z.a)({},ee.zhCN);console.log(J("dashboard"));var ce=function(){return Object(h.jsx)($.a,{theme:ne,children:Object(h.jsx)(_.a,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(Y,{path:"/",children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(te,{path:J()}),Object(h.jsx)(O,{path:J("form/list")})]})})})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,456)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(ce,{})}),document.getElementById("root")),ie()}},[[397,1,2]]]);
//# sourceMappingURL=main.572f6a7e.chunk.js.map