!function(e,t,n){function o(e,t){return typeof e===t}function r(e,t){return function(){return e.apply(t,arguments)}}function i(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):y?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(e,n,o,r){var i,a,l,f,u=s("div"),d=function(){var e=t.body;return e||(e=s(y?"svg":"body"),e.fake=!0),e}();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=r?r[o]:"modernizr"+(o+1),u.appendChild(l);return i=s("style"),i.type="text/css",i.id="smodernizr",(d.fake?d:u).appendChild(i),d.appendChild(u),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),u.id="modernizr",d.fake&&(d.style.background="",d.style.overflow="hidden",f=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=n(u,e),d.fake?(d.parentNode.removeChild(d),h.style.overflow=f,h.offsetHeight):u.parentNode.removeChild(u),!!a}function u(t,r,u,d){function c(){m&&(delete x.style,delete x.modElem)}if(d=!o(d,"undefined")&&d,!o(u,"undefined")){var p=function(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(l(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+l(t[r])+":"+o+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}(t,u);if(!o(p,"undefined"))return p}for(var m,v,g,h,y,b=["modernizr","tspan","samp"];!x.style&&b.length;)m=!0,x.modElem=s(b.shift()),x.style=x.modElem.style;for(g=t.length,v=0;g>v;v++)if(h=t[v],y=x.style[h],i(h,"-")&&(h=a(h)),x.style[h]!==n){if(d||o(u,"undefined"))return c(),"pfx"!=r||h;try{x.style[h]=u}catch(e){}if(x.style[h]!=y)return c(),"pfx"!=r||h}return c(),!1}function d(e,t,n,i,s){var a=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+b.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?u(l,t,i,s):(l=(e+" "+w.join(a+" ")+a).split(" "),function(e,t,n){var i;for(var s in e)if(e[s]in t)return!1===n?e[s]:(i=t[e[s]],o(i,"function")?r(i,n||t):i);return!1}(l,t,n))}function c(e,t,o){return d(e,n,n,t,o)}var p=[],m=[],v={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){m.push({name:e,fn:t,options:n})},addAsyncTest:function(e){m.push({name:null,fn:e})}},g=function(){};g.prototype=v,g=new g;var h=t.documentElement,y="svg"===h.nodeName.toLowerCase(),b=v._config.usePrefixes?"Moz O ms Webkit".split(" "):[];v._cssomPrefixes=b;var w=v._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];v._domPrefixes=w;var C={elem:s("modernizr")};g._q.push(function(){delete C.elem});var x={style:C.elem.style};g._q.unshift(function(){delete x.style}),v.testAllProps=d,v.testAllProps=c,g.addTest("flexbox",c("flexBasis","1px",!0)),function(){var e,t,n,r,i,s,a;for(var l in m)if(m.hasOwnProperty(l)){if(e=[],(t=m[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],1===(a=s.split(".")).length?g[a[0]]=r:(!g[a[0]]||g[a[0]]instanceof Boolean||(g[a[0]]=new Boolean(g[a[0]])),g[a[0]][a[1]]=r),p.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=h.className,n=g._config.classPrefix||"";if(y&&(t=t.baseVal),g._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}g._config.enableClasses&&(t+=" "+n+e.join(" "+n),y?h.className.baseVal=t:h.className=t)}(p),delete v.addTest,delete v.addAsyncTest;for(var _=0;_<g._q.length;_++)g._q[_]();e.Modernizr=g}(window,document),function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof module&&module.exports?module.exports=t():e.svg4everybody=t()}(this,function(){function e(e,t,n){if(n){var o=document.createDocumentFragment(),r=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");r&&t.setAttribute("viewBox",r);for(var i=n.cloneNode(!0);i.childNodes.length;)o.appendChild(i.firstChild);e.appendChild(o)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||(n=t._cachedDocument=document.implementation.createHTMLDocument(""),n.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(o){var r=t._cachedTarget[o.id];r||(r=t._cachedTarget[o.id]=n.getElementById(o.id)),e(o.parent,o.svg,r)})}},t.onreadystatechange()}return function(n){function o(){for(var n=0;n<f.length;){var s=f[n],d=s.parentNode,c=function(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}(d),p=s.getAttribute("xlink:href")||s.getAttribute("href");if(!p&&i.attributeName&&(p=s.getAttribute(i.attributeName)),c&&p){if(r)if(!i.validate||i.validate(p,c,s)){d.removeChild(s);var m=p.split("#"),v=m.shift(),g=m.join("#");if(v.length){var h=a[v];h||((h=a[v]=new XMLHttpRequest).open("GET",v),h.send(),h._embeds=[]),h._embeds.push({parent:d,svg:c,id:g}),t(h)}else e(d,c,document.getElementById(g))}else++n,++u}else++n}(!f.length||f.length-u>0)&&l(o,67)}var r,i=Object(n),s=window.top!==window.self;r="polyfill"in i?i.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&s;var a={},l=window.requestAnimationFrame||setTimeout,f=document.getElementsByTagName("use"),u=0;r&&o()}});
//# sourceMappingURL=maps/plugins-min.js.map
