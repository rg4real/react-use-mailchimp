import s from"jsonp";import{useState as o}from"react";import t from"to-querystring";export default function(e){var n=e.url,r=o({status:"YO"}),a=r[0],c=r[1];return[a,function(o){var e=t(o),r=function(s){return s.replace("/post?","/post-json?")}(n)+"&"+e;c(Object.assign({},a,{status:"LOADING"})),console.log("calling jsonp"),console.log(r),s(r,{param:"c",timeout:2e3},function(s,o){console.log("process"),console.log(s),console.log(o),c(s?Object.assign({},a,{status:"ERROR",message:s}):"success"!==o.result?Object.assign({},a,{status:"ERROR",message:o.msg}):Object.assign({},a,{status:"SUCCESS",message:o.msg}))})}]}