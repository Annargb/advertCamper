import{s as l,r as a,j as e}from"./index-2512cd1b.js";import{C as m}from"./container-74f36d89.js";import{C as c}from"./CamperСard-9634c3d5.js";const d=l.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`,g=()=>{const[r,o]=a.useState([]);a.useEffect(()=>{const t=JSON.parse(localStorage.getItem("favorites"))||[];o(t)},[]);const i=t=>{const s=r.filter(n=>n.id!==t.id);o(s),localStorage.setItem("favorites",JSON.stringify(s))};return e.jsxs(m,{children:[e.jsx("div",{children:"Favorite"}),e.jsx(d,{children:e.jsx("ul",{children:r.length!==0&&r.map(t=>e.jsx(c,{camper:t,onRemoveFavorite:i},t.id))})})]})};export{g as default};
