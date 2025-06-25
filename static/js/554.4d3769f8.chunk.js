"use strict";(self.webpackChunkammar_alakhali_portfolio=self.webpackChunkammar_alakhali_portfolio||[]).push([[554,899],{3899:(e,t,i)=>{i.r(t),i.d(t,{default:()=>K});var r=i(9950),a=i(4752),o=i(8688),n=i(4721),s=i(7978),l=i(3291),c=i(2875),d=i(771);const p=[{id:1,title:"E-commerce Platform",description:"A full-featured e-commerce platform with product management, shopping cart, and payment processing",image:"https://via.placeholder.com/600x400",category:"web",technologies:["React","Node.js","MongoDB","Express","Stripe"],demoUrl:"https://example.com",codeUrl:"https://github.com/ammaralakhali"},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates and team workspaces",image:"https://via.placeholder.com/600x400",category:"web",technologies:["React","Firebase","Redux","Material UI"],demoUrl:"https://example.com",codeUrl:"https://github.com/ammaralakhali"},{id:3,title:"Weather Forecast Mobile App",description:"A mobile application providing detailed weather forecasts and alerts for multiple locations",image:"https://via.placeholder.com/600x400",category:"mobile",technologies:["React Native","Redux","Weather API","Expo"],demoUrl:"https://example.com",codeUrl:"https://github.com/ammaralakhali"},{id:4,title:"RESTful API Service",description:"A scalable RESTful API service with authentication, rate limiting, and comprehensive documentation",image:"https://via.placeholder.com/600x400",category:"backend",technologies:["Node.js","Express","MongoDB","JWT","Swagger"],demoUrl:"https://example.com",codeUrl:"https://github.com/ammaralakhali"},{id:5,title:"Social Media Dashboard",description:"A comprehensive analytics dashboard for social media performance tracking and reporting",image:"https://via.placeholder.com/600x400",category:"web",technologies:["React","Chart.js","Node.js","PostgreSQL"],demoUrl:"https://example.com",codeUrl:"https://github.com/ammaralakhali"},{id:6,title:"Food Delivery App",description:"A mobile application for food ordering and delivery with real-time tracking",image:"https://via.placeholder.com/600x400",category:"mobile",technologies:["React Native","Google Maps API","Firebase","Stripe"],demoUrl:"https://example.com",codeUrl:"https://github.com/ammaralakhali"}];var m=i(4414);const h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.useRef)(null),[i,a]=(0,r.useState)(!1),s=(0,o.W)(t,{once:!0,amount:.2,...e}),l=(0,n.s)();return(0,r.useEffect)((()=>{if("undefined"!==typeof window){const e=window.matchMedia("(prefers-reduced-motion: reduce)");a(e.matches);const t=e=>{a(e.matches)};return e.addEventListener?e.addEventListener("change",t):e.addListener(t),()=>{e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}}}),[]),(0,r.useEffect)((()=>{s&&l.start(i?"visibleNoAnimation":"visible")}),[s,l,i]),[t,s,l]},u=a.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,g=a.i7`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,f=a.i7`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,x=(0,a.Ay)(s.P.section)`
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(6rem, 10vw, 10rem);
  width: min(92%, 1500px);
  margin: 0 auto;
  position: relative;
  overflow: visible; /* Ensure this is 'visible' */
  z-index: 1; /* Add appropriate z-index */
`,b=a.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`,v=(0,a.Ay)(s.P.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(clamp(30px, 5vw, 80px));
  opacity: 0.12;
  z-index: -1;
  
  &.top-right {
    background: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    width: min(300px, 30vw);
    height: min(300px, 30vw);
    top: -50px;
    right: -50px;
  }
  
  &.bottom-left {
    background: ${e=>{let{theme:t}=e;return t.secondary||"#6c5ce7"}};
    width: min(250px, 25vw);
    height: min(250px, 25vw);
    bottom: min(-25px, -2.5vw);
    left: min(-25px, -2.5vw);
  }
  
  &.middle-center {
    background: ${e=>{let{theme:t}=e;return t.textAlt||"#aaa"}};
    width: min(400px, 40vw);
    height: min(400px, 40vw);
    top: 50%;
    left: 30%;
    transform: translateY(-50%);
    opacity: 0.05;
  }
`,y=(0,a.Ay)(s.P.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-size: clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px);
  background-image: 
    linear-gradient(to right, ${e=>{let{theme:t}=e;return t.border||"#ddd"}} 1px, transparent 1px),
    linear-gradient(to bottom, ${e=>{let{theme:t}=e;return t.border||"#ddd"}} 1px, transparent 1px);
`,w=a.Ay.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`,j=a.AH`
  background: linear-gradient(
    45deg,
    ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}},
    ${e=>{let{theme:t}=e;return t.secondary||"#6c5ce7"}},
    ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${u} 8s linear infinite;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,k=(0,a.Ay)(s.P.h2)`
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  ${j}
  display: inline-block;
  position: relative;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 6px;
    background: linear-gradient(
      to right,
      ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}},
      ${e=>{let{theme:t}=e;return t.secondary||"#6c5ce7"}}
    );
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    &::after {
      width: 80px;
      height: 4px;
      bottom: -10px;
    }
  }
`,A=(0,a.Ay)(s.P.span)`
  display: block;
  margin-bottom: 1rem;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
`,$=(0,a.Ay)(s.P.p)`
  max-width: 850px;
  margin: 2.5rem auto 0;
  color: ${e=>{let{theme:t}=e;return t.textAlt||"#888"}};
  font-size: clamp(1rem, 2vw, 1.3rem);
  line-height: 1.8;
  text-align: center;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    line-height: 1.6;
  }
`,P=(0,a.Ay)(s.P.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(0.6rem, 1.5vw, 1.2rem);
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  position: relative;
  padding-bottom: 15px;
  width: 100%;
  z-index: 5;
  opacity: 1 !important; /* Force opacity */
  
  @media (max-width: 768px) {
    gap: 0.7rem;
    justify-content: center;
    padding-inline: 0.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding-bottom: 20px;
    padding-inline: 0;
    margin-inline: -4%;
    width: 108%;
    scroll-padding: 1rem;
    -webkit-overflow-scrolling: touch;
    
    /* Make scrollbar visible but subtle for better UX */
    scrollbar-width: thin;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(108, 92, 231, 0.3);
      border-radius: 4px;
    }
    
    /* Add horizontal padding to create space at edges */
    &::before, &::after {
      content: '';
      min-width: 4%;
    }
  }
`,z=(0,a.Ay)(s.P.button)`
  background-color: ${e=>{let{active:t,theme:i}=e;return t?"rgba(108, 92, 231, 0.1)":"transparent"}};
  color: ${e=>{let{active:t,theme:i}=e;return t?i.primary||"#6c5ce7":i.text||"#222"}};
  border: none;
  border-radius: 30px;
  padding: clamp(0.7rem, 1.2vw, 0.9rem) clamp(1.2rem, 2vw, 2rem);
  font-size: clamp(0.9rem, 1.2vw, 1.05rem);
  font-weight: ${e=>{let{active:t}=e;return t?"700":"500"}};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  box-shadow: ${e=>{let{active:t}=e;return t?"0 5px 15px rgba(108, 92, 231, 0.15)":"none"}};
  display: inline-block;
  margin-bottom: 5px; /* Ensure space for indicator */
  white-space: nowrap;
  z-index: 6; /* Make sure it's above the indicator */
  opacity: 1; /* Ensure it's visible */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    opacity: 0.08;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 30px;
  }
  
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    flex: 0 0 auto;
    min-width: max-content;
    text-align: center;
    margin-bottom: 8px;
  }
`,E=(0,a.Ay)(s.P.div)`
  position: absolute;
  bottom: 0;
  height: 4px;
  background: linear-gradient(to right, ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}}, ${e=>{let{theme:t}=e;return t.secondary||"#6c5ce7"}});
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.3);
  z-index: 5; /* Make sure this is below the buttons */
  
  /* Add this to make it visible for debugging */
  opacity: 1;
  pointer-events: none; /* Make sure it doesn't interfere with button clicks */
  
  @media (max-width: 480px) {
    bottom: 12px;
    height: 3px;
  }
