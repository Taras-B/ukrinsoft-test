(this["webpackJsonpukrinsoft-test-task-app"]=this["webpackJsonpukrinsoft-test-task-app"]||[]).push([[0],{67:function(e,t,c){},68:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);c(0);var n,a=c(17),r=c.n(a),i=c(109),s=(c(67),c(68),c(110)),j=c(15),o=c(7),d=c(98),l=c(97),b=c(99),x=c(100),O=c(103),h=c(102),m=c(104),u=c(25),p=c(101),v=c(111);!function(e){e.ADD_TO_CART="orders/ADD_TO_CART",e.CONFIRM_TO_ORDERS="orders/SET_CONFIRM_TO_ORDERS"}(n||(n={}));var g=function(e){return{type:n.ADD_TO_CART,payload:e}},f=function(){return{type:n.CONFIRM_TO_ORDERS}},y=c(27),_=c(47),k=function(e){return e.orders.orders},C=function(e){return e.pizza.data},A=Object(_.a)(k,C,(function(e,t){var c=e.map((function(e){return Object(y.a)(e.order)})).flat(),n=[],a=function(e,t){return e[t]=(e[t]||0)+1,e},r=c.reduce(a,{}),i=Object.keys(r).sort((function(e,t){return r[t]-r[e]}));i.splice(5,1),Object.entries(t).map((function(e){var t=Object.keys(e[1]);return i.includes(e[0])?n.push.apply(n,Object(y.a)(t)):e}));var s=n.reduce(a,{}),j=Object.keys(s).sort((function(e,t){return s[t]-s[e]}));return{popular:i,ingredients:j}})),D=c(2),R=Object(l.a)({root:{maxWidth:460},wrapper:{marginTop:20},cardHeader:{textAlign:"center"}}),T=function(){var e=R(),t=Object(j.b)(),c=Object(o.f)(),n=Object(j.c)(C),a=Object.keys(n);return Object(D.jsx)(d.a,{container:!0,justify:"center",spacing:3,className:e.wrapper,children:a.map((function(a){return Object(D.jsx)(d.a,{item:!0,xs:12,md:6,sm:6,className:e.root,children:Object(D.jsxs)(b.a,{variant:"outlined",children:[Object(D.jsx)(x.a,{title:a,className:e.cardHeader}),Object(D.jsx)(p.a,{}),Object(D.jsxs)(h.a,{children:[Object(D.jsx)(u.a,{variant:"h6",color:"textSecondary",children:"Ingredients:"}),Object(D.jsx)(p.a,{}),Object(D.jsx)(d.a,{container:!0,children:Object.entries(n[a]).map((function(e){return Object(D.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(v.a,{ml:2,my:1,boxShadow:1,children:Object(D.jsxs)(u.a,{variant:"subtitle2",children:[e[0],": ",e[1]]})})},e[0])}))}),Object(D.jsx)(p.a,{})]}),Object(D.jsx)(O.a,{children:Object(D.jsx)(m.a,{color:"primary",size:"small",onClick:function(){return t(g(a)),void c.push("/orders")},children:"add to cart"})})]})},a)}))})},N=c(22),w=c(105),S=c(106),E=Object(l.a)({root:{flexGrow:1},title:{display:"flex",flexDirection:"row","& h6":{marginRight:"10px"}},navLink:{color:"white",textDecoration:"none"},navLinkActive:{color:"white",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"5px",borderRadius:"7px"}});function I(){var e=E();return Object(D.jsx)("div",{className:e.root,children:Object(D.jsx)(w.a,{position:"static",children:Object(D.jsx)(S.a,{children:Object(D.jsx)(d.a,{container:!0,direction:"row",spacing:4,children:Object(D.jsxs)(d.a,{item:!0,xs:10,className:e.title,children:[Object(D.jsx)(u.a,{variant:"h6",children:Object(D.jsx)(N.b,{activeClassName:e.navLinkActive,className:e.navLink,exact:!0,to:"/",children:"Home"})}),Object(D.jsx)(u.a,{variant:"h6",children:Object(D.jsx)(N.b,{activeClassName:e.navLinkActive,className:e.navLink,to:"/orders",children:"Orders"})}),Object(D.jsx)(u.a,{variant:"h6",children:Object(D.jsx)(N.b,{activeClassName:e.navLinkActive,className:e.navLink,to:"/statistics",children:"Statistics"})})]})})})})})}var L=c(53),F=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.orders.cart}));return t.length<1?Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(v.a,{textAlign:"center",children:Object(D.jsx)(u.a,{variant:"h6",children:"Cart is empty"})})}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(d.a,{container:!0,item:!0,spacing:3,children:t.map((function(e,t){return Object(D.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(L.a,{elevation:14,children:Object(D.jsx)(v.a,{textAlign:"center",py:1,children:Object(D.jsx)(u.a,{variant:"body1",children:e})})})},"".concat(e).concat(t))}))}),Object(D.jsx)(d.a,{container:!0,item:!0,xs:12,justify:"center",children:Object(D.jsx)(v.a,{mt:2,children:Object(D.jsx)(m.a,{color:"primary",onClick:function(){t.length>=1&&e(f())},children:"Confirm"})})})]})},z=function(e){var t=e.created,c=e.order;return Object(D.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(L.a,{elevation:14,children:Object(D.jsxs)(v.a,{ml:2,py:1,children:[Object(D.jsxs)(d.a,{container:!0,children:[Object(D.jsx)(d.a,{item:!0,xs:6,sm:3,children:Object(D.jsx)(u.a,{variant:"h5",children:"Order:"})}),Object(D.jsx)(d.a,{item:!0,xs:6,sm:9,children:Object(D.jsx)(u.a,{variant:"h6",children:c.join(", ")})})]}),Object(D.jsxs)(d.a,{container:!0,children:[Object(D.jsx)(d.a,{item:!0,xs:6,sm:4,children:Object(D.jsx)(u.a,{variant:"h5",children:"Created:"})}),Object(D.jsx)(d.a,{item:!0,xs:6,sm:8,children:Object(D.jsx)(u.a,{variant:"h6",children:new Intl.DateTimeFormat("ua-UA").format(new Date(t))})})]})]})})})},M=function(){var e=Object(j.c)(k);return Object(D.jsxs)(d.a,{container:!0,justify:"center",spacing:3,children:[Object(D.jsxs)(d.a,{container:!0,item:!0,xs:12,children:[Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(v.a,{mt:4,mb:2,textAlign:"center",children:Object(D.jsx)(u.a,{variant:"h4",children:"Cart"})})}),Object(D.jsx)(F,{})]}),Object(D.jsx)(d.a,{item:!0,xs:!0,children:Object(D.jsx)(p.a,{})}),Object(D.jsxs)(d.a,{container:!0,item:!0,xs:12,spacing:4,children:[Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(v.a,{textAlign:"center",children:Object(D.jsx)(u.a,{variant:"h4",children:"Orders"})})}),Object(D.jsx)(d.a,{container:!0,item:!0,xs:12,spacing:4,children:e.map((function(e){return Object(D.jsx)(z,{order:e.order,created:e.created},e.id)}))})]})]})},P=c(108),H=c(113),B=c(107),J=function(e){var t=e.indx,c=e.item;return Object(D.jsx)(H.a,{children:Object(D.jsx)(B.a,{disableTypography:!0,primary:Object(D.jsx)(u.a,{variant:"h6",children:"".concat(t+1,") ").concat(c)})})})},U=function(){var e=Object(j.c)(A),t=e.popular,c=e.ingredients;return t.length<1?Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(v.a,{textAlign:"center",children:Object(D.jsx)(u.a,{variant:"h6",children:"Statistics is empty"})})}):Object(D.jsxs)(d.a,{container:!0,alignItems:"flex-start",spacing:3,children:[Object(D.jsxs)(d.a,{container:!0,item:!0,xs:12,md:5,children:[Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(v.a,{mt:4,mb:2,textAlign:"center",children:Object(D.jsx)(u.a,{variant:"h4",children:"Popular pizza"})})}),Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(P.a,{component:"ul","aria-label":"popular",children:t.map((function(e,t){return Object(D.jsx)(J,{indx:t,item:e},e)}))})})]}),Object(D.jsx)(d.a,{item:!0,xs:12,md:2,children:Object(D.jsx)(v.a,{borderColor:"primary.main",style:{width:"2rem",height:"100vh"},borderRight:1,display:{xs:"none",md:"block"}})}),Object(D.jsxs)(d.a,{container:!0,item:!0,xs:12,md:5,children:[Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(v.a,{mt:4,mb:2,textAlign:"center",children:Object(D.jsx)(u.a,{variant:"h4",children:"Ingredients"})})}),Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)(P.a,{component:"ul","aria-label":"ingredients",children:c.map((function(e,t){return Object(D.jsx)(J,{indx:t,item:e},e)}))})})]})]})};var W=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(i.a,{}),Object(D.jsx)(I,{}),Object(D.jsx)(s.a,{maxWidth:"md",children:Object(D.jsxs)(o.c,{children:[Object(D.jsx)(o.a,{exact:!0,path:"/",component:T}),Object(D.jsx)(o.a,{exact:!0,path:"/orders",component:M}),Object(D.jsx)(o.a,{exact:!0,path:"/statistics",component:U})]})})]})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,115)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))},G=c(26),V=c(33),q={cart:[],orders:[]},K={data:{cap:{dough:1,tomato_sauce:1,onion:2,sausage:2,mushroom:3,cheese:1},onions:{dough:1,tomato_sauce:1,onion:2,meat:1,cheese:1},king_one:{dough:1,tomato_sauce:1,onion:2,mayo:1,mushroom:3,tomato:2,cheese:3,dill:2,parsley:2},gavay:{dough:1,tomato_sauce:1,onion:2,ananas:1,cheese:2},tonno:{dough:1,tomato_sauce:1,tuna:2,cappers:1,cheese:1},vegetarian:{dough:1,tomato_sauce:1,tomato:2,cappers:1,cucumber:2,onion:2,cheese:1}}},Q=Object(G.b)({pizza:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return t.type,e},orders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_TO_CART:return Object(V.a)(Object(V.a)({},e),{},{cart:[].concat(Object(y.a)(e.cart),[t.payload])});case n.CONFIRM_TO_ORDERS:if(e.cart.length>0){var c={id:Math.random().toString(36).substr(2,9),created:new Date,order:Object(y.a)(e.cart)};return Object(V.a)(Object(V.a)({},e),{},{cart:[],orders:[].concat(Object(y.a)(e.orders),[c])})}return e;default:return e}}}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.c,Z=Object(G.d)(Q,Y());r.a.render(Object(D.jsx)(N.a,{basename:"ukrinsoft-test",children:Object(D.jsxs)(j.a,{store:Z,children:[Object(D.jsx)(i.a,{}),Object(D.jsx)(W,{})]})}),document.getElementById("root")),X()}},[[75,1,2]]]);
//# sourceMappingURL=main.e4a5b3e2.chunk.js.map