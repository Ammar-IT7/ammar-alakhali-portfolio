"use strict";(self.webpackChunkammar_alakhali_portfolio=self.webpackChunkammar_alakhali_portfolio||[]).push([[721,839],{4721:(e,t,i)=>{i.d(t,{s:()=>p});var n=i(24),r=i(6794),a=i(3935);function o(e,t){[...t].reverse().forEach((i=>{const n=e.getVariant(i);n&&(0,r.U)(e,n),e.variantChildren&&e.variantChildren.forEach((e=>{o(e,t)}))}))}function s(){let e=!1;const t=new Set,i={subscribe:e=>(t.add(e),()=>{t.delete(e)}),start(i,r){(0,n.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const o=[];return t.forEach((e=>{o.push((0,a._)(e,i,{transitionOverride:r}))})),Promise.all(o)},set:i=>((0,n.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach((e=>{!function(e,t){Array.isArray(t)?o(e,t):"string"===typeof t?o(e,[t]):(0,r.U)(e,t)}(e,i)}))),stop(){t.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,i.stop()})};return i}var d=i(9305),l=i(7544);const p=function(){const e=(0,d.M)(s);return(0,l.E)(e.mount,[]),e}},6004:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Te});var n=i(9950),r=i(7978),a=i(3182),o=i(7643),s=i(2278),d=i(7544),l=i(1567),p=i(8232),m=i(7800);function h(e){return"number"===typeof e?e:parseFloat(e)}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{isStatic:i}=(0,n.useContext)(s.Q),r=(0,n.useRef)(null),a=(0,l.d)((0,p.S)(e)?h(e.get()):e),c=(0,n.useRef)(a.get()),x=(0,n.useRef)((()=>{})),u=()=>{const e=r.current;e&&0===e.time&&e.sample(m.uv.delta),g(),r.current=(0,o.L)({keyframes:[a.get(),c.current],velocity:a.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:x.current})},g=()=>{r.current&&r.current.stop()};return(0,n.useInsertionEffect)((()=>a.attach(((e,t)=>i?t(e):(c.current=e,x.current=t,m.Gt.update(u),a.get())),g)),[JSON.stringify(t)]),(0,d.E)((()=>{if((0,p.S)(e))return e.on("change",(e=>a.set(h(e))))}),[a]),a}var x=i(6328),u=i(3291),g=i(4752),f=i(9854),y=i(4721),w=i(2074),v=i(2875),b=i(771),j=Object.defineProperty,k=(e,t,i)=>((e,t,i)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),$=new Map,L=new WeakMap,A=0,z=void 0;function E(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(L.has(i)||(A+=1,L.set(i,A.toString())),L.get(i)):"0"):e[t]}`;var i})).toString()}function R(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:z;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:a,elements:o}=function(e){const t=E(e);let i=$.get(t);if(!i){const n=new Map;let r;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=n.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:n},$.set(t,i)}return i}(i),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),$.delete(r))}}n.Component;function T(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:r,root:a,triggerOnce:o,skip:s,initialInView:d,fallbackInView:l,onChange:p}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[h,c]=n.useState(null),x=n.useRef(p),[u,g]=n.useState({inView:!!d,entry:void 0});x.current=p,n.useEffect((()=>{if(s||!h)return;let n;return n=R(h,((e,t)=>{g({inView:e,entry:t}),x.current&&x.current(e,t),t.isIntersecting&&o&&n&&(n(),n=void 0)}),{root:a,rootMargin:r,threshold:e,trackVisibility:i,delay:t},l),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,h,a,r,o,s,i,l,t]);const f=null==(m=u.entry)?void 0:m.target,y=n.useRef(void 0);h||!f||o||s||y.current===f||(y.current=f,g({inView:!!d,entry:void 0}));const w=[c,u.inView,u.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}const M=i.p+"static/media/company-logo.4b1059998b497548048a.png";var P=i(4414);const C=(0,n.memo)((e=>{let{count:t=30}=e;const[i,r]=(0,n.useState)([]),[a,o]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");o(e.matches);const i=e=>o(e.matches);if(e.addEventListener("change",i),e.matches)r([]);else{const e=Array.from({length:t},((e,i)=>{const n=8*Math.random()+2,r=i/t*Math.PI*2,a=45*Math.random()+20;return{id:i,size:n,x:50+Math.cos(r)*a,y:50+Math.sin(r)*a,duration:15*Math.random()+8,delay:5*Math.random()}}));r(e)}return()=>{e.removeEventListener("change",i)}}),[t]),a||0===i.length?null:(0,P.jsx)(_,{children:i.map((e=>(0,P.jsx)(B,{size:e.size,style:{left:`${e.x}%`,top:`${e.y}%`},initial:{scale:0,opacity:0},animate:{scale:[0,1,0],opacity:[0,.8,0],y:[0,-20,0],x:[0,15*Math.random()-7.5,0],filter:["blur(2px)","blur(0px)","blur(2px)"]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,repeatDelay:2*Math.random(),ease:"easeInOut"}},e.id)))})})),S=e=>{let{text:t,delay:i=0,isColor:a=!1,...o}=e;const s=t.split(" "),[d,l]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");l(e.matches);const t=e=>l(e.matches);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}),[]),d?(0,P.jsx)("div",{...o,children:s.map(((e,t)=>(0,P.jsx)("span",{className:"word-wrapper",style:{display:"inline-block",marginRight:"0.4em",marginBottom:"0.2em",color:a&&1===t?"var(--primary)":"inherit"},children:a&&1===t?(0,P.jsx)(Z,{children:e}):e},t)))}):(0,P.jsx)(r.P.div,{initial:"hidden",animate:"visible",variants:{hidden:{},visible:{transition:{staggerChildren:.08,delayChildren:i}}},...o,children:s.map(((e,t)=>(0,P.jsx)(r.P.span,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,ease:[.2,.65,.3,.9],type:"spring",stiffness:300,damping:24}}},className:"word-wrapper",style:{display:"inline-block",marginRight:"0.4em",marginBottom:"0.2em",color:a&&1===t?"var(--primary)":"inherit"},children:a&&1===t?(0,P.jsx)(Z,{children:e}):e},t)))})},V=e=>{let{src:t,alt:i,...a}=e;const[o,s]=(0,n.useState)(!1),[d,p]=(0,n.useState)(!1),m=(0,n.useRef)(null),h=(0,n.useRef)(null),x=(0,l.d)(0),u=(0,l.d)(0),[g,y]=(0,n.useState)(!1),w=c((0,f.G)(u,[-100,100],[15,-15]),{stiffness:300,damping:30}),v=c((0,f.G)(x,[-100,100],[-15,15]),{stiffness:300,damping:30}),b=c(1,{stiffness:200,damping:20});(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");y(e.matches);const t=e=>y(e.matches);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}),[]);const j=(0,n.useCallback)((e=>{if(!d||g)return;const t=h.current.getBoundingClientRect(),i=t.left+t.width/2,n=t.top+t.height/2;x.set((e.clientX-i)/3),u.set((e.clientY-n)/3)}),[d,x,u,g]),k=(0,n.useCallback)((()=>{p(!1),x.set(0),u.set(0),b.set(1)}),[x,u,b]),$=(0,n.useCallback)((()=>{g||(p(!0),b.set(1.05))}),[b,g]);return(0,n.useEffect)((()=>{m.current&&m.current.complete&&s(!0)}),[]),(0,P.jsxs)(r.P.div,{ref:h,style:{position:"relative",width:"100%",height:"100%",perspective:"1200px",cursor:g?"default":"pointer"},onMouseMove:j,onMouseLeave:k,onMouseEnter:$,whileHover:g?{}:{scale:1.02},children:[!o&&(0,P.jsx)(H,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"12px"}}),(0,P.jsxs)(r.P.div,{style:{width:"100%",height:"100%",rotateX:g?0:w,rotateY:g?0:v,scale:b,transformStyle:"preserve-3d",transformOrigin:"center center"},transition:{type:"spring",stiffness:400,damping:30},children:[(0,P.jsx)(F,{ref:m,src:t,alt:i,onLoad:()=>s(!0),style:{opacity:o?1:0,transform:"translateZ(30px)",filter:d&&!g?"drop-shadow(0 30px 40px rgba(0, 0, 0, 0))":"drop-shadow(0 20px 30px rgba(0, 0, 0, 0))",transition:"filter 0.3s ease"},...a}),o&&!g&&(0,P.jsx)(G,{style:{transform:"translateZ(-40px) rotateX(90deg) translateY(60px) scale(0.7)",filter:"blur(25px)",opacity:d?.6:.4,transition:"opacity 0.3s ease, filter 0.3s ease"}})]}),o&&!g&&(0,P.jsx)(r.P.div,{style:{position:"absolute",top:"-10%",left:"-10%",width:"120%",height:"120%",borderRadius:"50%",background:`radial-gradient(circle at center, ${d?"rgba(74, 37, 170, 0.2)":"rgba(74, 37, 170, 0.1)"} 0%, transparent 70%)`,opacity:d?1:.6,transition:"background 0.3s ease, opacity 0.3s ease",pointerEvents:"none",zIndex:-1}})]})},O=g.i7`
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
`,Y=g.i7`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`,I=g.i7`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,X=g.i7`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`,_=g.Ay.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
`,B=(0,g.Ay)(r.P.div)`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: ${e=>{let{theme:t}=e;return t.primary}};
  border-radius: 50%;
  will-change: transform, opacity;
