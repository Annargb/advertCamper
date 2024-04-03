import{u as o,h as T,j as e,a as f,b as q,r as b,c as N,s as w,d as L,e as W,f as A,g as P,i as S,k as R,l as X}from"./index-15efc2d2.js";import{C as n,s as D,a as K,b as Y,c as G,d as H,e as J,N as O}from"./NotFound-378e7723.js";import"./van1-33f09857.js";const Q="#4fa94d",U={"aria-busy":!0,role:"progressbar"},Z=o.div`
  display: ${t=>t.$visible?"flex":"none"};
`,_="http://www.w3.org/2000/svg",i=242.776657104492,ee=1.6,te=T`
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
  animation: ${te} ${ee}s linear infinite;
`;const oe=T`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${oe} 0.75s steps(12, end) infinite;
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
`;const re=({wrapperStyle:t={},visible:r=!0,wrapperClass:a="",height:c=100,width:l=100,color:s=Q,ariaLabel:x="three-circles-loading",outerCircleColor:u,innerCircleColor:m,middleCircleColor:$})=>e.jsx(Z,{style:t,$visible:r,className:a,"data-testid":"three-circles-wrapper","aria-label":x,...U,children:e.jsxs("svg",{version:"1.1",height:`${c}`,width:`${l}`,xmlns:_,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:u||s,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:$||s,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:m||s,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),ie=T`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${ie} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const ne=()=>e.jsx(re,{height:"100",width:"100",color:"#d84343",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},visible:!0,ariaLabel:"three-circles-rotating"}),se=o.div`
  padding-bottom: 100px;
`,ae=o.div`
  display: flex;
  justify-content: space-between;
`,ce=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,le=o.button`
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
`,pe=o.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textTitleColor};
`,de=o.div`
  flex-shrink: 0;
`,he=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`,xe=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.inputsText};
`,me=o.input`
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

  &:focus,
  &:focus-within {
    border: 1px solid ${t=>t.theme.colors.redColor};

    & + ${n} {
      fill: ${t=>t.theme.colors.textTitleColor};
    }
  }
`,ue=o.div`
  position: relative;
`,ge=o.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textColor};
`,B=o.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${t=>t.theme.colors.textTitleColor};
  border-bottom: 1px solid ${t=>t.theme.colors.featuresBorderColor};
`,F=o.form`
  margin-bottom: 32px;
`,fe=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,be=o.div`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 10px;
  row-gap: 8px;
`,v=o.label`
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
`,g=o.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  /* max-width: 128px;
  min-height: 100px;
  padding: 9.5px 24px; */

  padding: 17px 40px;
  width: 112px;
  height: 95px;

  border-color: ${t=>t.checked?t.theme.colors.redColor:t.theme.colors.cardBorder};
  transition: border-color 250ms ${t=>t.theme.transition};

  &:hover,
  &:focus {
    border-color: ${t=>t.theme.colors.redColor};
  }
`,d=o.input`
  opacity: 0;
  position: absolute;
`,h=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${t=>t.theme.colors.textTitleColor};
`;o.svg`
  width: 40px;
  height: 28px;
  flex-shrink: 0;
  margin-bottom: 8px;
`;const z=o.button`
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
`,$e=o.div`
  display: flex;
  justify-content: space-between;
`,Ce=()=>{const t=f(D),r=q(),[a,c]=b.useState(""),[l,s]=b.useState(""),[x,u]=b.useState([]),m=p=>{const{value:j,checked:y}=p.target;u(y?k=>[...k,j]:k=>k.filter(M=>M!==name))},$=p=>{const{value:j,checked:y}=p.target;c(y?j:"")},V=p=>{r(N(p.target.value.trim())),p.target.value.trim()===""?r(w()):r(L())},C=p=>{s(p.target.value)},I=()=>{r(W(l)),r(A(x)),r(L()),r(P(a))},E=()=>{s(""),c(""),u([]),r(S()),r(w())};return e.jsxs(de,{children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Location"}),e.jsxs(ue,{children:[e.jsx(me,{type:"text",name:"filter",placeholder:"City",value:t,onChange:V}),e.jsx(n,{name:"icon-map-pin",position:"absolute",width:"18px",height:"20px",top:"50%",left:"18px",transform:"translateY(-50%)",fill:"rgba(16, 24, 40, 0.6)"})]})]}),e.jsx(ge,{children:"Filters"}),e.jsxs(F,{id:"equipmentForm",children:[e.jsx(B,{children:"Vehicle equipment"}),e.jsxs(be,{children:[e.jsxs(g,{checked:x.includes("airConditioner"),children:[e.jsx(d,{type:"checkbox",name:"equipment",value:"airConditioner",onChange:m}),e.jsx(n,{name:"icon-ac",size:"32px",marginB:"8px"}),e.jsx(h,{children:"AC"})]}),e.jsxs(g,{checked:a==="automatic",children:[e.jsx(d,{type:"checkbox",name:"equipment",value:"automatic",onChange:$}),e.jsx(n,{name:"icon-automatic",size:"32px",marginB:"8px"}),e.jsx(h,{children:"Automatic"})]}),e.jsxs(g,{checked:x.includes("kitchen"),children:[e.jsx(d,{type:"checkbox",name:"equipment",value:"kitchen",onChange:m}),e.jsx(n,{name:"icon-kitchen",size:"32px",marginB:"8px"}),e.jsx(h,{children:"Kitchen"})]}),e.jsxs(g,{checked:x.includes("TV"),children:[e.jsx(d,{type:"checkbox",name:"equipment",value:"TV",onChange:m}),e.jsx(n,{name:"icon-tv",size:"32px",marginB:"8px"}),e.jsx(h,{children:"TV"})]}),e.jsxs(g,{checked:x.includes("showerToilet"),children:[e.jsx(d,{type:"checkbox",name:"equipment",value:"showerToilet",onChange:m}),e.jsx(n,{name:"icon-shower",size:"32px",marginB:"8px"}),e.jsx(h,{children:"Shower/WC"})]})]})]}),e.jsxs(F,{id:"typeVansForm",children:[e.jsx(B,{children:"Vehicle type"}),e.jsxs(fe,{children:[e.jsxs(v,{checked:l==="panelTruck",style:{padding:"19px 30px"},children:[e.jsx(d,{type:"radio",name:"camperType",value:"panelTruck",onChange:C})," ",e.jsx(n,{name:"icon-camper3",width:"40px",height:"28px",marginB:"8px"}),e.jsx(h,{children:"Van"})]}),e.jsxs(v,{checked:l==="fullyIntegrated",children:[e.jsx(d,{type:"radio",name:"camperType",value:"fullyIntegrated",onChange:C})," ",e.jsx(n,{name:"icon-camper2",width:"40px",height:"28px",marginB:"8px"}),e.jsx(h,{children:"Fully Integrated"})]}),e.jsxs(v,{checked:l==="alcove",style:{padding:"19px 30px"},children:[e.jsx(d,{type:"radio",name:"camperType",value:"alcove",onChange:C})," ",e.jsx(n,{name:"icon-camper1",width:"40px",height:"28px",marginB:"8px"}),e.jsx(h,{children:"Alcove"})]})]})]}),e.jsxs($e,{children:[e.jsx(z,{onClick:I,children:"Search"}),e.jsx(z,{onClick:E,style:{padding:"16px 40px"},children:"Reset filters"})]})]})},ve=()=>{const t=q(),r=f(K),a=f(Y),c=f(G),l=f(H);return b.useEffect(()=>{t(R(r)),t(S()),t(w())},[t,r]),e.jsxs(se,{children:[e.jsx(pe,{children:"Catalog"}),e.jsxs(ae,{children:[e.jsx(Ce,{}),a?e.jsx(ne,{}):e.jsx(e.Fragment,{children:c.length!==0&&!a?e.jsxs(ce,{children:[e.jsx("ul",{children:c.map(s=>e.jsx(J,{camper:s},s.id))}),l&&e.jsx(le,{type:"button",onClick:()=>t(X()),children:"Load more"})]}):!a&&e.jsx(O,{text:"No campers matching the filters",styles:{width:"888px",height:"358px"}})})]})]})};export{ve as default};
