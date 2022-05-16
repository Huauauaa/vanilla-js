const url = require('url');
const http = require('http');
const port = 3333;

http
  .createServer((req, res) => {
    const data = {
      x: 10,
    };
    const callback = url.parse(req.url, true).query.callback;
    res.writeHead(200);
    res.end(`${callback}(${JSON.stringify(data)})`);
  })
  .listen(port, 'localhost');

console.log(`启动服务，监听 http://localhost:${port}`);
