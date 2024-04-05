import{u as o,h as v,j as t,a as f,b as z,r as b,c as M,s as w,d as T,e as N,f as W,g as A,i as q,k as P,l as R}from"./index-a71009aa.js";import{s as X,C as s,a as D,b as K,c as Y,d as G,e as H,N as J}from"./NotFound-faeaa787.js";import"./van1-33f09857.js";const O="#4fa94d",Q={"aria-busy":!0,role:"progressbar"},U=o.div`
  display: ${e=>e.$visible?"flex":"none"};
`,Z="http://www.w3.org/2000/svg",i=242.776657104492,_=1.6,ee=v`
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
  animation: ${ee} ${_}s linear infinite;
`;const te=v`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${te} 0.75s steps(12, end) infinite;
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
`;const oe=({wrapperStyle:e={},visible:r=!0,wrapperClass:a="",height:c=100,width:l=100,color:n=O,ariaLabel:m="three-circles-loading",outerCircleColor:u,innerCircleColor:g,middleCircleColor:$})=>t.jsx(U,{style:e,$visible:r,className:a,"data-testid":"three-circles-wrapper","aria-label":m,...Q,children:t.jsxs("svg",{version:"1.1",height:`${c}`,width:`${l}`,xmlns:Z,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[t.jsx("path",{fill:u||n,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:t.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),t.jsx("path",{fill:$||n,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:t.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),t.jsx("path",{fill:g||n,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:t.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),re=v`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${re} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const ie=()=>t.jsx(oe,{height:"100",width:"100",color:"#d84343",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},visible:!0,ariaLabel:"three-circles-rotating"}),ne=o.div`
  padding-bottom: 100px;
`,se=o.div`
  display: flex;
  justify-content: space-between;
`,ae=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,ce=o.button`
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
`,le=o.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textTitleColor};
`,de=o.div`
  flex-shrink: 0;
`,pe=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`,he=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.inputsText};
`,xe=o.input`
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
`,me=o.div`
  position: relative;
`,ge=o.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textColor};
`,L=o.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.textTitleColor};
  border-bottom: 1px solid ${e=>e.theme.colors.featuresBorderColor};
`,B=o.form`
  margin-bottom: 32px;
`,ue=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,fe=o.div`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 10px;
  row-gap: 8px;
`,p=o.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;

  max-width: 128px;
  height: 100px;
  padding: 9.5px 24px;

  border-color: ${e=>e.checked?e.theme.colors.redColor:e.theme.colors.cardBorder};
  transition: border-color 250ms ${e=>e.theme.transition};

  /* border-color: ${e=>e.checked?r=>r.theme.colors.redColor:r=>r.theme.colors.cardBorder};
  transition: border-color 250ms ${e=>e.theme.transition}; */

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.redColor};
  }
`;o.label`
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

  border-color: ${e=>e.checked?e.theme.colors.redColor:e.theme.colors.cardBorder};
  transition: border-color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.redColor};
  }
`;const h=o.input`
  opacity: 0;
  position: absolute;
`,x=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.textTitleColor};
`;o.svg`
  width: 40px;
  height: 28px;
  flex-shrink: 0;
  margin-bottom: 8px;
`;const F=o.button`
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
`,be=o.div`
  display: flex;
  justify-content: space-between;
`,$e=()=>{const e=f(X),r=z(),[a,c]=b.useState(""),[l,n]=b.useState(""),[m,u]=b.useState([]),g=d=>{const{value:C,checked:j}=d.target;u(j?k=>[...k,C]:k=>k.filter(E=>E!==name))},$=d=>{const{value:C,checked:j}=d.target;c(j?C:"")},S=d=>{r(M(d.target.value.trim())),d.target.value.trim()===""?r(w()):r(T())},y=d=>{n(d.target.value)},V=()=>{r(N(l)),r(W(m)),r(T()),r(A(a))},I=()=>{n(""),c(""),u([]),r(q()),r(w())};return t.jsxs(de,{children:[t.jsxs(pe,{children:[t.jsx(he,{children:"Location"}),t.jsxs(me,{children:[t.jsx(xe,{type:"text",name:"filter",placeholder:"City",value:e,onChange:S}),t.jsx(s,{name:"icon-map-pin",position:"absolute",width:"18px",height:"20px",top:"50%",left:"18px",transform:"translateY(-50%)",fill:"rgba(16, 24, 40, 0.6)"})]})]}),t.jsx(ge,{children:"Filters"}),t.jsxs(B,{id:"equipmentForm",children:[t.jsx(L,{children:"Vehicle equipment"}),t.jsxs(fe,{children:[t.jsxs(p,{style:{padding:"17px 0",width:"112px",height:"95px"},checked:m.includes("airConditioner"),children:[t.jsx(h,{type:"checkbox",name:"equipment",value:"airConditioner",onChange:g}),t.jsx(s,{name:"icon-ac",size:"32px",marginB:"8px"}),t.jsx(x,{children:"AC"})]}),t.jsxs(p,{style:{padding:"17px 0",width:"112px",height:"95px"},checked:a==="automatic",children:[t.jsx(h,{type:"checkbox",name:"equipment",value:"automatic",onChange:$}),t.jsx(s,{name:"icon-automatic",size:"32px",marginB:"8px"}),t.jsx(x,{children:"Automatic"})]}),t.jsxs(p,{style:{padding:"17px 0",width:"112px",height:"95px"},checked:m.includes("kitchen"),children:[t.jsx(h,{type:"checkbox",name:"equipment",value:"kitchen",onChange:g}),t.jsx(s,{name:"icon-kitchen",size:"32px",marginB:"8px"}),t.jsx(x,{children:"Kitchen"})]}),t.jsxs(p,{style:{padding:"17px 0",width:"112px",height:"95px"},checked:m.includes("TV"),children:[t.jsx(h,{type:"checkbox",name:"equipment",value:"TV",onChange:g}),t.jsx(s,{name:"icon-tv",size:"32px",marginB:"8px"}),t.jsx(x,{children:"TV"})]}),t.jsxs(p,{style:{padding:"17px 0",width:"112px",height:"95px"},checked:m.includes("showerToilet"),children:[t.jsx(h,{type:"checkbox",name:"equipment",value:"showerToilet",onChange:g}),t.jsx(s,{name:"icon-shower",size:"32px",marginB:"8px"}),t.jsx(x,{children:"Shower/WC"})]})]})]}),t.jsxs(B,{id:"typeVansForm",children:[t.jsx(L,{children:"Vehicle type"}),t.jsxs(ue,{children:[t.jsxs(p,{checked:l==="panelTruck",style:{padding:"19px 30px"},children:[t.jsx(h,{type:"radio",name:"camperType",value:"panelTruck",onChange:y})," ",t.jsx(s,{name:"icon-camper3",width:"40px",height:"28px",marginB:"8px"}),t.jsx(x,{children:"Van"})]}),t.jsxs(p,{checked:l==="fullyIntegrated",children:[t.jsx(h,{type:"radio",name:"camperType",value:"fullyIntegrated",onChange:y})," ",t.jsx(s,{name:"icon-camper2",width:"40px",height:"28px",marginB:"8px"}),t.jsx(x,{children:"Fully Integrated"})]}),t.jsxs(p,{checked:l==="alcove",style:{padding:"19px 30px"},children:[t.jsx(h,{type:"radio",name:"camperType",value:"alcove",onChange:y})," ",t.jsx(s,{name:"icon-camper1",width:"40px",height:"28px",marginB:"8px"}),t.jsx(x,{children:"Alcove"})]})]})]}),t.jsxs(be,{children:[t.jsx(F,{onClick:V,children:"Search"}),t.jsx(F,{onClick:I,style:{padding:"16px 40px"},children:"Reset filters"})]})]})},ke=()=>{const e=z(),r=f(D),a=f(K),c=f(Y),l=f(G);return b.useEffect(()=>{e(P(r)),e(q()),e(w())},[e,r]),t.jsxs(ne,{children:[t.jsx(le,{children:"Catalog"}),t.jsxs(se,{children:[t.jsx($e,{}),a?t.jsx(ie,{}):t.jsx(t.Fragment,{children:c.length!==0&&!a?t.jsxs(ae,{children:[t.jsx("ul",{children:c.map(n=>t.jsx(H,{camper:n},n.id))}),l&&t.jsx(ce,{type:"button",onClick:()=>e(R()),children:"Load more"})]}):!a&&t.jsx(J,{text:"No campers matching the filters",styles:{width:"888px",height:"358px"}})})]})]})};export{ke as default};
