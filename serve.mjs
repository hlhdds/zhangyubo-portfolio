/* ============================================================
   serve.mjs —— 零依赖本地静态服务器 (规格 §14)
   ES modules 需要 HTTP,file:// 下无法运行
   ============================================================ */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

/* 必须用 fileURLToPath 而不是 .pathname ——
   后者保留百分号编码,路径带空格时全部 404 */
const ROOT = fileURLToPath(new URL('.', import.meta.url));

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js':   'text/javascript; charset=utf-8',
    '.mjs':  'text/javascript; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.json': 'application/json',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.svg':  'image/svg+xml',
    '.mp4':  'video/mp4',
};

const server = createServer(async (req, res) => {
    try {
        let urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        if (urlPath === '/') urlPath = '/index.html';

        const filePath = normalize(join(ROOT, urlPath));
        if (!filePath.startsWith(ROOT)) {
            res.writeHead(403); res.end('forbidden'); return;
        }

        const data = await readFile(filePath);
        res.writeHead(200, {
            'Content-Type': MIME[extname(filePath).toLowerCase()] || 'application/octet-stream',
            'Cache-Control': 'no-store',
        });
        res.end(data);
    } catch (_) {
        res.writeHead(404); res.end('not found');
    }
});

const PORT = Number(process.env.PORT) || 8123;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`http://127.0.0.1:${PORT}`);
});
