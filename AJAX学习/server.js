//引入express
const express =require('express');

//创建应用对象
const app =express();

//创建路由规则
// app.get('/server',(request,response)=>{
// //设置响应头，允许跨域

//     response.setHeader('Access-Control-Allow-Origin', '*');
// //设置响应体
// response.send('HELLO AJAX');
// });
app.all('/server',(request,response)=>{
//设置响应头，允许跨域

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
// 响应一个数据
const data = {
    name: 'atgui32gu'
};
// 对对象进行字符串转换
let str = JSON.stringify(data);
// 设置响应体
response.send(str);

});
//创建路由规则
app.all('/ie',(request,response)=>{
//设置响应头，允许跨域

    response.setHeader('Access-Control-Allow-Origin', '*');
//设置响应体
setTimeout(()=>{
response.send('延迟响应');
},3000)
});

app.all('/axios-server',(request,response)=>{
//设置响应头，允许跨域

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
// 响应一个数据
const data = {
    name: 'leaning'
};
// 对对象进行字符串转换
let str = JSON.stringify(data);
// 设置响应体
response.send(str);

});
//监听端口启动服务
app.listen(8000,()=>{
console.log("服务已经启动，8000 端口监听中......");

});