(this["webpackJsonpreact-movie-search-app"]=this["webpackJsonpreact-movie-search-app"]||[]).push([[0],{12:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(5),r=a(6),n=a(10),s=a(9),i=a(1),l=a.n(i),o=(a(12),a(7)),u=a.n(o),j=a(3),b=a.n(j),d=a(8),h=a(4),p=a(0);function m(e){var t=e.movie;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(p.jsxs)("div",{className:"card--content",children:[Object(p.jsx)("h3",{className:"card--title",children:t.title}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(p.jsx)("p",{className:"card--desc",children:t.overview})]})]})}function v(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(i.useState)([]),n=Object(h.a)(r,2),s=n[0],l=n[1],o=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(c);case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,l(n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:"form",onSubmit:o,children:[Object(p.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(p.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"i.e. Jurassic Park",value:a,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(p.jsx)("div",{className:"card-list",children:s.filter((function(e){return e.poster_path})).map((function(e){return Object(p.jsx)(m,{movie:e},e.id)}))})]})}var O=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(p.jsx)(v,{})]})}}]),a}(l.a.Component);u.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e8d64e34.chunk.js.map