`,N=g.Ay.section`
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
`,D=g.Ay.div`
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
    animation: ${O} 15s infinite alternate;
    
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
    animation: ${O} 18s infinite alternate-reverse;
    
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
`,U=(0,g.Ay)(r.P.div)`
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
`,W=(0,g.Ay)(r.P.div)`
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
`,F=g.Ay.img`
  max-width: 100%;
  height: auto;
  will-change: transform;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2));
  animation: ${Y} 6s ease-in-out infinite;
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
`,G=g.Ay.div`
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
`,H=g.Ay.div`
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
  animation: ${I} 1.5s infinite;
  
  @media (prefers-reduced-motion: reduce) {
    background: ${e=>{let{theme:t}=e;return t.backgroundAlt}};
    animation: none;
  }
`,Z=g.Ay.span`
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
`,Q=(0,g.Ay)(r.P.div)`
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
`,q=g.i7`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,J=(0,g.Ay)(r.P.h1)`
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
  animation: ${q} 8s ease infinite;
  
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
`,K=(0,g.Ay)(r.P.h2)`
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
`,ee=(0,g.Ay)(r.P.p)`
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
`,te=(0,g.Ay)(r.P.div)`
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
`,ie=(0,g.Ay)(r.P.div)`
  display: inline-block;
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`,ne=g.i7`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,re=g.i7`
  0% {
    transform: translateX(-100%);
  }
  20%, 100% {
    transform: translateX(100%);
  }
