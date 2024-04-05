import{u as s,a as r,b as i,r as n,m as c,j as e}from"./index-a71009aa.js";import{f as l,N as m,e as p}from"./NotFound-faeaa787.js";import"./van1-33f09857.js";const d=s.div`
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
`,g=()=>{const o=r(l),a=i();return n.useEffect(()=>{const t=JSON.parse(localStorage.getItem("favorites"));t!=null&&a(c(t))},[a]),e.jsxs(d,{children:[e.jsx(u,{children:"Favorite"}),e.jsx(x,{children:o.length?e.jsx("ul",{children:o.length!==0&&o.map(t=>e.jsx(p,{camper:t},t.id))}):e.jsx(m,{text:"It seems like you don't have your favorite campervans"})})]})};export{g as default};
