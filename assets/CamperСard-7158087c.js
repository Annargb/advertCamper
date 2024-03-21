import{R as h,s as n,j as e,r as P}from"./index-7a4b6618.js";var k={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=h.createContext&&h.createContext(k),L=["attr","size","title"];function z(t,r){if(t==null)return{};var i=M(t,r),o,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)o=a[l],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function M(t,r){if(t==null)return{};var i={},o=Object.keys(t),l,a;for(a=0;a<o.length;a++)l=o[a],!(r.indexOf(l)>=0)&&(i[l]=t[l]);return i}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},f.apply(this,arguments)}function w(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,o)}return i}function m(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?w(Object(i),!0).forEach(function(o){I(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function I(t,r,i){return r=T(r),r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function T(t){var r=B(t,"string");return typeof r=="symbol"?r:String(r)}function B(t,r){if(typeof t!="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,r||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function $(t){return t&&t.map((r,i)=>h.createElement(r.tag,m({key:i},r.attr),$(r.child)))}function d(t){return r=>h.createElement(N,f({attr:m({},t.attr)},r),$(t.child))}function N(t){var r=i=>{var{attr:o,size:l,title:a}=t,v=z(t,L),u=l||i.size||"1em",s;return i.className&&(s=i.className),t.className&&(s=(s?s+" ":"")+t.className),h.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,v,{className:s,style:m(m({color:t.color||i.color},i.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&h.createElement("title",null,a),t.children)};return b!==void 0?h.createElement(b.Consumer,null,i=>r(i)):r(k)}function E(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}function W(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12.672.668 3.059 6.197 6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823 1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0Z"},child:[]}]})(t)}function D(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Location_On"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"},child:[]},{tag:"path",attr:{d:"M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"},child:[]}]}]}]})(t)}function F(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}const _=n.li`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  border: 1px solid ${t=>t.theme.colors.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`,A=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,y=n.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${t=>t.theme.colors.textTitleColor};
`,H=n.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`,J=n.p`
  width: 100%;
  max-width: 525px;
  margin-bottom: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${t=>t.theme.colors.textColor};
`,C=n.p`
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  /* text-decoration: underline; */
  color: ${t=>t.theme.colors.textTitleColor};
`,R=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`,Z=n.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${t=>t.theme.colors.whiteColor};
  background-color: ${t=>t.theme.colors.redColor};
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  transition: background-color 250ms ${t=>t.theme.transition};

  &:hover,
  &:focus {
    background-color: ${t=>t.theme.colors.hoverButtonColor};
  }
`,K=n(E)`
  width: 24px;
  height: 24px;
  stroke: ${t=>t.theme.colors.textTitleColor};
  stroke-width: 2.3px;
  transition:
    fill 250ms ${t=>t.theme.transition},
    stroke 250ms ${t=>t.theme.transition};

  &:hover,
  &:focus {
    fill: ${t=>t.theme.colors.redColor};
    stroke: ${t=>t.theme.colors.redColor};
  }
`,G=n(F)`
  width: 24px;
  height: 24px;
  fill: ${t=>t.theme.colors.redColor};
`,V=n.div`
  display: flex;
  gap: 10px;
`,q=n(W)`
  fill: ${t=>t.theme.colors.yellowColor};
  width: 16px;
  height: 16px;
`,O=n.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
  justify-content: center;
`,Q=n(D)`
  stroke: ${t=>t.theme.colors.textTitleColor};
  width: 16px;
  height: 16px;
`;n.svg`
  /* stroke: ${t=>t.theme.colors.textTitleColor}; */
  fill: ${t=>t.theme.colors.textTitleColor};
  width: 16px;
  height: 16px;
`;const U=n.button`
  background: none;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,X=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,p=n.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${t=>t.theme.colors.bgDetailsColor};
