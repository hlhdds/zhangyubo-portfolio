/* ============================================================
   ui.js —— 首页交互
   「探索作品」:滚动到作品玻璃卡,并做一次高亮脉冲
   ============================================================ */

const worksCard  = document.getElementById('works');
const exploreBtn = document.getElementById('explore-open');

let highlightTimer = 0;

exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    worksCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    /* 先移再加速一次强制重排,保证连续点击时动画能重新播放 */
    worksCard.classList.remove('is-highlighted');
    void worksCard.offsetWidth;
    worksCard.classList.add('is-highlighted');

    clearTimeout(highlightTimer);
    highlightTimer = setTimeout(() => {
        worksCard.classList.remove('is-highlighted');
    }, 1500);
});
