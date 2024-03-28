import{u as o,h as b,j as t,a as d,b as C,r as y,c as v,d as w,e as L,f as j,s as T,g as F,i as B}from"./index-a8e1b975.js";import{G as z,s as M,i as x,a as I,b as A,c as N,d as S,C as V,N as P}from"./NotFound-17fcfff6.js";import"./van1-33f09857.js";const W="#4fa94d",Z={"aria-busy":!0,role:"progressbar"},E=o.div`
  display: ${e=>e.$visible?"flex":"none"};
`,R="http://www.w3.org/2000/svg",i=242.776657104492,X=1.6,G=b`
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
  animation: ${G} ${X}s linear infinite;
`;const O=b`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${O} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;o.polyline`
  stroke-width: ${e=>e.width}px;
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
`;const D=({wrapperStyle:e={},visible:r=!0,wrapperClass:s="",height:a=100,width:l=100,color:n=W,ariaLabel:p="three-circles-loading",outerCircleColor:h,innerCircleColor:c,middleCircleColor:k})=>t.jsx(E,{style:e,$visible:r,className:s,"data-testid":"three-circles-wrapper","aria-label":p,...Z,children:t.jsxs("svg",{version:"1.1",height:`${a}`,width:`${l}`,xmlns:R,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[t.jsx("path",{fill:h||n,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:t.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),t.jsx("path",{fill:k||n,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:t.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),t.jsx("path",{fill:c||n,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:t.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),Y=b`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${Y} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const _=()=>t.jsx(D,{height:"100",width:"100",color:"#d84343",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},visible:!0,ariaLabel:"three-circles-rotating"}),q=o.div`
  padding-bottom: 100px;
`,H=o.div`
  display: flex;
  justify-content: space-between;
`,J=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,K=o.button`
  border: 1px solid;
  border-color: ${e=>e.theme.colors.buttonBorderColor};
  background-color: ${e=>e.theme.colors.whiteColor};
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  outline: none;
  color: ${e=>e.theme.colors.textTitleColor};

  transition: border-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.redColor};
  }
`,Q=o.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textTitleColor};
`;function U(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Location_On"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"},child:[]},{tag:"path",attr:{d:"M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"},child:[]}]}]}]})(e)}const ee=o.div`
  flex-shrink: 0;
`,te=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`,oe=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.inputsText};
`,re=o.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.inputsColor};
  color: ${e=>e.theme.colors.textTitleColor};
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.inputsText};
  }

  &:focus {
    border: 1px solid ${e=>e.theme.colors.redColor};
  }
`,ie=o.div`
  position: relative;
`,se=o(U)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 20px;
  fill: ${e=>e.theme.colors.textTitleColor};
`,ne=o.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textColor};
`,ae=o.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.textTitleColor};
  border-bottom: 1px solid ${e=>e.theme.colors.featuresBorderColor};
`,le=o.form`
  margin-bottom: 64px;
`,ce=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,m=o.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  max-width: 128px;
  min-height: 100px;
  padding: 9.5px 24px;

  border-color: ${e=>e.checked?r=>r.theme.colors.redColor:r=>r.theme.colors.cardBorder};
  transition: border-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.redColor};
  }
`,f=o.input`
  opacity: 0;
  position: absolute;
`,g=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.textTitleColor};
`,u=o.svg`
  width: 40px;
  height: 28px;
  flex-shrink: 0;
  margin-bottom: 8px;
`,$=o.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.whiteColor};
  background-color: ${e=>e.theme.colors.redColor};
  border-radius: 200px;
  padding: 16px 60px;
  max-width: 174px;
  outline: none;
  transition: background-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.hoverButtonColor};
  }
`,de=o.div`
  display: flex;
  justify-content: space-between;
`,pe=()=>{const e=d(M),r=C(),[s,a]=y.useState(""),l=c=>r(v(c.target.value.trim())),n=c=>{a(c.target.value)},p=()=>{r(w(s)),r(L())},h=()=>{a(""),r(j()),r(T())};return t.jsxs(ee,{children:[t.jsxs(te,{children:[t.jsx(oe,{children:"Location"}),t.jsxs(ie,{children:[t.jsx(re,{type:"text",name:"filter",placeholder:"City",value:e,onChange:l}),t.jsx(se,{})]})]}),t.jsxs(le,{id:"typeVansForm",children:[t.jsx(ne,{children:"Filters"}),t.jsx(ae,{children:"Vehicle type"}),t.jsxs(ce,{children:[t.jsxs(m,{checked:s==="panelTruck",style:{padding:"19px 30px"},children:[t.jsx(f,{type:"radio",name:"camperType",value:"panelTruck",onChange:n})," ",t.jsx(u,{children:t.jsx("use",{href:`${x}#icon-camper3`})}),t.jsx(g,{children:"Van"})]}),t.jsxs(m,{checked:s==="fullyIntegrated",children:[t.jsx(f,{type:"radio",name:"camperType",value:"fullyIntegrated",onChange:n})," ",t.jsx(u,{children:t.jsx("use",{href:`${x}#icon-camper2`})}),t.jsx(g,{children:"Fully Integrated"})]}),t.jsxs(m,{checked:s==="alcove",style:{padding:"19px 30px"},children:[t.jsx(f,{type:"radio",name:"camperType",value:"alcove",onChange:n})," ",t.jsx(u,{children:t.jsx("use",{href:`${x}#icon-camper1`})}),t.jsx(g,{children:"Alcove"})]})]})]}),t.jsxs(de,{children:[t.jsx($,{onClick:p,children:"Search"}),t.jsx($,{onClick:h,style:{padding:"16px 40px"},children:"Reset filters"})]})]})},fe=()=>{const e=C(),r=d(I),s=d(A),a=d(N),l=d(S);return y.useEffect(()=>{e(F(r)),e(j())},[e,r]),t.jsxs(q,{children:[t.jsx(Q,{children:"Catalog"}),t.jsxs(H,{children:[t.jsx(pe,{}),s?t.jsx(_,{}):t.jsx(t.Fragment,{children:a.length!==0&&!s?t.jsxs(J,{children:[t.jsx("ul",{children:a.map(n=>t.jsx(V,{camper:n},n.id))}),l&&t.jsx(K,{type:"button",onClick:()=>e(B()),children:"Load more"})]}):!s&&t.jsx(P,{text:"No campers matching the filters",styles:{width:"888px",height:"358px"}})})]})]})};export{fe as default};
