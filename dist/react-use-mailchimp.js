function s(s){return s&&"object"==typeof s&&"default"in s?s.default:s}var e=s(require("jsonp")),t=require("react"),o=s(require("to-querystring"));module.exports=function(s){var n=s.url,u=t.useState({status:"YO"}),r=u[0],a=u[1];return[r,function(s){var t=o(s),u=function(s){return s.replace("/post?","/post-json?")}(n)+"&"+t;a(Object.assign({},r,{status:"LOADING"})),console.log("calling jsonp"),console.log(u),e(u,{param:"c",timeout:2e3},function(s,e){console.log("process"),console.log(s),console.log(e),a(s?Object.assign({},r,{status:"ERROR",message:s}):"success"!==e.result?Object.assign({},r,{status:"ERROR",message:e.msg}):Object.assign({},r,{status:"SUCCESS",message:e.msg}))})}]};
