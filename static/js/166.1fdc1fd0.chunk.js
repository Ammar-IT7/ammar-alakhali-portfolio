"use strict";(self.webpackChunkammar_alakhali_portfolio=self.webpackChunkammar_alakhali_portfolio||[]).push([[166],{5875:(e,t,i)=>{i.r(t),i.d(t,{default:()=>fe});var n=i(5043),r=i(8605),a=i(5014),o=i(8957),s=i(4091),d=i(3546),l=i(5464),p=i(948),m=i(7798),h=i(9927),c=i(6767),x=i(184),g=i(6298),u=i(5843);const f=i.p+"static/media/company-logo.4b1059998b497548048a.png";var y=i(579);const w=(0,n.memo)((e=>{let{count:t=30}=e;const[i,r]=(0,n.useState)([]),[a,o]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");o(e.matches);const i=e=>o(e.matches);if(e.addEventListener("change",i),e.matches)r([]);else{const e=Array.from({length:t},((e,i)=>{const n=8*Math.random()+2,r=i/t*Math.PI*2,a=45*Math.random()+20;return{id:i,size:n,x:50+Math.cos(r)*a,y:50+Math.sin(r)*a,duration:15*Math.random()+8,delay:5*Math.random()}}));r(e)}return()=>{e.removeEventListener("change",i)}}),[t]),a||0===i.length?null:(0,y.jsx)(z,{children:i.map((e=>(0,y.jsx)(A,{size:e.size,style:{left:`${e.x}%`,top:`${e.y}%`},initial:{scale:0,opacity:0},animate:{scale:[0,1,0],opacity:[0,.8,0],y:[0,-20,0],x:[0,15*Math.random()-7.5,0],filter:["blur(2px)","blur(0px)","blur(2px)"]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,repeatDelay:2*Math.random(),ease:"easeInOut"}},e.id)))})})),v=e=>{let{text:t,delay:i=0,isColor:a=!1,...o}=e;const s=t.split(" "),[d,l]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");l(e.matches);const t=e=>l(e.matches);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}),[]),d?(0,y.jsx)("div",{...o,children:s.map(((e,t)=>(0,y.jsx)("span",{className:"word-wrapper",style:{display:"inline-block",marginRight:"0.4em",marginBottom:"0.2em",color:a&&1===t?"var(--primary)":"inherit"},children:a&&1===t?(0,y.jsx)(Y,{children:e}):e},t)))}):(0,y.jsx)(r.P.div,{initial:"hidden",animate:"visible",variants:{hidden:{},visible:{transition:{staggerChildren:.08,delayChildren:i}}},...o,children:s.map(((e,t)=>(0,y.jsx)(r.P.span,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,ease:[.2,.65,.3,.9],type:"spring",stiffness:300,damping:24}}},className:"word-wrapper",style:{display:"inline-block",marginRight:"0.4em",marginBottom:"0.2em",color:a&&1===t?"var(--primary)":"inherit"},children:a&&1===t?(0,y.jsx)(Y,{children:e}):e},t)))})},b=e=>{let{src:t,alt:i,...a}=e;const[s,d]=(0,n.useState)(!1),[l,h]=(0,n.useState)(!1),c=(0,n.useRef)(null),x=(0,n.useRef)(null),g=(0,p.d)(0),u=(0,p.d)(0),[f,w]=(0,n.useState)(!1),v=(0,o.z)((0,m.G)(u,[-100,100],[15,-15]),{stiffness:300,damping:30}),b=(0,o.z)((0,m.G)(g,[-100,100],[-15,15]),{stiffness:300,damping:30}),j=(0,o.z)(1,{stiffness:200,damping:20});(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");w(e.matches);const t=e=>w(e.matches);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}),[]);const $=(0,n.useCallback)((e=>{if(!l||f)return;const t=x.current.getBoundingClientRect(),i=t.left+t.width/2,n=t.top+t.height/2;g.set((e.clientX-i)/3),u.set((e.clientY-n)/3)}),[l,g,u,f]),k=(0,n.useCallback)((()=>{h(!1),g.set(0),u.set(0),j.set(1)}),[g,u,j]),L=(0,n.useCallback)((()=>{f||(h(!0),j.set(1.05))}),[j,f]);return(0,n.useEffect)((()=>{c.current&&c.current.complete&&d(!0)}),[]),(0,y.jsxs)(r.P.div,{ref:x,style:{position:"relative",width:"100%",height:"100%",perspective:"1200px",cursor:f?"default":"pointer"},onMouseMove:$,onMouseLeave:k,onMouseEnter:L,whileHover:f?{}:{scale:1.02},children:[!s&&(0,y.jsx)(S,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"12px"}}),(0,y.jsxs)(r.P.div,{style:{width:"100%",height:"100%",rotateX:f?0:v,rotateY:f?0:b,scale:j,transformStyle:"preserve-3d",transformOrigin:"center center"},transition:{type:"spring",stiffness:400,damping:30},children:[(0,y.jsx)(E,{ref:c,src:t,alt:i,onLoad:()=>d(!0),style:{opacity:s?1:0,transform:"translateZ(30px)",filter:l&&!f?"drop-shadow(0 30px 40px rgba(0, 0, 0, 0))":"drop-shadow(0 20px 30px rgba(0, 0, 0, 0))",transition:"filter 0.3s ease"},...a}),s&&!f&&(0,y.jsx)(C,{style:{transform:"translateZ(-40px) rotateX(90deg) translateY(60px) scale(0.7)",filter:"blur(25px)",opacity:l?.6:.4,transition:"opacity 0.3s ease, filter 0.3s ease"}})]}),s&&!f&&(0,y.jsx)(r.P.div,{style:{position:"absolute",top:"-10%",left:"-10%",width:"120%",height:"120%",borderRadius:"50%",background:`radial-gradient(circle at center, ${l?"rgba(74, 37, 170, 0.2)":"rgba(74, 37, 170, 0.1)"} 0%, transparent 70%)`,opacity:l?1:.6,transition:"background 0.3s ease, opacity 0.3s ease",pointerEvents:"none",zIndex:-1}})]})},j=l.i7`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
`,$=l.i7`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`,k=l.i7`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,L=l.i7`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`,z=l.Ay.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
`,A=(0,l.Ay)(r.P.div)`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: ${e=>{let{theme:t}=e;return t.primary}};
  border-radius: 50%;
  will-change: transform, opacity;
`,T=l.Ay.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: min(120px, 12vh) 20px min(60px, 6vh);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  
  @media (max-width: 1200px) {
    padding: min(100px, 10vh) 24px min(60px, 6vh);
  }
  
  @media (max-width: 768px) {
    padding: min(80px, 8vh) 16px min(40px, 4vh);
    align-items: flex-start;
    min-height: calc(100vh - 40px);
  }
  
  @media (max-width: 480px) {
    padding: min(60px, 6vh) 12px min(30px, 3vh);
  }
  
  @media (max-height: 700px) {
    padding-top: max(40px, 6vh);
    min-height: auto;
  }
`,R=l.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.07;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    width: min(800px, 80vw);
    height: min(800px, 80vw);
    border-radius: 50%;
    background: radial-gradient(circle, ${e=>{let{theme:t}=e;return t.primary}}, transparent 70%);
    filter: blur(min(40px, 5vw));
    top: -400px;
    ${e=>{let{isRTL:t}=e;return t?"left: -200px":"right: -200px"}};
    will-change: transform, opacity;
    animation: ${j} 15s infinite alternate;
    
    @media (max-width: 1200px) {
      width: min(600px, 75vw);
      height: min(600px, 75vw);
      top: -300px;
      ${e=>{let{isRTL:t}=e;return t?"left: -180px":"right: -180px"}};
    }
    
    @media (max-width: 768px) {
      width: min(500px, 70vw);
      height: min(500px, 70vw);
      top: -250px;
      ${e=>{let{isRTL:t}=e;return t?"left: -150px":"right: -150px"}};
    }
    
    @media (max-width: 480px) {
      width: min(400px, 80vw);
      height: min(400px, 80vw);
      top: -200px;
      ${e=>{let{isRTL:t}=e;return t?"left: -120px":"right: -120px"}};
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    width: min(600px, 70vw);
    height: min(600px, 70vw);
    border-radius: 50%;
    background: radial-gradient(circle, ${e=>{let{theme:t}=e;return t.secondary}}, transparent 70%);
    filter: blur(min(40px, 5vw));
    bottom: -300px;
    ${e=>{let{isRTL:t}=e;return t?"right: -100px":"left: -100px"}};
    will-change: transform, opacity;
    animation: ${j} 18s infinite alternate-reverse;
    
    @media (max-width: 1200px) {
      width: min(500px, 65vw);
      height: min(500px, 65vw);
      bottom: -250px;
      ${e=>{let{isRTL:t}=e;return t?"right: -120px":"left: -120px"}};
    }
    
    @media (max-width: 768px) {
      width: min(400px, 60vw);
      height: min(400px, 60vw);
      bottom: -200px;
      ${e=>{let{isRTL:t}=e;return t?"right: -100px":"left: -100px"}};
    }
    
    @media (max-width: 480px) {
      width: min(300px, 65vw);
      height: min(300px, 65vw);
      bottom: -150px;
      ${e=>{let{isRTL:t}=e;return t?"right: -80px":"left: -80px"}};
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::after, &::before {
      animation: none;
    }
  }
`,M=(0,l.Ay)(r.P.div)`
  width: 100%;
  max-width: min(1400px, 95vw);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  gap: min(30px, 3vw);
  
  @media (max-width: 1200px) {
    max-width: min(1100px, 95vw);
    gap: min(24px, 2.5vw);
  }
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: min(2.5rem, 5vh);
    margin-top: min(40px, 5vh);
  }
  
  @media (max-width: 768px) {
    gap: min(2rem, 4vh);
    margin-top: min(20px, 3vh);
  }
  
  @media (max-width: 480px) {
    gap: min(1.5rem, 3vh);
  }
`,P=(0,l.Ay)(r.P.div)`
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: min(500px, 50vh);
  aspect-ratio: 1/1;
  
  @media (max-width: 1200px) {
    flex: 0 0 45%;
    max-height: min(450px, 45vh);
  }
  
  @media (max-width: 992px) {
    width: 80%;
    max-width: min(400px, 80vw);
    max-height: min(400px, 40vh);
  }
  
  @media (max-width: 768px) {
    width: 70%;
    max-width: min(350px, 75vw);
    max-height: min(350px, 35vh);
  }
  
  @media (max-width: 480px) {
    width: 90%;
    max-width: min(280px, 80vw);
    max-height: min(280px, 30vh);
  }
  
  @media (max-height: 700px) {
    max-height: min(300px, 40vh);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, ${e=>{let{theme:t}=e;return t.primary}}10 10%, transparent 70%);
    z-index: -1;
  }
`,E=l.Ay.img`
  max-width: 100%;
  height: auto;
  will-change: transform;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2));
  animation: ${$} 6s ease-in-out infinite;
  transform-style: preserve-3d;
  display: block;
  
  @media (max-width: 992px) {
    animation-duration: 5s;
  }
  
  @media (max-width: 480px) {
    animation-duration: 4s;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,C=l.Ay.div`
  width: 80%;
  height: 20px;
  background: ${e=>{let{theme:t}=e;return t.primary}};
  margin: 0 auto;
  border-radius: 50%;
  transform-origin: center center;
  
  @media (max-width: 480px) {
    height: 15px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,S=l.Ay.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    ${e=>{let{theme:t}=e;return t.backgroundAlt}},
    ${e=>{let{theme:t}=e;return t.background}},
    ${e=>{let{theme:t}=e;return t.backgroundAlt}}
  );
  background-size: 200% 100%;
  animation: ${k} 1.5s infinite;
  
  @media (prefers-reduced-motion: reduce) {
    background: ${e=>{let{theme:t}=e;return t.backgroundAlt}};
    animation: none;
  }
`,Y=l.Ay.span`
  display: inline-block;
  position: relative;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  font-weight: bold;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.3em;
    bottom: 0.1em;
    left: 0;
    background-color: ${e=>{let{theme:t}=e;return t.primary}}30;
    z-index: -1;
    transform: skewX(-15deg);
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    height: 0.4em;
    background-color: ${e=>{let{theme:t}=e;return t.primary}}50;
    transform: skewX(-10deg);
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`,X=(0,l.Ay)(r.P.div)`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  
  &::before {
    content: '';
    height: 2px;
    width: 40px;
    background: ${e=>{let{theme:t}=e;return t.primary}};
    
    @media (max-width: 768px) {
      width: 25px;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.7rem;
    gap: 10px;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
  }
`,O=l.i7`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,I=(0,l.Ay)(r.P.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg, 
    ${e=>{let{theme:t}=e;return t.primary}}, 
    ${e=>{let{theme:t}=e;return t.secondary}}, 
    ${e=>{let{theme:t}=e;return t.primary}}
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
  position: relative;
  letter-spacing: -0.02em;
  font-weight: 800;
  animation: ${O} 8s ease infinite;
  
  @media (max-width: 768px) {
    font-size: clamp(2.2rem, 6vw, 3.5rem);
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 7vw, 3rem);
    margin-bottom: 0.6rem;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-size: 100% 100%;
  }
`,_=(0,l.Ay)(r.P.h2)`
  font-size: clamp(1.3rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 4vw, 2rem);
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 4vw, 1.8rem);
    margin-bottom: 1rem;
  }
`,B=(0,l.Ay)(r.P.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  position: relative;
  padding-left: ${e=>e.isRTL?"0":"20px"};
  padding-right: ${e=>e.isRTL?"20px":"0"};
  border-left: ${e=>e.isRTL?"none":"3px solid"};
  border-right: ${e=>e.isRTL?"3px solid":"none"};
  border-image: linear-gradient(
    to bottom,
    ${e=>{let{theme:t}=e;return t.primary}},
    ${e=>{let{theme:t}=e;return t.secondary}}
  ) 1;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding-left: ${e=>e.isRTL?"0":"15px"};
    padding-right: ${e=>e.isRTL?"15px":"0"};
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.8rem;
    padding-left: ${e=>e.isRTL?"0":"12px"};
    padding-right: ${e=>e.isRTL?"12px":"0"};
    font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  }
`,N=(0,l.Ay)(r.P.div)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`,W=(0,l.Ay)(r.P.div)`
  display: inline-block;
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`,D=l.i7`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,H=l.i7`
  0% {
    transform: translateX(-100%);
  }
  20%, 100% {
    transform: translateX(100%);
  }
`,V=(0,l.Ay)(c.N_)`
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
  text-decoration: none;
  position: relative;
  padding: 10px 18px;
  transition: all 0.3s ease;
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.backgroundAlt}};
    transform: translateY(-2px);
    color: ${e=>{let{theme:t}=e;return t.text}};
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 6px;
    left: 18px;
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: calc(100% - 36px);
  }
  
  @media (max-width: 768px) {
    padding: 9px 16px;
    font-size: clamp(0.85rem, 2.5vw, 1rem);
  }
  
  @media (max-width: 480px) {
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e=>{let{theme:t}=e;return t.backgroundAlt}}50;
    
    &:hover {
      background: ${e=>{let{theme:t}=e;return t.backgroundAlt}};
    }
    
    &::after {
      bottom: 5px;
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &::after {
      transition: none;
    }
    
    &:hover {
      transform: none;
    }
  }
