import{u as s,a as r,b as n,r as a,g as c,j as t}from"./index-429aee2e.js";import{f as l,e as p}from"./selectors-dfcfe950.js";import{v as x}from"./van1-33f09857.js";const m=s.div`
  padding-bottom: 100px;
`,d=s.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,h=s.h1`
  margin-top: 28px;
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textTitleColor};
`,f=s.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`,g=s.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  color: ${e=>e.theme.colors.textColor};
`,u=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`,y=()=>{const e=r(l),i=n();return a.useEffect(()=>{const o=JSON.parse(localStorage.getItem("favorites"));o!=null&&i(c(o))},[i]),t.jsxs(m,{children:[t.jsx(h,{children:"Favorite"}),t.jsx(d,{children:e.length?t.jsx("ul",{children:e.length!==0&&e.map(o=>t.jsx(p,{camper:o},o.id))}):t.jsxs(u,{children:[t.jsx(g,{children:"It seems like you don't have your favorite campervans"}),t.jsx(f,{src:x,alt:"van"})]})})]})};export{y as default};