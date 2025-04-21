"use strict";(self.webpackChunkammar_alakhali_portfolio=self.webpackChunkammar_alakhali_portfolio||[]).push([[615,979],{2979:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var i=r(5043),n=r(5464),o=r(8605),a=r(184),s=r(6298),l=r(579);const d=n.Ay.section`
  padding: 4rem 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`,c=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,m=n.Ay.div`
  display: flex;
  flex-direction: column;
  text-align: ${e=>e.isRTL?"right":"left"};
`,u=n.Ay.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.primary}};
`,h=n.Ay.p`
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
`,x=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,g=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: ${e=>e.isRTL?"row-reverse":"row"};
`,p=n.Ay.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${e=>{let{theme:t}=e;return t.backgroundAlt}};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    color: white;
    transform: scale(1.1);
  }
`,b=n.Ay.div`
  flex: 1;
`,j=n.Ay.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`,y=n.Ay.p`
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
`,f=(0,n.Ay)(o.P.form)`
  background-color: ${e=>{let{theme:t}=e;return t.backgroundAlt}};
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
`,v=n.Ay.div`
  margin-bottom: 1.5rem;
`,w=n.Ay.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: ${e=>e.isRTL?"right":"left"};
`,A=n.Ay.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  border-radius: 5px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  color: ${e=>{let{theme:t}=e;return t.text}};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${e=>{let{theme:t}=e;return t.primary}};
    outline: none;
  }
`,$=n.Ay.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  border-radius: 5px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  color: ${e=>{let{theme:t}=e;return t.text}};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${e=>{let{theme:t}=e;return t.primary}};
    outline: none;
  }
`,k=(0,n.Ay)(o.P.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  width: 100%;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.secondary}};
  }
  
  &:disabled {
    background-color: ${e=>{let{theme:t}=e;return t.textAlt}};
    cursor: not-allowed;
  }
`,L=(0,n.Ay)(o.P.div)`
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  text-align: center;
  background-color: ${e=>{let{success:t,theme:r}=e;return t?"rgba(72, 187, 120, 0.2)":"rgba(245, 101, 101, 0.2)"}};
  color: ${e=>{let{success:t,theme:r}=e;return t?"#48bb78":"#f56565"}};
  border: 1px solid ${e=>{let{success:t}=e;return t?"#48bb78":"#f56565"}};
`,T=()=>{const[e,t]=(0,i.useState)({name:"",email:"",subject:"",message:""}),[r,n]=(0,i.useState)(!1),[o,T]=(0,i.useState)(null),{language:C,t:R}=(0,i.useContext)(s.s),S="ar"===C,z=e=>{const{name:r,value:i}=e.target;t((e=>({...e,[r]:i})))};return(0,l.jsx)(d,{children:(0,l.jsxs)(c,{children:[(0,l.jsxs)(m,{isRTL:S,children:[(0,l.jsx)(u,{children:R("contact.title")}),(0,l.jsx)(h,{children:R("contact.description")}),(0,l.jsxs)(x,{children:[(0,l.jsxs)(g,{isRTL:S,children:[(0,l.jsx)(p,{children:(0,l.jsx)(a.maD,{})}),(0,l.jsxs)(b,{children:[(0,l.jsx)(j,{children:"Email"}),(0,l.jsx)(y,{children:"enovastudio.ye@gmail.com"})]})]}),(0,l.jsxs)(g,{isRTL:S,children:[(0,l.jsx)(p,{children:(0,l.jsx)(a.vq8,{})}),(0,l.jsxs)(b,{children:[(0,l.jsx)(j,{children:"Location"}),(0,l.jsx)(y,{children:"Yemen, Sana`a"})]})]}),(0,l.jsxs)(g,{isRTL:S,children:[(0,l.jsx)(p,{children:(0,l.jsx)(a.Cab,{})}),(0,l.jsxs)(b,{children:[(0,l.jsx)(j,{children:"Phone"}),(0,l.jsx)(y,{children:"+967 739502156"})]})]})]})]}),(0,l.jsxs)(f,{initial:{opacity:0,x:S?-50:50},whileInView:{opacity:1,x:0},transition:{duration:.5},viewport:{once:!0},onSubmit:e=>{e.preventDefault(),n(!0),setTimeout((()=>{n(!1),T("success"),t({name:"",email:"",subject:"",message:""}),setTimeout((()=>{T(null)}),5e3)}),1500)},children:[o&&(0,l.jsx)(L,{success:"success"===o,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:R("success"===o?"contact.success":"contact.error")}),(0,l.jsxs)(v,{children:[(0,l.jsx)(w,{htmlFor:"name",isRTL:S,children:R("contact.nameLabel")}),(0,l.jsx)(A,{type:"text",id:"name",name:"name",value:e.name,onChange:z,required:!0,dir:S?"rtl":"ltr"})]}),(0,l.jsxs)(v,{children:[(0,l.jsx)(w,{htmlFor:"email",isRTL:S,children:R("contact.emailLabel")}),(0,l.jsx)(A,{type:"email",id:"email",name:"email",value:e.email,onChange:z,required:!0,dir:S?"rtl":"ltr"})]}),(0,l.jsxs)(v,{children:[(0,l.jsx)(w,{htmlFor:"subject",isRTL:S,children:R("contact.subjectLabel")}),(0,l.jsx)(A,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:z,required:!0,dir:S?"rtl":"ltr"})]}),(0,l.jsxs)(v,{children:[(0,l.jsx)(w,{htmlFor:"message",isRTL:S,children:R("contact.messageLabel")}),(0,l.jsx)($,{id:"message",name:"message",value:e.message,onChange:z,required:!0,dir:S?"rtl":"ltr"})]}),(0,l.jsxs)(k,{type:"submit",disabled:r,whileHover:{scale:1.03},whileTap:{scale:.98},children:[r?"Sending...":R("contact.sendButton"),(0,l.jsx)(a.Cer,{})]})]})]})})}},5615:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i=r(5043),n=r(5464),o=r(8605),a=r(1591),s=r(2979),l=r(579);const d=n.Ay.div`
  padding-top: 5rem;
`,c=n.Ay.div`
  text-align: center;
  padding: 3rem 0;
`,m=(0,n.Ay)(o.P.h1)`
  margin-bottom: 1rem;
`,u=(0,n.Ay)(o.P.p)`
  max-width: 700px;
  margin: 0 auto;
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
`,h=()=>((0,i.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.m,{children:[(0,l.jsx)("title",{children:"Contact | Enova Studio"}),(0,l.jsx)("meta",{name:"description",content:"Enova Studio offers innovative web design, UI/UX, logo design, and app development services."}),(0,l.jsx)("meta",{name:"keywords",content:"Enova Studio, web design, UI/UX, logo design, app development"})]}),(0,l.jsxs)(d,{children:[(0,l.jsxs)(c,{children:[(0,l.jsx)(m,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Contact Me"}),(0,l.jsx)(u,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.2},children:"Have a project in mind or just want to say hello? I'd love to hear from you!"})]}),(0,l.jsx)(s.default,{})]})]}))}}]);
//# sourceMappingURL=615.f9a62d6d.chunk.js.map