`,Z=(0,l.Ay)(c.N_)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.8rem, 4vw, 2.4rem);
  background: linear-gradient(
    90deg,
    ${e=>{let{theme:t}=e;return t.primary}},
    ${e=>{let{theme:t}=e;return t.secondary}},
    ${e=>{let{theme:t}=e;return t.primary}}
  );
  background-size: 200% auto;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${D} 5s ease infinite;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transform: translateX(-100%);
    animation: ${H} 3s 5s infinite;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 10px 25px -5px ${e=>{let{theme:t}=e;return t.primary}}50,
      0 5px 10px ${e=>{let{theme:t}=e;return t.secondary}}30;
  }
  
  svg {
    transition: transform 0.3s ease;
    z-index: 2;
  }
  
  span {
    z-index: 2;
  }
  
  &:hover svg {
    transform: translateX(${e=>{let{isRTL:t}=e;return t?"-4px":"4px"}});
  }
  
  @media (max-width: 768px) {
    padding: clamp(0.7rem, 2vw, 0.9rem) clamp(1.6rem, 4vw, 2rem);
    font-size: clamp(0.85rem, 2.5vw, 1rem);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.9rem 1.5rem;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: background-color 0.3s;
    
    &::before {
      display: none;
    }
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
    
    svg {
      transition: none;
    }
    
    &:hover svg {
      transform: none;
    }
  }
`,G=(0,l.Ay)(r.P.div)`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
  font-size: 1rem;
  
  p {
    margin-bottom: 12px;
    opacity: 0.8;
    font-weight: 500;
  }
  
  .mouse {
    width: 28px;
    height: 44px;
    border: 2px solid ${e=>{let{theme:t}=e;return t.textAlt}};
    border-radius: 20px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 10px;
      background: ${e=>{let{theme:t}=e;return t.primary}};
      border-radius: 4px;
      will-change: transform, opacity;
      animation: ${L} 1.5s infinite;
    }
  }
  
  @media (max-width: 992px) {
    bottom: 20px;
    
    p {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 768px) {
    bottom: 15px;
    
    p {
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
    
    .mouse {
      width: 24px;
      height: 38px;
      
      &::before {
        width: 4px;
        height: 8px;
      }
    }
  }
  
  @media (max-width: 480px) {
    p {
      display: none;
    }
    
    .mouse {
      width: 22px;
      height: 34px;
    }
  }
  
  @media (max-height: 700px) {
    display: none;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .mouse::before {
      animation: none;
    }
  }
`,F=(0,l.Ay)(r.P.div)`
  flex: 0 0 55%;
  text-align: ${e=>{let{isRTL:t}=e;return t?"right":"left"}};
  
  @media (max-width: 1200px) {
    flex: 0 0 50%;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 600px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,U=()=>{const{language:e,t:t}=(0,n.useContext)(g.s),i="ar"===e,r=(0,n.useRef)(null),a=(0,h.s)(),[o,s]=(0,n.useState)(20),[d,l]=(0,u.Wx)({triggerOnce:!0,threshold:.1}),[p,m]=(0,u.Wx)({triggerOnce:!0,threshold:.1}),[c,j]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");j(e.matches);const t=e=>{j(e.matches)};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}),[]),(0,n.useEffect)((()=>{const e=()=>{const e=window.innerWidth,t=!navigator.hardwareConcurrency||navigator.hardwareConcurrency<=4;("getBattery"in navigator?navigator.getBattery().then((e=>e.level<.2)):Promise.resolve(!1)).then((i=>{s(c?0:i||e<768&&t?8:e<768||t?12:e<1200?18:25)}))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[c]),(0,n.useEffect)((()=>{l&&a.start("visible")}),[a,l]);const $={hidden:{opacity:0,x:i?30:-30},visible:{opacity:1,x:0,transition:{duration:c?.3:.8,ease:[.25,.1,.25,1],staggerChildren:c?.05:.1,when:"beforeChildren"}}},k={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:c?.4:.9,ease:[.25,.1,.25,1],delay:c?.1:.2}}},L=t("hero.subtitle");return(0,y.jsxs)(T,{ref:r,children:[(0,y.jsx)(R,{isRTL:i}),(0,y.jsx)(w,{count:o}),(0,y.jsxs)(M,{isRTL:i,initial:{opacity:0},animate:{opacity:1},transition:{duration:c?.5:.8},children:[(0,y.jsxs)(F,{ref:d,isRTL:i,variants:$,initial:"hidden",animate:l?"visible":"hidden",children:[(0,y.jsx)(X,{isRTL:i,variants:{hidden:{opacity:0,x:i?15:-15},visible:{opacity:1,x:0,transition:{duration:c?.3:.6,ease:"easeOut"}}},children:t("hero.greeting")}),(0,y.jsx)(I,{variants:{hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:c?.4:.7,delay:c?.1:.15,ease:[.25,.1,.25,1],type:"spring",stiffness:100,damping:20}}},children:t("hero.title")}),(0,y.jsx)(_,{children:(0,y.jsx)(v,{text:L,delay:c?.2:.4,isColor:!0})}),(0,y.jsx)(B,{isRTL:i,variants:{hidden:{opacity:0,x:i?15:-15},visible:{opacity:1,x:0,transition:{duration:c?.4:.7,delay:c?.3:.6,ease:[.25,.1,.25,1]}}},children:t("hero.description")}),(0,y.jsxs)(N,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:c?.4:.7,delay:c?.4:.8,ease:[.25,.1,.25,1]}}},children:[(0,y.jsx)(W,{whileHover:c?{}:{scale:1.05},whileTap:c?{}:{scale:.95},transition:{type:"spring",stiffness:400,damping:17},children:(0,y.jsx)(Z,{to:"/projects",isRTL:i,children:i?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.QVr,{}),(0,y.jsx)("span",{children:t("hero.cta")})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{children:t("hero.cta")}),(0,y.jsx)(x.Z0P,{})]})})}),(0,y.jsx)(V,{to:"/about",children:t("hero.learnMore")||"Learn more about us"})]})]}),(0,y.jsx)(P,{ref:p,variants:k,initial:"hidden",animate:m?"visible":"hidden",children:(0,y.jsx)(b,{src:f,alt:"Enova Studio Logo",width:"400",height:"400"})})]}),(0,y.jsxs)(G,{initial:{opacity:0},animate:{opacity:1},transition:{delay:c?.5:1.2,duration:c?.4:.8},children:[(0,y.jsx)("p",{children:t("hero.scroll")||"Scroll down"}),(0,y.jsx)("div",{className:"mouse"})]})]})},Q=n.memo(U);var q=i(1591),J=i(3536);const K=(0,n.lazy)((()=>Promise.all([i.e(750),i.e(355),i.e(651)]).then(i.bind(i,651)))),ee=(0,n.lazy)((()=>i.e(72).then(i.bind(i,5072)))),te=(0,n.lazy)((()=>i.e(979).then(i.bind(i,2979)))),ie=l.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,ne=l.i7`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.03); }
  100% { opacity: 0.6; transform: scale(1); }
