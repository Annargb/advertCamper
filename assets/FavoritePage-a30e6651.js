import{s as r,a as o,u as i,r as c,c as n,j as t}from"./index-82f550df.js";import{C as l}from"./container-6bff3893.js";import{c as m,C as d}from"./selectors-d26f9d15.js";const p=r.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`,x=()=>{const a=o(m),e=i();return c.useEffect(()=>{const s=JSON.parse(localStorage.getItem("favorites"));s!=null&&e(n(s))},[e]),t.jsxs(l,{children:[t.jsx("div",{children:"Favorite"}),t.jsx(p,{children:t.jsx("ul",{children:a.length!==0&&a.map(s=>t.jsx(d,{camper:s},s.id))})})]})};export{x as default};
