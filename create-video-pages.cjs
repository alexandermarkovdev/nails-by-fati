// Builds four layout options for a vertical-video page (/video-1/ … /video-4/) plus /video-options/ to compare them.
// To add a reel: drop <id>.mp4 + <id>.jpg into dist/videos/ and add it to `clips`.
const fs=require('node:fs');
const clips=[
  {id:'studio-airbrush-tip',title:'Аерограф отблизо',text:'Първите щрихи на флорален дизайн — листа, сенки и нежно преливане.'},
  {id:'studio-stiletto-fades',title:'Преливания',text:'Лилаво, синьо и меки сърца върху стилето форма.'},
  {id:'studio-at-work',title:'В салона',text:'Фати на работа и сезонни идеи с аерограф.'}
];
const photos=['airbrush-course/student-results-01.png','airbrush-course/student-results-02.png','studio24/studio-03.jpg','airbrush-course/student-results-03.png','airbrush-course/student-results-04.png','airbrush-course/airbrush-08.jpg','airbrush-course/student-results-05.png','airbrush-course/student-results-06.png','studio24/studio-02.jpg','airbrush-course/student-results-07.png'];
const booking='https://studio24.bg/m/nails-by-fati-balakchi-s7379';
const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-5-5 5 5-5 5"/></svg>';
const soundIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4H4zM15.5 9.3a3.8 3.8 0 0 1 0 5.4M18 6.8a7.3 7.3 0 0 1 0 10.4"/></svg>';
const mutedIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4H4zM16 9.5l5 5m0-5-5 5"/></svg>';
const reelIcon='<svg class="vp-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z"/></svg>';
const src=id=>`/videos/${id}.mp4`,poster=id=>`/videos/${id}.jpg`;
const loop=(c,cls='')=>`<video class="${cls}" data-loop muted loop playsinline preload="none" poster="${poster(c.id)}" src="${src(c.id)}" aria-label="${c.title}"></video>`;

const salon=fs.readFileSync('dist/salon/index.html','utf8');
const chrome=salon.slice(salon.indexOf('<a class="skip-link"'),salon.indexOf('<main')).replaceAll(' aria-current="page"','');
const footer=salon.slice(salon.indexOf('</main>')+7,salon.indexOf('</body>'));
const intro=`<section class="vp-intro"><h1>Студиото<br><em>в движение.</em></h1><p class="lead">Кратки видеа от салона и обученията — аерограф, преливания и детайли отблизо.</p></section>`;
const closing=`<section class="closing"><div><h2>Харесва ли ви това, което виждате?</h2><p>Изберете услуга и удобен час в официалния профил на салона.</p></div><a class="button" href="${booking}" target="_blank" rel="noopener noreferrer">Запази час${arrow}</a></section>`;
const dialog=`<dialog class="lightbox vp-dialog" id="vp-dialog" data-playlist="${clips.map(c=>c.id).join(',')}" aria-label="Видео"><button class="lightbox-close" type="button" aria-label="Затвори">×</button><video controls playsinline preload="none"></video><img alt="" hidden><p></p></dialog>`;
const page=(n,name,body)=>`<!doctype html><html lang="bg"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#fffaf8"><meta name="robots" content="noindex"><title>Видео ${n}: ${name} — Nails by Fati Balakchi</title><link rel="stylesheet" href="/fonts/fonts.css"><link rel="stylesheet" href="/site.css"><link rel="stylesheet" href="/video-pages.css"><script src="/site.js" defer></script><script src="/video-pages.js" defer></script></head><body class="inside vp-page">${chrome}<main id="content" class="content">${intro}${body}${closing}</main>${footer}${dialog}</body></html>`;

// 1. Reel row: every clip plays at once, side by side, like a fanned set of phone screens.
const v1=`<section class="reel-row" aria-label="Видеа">${clips.map(c=>`<figure class="reel-card"><div class="reel-frame">${loop(c)}<button class="vp-sound" type="button" data-sound="${c.id}">${soundIcon}<span>Със звук</span></button></div><figcaption><strong>${c.title}</strong>${c.text}</figcaption></figure>`).join('')}</section>`;

// 2. Stories: one phone-sized player that auto-advances, with highlight circles to jump between clips.
const v2=`<section class="stories" data-stories><div class="story-highlights" role="list">${clips.map((c,i)=>`<button class="story-highlight" type="button" role="listitem" data-story-jump="${i}"><span><img src="${poster(c.id)}" alt=""></span>${c.title}</button>`).join('')}</div><div class="story-player"><div class="story-bars" aria-hidden="true">${clips.map(()=>'<span><i></i></span>').join('')}</div><div class="story-head"><span class="story-avatar"><img src="/photos/studio24/studio-05.jpg" alt=""></span><span><strong>Nails by Fati</strong><small class="story-title">${clips[0].title}</small></span><button class="story-mute" type="button" aria-pressed="false" aria-label="Включи звука">${mutedIcon}${soundIcon}</button></div><video class="story-video" muted playsinline preload="metadata" poster="${poster(clips[0].id)}" aria-label="${clips[0].title}"></video><button class="story-zone prev" type="button" aria-label="Предишно видео"></button><button class="story-zone next" type="button" aria-label="Следващо видео"></button></div><div class="story-copy"><h2>Акценти<br><em>от студиото.</em></h2><p>Видеата вървят едно след друго. Докоснете вдясно за следващото, вляво — за предишното, или изберете кръгче.</p><ol class="story-list">${clips.map((c,i)=>`<li><button type="button" data-story-jump="${i}"><b>${String(i+1).padStart(2,'0')}</b>${c.title}</button></li>`).join('')}</ol></div></section>`;

