webpackJsonp([2],{12:function(e,n){function t(e,n,t){function o(){r+=1/60;var n=r/u,c=a[t](n);n<1?(requestAnimFrame(o),window.scrollTo(0,i+(e-i)*c)):window.scrollTo(0,e)}var i=window.scrollY||document.documentElement.scrollTop,e=e||0,n=n||2e3,t=t||"easeOutSine",r=0,u=Math.max(.1,Math.min(Math.abs(i-e)/n,.8)),a={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}};o()}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),e.exports=t},33:function(e,n,t){var o=t(12);document.querySelector(".read-more-btn").addEventListener("click",function(e){e.preventDefault(),o(document.querySelector("#promo").offsetTop,300)})}},[33]);
//# sourceMappingURL=index-page.js.map