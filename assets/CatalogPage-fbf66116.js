import{s as a,j as s,u as d,a as h,r as p,f as x}from"./index-fd4371c4.js";import{C as j}from"./container-20ddcb54.js";const g=a.li`
  border: 1px solid ${e=>e.theme.colors.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
`,m=a.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};
`,u=({camper:{name:e,price:t,location:o,gallery:r,rating:c,reviews:i,description:l}})=>{let n=r[0];return console.log(n),s.jsxs(g,{children:[s.jsx("img",{src:r,alt:e}),s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx(m,{children:e}),s.jsx("p",{children:`₴${t}`})]}),s.jsxs("div",{children:[s.jsx("p",{children:`${c}(${i.length} Reviews)`}),s.jsx("p",{children:o})]}),s.jsx("p",{children:l}),s.jsx("p",{}),s.jsx("button",{type:"button",children:"Show more"})]})]})},C=e=>e.catalog.catalogItems,$=()=>{const e=d(),t=h(C);return console.log(t),p.useEffect(()=>{e(x())},[e]),s.jsxs(j,{children:[s.jsx("div",{children:"Catalog"}),s.jsx("div",{children:t.length!==0&&t.map(o=>s.jsx(u,{camper:o},o.id))})]})};export{$ as default};
