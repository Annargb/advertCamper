import{u as t,L as r,j as o,C as n}from"./index-93f71628.js";import{v as i}from"./van1-33f09857.js";const s=t.div`
  flex-shrink: 0;
  width: 630px;
  height: 630px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  background-image: url(${i});
`,a=t.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`,l=t.h1`
  font-weight: 600;
  font-size: 84px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 44px;
  color: ${e=>e.theme.colors.textTitleColor};
`,c=t(r)`
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: ${e=>e.theme.colors.textColor};

  transition: color 250ms ${e=>e.theme.transition};

  &:hover {
    color: ${e=>e.theme.colors.hoverButtonColor};
  }
`,m=()=>o.jsx(n,{children:o.jsxs(a,{children:[o.jsx(s,{}),o.jsxs("div",{children:[o.jsx(l,{children:"Your adventures start here!"}),o.jsx(c,{to:"/catalog",children:"Book your campervan now"})]})]})});export{m as default};
