!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).FISH={})}(this,function(e){"use strict";var t,n=(function(e,t){var n;n=function(){function m(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}return function e(l){function v(e,t,n){var r;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(n=m({path:"/"},v.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}n.expires=n.expires?n.expires.toUTCString():"";try{r=JSON.stringify(t),/^[\{\[]/.test(r)&&(t=r)}catch(e){}t=l.write?l.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in n)n[c]&&(i+="; "+c,!0!==n[c]&&(i+="="+n[c]));return document.cookie=e+"="+t+i}e||(r={});for(var s=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,a=0;a<s.length;a++){var f=s[a].split("="),u=f.slice(1).join("=");this.json||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var d=f[0].replace(p,decodeURIComponent);if(u=l.read?l.read(u,d):l(u,d)||u.replace(p,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch(e){}if(e===d){r=u;break}e||(r[d]=u)}catch(e){}}return r}}return(v.set=v).get=function(e){return v.call(v,e)},v.getJSON=function(){return v.apply({json:!0},[].slice.call(arguments))},v.defaults={},v.remove=function(e,t){v(e,"",m(t,{expires:-1}))},v.withConverter=e,v}(function(){})},e.exports=n()}(t={exports:{}},t.exports),t.exports);e.Cookies=n,e.sum=function(e,t){var n=e+t;return alert(233),n},Object.defineProperty(e,"__esModule",{value:!0})});