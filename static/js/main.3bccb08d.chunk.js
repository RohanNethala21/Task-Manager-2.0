(this["webpackJsonptask-manager-2.0"]=this["webpackJsonptask-manager-2.0"]||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(7),o=a.n(n),c=(a(17),a(3)),i=a(5),m=a(1);var s=m.b`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
    background-color: ${e=>e.theme.colors.cardBackground};
    color: ${e=>e.theme.colors.text};
    border: 1px solid ${e=>e.theme.colors.border};
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.text};
  }

  p {
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.text};
  }
`;const d=Object(r.createContext)(),p=e=>{let{children:t}=e;const[a,n]=Object(r.useState)(!1),[o,c]=Object(r.useState)(null),[i,m]=Object(r.useState)(!0),[s,p]=Object(r.useState)([]);Object(r.useEffect)(()=>{(()=>{const e=localStorage.getItem("taskManagerUser");e&&(c(JSON.parse(e)),n(!0));const t=localStorage.getItem("taskManagerUsers");t?p(JSON.parse(t)):(localStorage.setItem("taskManagerUsers",JSON.stringify([])),p([])),m(!1)})()},[]);return l.a.createElement(d.Provider,{value:{isAuthenticated:a,user:o,loading:i,users:s,register:(e,t,a)=>{if(s.some(e=>e.email===t))return{success:!1,message:"Email already registered"};const r={id:Date.now(),name:e,email:t,password:a,role:"user",createdAt:(new Date).toISOString()},l=[...s,r];return localStorage.setItem("taskManagerUsers",JSON.stringify(l)),p(l),localStorage.setItem("taskManagerUser",JSON.stringify(r)),c(r),n(!0),{success:!0}},login:(e,t)=>{const a=s.find(a=>a.email===e&&a.password===t);return a?(localStorage.setItem("taskManagerUser",JSON.stringify(a)),c(a),n(!0),{success:!0}):{success:!1,message:"Invalid email or password"}},logout:()=>{localStorage.removeItem("taskManagerUser"),c(null),n(!1)}}},t)},u=()=>Object(r.useContext)(d),g=Object(r.createContext)(),h=e=>{let{children:t}=e;const[a,n]=Object(r.useState)([]),[o,c]=Object(r.useState)(!0);Object(r.useEffect)(()=>{(()=>{const e=localStorage.getItem("taskManagerTasks");if(e)n(JSON.parse(e));else{const e=[{id:1,title:"Complete Project Proposal",category:"Work",dueDate:"2025-04-15",priority:"high",completed:!1,subtasks:[{id:101,title:"Research competitors",completed:!0},{id:102,title:"Draft executive summary",completed:!1}],points:10},{id:2,title:"Schedule Doctor Appointment",category:"Personal",dueDate:"2025-03-25",priority:"medium",completed:!1,subtasks:[],points:5},{id:3,title:"Finish Reading Book",category:"Personal",dueDate:"2025-04-01",priority:"low",completed:!0,subtasks:[{id:301,title:"Read chapters 1-5",completed:!0},{id:302,title:"Read chapters 6-10",completed:!0}],points:3}];n(e),localStorage.setItem("taskManagerTasks",JSON.stringify(e))}c(!1)})()},[]),Object(r.useEffect)(()=>{o||localStorage.setItem("taskManagerTasks",JSON.stringify(a))},[a,o]);return l.a.createElement(g.Provider,{value:{tasks:a,loading:o,addTask:e=>{const t={...e,id:Date.now(),completed:!1,subtasks:[],points:"high"===e.priority?10:"medium"===e.priority?5:3};n([...a,t])},deleteTask:e=>{n(a.filter(t=>t.id!==e))},toggleTaskCompletion:e=>{n(a.map(t=>t.id===e?t.completed?{...t,completed:!1}:{...t,completed:!0,subtasks:t.subtasks.map(e=>({...e,completed:!0}))}:t))},editTask:(e,t)=>{n(a.map(a=>a.id===e?{...a,...t}:a))},addSubtask:(e,t)=>{n(a.map(a=>{if(a.id===e){const e={...t,id:Date.now(),completed:!1};return{...a,subtasks:[...a.subtasks,e]}}return a}))},deleteSubtask:(e,t)=>{n(a.map(a=>a.id===e?{...a,subtasks:a.subtasks.filter(e=>e.id!==t)}:a))},toggleSubtaskCompletion:(e,t)=>{n(a.map(a=>{if(a.id===e){const e=a.subtasks.map(e=>e.id===t?{...e,completed:!e.completed}:e),r=e.length>0&&e.every(e=>e.completed);return{...a,subtasks:e,completed:r}}return a}))},editSubtask:(e,t,r)=>{n(a.map(a=>a.id===e?{...a,subtasks:a.subtasks.map(e=>e.id===t?{...e,...r}:e)}:a))},getTotalTasksCount:()=>a.length,getCompletionPercentage:()=>{if(0===a.length)return 0;const e=a.filter(e=>e.completed).length;return Math.round(e/a.length*100)},getTotalPoints:()=>a.filter(e=>e.completed).reduce((e,t)=>e+(t.points||0),0)}},t)},x=()=>Object(r.useContext)(g),b=Object(r.createContext)(),E=e=>{let{children:t}=e;const[a,n]=Object(r.useState)(()=>localStorage.getItem("taskManagerTheme")||"light");Object(r.useEffect)(()=>{localStorage.setItem("taskManagerTheme",a)},[a]);const o="light"===a?{colors:{primary:"#000000",secondary:"#ffffff",background:"#f5f5f5",cardBackground:"#ffffff",success:"#4CAF50",warning:"#FF5252",highPriority:"#FFC107",text:"#333333",lightGray:"#e0e0e0",darkGray:"#757575",border:"#e0e0e0"},fonts:{main:"'Roboto', sans-serif"},breakpoints:{mobile:"576px",tablet:"768px",desktop:"992px",largeDesktop:"1200px"}}:{colors:{primary:"#BB86FC",secondary:"#121212",background:"#121212",cardBackground:"#1E1E1E",success:"#4CAF50",warning:"#FF5252",highPriority:"#FFC107",text:"#E1E1E1",lightGray:"#333333",darkGray:"#BBBBBB",border:"#333333"},fonts:{main:"'Roboto', sans-serif"},breakpoints:{mobile:"576px",tablet:"768px",desktop:"992px",largeDesktop:"1200px"}};return l.a.createElement(b.Provider,{value:{theme:o,themeMode:a,toggleTheme:()=>{n(e=>"light"===e?"dark":"light")}}},t)},f=()=>Object(r.useContext)(b),v=m.c.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`,y=m.c.span`
  margin-right: 8px;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
`,w=m.c.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`,k=m.c.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: ${e=>e.theme.colors.primary};
  }
  
  &:checked + span:before {
    transform: translateX(26px);
  }
