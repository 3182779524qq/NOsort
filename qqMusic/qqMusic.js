const express = require('express');
const server = express();
const httpProxy = require('http-proxy-middleware');



server.use('/public', express.static('./public'));
server.use('/v4', httpProxy({
    // target: 'https://c.y.qq.com',
    target:'https://m.maizuo.com',
    // '/cfj':'',/v4/api/cinema
    // pathRewrite:{
    //     '/cfj':''
    // },
    changeOrigin: true
}))

server.get('/', (req, res) => {
    res.sendfile(__dirname + '/qqMusic.html')
})
server.listen(8080, 'localhost', () => { });