// 3. Scroll story: the video stays pinned in an arch and changes as each chapter scrolls past.
const v3=`<section class="scrolly" data-scrolly><div class="scrolly-media-wrap"><div class="scrolly-media">${clips.map((c,i)=>loop(c,i?'':'is-active').replace('<video ',`<video data-chapter-video="${i}" `)).join('')}<span class="scrolly-count"><b>01</b> / ${String(clips.length).padStart(2,'0')}</span></div></div><div class="scrolly-chapters">${clips.map((c,i)=>`<article class="scrolly-chapter" data-chapter="${i}"><span class="scrolly-num">${String(i+1).padStart(2,'0')}</span><h2>${c.title}</h2><p>${c.text}</p><button class="text-link vp-text-sound" type="button" data-sound="${c.id}">Гледайте със звук ${arrow}</button></article>`).join('')}</div></section>`;

// 4. Mosaic wall: an Instagram-style grid, reels span two rows between square photos.
const wallItems=[];let p=0;
clips.forEach((c,i)=>{wallItems.push(`<button class="wall-tile wall-video" type="button" data-sound="${c.id}" aria-label="${c.title} — гледайте със звук">${loop(c)}<span class="wall-badge">${reelIcon}</span><span class="wall-label">${c.title}</span></button>`);for(let k=0;k<3&&p<photos.length;k++,p++)wallItems.push(`<button class="wall-tile" type="button" data-photo="/photos/${photos[p]}" aria-label="Отвори снимката"><img src="/photos/${photos[p]}" alt="" loading="lazy"></button>`);});
while(p<photos.length)wallItems.push(`<button class="wall-tile" type="button" data-photo="/photos/${photos[p]}" aria-label="Отвори снимката"><img src="/photos/${photos[p++]}" alt="" loading="lazy"></button>`);
const v4=`<section class="wall" aria-label="Видеа и снимки">${wallItems.join('')}</section>`;

const options=[
  ['Reel Row','Лента',v1,'All the reels play at once, side by side, slightly fanned like phones on a table. Tap one to watch it with sound.','4–5 fit in a row on desktop; with more, the row scrolls sideways (it already does on phones).'],
  ['Stories','Истории',v2,'One phone-sized player that runs through the reels like Instagram Stories, with progress bars, tap left/right, a sound button and highlight circles.','Each new video adds a bar and a highlight circle. Works with any number.'],
  ['Scroll Story','Разказ',v3,'The video stays pinned inside an arch while short chapters scroll past. Each chapter switches to its own clip.','Each new video becomes another chapter with its own text.'],
  ['Mosaic Wall','Стена',v4,'An Instagram-profile-style grid: reels as tall tiles between square photos of her work. Everything opens in a popup.','The wall just gets longer; mixing in photos means it never looks empty.']
];
options.forEach(([en,bg,body],i)=>{fs.mkdirSync(`dist/video-${i+1}`,{recursive:true});fs.writeFileSync(`dist/video-${i+1}/index.html`,page(i+1,bg,body));});

// The chosen layout (3. Scroll Story) is the live page at /video/.
fs.mkdirSync('dist/video',{recursive:true});
fs.writeFileSync('dist/video/index.html',page(3,'Разказ',v3).replace('<meta name="robots" content="noindex">','<meta name="description" content="Кратки видеа от салона и обученията на Nails by Fati Balakchi — аерограф, преливания и детайли отблизо.">').replace(/<title>[^<]*<\/title>/,'<title>Видео — Nails by Fati Balakchi</title>'));

const cards=options.map(([en,bg,,desc,scale],i)=>`<article><a class="image" href="/video-${i+1}/"><img src="previews/video-${i+1}.png" alt="${en} preview"><img class="phone" src="previews/video-${i+1}-mobile.png" alt="${en} on a phone"></a><div class="caption"><h2>${i+1}. ${en} <span>${bg}</span></h2><a href="/video-${i+1}/">Open full page ↗</a></div><p>${desc}</p><p><strong>More videos:</strong> ${scale}</p></article>`).join('');
fs.mkdirSync('dist/video-options/previews',{recursive:true});
fs.writeFileSync('dist/video-options/index.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Choose a video page — Nails by Fati</title><style>*{box-sizing:border-box}body{margin:0;background:#f8f3f0;color:#492833;font-family:Arial,sans-serif;padding:38px max(16px,4vw)}header,main{max-width:1440px;margin:auto}header{margin-bottom:28px}h1{font:400 38px Georgia,serif;letter-spacing:-.7px;margin:0 0 12px}p{font-size:14px;line-height:1.7;color:#75515e;margin:0 0 8px}main{display:grid;grid-template-columns:1fr 1fr;gap:40px 28px}article{min-width:0}.image{display:block;position:relative;border:1px solid #e0c9d2;background:#fff}.image img{width:100%;display:block;aspect-ratio:16/10;object-fit:cover;object-position:top}.image .phone{position:absolute;right:14px;bottom:-18px;width:22%;aspect-ratio:9/19.5;border:5px solid #492833;border-radius:16px;box-shadow:0 10px 25px #49283340}.caption{display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin:30px 0 8px}.caption h2{font:400 25px Georgia,serif;margin:0}.caption h2 span{font-size:16px;color:#8a4058;font-style:italic}.caption a{color:#8a4058;font-size:14px;white-space:nowrap}@media(max-width:800px){main{grid-template-columns:1fr}h1{font-size:30px}}</style></head><body><header><h1>Video page — 4 options</h1><p>Each layout is built around tall phone videos instead of squeezing them into a wide frame. Open each one, scroll through it, and try it on your phone too. All four use the same 3 reels for now.</p></header><main>${cards}</main></body></html>`);
console.log('built',options.length,'video pages');
