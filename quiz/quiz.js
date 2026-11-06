/* 足球球星猜谜 —— 交互逻辑 */
(function () {
    'use strict';

    const TOTAL = PLAYERS.length;

    const els = {
        photo: document.getElementById('photo'),
        form: document.getElementById('form'),
        nameInput: document.getElementById('nameInput'),
        clubInput: document.getElementById('clubInput'),
        feedback: document.getElementById('feedback'),
        progress: document.getElementById('progress'),
        score: document.getElementById('score'),
        card: document.getElementById('card'),
        done: document.getElementById('done'),
        doneText: document.getElementById('doneText'),
        skip: document.getElementById('skipBtn'),
        restart: document.getElementById('restart')
    };

    let queue = [];
    let current = null;
    let correctCount = 0;
    let wrongCount = 0;
    let locked = false;
    let timer = null;

    /* 统一比较格式：忽略大小写、空格、标点、声调符号 */
    function normalize(text) {
        return String(text || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[\s\u3000·\-–—.,'"’‘“”()（）\/]/g, '');
    }

    function matches(input, aliases) {
        const value = normalize(input);
        if (!value) return false;
        return aliases.some(function (alias) {
            return normalize(alias) === value;
        });
    }

    function shuffle(list) {
        const copy = list.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function preload(list) {
        list.forEach(function (p) {
            const img = new Image();
            img.src = p.img;
        });
    }

    function setFeedback(type, html) {
        els.feedback.className = 'feedback' + (type ? ' feedback--' + type : '');
        els.feedback.innerHTML = html || '';
    }

    function clearFieldError() {
        els.nameInput.classList.remove('is-error');
        els.clubInput.classList.remove('is-error');
    }

    function updateStats() {
        const asked = TOTAL - queue.length + 1;
        els.progress.textContent = '第 ' + Math.min(asked, TOTAL) + ' / ' + TOTAL + ' 题';
        els.score.textContent = '答对 ' + correctCount;
    }

    function showQuestion() {
        if (!queue.length) {
            finish();
            return;
        }

        current = queue.shift();
        locked = false;
        clearTimeout(timer);

        clearFieldError();
        setFeedback('', '');
        els.form.reset();
        els.nameInput.disabled = false;
        els.clubInput.disabled = false;
        els.skip.disabled = false;

        els.photo.classList.remove('is-visible');
        const loader = new Image();
        loader.onload = function () {
            els.photo.src = loader.src;
            requestAnimationFrame(function () {
                els.photo.classList.add('is-visible');
            });
        };
        loader.onerror = function () {
            els.photo.src = current.img;
            els.photo.classList.add('is-visible');
        };
        loader.src = current.img;

        els.photo.alt = '待猜球员照片';
        updateStats();

        if (window.matchMedia('(min-width: 720px)').matches) {
            els.nameInput.focus();
        }
    }

    function lockInputs() {
        locked = true;
        els.nameInput.disabled = true;
        els.clubInput.disabled = true;
        els.skip.disabled = true;
    }

    function submitAnswer() {
        if (locked || !current) return;

        const nameOk = matches(els.nameInput.value, current.nameAliases);
        const clubOk = matches(els.clubInput.value, current.clubAliases);

        if (nameOk && clubOk) {
            correctCount++;
            els.score.textContent = '答对 ' + correctCount;
            lockInputs();
            setFeedback('ok', '正确！<span class="feedback__sub">' + current.name + ' · ' + current.club + '</span>');
            timer = setTimeout(showQuestion, 1100);
            return;
        }

        wrongCount++;

        if (!nameOk && !clubOk) {
            setFeedback('error', '姓名和俱乐部都不对，再试一次。');
            els.nameInput.classList.add('is-error');
            els.clubInput.classList.add('is-error');
            els.nameInput.select();
        } else if (!nameOk) {
            setFeedback('error', '俱乐部对了，球员姓名不对。');
            els.nameInput.classList.add('is-error');
            els.nameInput.select();
        } else {
            setFeedback('error', '姓名对了，所属俱乐部不对。');
            els.clubInput.classList.add('is-error');
            els.clubInput.select();
        }

        els.card.classList.remove('is-shaking');
        void els.card.offsetWidth;
        els.card.classList.add('is-shaking');
    }

    function skipQuestion() {
        if (locked || !current) return;
        wrongCount++;
        lockInputs();
        setFeedback('skip', '已跳过 —— 答案是 ' + current.name + ' · ' + current.club);
        timer = setTimeout(showQuestion, 1600);
    }

    function finish() {
        clearTimeout(timer);
        els.card.hidden = true;
        els.done.hidden = false;
        els.doneText.textContent = '共 ' + TOTAL + ' 题，答对 ' + correctCount + ' 题，答错 ' + wrongCount + ' 次。';
        els.restart.focus();
    }

    function start() {
        queue = shuffle(PLAYERS);
        current = null;
        correctCount = 0;
        wrongCount = 0;
        locked = false;

        els.card.hidden = false;
        els.done.hidden = true;

        preload(PLAYERS);
        showQuestion();
    }

    els.form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitAnswer();
    });

    els.skip.addEventListener('click', skipQuestion);
    els.restart.addEventListener('click', start);

    /* 重新输入时去掉错误态 */
    [els.nameInput, els.clubInput].forEach(function (input) {
        input.addEventListener('input', function () {
            input.classList.remove('is-error');
        });
    });

    start();
})();
