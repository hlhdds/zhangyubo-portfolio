/* ============================================================
   ui.js —— 滑入菜单交互 (规格 §12)
   单一 setMenu(open): 切换 .is-open、同步 aria-expanded、移动焦点
   ============================================================ */

const menu       = document.getElementById('menu');
const openBtn    = document.getElementById('menu-open');
const closeBtn   = document.getElementById('menu-close');
const backdrop   = document.getElementById('menu-backdrop');
const exploreBtn = document.getElementById('explore-open');

function setMenu(open) {
    menu.classList.toggle('is-open', open);
    openBtn.setAttribute('aria-expanded', String(open));
    if (open) {
        closeBtn.focus({ preventScroll: true });
    } else {
        openBtn.focus({ preventScroll: true });
    }
}

openBtn.addEventListener('click', () => setMenu(true));
closeBtn.addEventListener('click', () => setMenu(false));
backdrop.addEventListener('click', () => setMenu(false));

/* 切角按钮「探索作品」同样唤出菜单 */
exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setMenu(true);
});

/* 每个菜单链接点击后关闭 */
menu.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

/* Escape 仅在打开时生效 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        setMenu(false);
    }
});
