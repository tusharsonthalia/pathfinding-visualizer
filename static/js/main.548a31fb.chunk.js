(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=(n(14),n(1)),l=n(2),c=n(4),u=n(3),d=n(5),h=(n(15),n(8)),m=(n(16),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isStart,i=e.isWall,o=e.onMouseDown,s=e.onMouseEnter,l=e.onMouseUp,c=e.row,u=n?"node-finish":a?"node-start":i?"node-wall":"";return r.a.createElement("div",{id:"node-".concat(c,"-").concat(t),className:"node ".concat(u),onMouseDown:function(){return o(c,t)},onMouseEnter:function(){return s(c,t)},onMouseUp:function(){return l()}})}}]),t}(a.Component));function f(e,t,n){var a=[];t.distance=0;for(var r=function(e){var t=[],n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value,l=!0,c=!1,u=void 0;try{for(var d,h=s[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var m=d.value;t.push(m)}}catch(f){c=!0,u=f}finally{try{l||null==h.return||h.return()}finally{if(c)throw u}}}}catch(f){a=!0,r=f}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return t}(e);r.length;){v(r);var i=r.shift();if(!i.isWall){if(i.distance===1/0)return a;if(i.isVisited=!0,a.push(i),i===n)return a;p(i,e)}}}function v(e){e.sort((function(e,t){return e.distance-t.distance}))}function p(e,t){var n=function(e,t){var n=[],a=e.col,r=e.row;r>0&&n.push(t[r-1][a]);r<t.length-1&&n.push(t[r+1][a]);a>0&&n.push(t[r][a-1]);a<t[0].length-1&&n.push(t[r][a+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),a=!0,r=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var l=o.value;l.distance=e.distance+1,l.previousNode=e}}catch(c){r=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}}var b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-light text-light bg-dark py-3"},r.a.createElement("span",{className:"nav-text mx-auto"},"Pathfinding Algorithm Visualizer")))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"legend-grid"},r.a.createElement("div",null,r.a.createElement("div",{className:"node node-start"}),r.a.createElement("div",{className:"legend-desc"},"Start Node")),r.a.createElement("div",null,r.a.createElement("div",{className:"node node-finish"}),r.a.createElement("div",{className:"legend-desc"},"End Node")),r.a.createElement("div",null,r.a.createElement("div",{className:"node",style:{backgroundColor:"rgba(0, 190, 218, 0.75)"}}),r.a.createElement("div",{className:"legend-desc"},"Visited Node")),r.a.createElement("div",null,r.a.createElement("div",{className:"node node-wall"}),r.a.createElement("div",{className:"legend-desc"},"Wall Node")),r.a.createElement("div",null,r.a.createElement("div",{className:"node",style:{backgroundColor:"rgb(255, 254, 106)"}}),r.a.createElement("div",{className:"legend-desc"},"Shortest Path"))))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"container mt-4 text-secondary text-left instructions"},r.a.createElement("p",null,"A Pathfinding Algorithm seeks to find the shortest path between two points. This web application created in ReactJS visualizes several pathfinding algorithms."),r.a.createElement("p",null,"The algorithms used in this application is the"," ",r.a.createElement("strong",null,"Dijkstra's Algorithm")," which is the father of pathfinding algorithms; guarantees the shortest path. In order to visualize the shortest path between the two points, click on the button above to visualize the Dijkstra's Algorithm."),r.a.createElement("p",null,"Walls can be added by clicking on the grid. Walls are impenetrable, meaning that a path cannot cross through them. Dragging through the grid can also add walls.")))}}]),t}(a.Component);n(17);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={grid:[],mouseIsPressed:!1,showInstructions:!0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=O();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=k(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=k(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateDijkstra",value:function(e,t){for(var n=this,a=function(a){if(a===e.length)return setTimeout((function(){n.animateShortestPath(t)}),10*a),{v:void 0};setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),10*a)},r=0;r<=e.length;r++){var i=a(r);if("object"===typeof i)return i.v}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*t)},n=0;n<e.length;n++)t(n)}},{key:"visualizeDijkstra",value:function(){var e=this.state.grid,t=e[8][15],n=e[8][35],a=f(e,t,n),r=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(n);this.animateDijkstra(a,r)}},{key:"showInstructions",value:function(){this.setState({showInstructions:!this.state.showInstructions})}},{key:"clearBoard",value:function(){window.location.reload()}},{key:"render",value:function(){var e,t=this,n=this.state,i=n.grid,o=n.mouseIsPressed;return e=n.showInstructions?r.a.createElement(y,null):null,r.a.createElement(a.Fragment,null,r.a.createElement(b,null),r.a.createElement(g,null),r.a.createElement("div",{className:"button-grid"},r.a.createElement("button",{className:"btn btn-lg btn-outline-dark",onClick:function(){return t.showInstructions()}},"Instructions"),r.a.createElement("button",{className:"btn btn-lg btn-outline-success",onClick:function(){return t.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),r.a.createElement("button",{className:"btn btn-lg btn-outline-danger",onClick:function(){return t.clearBoard()}},"Clear Board")),e,r.a.createElement("div",{className:"grid"},i.map((function(e,n){return r.a.createElement("div",{key:n},e.map((function(e,n){var a=e.row,i=e.col,s=e.isFinish,l=e.isStart,c=e.isWall;return r.a.createElement(m,{key:n,col:i,isFinish:s,isStart:l,isWall:c,mouseIsPressed:o,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp()},row:a})})))}))))}}]),t}(a.Component),O=function(){for(var e=[],t=0;t<15;t++){for(var n=[],a=0;a<50;a++)n.push(w(a,t));e.push(n)}return e},w=function(e,t){return{col:e,row:t,isStart:8===t&&15===e,isFinish:8===t&&35===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},k=function(e,t,n){var a=e.slice(),r=a[t][n],i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{isWall:!r.isWall});return a[t][n]=i,a},N=(n(18),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}}]),t}(a.Component));o.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.548a31fb.chunk.js.map