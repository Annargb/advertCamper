import{u as s,a as r,b as i,r as n,l,j as e}from"./index-78384643.js";import{e as c,N as m,C as p}from"./NotFound-f57ba9a7.js";import"./van1-33f09857.js";const d=s.div`
  padding-bottom: 100px;
`,x=s.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,u=s.h1`
  margin-top: 28px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${o=>o.theme.colors.textTitleColor};
`,g=()=>{const o=r(c),a=i();return n.useEffect(()=>{const t=JSON.parse(localStorage.getItem("favorites"));t!=null&&a(l(t))},[a]),e.jsxs(d,{children:[e.jsx(u,{children:"Favorite"}),e.jsx(x,{children:o.length?e.jsx("ul",{children:o.length!==0&&o.map(t=>e.jsx(p,{camper:t},t.id))}):e.jsx(m,{text:"It seems like you don't have your favorite campervans"})})]})};export{g as default};
