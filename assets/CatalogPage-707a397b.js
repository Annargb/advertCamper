import{s as l,u as c,a as r,r as d,f as m,j as e,b as p}from"./index-82f550df.js";import{s as h,a as u,b as g,C as x}from"./selectors-d26f9d15.js";import{C}from"./container-6bff3893.js";const b=l.ul`
  margin-bottom: 50px;
`,f=l.button`
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
`,P=()=>{const t=c();let s=r(h);const i=r(u),o=r(g);let n=o.length!==i.length;return d.useEffect(()=>{t(m(s))},[t,s]),e.jsxs(C,{children:[e.jsx("div",{children:"Catalog"}),e.jsx(b,{children:o.length!==0&&o.map(a=>e.jsx(x,{camper:a},a.id))}),n&&e.jsx(f,{type:"button",onClick:()=>t(p()),children:"Load more"})]})};export{P as default};
