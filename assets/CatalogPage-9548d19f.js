import{s,u as c,a as r,r as h,f as p,j as e,C as m,b as d}from"./index-505e377b.js";import{s as g,a as x,b as u,C}from"./selectors-e0491b37.js";const b=s.ul`
  margin-bottom: 50px;
`,f=s.button`
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
`,j=s.h1`
  margin-top: 24px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.textTitleColor};
`,I=()=>{const t=c();let a=r(g);const i=r(x),o=r(u);let n=o.length!==i.length;return h.useEffect(()=>{t(p(a))},[t,a]),e.jsxs(m,{children:[e.jsx(j,{children:"Catalog"}),e.jsx(b,{children:o.length!==0&&o.map(l=>e.jsx(C,{camper:l},l.id))}),n&&e.jsx(f,{type:"button",onClick:()=>t(d()),children:"Load more"})]})};export{I as default};
