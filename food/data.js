/* ============================================================
 * 点餐应用 —— 纯静态数据层
 * 用于 GitHub Pages 等静态托管环境：菜品内置、订单存 localStorage
 * 对外暴露的 API 与 Flask 后端接口结构保持一致
 * ============================================================ */
const DISHES = [
    { id: 1, name: '宫保鸡丁', price: 2800, category: '热菜', desc: '鸡腿肉配花生米,糊辣荔枝口,经典川菜下饭神器' },
    { id: 2, name: '麻婆豆腐', price: 1800, category: '热菜', desc: '麻辣鲜香烫,嫩豆腐裹满红油肉臊' },
    { id: 3, name: '糖醋里脊', price: 3200, category: '热菜', desc: '外酥里嫩,酸甜适口,老少皆宜' },
    { id: 4, name: '番茄炒蛋', price: 1600, category: '热菜', desc: '国民家常菜,汤汁浓郁拌饭一绝' },
    { id: 5, name: '红烧肉', price: 3800, category: '热菜', desc: '五花肉慢炖两小时,肥而不腻入口即化' },
    { id: 6, name: '清炒时蔬', price: 1500, category: '热菜', desc: '当季绿叶菜,蒜蓉清炒,清爽解腻' },
    { id: 7, name: '扬州炒饭', price: 2000, category: '主食', desc: '粒粒分明,虾仁火腿鸡蛋配料十足' },
    { id: 8, name: '柠檬冰红茶', price: 800, category: '饮品', desc: '现泡红茶加鲜柠檬片,冰爽解辣' }
].map(d => ({ ...d, img: `images/dish_${d.id}.jpg` }));

const ORDERS_KEY = 'foodOrdersV1';
const ADDR_SEL_KEY = 'foodSelectedAddressV1';

/* 构造与 fetch Response 同形的返回对象,便于页面代码零改动 */
const res = (data, ok = true) => ({ ok, status: ok ? 200 : 400, json: async () => data });

function pad(n) { return String(n).padStart(2, '0'); }

function nowStr() {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
           `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function genOrderNo() {
    const d = new Date();
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}` +
           `${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}` +
           String(Math.floor(Math.random() * 1000)).padStart(3, '0');
}

function readOrders() {
    try {
        const a = JSON.parse(localStorage.getItem(ORDERS_KEY));
        return Array.isArray(a) ? a : [];
    } catch { return []; }
}

function writeOrders(list) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(list));
}

const API = {
    /* 菜品列表 */
    async dishes() {
        return res(DISHES);
    },

    /* 创建订单: 按内置菜品单价重算金额,防止前端篡改 */
    async createOrder(body) {
        const items = body.items || [];
        if (!items.length) return res({ error: '订单不能为空' }, false);
        const detail = [];
        let total = 0;
        for (const it of items) {
            const d = DISHES.find(x => x.id === it.dish_id);
            if (!d) return res({ error: `菜品 ${it.dish_id} 不存在` }, false);
            const qty = Math.max(1, parseInt(it.quantity, 10) || 0);
            total += d.price * qty;
            detail.push({ dish_id: d.id, name: d.name, price: d.price, quantity: qty, img: d.img });
        }
        const order = {
            order_no: genOrderNo(),
            order_type: body.order_type || '堂食',
            remark: (body.remark || '').slice(0, 200),
            total_fen: total,
            status: '待支付',
            create_time: nowStr(),
            pay_time: null,
            items: detail
        };
        const list = readOrders();
        list.unshift(order);
        writeOrders(list);
        return res({ order_no: order.order_no, total_fen: total, status: order.status });
    },

    /* 订单列表(倒序) */
    async orders() {
        const list = readOrders().map(o => ({
            order_no: o.order_no,
            order_type: o.order_type,
            total_fen: o.total_fen,
            status: o.status,
            create_time: o.create_time,
            item_count: o.items.reduce((s, i) => s + i.quantity, 0)
        }));
        return res(list);
    },

    /* 订单详情 */
    async order(no) {
        const o = readOrders().find(x => x.order_no === no);
        return o ? res({ ...o }) : res({ error: '订单不存在' }, false);
    },

    /* 模拟支付: 待支付 -> 已支付 */
    async pay(no) {
        const list = readOrders();
        const o = list.find(x => x.order_no === no);
        if (!o) return res({ error: '订单不存在' }, false);
        if (o.status !== '待支付') return res({ error: `当前状态为「${o.status}」,不能支付` }, false);
        o.status = '已支付';
        o.pay_time = nowStr();
        writeOrders(list);
        return res({ ok: true, status: o.status });
    },

    /* 取消订单: 仅待支付可取消 */
    async cancel(no) {
        const list = readOrders();
        const o = list.find(x => x.order_no === no);
        if (!o) return res({ error: '订单不存在' }, false);
        if (o.status !== '待支付') return res({ error: `当前状态为「${o.status}」,不能取消` }, false);
        o.status = '已取消';
        writeOrders(list);
        return res({ ok: true, status: o.status });
    }
};
