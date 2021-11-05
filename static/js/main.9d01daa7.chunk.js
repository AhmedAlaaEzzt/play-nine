(this["webpackJsonpplay-nine"]=this["webpackJsonpplay-nine"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(8),a=n.n(c),u=(n(13),n(2)),i=n(3),b=n(6),l=n(5),o=(n(14),n(15),n(0)),d=function(e){for(var t=[],n=0;n<e.numberOfStars;n++)t.push(Object(o.jsx)("i",{className:"fa fa-star","aria-hidden":"true"},n));return Object(o.jsx)("div",{className:"col-5",children:t})},j=function(e){var t;switch(e.answerIsCorrect){case!0:t=Object(o.jsx)("button",{className:"btn btn-success",onClick:e.acceptAnswer,children:Object(o.jsx)("i",{className:"fa fa-check"})});break;case!1:t=Object(o.jsx)("button",{className:"btn btn-danger",children:Object(o.jsx)("i",{className:"fa fa-times"})});break;default:t=Object(o.jsx)("button",{className:"btn btn-primary",onClick:e.checkAnswer,disabled:0===e.selectedNumbers.length,children:"="})}return Object(o.jsxs)("div",{className:"col-2 text-center",children:[t,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("button",{className:"btn btn-warning  btn-sm",onClick:e.redraw,disabled:0===e.redraws,children:[Object(o.jsx)("i",{className:"fa fa-refresh"})," ",e.redraws]})]})},m=function(e){return Object(o.jsx)("div",{className:"col-5",children:e.selectedNumbers.map((function(t,n){return Object(o.jsx)("span",{onClick:function(){return e.unSelectNumber(t)},children:t},n)}))})},f=(n(17),n(4)),O=function(e){var t=Object(f.range)(1,10),n=function(t){return e.usedNumbers.indexOf(t)>=0?"used":e.selectedNumbers.indexOf(t)>=0?"selected":void 0};return Object(o.jsx)("div",{className:"card text-center",children:Object(o.jsx)("div",{children:t.map((function(t,r){return Object(o.jsx)("span",{className:n(t),onClick:function(){return e.selectNumber(t)},children:t},r)}))})})},N=function(e){return Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("h2",{children:e.doneStatus}),Object(o.jsx)("button",{onClick:e.resetState,className:"btn btn-secondary",children:"Play Again"})]})},h=function e(t,n){if(t.indexOf(n)>=0)return!0;if(t[0]>n)return!1;if(t[t.length-1]>n)return t.pop(),e(t,n);for(var r=t.length,s=1<<r,c=1;c<s;c++){for(var a=0,u=0;u<r;u++)c&1<<u&&(a+=t[u]);if(n===a)return!0}return!1},x=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state=n.initialState(),e.resetState=function(){e.setState(n.initialState())},e.updateDoneStatus=function(){e.setState((function(t){return 9===t.usedNumbers.length?{doneStatus:"Done. Nice!"}:0!==t.redraws||e.possibleSolutions(t)?void 0:{doneStatus:"Game Over!"}}))},e.possibleSolutions=function(e){var t=e.numberOfStars,n=e.usedNumbers,r=Object(f.range)(1,10).filter((function(e){return-1===n.indexOf(e)}));return h(r,t)},e.redraw=function(){0!==e.state.redraws&&e.setState((function(e){return{numberOfStars:n.randomNumber(),answerIsCorrect:null,selectedNumbers:[],redraws:e.redraws-1}}),e.updateDoneStatus)},e.acceptAnswer=function(){e.setState((function(e){return{usedNumbers:e.usedNumbers.concat(e.selectedNumbers),selectedNumbers:[],answerIsCorrect:null,numberOfStars:n.randomNumber()}}),e.updateDoneStatus)},e.checkAnswer=function(){e.setState((function(e){return{answerIsCorrect:e.numberOfStars===e.selectedNumbers.reduce((function(e,t){return e+t}),0)}}))},e.selectNumber=function(t){e.state.selectedNumbers.indexOf(t)>=0||e.setState((function(e){return{answerIsCorrect:null,selectedNumbers:e.selectedNumbers.concat(t)}}))},e.unSelectNumber=function(t){e.setState((function(e){return{answerIsCorrect:null,selectedNumbers:e.selectedNumbers.filter((function(e){return e!==t}))}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.numberOfStars,n=e.answerIsCorrect,r=e.selectedNumbers,s=e.usedNumbers,c=e.redraws,a=e.doneStatus;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h3",{children:"Play Nine"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d,{numberOfStars:t}),Object(o.jsx)(j,{checkAnswer:this.checkAnswer,acceptAnswer:this.acceptAnswer,answerIsCorrect:n,selectedNumbers:r,redraw:this.redraw,redraws:c}),Object(o.jsx)(m,{unSelectNumber:this.unSelectNumber,selectedNumbers:r})]}),Object(o.jsx)("br",{}),a?Object(o.jsx)(N,{doneStatus:a,resetState:this.resetState}):Object(o.jsx)(O,{selectedNumbers:r,selectNumber:this.selectNumber,usedNumbers:s})]})}}]),n}(r.Component);x.randomNumber=function(){return Math.trunc(9*Math.random())+1},x.initialState=function(){return{selectedNumbers:[],usedNumbers:[],numberOfStars:x.randomNumber(),answerIsCorrect:null,redraws:5,doneStatus:null}};var S=x,w=(n(20),function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(S,{})})}}]),n}(r.Component)),p=w,v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.9d01daa7.chunk.js.map