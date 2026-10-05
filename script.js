(() => {
'use strict';
const cards=document.querySelectorAll('.floating-card,.center-panel');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
cards.forEach((card,index)=>{
 const base=index===0?'rotate(-10deg)':index===1?'rotate(9deg)':'translate(-50%,-50%)';
 card.style.transform=base;
 card.addEventListener('pointermove',event=>{
  const rect=card.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width,y=(event.clientY-rect.top)/rect.height;
  const ry=(x-.5)*10,rx=(.5-y)*10,offset=index===2?'translate(-50%,-50%) ':'';
  card.style.transform=offset+'perspective(1000px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
 },{passive:true});
 card.addEventListener('pointerleave',()=>{card.style.transform=base});
});
})();