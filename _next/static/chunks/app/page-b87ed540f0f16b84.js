(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{775:(e,s,r)=>{Promise.resolve().then(r.bind(r,7966)),Promise.resolve().then(r.bind(r,7234))},7966:(e,s,r)=>{"use strict";r.d(s,{default:()=>i});var l=r(5155),t=r(2115),n=r(9159),a=r.n(n);let i=()=>{let[e,s]=(0,t.useState)(null),[r,n]=(0,t.useState)({}),i=(e,s)=>{n(r=>({...r,[e]:s}))},d=e=>{a().parse(e,{complete:s=>{console.log("Parsed CSV result:",s),i(e.name,s.data)},header:!0,skipEmptyLines:!0})};return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Upload CSV File"}),(0,l.jsx)("input",{type:"file",accept:".csv",onChange:e=>{var r;let l=null===(r=e.target.files)||void 0===r?void 0:r[0];l&&(s(l),d(l))}}),e&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{children:["Uploaded File: ",e.name]}),(0,l.jsxs)("p",{children:["File size: ",(e.size/1024).toFixed(2)," KB"]})]}),(0,l.jsx)("h3",{children:"Parsed CSV Data"}),(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:e&&r[e.name]&&r[e.name].length>0&&Object.keys(r[e.name][0]).map(e=>(0,l.jsx)("th",{children:e},e))})}),(0,l.jsx)("tbody",{children:e&&r[e.name]&&r[e.name].map((e,s)=>(0,l.jsx)("tr",{children:Object.values(e).map((e,s)=>(0,l.jsx)("td",{children:e},s))},s))})]}),(0,l.jsx)("h3",{children:"Csv Files"}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:Object.entries(r).map(e=>{let[s,r]=e;return(0,l.jsx)("tr",{children:(0,l.jsx)("td",{children:s})},s)})})})]})}},7234:(e,s,r)=>{"use strict";r.d(s,{default:()=>n});var l=r(5155);r(2115);var t=r(4656);let n=()=>(0,l.jsx)(t.ComposableMap,{projection:"geoAzimuthalEqualArea",projectionConfig:{rotate:[-10,-53,0]},children:(0,l.jsxs)(t.ZoomableGroup,{children:[(0,l.jsx)(t.Geographies,{geography:"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",children:e=>{let{geographies:s}=e;return s.map(e=>(0,l.jsx)(t.Geography,{geography:e},e.rsmKey))}}),(0,l.jsx)(t.Marker,{coordinates:[0,0],children:(0,l.jsx)("circle",{r:3,fill:"#FF5533"})})]})})}},e=>{var s=s=>e(e.s=s);e.O(0,[458,441,517,358],()=>s(775)),_N_E=e.O()}]);