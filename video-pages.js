// Shared behaviour for the video page options: muted loops that play only on screen,
// a popup that plays reels with sound, plus the Stories player and the Scroll Story switcher.
(()=>{
const still=matchMedia('(prefers-reduced-motion: reduce)');
const src=id=>'/nails-by-fati/videos/'+id+'.mp4',poster=id=>'/nails-by-fati/videos/'+id+'.jpg';
const play=video=>{if(!still.matches)video.play().catch(()=>{});};
const onScreen=new Map();
const watcher=new IntersectionObserver(entries=>entries.forEach(entry=>{
  onScreen.set(entry.target,entry.isIntersecting);
  const video=entry.target;
  if(entry.isIntersecting&&!video.closest('.scrolly-media')||entry.isIntersecting&&video.classList.contains('is-active'))play(video);else video.pause();
}),{threshold:.35});
document.querySelectorAll('video[data-loop]').forEach(video=>{video.muted=true;watcher.observe(video);});

// Popup with sound; after a reel ends it continues through the playlist.
const dialog=document.getElementById('vp-dialog');
const full=dialog.querySelector('video'),image=dialog.querySelector('img');
const playlist=dialog.dataset.playlist.split(',');
let current=0;
const pauseLoops=()=>document.querySelectorAll('main video').forEach(video=>video.pause());
const resumeLoops=()=>document.querySelectorAll('video[data-loop]').forEach(video=>{if(onScreen.get(video)&&(!video.closest('.scrolly-media')||video.classList.contains('is-active')))play(video);});
function playFull(i){current=(i+playlist.length)%playlist.length;full.poster=poster(playlist[current]);full.src=src(playlist[current]);full.play().catch(()=>{});}
document.querySelectorAll('[data-sound]').forEach(button=>button.addEventListener('click',()=>{
  pauseLoops();image.hidden=true;full.hidden=false;dialog.showModal();playFull(playlist.indexOf(button.dataset.sound));
}));
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{
  pauseLoops();full.hidden=true;image.hidden=false;image.src=button.dataset.photo;dialog.showModal();
}));
full.addEventListener('ended',()=>playFull(current+1));
dialog.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog.addEventListener('close',()=>{full.pause();full.removeAttribute('src');full.load();resumeLoops();});

// Stories: one player, progress bars, tap zones, highlight circles.
const stories=document.querySelector('[data-stories]');
if(stories){
  const video=stories.querySelector('.story-video'),bars=[...stories.querySelectorAll('.story-bars i')];
  const title=stories.querySelector('.story-title'),mute=stories.querySelector('.story-mute');
  let index=0,visible=false;
  video.muted=true;
  function show(i,autoplay=true){
    index=(i+playlist.length)%playlist.length;
    video.poster=poster(playlist[index]);video.src=src(playlist[index]);
    const label=stories.querySelector(`.story-highlight[data-story-jump="${index}"]`).textContent;
    title.textContent=label;video.setAttribute('aria-label',label);
    bars.forEach((bar,k)=>bar.style.width=k<index?'100%':'0');
    stories.querySelectorAll('[data-story-jump]').forEach(b=>b.classList.toggle('active',+b.dataset.storyJump===index));
    if(autoplay&&visible)play(video);
  }
  video.addEventListener('timeupdate',()=>{if(video.duration)bars[index].style.width=(video.currentTime/video.duration*100)+'%';});
  video.addEventListener('ended',()=>show(index+1));
  stories.querySelector('.story-zone.prev').addEventListener('click',()=>show(index-1));
  stories.querySelector('.story-zone.next').addEventListener('click',()=>show(index+1));
  stories.querySelectorAll('[data-story-jump]').forEach(b=>b.addEventListener('click',()=>{show(+b.dataset.storyJump);play(video);}));
  mute.addEventListener('click',()=>{
    video.muted=!video.muted;mute.setAttribute('aria-pressed',String(!video.muted));
    mute.setAttribute('aria-label',video.muted?'Включи звука':'Изключи звука');
    if(video.paused)video.play().catch(()=>{});
  });
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;visible?play(video):video.pause();},{threshold:.35}).observe(video);
  show(0,false);
}

// Scroll story: whichever chapter crosses the middle of the screen picks the pinned clip.
const scrolly=document.querySelector('[data-scrolly]');
if(scrolly){
  const videos=[...scrolly.querySelectorAll('[data-chapter-video]')],chapters=[...scrolly.querySelectorAll('[data-chapter]')];
  const count=scrolly.querySelector('.scrolly-count b');
  function activate(i){
    chapters.forEach((c,k)=>c.classList.toggle('is-active',k===i));
    videos.forEach((v,k)=>{const on=k===i;v.classList.toggle('is-active',on);if(on){if(onScreen.get(v))play(v);}else v.pause();});
    count.textContent=String(i+1).padStart(2,'0');
  }
  // On phones the pinned video covers the top of the screen, so the trigger line sits below it.
  const band=matchMedia('(max-width:700px)').matches?'-68% 0px -22% 0px':'-45% 0px -45% 0px';
  const chapterWatcher=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)activate(+entry.target.dataset.chapter);}),{rootMargin:band});
  chapters.forEach(chapter=>chapterWatcher.observe(chapter));
  activate(0);
}
})();
