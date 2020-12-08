(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{116:function(e,t,a){e.exports=a(146)},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),u=a(35),l=a(43),i=a(88),s=a(89),d=a(68),m=a(22),p=JSON.parse(window.localStorage.getItem("blogsInStorage")),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":case"NEW_COMMENT":return[].concat(Object(m.a)(e),[t.data]);case"INIT_BLOGS":case"INIT_COMMENTS":return t.data;case"LIKE":var a=t.data.id,n=e.find((function(e){return e.id===a})),r=Object(d.a)({},n,{likes:n.likes+1});return console.log("blogtovote:",n),console.log("votedBlog:",r),e.map((function(e){return e.id!==a?e:r}));case"DISLIKE":var c=t.data.id,o=e.find((function(e){return e.id===c})),u=Object(d.a)({},o,{likes:o.likes-1});return console.log("blogtovote:",o),console.log("votedBlog:",u),e.map((function(e){return e.id!==c?e:u}));case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data}));default:return e}},b=a(6),g=a.n(b),h=a(10),v={info:"",style:"",id:"",visible:!1},E=function(e,t,a){return{type:"INFO_MESSAGE",data:{msg:t,style:a,id:e}}},O=function(e){return{type:"HIDE_MESSAGE",data:{id:e}}},w=0,y=function(e,t,a){return function(){var n=Object(h.a)(g.a.mark((function n(r){var c,o,u;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(c=w++,r(E(c,e,t)),o=1e3*a,u=0;u<c+10;u++)clearTimeout(u);setTimeout((function(){console.log(c),r(O(c))}),o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INFO_MESSAGE":return{info:t.data.msg,style:t.data.style,id:t.data.id,visible:!0};case"HIDE_MESSAGE":return{id:t.data.id,visible:!1};default:return e}},j=JSON.parse(window.localStorage.getItem("loggedBlogUser")),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN":return console.log("action data in login reducer: ",t.data),t.data;case"LOGOUT":return t.data;default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_COMMENTS":return t.data;default:return e}},T=Object(l.combineReducers)({blogs:f,users:S,notification:x,loggedUser:k,comments:I}),N=Object(l.createStore)(T,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),A=a(15),C=a(14),B=a(17),z=a.n(B),L="https://salty-basin-67167.herokuapp.com/api/blogs",W=null,G={getAll:function(){var e=Object(h.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get(L);case 2:return t=e.sent,console.log(" WOOP WOOP "),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("".concat(L,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(h.a)(g.a.mark((function e(t){var a,n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(window.localStorage.getItem("loggedBlogUser")),n="bearer ".concat(a.token),r={headers:{Authorization:n}},e.next=5,z.a.post(L,t,r);case 5:return c=e.sent,e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(h.a)(g.a.mark((function e(t,a){var n,r,c,o,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:W}},r="increase"===a?1:-1,e.next=4,z.a.get("".concat(L,"/").concat(t));case 4:return c=e.sent,o={author:c.data.author,title:c.data.title,url:c.data.url,likes:c.data.likes+r,user:c.data.user},e.next=8,z.a.put("".concat(L,"/").concat(t),o,n);case 8:return u=e.sent,console.log("adding likes to db response: ",u.data),e.abrupt("return",u.data);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),remove:function(){var e=Object(h.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:W}},e.next=3,z.a.delete("".concat(L,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){W="bearer ".concat(e)}},_={loginToDb:function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=null,M={getAll:function(){var e=Object(h.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/api/users");case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("".concat("/api/users","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(h.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:D}},e.next=3,z.a.post("/api/users",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(h.a)(g.a.mark((function e(t,a){var n,r,c,o,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:D}},r="increase"===a?1:-1,e.next=4,z.a.get("".concat("/api/users","/").concat(t));case 4:return c=e.sent,o={author:c.data.author,title:c.data.title,url:c.data.url,likes:c.data.likes+r,user:c.data.user},e.next=8,z.a.put("".concat("/api/users","/").concat(t),o,n);case 8:return u=e.sent,console.log("adding likes to db response: ",u.data),e.abrupt("return",u.data);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),remove:function(){var e=Object(h.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:D}},e.next=3,z.a.delete("".concat("/api/users","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){D="bearer ".concat(e)}},U=null,J={getAll:function(){var e=Object(h.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/api/comments");case 2:return t=e.sent,console.log(" WOOP WOOP "),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(h.a)(g.a.mark((function e(t,a){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:U}},e.next=3,z.a.post("/api/blogs/".concat(a,"/comments"),t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),setToken:function(e){U="bearer ".concat(e)}},H=function(e){return function(){var t=Object(h.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.remove(e);case 2:n=t.sent,console.log(n),a({type:"DELETE_BLOG",data:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e,t,a,n){return function(){var r=Object(h.a)(g.a.mark((function r(c){var o,u;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n){r.next=4;break}return o={username:e,name:a,password:t},r.next=4,M.create(o);case 4:return r.next=6,_.loginToDb({username:e,password:t});case 6:u=r.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(u)),c({type:"LOGGED_IN",data:u}),console.log("user in actioncreators:",u),G.setToken(u.token);case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},F=a(12),R=a(181),K=a(183),q=a(148),V=a(185),Q=a(186),X=a(187),Y=a(97),Z=a.n(Y),$=a(32),ee=a(95),te=a.n(ee),ae=a(96),ne=a.n(ae),re=a(65),ce=a.n(re),oe=a(66),ue=a.n(oe),le=a(188),ie=Object(R.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}})),se=function(e){var t=e.blog,a=ie(),c=Object(n.useState)(!1),o=Object(F.a)(c,2),l=o[0],i=o[1],s=Object(n.useState)(!1),d=Object(F.a)(s,2),m=d[0],p=d[1],f=Object(C.b)(),b=JSON.parse(window.localStorage.getItem("loggedBlogUser")),v=function(e){f(m?function(e){return function(){var t=Object(h.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.update(e,"decrease");case 2:n=t.sent,console.log("decrease: ",n),a({type:"DISLIKE",data:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e):function(e){return function(){var t=Object(h.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.update(e,"increase");case 2:n=t.sent,console.log("increase: ",n),a({type:"LIKE",data:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),p(!m)},E=function(){var e=Object(h.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Do you really want to delete blog '".concat(a,"'"))){e.next=10;break}return e.prev=1,e.next=4,f(H(t));case 4:f(y("'".concat(a,"' was deleted from the blog list"),"info",5)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),f(y("That didn't work, please try again","error",5));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}();return t.user?r.a.createElement(K.a,{dense:!0,component:"nav","aria-labelledby":"nested-list-subheader",className:a.root},r.a.createElement(q.a,{button:!0,onClick:function(){i(!l)}},r.a.createElement(V.a,{primary:t.title,secondary:t.author}),l?r.a.createElement(ce.a,null):r.a.createElement(ue.a,null)),r.a.createElement(Q.a,{in:l,timeout:"auto",unmountOnExit:!0},r.a.createElement(K.a,{component:"div",disablePadding:!0},r.a.createElement(q.a,{button:!0,className:a.nested},r.a.createElement(V.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{variant:"body2",color:"textPrimary",component:"p"},t.url),r.a.createElement($.a,{variant:"caption",color:"textSecondary"},t.user&&t.user.name&&"added by: ".concat(t.user.name," ")),r.a.createElement($.a,{variant:"caption"},"likes: ",t.likes),r.a.createElement(X.a,{onClick:function(){return v(t.id)}},m?r.a.createElement(te.a,null):r.a.createElement(ne.a,null)),r.a.createElement(le.a,{component:u.b,to:"/blogs/".concat(t.id),variant:"outlined",style:{flexGrow:1}},"View more"),t.user.username===b.username&&r.a.createElement(X.a,{"aria-label":"delete",color:"primary",onClick:function(){return E(t.id,t.title)}},r.a.createElement(Z.a,null)))}))))):null},de=a(191),me=a(192),pe=a(193),fe=a(205),be=a(204),ge=Object(R.a)({button:{marginLeft:5,marginTop:15,marginBottom:0}}),he=function(e){var t=e.blogId,a=Object(n.useState)(""),c=Object(F.a)(a,2),o=c[0],u=c[1],l=ge(),i=Object(C.b)();return r.a.createElement(fe.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a,n,r={comment:o,blogId:t};try{i((a=r,n=t,function(){var e=Object(h.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.create(a,n);case 2:r=e.sent,t({type:"NEW_COMMENT",data:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),i(y("added a new comment: '".concat(r.comment,"'"),"info",5)),u("")}catch(c){i(y("Something went wrong, comment was not added","error",5))}}},r.a.createElement("div",{style:{display:"inline-flex",VerticalAlign:"text-bottom",BoxSizing:"inherit",textAlign:"center",AlignItems:"center",cursor:"pointer"}},r.a.createElement(be.a,{required:!0,id:"comment",label:"Add comment",value:o,onChange:function(e){u(e.target.value)}}),r.a.createElement(le.a,{className:l.button,variant:"outlined",color:"primary",type:"submit",size:"small"},"add"))))},ve=Object(R.a)((function(e){return{root:{},cardActions:{display:"flex",justifyContent:"flexEnd"},headerTitle:{fontSize:20},subHeaderTitle:{fontSize:12},sectionHeader:{fontSize:16,paddingTop:15}}})),Ee=function(e){var t=e.blog,a=ve(),n=Object(C.c)((function(e){return e.comments}));if(!t)return console.log("ei l\xf6yd\xe4 blogia"),null;var c=n.filter((function(e){return e.blogId===t.id}));return console.log(t),r.a.createElement(de.a,{className:a.root,key:t.id},r.a.createElement(me.a,{classes:{title:a.headerTitle,subheader:a.subHeaderTitle},title:t.title,subheader:t.author}),r.a.createElement(pe.a,null,r.a.createElement($.a,{variant:"body1",color:"textPrimary",component:"p"},t.url),r.a.createElement($.a,{variant:"body2",color:"textSecondary"},t.user.name&&"added by: ".concat(t.user.name," ")),r.a.createElement($.a,{variant:"body2",color:"textSecondary"},"likes: ",t.likes),r.a.createElement(he,{blogId:t.id}),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e.id},e.comment)})))))},Oe=a(206),we=function(){var e=Object(C.c)((function(e){return e.notification}));return e.visible?r.a.createElement(Oe.a,{severity:e.style},e.info):null},ye=a(207),xe=Object(R.a)({button:{marginTop:10,marginBottom:10}}),je=function(){var e=xe(),t=Object(n.useState)(""),a=Object(F.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(""),l=Object(F.a)(u,2),i=l[0],s=l[1],d=Object(n.useState)(""),m=Object(F.a)(d,2),p=m[0],f=m[1],b=Object(n.useState)(!1),v=Object(F.a)(b,2),E=v[0],O=v[1],w=Object(C.b)(),x=function(){var e=Object(h.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ",c,i),e.prev=2,e.next=5,w(P(c,i,p,E));case 5:o(""),f(""),s(""),E&&w(y("Welcome aboard, ".concat(p,"!"),"info",5)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),w(y("That didn't work, please try again","error",5));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(fe.a,{mt:2},r.a.createElement($.a,{variant:"h6"},"Log in to application"),r.a.createElement("form",{onSubmit:x},r.a.createElement(be.a,{type:"text",label:"username",id:"username",value:c,name:"Username",onChange:function(e){o(e.target.value)},fullWidth:!0}),r.a.createElement(be.a,{type:"password",label:"password",id:"password",value:i,name:"Password",onChange:function(e){s(e.target.value)},fullWidth:!0}),r.a.createElement(Q.a,{in:E,timeout:"auto",unmountOnExit:!0},r.a.createElement(be.a,{type:"text",label:"fullname",id:"fullname",value:p,name:"Fullname",onChange:function(e){f(e.target.value)},fullWidth:!0})),r.a.createElement(le.a,{className:e.button,variant:"contained",color:"primary",type:"submit",id:"login-button",fullWidth:!0},E?"register":"login"),r.a.createElement("div",{style:{display:"inline-flex",VerticalAlign:"text-bottom",BoxSizing:"inherit",textAlign:"center",AlignItems:"center",cursor:"pointer"}},r.a.createElement($.a,{variant:"body2"},"Not registered yet? Check the box and add your name"),r.a.createElement(ye.a,{onChange:function(){O(!E)}}))))},ke=a(194),Se=a(195),Ie=a(208),Te=a(102),Ne=a(196),Ae=a(101),Ce=a.n(Ae),Be=a(99),ze=a.n(Be),Le=a(100),We=a.n(Le),Ge=Object(R.a)({button:{marginTop:10,marginBottom:10}}),_e=function(e){var t=Object(n.useState)(""),a=Object(F.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(""),l=Object(F.a)(u,2),i=l[0],s=l[1],d=Object(n.useState)(""),m=Object(F.a)(d,2),p=m[0],f=m[1],b=Ge(),v=Object(C.b)();return r.a.createElement(fe.a,{maxWidth:480,m:2,mx:"auto"},r.a.createElement($.a,{variant:"h5"},"Add new blog"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.openNewBlogForm();var a,n={title:c,author:i,url:p};try{v((a=n,function(){var e=Object(h.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.create(a);case 2:n=e.sent,t({type:"NEW_BLOG",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),v(y("added a new blog: '".concat(n.title,"' by ").concat(n.author),"info",5)),s(""),o(""),f("")}catch(r){v(y("Something went wrong, blog was not added","error",5))}}},r.a.createElement(be.a,{required:!0,id:"title",label:"Title",value:c,onChange:function(e){o(e.target.value)},fullWidth:!0})," ",r.a.createElement(be.a,{id:"author",label:"Author",value:i,onChange:function(e){s(e.target.value)},fullWidth:!0}),r.a.createElement(be.a,{required:!0,id:"url",label:"url",value:p,onChange:function(e){f(e.target.value)},fullWidth:!0}),r.a.createElement(le.a,{className:b.button,variant:"contained",color:"primary",type:"submit",fullWidth:!0},"save")))},De=Object(R.a)((function(e){return{root:{flexGrow:1},iconButton:{display:"flex",flexDirection:"column",fontSize:10},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:2},username:{fontSize:12}}})),Me=function(e){var t=e.user,a=Object(n.useState)(null),c=Object(F.a)(a,2),o=c[0],u=c[1],l=Object(n.useState)(!1),i=Object(F.a)(l,2),s=i[0],d=i[1],m=Object(C.b)(),p=Object(A.g)(),f=De(),b=Boolean(o),g=function(){d(!s),console.log(s)};return r.a.createElement("div",{className:f.root},r.a.createElement(ke.a,{position:"fixed",color:"primary"},r.a.createElement(Se.a,null,r.a.createElement($.a,{variant:"h5",className:f.title},"Simple Blog List"),null===t?"":r.a.createElement("div",null,r.a.createElement(Ie.a,{title:"Add blog","aria-label":"add",arrow:!0},r.a.createElement(le.a,{color:"inherit",size:"small",onClick:g},r.a.createElement(ze.a,null))),r.a.createElement(le.a,{color:"inherit",size:"small",onClick:function(){return p.push("/blogs")}},"Blogs"),r.a.createElement(le.a,{color:"inherit",size:"small",onClick:function(){return p.push("/users")}},"Users"),r.a.createElement(X.a,{classes:{label:f.iconButton},"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(We.a,null),r.a.createElement("div",null)),r.a.createElement(Te.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:function(){u(null)}},r.a.createElement(Ne.a,null,r.a.createElement(Ce.a,null),t.name),r.a.createElement(Ne.a,{onClick:function(){u(null),window.localStorage.clear(),m({type:"LOGOUT",data:null}),p.push("/")},to:"/"},"Logout"))))),s&&r.a.createElement(fe.a,{bgcolor:"white",color:"black",border:0,boxShadow:2,borderRadius:5,p:2,position:"fixed",top:70,right:"5%",zIndex:"tooltip"},r.a.createElement(_e,{openNewBlogForm:g,className:f.blogform}),r.a.createElement("div",{align:"right"},r.a.createElement(le.a,{variant:"text",color:"primary",onClick:g,align:"right"},"cancel"))))},Ue=a(203),Je=a(198),He=a(202),Pe=a(201),Fe=a(197),Re=a(199),Ke=a(200),qe=a(104),Ve=function(){var e=Object(C.b)();Object(n.useEffect)((function(){e(function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getAll();case 2:a=e.sent,t({type:"INIT_USERS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(A.g)(),a=Object(C.c)((function(e){return e.users}));return r.a.createElement(Fe.a,{component:qe.a},r.a.createElement(Je.a,{"aria-label":"simple table"},r.a.createElement(Re.a,null,r.a.createElement(Ke.a,null,r.a.createElement(Pe.a,null,"Name"),r.a.createElement(Pe.a,{align:"right"},"Blogs added"))),r.a.createElement(He.a,null,a.map((function(e){return r.a.createElement(Ke.a,{key:e.name},r.a.createElement(Pe.a,{component:"th",scope:"row"},r.a.createElement(Ue.a,{onClick:function(){return t.push("/users/".concat(e.id))}},e.name)),r.a.createElement(Pe.a,{align:"right"},e.blogs.length))})))))},Qe=Object(R.a)((function(e){return{root:{},cardActions:{display:"flex",justifyContent:"flexEnd"},headerTitle:{fontSize:20},subHeaderTitle:{fontSize:12},sectionHeader:{fontSize:16,paddingTop:15}}})),Xe=function(e){var t=e.user,a=e.blogs,n=Object(A.g)(),c=Qe();return console.log(t),t&&a?r.a.createElement(fe.a,{m:4},r.a.createElement(de.a,{className:c.root,key:t.name},r.a.createElement(me.a,{classes:{title:c.headerTitle,subheader:c.subHeaderTitle},title:t.name,subheader:"added "}),r.a.createElement(pe.a,null,r.a.createElement("ul",null,a.map((function(e){return e.user.id===t.id&&r.a.createElement("li",{key:e.id},r.a.createElement($.a,{component:Ue.a,onClick:function(){return n.push("/blogs/".concat(e.id))}},e.title))})))))):null},Ye=function(){var e=Object(C.b)();Object(n.useEffect)((function(){e(function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAll();case 2:a=e.sent,t({type:"INIT_BLOGS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.useEffect)((function(){e(function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getAll();case 2:a=e.sent,t({type:"INIT_COMMENTS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(C.c)((function(e){return e.blogs})),a=Object(C.c)((function(e){return e.users})),c=Object(C.c)((function(e){return e.loggedUser})),o=JSON.parse(window.localStorage.getItem("loggedBlogUser"));o&&window.localStorage.setItem("blogsInStorage",JSON.stringify(t)),console.log(o);var u=Object(A.h)("/blogs/:id"),l=Object(A.h)("/users/:id"),i=u?t.find((function(e){return e.id===u.params.id})):null,s=l?a.find((function(e){return e.id===l.params.id})):null;return r.a.createElement(fe.a,{maxWidth:480,mt:0,mx:"auto"},r.a.createElement(Me,{user:c||null}),r.a.createElement(fe.a,{height:70}),r.a.createElement(we,null),r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"/blogs/:id"},r.a.createElement(Ee,{blog:i})),r.a.createElement(A.b,{exact:!0,path:"/blogs"},null===c?r.a.createElement(je,null):r.a.createElement("div",null,t.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement(se,{key:e.id,blog:e})})))),r.a.createElement(A.b,{exact:!0,path:"/users/:id"},r.a.createElement(Xe,{user:s,blogs:t})),r.a.createElement(A.b,{exact:!0,path:"/users"},r.a.createElement(Ve,null)),r.a.createElement(A.b,{path:"/"},r.a.createElement(A.a,{to:"/blogs"}))))};o.a.render(r.a.createElement(C.a,{store:N},r.a.createElement(u.a,null,r.a.createElement(Ye,null))),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.1b0cabb4.chunk.js.map