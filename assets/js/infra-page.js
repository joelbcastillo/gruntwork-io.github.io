webpackJsonp([1],{1:function(e,a){e.exports.addClass=function(e,a){e.className.indexOf(a)===-1&&(e.className+=" "+a)},e.exports.removeClass=function(e,a){for(var s=" "+e.className+" ";s.indexOf(" "+a+" ")!=-1;)s=s.replace(" "+a+" ","");e.className=s},e.exports.hasClass=function(e,a){return(" "+e.className+" ").indexOf(" "+a+" ")>-1}},34:function(e,a,s){function n(e){if("A"===e.target.tagName)return!0;e.preventDefault();var a=this;a.querySelector(".package__text");t.hasClass(a,"open")?t.removeClass(a,"open"):t.addClass(a,"open")}var t=s(1),r=document.querySelectorAll(".package-container");for(i=0;i<r.length;i++)r[i].addEventListener("click",n,!1)}},[34]);
//# sourceMappingURL=infra-page.js.map