`,re=l.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,ae=(0,l.Ay)(r.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg, 
    ${e=>{let{theme:t}=e;return t.primary}}, 
    ${e=>{let{theme:t}=e;return t.secondary}}, 
    ${e=>{let{theme:t}=e;return t.primary}}
  );
  background-size: 200% 200%;
  animation: ${ie} 3s ease infinite;
  transform-origin: 0%;
  z-index: 1000;
  filter: drop-shadow(0 0 8px ${e=>{let{theme:t}=e;return t.primary}}90);
  will-change: transform;
  transform: scaleX(var(--scaleX, 0));
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${e=>{let{theme:t}=e;return t.primary}}, ${e=>{let{theme:t}=e;return t.secondary}});
    filter: blur(3px);
    opacity: 0.8;
  }
`,oe=(0,l.Ay)(r.P.div)`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding: clamp(60px, 8vh, 100px) 0;
  isolation: isolate;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, ${e=>{let{theme:t}=e;return t.background}}, transparent);
    opacity: 0.8;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: clamp(40px, 5vh, 60px) 0;
  }
`,se=l.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`,de=(0,l.Ay)(r.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 85%;
  max-width: 400px;
  padding: 32px;
  background: ${e=>{let{theme:t}=e;return`${t.backgroundAlt}40`}};
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.15),
    0 1px 1px rgba(255, 255, 255, 0.1) inset;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transform-style: preserve-3d;
  perspective: 1000px;
`,le=l.Ay.p`
  font-size: clamp(15px, 3vw, 18px);
  color: ${e=>{let{theme:t}=e;return t.text}};
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
`,pe=l.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
  margin: 0;
  text-align: center;
  animation: ${ne} 2.5s infinite ease-in-out;
