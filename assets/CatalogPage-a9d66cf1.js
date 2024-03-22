import{s as a,u as c,a as s,r as n,f as m,j as o,b as d}from"./index-d83b888e.js";import{C as p}from"./CamperСard-e7681dc5.js";import{C as h}from"./container-ccf0001f.js";const g=t=>t.catalog.catalogItems,u=t=>t.catalog.visibleItems,x=a.ul`
  margin-bottom: 50px;
`,C=a.button`
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
  color: ${t=>t.theme.colors.textTitleColor};
  transition: border-color 250ms ${t=>t.theme.transition};

  &:hover,
  &:focus {
    border-color: ${t=>t.theme.colors.redColor};
  }
`,I=()=>{const t=c(),l=s(g),e=s(u);let i=e.length!==l.length;return n.useEffect(()=>{t(m())},[t]),o.jsxs(h,{children:[o.jsx("div",{children:"Catalog"}),o.jsx(x,{children:e.length!==0&&e.map(r=>o.jsx(p,{camper:r},r.id))}),i&&o.jsx(C,{type:"button",onClick:()=>t(d()),children:"Load more"})]})};export{I as default};