`,$=m.c.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e=>e.theme.colors.lightGray};
  transition: 0.4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`,C=m.c.span`
  margin-left: 8px;
  font-size: 1.2rem;
`;var z=()=>{const{themeMode:e,toggleTheme:t}=f();return l.a.createElement(v,null,l.a.createElement(y,null,"Theme"),l.a.createElement(w,null,l.a.createElement(k,{type:"checkbox",checked:"dark"===e,onChange:t}),l.a.createElement($,null)),l.a.createElement(C,null,"dark"===e?"\ud83c\udf19":"\u2600\ufe0f"))};const S=m.c.nav`
  background-color: ${e=>e.theme.colors.cardBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`,D=m.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
`,j=Object(m.c)(i.b)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  
  svg {
    margin-right: 10px;
  }
`,O=m.c.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    display: none;
  }
`,T=Object(m.c)(i.b)`
  padding: 5px 10px;
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.active?"bold":"normal"};
  border-bottom: ${e=>e.active?"2px solid "+e.theme.colors.primary:"none"};
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,P=m.c.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,F=m.c.span`
  font-weight: 500;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    display: none;
  }
`,M=m.c.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1rem;
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    text-decoration: underline;
  }
`,B=m.c.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    display: block;
  }
`,G=m.c.div`
  display: ${e=>e.isOpen?"block":"none"};
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: ${e=>e.theme.colors.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  
  @media (min-width: ${e=>e.theme.breakpoints.tablet}) {
    display: none;
  }
`,L=Object(m.c)(i.b)`
  display: block;
  padding: 15px 20px;
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.active?"bold":"normal"};
  border-left: ${e=>e.active?"4px solid "+e.theme.colors.primary:"none"};
  padding-left: ${e=>e.active?"16px":"20px"};
  
  &:hover {
    background-color: #f5f5f5;
  }
`,A=m.c.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 15px 20px;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;var R=()=>{const e=window.location,[t,a]=l.a.useState(!1),{isAuthenticated:r,user:n,logout:o}=u(),i=Object(c.q)(),m=()=>{o(),i("/")};return"/"===e.pathname||"/login"===e.pathname||!r?null:l.a.createElement(S,null,l.a.createElement(D,null,l.a.createElement(j,{to:"/dashboard"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("rect",{x:"3",y:"3",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"3",y:"14",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"14",y:"3",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"14",y:"14",width:"7",height:"7",fill:"black"})),"Task Manager 2.0"),l.a.createElement(O,null,l.a.createElement(T,{to:"/dashboard",active:"/dashboard"===e.pathname?1:0},"Dashboard"),l.a.createElement(T,{to:"/tasks",active:"/tasks"===e.pathname?1:0},"Tasks"),l.a.createElement(T,{to:"/productivity",active:"/productivity"===e.pathname?1:0},"Productivity"),l.a.createElement(T,{to:"/settings",active:"/settings"===e.pathname?1:0},"Settings"),l.a.createElement(T,{to:"/account",active:"/account"===e.pathname?1:0},"Account")),l.a.createElement(P,null,l.a.createElement(z,null),l.a.createElement(F,null,"Hello, ",(null===n||void 0===n?void 0:n.name)||"User"),l.a.createElement(M,{onClick:m},"Logout")),l.a.createElement(B,{onClick:()=>{a(!t)}},t?"\u2715":"\u2630")),l.a.createElement(G,{isOpen:t},l.a.createElement(L,{to:"/dashboard",active:"/dashboard"===e.pathname?1:0},"Dashboard"),l.a.createElement(L,{to:"/tasks",active:"/tasks"===e.pathname?1:0},"Tasks"),l.a.createElement(L,{to:"/productivity",active:"/productivity"===e.pathname?1:0},"Productivity"),l.a.createElement(L,{to:"/settings",active:"/settings"===e.pathname?1:0},"Settings"),l.a.createElement(L,{to:"/account",active:"/account"===e.pathname?1:0},"Account"),l.a.createElement(A,{onClick:m},"Logout")))};const H=m.c.nav`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: ${e=>e.theme.breakpoints.tablet}) {
    display: none;
  }
`,U=m.c.ul`
  display: flex;
  list-style: none;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
`,N=m.c.li`
  padding: 10px 0;
`,W=Object(m.c)(i.b)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  color: ${e=>e.active?e.theme.colors.primary:e.theme.colors.darkGray};
  font-weight: ${e=>e.active?"bold":"normal"};
  
  svg {
    margin-bottom: 5px;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;var V=()=>{const e=Object(c.o)();return l.a.createElement(H,null,l.a.createElement(U,null,l.a.createElement(N,null,l.a.createElement(W,{to:"/dashboard",active:"/dashboard"===e.pathname?1:0},l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",fill:"currentColor"})),"Dashboard")),l.a.createElement(N,null,l.a.createElement(W,{to:"/tasks",active:"/tasks"===e.pathname?1:0},l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})),"Tasks")),l.a.createElement(N,null,l.a.createElement(W,{to:"/productivity",active:"/productivity"===e.pathname?1:0},l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",fill:"currentColor"})),"Productivity")),l.a.createElement(N,null,l.a.createElement(W,{to:"/settings",active:"/settings"===e.pathname?1:0},l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",fill:"currentColor"})),"Settings")),l.a.createElement(N,null,l.a.createElement(W,{to:"/account",active:"/account"===e.pathname?1:0},l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})),"Account"))))};const I=m.c.footer`
  background-color: ${e=>e.theme.colors.cardBackground};
  padding: 20px;
  text-align: center;
  border-top: 1px solid ${e=>e.theme.colors.border};
  margin-top: auto;
`,J=m.c.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 10px;
`,Y=m.c.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 0.9rem;
`,q=Object(m.c)(i.b)`
  color: ${e=>e.theme.colors.text};
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    text-decoration: underline;
  }
`;var Q=()=>{const e=(new Date).getFullYear();return l.a.createElement(I,null,l.a.createElement(J,null,"\xa9 ",e," Task Manager 2.0 - All Rights Reserved"),l.a.createElement(Y,null,l.a.createElement(q,{to:"/contact"},"Contact Us"),l.a.createElement(q,{to:"/privacy"},"Privacy Policy"),l.a.createElement(q,{to:"/terms"},"Terms & Conditions")))};const K=m.c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,X=m.c.header`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid ${e=>e.theme.colors.lightGray};
`,Z=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  
  svg {
    margin-right: 10px;
  }
`,_=m.c.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,ee=m.c.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  overflow: hidden;
`,te=m.c.form`
  flex: 1;
  padding: 40px;
  background-color: #f9f9f9;
`,ae=m.c.div`
  flex: 1;
  background-color: #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 80%;
    height: auto;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    display: none;
  }
`,re=m.c.div`
  margin-bottom: 20px;
`,le=m.c.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,ne=m.c.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
`,oe=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,ce=m.c.input`
  margin-right: 10px;
`,ie=m.c.button`
  width: 100%;
  padding: 12px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #333;
  }
`,me=m.c.p`
  text-align: center;
  
  a {
    color: ${e=>e.theme.colors.primary};
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,se=m.c.p`
  color: ${e=>e.theme.colors.warning};
  text-align: center;
  margin-bottom: 15px;
`,de=m.c.footer`
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid ${e=>e.theme.colors.lightGray};
`,pe=m.c.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`,ue=m.c.div`
  font-weight: bold;
`,ge=m.c.div`
  display: flex;
  gap: 20px;
`,he=m.c.a`
  color: ${e=>e.theme.colors.darkGray};
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;var xe=()=>{const e=Object(c.q)(),{login:t}=u(),[a,n]=Object(r.useState)(""),[o,m]=Object(r.useState)(""),[s,d]=Object(r.useState)(!1),[p,g]=Object(r.useState)("");return l.a.createElement(K,null,l.a.createElement(X,null,l.a.createElement(Z,null,l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("rect",{x:"3",y:"3",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"3",y:"14",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"14",y:"3",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"14",y:"14",width:"7",height:"7",fill:"black"})),"Task Manager 2.0")),l.a.createElement(_,null,l.a.createElement(ee,null,l.a.createElement(te,{onSubmit:r=>{if(r.preventDefault(),!a||!o)return void g("Please enter both email and password");const l=t(a,o);l.success?e("/dashboard"):g(l.message||"Invalid email or password")}},l.a.createElement("h2",{style:{textAlign:"center",marginBottom:"20px"}},"Login to Your Account"),l.a.createElement(me,null,"Don't have an account? ",l.a.createElement(i.b,{to:"/register"},"Register")),p&&l.a.createElement(se,null,p),l.a.createElement(re,null,l.a.createElement(le,{htmlFor:"email"},"E-mail"),l.a.createElement(ne,{type:"email",id:"email",value:a,onChange:e=>n(e.target.value)})),l.a.createElement(re,null,l.a.createElement(le,{htmlFor:"password"},"Password"),l.a.createElement(ne,{type:"password",id:"password",value:o,onChange:e=>m(e.target.value)})),l.a.createElement(oe,null,l.a.createElement(ce,{type:"checkbox",id:"remember",checked:s,onChange:e=>d(e.target.checked)}),l.a.createElement(le,{htmlFor:"remember",style:{margin:0}},"Remember me")),l.a.createElement(ie,{type:"submit"},"Log in")),l.a.createElement(ae,null,l.a.createElement("svg",{width:"200",height:"200",viewBox:"0 0 200 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M0 80 Q 40 60 80 80 T 160 80 T 200 80",stroke:"#FFFFFF",strokeWidth:"5",fill:"#87CEFA"}),l.a.createElement("path",{d:"M0 60 Q 40 40 80 60 T 160 60 T 200 60",stroke:"#FFFFFF",strokeWidth:"5",fill:"#ADD8E6"}))))),l.a.createElement(de,null,l.a.createElement(pe,null,l.a.createElement(ue,null,"LOGO"),l.a.createElement("div",null,"\xa9 2010 \u2014 2025"),l.a.createElement(ge,null,l.a.createElement(he,{href:"#privacy"},"Privacy"),l.a.createElement(he,{href:"#terms"},"Terms")))))};const be=m.c.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Ee=m.c.header`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid ${e=>e.theme.colors.lightGray};
`,fe=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  
  svg {
    margin-right: 10px;
  }
`,ve=m.c.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,ye=m.c.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  overflow: hidden;
`,we=m.c.form`
  flex: 1;
  padding: 40px;
  background-color: #f9f9f9;
`,ke=m.c.div`
  flex: 1;
  background-color: #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 80%;
    height: auto;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    display: none;
  }
