import{u as o,h as C,j as e,a as p,b as v,r as j,c as z,d as V,e as A,f as M,g as w,s as I,i as S,k as R}from"./index-78384643.js";import{G as N,s as q,i as f,a as E,b as W,c as P,d as Z,C as X,N as G}from"./NotFound-f57ba9a7.js";import"./van1-33f09857.js";const O="#4fa94d",D={"aria-busy":!0,role:"progressbar"},K=o.div`
  display: ${t=>t.$visible?"flex":"none"};
`,Y="http://www.w3.org/2000/svg",i=242.776657104492,_=1.6,H=C`
12.5% {
  stroke-dasharray: ${i*.14}px, ${i}px;
  stroke-dashoffset: -${i*.11}px;
}
43.75% {
  stroke-dasharray: ${i*.35}px, ${i}px;
  stroke-dashoffset: -${i*.35}px;
}
100% {
  stroke-dasharray: ${i*.01}px, ${i}px;
  stroke-dashoffset: -${i*.99}px;
}
`;o.path`
  stroke-dasharray: ${i*.01}px, ${i};
  stroke-dashoffset: 0;
  animation: ${H} ${_}s linear infinite;
`;const J=C`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${J} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;o.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const Q=({wrapperStyle:t={},visible:r=!0,wrapperClass:n="",height:c=100,width:s=100,color:a=O,ariaLabel:l="three-circles-loading",outerCircleColor:x,innerCircleColor:d,middleCircleColor:m})=>e.jsx(K,{style:t,$visible:r,className:n,"data-testid":"three-circles-wrapper","aria-label":l,...D,children:e.jsxs("svg",{version:"1.1",height:`${c}`,width:`${s}`,xmlns:Y,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:x||a,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:m||a,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:d||a,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),U=C`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${U} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const ee=()=>e.jsx(Q,{height:"100",width:"100",color:"#d84343",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},visible:!0,ariaLabel:"three-circles-rotating"}),te=o.div`
  padding-bottom: 100px;
`,oe=o.div`
  display: flex;
  justify-content: space-between;
`,re=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,ie=o.button`
  border: 1px solid;
  border-color: ${t=>t.theme.colors.buttonBorderColor};
  background-color: ${t=>t.theme.colors.whiteColor};
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  outline: none;
  color: ${t=>t.theme.colors.textTitleColor};

  transition: border-color 250ms ${t=>t.theme.transition};

  &:hover,
  &:focus {
    border-color: ${t=>t.theme.colors.redColor};
  }
`,ne=o.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textTitleColor};
`;function se(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Location_On"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"},child:[]},{tag:"path",attr:{d:"M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"},child:[]}]}]}]})(t)}const ae=o.div`
  flex-shrink: 0;
`,ce=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`,le=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.inputsText};
`,de=o.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${t=>t.theme.colors.inputsColor};
  color: ${t=>t.theme.colors.textTitleColor};
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${t=>t.theme.colors.inputsText};
  }

  &:focus {
    border: 1px solid ${t=>t.theme.colors.redColor};
  }
`,he=o.div`
  position: relative;
`,pe=o(se)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 20px;
  fill: ${t=>t.theme.colors.textTitleColor};
`,xe=o.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textColor};
`,y=o.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${t=>t.theme.colors.textTitleColor};
  border-bottom: 1px solid ${t=>t.theme.colors.featuresBorderColor};
`,me=o.form`
  margin-bottom: 64px;
`,fe=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,u=o.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  max-width: 128px;
  min-height: 100px;
  padding: 9.5px 24px;

  border-color: ${t=>t.checked?r=>r.theme.colors.redColor:r=>r.theme.colors.cardBorder};
  transition: border-color 250ms ${t=>t.theme.transition};

  &:hover,
  &:focus {
    border-color: ${t=>t.theme.colors.redColor};
  }
`,g=o.input`
  opacity: 0;
  position: absolute;
`,b=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${t=>t.theme.colors.textTitleColor};
`,$=o.svg`
  width: 40px;
  height: 28px;
  flex-shrink: 0;
  margin-bottom: 8px;
