"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[742],{687:function(n,e,r){r.d(e,{Df:function(){return c},TP:function(){return u},g4:function(){return s},n8:function(){return l},zv:function(){return p}});var t=r(165),a=r(861),o=r(243),i=new URLSearchParams({api_key:"5de032b5f903096b5b93d0d893d30ceb",language:"en-US"});o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e,r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/week?".concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(i,"&query=").concat(e));case 2:return r=n.sent,a=r.data,console.log(a.results),n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?").concat(i));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?").concat(i));case 2:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?").concat(i));case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},225:function(n,e,r){r.d(e,{B7:function(){return f},H2:function(){return h},SR:function(){return m},_0:function(){return b},_V:function(){return g},im:function(){return w},up:function(){return v}});var t,a,o,i,c,s,u,p=r(168),l=r(87),d=r(686),x=r(185),f=d.Z.ul(t||(t=(0,p.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),h=d.Z.li(a||(a=(0,p.Z)(["\n  flex-basis: calc((100% - 100px) / 5);\n  height: 420px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n  /* @media only screen and (min-width: 768px) {\n    min-height: 390px;\n  } */\n"]))),v=(0,d.Z)(l.rU)(o||(o=(0,p.Z)(["\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: space-around; */\n  height: 100%;\n\n  &:hover img {\n    filter: grayscale(0);\n  }\n\n  &:hover p {\n    color: var(--accent);\n  }\n"]))),m=d.Z.img(i||(i=(0,p.Z)(["\n  display: block;\n  height: 330px;\n  max-width: 100%;\n  margin-bottom: 5px;\n  filter: grayscale(0.4);\n\n  transition: all 200ms ease-in-out;\n"]))),g=d.Z.p(c||(c=(0,p.Z)(["\n  display: block;\n  height: auto;\n  padding: 10px 8px;\n  font-weight: 500;\n  margin: auto;\n  font-size: 8px;\n  text-align: center;\n  transition: all 200ms ease-in-out;\n  @media only screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),b=(0,d.Z)(x.boB)(s||(s=(0,p.Z)(["\n  width: 200px;\n  height: 330px;\n"]))),w=d.Z.div(u||(u=(0,p.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n"])))},742:function(n,e,r){r.r(e),r.d(e,{MovieDetails:function(){return P},default:function(){return T}});var t,a,o,i,c,s,u,p,l,d,x=r(439),f=r(689),h=r(791),v=r(687),m=r(225),g=r(168),b=r(686),w=b.Z.div(t||(t=(0,g.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),Z=b.Z.img(a||(a=(0,g.Z)(["\n  width: 150px;\n  height: auto;\n  border-radius: 4px;\n  box-shadow: var(--main-shadow);\n  @media only screen and (min-width: 768px) {\n    width: 350px;\n    height: 350px;\n  }\n"]))),y=b.Z.h2(o||(o=(0,g.Z)(["\n  /* margin-bottom: 45px; */\n  font-weight: 700;\n  font-size: 20px;\n  color: var(--accent);\n  text-shadow: var(--main-shadow);\n\n  @media only screen and (min-width: 768px) {\n     font-size: 36px;\n  }\n"]))),j=b.Z.span(i||(i=(0,g.Z)(["\n  font-weight: 700;\n  color: var(--secondary);\n"]))),k=b.Z.p(c||(c=(0,g.Z)(["\n  /* margin-bottom: 15px; */\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--accent);\n  @media only screen and (min-width: 768px) {\n     font-size: 22px;\n  }\n"]))),z=b.Z.span(s||(s=(0,g.Z)(["\n  /* margin-bottom: 30px; */\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 0.05em;\n  color: var(--secondary);\n  @media only screen and (min-width: 768px) {\n     font-size: 18px;\n  }\n"]))),_=b.Z.div(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),U=r(184),S=function(n){var e=n.movies,r=e.poster_path,t=e.title,a=e.release_date,o=e.vote_average,i=e.overview,c=e.genres.map((function(n){return n.name})).join(", "),s=(10*o).toFixed(0),u=a.slice(0,4),p="https://image.tmdb.org/t/p/w500/".concat(r);return(0,U.jsxs)(w,{children:[r?(0,U.jsx)(Z,{src:p,alt:t}):(0,U.jsx)(m._0,{}),(0,U.jsxs)(_,{children:[(0,U.jsxs)(y,{children:[t," ",(0,U.jsxs)(j,{children:["(",u,")"]})]}),(0,U.jsxs)(z,{children:[" User score: ",s,"%"]}),(0,U.jsx)(k,{children:"Overview"}),(0,U.jsx)(z,{children:i}),(0,U.jsx)(k,{children:"Genres"}),(0,U.jsx)(z,{children:c})]})]})},R=r(87),C=(0,b.Z)(R.rU)(p||(p=(0,g.Z)(["\n  display: inline-block;\n  margin-bottom: 20px;\n  padding: 8px 14px;\n\n  font-weight: 500;\n  font-size: 18px;\n\n  border-radius: 4px;\n\n  border: none;\n  color: var(--accent);\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  :hover,\n  :focus-visible {\n    color: var(--bg);\n    background-color: var(--accent);\n  }\n\n  :focus {\n    outline: 3px solid var(--bg);\n    box-shadow: 0px 0px 0px 6px var(--accent);\n  }\n"]))),L=b.Z.div(l||(l=(0,g.Z)(["\n  margin: 20px 0;\n  display: flex;\n  gap: 10px;\n"]))),O=(0,b.Z)(R.OL)(d||(d=(0,g.Z)(["\n  display: inline-block;\n  padding: 8px 14px;\n\n  font-weight: 500;\n  font-size: 18px;\n\n  border-radius: 4px;\n\n  border: none;\n  color: var(--accent);\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  &.active {\n    color: var(--bg);\n    background-color: var(--accent);\n    box-shadow: var(--main-shadow);\n  }\n\n  :hover,\n  :focus-visible {\n    color: var(--bg);\n    background-color: var(--accent);\n  }\n\n  :focus {\n    outline: 3px solid var(--bg);\n    box-shadow: 0px 0px 0px 6px var(--accent);\n  }\n"]))),P=function(){var n,e,r=(0,h.useState)(null),t=(0,x.Z)(r,2),a=t[0],o=t[1],i=(0,f.UO)().movieId,c=(0,f.TH)();if((0,h.useEffect)((function(){(0,v.TP)(i).then(o)}),[i]),!a)return null;var s=null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(C,{to:s,children:"\u2190 Go back"}),(0,U.jsx)(S,{movies:a}),(0,U.jsxs)(L,{children:[(0,U.jsx)(O,{to:"cast",state:{from:s},children:"Cast"}),(0,U.jsx)(O,{to:"reviews",state:{from:s},children:"Review"})]}),(0,U.jsx)(h.Suspense,{fallback:null,children:(0,U.jsx)(f.j3,{})})]})},T=P}}]);
//# sourceMappingURL=742.a913642c.chunk.js.map