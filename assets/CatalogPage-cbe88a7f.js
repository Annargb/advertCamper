import{u as o,h,j as e,a as p,b as x,r as f,c as g,d as b,e as $,f as y,g as C}from"./index-889e377e.js";import{C as j,s as k,a as v,b as w,c as T,d as L,e as F}from"./selectors-fbd72408.js";const z="#4fa94d",I={"aria-busy":!0,role:"progressbar"},M=o.div`
  display: ${t=>t.$visible?"flex":"none"};
`,S="http://www.w3.org/2000/svg",r=242.776657104492,B=1.6,N=h`
12.5% {
  stroke-dasharray: ${r*.14}px, ${r}px;
  stroke-dashoffset: -${r*.11}px;
}
43.75% {
  stroke-dasharray: ${r*.35}px, ${r}px;
  stroke-dashoffset: -${r*.35}px;
}
100% {
  stroke-dasharray: ${r*.01}px, ${r}px;
  stroke-dashoffset: -${r*.99}px;
}
`;o.path`
  stroke-dasharray: ${r*.01}px, ${r};
  stroke-dashoffset: 0;
  animation: ${N} ${B}s linear infinite;
`;const P=h`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${P} 0.75s steps(12, end) infinite;
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
`;const A=({wrapperStyle:t={},visible:s=!0,wrapperClass:i="",height:c=100,width:n=100,color:a=z,ariaLabel:l="three-circles-loading",outerCircleColor:d,innerCircleColor:u,middleCircleColor:m})=>e.jsx(M,{style:t,$visible:s,className:i,"data-testid":"three-circles-wrapper","aria-label":l,...I,children:e.jsxs("svg",{version:"1.1",height:`${c}`,width:`${n}`,xmlns:S,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:d||a,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:m||a,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:u||a,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),E=h`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${E} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const V=()=>e.jsx(A,{height:"100",width:"100",color:"#d84343",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},visible:!0,ariaLabel:"three-circles-rotating"}),W=o.div`
  padding-bottom: 100px;
`,X=o.div`
  display: flex;
  justify-content: space-between;
  /* gap: 64px; */
`,R=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,D=o.button`
  border: 1px solid;
  border-color: ${t=>t.theme.colors.buttonBorderColor};
  background-color: ${t=>t.theme.colors.whiteColor};
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
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
`,K=o.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textTitleColor};
`,O=o.div`
  flex-shrink: 0;
`,U=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`,Y=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.inputsText};
`,q=o.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${t=>t.theme.colors.inputsColor};
  color: ${t=>t.theme.colors.inputsText};
  outline: none;

  &:focus {
    border: 1px solid ${t=>t.theme.colors.redColor};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${t=>t.theme.colors.inputsText};
  }
`,G=o.div`
  position: relative;
`,H=o(j)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 20px;
  fill: ${t=>t.theme.colors.textTitleColor};
`,J=()=>{const t=p(k),s=x(),[i,c]=f.useState(""),n=d=>s(b(d.target.value)),a=d=>{c(d.target.value)},l=()=>{s($(i))};return e.jsxs(O,{children:[e.jsxs(U,{children:[e.jsx(Y,{children:"Location"}),e.jsxs(G,{children:[e.jsx(q,{type:"text",name:"filter",placeholder:"Kyiv, Ukraine",value:t,onChange:n}),e.jsx(H,{})]})]}),e.jsxs("form",{id:"carForm",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"camperType",value:"panelTruck",checked:i==="panelTruck",onChange:a})," ","Van"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"camperType",value:"fullyIntegrated",checked:i==="fullyIntegrated",onChange:a})," ","Fully Integrated"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"camperType",value:"alcove",checked:i==="alcove",onChange:a})," ","Alcove"]})]}),e.jsx("button",{onClick:l,children:"Search"}),e.jsx("button",{onClick:()=>s(g()),children:"Reset filters"})]})},_=()=>{const t=x(),s=p(v),i=p(w),c=p(T),n=p(L),a=i.length%4===0;return f.useEffect(()=>{t(y(s))},[t,s]),e.jsxs(W,{children:[e.jsx(K,{children:"Catalog"}),c?e.jsx(V,{}):e.jsx(e.Fragment,{children:e.jsxs(X,{children:[e.jsx(J,{}),n.length!==0?e.jsxs(R,{children:[e.jsx("ul",{children:n.map(l=>e.jsx(F,{camper:l},l.id))}),a&&e.jsx(D,{type:"button",onClick:()=>t(C()),children:"Load more"})]}):e.jsx("p",{children:"No campers matching the filters"})]})})]})};export{_ as default};