`,L=(0,a.Ay)(s.P.div)`
  position: relative;
  max-width: min(600px, 90%);
  margin: 0 auto clamp(3rem, 6vw, 5rem) auto;
  opacity: 1 !important; /* Force opacity */
`,R=(0,a.Ay)(s.P.input)`
  width: 100%;
  padding: clamp(1.2rem, 2vw, 1.5rem);
  padding-${e=>e.isRTL?"right":"left"}: clamp(3.5rem, 5vw, 4rem);
  border: 2px solid ${e=>{let{theme:t,focused:i}=e;return i?t.primary||"#6c5ce7":"rgba(108, 92, 231, 0.1)"}};
  border-radius: 50px;
  background-color: ${e=>{let{theme:t}=e;return t.backgroundAlt||"#f8f9fa"}};
  color: ${e=>{let{theme:t}=e;return t.text||"#222"}};
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  box-shadow: ${e=>{let{focused:t}=e;return t?"0 8px 25px rgba(0, 0, 0, 0.1)":"0 5px 15px rgba(0, 0, 0, 0.05)"}};
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  &:focus {
    outline: none;
    border-color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    box-shadow: 0 10px 30px rgba(108, 92, 231, 0.15);
  }

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.textAlt||"#888"}};
    opacity: 0.7;
  }