`,k=o.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${t=>t.theme.colors.whiteColor};
  background-color: ${t=>t.theme.colors.redColor};
  border-radius: 200px;
  padding: 16px 60px;
  max-width: 174px;
  outline: none;
  transition: background-color 250ms ${t=>t.theme.transition};

  &:hover,
  &:focus {
    background-color: ${t=>t.theme.colors.hoverButtonColor};
  }
`,ue=o.div`
  display: flex;
  justify-content: space-between;
`,ge=()=>{const t=p(q),r=v(),[n,c]=j.useState(""),[s,a]=j.useState({airConditioner:!1,automatic:!1,kitchen:!1,TV:!1,showerToilet:!1}),l=h=>{const{name:L,checked:F}=h.target;a(B=>({...B,[L]:F}))},x=h=>r(z(h.target.value.trim())),d=h=>{c(h.target.value)},m=()=>{r(V(n)),r(A(s)),r(M())},T=()=>{c(""),a({airConditioner:!1,transmission:!1,kitchen:!1,TV:!1,showerToilet:!1}),r(w()),r(I())};return e.jsxs(ae,{children:[e.jsxs(ce,{children:[e.jsx(le,{children:"Location"}),e.jsxs(he,{children:[e.jsx(de,{type:"text",name:"filter",placeholder:"City",value:t,onChange:x}),e.jsx(pe,{})]})]}),e.jsx(xe,{children:"Filters"}),e.jsxs("form",{id:"equipmentForm",children:[e.jsx(y,{children:"Vehicle equipment"}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"airConditioner",checked:s.airConditioner,onChange:l}),e.jsx("span",{children:"AC"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"automatic",checked:s.automatic,onChange:l}),e.jsx("span",{children:"Automatic"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"kitchen",checked:s.kitchen,onChange:l}),e.jsx("span",{children:"Kitchen"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"TV",checked:s.TV,onChange:l}),e.jsx("span",{children:"TV"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"showerToilet",checked:s.showerToilet,onChange:l}),e.jsx("span",{children:"Shower/WC"})]})]})]}),e.jsxs(me,{id:"typeVansForm",children:[e.jsx(y,{children:"Vehicle type"}),e.jsxs(fe,{children:[e.jsxs(u,{checked:n==="panelTruck",style:{padding:"19px 30px"},children:[e.jsx(g,{type:"radio",name:"camperType",value:"panelTruck",onChange:d})," ",e.jsx($,{children:e.jsx("use",{href:`${f}#icon-camper3`})}),e.jsx(b,{children:"Van"})]}),e.jsxs(u,{checked:n==="fullyIntegrated",children:[e.jsx(g,{type:"radio",name:"camperType",value:"fullyIntegrated",onChange:d})," ",e.jsx($,{children:e.jsx("use",{href:`${f}#icon-camper2`})}),e.jsx(b,{children:"Fully Integrated"})]}),e.jsxs(u,{checked:n==="alcove",style:{padding:"19px 30px"},children:[e.jsx(g,{type:"radio",name:"camperType",value:"alcove",onChange:d})," ",e.jsx($,{children:e.jsx("use",{href:`${f}#icon-camper1`})}),e.jsx(b,{children:"Alcove"})]})]})]}),e.jsxs(ue,{children:[e.jsx(k,{onClick:m,children:"Search"}),e.jsx(k,{onClick:T,style:{padding:"16px 40px"},children:"Reset filters"})]})]})},Ce=()=>{const t=v(),r=p(E),n=p(W),c=p(P),s=p(Z);return j.useEffect(()=>{t(S(r)),t(w())},[t,r]),e.jsxs(te,{children:[e.jsx(ne,{children:"Catalog"}),e.jsxs(oe,{children:[e.jsx(ge,{}),n?e.jsx(ee,{}):e.jsx(e.Fragment,{children:c.length!==0&&!n?e.jsxs(re,{children:[e.jsx("ul",{children:c.map(a=>e.jsx(X,{camper:a},a.id))}),s&&e.jsx(ie,{type:"button",onClick:()=>t(R()),children:"Load more"})]}):!n&&e.jsx(G,{text:"No campers matching the filters",styles:{width:"888px",height:"358px"}})})]})]})};export{Ce as default};