`,ae=(0,g.Ay)(w.N_)`
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
`,oe=(0,g.Ay)(w.N_)`
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
  animation: ${ne} 5s ease infinite;
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
    animation: ${re} 3s 5s infinite;
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
`,se=(0,g.Ay)(r.P.div)`
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
      animation: ${X} 1.5s infinite;
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
`,de=(0,g.Ay)(r.P.div)`
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
`,le=()=>{const{language:e,t:t}=(0,n.useContext)(b.s),i="ar"===e,r=(0,n.useRef)(null),a=(0,y.s)(),[o,s]=(0,n.useState)(20),[d,l]=T({triggerOnce:!0,threshold:.1}),[p,m]=T({triggerOnce:!0,threshold:.1}),[h,c]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");c(e.matches);const t=e=>{c(e.matches)};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}),[]),(0,n.useEffect)((()=>{const e=()=>{const e=window.innerWidth,t=!navigator.hardwareConcurrency||navigator.hardwareConcurrency<=4;("getBattery"in navigator?navigator.getBattery().then((e=>e.level<.2)):Promise.resolve(!1)).then((i=>{s(h?0:i||e<768&&t?8:e<768||t?12:e<1200?18:25)}))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[h]),(0,n.useEffect)((()=>{l&&a.start("visible")}),[a,l]);const x={hidden:{opacity:0,x:i?30:-30},visible:{opacity:1,x:0,transition:{duration:h?.3:.8,ease:[.25,.1,.25,1],staggerChildren:h?.05:.1,when:"beforeChildren"}}},u={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:h?.4:.9,ease:[.25,.1,.25,1],delay:h?.1:.2}}},g=t("hero.subtitle");return(0,P.jsxs)(N,{ref:r,children:[(0,P.jsx)(D,{isRTL:i}),(0,P.jsx)(C,{count:o}),(0,P.jsxs)(U,{isRTL:i,initial:{opacity:0},animate:{opacity:1},transition:{duration:h?.5:.8},children:[(0,P.jsxs)(de,{ref:d,isRTL:i,variants:x,initial:"hidden",animate:l?"visible":"hidden",children:[(0,P.jsx)(Q,{isRTL:i,variants:{hidden:{opacity:0,x:i?15:-15},visible:{opacity:1,x:0,transition:{duration:h?.3:.6,ease:"easeOut"}}},children:t("hero.greeting")}),(0,P.jsx)(J,{variants:{hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:h?.4:.7,delay:h?.1:.15,ease:[.25,.1,.25,1],type:"spring",stiffness:100,damping:20}}},children:t("hero.title")}),(0,P.jsx)(K,{children:(0,P.jsx)(S,{text:g,delay:h?.2:.4,isColor:!0})}),(0,P.jsx)(ee,{isRTL:i,variants:{hidden:{opacity:0,x:i?15:-15},visible:{opacity:1,x:0,transition:{duration:h?.4:.7,delay:h?.3:.6,ease:[.25,.1,.25,1]}}},children:t("hero.description")}),(0,P.jsxs)(te,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:h?.4:.7,delay:h?.4:.8,ease:[.25,.1,.25,1]}}},children:[(0,P.jsx)(ie,{whileHover:h?{}:{scale:1.05},whileTap:h?{}:{scale:.95},transition:{type:"spring",stiffness:400,damping:17},children:(0,P.jsx)(oe,{to:"/projects",children:i?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v.QVr,{}),(0,P.jsx)("span",{children:t("hero.cta")})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("span",{children:t("hero.cta")}),(0,P.jsx)(v.Z0P,{})]})})}),(0,P.jsx)(ae,{to:"/about",children:t("hero.learnMore")||"Learn more about us"})]})]}),(0,P.jsx)(W,{ref:p,variants:u,initial:"hidden",animate:m?"visible":"hidden",children:(0,P.jsx)(V,{src:M,alt:"Enova Studio Logo",width:"400",height:"400"})})]}),(0,P.jsxs)(se,{initial:{opacity:0},animate:{opacity:1},transition:{delay:h?.5:1.2,duration:h?.4:.8},children:[(0,P.jsx)("p",{children:t("hero.scroll")||"Scroll down"}),(0,P.jsx)("div",{className:"mouse"})]})]})},pe=n.memo(le);var me=i(2772);const he=(0,n.lazy)((()=>Promise.all([i.e(993),i.e(608),i.e(173)]).then(i.bind(i,5173)))),ce=(0,n.lazy)((()=>i.e(899).then(i.bind(i,3899)))),xe=(0,n.lazy)((()=>i.e(504).then(i.bind(i,3504)))),ue=g.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,ge=g.i7`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.03); }
  100% { opacity: 0.6; transform: scale(1); }
