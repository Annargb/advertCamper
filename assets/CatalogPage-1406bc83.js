import{u as o,h as w,j as e,a as p,b as F,r as u,c as I,d as q,e as E,f as R,g as N,i as B,s as W,k as P,l as Z}from"./index-c04d98f8.js";import{G as X,s as G,a as O,i as j,b as D,c as K,d as Y,e as _,C as H,N as J}from"./NotFound-84f0418f.js";import"./van1-33f09857.js";const Q="#4fa94d",U={"aria-busy":!0,role:"progressbar"},ee=o.div`
  display: ${t=>t.$visible?"flex":"none"};
`,te="http://www.w3.org/2000/svg",i=242.776657104492,oe=1.6,re=w`
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
  animation: ${re} ${oe}s linear infinite;
`;const ie=w`
to {
   transform: rotate(360deg);
 }
`;o.svg`
  animation: ${ie} 0.75s steps(12, end) infinite;
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
`;const ne=({wrapperStyle:t={},visible:r=!0,wrapperClass:s="",height:a=100,width:c=100,color:n=Q,ariaLabel:g="three-circles-loading",outerCircleColor:l,innerCircleColor:x,middleCircleColor:h})=>e.jsx(ee,{style:t,$visible:r,className:s,"data-testid":"three-circles-wrapper","aria-label":g,...U,children:e.jsxs("svg",{version:"1.1",height:`${a}`,width:`${c}`,xmlns:te,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:l||n,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:h||n,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:x||n,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),se=w`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${se} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const ae=()=>e.jsx(ne,{height:"100",width:"100",color:"#d84343",wrapperStyle:{position:"absolute",top:"50%",left:"50%",margin:"auto"},visible:!0,ariaLabel:"three-circles-rotating"}),ce=o.div`
  padding-bottom: 100px;
`,le=o.div`
  display: flex;
  justify-content: space-between;
`,de=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,he=o.button`
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
`;function xe(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Location_On"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"},child:[]},{tag:"path",attr:{d:"M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"},child:[]}]}]}]})(t)}const me=o.div`
  flex-shrink: 0;
`,ue=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  margin-bottom: 32px;
`,ge=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.inputsText};
`,fe=o.input`
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
`,be=o.div`
  position: relative;
`,$e=o(xe)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 20px;
  fill: ${t=>t.theme.colors.textTitleColor};
`,je=o.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textColor};
`,T=o.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${t=>t.theme.colors.textTitleColor};
  border-bottom: 1px solid ${t=>t.theme.colors.featuresBorderColor};
`,Ce=o.form`
  margin-bottom: 64px;
`,ye=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,C=o.label`
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
`,y=o.input`
  opacity: 0;
  position: absolute;
`,k=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${t=>t.theme.colors.textTitleColor};
`,v=o.svg`
  width: 40px;
  height: 28px;
  flex-shrink: 0;
  margin-bottom: 8px;
`,L=o.button`
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
`,ke=o.div`
  display: flex;
  justify-content: space-between;
`,ve=()=>{const t=p(G),r=F(),[s,a]=u.useState(""),[c,n]=u.useState(""),g=p(O),[l,x]=u.useState(g),h=d=>{const{name:m,checked:b}=d.target;x(b?$=>[...$,m]:$=>$.filter(V=>V!==m))},z=d=>{const{name:m,checked:b}=d.target;a(b?m:"")},S=d=>r(I(d.target.value.trim())),f=d=>{n(d.target.value)},A=()=>{r(q(c)),r(E(l)),r(R()),r(N(s))},M=()=>{n(""),a(""),x([]),r(B()),r(W())};return e.jsxs(me,{children:[e.jsxs(ue,{children:[e.jsx(ge,{children:"Location"}),e.jsxs(be,{children:[e.jsx(fe,{type:"text",name:"filter",placeholder:"City",value:t,onChange:S}),e.jsx($e,{})]})]}),e.jsx(je,{children:"Filters"}),e.jsxs("form",{id:"equipmentForm",children:[e.jsx(T,{children:"Vehicle equipment"}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"airConditioner",checked:l.includes("airConditioner"),onChange:h}),e.jsx("span",{children:"AC"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"automatic",checked:s==="automatic",onChange:z}),e.jsx("span",{children:"Automatic"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"kitchen",checked:l.includes("kitchen"),onChange:h}),e.jsx("span",{children:"Kitchen"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"TV",checked:l.includes("TV"),onChange:h}),e.jsx("span",{children:"TV"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",name:"showerToilet",checked:l.includes("showerToilet"),onChange:h}),e.jsx("span",{children:"Shower/WC"})]})]})]}),e.jsxs(Ce,{id:"typeVansForm",children:[e.jsx(T,{children:"Vehicle type"}),e.jsxs(ye,{children:[e.jsxs(C,{checked:c==="panelTruck",style:{padding:"19px 30px"},children:[e.jsx(y,{type:"radio",name:"camperType",value:"panelTruck",onChange:f})," ",e.jsx(v,{children:e.jsx("use",{href:`${j}#icon-camper3`})}),e.jsx(k,{children:"Van"})]}),e.jsxs(C,{checked:c==="fullyIntegrated",children:[e.jsx(y,{type:"radio",name:"camperType",value:"fullyIntegrated",onChange:f})," ",e.jsx(v,{children:e.jsx("use",{href:`${j}#icon-camper2`})}),e.jsx(k,{children:"Fully Integrated"})]}),e.jsxs(C,{checked:c==="alcove",style:{padding:"19px 30px"},children:[e.jsx(y,{type:"radio",name:"camperType",value:"alcove",onChange:f})," ",e.jsx(v,{children:e.jsx("use",{href:`${j}#icon-camper1`})}),e.jsx(k,{children:"Alcove"})]})]})]}),e.jsxs(ke,{children:[e.jsx(L,{onClick:A,children:"Search"}),e.jsx(L,{onClick:M,style:{padding:"16px 40px"},children:"Reset filters"})]})]})},Fe=()=>{const t=F(),r=p(D),s=p(K),a=p(Y),c=p(_);return u.useEffect(()=>{t(P(r)),t(B())},[t,r]),e.jsxs(ce,{children:[e.jsx(pe,{children:"Catalog"}),e.jsxs(le,{children:[e.jsx(ve,{}),s?e.jsx(ae,{}):e.jsx(e.Fragment,{children:a.length!==0&&!s?e.jsxs(de,{children:[e.jsx("ul",{children:a.map(n=>e.jsx(H,{camper:n},n.id))}),c&&e.jsx(he,{type:"button",onClick:()=>t(Z()),children:"Load more"})]}):!s&&e.jsx(J,{text:"No campers matching the filters",styles:{width:"888px",height:"358px"}})})]})]})};export{Fe as default};
