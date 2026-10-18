// Homepage teaser: muted reels play one after another while the arch is on screen.
(()=>{
const video=document.querySelector('[data-studio-teaser]');
if(!video)return;
const clips=video.dataset.clips.split(',');
const still=matchMedia('(prefers-reduced-motion: reduce)');
let index=0,visible=false;
video.muted=true;
const play=()=>{if(visible&&!still.matches)video.play().catch(()=>{});};
video.addEventListener('ended',()=>{
  video.classList.add('changing');
  setTimeout(()=>{
    index=(index+1)%clips.length;
    video.poster='/videos/'+clips[index]+'.jpg';video.src='/videos/'+clips[index]+'.mp4';
    play();video.classList.remove('changing');
  },350);
});
new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;visible?play():video.pause();},{threshold:.35}).observe(video);
still.addEventListener('change',()=>still.matches?video.pause():play());
})();
