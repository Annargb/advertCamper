import{s,a as i,u as n,r as a,c,j as t,C as l}from"./index-505e377b.js";import{c as p,C as x}from"./selectors-e0491b37.js";import{v as m}from"./van1-33f09857.js";const d=s.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,h=s.h1`
  margin-top: 28px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textTitleColor};
`,f=s.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`,u=s.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  color: ${e=>e.theme.colors.textColor};
`,g=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`,C=()=>{const e=i(p),r=n();return a.useEffect(()=>{const o=JSON.parse(localStorage.getItem("favorites"));o!=null&&r(c(o))},[r]),t.jsxs(l,{children:[t.jsx(h,{children:"Favorite"}),t.jsx(d,{children:e.length?t.jsx("ul",{children:e.length!==0&&e.map(o=>t.jsx(x,{camper:o},o.id))}):t.jsxs(g,{children:[t.jsx(u,{children:"It seems like you don't have your favorite campervans"}),t.jsx(f,{src:m,alt:"van"})]})})]})};export{C as default};
