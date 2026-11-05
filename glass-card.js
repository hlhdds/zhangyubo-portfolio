/* ============================================================
   glass-card.js —— 液体玻璃实时折射
   每帧把背景视频画到 canvas,叠加 SVG 折射滤镜
   规格来源: Terranova landing page 规格文档 §11
   ============================================================ */
const DUP_PIXEL_RATIO = 1;    // 按规格保持 1×,SVG 滤镜在 retina 下成本太高
const VIDEO_URL = 'https://motionsites.org/assets/prompt-media/a47102c095df0c25357f.mp4';

const video = document.createElement('video');
video.id = 'bg-video';
video.className = 'bg-video';
video.setAttribute('aria-hidden', 'true');
video.autoplay = true;
video.muted = true;
video.loop = true;
video.playsInline = true;
video.preload = 'auto';
video.src = VIDEO_URL;
/* 注意: 不能加 crossorigin —— 该站点没发 CORS,加了视频直接加载失败 */

// 塞到 body 最前面
const firstChild = document.body.firstChild;
if (firstChild) document.body.insertBefore(video, firstChild);
else document.body.appendChild(video);

const container = document.getElementById('dup-video-container');
const canvas    = document.getElementById('dup-image');
if (!container || !canvas) { console.warn('[glass-card] 没找到 #dup-video-container/#dup-image'); }

const ctx = canvas?.getContext('2d');

let lastW = -1, lastH = -1;

function frame() {
    if (!container || !canvas || !ctx || video.videoWidth === 0 || video.videoHeight === 0) {
        requestAnimationFrame(frame);
        return;
    }

    const rect  = container.parentElement.getBoundingClientRect();
    const vw    = document.documentElement.clientWidth;
    const vh    = document.documentElement.clientHeight;

    // 负偏移把 container 顶到视口原点,让 canvas 与背景视频像素 1:1 对齐
    container.style.left = (-rect.left) + 'px';
    container.style.top  = (-rect.top)  + 'px';
    container.style.width  = vw + 'px';
    container.style.height = vh + 'px';

    // canvas 尺寸仅在视口变化时重设(SVG 滤镜成本高,别每帧改)
    const w = Math.round(vw * DUP_PIXEL_RATIO);
    const h = Math.round(vh * DUP_PIXEL_RATIO);
    if (w !== lastW || h !== lastH) {
        canvas.width  = w;
        canvas.height = h;
        lastW = w; lastH = h;
    }

    // object-fit: cover 几何
    try {
        const cover = Math.max(vw / video.videoWidth, vh / video.videoHeight);
        const sw = vw / cover, sh = vh / cover;
        const sx = (video.videoWidth  - sw) / 2;
        const sy = (video.videoHeight - sh) / 2;
        ctx.drawImage(video, sx, sy, sw, sh, 0, 0, w, h);
    } catch (_) {
        /* 某帧解不出来就跳过,canvas taint 也没关系 */
    }

    requestAnimationFrame(frame);
}

video.addEventListener('loadedmetadata', () => {
    requestAnimationFrame(frame);
}, { once: true });

// 兜底:哪怕 loadedmetadata 没触发(极少见)也启动
setTimeout(() => requestAnimationFrame(frame), 800);