`,$e=m.c.div`
  margin-bottom: 20px;
`,Ce=m.c.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,ze=m.c.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
`,Se=m.c.button`
  width: 100%;
  padding: 12px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #333;
  }
`,De=m.c.p`
  text-align: center;
  
  a {
    color: ${e=>e.theme.colors.primary};
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,je=m.c.p`
  color: ${e=>e.theme.colors.warning};
  text-align: center;
  margin-bottom: 15px;
`,Oe=m.c.p`
  color: ${e=>e.theme.colors.success};
  text-align: center;
  margin-bottom: 15px;
`,Te=m.c.footer`
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid ${e=>e.theme.colors.lightGray};
`,Pe=m.c.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`,Fe=m.c.div`
  font-weight: bold;
`,Me=m.c.div`
  display: flex;
  gap: 20px;
`,Be=m.c.a`
  color: ${e=>e.theme.colors.darkGray};
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;var Ge=()=>{const e=Object(c.q)(),{register:t}=u(),[a,n]=Object(r.useState)(""),[o,m]=Object(r.useState)(""),[s,d]=Object(r.useState)(""),[p,g]=Object(r.useState)(""),[h,x]=Object(r.useState)(""),[b,E]=Object(r.useState)("");return l.a.createElement(be,null,l.a.createElement(Ee,null,l.a.createElement(fe,null,l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("rect",{x:"3",y:"3",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"3",y:"14",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"14",y:"3",width:"7",height:"7",fill:"black"}),l.a.createElement("rect",{x:"14",y:"14",width:"7",height:"7",fill:"black"})),"Task Manager 2.0")),l.a.createElement(ve,null,l.a.createElement(ye,null,l.a.createElement(we,{onSubmit:r=>{if(r.preventDefault(),x(""),E(""),!a||!o||!s||!p)return void x("Please fill in all fields");if(s!==p)return void x("Passwords do not match");if(s.length<6)return void x("Password must be at least 6 characters long");const l=t(a,o,s);l.success?(E("Registration successful! Redirecting to dashboard..."),setTimeout(()=>{e("/dashboard")},2e3)):x(l.message||"Registration failed")}},l.a.createElement("h2",{style:{textAlign:"center",marginBottom:"20px"}},"Create an Account"),l.a.createElement(De,null,"Already have an account? ",l.a.createElement(i.b,{to:"/"},"Log in")),h&&l.a.createElement(je,null,h),b&&l.a.createElement(Oe,null,b),l.a.createElement($e,null,l.a.createElement(Ce,{htmlFor:"name"},"Full Name"),l.a.createElement(ze,{type:"text",id:"name",value:a,onChange:e=>n(e.target.value)})),l.a.createElement($e,null,l.a.createElement(Ce,{htmlFor:"email"},"E-mail"),l.a.createElement(ze,{type:"email",id:"email",value:o,onChange:e=>m(e.target.value)})),l.a.createElement($e,null,l.a.createElement(Ce,{htmlFor:"password"},"Password"),l.a.createElement(ze,{type:"password",id:"password",value:s,onChange:e=>d(e.target.value)})),l.a.createElement($e,null,l.a.createElement(Ce,{htmlFor:"confirmPassword"},"Confirm Password"),l.a.createElement(ze,{type:"password",id:"confirmPassword",value:p,onChange:e=>g(e.target.value)})),l.a.createElement(Se,{type:"submit"},"Register")),l.a.createElement(ke,null,l.a.createElement("svg",{width:"200",height:"200",viewBox:"0 0 200 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M0 80 Q 40 60 80 80 T 160 80 T 200 80",stroke:"#FFFFFF",strokeWidth:"5",fill:"#87CEFA"}),l.a.createElement("path",{d:"M0 60 Q 40 40 80 60 T 160 60 T 200 60",stroke:"#FFFFFF",strokeWidth:"5",fill:"#ADD8E6"}))))),l.a.createElement(Te,null,l.a.createElement(Pe,null,l.a.createElement(Fe,null,"LOGO"),l.a.createElement("div",null,"\xa9 2010 \u2014 2025"),l.a.createElement(Me,null,l.a.createElement(Be,{href:"#privacy"},"Privacy"),l.a.createElement(Be,{href:"#terms"},"Terms")))))};const Le=m.c.div`
  padding: 20px;