`,me=(0,l.Ay)(r.P.div)`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
`,he=l.Ay.div`
  width: 100%;
  height: 10px;
  background: ${e=>{let{theme:t}=e;return`${t.backgroundAlt}90`}};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.progress||0}%;
    background: linear-gradient(
      90deg,
      ${e=>{let{theme:t}=e;return t.primary}},
      ${e=>{let{theme:t}=e;return t.secondary}}
    );
    border-radius: 20px;
    transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0 15px ${e=>{let{theme:t}=e;return t.primary}}60;
  }
`,ce=l.Ay.div`
  font-size: 26px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  margin-top: 15px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 2px 10px ${e=>{let{theme:t}=e;return t.primary}}40;
`,xe=(0,l.Ay)(r.P.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>{let{theme:t}=e;return t.primary}};
  color: white;
  border: none;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 5px 20px rgba(0, 0, 0, 0.15),
    0 3px 6px ${e=>{let{theme:t}=e;return t.primary}}40;
  outline: none;
  transform-origin: center;
  overflow: hidden;
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  &:hover {
    background: linear-gradient(
      45deg,
      ${e=>{let{theme:t}=e;return t.primary}},
      ${e=>{let{theme:t}=e;return t.secondary}}
    );
    box-shadow: 
      0 7px 25px rgba(0, 0, 0, 0.2),
      0 5px 12px ${e=>{let{theme:t}=e;return t.primary}}50;
  }
  
  &:hover svg {
    transform: translateY(-3px);
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 3px ${e=>{let{theme:t}=e;return t.primary}}80;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::before {
      display: none;
    }
    
    transition: background 0.3s ease;
    
    &:hover svg {
      transform: none;
    }
  }
`,ge=(0,l.Ay)(r.P.div)`
  position: absolute;
  background: linear-gradient(
    135deg,
    ${e=>{let{theme:t}=e;return`${t.primary}10`}},
    ${e=>{let{theme:t}=e;return`${t.secondary}05`}}
  );
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
  pointer-events: none;
  opacity: 0.4;
  will-change: transform;
  animation: ${re} ${e=>e.duration||10}s infinite ease-in-out;
  animation-delay: ${e=>e.delay||0}s;
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,ue=(0,l.Ay)(r.P.div)`
  display: contents;
