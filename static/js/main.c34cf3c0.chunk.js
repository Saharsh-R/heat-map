(this["webpackJsonpheat-map"]=this["webpackJsonpheat-map"]||[]).push([[0],{183:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a(26),c=a.n(n),i=a(205),o=a(204),s=a(11),l=a(202),u=a(207),d=a(208),h=a(4),f=a(83),p=a(203),m=a(82),b=a(3);function j(){return Object(b.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(b.jsx)(d.a,{color:"inherit",target:"_blank",href:"https://saharsh-r.github.io/",children:"Saharsh Rathi"})," ",(new Date).getFullYear(),"."]})}function g(t){var e=t.id,a=t.data,n=t.width,c=void 0===n?1200:n,i=t.height,o=void 0===i?500:i,s=a.baseTemperature;a=a.monthlyVariance;var l=60,u=a.map((function(t){return t.year})),d=h.c(u),p=(c-l-l)/(d[1]-d[0]),j=h.h().domain(d).range([l,c-l]),g=h.f().domain([0,1,2,3,4,5,6,7,8,9,10,11]).range([l,o-l]),y=h.b(g).tickFormat((function(t){var e=new Date(0);return e.setUTCMonth(t),h.j("%B")(e)})),v=h.a(j).tickFormat(h.d("d"));return Object(r.useEffect)((function(){var t=h.e,r=h.g(t).domain(h.c(a,(function(t){return t.variance}))),n=h.i("#"+e).append("svg").attr("width",c).attr("height",o+35);n.append("g").attr("id","legend").attr("class","legendSequential").attr("transform","translate(".concat(l,",").concat(o-l+40,")"));var i=Object(m.a)().shapeWidth(30).cells(10).orient("horizontal").scale(r);n.select(".legendSequential").call(i);var u=Object(f.a)().attr("class","d3-tip").attr("id","tooltip").offset([-10,0]).html((function(t){return t}));n.selectAll("whydoesthisnotworkwhenrect").data(a).enter().append("rect").attr("class","cell").attr("data-month",(function(t){return t.month-1})).attr("data-year",(function(t){return t.year})).attr("data-temp",(function(t){return s+t.variance})).attr("width",p).attr("height",(o-120)/12).attr("x",(function(t){return j(t.year)})).attr("y",(function(t){return g(t.month-1)})).style("fill",(function(t){return r(t.variance)})).on("mouseover",(function(t,e){u.attr("data-year",e.year);var a="<span class='date'>"+h.j("%Y - %B")(new Date(e.year,e.month))+"</span><br /><span style='color:orange' class='temperature'>"+h.d(".1f")(s+e.variance)+"&#8451;</span><br /><span class='variance'>"+h.d("+.1f")(e.variance)+"&#8451;</span>";u.show(a,this),h.i(t.currentTarget).style("fill","black")})).on("mouseout",(function(t,e){h.i(t.currentTarget).style("fill",r(e.variance)),u.hide(this)})),n.call(u),n.append("g").attr("transform","translate(60, 0)").attr("id","y-axis").call(y),n.append("g").attr("transform","translate(".concat(0,", ",o-l,")")).attr("id","x-axis").call(v)}),[]),Object(b.jsx)("div",{id:e,style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}})}function y(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),a=e[0],n=e[1];return Object(r.useEffect)((function(){0==a.length&&fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json").then((function(t){return t.json()})).then((function(t){n(t)}))}),[a]),Object(b.jsx)(p.a,{container:!0,alignItems:"center",justify:"center",style:{backgroundColor:"grey"},children:Object(b.jsx)(p.a,{item:!0,children:Object(b.jsxs)(u.a,{p:4,style:{backgroundColor:"#f5f5f5"},borderRadius:40,children:[Object(b.jsx)(l.a,{variant:"h4",component:"h1",align:"center",id:"title",gutterBottom:!0,children:"Monthly Global Land-Surface Temperature"}),Object(b.jsxs)(l.a,{variant:"h6",component:"h2",id:"description",align:"center",gutterBottom:!0,children:["Base temperature - ",a.baseTemperature]}),0!=a.length&&Object(b.jsx)(g,{id:"barchart",data:a}),Object(b.jsx)(j,{})]})})})}var v=a(35),O=a(84),x=Object(O.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:v.a.A400},background:{default:"#fff"}}});c.a.render(Object(b.jsxs)(o.a,{theme:x,children:[Object(b.jsx)(i.a,{}),Object(b.jsx)(y,{})]}),document.querySelector("#root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.c34cf3c0.chunk.js.map