`,x=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  text-transform: capitalize;
  color: ${t=>t.theme.colors.textTitleColor};
`;function Y(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M17 17v4h1a2 2 0 1 0 0 -4h-1z"},child:[]},{tag:"path",attr:{d:"M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5"},child:[]},{tag:"path",attr:{d:"M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3"},child:[]},{tag:"path",attr:{d:"M9 11h4"},child:[]}]})(t)}function tt(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"},child:[]}]})(t)}function et(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 240H96V136a40.12 40.12 0 0 1 40-40h240a40.12 40.12 0 0 1 40 40v104zM48 416V304a64.19 64.19 0 0 1 64-64h288a64.19 64.19 0 0 1 64 64v112"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M48 416v-8a24.07 24.07 0 0 1 24-24h368a24.07 24.07 0 0 1 24 24v8M112 240v-16a32.09 32.09 0 0 1 32-32h80a32.09 32.09 0 0 1 32 32v16m0 0v-16a32.09 32.09 0 0 1 32-32h80a32.09 32.09 0 0 1 32 32v16"},child:[]}]})(t)}const j="/advertCamper/assets/icons-ff9e7b3f.svg",rt=({camper:t})=>e.jsxs(X,{children:[e.jsxs(p,{children:[e.jsx("svg",{style:{width:"20",height:"20"},children:e.jsx("use",{href:`${j}#icon-users`})}),e.jsx(x,{children:`${t.adults} adults`})]}),e.jsxs(p,{children:[e.jsx(Y,{style:{width:"20",height:"20"}}),e.jsx(x,{children:t.transmission})]}),e.jsxs(p,{children:[e.jsx("svg",{style:{width:"20",height:"20"},children:e.jsx("use",{href:`${j}#icon-petrol`})}),e.jsx(x,{children:t.engine})]}),e.jsxs(p,{children:[e.jsx(tt,{style:{width:"20",height:"20"}}),e.jsx(x,{children:"Kitchen"})]}),e.jsxs(p,{children:[e.jsx(et,{style:{width:"20",height:"20"}}),e.jsx(x,{children:`${t.details.beds} beds`})]}),e.jsxs(p,{children:[e.jsx("svg",{style:{width:"20",height:"20"},children:e.jsx("use",{href:`${j}#icon-ac`})}),e.jsx(x,{children:"AC"})]})]}),ot=({camper:t,onRemoveFavorite:r})=>{const[i,o]=P.useState(v(t)),l=s=>{const c=JSON.parse(localStorage.getItem("favorites"))||[];c.some(g=>g.id===s.id)||(c.push(s),localStorage.setItem("favorites",JSON.stringify(c)),o(!0))},a=s=>{const c=JSON.parse(localStorage.getItem("favorites"))||[],g=c.findIndex(S=>S.id===s.id);g!==-1&&(c.splice(g,1),localStorage.setItem("favorites",JSON.stringify(c)),o(!1),r(s))};function v(s){return(JSON.parse(localStorage.getItem("favorites"))||[]).some(g=>g.id===s.id)}const u=s=>i?a(s):l(s);return e.jsxs(_,{children:[e.jsx("div",{children:e.jsx(H,{src:t.gallery[0],alt:t.name})}),e.jsxs("div",{children:[e.jsxs(A,{children:[e.jsx(y,{children:t.name}),e.jsxs(V,{children:[e.jsx(y,{children:`₴${t.price}`}),e.jsx(U,{type:"button",onClick:()=>u(t),children:i?e.jsx(G,{}):e.jsx(K,{})})]})]}),e.jsxs(R,{children:[e.jsxs(O,{children:[e.jsx(q,{}),e.jsx(C,{children:`${t.rating}(${t.reviews.length} Reviews)`})]}),e.jsxs(O,{children:[e.jsx(Q,{}),e.jsx(C,{children:t.location})]})]}),e.jsx(J,{children:t.description}),e.jsx(rt,{camper:t}),e.jsx(Z,{type:"button",children:"Show more"})]})]})};export{ot as C};
