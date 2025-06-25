"use strict";(self.webpackChunkammar_alakhali_portfolio=self.webpackChunkammar_alakhali_portfolio||[]).push([[504],{3504:(e,r,t)=>{t.r(r),t.d(r,{default:()=>T});var i=t(9950),n=t(4752),o=t(7978),s=t(2875),l=t(771),a=t(4414);const c=n.Ay.section`
  padding: 4rem 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`,d=n.Ay.div`
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
  color: ${e=>{let{theme:r}=e;return r.primary}};
`,h=n.Ay.p`
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${e=>{let{theme:r}=e;return r.textAlt}};
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
`,b=n.Ay.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundAlt}};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.primary}};
    color: white;
    transform: scale(1.1);
  }
`,p=n.Ay.div`
  flex: 1;
`,j=n.Ay.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`,y=n.Ay.p`
  color: ${e=>{let{theme:r}=e;return r.textAlt}};
`,f=(0,n.Ay)(o.P.form)`
  background-color: ${e=>{let{theme:r}=e;return r.backgroundAlt}};
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`,$=n.Ay.div`
  margin-bottom: 1.5rem;
`,v=n.Ay.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: ${e=>e.isRTL?"right":"left"};
`,w=n.Ay.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>{let{theme:r}=e;return r.border}};
  border-radius: 5px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  color: ${e=>{let{theme:r}=e;return r.text}};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${e=>{let{theme:r}=e;return r.primary}};
    outline: none;
  }
`,A=n.Ay.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>{let{theme:r}=e;return r.border}};
  border-radius: 5px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  color: ${e=>{let{theme:r}=e;return r.text}};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${e=>{let{theme:r}=e;return r.primary}};
    outline: none;
  }
`,k=(0,n.Ay)(o.P.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${e=>{let{theme:r}=e;return r.primary}};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  width: 100%;
  
  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.secondary}};
  }
  
  &:disabled {
    background-color: ${e=>{let{theme:r}=e;return r.textAlt}};
    cursor: not-allowed;
  }
`,L=(0,n.Ay)(o.P.div)`
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  text-align: center;
  background-color: ${e=>{let{success:r,theme:t}=e;return r?"rgba(72, 187, 120, 0.2)":"rgba(245, 101, 101, 0.2)"}};
  color: ${e=>{let{success:r,theme:t}=e;return r?"#48bb78":"#f56565"}};
  border: 1px solid ${e=>{let{success:r}=e;return r?"#48bb78":"#f56565"}};
`,T=()=>{const[e,r]=(0,i.useState)({name:"",email:"",subject:"",message:""}),[t,n]=(0,i.useState)(!1),[o,T]=(0,i.useState)(null),{language:C,t:z}=(0,i.useContext)(l.s),R="ar"===C,S=e=>{const{name:t,value:i}=e.target;r((e=>({...e,[t]:i})))};return(0,a.jsx)(c,{children:(0,a.jsxs)(d,{children:[(0,a.jsxs)(m,{isRTL:R,children:[(0,a.jsx)(u,{children:z("contact.title")}),(0,a.jsx)(h,{children:z("contact.description")}),(0,a.jsxs)(x,{children:[(0,a.jsxs)(g,{children:[(0,a.jsx)(b,{children:(0,a.jsx)(s.maD,{})}),(0,a.jsxs)(p,{children:[(0,a.jsx)(j,{children:"Email"}),(0,a.jsx)(y,{children:"enovastudio.ye@gmail.com"})]})]}),(0,a.jsxs)(g,{children:[(0,a.jsx)(b,{children:(0,a.jsx)(s.vq8,{})}),(0,a.jsxs)(p,{children:[(0,a.jsx)(j,{children:"Location"}),(0,a.jsx)(y,{children:"Yemen, Sana`a"})]})]}),(0,a.jsxs)(g,{children:[(0,a.jsx)(b,{children:(0,a.jsx)(s.Cab,{})}),(0,a.jsxs)(p,{children:[(0,a.jsx)(j,{children:"Phone"}),(0,a.jsx)(y,{children:"967739502156+"})]})]})]})]}),(0,a.jsxs)(f,{initial:{opacity:0,x:R?-50:50},whileInView:{opacity:1,x:0},transition:{duration:.5},viewport:{once:!0},onSubmit:e=>{e.preventDefault(),n(!0),setTimeout((()=>{n(!1),T("success"),r({name:"",email:"",subject:"",message:""}),setTimeout((()=>{T(null)}),5e3)}),1500)},children:[o&&(0,a.jsx)(L,{success:"success"===o,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:z("success"===o?"contact.success":"contact.error")}),(0,a.jsxs)($,{children:[(0,a.jsx)(v,{htmlFor:"name",isRTL:R,children:z("contact.nameLabel")}),(0,a.jsx)(w,{type:"text",id:"name",name:"name",value:e.name,onChange:S,required:!0,dir:R?"rtl":"ltr"})]}),(0,a.jsxs)($,{children:[(0,a.jsx)(v,{htmlFor:"email",isRTL:R,children:z("contact.emailLabel")}),(0,a.jsx)(w,{type:"email",id:"email",name:"email",value:e.email,onChange:S,required:!0,dir:R?"rtl":"ltr"})]}),(0,a.jsxs)($,{children:[(0,a.jsx)(v,{htmlFor:"subject",isRTL:R,children:z("contact.subjectLabel")}),(0,a.jsx)(w,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:S,required:!0,dir:R?"rtl":"ltr"})]}),(0,a.jsxs)($,{children:[(0,a.jsx)(v,{htmlFor:"message",isRTL:R,children:z("contact.messageLabel")}),(0,a.jsx)(A,{id:"message",name:"message",value:e.message,onChange:S,required:!0,dir:R?"rtl":"ltr"})]}),(0,a.jsxs)(k,{type:"submit",disabled:t,whileHover:{scale:1.03},whileTap:{scale:.98},children:[t?"Sending...":z("contact.sendButton"),(0,a.jsx)(s.Cer,{})]})]})]})})}}}]);