`,Ae=m.c.div`
  margin-bottom: 30px;
  text-align: center;
`,Re=m.c.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`,He=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 20px;
`,Ue=m.c.div`
  margin-bottom: 40px;
`,Ne=m.c.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`,We=m.c.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,Ve=m.c.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`,Ie=m.c.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background-color: ${e=>e.bgColor||"#e0e0e0"};
`,Je=m.c.div`
  flex: 1;
`,Ye=m.c.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 5px;
`,qe=m.c.p`
  font-size: 1.5rem;
  font-weight: bold;
`,Qe=m.c.div`
  margin-bottom: 40px;
`,Ke=m.c.div`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Xe=m.c.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${e=>e.theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`,Ze=m.c.div`
  font-size: 1.5rem;
  margin-right: 15px;
`,_e=m.c.div`
  flex: 1;
`,et=m.c.p`
  font-weight: 500;
  margin-bottom: 5px;
`,tt=m.c.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.darkGray};
`,at=m.c.div`
  font-weight: 500;
  color: ${e=>{switch(e.level){case"high":return e.theme.colors.warning;case"medium":return e.theme.colors.highPriority;default:return e.theme.colors.darkGray}}};
`,rt=m.c.div`
  margin-bottom: 40px;
`,lt=m.c.div`
  margin-bottom: 40px;
`,nt=m.c.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,ot=m.c.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,ct=m.c.p`
  font-weight: 500;
  margin-bottom: 10px;
`,it=m.c.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
`,mt=m.c.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.darkGray};
`;var st=()=>{const{tasks:e,getTotalTasksCount:t,getCompletionPercentage:a,getTotalPoints:n}=x(),{user:o}=u(),[c,i]=Object(r.useState)(0),[m,s]=Object(r.useState)(0),[d,p]=Object(r.useState)([]),[g,h]=Object(r.useState)([]),[b,E]=Object(r.useState)([]);Object(r.useEffect)(()=>{const t=e.filter(e=>e.completed);i(t.length),s(n());const a=new Date;a.setHours(0,0,0,0);const r=e.filter(e=>{if(e.completed)return!1;if(!e.dueDate)return!1;return new Date(e.dueDate)<a});p(r);const l=new Date;l.setDate(l.getDate()+7);const o=e.filter(e=>{if(e.completed)return!1;if(!e.dueDate)return!1;const t=new Date(e.dueDate);return t>=a&&t<=l}).sort((e,t)=>new Date(e.dueDate)-new Date(t.dueDate));h(o.slice(0,3));const c=e.filter(e=>!e.completed).sort((e,t)=>{const a={high:0,medium:1,low:2},r=a[e.priority]-a[t.priority];return 0!==r?r:e.dueDate&&t.dueDate?new Date(e.dueDate)-new Date(t.dueDate):0});E(c.slice(0,3))},[e,n]);const f=e=>{if(!e)return"No due date";return new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})};return l.a.createElement(Le,null,l.a.createElement(Ae,null,l.a.createElement(Re,null,"Welcome back, ",(null===o||void 0===o?void 0:o.name)||"User","!"),l.a.createElement(He,null,"Stay organized, prioritize effectively, and maintain momentum through Task Manager 2.0")),l.a.createElement(Ue,null,l.a.createElement(Ne,null,"Task Overview"),l.a.createElement(We,null,l.a.createElement(Ve,null,l.a.createElement(Ie,{bgColor:"#e8f5e9"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"#4CAF50"}))),l.a.createElement(Je,null,l.a.createElement(Ye,null,"Tasks Completed"),l.a.createElement(qe,null,c))),l.a.createElement(Ve,null,l.a.createElement(Ie,{bgColor:"#e3f2fd"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z",fill:"#2196F3"}))),l.a.createElement(Je,null,l.a.createElement(Ye,null,"Points Earned"),l.a.createElement(qe,null,m))),l.a.createElement(Ve,null,l.a.createElement(Ie,{bgColor:"#ffebee"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",fill:"#F44336"}))),l.a.createElement(Je,null,l.a.createElement(Ye,null,"Overdue Tasks"),l.a.createElement(qe,null,d.length))))),l.a.createElement(Qe,null,l.a.createElement(Ne,null,"Your Tasks"),l.a.createElement(Ke,null,b.length>0?b.map(e=>l.a.createElement(Xe,{key:e.id},l.a.createElement(Ze,null,(e=>{switch(e){case"Work":return"\ud83d\udcbc";case"Personal":return"\ud83d\ude0a";case"School":return"\ud83d\udcda";default:return"\ud83d\udcdd"}})(e.category)),l.a.createElement(_e,null,l.a.createElement(et,null,e.title),l.a.createElement(tt,null,f(e.dueDate))),l.a.createElement(at,{level:e.priority},e.priority))):l.a.createElement(Xe,null,l.a.createElement(Ze,null,l.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udf89")),l.a.createElement(_e,null,l.a.createElement(et,null,"No active tasks"),l.a.createElement(tt,null,"All caught up!")),l.a.createElement(at,null,"-")))),l.a.createElement(rt,null,l.a.createElement(Ne,null,"Upcoming Deadlines"),l.a.createElement(Ke,null,g.length>0?g.map(e=>l.a.createElement(Xe,{key:e.id},l.a.createElement(Ze,null,(e=>{if(!e)return!1;const t=new Date;t.setHours(0,0,0,0);return new Date(e)<t})(e.dueDate)?"\u23f0":"\ud83d\udcc5"),l.a.createElement(_e,null,l.a.createElement(et,null,e.title),l.a.createElement(tt,null,f(e.dueDate))),l.a.createElement(at,{level:e.priority},e.priority))):l.a.createElement(Xe,null,l.a.createElement(Ze,null,l.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udf89")),l.a.createElement(_e,null,l.a.createElement(et,null,"No upcoming deadlines"),l.a.createElement(tt,null,"You're all set!")),l.a.createElement(at,null,"-")))),l.a.createElement(lt,null,l.a.createElement(Ne,null,"Your Weekly Productivity"),l.a.createElement(nt,null,l.a.createElement(ot,null,l.a.createElement(ct,null,"Completed Tasks"),l.a.createElement(it,null,c),l.a.createElement(mt,null,"Out of ",t()," total tasks")),l.a.createElement(ot,null,l.a.createElement(ct,null,"Completion Rate"),l.a.createElement(it,null,a(),"%"),l.a.createElement(mt,null,"Keep up the good work!")))))};const dt=m.c.div`
  padding: 20px;
`,pt=m.c.div`
  margin-bottom: 30px;
  text-align: center;
`,ut=m.c.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`,gt=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 20px;
`,ht=m.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
  }
`,xt=m.c.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  max-width: 400px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    max-width: 100%;
    width: 100%;
  }
`,bt=m.c.button`
  padding: 12px 20px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`,Et=m.c.div`
  margin-bottom: 40px;
`,ft=m.c.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`,vt=m.c.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
`,yt=m.c.div`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border-left: 4px solid ${e=>{switch(e.priority){case"high":return e.theme.colors.warning;case"medium":return e.theme.colors.highPriority;default:return e.theme.colors.success}}};
`,wt=m.c.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${e=>e.completed?e.theme.colors.success:e.theme.colors.lightGray};
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${e=>e.completed?e.theme.colors.success:"transparent"};
  
  svg {
    display: ${e=>e.completed?"block":"none"};
  }
`,kt=m.c.div`
  flex: 1;
`,$t=m.c.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  text-decoration: ${e=>e.completed?"line-through":"none"};
  color: ${e=>e.completed?e.theme.colors.darkGray:e.theme.colors.text};
`,Ct=m.c.div`
  display: flex;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.darkGray};
`,zt=m.c.span`
  margin-right: 15px;
`,St=m.c.span`
  color: ${e=>e.overdue?e.theme.colors.warning:e.theme.colors.darkGray};
  font-weight: ${e=>e.overdue?"bold":"normal"};
`,Dt=m.c.div`
  display: flex;
  gap: 10px;
`,jt=m.c.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>e.theme.colors.darkGray};
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,Ot=m.c.div`
  margin-bottom: 40px;
`,Tt=m.c.form`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Pt=m.c.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,Ft=m.c.div`
  flex: 1;
`,Mt=m.c.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Bt=m.c.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
`,Gt=m.c.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`,Lt=m.c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,At=m.c.div`
  padding: 8px 15px;
  border-radius: 20px;
  background-color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.lightGray};
  color: ${e=>e.selected?"white":e.theme.colors.text};
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${e=>e.selected?e.theme.colors.primary:"#d0d0d0"};
  }
`,Rt=m.c.button`
  padding: 12px 20px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: #333;
  }
`,Ht=m.c.div`
  margin-bottom: 40px;
`,Ut=m.c.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,Nt=m.c.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Wt=m.c.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`,Vt=m.c.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,It=m.c.div`
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  
  &:hover {
    background-color: ${e=>e.theme.colors.lightGray};
  }
`,Jt=m.c.div`
  text-align: center;
  padding: 30px;
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${e=>e.theme.colors.darkGray};
`;var Yt=()=>{const{tasks:e,addTask:t,deleteTask:a,toggleTaskCompletion:n,editTask:o}=x(),[c,i]=Object(r.useState)(!1),[m,s]=Object(r.useState)(!1),[d,p]=Object(r.useState)({title:"",category:"Work",dueDate:"",priority:"medium"}),[u,g]=Object(r.useState)({id:null,title:"",category:"Work",dueDate:"",priority:"medium"}),[h,b]=Object(r.useState)(""),[E,f]=Object(r.useState)("all"),v=e=>{const{name:t,value:a}=e.target;p({...d,[t]:a})},y=e=>{const{name:t,value:a}=e.target;g({...u,[t]:a})},w=e=>{p({...d,category:e})},k=e=>{g({...u,category:e})},$=e.filter(e=>!(h&&!e.title.toLowerCase().includes(h.toLowerCase()))&&(!("completed"===E&&!e.completed)&&("active"!==E||!e.completed))),C=e=>{if(!e)return!1;return new Date(e)<new Date};return l.a.createElement(dt,null,l.a.createElement(pt,null,l.a.createElement(ut,null,"Task Management Page"),l.a.createElement(gt,null,"Stay organized and productive with Task Manager 2.0")),l.a.createElement(ht,null,l.a.createElement(xt,{type:"text",placeholder:"Search tasks...",value:h,onChange:e=>b(e.target.value)}),l.a.createElement(bt,{onClick:()=>{i(!0),s(!1)}},"Add New Task")),c&&l.a.createElement(Ot,null,l.a.createElement(ft,null,"Add New Task"),l.a.createElement(Tt,{onSubmit:e=>{e.preventDefault(),d.title?(t(d),p({title:"",category:"Work",dueDate:"",priority:"medium"}),i(!1)):alert("Please enter a task title")}},l.a.createElement(Pt,null,l.a.createElement(Ft,null,l.a.createElement(Mt,{htmlFor:"title"},"Task Name"),l.a.createElement(Bt,{type:"text",id:"title",name:"title",placeholder:"Enter task name",value:d.title,onChange:v})),l.a.createElement(Ft,null,l.a.createElement(Mt,{htmlFor:"dueDate"},"Due Date"),l.a.createElement(Bt,{type:"date",id:"dueDate",name:"dueDate",value:d.dueDate,onChange:v}))),l.a.createElement(Pt,null,l.a.createElement(Ft,null,l.a.createElement(Mt,null,"Priority"),l.a.createElement(Gt,{name:"priority",value:d.priority,onChange:v},l.a.createElement("option",{value:"high"},"High"),l.a.createElement("option",{value:"medium"},"Medium"),l.a.createElement("option",{value:"low"},"Low"))),l.a.createElement(Ft,null,l.a.createElement(Mt,null,"Category"),l.a.createElement(Lt,null,l.a.createElement(At,{selected:"Work"===d.category,onClick:()=>w("Work")},"Work"),l.a.createElement(At,{selected:"Personal"===d.category,onClick:()=>w("Personal")},"Personal"),l.a.createElement(At,{selected:"School"===d.category,onClick:()=>w("School")},"School"),l.a.createElement(At,{selected:"Other"===d.category,onClick:()=>w("Other")},"Other")))),l.a.createElement(Rt,{type:"submit"},"Add Task"))),m&&l.a.createElement(Ot,null,l.a.createElement(ft,null,"Edit Task"),l.a.createElement(Tt,{onSubmit:e=>{if(e.preventDefault(),!u.title)return void alert("Please enter a task title");const{id:t,...a}=u;o(t,a),g({id:null,title:"",category:"Work",dueDate:"",priority:"medium"}),s(!1)}},l.a.createElement(Pt,null,l.a.createElement(Ft,null,l.a.createElement(Mt,{htmlFor:"editTitle"},"Task Name"),l.a.createElement(Bt,{type:"text",id:"editTitle",name:"title",placeholder:"Enter task name",value:u.title,onChange:y})),l.a.createElement(Ft,null,l.a.createElement(Mt,{htmlFor:"editDueDate"},"Due Date"),l.a.createElement(Bt,{type:"date",id:"editDueDate",name:"dueDate",value:u.dueDate,onChange:y}))),l.a.createElement(Pt,null,l.a.createElement(Ft,null,l.a.createElement(Mt,null,"Priority"),l.a.createElement(Gt,{name:"priority",value:u.priority,onChange:y},l.a.createElement("option",{value:"high"},"High"),l.a.createElement("option",{value:"medium"},"Medium"),l.a.createElement("option",{value:"low"},"Low"))),l.a.createElement(Ft,null,l.a.createElement(Mt,null,"Category"),l.a.createElement(Lt,null,l.a.createElement(At,{selected:"Work"===u.category,onClick:()=>k("Work")},"Work"),l.a.createElement(At,{selected:"Personal"===u.category,onClick:()=>k("Personal")},"Personal"),l.a.createElement(At,{selected:"School"===u.category,onClick:()=>k("School")},"School"),l.a.createElement(At,{selected:"Other"===u.category,onClick:()=>k("Other")},"Other")))),l.a.createElement(Rt,{type:"submit"},"Update Task"))),l.a.createElement(Et,null,l.a.createElement(ft,null,"Task List"),$.length>0?l.a.createElement(vt,null,$.map(e=>l.a.createElement(yt,{key:e.id,priority:e.priority},l.a.createElement(wt,{completed:e.completed,onClick:()=>n(e.id)},l.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"white"}))),l.a.createElement(kt,null,l.a.createElement($t,{completed:e.completed},e.title),l.a.createElement(Ct,null,l.a.createElement(zt,null,e.category),e.dueDate&&l.a.createElement(St,{overdue:C(e.dueDate)},"Due: ",new Date(e.dueDate).toLocaleDateString()))),l.a.createElement(Dt,null,l.a.createElement(jt,{onClick:()=>(e=>{g({id:e.id,title:e.title,category:e.category,dueDate:e.dueDate||"",priority:e.priority}),s(!0),i(!1)})(e)},l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"}))),l.a.createElement(jt,{onClick:()=>a(e.id)},l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"}))))))):l.a.createElement(Jt,null,"No tasks found. Add a new task to get started!")),l.a.createElement(Ht,null,l.a.createElement(ft,null,"Filters & Sorting"),l.a.createElement(Ut,null,l.a.createElement(Nt,null,l.a.createElement(Wt,null,l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z",fill:"currentColor"})),"Filter By Status"),l.a.createElement(Vt,null,l.a.createElement(It,{style:{fontWeight:"all"===E?"bold":"normal"},onClick:()=>f("all")},"All Tasks"),l.a.createElement(It,{style:{fontWeight:"active"===E?"bold":"normal"},onClick:()=>f("active")},"Active Tasks"),l.a.createElement(It,{style:{fontWeight:"completed"===E?"bold":"normal"},onClick:()=>f("completed")},"Completed Tasks"))))))};const qt=m.c.div`
  padding: 20px;
`,Qt=m.c.div`
  margin-bottom: 30px;
  text-align: center;
`,Kt=m.c.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`,Xt=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 20px;
`,Zt=m.c.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`,_t=m.c.div`
  margin-bottom: 40px;
`,ea=m.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,ta=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
`,aa=m.c.button`
  padding: 8px 15px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`,ra=m.c.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,la=m.c.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,na=m.c.p`
  font-weight: 500;
  margin-bottom: 15px;
  color: ${e=>e.theme.colors.darkGray};
`,oa=m.c.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text};
`,ca=m.c.div`
  margin-bottom: 40px;
`,ia=m.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,ma=m.c.button`
  padding: 8px 15px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`,sa=m.c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,da=m.c.div`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,pa=m.c.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: ${e=>e.theme.colors.text};
`,ua=m.c.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 15px;
`,ga=m.c.div`
  height: 200px;
  position: relative;
`,ha=m.c.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  padding-top: 20px;
`,xa=m.c.div`
  width: 30px;
  height: ${e=>e.height}%;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: 4px 4px 0 0;
`,ba=m.c.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    ${e=>e.theme.colors.primary} 0% ${e=>e.completionPercentage}%,
    ${e=>e.theme.colors.darkGray} ${e=>e.completionPercentage}% 100%
  );
  margin: 0 auto;
`,Ea=m.c.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.darkGray};
  margin-top: 15px;
`,fa=m.c.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`,va=m.c.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${e=>e.color};
  margin-right: 5px;
`,ya=m.c.div`
  margin-bottom: 40px;
`,wa=m.c.div`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,ka=m.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,$a=m.c.h3`
  font-size: 1.2rem;
  margin-bottom: 0;
  color: ${e=>e.theme.colors.text};
`,Ca=m.c.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary};
`,za=m.c.div`
  width: 100%;
`,Sa=m.c.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${e=>e.theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`,Da=m.c.div`
  color: ${e=>e.theme.colors.text};
`,ja=m.c.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text};
`;var Oa=()=>{const{tasks:e,getTotalTasksCount:t,getCompletionPercentage:a,getTotalPoints:n}=x(),[o,c]=Object(r.useState)(0),[i,m]=Object(r.useState)(0),[s,d]=Object(r.useState)(0),[p,u]=Object(r.useState)(0),g=Object(r.useCallback)(()=>{const t=e.filter(e=>e.completed).length;return Math.min(Math.floor(t/2),14)},[e]);Object(r.useEffect)(()=>{c(t()),m(a()),d(n()),u(g())},[e,t,a,n,g]);const h=(()=>{const t={};return e.forEach(e=>{t[e.category]||(t[e.category]=0),t[e.category]++}),t})();return l.a.createElement(qt,null,l.a.createElement(Qt,null,l.a.createElement(Kt,null,"Productivity Tracking"),l.a.createElement(Xt,null,"Check your progress and performance")),l.a.createElement(_t,null,l.a.createElement(Zt,null,"Summary Cards"),l.a.createElement(ea,null,l.a.createElement(ta,null,"Get quick insights"),l.a.createElement(aa,null,"View Details")),l.a.createElement(ra,null,l.a.createElement(la,null,l.a.createElement(na,null,"Tasks Completed"),l.a.createElement(oa,null,i,"%")),l.a.createElement(la,null,l.a.createElement(na,null,"Streak"),l.a.createElement(oa,null,p," Days")),l.a.createElement(la,null,l.a.createElement(na,null,"Total Tasks"),l.a.createElement(oa,null,o)))),l.a.createElement(ya,null,l.a.createElement(Zt,null,"Points System"),l.a.createElement(wa,null,l.a.createElement(ka,null,l.a.createElement($a,null,"Total Points Earned"),l.a.createElement(Ca,null,s," pts")),l.a.createElement(za,null,l.a.createElement(Sa,null,l.a.createElement(Da,null,"High Priority Tasks"),l.a.createElement(ja,null,"10 points each")),l.a.createElement(Sa,null,l.a.createElement(Da,null,"Medium Priority Tasks"),l.a.createElement(ja,null,"5 points each")),l.a.createElement(Sa,null,l.a.createElement(Da,null,"Low Priority Tasks"),l.a.createElement(ja,null,"3 points each")),l.a.createElement(Sa,null,l.a.createElement(Da,null,"Subtasks Completed"),l.a.createElement(ja,null,e.reduce((e,t)=>e+t.subtasks.length,0)," subtasks"))))),l.a.createElement(ca,null,l.a.createElement(ia,null,l.a.createElement(Zt,null,"Visual Data"),l.a.createElement(ma,null,"Export")),l.a.createElement(sa,null,l.a.createElement(da,null,l.a.createElement(pa,null,"Task Completion Rate"),l.a.createElement(ua,null,"Overall progress"),l.a.createElement(ga,null,l.a.createElement(ba,{completionPercentage:i})),l.a.createElement(Ea,null,l.a.createElement(fa,null,l.a.createElement(va,{color:e=>e.theme.colors.primary}),l.a.createElement("span",null,"Completed (",i,"%)")),l.a.createElement(fa,null,l.a.createElement(va,{color:e=>e.theme.colors.darkGray}),l.a.createElement("span",null,"Remaining (",100-i,"%)")))),l.a.createElement(da,null,l.a.createElement(pa,null,"Points Earned"),l.a.createElement(ua,null,"Total: ",s," points"),l.a.createElement(ga,null,l.a.createElement(ha,null,l.a.createElement(xa,{height:60}),l.a.createElement(xa,{height:40}),l.a.createElement(xa,{height:70}),l.a.createElement(xa,{height:50}),l.a.createElement(xa,{height:80}),l.a.createElement(xa,{height:45}),l.a.createElement(xa,{height:65}))),l.a.createElement(Ea,null,"Last 7 days"))),l.a.createElement(da,null,l.a.createElement(pa,null,"Tasks Breakdown"),l.a.createElement(ua,null,"By category"),l.a.createElement(ga,null,l.a.createElement(ba,{completionPercentage:70})),l.a.createElement(Ea,null,Object.keys(h).map((e,t)=>l.a.createElement(fa,{key:t},l.a.createElement(va,{color:0===t?e=>e.theme.colors.primary:1===t?e=>e.theme.colors.warning:e=>e.theme.colors.success}),l.a.createElement("span",null,e," (",h[e],")")))))))};const Ta=m.c.div`
  padding: 20px;
`,Pa=m.c.div`
  background-color: #4b6455;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`,Fa=m.c.div`
  display: flex;
  align-items: center;
`,Ma=m.c.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
`,Ba=m.c.div``,Ga=m.c.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
`,La=m.c.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
`,Aa=m.c.div`
  display: flex;
  gap: 10px;
`,Ra=m.c.button`
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: ${e=>e.primary?"transparent":"black"};
  color: white;
  border: ${e=>e.primary?"1px solid white":"none"};
  
  &:hover {
    background-color: ${e=>e.primary?"rgba(255, 255, 255, 0.1)":"#333"};
  }
`,Ha=m.c.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`,Ua=m.c.div`
  margin-bottom: 40px;
`,Na=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 30px;
`,Wa=m.c.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,Va=m.c.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`,Ia=m.c.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background-color: ${e=>e.bgColor||"#e0e0e0"};
`,Ja=m.c.div`
  flex: 1;
`,Ya=m.c.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`,qa=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  font-size: 0.9rem;
`,Qa=m.c.div`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`,Ka=m.c.div`
  margin-bottom: 40px;
`,Xa=m.c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Za=m.c.div`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,_a=m.c.p`
  font-weight: 500;
  margin-bottom: 10px;
`,er=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  font-size: 0.9rem;
  margin-bottom: 15px;
`,tr=m.c.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
`,ar=m.c.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`,rr=m.c.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${e=>e.primary?e.theme.colors.primary:"transparent"};
  color: ${e=>e.primary?"white":e.theme.colors.text};
  border: ${e=>e.primary?"none":"1px solid "+e.theme.colors.lightGray};
  
  &:hover {
    background-color: ${e=>e.primary?"#333":e.theme.colors.lightGray};
  }
`,lr=()=>{const[e,t]=Object(r.useState)("#000000"),[a,n]=Object(r.useState)("#ffffff"),{user:o}=u();return l.a.createElement(Ta,null,l.a.createElement(Pa,null,l.a.createElement(Fa,null,l.a.createElement(Ma,null,l.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#757575"}))),l.a.createElement(Ba,null,l.a.createElement(Ga,null,(null===o||void 0===o?void 0:o.name)||"User"),l.a.createElement(La,null,(null===o||void 0===o?void 0:o.email)||"Manage your preferences"))),l.a.createElement(Aa,null,l.a.createElement(Ra,{primary:!0},"Upload"),l.a.createElement(Ra,null,"Edit Profile"))),l.a.createElement(Ua,null,l.a.createElement(Ha,null,"Themes & Customization"),l.a.createElement(Na,null,"Customize the look and feel of Task Manager 2.0"),l.a.createElement(Wa,null,l.a.createElement(Va,null,l.a.createElement(Ia,{bgColor:"#1a237e"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z",fill:"white"}),l.a.createElement("path",{d:"M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z",fill:"white"}))),l.a.createElement(Ja,null,l.a.createElement(Ya,null,"Dark Mode"),l.a.createElement(qa,null,"Switch to a darker theme for night viewing and reduced eye strain"))),l.a.createElement(Va,null,l.a.createElement(Ia,{bgColor:"#ffeb3b"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z",fill:"#333"}),l.a.createElement("path",{d:"M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z",fill:"#333"}))),l.a.createElement(Ja,null,l.a.createElement(Ya,null,"Light Mode"),l.a.createElement(qa,null,"Use the standard theme for ease of reading")))),l.a.createElement(Qa,null,l.a.createElement(Ya,null,"Custom Theme Selection"),l.a.createElement(qa,null,"Choose colors and fonts that suit your preferences"))),l.a.createElement(Ka,null,l.a.createElement(Ha,null,"Theme Settings"),l.a.createElement(Na,null,"Customize your theme colors"),l.a.createElement(Xa,null,l.a.createElement(Za,null,l.a.createElement(_a,null,"Primary Color"),l.a.createElement(er,null,"Used for buttons and important elements"),l.a.createElement(tr,{type:"color",value:e,onChange:e=>t(e.target.value)})),l.a.createElement(Za,null,l.a.createElement(_a,null,"Secondary Color"),l.a.createElement(er,null,"Used for backgrounds and subtle elements"),l.a.createElement(tr,{type:"color",value:a,onChange:e=>n(e.target.value)}))),l.a.createElement(ar,null,l.a.createElement(rr,null,"Reset to Defaults"),l.a.createElement(rr,{primary:!0},"Save Theme"))))};lr.defaultProps={user:null};var nr=lr;const or=m.c.div`
  padding: 20px;
`,cr=m.c.div`
  background-color: #4b6455;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`,ir=m.c.div`
  display: flex;
  align-items: center;
`,mr=m.c.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
`,sr=m.c.div``,dr=m.c.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
`,pr=m.c.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
`,ur=m.c.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
`,gr=m.c.div`
  display: flex;
  gap: 10px;
`,hr=m.c.button`
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: ${e=>e.primary?"transparent":"black"};
  color: white;
  border: ${e=>e.primary?"1px solid white":"none"};
  
  &:hover {
    background-color: ${e=>e.primary?"rgba(255, 255, 255, 0.1)":"#333"};
  }
`,xr=m.c.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`,br=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 30px;
`,Er=m.c.div`
  margin-bottom: 40px;
`,fr=m.c.form`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,vr=m.c.div`
  margin-bottom: 25px;
`,yr=m.c.label`
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
`,wr=m.c.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
`,kr=m.c.div`
  display: flex;
  gap: 30px;
`,$r=m.c.div`
  display: flex;
  align-items: center;
`,Cr=m.c.input`
  margin-right: 10px;
`,zr=m.c.label`
  font-weight: normal;
`,Sr=m.c.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.darkGray};
  margin-top: 10px;
`,Dr=m.c.button`
  padding: 12px 25px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`,jr=m.c.div`
  margin-bottom: 40px;
`,Or=m.c.div`
  background-color: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Tr=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,Pr=m.c.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff8e1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`,Fr=m.c.h3`
  font-size: 1.3rem;
  color: ${e=>e.theme.colors.warning};
`,Mr=m.c.p`
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 20px;
`,Br=m.c.div`
  display: flex;
  gap: 15px;
`,Gr=m.c.button`
  padding: 10px 20px;
  background-color: transparent;
  color: ${e=>e.theme.colors.text};
  border: 1px solid ${e=>e.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.lightGray};
  }
`,Lr=m.c.button`
  padding: 10px 20px;
  background-color: ${e=>e.theme.colors.warning};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #d32f2f;
  }
`;var Ar=()=>{const[e,t]=Object(r.useState)("enabled"),{user:a}=u();return l.a.createElement(or,null,l.a.createElement(cr,null,l.a.createElement(ir,null,l.a.createElement(mr,null,l.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#757575"}))),l.a.createElement(sr,null,l.a.createElement(dr,null,(null===a||void 0===a?void 0:a.name)||"User"),l.a.createElement(pr,null,(null===a||void 0===a?void 0:a.email)||"Premium User"),l.a.createElement(ur,null,"Manage your account and profile settings here."))),l.a.createElement(gr,null,l.a.createElement(hr,{primary:!0},"Change Password"),l.a.createElement(hr,null,"Edit Profile"))),l.a.createElement(Er,null,l.a.createElement(xr,null,"Account Settings"),l.a.createElement(br,null,"Update your account settings here."),l.a.createElement(fr,null,l.a.createElement(vr,null,l.a.createElement(yr,{htmlFor:"newPassword"},"New Password"),l.a.createElement(wr,{type:"password",id:"newPassword",placeholder:"Enter new password"})),l.a.createElement(vr,null,l.a.createElement(yr,{htmlFor:"confirmPassword"},"Confirm Password"),l.a.createElement(wr,{type:"password",id:"confirmPassword",placeholder:"Confirm new password"})),l.a.createElement(vr,null,l.a.createElement(yr,null,"Email Reminders"),l.a.createElement(kr,null,l.a.createElement($r,null,l.a.createElement(Cr,{type:"radio",id:"enabled",name:"emailReminders",value:"enabled",checked:"enabled"===e,onChange:()=>t("enabled")}),l.a.createElement(zr,{htmlFor:"enabled"},"Enabled")),l.a.createElement($r,null,l.a.createElement(Cr,{type:"radio",id:"disabled",name:"emailReminders",value:"disabled",checked:"disabled"===e,onChange:()=>t("disabled")}),l.a.createElement(zr,{htmlFor:"disabled"},"Disabled"))),l.a.createElement(Sr,null,"Receive email reminders for tasks")),l.a.createElement(Dr,{type:"button"},"Save Changes"))),l.a.createElement(jr,null,l.a.createElement(xr,null,"Danger Zone"),l.a.createElement(Or,null,l.a.createElement(Tr,null,l.a.createElement(Pr,null,l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",fill:"#FFC107"}))),l.a.createElement(Fr,null,"Delete Account")),l.a.createElement(Mr,null,"This action cannot be undone!"),l.a.createElement(Br,null,l.a.createElement(Gr,null,"Cancel"),l.a.createElement(Lr,null,"Delete My Account")))))};const Rr=e=>{let{children:t}=e;return null!==localStorage.getItem("taskManagerUser")?t:l.a.createElement(c.a,{to:"/",replace:!0})};function Hr(){const{theme:e}=f();return l.a.createElement(m.a,{theme:e},l.a.createElement(s,null),l.a.createElement(p,null,l.a.createElement(h,null,l.a.createElement(i.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(R,null),l.a.createElement("main",{className:"main-content"},l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/",element:l.a.createElement(xe,null)}),l.a.createElement(c.b,{path:"/register",element:l.a.createElement(Ge,null)}),l.a.createElement(c.b,{path:"/dashboard",element:l.a.createElement(Rr,null,l.a.createElement(st,null))}),l.a.createElement(c.b,{path:"/tasks",element:l.a.createElement(Rr,null,l.a.createElement(Yt,null))}),l.a.createElement(c.b,{path:"/productivity",element:l.a.createElement(Rr,null,l.a.createElement(Oa,null))}),l.a.createElement(c.b,{path:"/settings",element:l.a.createElement(Rr,null,l.a.createElement(nr,null))}),l.a.createElement(c.b,{path:"/account",element:l.a.createElement(Rr,null,l.a.createElement(Ar,null))}))),l.a.createElement(V,null),l.a.createElement(Q,null))))))}var Ur=function(){return l.a.createElement(E,null,l.a.createElement(Hr,null))};var Nr=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then(t=>{let{getCLS:a,getFID:r,getFCP:l,getLCP:n,getTTFB:o}=t;a(e),r(e),l(e),n(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ur,null)),document.getElementById("root")),Nr()}},[[12,1,2]]]);
//# sourceMappingURL=main.3bccb08d.chunk.js.map