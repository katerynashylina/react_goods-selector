(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),a=c(4),n=c(5),d=c(7),l=c(6),r=c(1),i=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.addGood=function(t){e.setState({selectedGood:t})},e.deleteGood=function(){e.setState({selectedGood:""})},e}return Object(n.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(i.jsxs)("main",{className:"section container",children:[t?Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t," ","is selected",Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.deleteGood})]}):Object(i.jsx)("h1",{className:"title",children:"No goods selected"}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:u.map((function(t){return Object(i.jsxs)("tr",{"data-cy":"Good",className:e.state.selectedGood===t?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:e.state.selectedGood===t?Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.deleteGood,children:"-"}):Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addGood(t)},children:"+"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(r.Component);o.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c03776ce.chunk.js.map