`,T=(0,a.Ay)(s.P.div)`
  position: absolute;
  top: 50%;
  ${e=>e.isRTL?"right":"left"}: clamp(1.2rem, 2vw, 1.5rem);
  transform: translateY(-50%);
  color: ${e=>{let{theme:t,focused:i}=e;return i?t.primary||"#6c5ce7":t.textAlt||"#888"}};
  transition: color 0.3s ease;
  font-size: clamp(1rem, 1.3vw, 1.2rem);
`,N=(0,a.Ay)(s.P.button)`
  position: absolute;
  top: 50%;
  ${e=>e.isRTL?"left":"right"}: clamp(1.2rem, 2vw, 1.5rem);
  transform: translateY(-50%);
  background: rgba(108, 92, 231, 0.1);
  border: none;
  color: ${e=>{let{theme:t}=e;return t.textAlt||"#888"}};
  cursor: pointer;
  width: clamp(28px, 3vw, 32px);
  height: clamp(28px, 3vw, 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    background: rgba(108, 92, 231, 0.15);
  }
  
  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    outline-offset: 2px;
  }
`,S=(0,a.Ay)(s.P.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));
  gap: clamp(1.5rem, 3vw, 3rem);
  width: 100%;
`,C=(0,a.Ay)(s.P.div)`
  background-color: ${e=>{let{theme:t}=e;return t.backgroundAlt||"#f8f9fa"}};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-10px);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px; 
    background: linear-gradient(
      to bottom right, 
      ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}}, 
      ${e=>{let{theme:t}=e;return t.secondary||"#6c5ce7"}},
      transparent,
      transparent
    ); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow 0.5s ease;
    
    &:hover {
      transform: none;
    }
  }
`,U=(0,a.Ay)(s.P.div)`
  position: relative;
  overflow: hidden;
  height: clamp(180px, 25vw, 250px);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.7) 100%
    );
    opacity: 0.6;
    transition: opacity 0.5s ease;
    z-index: 1;
  }
  
  ${C}:hover &::after {
    opacity: 0.8;
  }
`,M=(0,a.Ay)(s.P.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  will-change: transform;
  
  ${C}:hover & {
    transform: scale(1.1);
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    ${C}:hover & {
      transform: none;
    }
  }
`,W=(0,a.Ay)(s.P.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1rem, 2vw, 1.8rem);
  z-index: 2;
`,Y=(0,a.Ay)(s.P.div)`
  padding: clamp(1.5rem, 2.5vw, 2rem);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: ${e=>e.isRTL?"right":"left"};
`,_=(0,a.Ay)(s.P.span)`
  color: white;
  font-size: clamp(0.7rem, 1vw, 0.85rem);
  font-weight: 700;
  background: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  align-self: ${e=>e.isRTL?"flex-end":"flex-start"};
  backdrop-filter: blur(5px);
  transform: translateY(100%);
  opacity: 0;
  
  ${C}:hover & {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transform: translateY(0);
    opacity: 1;
  }
`,F=(0,a.Ay)(s.P.h3)`
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 700;
  transition: color 0.4s ease;
  
  ${C}:hover & {
    color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
  }
`,X=(0,a.Ay)(s.P.p)`
  color: ${e=>{let{theme:t}=e;return t.textAlt||"#888"}};
  margin-bottom: 1.8rem;
  flex-grow: 1;
  line-height: 1.7;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
`,I=(0,a.Ay)(s.P.div)`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 0.8vw, 0.8rem);
  margin-bottom: clamp(1.5rem, 2vw, 2rem);
  justify-content: ${e=>e.isRTL?"flex-end":"flex-start"};
`,B=(0,a.Ay)(s.P.span)`
  background-color: ${e=>{let{theme:t}=e;return t.background||"#fff"}};
  color: ${e=>{let{theme:t}=e;return t.text||"#222"}};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: clamp(0.75rem, 0.9vw, 0.85rem);
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  ${C}:hover & {
    animation-delay: calc(var(--i) * 0.1s);
  }
`,H=(0,a.Ay)(s.P.div)`
  display: flex;
  gap: clamp(0.8rem, 1.5vw, 1.2rem);
  margin-top: auto;
  justify-content: ${e=>e.isRTL?"flex-end":"flex-start"};
  
  @media (max-width: 480px) {
    flex-direction: ${e=>e.isRTL?"column-reverse":"column"};
    gap: 0.8rem;
  }
`,O=(0,a.Ay)(s.P.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: clamp(0.7rem, 1vw, 0.8rem) clamp(1.2rem, 1.5vw, 1.5rem);
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s ease;
  
  &.primary {
    background: linear-gradient(
      to right,
      ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}},
      ${e=>{let{theme:t}=e;return t.secondary||"#6c5ce7"}}
    );
    color: white;
    box-shadow: 0 4px 10px rgba(108, 92, 231, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translateX(-100%);
      transition: transform 0.7s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 7px 14px rgba(108, 92, 231, 0.3);
      
      &::before {
        transform: translateX(100%);
        animation: ${g} 1.5s infinite;
      }
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: ${e=>{let{theme:t}=e;return t.text||"#222"}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.border||"#ddd"}};
    
    &:hover {
      color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
      border-color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
      background: rgba(108, 92, 231, 0.05);
      transform: translateY(-3px);
    }
  }
  
  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    outline-offset: 3px;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: ${e=>e.isRTL?"translateX(-4px)":"translateX(4px)"};
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    
    &:hover {
      transform: none;
    }
    
    &:hover svg {
      transform: none;
    }
    
    &.primary::before {
      display: none;
    }
  }
