import{u as o,h as d,j as e,a as l,b as p,s as g,r as $,f as u,c as b}from"./index-f4954f02.js";import{C,s as y,a as k,b as v,c as j,d as w}from"./selectors-5c44160f.js";const L="#4fa94d",T={"aria-busy":!0,role:"progressbar"},z=o.div`
  display: ${t=>t.$visible?"flex":"none"};
`,F="http://www.w3.org/2000/svg",r=242.776657104492,M=1.6,I=d`
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
  animation: ${I} ${M}s linear infinite;
`;const P=d`
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
`;const S=({wrapperStyle:t={},visible:a=!0,wrapperClass:i="",height:s=100,width:n=100,color:c=L,ariaLabel:h="three-circles-loading",outerCircleColor:x,innerCircleColor:f,middleCircleColor:m})=>e.jsx(z,{style:t,$visible:a,className:i,"data-testid":"three-circles-wrapper","aria-label":h,...T,children:e.jsxs("svg",{version:"1.1",height:`${s}`,width:`${n}`,xmlns:F,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:x||c,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:m||c,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:f||c,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),B=d`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${B} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const N=()=>e.jsx(S,{height:"100",width:"100",color:"#d84343",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},visible:!0,ariaLabel:"three-circles-rotating"}),E=o.div`
  padding-bottom: 100px;
`,W=o.div`
  display: flex;
  justify-content: space-between;
  /* gap: 64px; */
`,X=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,A=o.button`
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
`,D=o.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textTitleColor};
`,K=o.div`
  flex-shrink: 0;
`,O=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`,R=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.inputsText};
`,U=o.input`
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
`,Y=o.div`
  position: relative;
`,q=o(C)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 20px;
  fill: ${t=>t.theme.colors.textTitleColor};
`,G=()=>{const t=l(y),a=p(),i=s=>a(g(s.target.value));return e.jsx(K,{children:e.jsxs(O,{children:[e.jsx(R,{children:"Location"}),e.jsxs(Y,{children:[e.jsx(U,{type:"text",name:"filter",placeholder:"Kyiv, Ukraine",value:t,onChange:i}),e.jsx(q,{})]})]})})},Q=()=>{const t=p(),a=l(k),i=l(v),s=l(j);return $.useEffect(()=>{t(u(a))},[t,a]),e.jsxs(E,{children:[e.jsx(D,{children:"Catalog"}),s?e.jsx(N,{}):e.jsxs(W,{children:[e.jsx(G,{}),e.jsxs(X,{children:[e.jsx("ul",{children:i.length!==0&&i.map(n=>e.jsx(w,{camper:n},n.id))}),e.jsx(A,{type:"button",onClick:()=>t(b()),children:"Load more"})]})]})]})};export{Q as default};