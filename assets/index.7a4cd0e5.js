import{c as l,z as o,B as m}from"./index.049b8dcf.js";const p=1,d=0,f=-1,g=l(),h=a=>{let n=Math.ceil(a.stakeAmount/a.totalAmount*100);return n>100?100:n};async function A(a,n){let s=await g.contractInstance.methods.getRoundInfo(a,n).call(),r=[];return s.forEach(t=>{let e={};e=Object.assign({},t),e.status=-1,e.totalAmount=Number(o(e.totalAmount,18)),e.stakeAmount=Number(o(e.stakeAmount,18)),e.myStakeAmount=Number(o(e.myStakeAmount,18)),e.endTime=m("yyyy-mm-dd",+e.endTime?+e.endTime:"-"),r.push(e)}),r[r.length-1].status=1,r}function y(a){var n=new Array("\u96F6","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D"),s=new Array("","\u5341","\u767E","\u5343","\u4E07","\u5341","\u767E","\u5343","\u4EBF","\u5341","\u767E","\u5343","\u4E07","\u5341","\u767E","\u5343","\u4EBF");if(!a||isNaN(a))return"\u4E00";for(var r=a.toString().split(""),t="",e=0;e<r.length;e++){var c=r.length-1-e;t=s[e]+t;var u=r[c];t=n[u]+t}return t=t.replace(/零(千|百|十)/g,"\u96F6").replace(/十零/g,"\u5341"),t=t.replace(/零+/g,"\u96F6"),t=t.replace(/零亿/g,"\u4EBF").replace(/零万/g,"\u4E07"),t=t.replace(/亿万/g,"\u4EBF"),t=t.replace(/零+$/,""),t=t.replace(/^一十/g,"\u5341"),t}export{h as I,y as c,f as e,A as f,p as s,d as u};