`,D=(0,a.Ay)(s.P.div)`
  text-align: center;
  padding: clamp(4rem, 6vw, 6rem) clamp(1.5rem, 2vw, 2rem);
  grid-column: 1 / -1;
  color: ${e=>{let{theme:t}=e;return t.textAlt||"#888"}};
  background-color: ${e=>{let{theme:t}=e;return t.backgroundAlt||"#f8f9fa"}};
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 2vw, 2rem);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 300%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(108, 92, 231, 0.05),
      transparent
    );
    top: 0;
    left: -100%;
    animation: ${g} 4s infinite linear;
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`,V=(0,a.Ay)(s.P.div)`
  width: clamp(80px, 10vw, 100px);
  height: clamp(80px, 10vw, 100px);
  background: ${e=>{let{theme:t}=e;return t.background||"#fff"}};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: ${f} 4s ease-in-out infinite;
  
  svg {
    color: ${e=>{let{theme:t}=e;return t.textAlt||"#888"}};
    font-size: clamp(2rem, 2.5vw, 2.5rem);
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Q=(0,a.Ay)(s.P.h4)`
  font-size: clamp(1.5rem, 2vw, 1.8rem);
  font-weight: 700;
  margin-bottom: 0.8rem;
`,q=(0,a.Ay)(s.P.p)`
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  max-width: 500px;
`,G=(0,a.Ay)(s.P.button)`
  margin-top: 1rem;
  background: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    top: 0;
    left: -100%;
    transition: 0.7s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 3px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::before {
      display: none;
    }
  }
`,J="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Cpath d='M30 40 L70 40 L70 60 L30 60 Z' fill='%23cccccc'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%23999999'%3ENo Image%3C/text%3E%3C/svg%3E",K=()=>{const[e,t]=(0,r.useState)("all"),[i,a]=(0,r.useState)(""),[u,g]=(0,r.useState)(!1),{language:f,t:j}=(0,r.useContext)(d.s)||{language:"en",t:e=>e},K="ar"===f,[Z,ee]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if("undefined"!==typeof window){ee(window.matchMedia("(prefers-reduced-motion: reduce)").matches);const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=e=>{ee(e.matches)};return e.addEventListener?e.addEventListener("change",t):e.addListener(t),()=>{e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}}}),[]);const te=(0,r.useRef)({}),[ie,re]=(0,r.useState)(0),[ae,oe]=(0,r.useState)(0),ne=(0,r.useRef)(null),se=(0,o.W)(ne,{once:!0,amount:.2}),le=(0,n.s)(),[ce,de]=h(),[pe,me]=h(),[he]=h({amount:.1}),ue=(0,r.useRef)(null);(0,r.useEffect)((()=>{se&&le.start(Z?"visibleNoAnimation":"visible")}),[se,le,Z]),(0,r.useEffect)((()=>{const t=()=>{const t=te.current[e];if(t){const{offsetWidth:e,offsetLeft:i}=t;if(console.log("Active button dimensions:",{width:e,left:i}),re(e),oe(i),window.innerWidth<=480&&ue.current){const t=ue.current,r=i-t.clientWidth/2+e/2;t.scrollTo({left:r,behavior:"smooth"})}}};return setTimeout(t,100),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[e]);const ge=p?p.filter((t=>{if(!t)return!1;const r="all"===e||t.category===e,a=i.toLowerCase(),o=!i||t.title&&t.title.toLowerCase().includes(a)||t.description&&t.description.toLowerCase().includes(a)||t.technologies&&t.technologies.some((e=>e&&e.toLowerCase().includes(a)));return r&&o})):[],fe={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:15}},visibleNoAnimation:{opacity:1,y:0,transition:{duration:.5}}},xe={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:300,damping:20}},visibleNoAnimation:{opacity:1,scale:1,transition:{duration:.5}}},be={hidden:{scale:.8,opacity:0},visible:{scale:1,opacity:.12,transition:{duration:1.5,ease:"easeOut"}},visibleNoAnimation:{scale:1,opacity:.12,transition:{duration:.5}},pulse:{scale:[1,1.05,1],transition:{duration:5,repeat:1/0,repeatType:"reverse"}}},ve=(e,t)=>{try{return j(e)||t}catch(i){return console.error(`Translation error for key ${e}:`,i),t}};return(0,m.jsxs)(x,{id:"projects",ref:he,children:[(0,m.jsxs)(b,{children:[(0,m.jsx)(v,{className:"top-right",variants:be,initial:"hidden",animate:Z?"visibleNoAnimation":["visible","pulse"]}),(0,m.jsx)(v,{className:"bottom-left",variants:be,initial:"hidden",animate:Z?"visibleNoAnimation":["visible","pulse"],transition:{delay:.3}}),(0,m.jsx)(v,{className:"middle-center",variants:be,initial:"hidden",animate:Z?"visibleNoAnimation":["visible","pulse"],transition:{delay:.6}}),(0,m.jsx)(y,{initial:{opacity:0},animate:{opacity:.03},transition:{duration:1.2}})]}),(0,m.jsxs)(w,{ref:ne,children:[(0,m.jsx)(A,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}},visibleNoAnimation:{opacity:1,y:0,transition:{duration:.5}}},initial:"hidden",animate:le,children:ve("projects.subtitle","My Works")}),(0,m.jsx)(k,{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1],delay:.2}},visibleNoAnimation:{opacity:1,y:0,transition:{duration:.5}}},initial:"hidden",animate:le,children:ve("projects.title","Featured Projects")}),(0,m.jsx)($,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,delay:.4}},visibleNoAnimation:{opacity:1,transition:{duration:.5}}},initial:"hidden",animate:le,children:ve("projects.description","Here are some of my recent projects that showcase my skills and experience in software development.")})]}),(0,m.jsxs)(P,{ref:e=>{ce.current=e,ue.current=e},initial:{opacity:0,y:20},animate:de,variants:{visible:{opacity:1,y:0,transition:{duration:.6,type:"spring",stiffness:100}},visibleNoAnimation:{opacity:1,y:0,transition:{duration:.5}}},children:[["all","web","mobile","backend"].map((i=>(0,m.jsx)(z,{active:e===i,onClick:()=>{t(i)},ref:e=>te.current[i]=e,whileHover:{scale:Z?1:1.05},whileTap:{scale:Z?.98:.95},"aria-pressed":e===i,children:ve(`projects.categories.${i}`,i.charAt(0).toUpperCase()+i.slice(1))},i))),(0,m.jsx)(E,{initial:!1,animate:{width:ie||100,left:ae||0,transition:{type:"spring",stiffness:300,damping:30}}})]}),(0,m.jsxs)(L,{ref:pe,initial:{opacity:0,y:20},animate:me,variants:{visible:{opacity:1,y:0,transition:{duration:.6,delay:.1,type:"spring",stiffness:100}},visibleNoAnimation:{opacity:1,y:0,transition:{duration:.5}}},children:[(0,m.jsx)(T,{isRTL:K,focused:u,animate:{scale:u&&!Z?1.1:1},transition:{duration:.2},children:(0,m.jsx)(c.KSO,{"aria-hidden":"true"})}),(0,m.jsx)(R,{type:"text",placeholder:ve("projects.searchPlaceholder","Search projects by name, description or technology..."),value:i,onChange:e=>{a(e.target.value)},onFocus:()=>g(!0),onBlur:()=>g(!1),isRTL:K,dir:K?"rtl":"ltr",focused:u,transition:{duration:.3},"aria-label":"Search projects"}),(0,m.jsx)(l.N,{children:i&&(0,m.jsx)(N,{onClick:()=>{if(a(""),"undefined"!==typeof document){const e=document.querySelector('input[type="text"]');e&&e.focus()}},isRTL:K,initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},whileHover:{scale:Z?1:1.1},whileTap:{scale:Z?.98:.9},"aria-label":"Clear search",transition:{duration:.2},children:(0,m.jsx)(c.QCr,{"aria-hidden":"true"})})})]}),(0,m.jsx)(l.N,{mode:"wait",children:(0,m.jsx)(S,{as:s.P.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}},visibleNoAnimation:{opacity:1,transition:{duration:.5}}},initial:"hidden",animate:Z?"visibleNoAnimation":"visible",children:ge&&ge.length>0?ge.map(((e,t)=>(0,m.jsxs)(C,{variants:fe,transition:{delay:Z?0:.08*t,duration:.4},children:[(0,m.jsxs)(U,{children:[(0,m.jsx)(M,{src:e.image||J,alt:e.title||"Project",loading:"lazy",onError:e=>{e.target.src=J}}),(0,m.jsx)(W,{children:(0,m.jsx)(_,{isRTL:K,children:ve(`projects.categories.${e.category}`,e.category?e.category.charAt(0).toUpperCase()+e.category.slice(1):"Project")})})]}),(0,m.jsxs)(Y,{isRTL:K,children:[(0,m.jsx)(F,{children:e.title||"Untitled Project"}),(0,m.jsx)(X,{children:e.description||"No description available."}),(0,m.jsx)(I,{isRTL:K,children:e.technologies&&e.technologies.map(((e,t)=>(0,m.jsx)(B,{variants:xe,style:{"--i":t},children:e||"Unknown"},t)))}),(0,m.jsxs)(H,{isRTL:K,children:[e.demoUrl&&(0,m.jsxs)(O,{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",className:"primary",isRTL:K,"aria-label":`View ${e.title||"project"} demo`,children:[(0,m.jsx)(c.EQc,{"aria-hidden":"true"})," ",ve("projects.viewProject","View Project")]}),e.codeUrl&&(0,m.jsxs)(O,{href:e.codeUrl,target:"_blank",rel:"noopener noreferrer",className:"secondary",isRTL:K,"aria-label":`View ${e.title||"project"} code`,children:[(0,m.jsx)(c.hL4,{"aria-hidden":"true"})," ",ve("projects.viewCode","View Code")]})]})]})]},e.id||t))):(0,m.jsxs)(D,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.5},children:[(0,m.jsx)(V,{children:(0,m.jsx)(c.WOs,{"aria-hidden":"true"})}),(0,m.jsx)(Q,{children:ve("projects.noResults","No projects found")}),(0,m.jsx)(q,{children:ve("projects.adjustSearch","Try adjusting your search or filter criteria")}),(0,m.jsxs)(G,{onClick:()=>{a(""),t("all")},whileHover:{scale:Z?1:1.05},whileTap:{scale:Z?.98:.95},children:[(0,m.jsx)(c.M1W,{})," Reset Filters"]})]})},"projects-grid")})]})}},7554:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var r=i(9950),a=i(4752),o=i(7978),n=i(3291),s=i(2772),l=i(3899),c=i(641),d=i(4608),p=i(4414);const m=(0,a.Ay)(o.P.div)`
  padding-top: 6rem;
  min-height: 100vh;
  position: relative;
  perspective: 1000px;
  overflow: visible; /* This should be 'visible', not 'hidden' */
  isolation: isolate;
  z-index: 0; 
`,h=a.Ay.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1; // This seems correct already
  pointer-events: none;
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,u=(0,a.Ay)(o.P.div)`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle at 30% 20%, 
    rgba(108, 92, 231, 0.05) 0%, 
    rgba(0, 0, 0, 0) 60%
  );
  z-index: -2;
  pointer-events: none;
  transform-origin: center center;
`,g=()=>{const e=(0,r.useRef)(null),[t,i]=(0,r.useState)("undefined"!==typeof window?window.innerWidth:1200),a={particles:{number:{value:t<768?20:40,density:{enable:!0,value_area:1e3}},color:{value:"#6c5ce7"},opacity:{value:.2,random:!0,anim:{enable:!0,speed:.2}},size:{value:3,random:!0,anim:{enable:!0,speed:2}},move:{enable:!0,speed:.5,direction:"none",random:!0,out_mode:"out",bounce:!1},links:{enable:t>=768,distance:150,color:"#6c5ce7",opacity:.1,width:1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:.3}},push:{particles_nb:3}}},retina_detect:!0,fps_limit:60};return(0,r.useEffect)((()=>{if("undefined"===typeof window)return;const t=t=>{if(!e.current)return;const{width:i,height:r}=e.current.getBoundingClientRect(),a=(t.clientX-i/2)/i,o=(t.clientY-r/2)/r,n=e.current.querySelector("[data-gradient]");n&&(n.style.transform=`translate(${20*a}px, ${20*o}px)`)},r=()=>{i(window.innerWidth)};window.addEventListener("mousemove",t),window.addEventListener("resize",r);const a=setTimeout((()=>{window.scrollTo({top:0,behavior:"auto"})}),100);return()=>{window.removeEventListener("mousemove",t),window.removeEventListener("resize",r),clearTimeout(a)}}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s.m,{children:[(0,p.jsx)("title",{children:"Projects | Enova Studio"}),(0,p.jsx)("meta",{name:"description",content:"Enova Studio offers innovative web design, UI/UX, logo design, and app development services."}),(0,p.jsx)("meta",{name:"keywords",content:"Enova Studio, web design, UI/UX, logo design, app development"}),(0,p.jsx)("meta",{property:"og:title",content:"Projects | Enova Studio"}),(0,p.jsx)("meta",{property:"og:description",content:"Explore Enova Studio's portfolio of softwares and designs projects."}),(0,p.jsx)("meta",{name:"twitter:title",content:"Projects | Enova Studio"}),(0,p.jsx)("meta",{name:"twitter:description",content:"Explore Enova Studio's portfolio of softwares and designs projects."})]}),(0,p.jsxs)(m,{ref:e,initial:{opacity:0},animate:{opacity:1,transition:{duration:.8,ease:"easeOut"}},children:[(0,p.jsx)(h,{children:(0,p.jsx)(n.N,{mode:"wait",children:(0,p.jsx)(o.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.2},style:{width:"100%",height:"100%"},children:(0,p.jsx)(c.u,{id:"tsparticles",init:async e=>{try{await(0,d.m)(e)}catch(t){console.error("Failed to initialize particles:",t)}},options:a,style:{width:"100%",height:"100%"}})},"particles")})}),(0,p.jsx)(u,{"data-gradient":!0,initial:{opacity:0},animate:{opacity:1,transition:{duration:1.5}}}),(0,p.jsx)(l.default,{})]})]})}}}]);