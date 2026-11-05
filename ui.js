/* ============================================================
   ui.js —— 首页交互
   「探索作品」唤出作品面板;支持遮罩/关闭按钮/ESC 关闭
   ============================================================ */

const panel    = document.getElementById('works-panel');
const openBtn  = document.getElementById('explore-open');
const closeBtn = document.getElementById('works-close');
const backdrop = document.getElementById('works-backdrop');

function setPanel(open) {
    panel.classList.toggle('is-open', open);
    openBtn.setAttribute('aria-expanded', String(open));
    (open ? closeBtn : openBtn).focus({ preventScroll: true });
}

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setPanel(true);
});

closeBtn.addEventListener('click', () => setPanel(false));
backdrop.addEventListener('click', () => setPanel(false));

panel.querySelectorAll('.works-panel__item').forEach((link) => {
    link.addEventListener('click', () => setPanel(false));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) {
        setPanel(false);
    }
});
