(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(11),i=n.n(r),a=(n(37),n(24)),s=n.n(a),u=n(25),l=n(20),d=(n(39),n(67)),j=n(66),h=n(30),f=n.n(h),p=n(4);var b={container:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"aquamarin"},quoteBox:{position:"fixed",flexDirection:"column",color:"purple",fontSize:"20px",border:"2px solid purple",flexWrap:"wrap"}},x=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(null),i=Object(l.a)(r,2),a=i[0],h=i[1];function x(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random");case 2:e.sent.json().then((function(e){return c(e)})).catch((function(e){return h(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){x()}),[]),console.log(n.quote),console.log(n.quote),console.log(a),Object(p.jsx)("div",{className:"body",style:b.container,children:Object(p.jsxs)(d.a,{id:"quote-box",style:{backgroundColor:"white"},children:[Object(p.jsxs)("p",{id:"text",style:{fontSize:"2rem",color:"aqua"},children:[Object(p.jsx)(f.a,{}),n.content]}),Object(p.jsxs)("p",{id:"author",style:{justifyContent:"right",fontSize:"1rem",color:"aqua"},children:["-",n.author]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{id:"tweet-quote",href:"twitter.com/intent/tweet"}),Object(p.jsx)(j.a,{id:"new-quote",style:{color:"aqua"},onClick:function(){return x()},children:"New quote"})]})]})})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0e0fa6a3.chunk.js.map