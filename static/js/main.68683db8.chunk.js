(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{325:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),d=a.n(r),c=(a(325),a(145)),l=a(62),s=a(111),o=a(112),m=a(84),b=a(504),j={fields:[{component:"field-array",name:"categories",label:"\u5927\u5206\u7c7b",defaultItem:{name:"\u5206\u7c7b\u540d\u79f0",items:[{content:"\u9879\u76ee\u5185\u5bb9"}]},validate:[{type:"min-items",threshold:1}],noItemsMessage:"\u8bf7\u6dfb\u52a0\u5206\u7c7b",buttonLabels:{add:"\u6dfb\u52a0\u5206\u7c7b",remove:"\u5220\u9664\u5206\u7c7b"},fields:[{component:"text-field",label:"\u5206\u7c7b\u540d\u79f0",name:"name"},{component:"field-array",name:"items",label:"\u9879\u76ee",noItemsMessage:"\u8bf7\u6dfb\u52a0\u9879\u76ee",FieldContainerProps:{container:!0,style:{paddingLeft:"5%",paddingRight:"5%"}},defaultItem:{content:"\u9879\u76ee\u5185\u5bb9"},validate:[{type:"min-items",threshold:1}],fields:[{component:"textarea",label:"Item",name:"content"}],buttonLabels:{add:"\u6dfb\u52a0\u9879\u76ee",remove:"\u5220\u9664\u9879\u76ee"}}]}]},h=a(10),u=function(e){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)("h2",{children:"\u52a8\u6001\u8868\u5355 - \u5217\u8868\u5b57\u6bb5"}),Object(h.jsx)(s.a,{schema:j,FormTemplate:function(e){return Object(h.jsx)(o.a,Object(l.a)({submitLabel:"\u63d0\u4ea4\u4fdd\u5b58"},e))},componentMapper:m.a,onSubmit:console.log})]})},x=a(117),f=a(100),O=a(30),p=a(501),g=a(294),y=a.n(g),w=a(14),v=a(259),N=a(260),F=a(502),C=a(455),S=a(461),L=a(462),I=a(503),_=a(508),k=a(289),T=a.n(k),M=a(290),P=a.n(M),E=a(507),G="/mui-templates",B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return G+"/"+e},R=Object(v.a)((function(){return Object(N.a)({root:{width:"100%",maxWidth:360}})})),D=function(e){var t=e.title,a=e.url,n=e.children,r=e.icon,d=i.a.useState(!0),l=Object(w.a)(d,2),s=l[0],o=l[1],m=Object(c.c)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(S.a,{button:!0,onClick:function(){n?o(!s):void 0!==a&&Object(c.b)(B(a))},selected:a===m.pathname,children:[Object(h.jsx)(L.a,{children:Object(h.jsx)(E.a,{children:r})}),Object(h.jsx)(I.a,{primary:t}),n&&(s?Object(h.jsx)(T.a,{}):Object(h.jsx)(P.a,{}))]}),n&&Object(h.jsx)(_.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(h.jsx)(H,{items:n})})]})},H=function(e){var t=e.title,a=e.items,i=R(),r=t?Object(h.jsx)(F.a,{component:"div",children:t}):void 0;return Object(h.jsx)(C.a,{component:"nav",subheader:r,className:i.root,children:Object(h.jsx)(h.Fragment,{children:a.map((function(e,t){return Object(n.createElement)(D,Object(l.a)(Object(l.a)({},e),{},{key:t}))}))})})},z=[{items:[{title:"Dashboard",icon:"home",url:""},{title:"\u7528\u6237",icon:"person",children:[{title:"\u7528\u6237\u7ba1\u7406",url:"user"},{title:"\u7f16\u8f91\u7528\u6237",url:"user-editor"}]},{title:"\u52a8\u6001\u8868\u5355",icon:"listalt",children:[{title:"\u5217\u8868\u5b57\u6bb5",url:"form/list"}]}]}];function J(){return Object(h.jsx)(h.Fragment,{children:z.map((function(e,t){return Object(n.createElement)(H,Object(l.a)(Object(l.a)({},e),{},{key:t}))}))})}var A=a(509),U=Object(f.d)(x.a),V=Object(f.c)(x.a),W=Object(f.e)(x.a),q=Object(f.f)(x.a),K=Object(f.b)(x.a),Q=y()();Q.configureHeader((function(e){e.registerConfig("xs",{position:"relative",initialHeight:56}).registerConfig("md",{position:"fixed"})})),Q.configureEdgeSidebar((function(e){e.create("primarySidebar",{anchor:"left"}).registerTemporaryConfig("xs",{width:256}).registerPermanentConfig("md",{width:256,collapsible:!1})}));var X=function(e){var t=e.children,a=Object(O.a)();return Object(h.jsxs)(f.a,{theme:a,scheme:Q,children:[Object(h.jsx)(U,{children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(q,{sidebarId:"primarySidebar"}),Object(h.jsx)(A.a,{textAlign:"center",flexGrow:1,children:Object(h.jsx)("h1",{children:"Material UI Templates"})})]})}),Object(h.jsx)(V,{sidebarId:"primarySidebar",children:Object(h.jsx)(W,{children:Object(h.jsx)(J,{})})}),Object(h.jsx)(K,{children:t})]})},Y=a(107),Z=a(505),$=a(295),ee=a(39),te=function(e){return Object(h.jsx)(b.a,{children:Object(h.jsx)("h2",{children:"Dashboard"})})},ae={fields:[{name:"name",label:"\u59d3\u540d",component:"text-field",FormFieldGridProps:{xs:6,sm:4,md:3,lg:2,xl:1}}]},ne=function(){return Object(h.jsx)(s.a,{schema:ae,onSubmit:function(e){console.log(e)},FormTemplate:function(e){return Object(h.jsx)(o.a,Object(l.a)({submitLabel:"\u641c\u7d22",canReset:!0,resetLabel:"\u91cd\u7f6e",buttonOrder:["reset","submit","cancel"]},e))},componentMapper:m.a})},ie=a(101),re=a(177),de=[{field:"name",headerName:"\u59d3\u540d",width:150,editable:!0},{field:"sex",headerName:"\u6027\u522b",width:150,editable:!1},{field:"age",headerName:"\u5e74\u9f84",type:"number",width:150,editable:!0},{field:"created_at",headerName:"\u521b\u5efa\u65f6\u95f4",type:"dateTime",width:150,editable:!0},{field:"action",headerName:"\u64cd\u4f5c",width:160,renderCell:function(e){return Object(h.jsx)(ie.a,{children:"\u7f16\u8f91"})}}],ce=[{id:1,name:"Snow",sex:"\u7537",created_at:"2021-10-10",age:35},{id:2,name:"Lannister",sex:"\u7537",created_at:"2021-10-10",age:42},{id:3,name:"Lannister",sex:"\u7537",created_at:"2021-10-10",age:45},{id:4,name:"Stark",sex:"\u7537",created_at:"2021-10-10",age:16},{id:5,name:"Targaryen",sex:"\u7537",created_at:"2021-10-10",age:32},{id:6,name:"Melisandre",sex:"\u7537",created_at:"20021-10-10",age:50},{id:7,name:"Clifford",sex:"\u7537",created_at:"2021-10-10",age:44},{id:8,name:"Frances",sex:"\u7537",created_at:"2021-10-10",age:36},{id:9,name:"Roxie",sex:"\u7537",created_at:"2021-10-10",age:65}];function le(){return Object(h.jsx)("div",{style:{height:400,width:"100%"},children:Object(h.jsx)(re.a,{rows:ce,columns:de,pageSize:5,checkboxSelection:!0,disableSelectionOnClick:!0})})}var se=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)("h1",{children:"\u7528\u6237\u7ba1\u7406"}),Object(h.jsx)(ne,{}),Object(h.jsxs)(A.a,{display:"flex",mt:5,mb:5,children:[Object(h.jsx)(A.a,{flexGrow:1}),Object(h.jsx)(A.a,{mr:2,children:Object(h.jsx)(ie.a,{variant:"contained",color:"primary",children:"\u5bfc\u51fa\u8bc4\u5b9a\u8bb0\u5f55"})}),Object(h.jsx)(A.a,{children:Object(h.jsx)(ie.a,{variant:"contained",color:"primary",children:"\u6dfb\u52a0\u8bc4\u5b9a\u8bb0\u5f55"})})]}),Object(h.jsx)(le,{})]})})},oe={fields:[{name:"name",label:"\u59d3\u540d",component:"text-field",variant:"outlined",FormFieldGridProps:{xs:4}},{name:"sex",label:"\u6027\u522b",component:"text-field",variant:"outlined",FormFieldGridProps:{xs:4}},{name:"age",label:"\u5e74\u9f84",variant:"outlined",component:"text-field",FormFieldGridProps:{xs:4}},{component:"sub-form",description:"\u8be6\u7ec6\u8d44\u6599",name:"detail",fields:[{name:"jobs",label:"\u5de5\u4f5c\u7ecf\u9a8c",variant:"outlined",component:"textarea",style:{marginBottom:"1rem"}},{name:"edu",label:"\u5b66\u4e60\u7ecf\u9a8c",variant:"outlined",component:"textarea",style:{marginBottom:"1rem"}},{name:"intresting",label:"\u5174\u8da3\u7231\u597d",variant:"outlined",component:"textarea",style:{marginBottom:"1rem"}}]},{component:"sub-form",description:"\u65e5\u7a0b\u5b89\u6392",name:"schedule",fields:[{name:"learning",component:"table",columns:[{headerName:"\u5b66\u4e60\u5b89\u6392",field:"name",width:200,editable:!1},{headerName:"\u5468\u4e00",field:"monday",width:150,editable:!0},{headerName:"\u5468\u4e8c",field:"tuesday",width:150,editable:!0},{headerName:"\u5468\u4e09",field:"wednesday",width:150,editable:!0},{headerName:"\u5468\u56db",field:"thursday",width:150,editable:!0},{headerName:"\u5468\u4e94",field:"friday",width:150,editable:!0},{headerName:"\u5468\u516d",field:"saturday",width:150,editable:!0},{headerName:"\u5468\u4e03",field:"sunday",width:150,editable:!0}]},{name:"happy",component:"table",columns:[{headerName:"\u5a31\u4e50\u5b89\u6392",field:"name",width:200,editable:!1},{headerName:"\u5468\u4e00",field:"monday",width:150,editable:!0},{headerName:"\u5468\u4e8c",field:"tuesday",width:150,editable:!0},{headerName:"\u5468\u4e09",field:"wednesday",width:150,editable:!0},{headerName:"\u5468\u56db",field:"thursday",width:150,editable:!0},{headerName:"\u5468\u4e94",field:"friday",width:150,editable:!0},{headerName:"\u5468\u516d",field:"saturday",width:150,editable:!0},{headerName:"\u5468\u4e03",field:"sunday",width:150,editable:!0}]}]}]},me=a(42),be=a(29),je=function(e){var t=Object(be.a)(e),a=t.input,n=t.columns;return console.log("input.value",a),Object(h.jsx)("div",{style:{minHeight:200,width:"100%"},children:Object(h.jsx)(re.a,{rows:a.value||[],columns:n,disableSelectionOnClick:!0,onEditCellChangeCommitted:function(e){var t=e.field,n=e.id,i=e.props,r=Object(me.a)(a.value);r.forEach((function(e){e.id===n&&(e[t]=i.value)})),a.onChange(r)}})})};m.a.table=je;var he=function(e){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)("h1",{children:"\u7f16\u8f91\u7528\u6237"}),Object(h.jsx)(s.a,{schema:oe,onSubmit:function(e){console.log(e)},initialValues:{name:"\u5f20\u4e09",learning:[{id:1,name:"\u82f1\u8bed",monday:"\u81ea\u4e60",tuesday:"\u81ea\u4e60",wednesday:"\u81ea\u4e60",thursday:"\u81ea\u4e60",friday:"\u81ea\u4e60",saturday:"\u81ea\u4e60",sunday:"\u81ea\u4e60"}],happy:[{id:1,name:"\u8fd0\u52a8",monday:"\u6563\u6b65",tuesday:"\u6563\u6b65",wednesday:"\u8dd1\u6b65",thursday:"\u6563\u6b65",friday:"\u8dd1\u6b65",saturday:"\u6563\u6b65",sunday:"\u6e38\u6cf3"}]},FormTemplate:function(e){return Object(h.jsx)(o.a,Object(l.a)({submitLabel:"\u641c\u7d22",canReset:!0,resetLabel:"\u91cd\u7f6e",buttonOrder:["reset","submit","cancel"]},e))},componentMapper:m.a})]})},ue=Object(Y.a)({},ee.zhCN),xe=function(){return Object(h.jsx)(Z.a,{theme:ue,children:Object(h.jsx)($.a,{children:Object(h.jsx)(c.a,{children:Object(h.jsx)(X,{path:"/",children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(te,{path:B()}),Object(h.jsx)(u,{path:B("form/list")}),Object(h.jsx)(se,{path:B("user")}),Object(h.jsx)(he,{path:B("user-editor")})]})})})})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,511)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,d=t.getTTFB;a(e),n(e),i(e),r(e),d(e)}))};d.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(xe,{})}),document.getElementById("root")),fe()}},[[448,1,2]]]);
//# sourceMappingURL=main.68683db8.chunk.js.map