`,fe=()=>{const{scrollYProgress:e}=(0,a.L)(),t=(0,n.useRef)(null),[i,l]=(0,n.useState)(!1),[p,m]=(0,n.useState)(!0),[h,c]=(0,n.useState)(0),[x,u]=(0,n.useState)(""),{t:f}=(0,n.useContext)(g.s),[w,v]=(0,n.useState)([]),[b,j]=(0,n.useState)(!1),$=(0,o.z)(0,{damping:30,stiffness:300,restDelta:.001});(0,s.L)(e,"change",(e=>{$.set(e)})),(0,n.useEffect)((()=>{u(f("home.loading.preparing"));const e=window.matchMedia("(prefers-reduced-motion: reduce)");j(e.matches);const t=e=>j(e.matches);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}),[f]),(0,n.useEffect)((()=>{if(b)v([]);else{const e=Array.from({length:6},((e,t)=>({id:t,width:200*Math.random()+100,height:200*Math.random()+100,top:100*Math.random()+"%",left:100*Math.random()+"%",duration:8*Math.random()+8,delay:5*Math.random()})));v(e)}}),[b]),(0,n.useEffect)((()=>{let e,t=0;const i=()=>{if(t<100){const n=t<60?8*Math.random()+2:t<85?(3*Math.random()+1)*(Math.random()>.7?.2:1):1.5*Math.random();if(t+=n,u(f(t<15?"home.loading.preparing":t<30?"home.loading.loadingElements":t<45?"home.loading.settingAnimations":t<60?"home.loading.optimizing":t<75?"home.loading.almostReady":t<90?"home.loading.finalTouches":"home.loading.readyToLaunch")),t>100&&(t=100),c(t),t<100){let n=100+180*Math.random();t>30&&t<35&&(n+=400),t>60&&t<65&&(n+=300),t>85&&(n+=500),e=setTimeout(i,n)}else setTimeout((()=>m(!1)),800)}};return e=setTimeout(i,600),()=>{clearTimeout(e)}}),[f]);const k=(0,n.useCallback)((0,J.debounce)((()=>{l(window.scrollY>.5*window.innerHeight)}),100,{leading:!0}),[]);(0,n.useEffect)((()=>(window.addEventListener("scroll",k,{passive:!0}),()=>{window.removeEventListener("scroll",k),k.cancel()})),[k]);const L={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.16,1,.3,1]}}},z=()=>(0,y.jsx)(me,{animate:{rotateY:[0,360]},transition:{duration:2.5,ease:"easeInOut",repeat:1/0,repeatType:"loop"},children:(0,y.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,y.jsx)(r.P.path,{d:"M30 5L37.7128 21.9463L55.9808 25.3688L42.9904 38.0537L46.7256 55.6312L30 47.5L13.2744 55.6312L17.0096 38.0537L4.01924 25.3688L22.2872 21.9463L30 5Z",stroke:"url(#gradient)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",initial:{pathLength:0,opacity:.2},animate:{pathLength:[0,1,0],opacity:[.2,1,.2]},transition:{duration:2.5,ease:"easeInOut",repeat:1/0,repeatType:"loop"}}),(0,y.jsx)("defs",{children:(0,y.jsxs)("linearGradient",{id:"gradient",x1:"4",y1:"5",x2:"56",y2:"55",gradientUnits:"userSpaceOnUse",children:[(0,y.jsx)("stop",{stopColor:"#4a25aa"}),(0,y.jsx)("stop",{offset:"1",stopColor:"#5e4adb"})]})})]})});return p?(0,y.jsxs)(r.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--background)",flexDirection:"column",padding:"20px",position:"relative",overflow:"hidden"},children:[!b&&w.map((e=>(0,y.jsx)(ge,{style:{width:e.width+"px",height:e.height+"px",top:e.top,left:e.left},duration:e.duration,delay:e.delay},e.id))),(0,y.jsxs)(de,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,ease:[.16,1,.3,1]},style:{transformStyle:"preserve-3d",transform:b?"none":"rotateX(10deg)"},children:[(0,y.jsx)(z,{}),(0,y.jsx)(le,{children:x}),(0,y.jsx)(he,{progress:h}),(0,y.jsx)(ce,{children:(0,y.jsxs)(r.P.span,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2},children:[Math.round(h),"%"]},Math.round(h))}),(0,y.jsx)(pe,{children:f(h<100?"home.loading.pleaseWait":"home.loading.readyToLaunch")})]})]}):(0,y.jsxs)(ue,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[(0,y.jsxs)(q.m,{children:[(0,y.jsx)("title",{children:f("home.meta.title")}),(0,y.jsx)("meta",{name:"description",content:f("home.meta.description")}),(0,y.jsx)("meta",{name:"keywords",content:f("home.meta.keywords")}),(0,y.jsx)("meta",{property:"og:title",content:f("home.meta.ogTitle")}),(0,y.jsx)("meta",{property:"og:description",content:f("home.meta.ogDescription")}),(0,y.jsx)("meta",{property:"og:type",content:"website"}),(0,y.jsx)("meta",{property:"og:url",content:"https://enovastudio.com"}),(0,y.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,y.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0"}),(0,y.jsx)("meta",{name:"theme-color",content:"#4a25aa"}),(0,y.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,y.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,y.jsx)("link",{rel:"preload",as:"image",href:"/logo.svg"})]}),(0,y.jsx)(ae,{style:{scaleX:$}}),!b&&w.map((e=>(0,y.jsx)(ge,{style:{width:e.width+"px",height:e.height+"px",top:e.top,left:e.left,position:"fixed"},duration:e.duration,delay:e.delay},e.id))),(0,y.jsxs)(r.P.div,{ref:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6},children:[(0,y.jsx)(Q,{}),(0,y.jsx)(n.Suspense,{fallback:(0,y.jsx)(se,{children:(0,y.jsxs)(de,{initial:{y:20,opacity:0,scale:.95},animate:{y:0,opacity:1,scale:1},transition:{duration:.5,ease:"easeOut"},children:[(0,y.jsx)(z,{}),(0,y.jsx)(le,{children:f("home.loading.loadingContent")}),(0,y.jsx)(he,{progress:70}),(0,y.jsx)(ce,{children:"70%"}),(0,y.jsx)(pe,{children:f("home.loading.almostThere")})]})}),children:(0,y.jsxs)(r.P.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.3,ease:"easeOut"}}},initial:"hidden",animate:"visible",children:[(0,y.jsx)(oe,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1,margin:"-100px 0px"},children:(0,y.jsx)(K,{})}),(0,y.jsx)(oe,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1,margin:"-100px 0px"},children:(0,y.jsx)(ee,{})}),(0,y.jsx)(oe,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1,margin:"-100px 0px"},children:(0,y.jsx)(te,{})})]})})]}),(0,y.jsx)(d.N,{children:i&&(0,y.jsx)(xe,{initial:{opacity:0,scale:.5,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.5,y:20},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{window.scrollTo({top:0,behavior:b?"auto":"smooth"})},"aria-label":f("home.scrollToTop"),children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,y.jsx)("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),(0,y.jsx)("polyline",{points:"5 12 12 5 19 12"})]})})})]})}}}]);
//# sourceMappingURL=166.1fdc1fd0.chunk.js.map