`,fe=g.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,ye=(0,g.Ay)(r.P.div)`
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
  animation: ${ue} 3s ease infinite;
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
`,we=(0,g.Ay)(r.P.div)`
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
`,ve=g.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`,be=(0,g.Ay)(r.P.div)`
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
`,je=g.Ay.p`
  font-size: clamp(15px, 3vw, 18px);
  color: ${e=>{let{theme:t}=e;return t.text}};
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
`,ke=g.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.textAlt}};
  margin: 0;
  text-align: center;
  animation: ${ge} 2.5s infinite ease-in-out;
`,$e=(0,g.Ay)(r.P.div)`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
`,Le=g.Ay.div`
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
`,Ae=g.Ay.div`
  font-size: 26px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  margin-top: 15px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 2px 10px ${e=>{let{theme:t}=e;return t.primary}}40;
`,ze=(0,g.Ay)(r.P.button)`
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
`,Ee=(0,g.Ay)(r.P.div)`
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
  animation: ${fe} ${e=>e.duration||10}s infinite ease-in-out;
  animation-delay: ${e=>e.delay||0}s;
  
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Re=(0,g.Ay)(r.P.div)`
  display: contents;
`,Te=()=>{const{scrollYProgress:e}=(0,a.L)(),t=(0,n.useRef)(null),[i,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0),[l,p]=(0,n.useState)(0),[m,h]=(0,n.useState)(""),{t:g}=(0,n.useContext)(b.s),[f,y]=(0,n.useState)([]),[w,v]=(0,n.useState)(!1),j=c(0,{damping:25,stiffness:350,restDelta:5e-4});(0,x.L)(e,"change",(e=>{j.set(e)})),(0,n.useEffect)((()=>{h(g("home.loading.preparing"));const e=window.matchMedia("(prefers-reduced-motion: reduce)");v(e.matches);const t=e=>v(e.matches);if(e.addEventListener("change",t),!e.matches){const e=Array.from({length:6},((e,t)=>({id:t,width:150*Math.random()+100,height:150*Math.random()+100,top:100*Math.random()+"%",left:100*Math.random()+"%",duration:6*Math.random()+6,delay:3*Math.random()})));y(e)}return()=>{e.removeEventListener("change",t)}}),[g]),(0,n.useEffect)((()=>{if(!s)return;let e,t=0;const i=[{threshold:20,message:"home.loading.preparing"},{threshold:40,message:"home.loading.loadingElements"},{threshold:60,message:"home.loading.settingAnimations"},{threshold:80,message:"home.loading.finalTouches"},{threshold:100,message:"home.loading.readyToLaunch"}],n=()=>{if(t<100){const r=t<70?6+4*Math.random():3+2*Math.random();t+=r;for(const e of i)if(t<e.threshold){h(g(e.message));break}if(t>100&&(t=100),p(t),t<100){const t=50+50*Math.random();e=setTimeout(n,t)}else setTimeout((()=>d(!1)),300)}};return e=setTimeout(n,200),()=>{clearTimeout(e)}}),[g,s]),(0,n.useEffect)((()=>{let e=!1,t=0;const i=.3*window.innerHeight,n=()=>{t=window.scrollY,e||(requestAnimationFrame((()=>{o(t>i),e=!1})),e=!0)};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}}),[]);const k={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.16,1,.3,1]}}},$=()=>(0,P.jsx)($e,{animate:{rotateY:[0,360]},transition:{duration:2.5,ease:"easeInOut",repeat:1/0,repeatType:"loop"},children:(0,P.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,P.jsx)(r.P.path,{d:"M30 5L37.7128 21.9463L55.9808 25.3688L42.9904 38.0537L46.7256 55.6312L30 47.5L13.2744 55.6312L17.0096 38.0537L4.01924 25.3688L22.2872 21.9463L30 5Z",stroke:"url(#gradient)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",initial:{pathLength:0,opacity:.2},animate:{pathLength:[0,1,0],opacity:[.2,1,.2]},transition:{duration:2.5,ease:"easeInOut",repeat:1/0,repeatType:"loop"}}),(0,P.jsx)("defs",{children:(0,P.jsxs)("linearGradient",{id:"gradient",x1:"4",y1:"5",x2:"56",y2:"55",gradientUnits:"userSpaceOnUse",children:[(0,P.jsx)("stop",{stopColor:"#4a25aa"}),(0,P.jsx)("stop",{offset:"1",stopColor:"#5e4adb"})]})})]})});return s?(0,P.jsxs)(r.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--background)",flexDirection:"column",padding:"20px",position:"relative",overflow:"hidden"},children:[!w&&f.map((e=>(0,P.jsx)(Ee,{style:{width:e.width+"px",height:e.height+"px",top:e.top,left:e.left},duration:e.duration,delay:e.delay},e.id))),(0,P.jsxs)(be,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,ease:[.16,1,.3,1]},style:{transformStyle:"preserve-3d",transform:w?"none":"rotateX(10deg)"},children:[(0,P.jsx)($,{}),(0,P.jsx)(je,{children:m}),(0,P.jsx)(Le,{progress:l}),(0,P.jsx)(Ae,{children:(0,P.jsxs)(r.P.span,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2},children:[Math.round(l),"%"]},Math.round(l))}),(0,P.jsx)(ke,{children:g(l<100?"home.loading.pleaseWait":"home.loading.readyToLaunch")})]})]}):(0,P.jsxs)(Re,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[(0,P.jsxs)(me.m,{children:[(0,P.jsx)("title",{children:g("home.meta.title")}),(0,P.jsx)("meta",{name:"description",content:g("home.meta.description")}),(0,P.jsx)("meta",{name:"keywords",content:g("home.meta.keywords")}),(0,P.jsx)("meta",{property:"og:title",content:g("home.meta.ogTitle")}),(0,P.jsx)("meta",{property:"og:description",content:g("home.meta.ogDescription")}),(0,P.jsx)("meta",{property:"og:type",content:"website"}),(0,P.jsx)("meta",{property:"og:url",content:"https://enovastudio.com"}),(0,P.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,P.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0"}),(0,P.jsx)("meta",{name:"theme-color",content:"#4a25aa"}),(0,P.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,P.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,P.jsx)("link",{rel:"preload",as:"image",href:"/logo.svg"})]}),(0,P.jsx)(ye,{style:{scaleX:j}}),!w&&f.map((e=>(0,P.jsx)(Ee,{style:{width:e.width+"px",height:e.height+"px",top:e.top,left:e.left,position:"fixed"},duration:e.duration,delay:e.delay},e.id))),(0,P.jsxs)(r.P.div,{ref:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6},children:[(0,P.jsx)(pe,{}),(0,P.jsx)(n.Suspense,{fallback:(0,P.jsx)(ve,{children:(0,P.jsxs)(be,{initial:{y:20,opacity:0,scale:.95},animate:{y:0,opacity:1,scale:1},transition:{duration:.5,ease:"easeOut"},children:[(0,P.jsx)($,{}),(0,P.jsx)(je,{children:g("home.loading.loadingContent")}),(0,P.jsx)(Le,{progress:70}),(0,P.jsx)(Ae,{children:"70%"}),(0,P.jsx)(ke,{children:g("home.loading.almostThere")})]})}),children:(0,P.jsxs)(r.P.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.3,ease:"easeOut"}}},initial:"hidden",animate:"visible",children:[(0,P.jsx)(we,{variants:k,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1,margin:"-100px 0px"},children:(0,P.jsx)(he,{})}),(0,P.jsx)(we,{variants:k,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1,margin:"-100px 0px"},children:(0,P.jsx)(ce,{})}),(0,P.jsx)(we,{variants:k,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1,margin:"-100px 0px"},children:(0,P.jsx)(xe,{})})]})})]}),(0,P.jsx)(u.N,{children:i&&(0,P.jsx)(ze,{initial:{opacity:0,scale:.5,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.5,y:20},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{window.scrollTo({top:0,behavior:w?"auto":"smooth"})},"aria-label":g("home.scrollToTop"),children:(0,P.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,P.jsx)("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),(0,P.jsx)("polyline",{points:"5 12 12 5 19 12"})]})})})]})}}}]);