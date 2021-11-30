(function(){function i(p,m){var b=new XMLHttpRequest;b.onreadystatechange=function(){b.readyState===4&&m(b.responseText)},b.open("GET",p,!0),b.send()}function t(p,m,b){Object.defineProperty?Object.defineProperty(p,m,b):p[m]=b.get()}var e,o=window.CSS;o||(window.CSS=o={}),o.supports||(o.supports=function p(m,b){if(m=="paint")return!0;if(b){var C=$.contentDocument.body;return C.style.cssText=m+":"+b,C.style.cssText.length>0}for(var I,V,A,_,Q=/(^|not|(or)|(and))\s*\(\s*(.+?)\s*:(.+?)\)\s*|(.)/gi;A=Q.exec(m);){if(A[6])return!1;_=p(A[4],A[5]),V=A[2]?V||_:A[3]?V&&_:(I=!A[1],_)}return V==I}),o.escape||(o.escape=function(p){return p.replace(/([^\w-])/g,"\\$1")});var s={};function n(p,m){var b=parseFloat(p);this.value=isNaN(b)?p:b,this.unit=m}o.registerProperty||(o.registerProperty=function(p){s[p.name]=p}),n.prototype.toString=function(){return this.value+(this.unit=="number"?"":this.unit)},n.prototype.valueOf=function(){return this.value},"Hz Q ch cm deg dpcm dpi ddpx em ex fr grad in kHz mm ms number pc percent pt px rad rem s turn vh vmax vmin vw".split(" ").forEach(function(p){o[p]||(o[p]=function(m){return new n(m,p)})});var a=/(background|mask|cursor|-image|-source)/,c=!!o.paintWorklet;c||(e=new tr,t(o,"paintWorklet",{enumerable:!0,configurable:!0,get:function(){return e}}));var h="css-paint-polyfill",u=document.createElement(h);c||document.documentElement.appendChild(u);var $=document.createElement("iframe");$.style.cssText="position:absolute; left:0; top:-999px; width:1px; height:1px;",u.appendChild($);var y=document.createElement("style");y.id=h,y.$$isPaint=!0,u.appendChild(y);var k=y.sheet,Y=u.style,G=!1,K=[],et=/(paint\(|-moz-element\(#paint-|-webkit-canvas\(paint-|[('"]blob:[^'"#]+#paint=|[('"]data:image\/paint-)/,Gt="getCSSCanvasContext"in document,Kt=(Y.backgroundImage="-moz-element(#"+h+")")===Y.backgroundImage,Ss=typeof Promise=="function";Y.cssText="display:none !important;";var Qe=window.requestAnimationFrame||setTimeout,Io=function(){return window.devicePixelRatio||1},jn={},Fo={},Un=0;function Cl(p){var m=p.bit^=1;return p.instances[m]||(p.instances[m]=new p.Painter)}function Tl(p,m){var b=p.cssText,C=et.test(b);if(m.isNew===!0&&C&&b!==(b=$i(b))&&(p=function(rt,ft){for(var Wt=rt.parentStyleSheet,st=rt.parentRule,Xt=(st||Wt).cssRules,H=Xt.length-1,z=0;z<=H;z++)if(Xt[z]===rt){(st||Wt).deleteRule(z),H=z;break}if(ft!=null){if(st){var yt=st.appendRule(ft);return st.cssRules[yt]}return Wt.insertRule(ft,H),Wt.cssRules[H]}}(p,b)),C){var I,V,A,_=p.selectorText,Q=Zn(p.style);if(I=m.counters[_]==null?m.counters[_]=1:++m.counters[_],Fo[V="sheet"+m.sheetId+`
`+_+`
`+I]!=null){if((A=Fo[V]).selector===_)return A.rule=p,void(A.cssText!==Q&&m.toProcess.push(A));m.toRemove.push(A)}else A=Fo[V]={key:V,selector:_,cssText:Q,properties:{},rule:p},m.toProcess.push(A.selector)}}function Rs(p,m){if(!("ownerSVGElement"in p)){m(p);for(var b=p.firstElementChild;b;)Rs(b,m),b=b.nextElementSibling}}function Ds(){for(var p,m=[].slice.call(document.styleSheets),b={toProcess:[],toRemove:[],counters:{},isNew:!1,sheetId:null,rules:null},C=0;C<m.length;C++){var I=m[C].ownerNode;if(!I.$$isPaint){try{b.rules=I.sheet.cssRules}catch{continue}if(b.sheetId=I.$$paintid,b.isNew=b.sheetId==null,b.isNew){if(b.sheetId=I.$$paintid=++Un,Il(I)===!1)continue;p=!0}qn(I.sheet,Tl,b)}}for(var V=b.toRemove.length;V--;)delete Fo[b.toRemove[V].key];b.toProcess.length>0&&Ro(b.toProcess.join(", ")),p&&Ro("[data-css-paint]",!0)}function qn(p,m,b){var C=[[0,p.cssRules]],I=C[0],V=I[1];if(V)for(var A=0;C.length>0;A++)if(A>=V.length){C.pop();var _=C.length;_>0&&(V=(I=C[_-1])[1],A=I[0])}else{I[0]=A;var Q=V[A];if(Q.type!==3)if(Q.type===1){var rt=m(Q,b);rt!==void 0&&(b=rt)}else Q.cssRules&&Q.cssRules.length>0&&C.push([0,Q.cssRules]);else{if(Q.$$isPaint)continue;var ft=Q.media&&Q.media.mediaText;if(ft&&!self.matchMedia(ft).matches||/ts\.g.{7}is\.com\/css/.test(Q.href))continue;Q.$$isPaint=!0,i(Q.href,_n)}}return b}function Il(p){if(!p.$$isPaint){if(p.href)return i(p.href,_n),!1;for(var m=p.childNodes.length;m--;){var b=p.childNodes[m].nodeValue,C=$i(b);C!==b&&(p.childNodes[m].nodeValue=C)}}}function _n(p){var m=function(I){var V=$.contentDocument.body,A=document.createElement("style");return A.media="print",A.$$paintid=++Un,A.appendChild(document.createTextNode(I)),V.appendChild(A),A.sheet.remove=function(){return V.removeChild(A)},A.sheet}($i(p));try{m._=m.cssRules.length}catch{var b=function(){m&&Gn(m),m=null,clearTimeout(C)};m.ownerNode.onload=m.ownerNode.onerror=b;var C=setTimeout(b,5e3);return}Gn(m)}function Gn(p){var m="";if(qn(p,function(C){if(C.type===1){for(var I="",V=0;V<C.style.length;V++){var A=C.style.item(V),_=C.style.getPropertyValue(A);et.test(_)&&(I=A+": "+_+C.style.getPropertyPriority(A)+";")}if(I){I=C.selectorText+"{"+I+"}";for(var Q=C;Q=Q.parentRule;)I=""+Q.cssText.match(/^[\s\S]+?\{/)[0]+I+"}";m+=I}}}),p.remove(),m){var b=document.createElement("style");b.appendChild(document.createTextNode(m)),u.appendChild(b),Ds()}}function $i(p){return p.replace(/(;|,|\b)paint\s*\(\s*(['"]?)(.+?)\2\s*\)(;|,|!|\b|$)/g,"$1url(data:image/paint-$3,=)$4")}var Wn,Xn,So,be=[];function Ui(p,m){m&&(p.$$paintObservedProperties=null,p.$$paintGeometry&&!p.$$paintGeometry.live&&(p.$$paintGeometry=null)),p.$$paintPending!==!0&&(p.$$paintPending=!0,be.indexOf(p)===-1&&be.push(p)===1&&Qe(Yn))}function Yn(){for(var p,m=0;m<be.length;m++)be[m]&&be[m].localName==="style"&&(p=!0,be[m]=null);if(p)return Qe(Yn),void Ds();var b=be.length&&be.some(function(I){return I&&I.$$needsOverrides===!0});for(b&&Jn();be.length;){var C=be.pop();C&&Sl(C)}b&&Kn()}function Ro(p,m){try{for(var b=document.querySelectorAll(p),C=0;C<b.length;C++)Ui(b[C],m)}catch{}}function Fl(p,m,b){for(var C=p.length,I=function(){--C||m.apply(null,b||K)},V=0;V<p.length;V++){var A=new Image;A.onload=I,A.onerror=onerror,A.src=p[V]}}function wi(p){var m=p.$$paintId;return m==null&&(m=p.$$paintId=++Rl),m}function Qn(p){var m=p.$$paintRule,b=wi(p);if(Number(p.getAttribute("data-css-paint"))!==b&&p.setAttribute("data-css-paint",b),m==null){var C=k.insertRule('[data-css-paint="'+b+'"] {}',k.cssRules.length);m=p.$$paintRule=k.cssRules[C]}return m}function Zn(p){var m=p.cssText;if(m)return m;m="";for(var b=0,C=void 0;b<p.length;b++)C=p[b],b!==0&&(m+=" "),m+=C,m+=":",m+=p.getPropertyValue(C),m+=";";return m}function Sl(p){var m=getComputedStyle(p);if(p.$$paintObservedProperties&&!p.$$needsOverrides)for(var b=0;b<p.$$paintObservedProperties.length;b++){var C=p.$$paintObservedProperties[b];if(m.getPropertyValue(C).trim()!==p.$$paintedPropertyValues[C]){Es(p,m);break}}else if(p.$$paintId||et.test(Zn(m)))Es(p,m);else{var I=p.getAttribute("style");et.test(I)&&(p.style.cssText=I.replace(/;\s*$/,"")+"; "+p.style.cssText,Es(p))}p.$$paintPending=!1}function Do(p){p.$$paintGeometry&&!p.$$paintGeometry.live&&(p.$$paintGeometry=null),Ui(p)}var Ze={get:function(p){var m=s[p],b=m&&m.inherits===!1?Xn.style.getPropertyValue(p):Ze.getRaw(p);if(b==null&&m)b=m.initialValue;else if(m&&m.syntax){var C=m.syntax.replace(/[<>\s]/g,"");typeof o[C]=="function"&&(b=o[C](b))}return typeof b=="string"&&(b=b.trim()),b},getRaw:function(p){if(p in So)return So[p];var m=Wn.getPropertyValue(p);return typeof m=="string"&&(m=m.trim()),So[p]=m}},Je=window.ResizeObserver&&new window.ResizeObserver(function(p){for(var m=0;m<p.length;m++){var b=p[m],C=b.target.$$paintGeometry;C?C.live=!0:C=b.target.$$paintGeometry={width:0,height:0,live:!0};var I=b.borderBoxSize;if(I&&I.length&&(I=I[0]),I)C.width=0|I.inlineSize,C.height=0|I.blockSize;else{var V=getComputedStyle(b.target),A=parseFloat(V.paddingLeft)+parseFloat(V.paddingRight),_=parseFloat(V.paddingTop)+parseFloat(V.paddingBottom);C.width=Math.round((b.contentRect.right-b.contentRect.left||b.contentRect.width)+A),C.height=Math.round((b.contentRect.bottom-b.contentRect.top||b.contentRect.height)+_)}Ui(b.target,!0)}}),Rl=0;function Es(p,m){p.$$needsOverrides===!0&&Jn();var b,C=Wn=m==null?getComputedStyle(p):m;Xn=p,So={};var I=[];p.$$paintPending=!1;var V=function(Ne){return Ne.$$paintGeometry||(Ne.$$paintGeometry={width:Ne.clientWidth,height:Ne.clientHeight,live:!1})}(p);(function(Ne){Je&&!Ne.$$paintGeometry.live&&(Ne.$$paintGeometry.live=!0,Je.observe(Ne))})(p),V={width:V.width,height:V.height};for(var A=Io(),_=p.$$paintedProperties,Q=0;Q<C.length;Q++){var rt=C[Q],ft=Ze.getRaw(rt),Wt=/(,|\b|^)(?:url\((['"]?))?((?:-moz-element\(#|-webkit-canvas\()paint-\d+-([^;,]+)|(?:data:image\/paint-|blob:[^'"#]+#paint=)([^"';, ]+)(?:[;,].*?)?)\2\)(;|,|\s|\b|$)/g,st="",Xt=0,H=[],z=!1,yt=!1,Tt=void 0,Pt=void 0,Me=!1,te=V;if(a.test(rt)&&rt!=="-webkit-border-image"){if(/border-image/.test(rt)){var Te=te.width,er=te.height,Oo=Os(Ze.getRaw("border-image-slice").replace(/\sfill/,"").split(" ")),Lo=Os(Ze.getRaw("border-width").split(" ")),Po=Os(Ze.getRaw("border-image-outset").split(" "));Te+=Eo(Oo.left!="0"&&parseFloat(Lo.left)||0,Po.left||0,!0),Te+=Eo(Oo.right!="0"&&parseFloat(Lo.right)||0,Po.right||0,!0),er+=Eo(Oo.top!="0"&&parseFloat(Lo.top)||0,Po.top||0,!0),Me=!0,te={width:Te,height:er+=Eo(Oo.bottom!="0"&&parseFloat(Lo.bottom)||0,Po.bottom||0,!0)}}for(;Pt=Wt.exec(ft);){yt===!1&&(Tt=wi(p)),yt=!0,st+=ft.substring(0,Pt.index);var Ao=Pt[4]||Pt[5],_i=Pt[3],ki=jn[Ao],ir=ki&&ki.Painter.contextOptions||{},Ci=Me||ir.scaling===!1?1:A,Ls=void 0;ki&&(ki.Painter.inputProperties&&I.push.apply(I,ki.Painter.inputProperties),Ls=Cl(ki)),ir.nativePixels===!0&&(te.width*=A,te.height*=A,Ci=1);var Gi=Ci*te.width,Wi=Ci*te.height,It=p.$$paintContext,Ie="paint-"+Tt+"-"+Ao,At=It&&It.canvas;if(!At||At.width!=Gi||At.height!=Wi||Gt===!0&&It&&Ie!==It.id){if(Gt===!0)(It=document.getCSSCanvasContext("2d",Ie,Gi,Wi)).id=Ie,p.$$paintContext&&It.clearRect(0,0,Gi,Wi);else{var or=!1;At||((At=document.createElement("canvas")).id=Ie,or=Kt),At.width=Gi,At.height=Wi,or&&(At.style.display="none",u.appendChild(At)),It=At.getContext("2d")}p.$$paintContext=It,It.imageSmoothingEnabled=!1,Ci!==1&&It.scale(Ci,Ci)}else It.clearRect(0,0,Gi,Wi);if(Ls&&(It.save(),It.beginPath(),Ls.paint(It,te,Ze),It.closePath(),It.restore(),Gt===!1&&!Kt&&"resetTransform"in It&&It.resetTransform()),st+=Pt[1],Gt===!0)st+="-webkit-canvas("+Ie+")",(Pt[4]==null||At&&At.id!==Ie)&&(z=!0);else if(Kt===!0)st+="-moz-element(#"+Ie+")",Pt[4]==null&&(z=!0),At&&At.id!==Ie&&(At.id=Ie,z=!0);else{var Ti=At.toDataURL("image/png").replace("/png","/paint-"+Ao);if(typeof MSBlobBuilder=="function"&&(Ti=Dl(Ti,Ao)),H.push(Ti),st+='url("'+Ti+'")',Ti!==_i||!b){var sr=_i?_i.indexOf("#"):-1;~sr&&URL.revokeObjectURL(_i.substring(0,sr)),z=!0}_i=Ti}st+=Pt[6],Xt=Pt.index+Pt[0].length}yt!==!1||_==null||_[rt]==null?(st+=ft.substring(Xt),z&&(b||(b=Qn(p)),_==null&&(_=p.$$paintedProperties={}),_[rt]=!0,rt.substring(0,10)==="background"&&A!==1&&Ke(b.style,"background-size","100% 100%"),/mask/.test(rt)&&A!==1&&(Ke(b.style,"mask-size","contain"),Gt&&Ke(b.style,"-webkit-mask-size","contain")),/border-image/.test(rt)&&Gt&&(Ke(b.style,"border-color","initial"),Ke(b.style,"image-rendering","optimizeSpeed")),H.length===0?Ke(b.style,rt,st):Fl(H,Ke,[b.style,rt,st]))):(b||(b=Qn(p)),b.style.removeProperty(rt),Je&&Je.unobserve(p),p.$$paintGeometry&&(p.$$paintGeometry.live=!1))}}p.$$paintObservedProperties=I.length===0?null:I;for(var El=p.$$paintedPropertyValues={},Ps=0;Ps<I.length;Ps++){var nr=I[Ps];El[nr]=Ze.getRaw(nr)}p.$$needsOverrides===!0&&Kn(),p.$$needsOverrides=null}var qi=0;function Jn(){qi++||(y.disabled=!0)}function Kn(){--qi||(y.disabled=!1)}function Dl(p,m){for(var b=atob(p.split(",")[1]),C=new Uint8Array(b.length),I=0;I<b.length;I++)C[I]=b.charCodeAt(I);return URL.createObjectURL(new Blob([C]))+"#paint="+m}function Ke(p,m,b){var C=G;G=!0,p.setProperty(m,b,"important"),G=C}function Eo(p,m,b){var C=b?0:p,I=parseFloat(m);return m?m.match("px")?C+I:(m.match("%")&&(I/=100),p*I):C}function Os(p){return{top:p[0],bottom:p[2]||p[0],left:p[3]||p[1]||p[0],right:p[1]||p[0]}}function tr(){}if(tr.prototype.addModule=function(p){var m,b,C=this;return Ss&&(m=new Promise(function(I){return b=I})),i(p,function(I){var V={registerPaint:function(_,Q){(function(rt,ft,Wt){jn[rt]={worklet:Wt,Painter:ft,properties:ft.inputProperties?[].slice.call(ft.inputProperties):[],bit:0,instances:[]};for(var st="",Xt=k.cssRules.length;Xt--;){var H=k.cssRules[Xt];H.style.cssText.indexOf("-"+rt)!==-1&&(st+=H.selectorText)}st&&Ro(st,!0)})(_,Q,{context:V,realm:A})}};t(V,"devicePixelRatio",{get:Io}),V.self=V;var A=new function(_,Q){var rt=document.createElement("iframe");rt.style.cssText="position:absolute; left:0; top:-999px; width:1px; height:1px;",Q.appendChild(rt);var ft=rt.contentWindow,Wt=ft.document,st="var window,$hook";for(var Xt in ft)Xt in _||Xt==="eval"||(st+=",",st+=Xt);for(var H in _)st+=",",st+=H,st+="=self.",st+=H;var z=Wt.createElement("script");z.appendChild(Wt.createTextNode(`function $hook(self,console) {"use strict";
		`+st+";return function() {return eval(arguments[0])}}")),Wt.body.appendChild(z),this.exec=ft.$hook(_,console)}(V,$.contentDocument&&$.contentDocument.body||u);I=(C.transpile||String)(I),A.exec(I),b&&b()}),m},!c)try{(function(){var p=!1;new MutationObserver(function(H){if(p!==!0&&!qi){p=!0;for(var z=0;z<H.length;z++){var yt=H[z],Tt=yt.target,Pt=void 0,Me=void 0;if(!(Tt&&"ownerSVGElement"in Tt)){if(yt.type==="childList"){if(Pt=yt.addedNodes)for(var te=0;te<Pt.length;te++)Pt[te].nodeType===1&&Rs(Pt[te],Ui);if(Me=yt.removedNodes)for(var Te=0;Te<Me.length;Te++)Je&&Me[Te].$$paintGeometry&&(Me[Te].$$paintGeometry.live=!1,Je&&Je.unobserve(Me[Te]))}else if(yt.type==="attributes"&&Tt.nodeType===1){if(yt.attributeName==="data-css-paint"&&yt.oldValue&&Tt.$$paintId!=null&&!Tt.getAttribute("data-css-paint")){wi(Tt);continue}Rs(Tt,Do)}}}p=!1}}).observe(document.body,{childList:!0,attributes:!0,attributeOldValue:!0,subtree:!0});var m=Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute"),b=m.value;m.value=function(H,z){return H==="style"&&et.test(z)&&(z=$i(z),wi(this),this.$$needsOverrides=!0,Do(this)),b.call(this,H,z)},t(Element.prototype,"setAttribute",m);var C=Object.getOwnPropertyDescriptor(Element.prototype,"removeAttribute"),I=C.value;C.value=function(H){if(H!=="data-css-paint")return I.call(this,H)},t(Element.prototype,"removeAttribute",C);var V=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"style"),A=V.get;V.set=function(H){return V.get.call(this).cssText=H},V.get=function(){var H=A.call(this);return H.ownerElement!==this&&t(H,"ownerElement",{value:this}),H},t(HTMLElement.prototype,"style",V);var _={},Q=Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype,"cssText"),rt=Q.set;Q.set=function(H){if(!qi&&et.test(H)){H=H&&$i(H);var z=this.ownerElement;z&&(wi(z),z.$$needsOverrides=!0,Do(z))}return rt.call(this,H)},_.cssText=Q,Object.keys((window.CSS2Properties||CSSStyleDeclaration).prototype).filter(function(H){return a.test(H)}).forEach(function(H){var z=H.replace(/([A-Z])/g,"-$1").toLowerCase();_[H]={configurable:!0,enumerable:!0,get:function(){var yt=this.getPropertyPriority(z);return this.getPropertyValue(z)+(yt?" !"+yt:"")},set:function(yt){var Tt=String(yt).match(/^(.*?)\s*(?:!\s*(important)\s*)?$/);return this.setProperty(z,Tt[1],Tt[2]),this[H]}}});var ft=Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype,"setProperty"),Wt=ft.value;ft.value=function(H,z,yt){if(!G&&!qi&&et.test(z)){z=z&&$i(z);var Tt=this.ownerElement;Tt&&(wi(Tt),Tt.$$needsOverrides=!0,Do(Tt))}Wt.call(this,H,z,yt)},_.setProperty=ft,Object.defineProperties(CSSStyleDeclaration.prototype,_),window.CSS2Properties&&Object.defineProperties(window.CSS2Properties.prototype,_),addEventListener("resize",function(){Ro("[data-css-paint]")});var st={passive:!0};function Xt(H){for(var z=H.target;z;)z.nodeType===1&&Ui(z),z=z.parentNode}["animationiteration","animationend","animationstart","transitionstart","transitionend","transitionrun","transitioncancel","mouseover","mouseout","mousedown","mouseup","focus","blur"].forEach(function(H){addEventListener(H,Xt,st)}),Ds()})()}catch{}})();var Gg='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm5 10a5 5 0 11-10 0 5 5 0 0110 0zm4.25.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM12 19c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm-7.75-6.25a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zm-.03-8.53c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm1.06 15.56a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 111.06 1.06l-1.5 1.5zm14.5-15.56a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 001.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06zm-1.06 15.56a.75.75 0 101.06-1.06l-1.5-1.5a.75.75 0 10-1.06 1.06l1.5 1.5z"/></svg>',Wg='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.03 17a10 10 0 01-16.9.68.75.75 0 01.36-1.13c3.77-1.35 5.79-2.91 6.96-5.15 1.23-2.35 1.55-4.93.69-8.46A.75.75 0 0111.9 2 10 10 0 0120.03 17z"/></svg>';const Vo=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof global!="undefined")return global;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;try{return new Function("return this")()}catch{return{}}}();Vo.trustedTypes===void 0&&(Vo.trustedTypes={createPolicy:(i,t)=>t});const ti=Object.freeze([]),Fe=[],rr=Vo.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let As=rr;const Vs=[];function Ol(){if(Vs.length)throw Vs.shift()}function Ll(i){try{i.call()}catch(t){Vs.push(t),setTimeout(Ol,0)}}const Xi=`fast-${Math.random().toString(36).substring(2,8)}`,ar=`${Xi}{`,Hs=`}${Xi}`,O=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(As!==rr)throw new Error("The HTML policy can only be set once.");As=i},createHTML(i){return As.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(Xi)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${Xi}:`,""))},createInterpolationPlaceholder(i){return`${ar}${i}${Hs}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${Xi}:${i}-->`},queueUpdate(i){Fe.length<1&&window.requestAnimationFrame(O.processUpdates),Fe.push(i)},processUpdates(){const i=1024;let t=0;for(;t<Fe.length;)if(Ll(Fe[t]),t++,t>i){for(let e=0,o=Fe.length-t;e<o;e++)Fe[e]=Fe[e+t];Fe.length-=t,t=0}Fe.length=0},nextUpdate(){return new Promise(i=>{O.queueUpdate(i)})},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});function Pl(i){const t=this.spillover;t.indexOf(i)===-1&&t.push(i)}function Al(i){const t=this.spillover,e=t.indexOf(i);e!==-1&&t.splice(e,1)}function Vl(i){const t=this.spillover,e=this.source;for(let o=0,s=t.length;o<s;++o)t[o].handleChange(e,i)}function Hl(i){return this.spillover.indexOf(i)!==-1}class Ho{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){if(!this.has(t)){if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.subscribe=Pl,this.unsubscribe=Al,this.notify=Vl,this.has=Hl,this.sub1=void 0,this.sub2=void 0}}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,o=this.sub2,s=this.source;e!==void 0&&e.handleChange(s,t),o!==void 0&&o.handleChange(s,t)}}class lr{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const o=this.subscribers[t];o!==void 0&&o.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var o;if(e){let s=this.subscribers[e];s===void 0&&(this.subscribers[e]=s=new Ho(this.source)),s.subscribe(t)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new Ho(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var o;if(e){const s=this.subscribers[e];s!==void 0&&s.unsubscribe(t)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(t)}}const zl=/(:|&&|\|\||if)/,cr=new WeakMap,zs=new WeakMap;let ue,dr=i=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class Ml{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return ue!==void 0&&ue.watch(t,this.name),t[this.field]}setValue(t,e){const o=this.field,s=t[o];if(s!==e){t[o]=e;const n=t[this.callback];typeof n=="function"&&n.call(t,s,e),Ms(t).notify(this.name)}}}const N=Object.freeze({setArrayObserverFactory(i){dr=i},getNotifier(i){let t=i.$fastController||cr.get(i);return t===void 0&&(Array.isArray(i)?t=dr(i):cr.set(i,t=new lr(i))),t},track(i,t){ue!==void 0&&ue.watch(i,t)},trackVolatile(){ue!==void 0&&(ue.needsRefresh=!0)},notify(i,t){Ms(i).notify(t)},defineProperty(i,t){typeof t=="string"&&(t=new Ml(t)),this.getAccessors(i).push(t),Reflect.defineProperty(i,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(i){let t=zs.get(i);if(t===void 0){let e=Reflect.getPrototypeOf(i);for(;t===void 0&&e!==null;)t=zs.get(e),e=Reflect.getPrototypeOf(e);t===void 0?t=[]:t=t.slice(0),zs.set(i,t)}return t},binding(i,t,e=this.isVolatileBinding(i)){return new Bl(i,t,e)},isVolatileBinding(i){return zl.test(i.toString())}}),Ms=N.getNotifier;N.trackVolatile;const Nl=O.queueUpdate;function f(i,t){N.defineProperty(i,t)}let hr=null;function ur(i){hr=i}class Ns{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return hr}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}N.defineProperty(Ns.prototype,"index");N.defineProperty(Ns.prototype,"length");const Yi=Object.seal(new Ns);class Bl extends Ho{constructor(t,e,o=!1){super(t,e);this.binding=t,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&this.last!==null&&this.disconnect();const o=ue;ue=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const s=this.binding(t,e);return ue=o,s}disconnect(){if(this.last!==null){let t=this.first;for(;t!==void 0;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const o=this.last,s=Ms(t),n=o===null?this.first:{};if(n.propertySource=t,n.propertyName=e,n.notifier=s,s.subscribe(this,e),o!==null){if(!this.needsRefresh){let a;ue=void 0,a=o.propertySource[o.propertyName],ue=this,t===a&&(this.needsRefresh=!0)}o.next=n}this.last=n}handleChange(){this.needsQueue&&(this.needsQueue=!1,Nl(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return e===void 0?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}class zo{constructor(){this.targetIndex=0}}class pr extends zo{constructor(){super(...arguments);this.createPlaceholder=O.createInterpolationPlaceholder}}class Bs extends zo{constructor(t,e,o){super();this.name=t,this.behavior=e,this.options=o}createPlaceholder(t){return O.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function jl(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=N.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function Ul(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function ql(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function _l(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function Gl(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Wl(i){O.setAttribute(this.target,this.targetName,i)}function Xl(i){O.setBooleanAttribute(this.target,this.targetName,i)}function Yl(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function Ql(i){this.target[this.targetName]=i}function Zl(i){const t=this.classVersions||Object.create(null),e=this.target;let o=this.version||0;if(i!=null&&i.length){const s=i.split(/\s+/);for(let n=0,a=s.length;n<a;++n){const c=s[n];c!==""&&(t[c]=o,e.classList.add(c))}}if(this.classVersions=t,this.version=o+1,o!==0){o-=1;for(const s in t)t[s]===o&&e.classList.remove(s)}}class js extends pr{constructor(t){super();this.binding=t,this.bind=jl,this.unbind=ql,this.updateTarget=Wl,this.isBindingVolatile=N.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=Ql,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(o,s)=>O.createHTML(e(o,s))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Xl;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Ul,this.unbind=Gl;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=Zl);break}}targetAtContent(){this.updateTarget=Yl,this.unbind=_l}createBehavior(t){return new Jl(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Jl{constructor(t,e,o,s,n,a,c){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=o,this.bind=s,this.unbind=n,this.updateTarget=a,this.targetName=c}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){ur(t);const e=this.binding(this.source,this.context);ur(null),e!==!0&&t.preventDefault()}}let Us=null;class qs{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Us=this}static borrow(t){const e=Us||new qs;return e.directives=t,e.reset(),Us=null,e}}function Kl(i){if(i.length===1)return i[0];let t;const e=i.length,o=i.map(a=>typeof a=="string"?()=>a:(t=a.targetName||t,a.binding)),s=(a,c)=>{let h="";for(let u=0;u<e;++u)h+=o[u](a,c);return h},n=new js(s);return n.targetName=t,n}const tc=Hs.length;function fr(i,t){const e=t.split(ar);if(e.length===1)return null;const o=[];for(let s=0,n=e.length;s<n;++s){const a=e[s],c=a.indexOf(Hs);let h;if(c===-1)h=a;else{const u=parseInt(a.substring(0,c));o.push(i.directives[u]),h=a.substring(c+tc)}h!==""&&o.push(h)}return o}function gr(i,t,e=!1){const o=t.attributes;for(let s=0,n=o.length;s<n;++s){const a=o[s],c=a.value,h=fr(i,c);let u=null;h===null?e&&(u=new js(()=>c),u.targetName=a.name):u=Kl(h),u!==null&&(t.removeAttributeNode(a),s--,n--,i.addFactory(u))}}function ec(i,t,e){const o=fr(i,t.textContent);if(o!==null){let s=t;for(let n=0,a=o.length;n<a;++n){const c=o[n],h=n===0?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof c=="string"?h.textContent=c:(h.textContent=" ",i.captureContentBinding(c)),s=h,i.targetIndex++,h!==t&&e.nextNode()}i.targetIndex--}}function ic(i,t){const e=i.content;document.adoptNode(e);const o=qs.borrow(t);gr(o,i,!0);const s=o.behaviorFactories;o.reset();const n=O.createTemplateWalker(e);let a;for(;a=n.nextNode();)switch(o.targetIndex++,a.nodeType){case 1:gr(o,a);break;case 3:ec(o,a,n);break;case 8:O.isMarker(a)&&o.addFactory(t[O.extractDirectiveIndexFromMarker(a)])}let c=0;(O.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),c=-1);const h=o.behaviorFactories;return o.release(),{fragment:e,viewBehaviorFactories:h,hostBehaviorFactories:s,targetOffset:c}}const _s=document.createRange();class mr{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,o=this.lastChild;let s=this.firstChild,n;for(;s!==o;)n=s.nextSibling,e.insertBefore(s,t),s=n;e.insertBefore(o,t)}}remove(){const t=this.fragment,e=this.lastChild;let o=this.firstChild,s;for(;o!==e;)s=o.nextSibling,t.appendChild(o),o=s;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let o=this.firstChild,s;for(;o!==e;)s=o.nextSibling,t.removeChild(o),o=s;t.removeChild(e);const n=this.behaviors,a=this.source;for(let c=0,h=n.length;c<h;++c)n[c].unbind(a)}bind(t,e){const o=this.behaviors;if(this.source!==t)if(this.source!==null){const s=this.source;this.source=t,this.context=e;for(let n=0,a=o.length;n<a;++n){const c=o[n];c.unbind(s),c.bind(t,e)}}else{this.source=t,this.context=e;for(let s=0,n=o.length;s<n;++s)o[s].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let o=0,s=t.length;o<s;++o)t[o].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){_s.setStartBefore(t[0].firstChild),_s.setEndAfter(t[t.length-1].lastChild),_s.deleteContents();for(let e=0,o=t.length;e<o;++e){const s=t[e],n=s.behaviors,a=s.source;for(let c=0,h=n.length;c<h;++c)n[c].unbind(a)}}}}class br{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let u;const $=this.html;if(typeof $=="string"){u=document.createElement("template"),u.innerHTML=O.createHTML($);const k=u.content.firstElementChild;k!==null&&k.tagName==="TEMPLATE"&&(u=k)}else u=$;const y=ic(u,this.directives);this.fragment=y.fragment,this.viewBehaviorFactories=y.viewBehaviorFactories,this.hostBehaviorFactories=y.hostBehaviorFactories,this.targetOffset=y.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,s=new Array(this.behaviorCount),n=O.createTemplateWalker(e);let a=0,c=this.targetOffset,h=n.nextNode();for(let u=o.length;a<u;++a){const $=o[a],y=$.targetIndex;for(;h!==null;)if(c===y){s[a]=$.createBehavior(h);break}else h=n.nextNode(),c++}if(this.hasHostBehaviors){const u=this.hostBehaviorFactories;for(let $=0,y=u.length;$<y;++$,++a)s[a]=u[$].createBehavior(t)}return new mr(e,s)}render(t,e,o){typeof e=="string"&&(e=document.getElementById(e)),o===void 0&&(o=e);const s=this.create(o);return s.bind(t,Yi),s.appendTo(e),s}}const oc=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function x(i,...t){const e=[];let o="";for(let s=0,n=i.length-1;s<n;++s){const a=i[s];let c=t[s];if(o+=a,c instanceof br){const h=c;c=()=>h}if(typeof c=="function"&&(c=new js(c)),c instanceof pr){const h=oc.exec(a);h!==null&&(c.targetName=h[2])}c instanceof zo?(o+=c.createPlaceholder(e.length),e.push(c)):o+=c}return o+=i[i.length-1],new br(o,e)}class Nt{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}Nt.create=(()=>{if(O.supportsAdoptedStyleSheets){const i=new Map;return t=>new sc(t,i)}return i=>new ac(i)})();function Gs(i){return i.map(t=>t instanceof Nt?Gs(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function vr(i){return i.map(t=>t instanceof Nt?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}class sc extends Nt{constructor(t,e){super();this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=vr(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=Gs(t).map(o=>{if(o instanceof CSSStyleSheet)return o;let s=e.get(o);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(o),e.set(o,s)),s})}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter(o=>e.indexOf(o)===-1),super.removeStylesFrom(t)}}let nc=0;function rc(){return`fast-style-class-${++nc}`}class ac extends Nt{constructor(t){super();this.styles=t,this.behaviors=null,this.behaviors=vr(t),this.styleSheets=Gs(t),this.styleClass=rc()}addStylesTo(t){const e=this.styleSheets,o=this.styleClass;t=this.normalizeTarget(t);for(let s=0;s<e.length;s++){const n=document.createElement("style");n.innerHTML=e[s],n.className=o,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let o=0,s=e.length;o<s;++o)t.removeChild(e[o]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Mo={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},F={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class No{constructor(t,e,o=e.toLowerCase(),s="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=o,this.mode=s,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,s==="boolean"&&n===void 0&&(this.converter=Mo)}setValue(t,e){const o=t[this.fieldName],s=this.converter;s!==void 0&&(e=s.fromView(e)),o!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](o,e),t.$fastController.notify(this.name))}getValue(t){return N.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,o=this.guards;o.has(t)||e==="fromView"||O.queueUpdate(()=>{o.add(t);const s=t[this.fieldName];switch(e){case"reflect":const n=this.converter;O.setAttribute(t,this.attribute,n!==void 0?n.toView(s):s);break;case"boolean":O.setBooleanAttribute(t,this.attribute,s);break}o.delete(t)})}static collect(t,...e){const o=[];e.push(t.attributes);for(let s=0,n=e.length;s<n;++s){const a=e[s];if(a!==void 0)for(let c=0,h=a.length;c<h;++c){const u=a[c];typeof u=="string"?o.push(new No(t,u)):o.push(new No(t,u.property,u.attribute,u.mode,u.converter))}}return o}}function d(i,t){let e;function o(s,n){arguments.length>1&&(e.property=n),(s.constructor.attributes||(s.constructor.attributes=[])).push(e)}if(arguments.length>1){e={},o(i,t);return}return e=i===void 0?{}:i,o}const yr={mode:"open"},xr={},$r=new Map;class Ws{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const o=No.collect(t,e.attributes),s=new Array(o.length),n={},a={};for(let c=0,h=o.length;c<h;++c){const u=o[c];s[c]=u.attribute,n[u.name]=u,a[u.attribute]=u}this.attributes=o,this.observedAttributes=s,this.propertyLookup=n,this.attributeLookup=a,this.shadowOptions=e.shadowOptions===void 0?yr:e.shadowOptions===null?void 0:Object.assign(Object.assign({},yr),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?xr:Object.assign(Object.assign({},xr),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?Nt.create(e.styles):e.styles instanceof Nt?e.styles:Nt.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const o=this.attributes,s=e.prototype;for(let n=0,a=o.length;n<a;++n)N.defineProperty(s,o[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),$r.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return $r.get(t)}}const wr=new WeakMap,lc={bubbles:!0,composed:!0,cancelable:!0};function Xs(i){return i.shadowRoot||wr.get(i)||null}class Ys extends lr{constructor(t,e){super(t);this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const o=e.shadowOptions;if(o!==void 0){const n=t.attachShadow(o);o.mode==="closed"&&wr.set(t,n)}const s=N.getAccessors(t);if(s.length>0){const n=this.boundObservables=Object.create(null);for(let a=0,c=s.length;a<c;++a){const h=s[a].name,u=t[h];u!==void 0&&(delete t[h],n[h]=u)}}}get isConnected(){return N.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,N.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=Xs(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const o=t.behaviors;t.addStylesTo(e),o!==null&&this.addBehaviors(o)}}removeStyles(t){const e=Xs(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const o=t.behaviors;t.removeStylesFrom(e),o!==null&&this.removeBehaviors(o)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),o=t.length,s=[];for(let n=0;n<o;++n){const a=t[n];e.has(a)?e.set(a,e.get(a)+1):(e.set(a,1),s.push(a))}if(this._isConnected){const n=this.element;for(let a=0;a<s.length;++a)s[a].bind(n,Yi)}}removeBehaviors(t,e=!1){const o=this.behaviors;if(o===null)return;const s=t.length,n=[];for(let a=0;a<s;++a){const c=t[a];if(o.has(c)){const h=o.get(c)-1;h===0||e?o.delete(c)&&n.push(c):o.set(c,h)}}if(this._isConnected){const a=this.element;for(let c=0;c<n.length;++c)n[c].unbind(a)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,Yi);const e=this.behaviors;if(e!==null)for(const[o]of e)o.bind(t,Yi);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const o=this.element;for(const[s]of e)s.unbind(o)}}onAttributeChangedCallback(t,e,o){const s=this.definition.attributeLookup[t];s!==void 0&&s.onAttributeChangedCallback(this.element,o)}emit(t,e,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},lc),o))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const s=Object.keys(e);for(let n=0,a=s.length;n<a;++n){const c=s[n];t[c]=e[c]}this.boundObservables=null}const o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,o=Xs(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||O.removeChildNodes(o),t&&(this.view=t.render(e,o,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const o=Ws.forType(t.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new Ys(t,o)}}function kr(i){return class extends i{constructor(){super();Ys.forCustomElement(this)}$emit(t,e,o){return this.$fastController.emit(t,e,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,o){this.$fastController.onAttributeChangedCallback(t,e,o)}}}const Bo=Object.assign(kr(HTMLElement),{from(i){return kr(i)},define(i,t){return new Ws(i,t).define().type}});class Qs{createCSS(){return""}createBehavior(){}}function Cr(i,t){const e=[];let o="";const s=[];for(let n=0,a=i.length-1;n<a;++n){o+=i[n];let c=t[n];if(c instanceof Qs){const h=c.createBehavior();c=c.createCSS(),h&&s.push(h)}c instanceof Nt||c instanceof CSSStyleSheet?(o.trim()!==""&&(e.push(o),o=""),e.push(c)):o+=c}return o+=i[i.length-1],o.trim()!==""&&e.push(o),{styles:e,behaviors:s}}function v(i,...t){const{styles:e,behaviors:o}=Cr(i,t),s=Nt.create(e);return o.length&&s.withBehaviors(...o),s}class cc extends Qs{constructor(t,e){super();this.behaviors=e,this.css="";const o=t.reduce((s,n)=>(typeof n=="string"?this.css+=n:s.push(n),s),[]);o.length&&(this.styles=Nt.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function Tr(i,...t){const{styles:e,behaviors:o}=Cr(i,t);return new cc(e,o)}function pe(i,t,e){return{index:i,removed:t,addedCount:e}}const Ir=0,Fr=1,Zs=2,Js=3;function dc(i,t,e,o,s,n){const a=n-s+1,c=e-t+1,h=new Array(a);let u,$;for(let y=0;y<a;++y)h[y]=new Array(c),h[y][0]=y;for(let y=0;y<c;++y)h[0][y]=y;for(let y=1;y<a;++y)for(let k=1;k<c;++k)i[t+k-1]===o[s+y-1]?h[y][k]=h[y-1][k-1]:(u=h[y-1][k]+1,$=h[y][k-1]+1,h[y][k]=u<$?u:$);return h}function hc(i){let t=i.length-1,e=i[0].length-1,o=i[t][e];const s=[];for(;t>0||e>0;){if(t===0){s.push(Zs),e--;continue}if(e===0){s.push(Js),t--;continue}const n=i[t-1][e-1],a=i[t-1][e],c=i[t][e-1];let h;a<c?h=a<n?a:n:h=c<n?c:n,h===n?(n===o?s.push(Ir):(s.push(Fr),o=n),t--,e--):h===a?(s.push(Js),t--,o=a):(s.push(Zs),e--,o=c)}return s.reverse(),s}function uc(i,t,e){for(let o=0;o<e;++o)if(i[o]!==t[o])return o;return e}function pc(i,t,e){let o=i.length,s=t.length,n=0;for(;n<e&&i[--o]===t[--s];)n++;return n}function fc(i,t,e,o){return t<e||o<i?-1:t===e||o===i?0:i<e?t<o?t-e:o-e:o<t?o-i:t-i}function Sr(i,t,e,o,s,n){let a=0,c=0;const h=Math.min(e-t,n-s);if(t===0&&s===0&&(a=uc(i,o,h)),e===i.length&&n===o.length&&(c=pc(i,o,h-a)),t+=a,s+=a,e-=c,n-=c,e-t==0&&n-s==0)return ti;if(t===e){const G=pe(t,[],0);for(;s<n;)G.removed.push(o[s++]);return[G]}else if(s===n)return[pe(t,[],e-t)];const u=hc(dc(i,t,e,o,s,n)),$=[];let y,k=t,Y=s;for(let G=0;G<u.length;++G)switch(u[G]){case Ir:y!==void 0&&($.push(y),y=void 0),k++,Y++;break;case Fr:y===void 0&&(y=pe(k,[],0)),y.addedCount++,k++,y.removed.push(o[Y]),Y++;break;case Zs:y===void 0&&(y=pe(k,[],0)),y.addedCount++,k++;break;case Js:y===void 0&&(y=pe(k,[],0)),y.removed.push(o[Y]),Y++;break}return y!==void 0&&$.push(y),$}const Rr=Array.prototype.push;function gc(i,t,e,o){const s=pe(t,e,o);let n=!1,a=0;for(let c=0;c<i.length;c++){const h=i[c];if(h.index+=a,n)continue;const u=fc(s.index,s.index+s.removed.length,h.index,h.index+h.addedCount);if(u>=0){i.splice(c,1),c--,a-=h.addedCount-h.removed.length,s.addedCount+=h.addedCount-u;const $=s.removed.length+h.removed.length-u;if(!s.addedCount&&!$)n=!0;else{let y=h.removed;if(s.index<h.index){const k=s.removed.slice(0,h.index-s.index);Rr.apply(k,y),y=k}if(s.index+s.removed.length>h.index+h.addedCount){const k=s.removed.slice(h.index+h.addedCount-s.index);Rr.apply(y,k)}s.removed=y,h.index<s.index&&(s.index=h.index)}}else if(s.index<h.index){n=!0,i.splice(c,0,s),c++;const $=s.addedCount-s.removed.length;h.index+=$,a+=$}}n||i.push(s)}function mc(i){const t=[];for(let e=0,o=i.length;e<o;e++){const s=i[e];gc(t,s.index,s.removed,s.addedCount)}return t}function bc(i,t){let e=[];const o=mc(t);for(let s=0,n=o.length;s<n;++s){const a=o[s];if(a.addedCount===1&&a.removed.length===1){a.removed[0]!==i[a.index]&&e.push(a);continue}e=e.concat(Sr(i,a.index,a.index+a.addedCount,a.removed,0,a.removed.length))}return e}let Dr=!1;function Ks(i,t){let e=i.index;const o=t.length;return e>o?e=o-i.addedCount:e<0&&(e=o+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class vc extends Ho{constructor(t){super(t);this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,t.$fastController=this}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,O.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,O.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=e===void 0?bc(this.source,t):Sr(this.source,0,this.source.length,e,0,e.length);this.notify(o)}}function yc(){if(Dr)return;Dr=!0,N.setArrayObserverFactory(h=>new vc(h));const i=Array.prototype,t=i.pop,e=i.push,o=i.reverse,s=i.shift,n=i.sort,a=i.splice,c=i.unshift;i.pop=function(){const h=this.length>0,u=t.apply(this,arguments),$=this.$fastController;return $!==void 0&&h&&$.addSplice(pe(this.length,[u],0)),u},i.push=function(){const h=e.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(Ks(pe(this.length-arguments.length,[],arguments.length),this)),h},i.reverse=function(){let h;const u=this.$fastController;u!==void 0&&(u.flush(),h=this.slice());const $=o.apply(this,arguments);return u!==void 0&&u.reset(h),$},i.shift=function(){const h=this.length>0,u=s.apply(this,arguments),$=this.$fastController;return $!==void 0&&h&&$.addSplice(pe(0,[u],0)),u},i.sort=function(){let h;const u=this.$fastController;u!==void 0&&(u.flush(),h=this.slice());const $=n.apply(this,arguments);return u!==void 0&&u.reset(h),$},i.splice=function(){const h=a.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(Ks(pe(+arguments[0],h,arguments.length>2?arguments.length-2:0),this)),h},i.unshift=function(){const h=c.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(Ks(pe(0,[],arguments.length),this)),h}}class xc{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function W(i){return new Bs("fast-ref",xc,i)}function it(i,t){const e=typeof t=="function"?t:()=>t;return(o,s)=>i(o,s)?e(o,s):null}const $c=Object.freeze({positioning:!1});function wc(i,t,e,o){i.bind(t[e],o)}function kc(i,t,e,o){const s=Object.create(o);s.index=e,s.length=t.length,i.bind(t[e],s)}class Cc{constructor(t,e,o,s,n,a){this.location=t,this.itemsBinding=e,this.templateBinding=s,this.options=a,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=wc,this.itemsBindingObserver=N.binding(e,this,o),this.templateBindingObserver=N.binding(s,this,n),a.positioning&&(this.bindView=kc)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=ti;return}const e=this.itemsObserver,o=this.itemsObserver=N.getNotifier(this.items),s=e!==o;s&&e!==null&&e.unsubscribe(this),(s||t)&&o.subscribe(this)}updateViews(t){const e=this.childContext,o=this.views,s=[],n=this.bindView;let a=0;for(let u=0,$=t.length;u<$;++u){const y=t[u],k=y.removed;s.push(...o.splice(y.index+a,k.length)),a-=y.addedCount}const c=this.items,h=this.template;for(let u=0,$=t.length;u<$;++u){const y=t[u];let k=y.index;const Y=k+y.addedCount;for(;k<Y;++k){const G=o[k],K=G?G.firstChild:this.location,et=s.length>0?s.shift():h.create();o.splice(k,0,et),n(et,c,k,e),et.insertBefore(K)}}for(let u=0,$=s.length;u<$;++u)s[u].dispose();if(this.options.positioning)for(let u=0,$=o.length;u<$;++u){const y=o[u].context;y.length=$,y.index=u}}refreshAllViews(t=!1){const e=this.items,o=this.childContext,s=this.template,n=this.location,a=this.bindView;let c=e.length,h=this.views,u=h.length;if((c===0||t)&&(mr.disposeContiguousBatch(h),u=0),u===0){this.views=h=new Array(c);for(let $=0;$<c;++$){const y=s.create();a(y,e,$,o),h[$]=y,y.insertBefore(n)}}else{let $=0;for(;$<c;++$)if($<u){const k=h[$];a(k,e,$,o)}else{const k=s.create();a(k,e,$,o),h.push(k),k.insertBefore(n)}const y=h.splice($,u-$);for($=0,c=y.length;$<c;++$)y[$].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,o=t.length;e<o;++e)t[e].unbind()}}class Qi extends zo{constructor(t,e,o){super();this.itemsBinding=t,this.templateBinding=e,this.options=o,this.createPlaceholder=O.createBlockPlaceholder,yc(),this.isItemsBindingVolatile=N.isVolatileBinding(t),this.isTemplateBindingVolatile=N.isVolatileBinding(e)}createBehavior(t){return new Cc(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Ii(i,t,e=$c){const o=typeof t=="function"?t:()=>t;return new Qi(i,o,e)}function ei(i){return i?function(t,e,o){return t.nodeType===1&&t.matches(i)}:function(t,e,o){return t.nodeType===1}}class Er{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=N.getAccessors(t).some(o=>o.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(ti),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Tc extends Er{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function ct(i){return typeof i=="string"&&(i={property:i}),new Bs("fast-slotted",Tc,i)}class Ic extends Er{constructor(t,e){super(t,e);this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function tn(i){return typeof i=="string"&&(i={property:i}),new Bs("fast-children",Ic,i)}class Yt{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Bt=(i,t)=>x`
    <span
        part="end"
        ${W("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${W("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,jt=(i,t)=>x`
    <span
        part="start"
        ${W("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${W("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,Fc=x`
    <span part="end" ${W("endContainer")}>
        <slot
            name="end"
            ${W("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,Sc=x`
    <span part="start" ${W("startContainer")}>
        <slot
            name="start"
            ${W("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,Rc=(i,t)=>x`
    <template
        class="${e=>e.expanded?"expanded":""}"
        slot="item"
    >
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${W("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,o)=>e.clickHandler(o.event)}"
            >
                <span class="heading">
                    <slot name="heading" part="heading"></slot>
                </span>
            </button>
            ${jt(i,t)}
            ${Bt(i,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(i,t,e,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,o);else for(var c=i.length-1;c>=0;c--)(a=i[c])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n}const en=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let o=en.get(e);o===void 0&&en.set(e,o=new Map),o.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=en.get(t);if(e!==void 0)return e.get(i)});class Dc{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,zr(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:o,key:s}=this;return this.container=this.key=void 0,o.registerResolver(s,new re(s,t,e))}}function Zi(i){const t=i.slice(),e=Object.keys(i),o=e.length;let s;for(let n=0;n<o;++n)s=e[n],jr(s)||(t[s]=i[s]);return t}const Ec=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new re(i,1,i)},transient(i){return new re(i,2,i)}}),on=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Ec.singleton})}),Or=new Map;function Lr(i){return t=>Reflect.getOwnMetadata(i,t)}let Pr=null;const pt=Object.freeze({createContainer(i){return new Ji(null,Object.assign({},on.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:pt.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(Hr,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||pt.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new Ji(i,Object.assign({},on.default,t,{parentLocator:pt.findParentContainer})):Pr||(Pr=new Ji(null,Object.assign({},on.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Lr("design:paramtypes"),getAnnotationParamtypes:Lr("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=Or.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const o=pt.getDesignParamtypes(i),s=pt.getAnnotationParamtypes(i);if(o===void 0)if(s===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=Zi(pt.getDependencies(n)):t=[]}else t=Zi(s);else if(s===void 0)t=Zi(o);else{t=Zi(o);let n=s.length,a;for(let u=0;u<n;++u)a=s[u],a!==void 0&&(t[u]=a);const c=Object.keys(s);n=c.length;let h;for(let u=0;u<n;++u)h=c[u],jr(h)||(t[h]=s[h])}}else t=Zi(e);Or.set(i,t)}return t},defineProperty(i,t,e,o=!1){const s=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[s];if(n===void 0&&(n=(this instanceof HTMLElement?pt.findResponsibleContainer(this):pt.getOrCreateDOMContainer()).get(e),this[s]=n,o&&this instanceof Bo)){const c=this.$fastController,h=()=>{const $=pt.findResponsibleContainer(this).get(e),y=this[s];$!==y&&(this[s]=n,c.notify(t))};c.subscribe({handleChange:h},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,o=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Nr,s=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(a,c,h){if(a==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(c)pt.defineProperty(a,c,n,s);else{const u=pt.getOrCreateAnnotationParamTypes(a);u[h]=n}};return n.$isInterface=!0,n.friendlyName=o==null?"(anonymous)":o,e!=null&&(n.register=function(a,c){return e(new Dc(a,c!=null?c:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,o){if(typeof o=="number"){const s=pt.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(s[o]=n)}else if(e)pt.defineProperty(t,e,i[0]);else{const s=o?pt.getOrCreateAnnotationParamTypes(o.value):pt.getOrCreateAnnotationParamTypes(t);let n;for(let a=0;a<i.length;++a)n=i[a],n!==void 0&&(s[a]=n)}}},transient(i){return i.register=function(e){return Ki.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=Lc){return i.register=function(o){return Ki.singleton(i,i).register(o)},i.registerInRequestor=t.scoped,i}}),Oc=pt.createInterface("Container");pt.inject;const Lc={scoped:!1};class re{constructor(t,e,o){this.key=t,this.strategy=e,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const o=t.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,o,s;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(s=(o=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||o===void 0?void 0:o.call(e,t))!==null&&s!==void 0?s:null;default:return null}}}function Ar(i){return this.get(i)}function Pc(i,t){return t(i)}class Ac{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let o;return e===void 0?o=new this.Type(...this.dependencies.map(Ar,t)):o=new this.Type(...this.dependencies.map(Ar,t),...e),this.transformers==null?o:this.transformers.reduce(Pc,o)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const Vc={$isResolver:!0,resolve(i,t){return t}};function jo(i){return typeof i.register=="function"}function Hc(i){return jo(i)&&typeof i.registerInRequestor=="boolean"}function Vr(i){return Hc(i)&&i.registerInRequestor}function zc(i){return i.prototype!==void 0}const Mc=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Hr="__DI_LOCATE_PARENT__",sn=new Map;class Ji{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Oc,Vc),t instanceof Node&&t.addEventListener(Hr,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth==100)throw new Error("Unable to autoregister dependency");let e,o,s,n,a;const c=this.context;for(let h=0,u=t.length;h<u;++h)if(e=t[h],!!Br(e))if(jo(e))e.register(this,c);else if(zc(e))Ki.singleton(e,e).register(this);else for(o=Object.keys(e),n=0,a=o.length;n<a;++n)s=e[o[n]],!!Br(s)&&(jo(s)?s.register(this,c):this.register(s));return--this.registerDepth,this}registerResolver(t,e){Uo(t);const o=this.resolvers,s=o.get(t);return s==null?o.set(t,e):s instanceof re&&s.strategy===4?s.state.push(e):o.set(t,new re(t,4,[s,e])),e}registerTransformer(t,e){const o=this.getResolver(t);if(o==null)return!1;if(o.getFactory){const s=o.getFactory(this);return s==null?!1:(s.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(Uo(t),t.resolve!==void 0)return t;let o=this,s;for(;o!=null;)if(s=o.resolvers.get(t),s==null){if(o.parent==null){const n=Vr(t)?this:o;return e?this.jitRegister(t,n):null}o=o.parent}else return s;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(Uo(t),t.$isResolver)return t.resolve(this,this);let e=this,o;for(;e!=null;)if(o=e.resolvers.get(t),o==null){if(e.parent==null){const s=Vr(t)?this:e;return o=this.jitRegister(t,s),o.resolve(e,this)}e=e.parent}else return o.resolve(e,this);throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){Uo(t);const o=this;let s=o,n;if(e){let a=ti;for(;s!=null;)n=s.resolvers.get(t),n!=null&&(a=a.concat(Mr(n,s,o))),s=s.parent;return a}else for(;s!=null;)if(n=s.resolvers.get(t),n==null){if(s=s.parent,s==null)return ti}else return Mr(n,s,o);return ti}getFactory(t){let e=sn.get(t);if(e===void 0){if(Nc(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);sn.set(t,e=new Ac(t,pt.getDependencies(t)))}return e}registerFactory(t,e){sn.set(t,e)}createChild(t){return new Ji(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(Mc.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(jo(t)){const o=t.register(e);if(!(o instanceof Object)||o.resolve==null){const s=e.resolvers.get(t);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const o=this.config.defaultResolver(t,e);return e.resolvers.set(t,o),o}}}}const nn=new WeakMap;function zr(i){return function(t,e,o){if(nn.has(o))return nn.get(o);const s=i(t,e,o);return nn.set(o,s),s}}const Ki=Object.freeze({instance(i,t){return new re(i,0,t)},singleton(i,t){return new re(i,1,t)},transient(i,t){return new re(i,2,t)},callback(i,t){return new re(i,3,t)},cachedCallback(i,t){return new re(i,3,zr(t))},aliasTo(i,t){return new re(t,5,i)}});function Uo(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Mr(i,t,e){if(i instanceof re&&i.strategy===4){const o=i.state;let s=o.length;const n=new Array(s);for(;s--;)n[s]=o[s].resolve(t,e);return n}return[i.resolve(t,e)]}const Nr="(anonymous)";function Br(i){return typeof i=="object"&&i!==null||typeof i=="function"}const Nc=function(){const i=new WeakMap;let t=!1,e="",o=0;return function(s){return t=i.get(s),t===void 0&&(e=s.toString(),o=e.length,t=o>=29&&o<=100&&e.charCodeAt(o-1)===125&&e.charCodeAt(o-2)<=32&&e.charCodeAt(o-3)===93&&e.charCodeAt(o-4)===101&&e.charCodeAt(o-5)===100&&e.charCodeAt(o-6)===111&&e.charCodeAt(o-7)===99&&e.charCodeAt(o-8)===32&&e.charCodeAt(o-9)===101&&e.charCodeAt(o-10)===118&&e.charCodeAt(o-11)===105&&e.charCodeAt(o-12)===116&&e.charCodeAt(o-13)===97&&e.charCodeAt(o-14)===110&&e.charCodeAt(o-15)===88,i.set(s,t)),t}}(),qo={};function jr(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=qo[i];if(t!==void 0)return t;const e=i.length;if(e===0)return qo[i]=!1;let o=0;for(let s=0;s<e;++s)if(o=i.charCodeAt(s),s===0&&o===48&&e>1||o<48||o>57)return qo[i]=!1;return qo[i]=!0}default:return!1}}function Ur(i){return`${i.toLowerCase()}:presentation`}const _o=new Map,qr=Object.freeze({define(i,t,e){const o=Ur(i);_o.get(o)===void 0?_o.set(o,t):_o.set(o,!1),e.register(Ki.instance(o,t))},forTag(i,t){const e=Ur(i),o=_o.get(e);return o===!1?pt.findResponsibleContainer(t).get(e):o||null}});class Bc{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?Nt.create(e):e instanceof Nt?e:Nt.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class P extends Bo{constructor(){super(...arguments);this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=qr.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new jc(this===P?class extends P{}:this,t,e)}}r([f],P.prototype,"template",void 0);r([f],P.prototype,"styles",void 0);function to(i,t,e){return typeof i=="function"?i(t,e):i}class jc{constructor(t,e,o){this.type=t,this.elementDefinition=e,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const o=this.definition,s=this.overrideDefinition,a=`${o.prefix||e.elementPrefix}-${o.baseName}`;e.tryDefineElement({name:a,type:this.type,baseClass:this.elementDefinition.baseClass,callback:c=>{const h=new Bc(to(o.template,c,o),to(o.styles,c,o));c.definePresentation(h);let u=to(o.shadowOptions,c,o);c.shadowRootMode&&(u?s.shadowOptions||(u.mode=c.shadowRootMode):u!==null&&(u={mode:c.shadowRootMode})),c.defineElement({elementOptions:to(o.elementOptions,c,o),shadowOptions:u,attributes:to(o.attributes,c,o)})}})}}function ht(i,...t){t.forEach(e=>{if(Object.getOwnPropertyNames(e.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(i.prototype,o,Object.getOwnPropertyDescriptor(e.prototype,o))}),e.attributes){const o=i.attributes||[];i.attributes=o.concat(e.attributes)}})}class ii extends P{constructor(){super(...arguments);this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}r([d({attribute:"heading-level",mode:"fromView",converter:F})],ii.prototype,"headinglevel",void 0);r([d({mode:"boolean"})],ii.prototype,"expanded",void 0);r([d],ii.prototype,"id",void 0);ht(ii,Yt);const Uc=(i,t)=>x`
    <template>
        <slot name="item" part="item" ${ct("accordionItems")}></slot>
    </template>
`;var ut;(function(i){i.horizontal="horizontal",i.vertical="vertical"})(ut||(ut={}));function qc(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function Fi(...i){return i.every(t=>t instanceof HTMLElement)}function _c(i,t){return!i||!t||!Fi(i)?void 0:Array.from(i.querySelectorAll(t)).filter(o=>o.offsetParent!==null)}function Gc(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let oi;function Wc(){if(typeof oi=="boolean")return oi;if(!qc())return oi=!1,oi;const i=document.createElement("style"),t=Gc();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),oi=!0}catch{oi=!1}finally{document.head.removeChild(i)}return oi}const _r="focus",Gr="focusin",Si="focusout",Ri="keydown",Wr="resize",Xr="scroll";var Yr;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Yr||(Yr={}));const fe="ArrowDown",Se="ArrowLeft",Re="ArrowRight",ge="ArrowUp",ve="Enter",eo="Escape",Be="Home",je="End",Xc="F2",Yc="PageDown",Qc="PageUp",io=" ",Qr="Tab",Zc="Backspace",Jc="Delete",Di={ArrowDown:fe,ArrowLeft:Se,ArrowRight:Re,ArrowUp:ge};var dt;(function(i){i.ltr="ltr",i.rtl="rtl"})(dt||(dt={}));function Zr(i,t,e){return e<i?t:e>t?i:e}function rn(i,t,e){return Math.min(Math.max(e,i),t)}let Kc=0;function Go(i=""){return`${i}${Kc++}`}var l;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(l||(l={}));var Wo;(function(i){i.single="single",i.multi="multi"})(Wo||(Wo={}));class an extends P{constructor(){super(...arguments);this.expandmode=Wo.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,o)=>{e instanceof ii&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==o?e.expanded=!1:e.expanded=!0));const s=this.accordionIds[o];e.setAttribute("id",typeof s!="string"?`accordion-${o+1}`:s),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,o)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{const e=t.target;this.activeid=t.target.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(o=>{!o.hasAttribute("disabled")&&o.id!==this.activeid&&o.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case ge:t.preventDefault(),this.adjust(-1);break;case fe:t.preventDefault(),this.adjust(1);break;case Be:this.activeItemIndex=0,this.focusItem();break;case je:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,o=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==o&&o!==-1&&(this.activeItemIndex=o,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Wo.single}adjust(t){this.activeItemIndex=Zr(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof ii&&t.expandbutton.focus()}}r([d({attribute:"expand-mode"})],an.prototype,"expandmode",void 0);r([f],an.prototype,"accordionItems",void 0);const Jr=(i,t)=>x`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${W("control")}
    >
        ${jt(i,t)}
        <span class="content" part="content">
            <slot ${ct("defaultSlottedContent")}></slot>
        </span>
        ${Bt(i,t)}
    </a>
`;class lt{}r([d({attribute:"aria-atomic",mode:"fromView"})],lt.prototype,"ariaAtomic",void 0);r([d({attribute:"aria-busy",mode:"fromView"})],lt.prototype,"ariaBusy",void 0);r([d({attribute:"aria-controls",mode:"fromView"})],lt.prototype,"ariaControls",void 0);r([d({attribute:"aria-current",mode:"fromView"})],lt.prototype,"ariaCurrent",void 0);r([d({attribute:"aria-describedby",mode:"fromView"})],lt.prototype,"ariaDescribedby",void 0);r([d({attribute:"aria-details",mode:"fromView"})],lt.prototype,"ariaDetails",void 0);r([d({attribute:"aria-disabled",mode:"fromView"})],lt.prototype,"ariaDisabled",void 0);r([d({attribute:"aria-errormessage",mode:"fromView"})],lt.prototype,"ariaErrormessage",void 0);r([d({attribute:"aria-flowto",mode:"fromView"})],lt.prototype,"ariaFlowto",void 0);r([d({attribute:"aria-haspopup",mode:"fromView"})],lt.prototype,"ariaHaspopup",void 0);r([d({attribute:"aria-hidden",mode:"fromView"})],lt.prototype,"ariaHidden",void 0);r([d({attribute:"aria-invalid",mode:"fromView"})],lt.prototype,"ariaInvalid",void 0);r([d({attribute:"aria-keyshortcuts",mode:"fromView"})],lt.prototype,"ariaKeyshortcuts",void 0);r([d({attribute:"aria-label",mode:"fromView"})],lt.prototype,"ariaLabel",void 0);r([d({attribute:"aria-labelledby",mode:"fromView"})],lt.prototype,"ariaLabelledby",void 0);r([d({attribute:"aria-live",mode:"fromView"})],lt.prototype,"ariaLive",void 0);r([d({attribute:"aria-owns",mode:"fromView"})],lt.prototype,"ariaOwns",void 0);r([d({attribute:"aria-relevant",mode:"fromView"})],lt.prototype,"ariaRelevant",void 0);r([d({attribute:"aria-roledescription",mode:"fromView"})],lt.prototype,"ariaRoledescription",void 0);class ee extends P{constructor(){super(...arguments);this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((t=this.$fastController.definition.shadowOptions)===null||t===void 0?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}r([d],ee.prototype,"download",void 0);r([d],ee.prototype,"href",void 0);r([d],ee.prototype,"hreflang",void 0);r([d],ee.prototype,"ping",void 0);r([d],ee.prototype,"referrerpolicy",void 0);r([d],ee.prototype,"rel",void 0);r([d],ee.prototype,"target",void 0);r([d],ee.prototype,"type",void 0);r([f],ee.prototype,"defaultSlottedContent",void 0);class Xo{}r([d({attribute:"aria-expanded",mode:"fromView"})],Xo.prototype,"ariaExpanded",void 0);ht(Xo,lt);ht(ee,Yt,Xo);const td=(i,t)=>x`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${it(e=>e.initialLayoutComplete,x`
                <slot></slot>
            `)}
    </template>
`,si=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?dt.rtl:dt.ltr};class ed{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var o;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(o=this.observedElements.get(t))===null||o===void 0||o.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const o=this.observedElements.get(t);if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}},this.initializeIntersectionDetector=()=>{!Vo.IntersectionObserver||(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],o=[];t.forEach(s=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(s.target);const a=this.observedElements.get(s.target);a!==void 0&&(a.forEach(c=>{let h=e.indexOf(c);h===-1&&(h=e.length,e.push(c),o.push([])),o[h].push(s)}),this.observedElements.delete(s.target))}),e.forEach((s,n)=>{s(o[n])})},this.initializeIntersectionDetector()}}class U extends P{constructor(){super(...arguments);this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=dt.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(U.intersectionService.requestPosition(this,this.handleIntersection),U.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&U.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,U.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&U.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&U.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{!this.pendingPositioningUpdate||(this.pendingPositioningUpdate=!1,!!this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),o=t.find(n=>n.target===this.anchorElement),s=t.find(n=>n.target===this.viewportElement);return e===void 0||s===void 0||o===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,o.boundingClientRect)||this.isRectDifferent(this.viewportRect,s.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=o.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(s.boundingClientRect.x+document.documentElement.scrollLeft,s.boundingClientRect.y+document.documentElement.scrollTop,s.boundingClientRect.width,s.boundingClientRect.height):this.viewportRect=s.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{!this.pendingReset||(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=si(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let k=this.horizontalDefaultPosition;if(k==="start"||k==="end"){const Y=si(this);if(Y!==this.currentDirection){this.currentDirection=Y,this.initialize();return}this.currentDirection===dt.ltr?k=k==="start"?"left":"right":k=k==="start"?"right":"left"}switch(k){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const a=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,c=this.anchorRect!==void 0?this.anchorRect.left:0,h=this.anchorRect!==void 0?this.anchorRect.right:0,u=this.anchorRect!==void 0?this.anchorRect.width:0,$=this.viewportRect!==void 0?this.viewportRect.left:0,y=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,c,h,u,$,y)<a)&&(e=this.getAvailableSpace(n[0],c,h,u,$,y)>this.getAvailableSpace(n[1],c,h,u,$,y)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const a=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,c=this.anchorRect!==void 0?this.anchorRect.top:0,h=this.anchorRect!==void 0?this.anchorRect.bottom:0,u=this.anchorRect!==void 0?this.anchorRect.height:0,$=this.viewportRect!==void 0?this.viewportRect.top:0,y=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,c,h,u,$,y)<a)&&(t=this.getAvailableSpace(n[0],c,h,u,$,y)>this.getAvailableSpace(n[1],c,h,u,$,y)?n[0]:n[1])}const o=this.getNextRegionDimension(e,t),s=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,o),this.setVerticalPosition(t,o),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),s&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let o=0;switch(this.horizontalScaling){case"anchor":case"fill":o=e.width,this.regionWidth=`${o}px`;break;case"content":o=this.regionRect.width,this.regionWidth="unset";break}let s=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-o,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-o+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(s=(this.anchorRect.width-o)/2,this.translateX=this.baseHorizontalOffset+s,this.horizontalViewportLock){const n=this.anchorRect.left+s,a=this.anchorRect.right-s;n<this.viewportRect.left&&!(a>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):a>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(a-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let o=0;switch(this.verticalScaling){case"anchor":case"fill":o=e.height,this.regionHeight=`${o}px`;break;case"content":o=this.regionRect.height,this.regionHeight="unset";break}let s=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-o,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-o+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(s=(this.anchorRect.height-o)/2,this.translateY=this.baseVerticalOffset+s,this.verticalViewportLock){const n=this.anchorRect.top+s,a=this.anchorRect.bottom-s;n<this.viewportRect.top&&!(a>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):a>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(a-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,o,s,n,a)=>{const c=e-n,h=a-(e+s);switch(t){case"start":return c;case"insetStart":return c+s;case"insetEnd":return h+s;case"end":return h;case"center":return Math.min(c,h)*2+s}},this.getNextRegionDimension=(t,e)=>{const o={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?o.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(o.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?o.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(o.height=this.anchorRect!==void 0?this.anchorRect.height:0),o},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Wr,this.update,{passive:!0}),window.addEventListener(Xr,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Wr,this.update),window.removeEventListener(Xr,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),O.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}U.intersectionService=new ed;r([d],U.prototype,"anchor",void 0);r([d],U.prototype,"viewport",void 0);r([d({attribute:"horizontal-positioning-mode"})],U.prototype,"horizontalPositioningMode",void 0);r([d({attribute:"horizontal-default-position"})],U.prototype,"horizontalDefaultPosition",void 0);r([d({attribute:"horizontal-viewport-lock",mode:"boolean"})],U.prototype,"horizontalViewportLock",void 0);r([d({attribute:"horizontal-inset",mode:"boolean"})],U.prototype,"horizontalInset",void 0);r([d({attribute:"horizontal-threshold"})],U.prototype,"horizontalThreshold",void 0);r([d({attribute:"horizontal-scaling"})],U.prototype,"horizontalScaling",void 0);r([d({attribute:"vertical-positioning-mode"})],U.prototype,"verticalPositioningMode",void 0);r([d({attribute:"vertical-default-position"})],U.prototype,"verticalDefaultPosition",void 0);r([d({attribute:"vertical-viewport-lock",mode:"boolean"})],U.prototype,"verticalViewportLock",void 0);r([d({attribute:"vertical-inset",mode:"boolean"})],U.prototype,"verticalInset",void 0);r([d({attribute:"vertical-threshold"})],U.prototype,"verticalThreshold",void 0);r([d({attribute:"vertical-scaling"})],U.prototype,"verticalScaling",void 0);r([d({attribute:"fixed-placement",mode:"boolean"})],U.prototype,"fixedPlacement",void 0);r([d({attribute:"auto-update-mode"})],U.prototype,"autoUpdateMode",void 0);r([f],U.prototype,"anchorElement",void 0);r([f],U.prototype,"viewportElement",void 0);r([f],U.prototype,"initialLayoutComplete",void 0);const id=(i,t)=>x`
    <div
        class="backplate ${e=>e.shape}"
        part="backplate"
        style="${e=>e.fill?`background-color: var(--avatar-fill-${e.fill});`:void 0}"
    >
        <a
            class="link"
            part="link"
            href="${e=>e.link?e.link:void 0}"
            style="${e=>e.color?`color: var(--avatar-color-${e.color});`:void 0}"
        >
            <slot name="media" part="media">${t.media||""}</slot>
            <slot class="content" part="content"><slot>
        </a>
    </div>
    <slot name="badge" part="badge"></slot>
`;class Ei extends P{connectedCallback(){super.connectedCallback(),this.shape||(this.shape="circle")}}r([d],Ei.prototype,"fill",void 0);r([d],Ei.prototype,"color",void 0);r([d],Ei.prototype,"link",void 0);r([d],Ei.prototype,"shape",void 0);const od=(i,t)=>x`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class ni extends P{constructor(){super(...arguments);this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}}r([d({attribute:"fill"})],ni.prototype,"fill",void 0);r([d({attribute:"color"})],ni.prototype,"color",void 0);r([d({mode:"boolean"})],ni.prototype,"circular",void 0);const sd=(i,t)=>x`
    <div role="listitem" class="listitem" part="listitem">
        ${it(e=>e.href&&e.href.length>0,x`
                ${Jr(i,t)}
            `)}
        ${it(e=>!e.href,x`
                ${jt(i,t)}
                <slot></slot>
                ${Bt(i,t)}
            `)}
        ${it(e=>e.separator,x`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Oi extends ee{constructor(){super(...arguments);this.separator=!0}}r([f],Oi.prototype,"separator",void 0);ht(Oi,Yt,Xo);const nd=(i,t)=>x`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${ct({property:"slottedBreadcrumbItems",filter:ei()})}
            ></slot>
        </div>
    </template>
`;class Kr extends P{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.setItemSeparator(t),this.setLastItemAriaCurrent(t)}}setItemSeparator(t){this.slottedBreadcrumbItems.forEach(e=>{e instanceof Oi&&(e.separator=!0)}),t instanceof Oi&&(t.separator=!1)}findChildWithHref(t){var e,o;return t.childElementCount>0?t.querySelector("a[href]"):((e=t.shadowRoot)===null||e===void 0?void 0:e.childElementCount)?(o=t.shadowRoot)===null||o===void 0?void 0:o.querySelector("a[href]"):null}setLastItemAriaCurrent(t){const e=this.findChildWithHref(t);e===null&&t.hasAttribute("href")&&t instanceof Oi?t.ariaCurrent="page":e!==null&&e.setAttribute("aria-current","page")}}r([f],Kr.prototype,"slottedBreadcrumbItems",void 0);const rd=(i,t)=>x`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${W("control")}
    >
        ${jt(i,t)}
        <span class="content" part="content">
            <slot ${ct("defaultSlottedContent")}></slot>
        </span>
        ${Bt(i,t)}
    </button>
`,ta="form-associated-proxy",ea="ElementInternals",ia=ea in window&&"setFormValue"in window[ea].prototype,oa=new Map;function ye(i){const t=class extends i{constructor(...e){super(...e);this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return ia}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=e?o.concat(Array.from(e)):o;return Object.freeze(s)}else return ti}valueChanged(e,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),O.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),O.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!ia)return null;let e=oa.get(this);return e||(e=this.attachInternals(),oa.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,o,s){this.elementInternals?this.elementInternals.setValidity(e,o,s):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ta),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ta)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,o){this.elementInternals&&this.elementInternals.setFormValue(e,o||e)}_keypressHandler(e){switch(e.key){case ve:if(this.form instanceof HTMLFormElement){const o=this.form.querySelector("[type=submit]");o==null||o.click()}break}}stopPropagation(e){e.stopPropagation()}};return d({mode:"boolean"})(t.prototype,"disabled"),d({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),d({attribute:"current-value"})(t.prototype,"currentValue"),d(t.prototype,"name"),d({mode:"boolean"})(t.prototype,"required"),f(t.prototype,"value"),t}function ln(i){class t extends ye(i){}class e extends t{constructor(...s){super(s);this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(s,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),s!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(s,n){this.checked=this.currentChecked}updateForm(){const s=this.checked?this.value:null;this.setFormValue(s,s)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return d({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),d({attribute:"current-checked",converter:Mo})(e.prototype,"currentChecked"),f(e.prototype,"defaultChecked"),f(e.prototype,"checked"),e}class ad extends P{}class ld extends ye(ad){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class Qt extends ld{constructor(){super(...arguments);this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((t=this.$fastController.definition.shadowOptions)===null||t===void 0?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}r([d({mode:"boolean"})],Qt.prototype,"autofocus",void 0);r([d({attribute:"form"})],Qt.prototype,"formId",void 0);r([d],Qt.prototype,"formaction",void 0);r([d],Qt.prototype,"formenctype",void 0);r([d],Qt.prototype,"formmethod",void 0);r([d({mode:"boolean"})],Qt.prototype,"formnovalidate",void 0);r([d],Qt.prototype,"formtarget",void 0);r([d],Qt.prototype,"type",void 0);r([f],Qt.prototype,"defaultSlottedContent",void 0);class Yo{}r([d({attribute:"aria-expanded",mode:"fromView"})],Yo.prototype,"ariaExpanded",void 0);r([d({attribute:"aria-pressed",mode:"fromView"})],Yo.prototype,"ariaPressed",void 0);ht(Yo,lt);ht(Qt,Yt,Yo);class cd{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const o=t[e];e==="date"?this.date=this.getDateObject(o):this[e]=o}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:o,year:s}=t;return new Date(s,o-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},o=this.locale){const s=this.getDateObject(t),n=Object.assign({timeZone:"utc"},e);return new Intl.DateTimeFormat(o,n).format(s)}getDay(t=this.date.getDate(),e=this.dayFormat,o=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},o)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,o=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},o)}getYear(t=this.date.getFullYear(),e=this.yearFormat,o=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},o)}getWeekday(t=0,e=this.weekdayFormat,o=this.locale){const s=`1-${t+1}-2017`;return this.getDate(s,{weekday:e},o)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((o,s)=>this.getWeekday(s,t,e))}}class ae extends P{constructor(){super(...arguments);this.dateFormatter=new cd,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const o=h=>new Date(h.getFullYear(),h.getMonth(),1).getDay(),s=h=>{const u=new Date(h.getFullYear(),h.getMonth()+1,1);return new Date(u.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),a=new Date(e,t),c=new Date(e,t-2);return{length:s(n),month:t,start:o(n),year:e,previous:{length:s(c),month:c.getMonth()+1,start:o(c),year:c.getFullYear()},next:{length:s(a),month:a.getMonth()+1,start:o(a),year:a.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:o,length:s,previous:n,next:a}=t,c=[];let h=1-o;for(;h<s+1||c.length<e||c[c.length-1].length%7!=0;){const{month:u,year:$}=h<1?n:h>s?a:t,y=h<1?n.length+h:h>s?h-s:h,k=`${u}-${y}-${$}`,Y=this.dateInString(k,this.disabledDates),G=this.dateInString(k,this.selectedDates),K={day:y,month:u,year:$,disabled:Y,selected:G},et=c[c.length-1];c.length===0||et.length%7==0?c.push([K]):et.push(K),h++}return c}dateInString(t,e){const o=e.split(",").map(s=>s.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,o.some(s=>s===t)}getDayClassNames(t,e){const{day:o,month:s,year:n,disabled:a,selected:c}=t,h=e===`${s}-${o}-${n}`,u=this.month!==s;return["day",h&&"today",u&&"inactive",a&&"disabled",c&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((o,s)=>{o.abbr=e[s]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===ve&&this.handleDateSelect(t,e),!0}}r([d({mode:"boolean"})],ae.prototype,"readonly",void 0);r([d],ae.prototype,"locale",void 0);r([d({converter:F})],ae.prototype,"month",void 0);r([d({converter:F})],ae.prototype,"year",void 0);r([d({attribute:"day-format",mode:"fromView"})],ae.prototype,"dayFormat",void 0);r([d({attribute:"weekday-format",mode:"fromView"})],ae.prototype,"weekdayFormat",void 0);r([d({attribute:"month-format",mode:"fromView"})],ae.prototype,"monthFormat",void 0);r([d({attribute:"year-format",mode:"fromView"})],ae.prototype,"yearFormat",void 0);r([d({attribute:"min-weeks",converter:F})],ae.prototype,"minWeeks",void 0);r([d({attribute:"disabled-dates"})],ae.prototype,"disabledDates",void 0);r([d({attribute:"selected-dates"})],ae.prototype,"selectedDates",void 0);var Li;(function(i){i.none="none",i.default="default",i.sticky="sticky"})(Li||(Li={}));var xe;(function(i){i.default="default",i.columnHeader="columnheader",i.rowHeader="rowheader"})(xe||(xe={}));var ri;(function(i){i.default="default",i.header="header",i.stickyHeader="sticky-header"})(ri||(ri={}));class Dt extends P{constructor(){super(...arguments);this.rowType=ri.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Qi(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Si,this.handleFocusout),this.addEventListener(Ri,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Si,this.handleFocusout),this.removeEventListener(Ri,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case Se:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Re:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case Be:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case je:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ri.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===ri.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}r([d({attribute:"grid-template-columns"})],Dt.prototype,"gridTemplateColumns",void 0);r([d({attribute:"row-type"})],Dt.prototype,"rowType",void 0);r([f],Dt.prototype,"rowData",void 0);r([f],Dt.prototype,"columnDefinitions",void 0);r([f],Dt.prototype,"cellItemTemplate",void 0);r([f],Dt.prototype,"headerCellItemTemplate",void 0);r([f],Dt.prototype,"rowIndex",void 0);r([f],Dt.prototype,"isActiveRow",void 0);r([f],Dt.prototype,"activeCellItemTemplate",void 0);r([f],Dt.prototype,"defaultCellItemTemplate",void 0);r([f],Dt.prototype,"defaultHeaderCellItemTemplate",void 0);r([f],Dt.prototype,"cellElements",void 0);function dd(i){const t=i.tagFor(Dt);return x`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,o)=>o.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,o)=>o.parent.headerCellItemTemplate}"
    ></${t}>
`}const hd=(i,t)=>{const e=dd(i),o=i.tagFor(Dt);return x`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>o}"
            :defaultRowItemTemplate="${e}"
            ${tn({property:"rowElements",filter:ei("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class Ft extends P{constructor(){super();this.generateHeader=Li.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,o)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const s=Math.max(0,Math.min(this.rowElements.length-1,t)),a=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),c=Math.max(0,Math.min(a.length-1,e)),h=a[c];o&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&h.scrollIntoView({block:"center",inline:"center"}),h.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(o=>{o.addedNodes.forEach(s=>{s.nodeType===1&&s.getAttribute("role")==="row"&&(s.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,O.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{const t=this.gridTemplateColumns===void 0?this.generatedGridTemplateColumns:this.gridTemplateColumns;this.rowElements.forEach((e,o)=>{const s=e;s.rowIndex=o,s.gridTemplateColumns=t,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(o=>{e=`${e}${e===""?"":" "}1fr`}),e}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Ft.generateColumns(this.rowsData[0]))}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Ft.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Qi(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(_r,this.handleFocus),this.addEventListener(Ri,this.handleKeydown),this.addEventListener(Si,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),O.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(_r,this.handleFocus),this.removeEventListener(Ri,this.handleKeydown),this.removeEventListener(Si,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex","0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const o=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,n=this.rowElements[o];switch(t.key){case ge:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case fe:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Qc:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const a=this.rowElements[e];if(a.offsetTop<this.scrollTop){this.scrollTop=a.offsetTop+a.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case Yc:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=o||n.offsetTop+n.offsetHeight<=s){this.focusOnCell(o,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=o;e++){const a=this.rowElements[e];if(a.offsetTop+a.offsetHeight>s){let c=0;this.generateHeader===Li.sticky&&this.generatedHeader!==null&&(c=this.generatedHeader.clientHeight),this.scrollTop=a.offsetTop-c;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case Be:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case je:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,O.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Li.none){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Li.sticky?ri.stickyHeader:ri.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}Ft.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));r([d({attribute:"generate-header"})],Ft.prototype,"generateHeader",void 0);r([d({attribute:"grid-template-columns"})],Ft.prototype,"gridTemplateColumns",void 0);r([f],Ft.prototype,"rowsData",void 0);r([f],Ft.prototype,"columnDefinitions",void 0);r([f],Ft.prototype,"rowItemTemplate",void 0);r([f],Ft.prototype,"cellItemTemplate",void 0);r([f],Ft.prototype,"headerCellItemTemplate",void 0);r([f],Ft.prototype,"focusRowIndex",void 0);r([f],Ft.prototype,"focusColumnIndex",void 0);r([f],Ft.prototype,"defaultRowItemTemplate",void 0);r([f],Ft.prototype,"rowElementTag",void 0);r([f],Ft.prototype,"rowElements",void 0);const ud=x`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,pd=x`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class De extends P{constructor(){super(...arguments);this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.isInternalFocused=!1,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Gr,this.handleFocusin),this.addEventListener(Si,this.handleFocusout),this.addEventListener(Ri,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Gr,this.handleFocusin),this.removeEventListener(Si,this.handleFocusout),this.removeEventListener(Ri,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case xe.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1,this.isInternalFocused=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===xe.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===xe.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case ve:case Xc:if(this.isInternalFocused||this.columnDefinition===void 0)return;switch(this.cellType){case xe.default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&(this.isInternalFocused=!0,e.focus()),t.preventDefault()}break;case xe.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&(this.isInternalFocused=!0,e.focus()),t.preventDefault()}break}break;case eo:this.isInternalFocused&&(this.focus(),this.isInternalFocused=!1,t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case xe.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=pd.render(this,this);break;case void 0:case xe.rowHeader:case xe.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=ud.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}r([d({attribute:"cell-type"})],De.prototype,"cellType",void 0);r([d({attribute:"grid-column"})],De.prototype,"gridColumn",void 0);r([f],De.prototype,"rowData",void 0);r([f],De.prototype,"columnDefinition",void 0);function fd(i){const t=i.tagFor(De);return x`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,o)=>o.index+1}"
        :rowData="${(e,o)=>o.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function gd(i){const t=i.tagFor(De);return x`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,o)=>o.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const md=(i,t)=>{const e=fd(i),o=gd(i);return x`
        <template
            role="row"
            class="${s=>s.rowType!=="default"?s.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${o}"
            ${tn({property:"cellElements",filter:ei('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${ct("slottedCellElements")}></slot>
        </template>
    `},bd=(i,t)=>x`
        <template
            tabindex="-1"
            role="${e=>{var o;return(o=e.cellType)!==null&&o!==void 0?o:"gridcell"}}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,vd=x`
    <div
        class="title"
        part="title"
        aria-label="${i=>i.dateFormatter.getDate(`${i.month}-2-${i.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${i=>i.dateFormatter.getMonth(i.month)}
        </span>
        <span part="year">${i=>i.dateFormatter.getYear(i.year)}</span>
    </div>
`,yd=i=>{const t=i.tagFor(De);return x`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,o)=>o.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},xd=(i,t)=>{const e=i.tagFor(De);return x`
        <${e}
            class="${(o,s)=>s.parentContext.parent.getDayClassNames(o,t)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(o,s)=>s.index+1}"
            @click="${(o,s)=>s.parentContext.parent.handleDateSelect(s.event,o)}"
            @keydown="${(o,s)=>s.parentContext.parent.handleKeydown(s.event,o)}"
            aria-label="${(o,s)=>s.parentContext.parent.dateFormatter.getDate(`${o.month}-${o.day}-${o.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${o=>t===`${o.month}-${o.day}-${o.year}`?"today":"date"}"
            >
                ${(o,s)=>s.parentContext.parent.dateFormatter.getDay(o.day)}
            </div>
            <slot name="${o=>o.month}-${o=>o.day}-${o=>o.year}"></slot>
        </${e}>
    `},$d=(i,t)=>{const e=i.tagFor(Dt);return x`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Ii(o=>o,xd(i,t),{positioning:!0})}
        </${e}>
    `},wd=(i,t)=>{const e=i.tagFor(Ft),o=i.tagFor(Dt);return x`
    <${e} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Ii(s=>s.getWeekdayText(),yd(i),{positioning:!0})}
        </${o}>
        ${Ii(s=>s.getDays(),$d(i,t))}
    </${e}>
`},kd=i=>x`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${Ii(t=>t.getWeekdayText(),x`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${Ii(t=>t.getDays(),x`
                    <div class="week">
                        ${Ii(t=>t,x`
                                <div
                                    class="${(t,e)=>e.parentContext.parent.getDayClassNames(t,i)}"
                                    part="day"
                                    aria-label="${(t,e)=>e.parentContext.parent.dateFormatter.getDate(`${t.month}-${t.day}-${t.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${t=>i===`${t.month}-${t.day}-${t.year}`?"today":"date"}"
                                    >
                                        ${(t,e)=>e.parentContext.parent.dateFormatter.getDay(t.day)}
                                    </div>
                                    <slot
                                        name="${t=>t.month}-${t=>t.day}-${t=>t.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `,Cd=(i,t)=>{var e;const o=new Date,s=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return x`
        <template>
            ${Sc}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${it(n=>n.readonly===!1,wd(i,s))}
            ${it(n=>n.readonly===!0,kd(s))}
            ${Fc}
        </template>
    `},Td=(i,t)=>x`
    <slot></slot>
`;class sa extends P{}const Id=(i,t)=>x`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,o)=>e.keypressHandler(o.event)}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ct("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Fd extends P{}class Sd extends ln(Fd){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class Qo extends Sd{constructor(){super();this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{switch(t.key){case io:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}r([d({attribute:"readonly",mode:"boolean"})],Qo.prototype,"readOnly",void 0);r([f],Qo.prototype,"defaultSlottedNodes",void 0);r([f],Qo.prototype,"indeterminate",void 0);var $e;(function(i){i.above="above",i.below="below"})($e||($e={}));var Zo;(function(i){i.combobox="combobox"})(Zo||(Zo={}));function na(i){return Fi(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class ai extends P{constructor(t,e,o,s){super();this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,this.initialValue=this.initialValue||"",t&&(this.textContent=t),e&&(this.initialValue=e),o&&(this.defaultSelected=o),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.$fastController.isConnected&&(this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected))}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value?this.value:this.textContent?this.textContent:""}get text(){return this.textContent}set value(t){this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=t),N.notify(this,"value")}get value(){return N.track(this,"value"),this._value?this._value:this.text}get form(){return this.proxy?this.proxy.form:null}}r([f],ai.prototype,"defaultSelected",void 0);r([d({mode:"boolean"})],ai.prototype,"disabled",void 0);r([d({attribute:"selected",mode:"boolean"})],ai.prototype,"selectedAttribute",void 0);r([f],ai.prototype,"selected",void 0);r([d({attribute:"value",mode:"fromView"})],ai.prototype,"initialValue",void 0);ht(ai,Yt);var cn;(function(i){i.listbox="listbox"})(cn||(cn={}));class Vt extends P{constructor(){super(...arguments);this._options=[],this.role=cn.listbox,this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get length(){return this.options?this.options.length:0}get options(){return N.track(this,"options"),this._options}set options(t){this._options=t,N.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&this.firstSelectedOption&&(this.firstSelectedOption.focus(),requestAnimationFrame(()=>{this.firstSelectedOption.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Vt.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case Be:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case fe:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case ge:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case je:{t.preventDefault(),this.selectLastOption();break}case Qr:return this.focusAndScrollOptionIntoView(),!0;case ve:case eo:return!0;case io:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}selectedIndexChanged(t,e){this.setSelectedOptions()}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this.options.forEach(o=>{o.selected=e.includes(o)})}selectFirstOption(){this.disabled||(this.selectedIndex=0)}selectLastOption(){this.disabled||(this.selectedIndex=this.options.length-1)}selectNextOption(){!this.disabled&&this.options&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.options&&this.$fastController.isConnected){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null);if(t!==-1){this.selectedIndex=t;return}this.selectedIndex=0}}setSelectedOptions(){var t,e,o;if(this.$fastController.isConnected&&this.options){const s=(t=this.options[this.selectedIndex])!==null&&t!==void 0?t:null;this.selectedOptions=this.options.filter(n=>n.isSameNode(s)),this.ariaActiveDescendant=(o=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}}slottedOptionsChanged(t,e){this.$fastController.isConnected&&(this.options=e.reduce((o,s)=>(na(s)&&o.push(s),o),[]),this.options.forEach(o=>{o.id=o.id||Go("option-")}),this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const o=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),s=new RegExp(`^${o}`,"gi"),n=this.options.filter(a=>a.text.trim().match(s));if(n.length){const a=this.options.indexOf(n[0]);a>-1&&(this.selectedIndex=a)}this.typeaheadExpired=!1}}}Vt.slottedOptionFilter=i=>na(i)&&!i.disabled&&!i.hidden;Vt.TYPE_AHEAD_TIMEOUT_MS=1e3;r([d({mode:"boolean"})],Vt.prototype,"disabled",void 0);r([d],Vt.prototype,"role",void 0);r([f],Vt.prototype,"selectedIndex",void 0);r([f],Vt.prototype,"selectedOptions",void 0);r([f],Vt.prototype,"slottedOptions",void 0);r([f],Vt.prototype,"typeaheadBuffer",void 0);class oo{constructor(){this.ariaActiveDescendant=""}}r([f],oo.prototype,"ariaActiveDescendant",void 0);r([f],oo.prototype,"ariaDisabled",void 0);r([f],oo.prototype,"ariaExpanded",void 0);ht(oo,lt);ht(Vt,oo);class Rd extends Vt{}class Dd extends ye(Rd){constructor(){super(...arguments);this.proxy=document.createElement("input")}}var Pi;(function(i){i.inline="inline",i.list="list",i.both="both",i.none="none"})(Pi||(Pi={}));class Ue extends Dd{constructor(){super(...arguments);this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Go("listbox-"),this.maxHeight=0,this.open=!1,this.position=$e.below,this.role=Zo.combobox}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}get isAutocompleteInline(){return this.autocomplete===Pi.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Pi.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Pi.both}maxHeightChanged(){this.listbox&&this.listbox.style.setProperty("--max-height",`${this.maxHeight}px`)}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView())}get options(){return N.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,N.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return N.track(this,"value"),this._value}set value(t){var e,o,s;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const a=this.options.findIndex(u=>u.text.toLowerCase()===t.toLowerCase()),c=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,h=(o=this.options[a])===null||o===void 0?void 0:o.text;this.selectedIndex=c!==h?a:this.selectedIndex,t=((s=this.firstSelectedOption)===null||s===void 0?void 0:s.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),N.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text}return this.open=!this.open,this.open||this.updateValue(!0),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Pi.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusoutHandler(t){if(this.updateValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),t.inputType==="deleteContentBackward"||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1;const o=this.control.value.length;this.control.setSelectionRange(o,o);break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.updateValue(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=rn(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){const t=this.getBoundingClientRect(),o=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>o?$e.above:$e.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===$e.above?~~t.top:~~o}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=e.includes(o)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value),t&&this.$emit("change")}}r([d({attribute:"autocomplete",mode:"fromView"})],Ue.prototype,"autocomplete",void 0);r([f],Ue.prototype,"maxHeight",void 0);r([d({attribute:"open",mode:"boolean"})],Ue.prototype,"open",void 0);r([d],Ue.prototype,"placeholder",void 0);r([d({attribute:"position"})],Ue.prototype,"positionAttribute",void 0);r([f],Ue.prototype,"position",void 0);class dn{}r([d({attribute:"aria-autocomplete",mode:"fromView"})],dn.prototype,"ariaAutocomplete",void 0);ht(dn,lt);ht(Ue,Yt,dn);const Ed=(i,t)=>x`
    <template
        autocomplete="${e=>e.autocomplete}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.position}"
        tabindex="${e=>e.disabled?null:"0"}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-autocomplete="${e=>e.autocomplete}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusout="${(e,o)=>e.focusoutHandler(o.event)}"
    >
        <div class="control" part="control">
            ${jt(i,t)}
            <slot name="control">
                <input
                    class="selected-value"
                    part="selected-value"
                    placeholder="${e=>e.placeholder}"
                    role="${e=>e.role}"
                    type="text"
                    aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
                    aria-controls="${e=>e.listboxId}"
                    aria-expanded="${e=>e.ariaExpanded}"
                    aria-haspopup="listbox"
                    ?disabled="${e=>e.disabled}"
                    :value="${e=>e.value}"
                    @input="${(e,o)=>e.inputHandler(o.event)}"
                    @keydown="${(e,o)=>e.keydownHandler(o.event)}"
                    @keyup="${(e,o)=>e.keyupHandler(o.event)}"
                    ${W("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Bt(i,t)}
        </div>
        <div
            aria-disabled="${e=>e.disabled}"
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${W("listbox")}
        >
            <slot
                ${ct({filter:Vt.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function so(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function Od(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=so(e)}return!1}class Ld{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,o=this.constructListener(t);o.bind(e)(),e.addListener(o),this.listenerCache.set(t,o)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class no extends Ld{constructor(t,e){super(t);this.styles=e}static with(t){return e=>new no(t,e)}constructListener(t){let e=!1;const o=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(o),e=n):!n&&e&&(t.$fastController.removeStyles(o),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const M=no.with(window.matchMedia("(forced-colors)"));no.with(window.matchMedia("(prefers-color-scheme: dark)"));no.with(window.matchMedia("(prefers-color-scheme: light)"));class Pd{constructor(t,e,o){this.propertyName=t,this.value=e,this.styles=o}bind(t){N.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){N.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const gt="not-allowed",Ad=":host([hidden]){display:none}";function q(i){return`${Ad}:host{display:${i}}`}const T=Wc()?"focus-visible":"focus";function ra(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}const Ee=document.createElement("div");function Vd(i){return i instanceof Bo}class hn{setProperty(t,e){O.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){O.queueUpdate(()=>this.target.removeProperty(t))}}class Hd extends hn{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(Nt.create([e]))}}class zd extends hn{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Md extends hn{constructor(){super();this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class aa{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),N.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),O.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),O.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:o}=this.style;if(o){const s=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[s].style}else this.target=null}}r([f],aa.prototype,"target",void 0);class Nd{constructor(t){this.target=t.style}setProperty(t,e){O.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){O.queueUpdate(()=>this.target.removeProperty(t))}}class St{setProperty(t,e){St.properties[t]=e;for(const o of St.roots.values())Ai.getOrCreate(St.normalizeRoot(o)).setProperty(t,e)}removeProperty(t){delete St.properties[t];for(const e of St.roots.values())Ai.getOrCreate(St.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=St;if(!e.has(t)){e.add(t);const o=Ai.getOrCreate(this.normalizeRoot(t));for(const s in St.properties)o.setProperty(s,St.properties[s])}}static unregisterRoot(t){const{roots:e}=St;if(e.has(t)){e.delete(t);const o=Ai.getOrCreate(St.normalizeRoot(t));for(const s in St.properties)o.removeProperty(s)}}static normalizeRoot(t){return t===Ee?document:t}}St.roots=new Set;St.properties={};const un=new WeakMap,Bd=O.supportsAdoptedStyleSheets?Hd:aa,Ai=Object.freeze({getOrCreate(i){if(un.has(i))return un.get(i);let t;return i===Ee?t=new St:i instanceof Document?t=O.supportsAdoptedStyleSheets?new zd:new Md:Vd(i)?t=new Bd(i):t=new Nd(i),un.set(i,t),t}});class Ut extends Qs{constructor(t){super();this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ut.uniqueId(),Ut.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Ut({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Ut.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=mt.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof Ut&&(e=this.alias(e)),mt.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),mt.existsFor(t)&&mt.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(Ee,t),this}subscribe(t,e){const o=this.getOrCreateSubscriberSet(e);e&&!mt.existsFor(e)&&mt.getOrCreate(e),o.has(t)||o.add(t)}unsubscribe(t,e){const o=this.subscribers.get(e||this);o&&o.has(t)&&o.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(o=>o.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}Ut.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();Ut.tokensById=new Map;class jd{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:o}=t;this.add(e,o)}add(t,e){Ai.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(mt.getOrCreate(e).get(t)))}remove(t,e){Ai.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class Ud{constructor(t,e,o){this.source=t,this.token=e,this.node=o,this.dependencies=new Set,this.observer=N.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Yi))}}class qd{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),N.getNotifier(this).notify(t.id))}get(t){return N.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const ro=new WeakMap,ao=new WeakMap;class mt{constructor(t){this.target=t,this.store=new qd,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,o)=>{const s=Ut.getTokenById(o);if(s&&(s.notify(this.target),Ut.isCSSDesignToken(s))){const n=this.parent,a=this.isReflecting(s);if(n){const c=n.get(s),h=e.get(s);c!==h&&!a?this.reflectToCSS(s):c===h&&a&&this.stopReflectToCSS(s)}else a||this.reflectToCSS(s)}}},ro.set(t,this),N.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof Bo?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return ro.get(t)||new mt(t)}static existsFor(t){return ro.has(t)}static findParent(t){if(Ee!==t.target){let e=so(t.target);for(;e!==null;){if(ro.has(e))return ro.get(e);e=so(e)}return mt.getOrCreate(Ee)}return null}static findClosestAssignedNode(t,e){let o=e;do{if(o.has(t))return o;o=o.parent?o.parent:o.target!==Ee?mt.getOrCreate(Ee):null}while(o!==null);return null}get parent(){return ao.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const o=this.getRaw(t);if(o!==void 0)return this.hydrate(t,o),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=mt.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){Ut.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),Ut.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=mt.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&ao.get(this).removeChild(this)}appendChild(t){t.parent&&ao.get(t).removeChild(t);const e=this.children.filter(o=>t.contains(o));ao.set(t,this),this.children.push(t),e.forEach(o=>t.appendChild(o)),N.getNotifier(this.store).subscribe(t);for(const[o,s]of this.store.all())t.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):s)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),N.getNotifier(this.store).unsubscribe(t),t.parent===this?ao.delete(t):!1}contains(t){return Od(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),mt.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),mt.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const o=Ut.getTokenById(e);!o||this.hydrate(o,this.getRaw(o))}hydrate(t,e){if(!this.has(t)){const o=this.bindingObservers.get(t);Ut.isDerivedDesignTokenValue(e)?o?o.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(o&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const o=new Ud(e,t,this);return this.bindingObservers.set(t,o),o}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}mt.cssCustomPropertyReflector=new jd;r([f],mt.prototype,"children",void 0);function _d(i){return Ut.from(i)}const Jo=Object.freeze({create:_d,notifyConnection(i){return!i.isConnected||!mt.existsFor(i)?!1:(mt.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!mt.existsFor(i)?!1:(mt.getOrCreate(i).unbind(),!0)},registerRoot(i=Ee){St.registerRoot(i)},unregisterRoot(i=Ee){St.unregisterRoot(i)}}),pn=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),fn=new Map,Ko=new Map;let Vi=null;const lo=pt.createInterface(i=>i.cachedCallback(t=>(Vi===null&&(Vi=new la(null,t)),Vi))),Gd=Object.freeze({tagFor(i){return Ko.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||pt.findResponsibleContainer(i).get(lo)},getOrCreate(i){if(!i)return Vi===null&&(Vi=pt.getOrCreateDOMContainer().get(lo)),Vi;const t=i.$$designSystem$$;if(t)return t;const e=pt.getOrCreateDOMContainer(i);if(e.has(lo,!1))return e.get(lo);{const o=new la(i,e);return e.register(Ki.instance(lo,o)),o}}});function Wd(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class la{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>pn.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,o=[],s=this.disambiguate,n=this.shadowRootMode,a={elementPrefix:this.prefix,tryDefineElement(c,h,u){const $=Wd(c,h,u),{name:y,callback:k,baseClass:Y}=$;let{type:G}=$,K=y,et=fn.get(K),Gt=!0;for(;et;){const Kt=s(K,G,et);switch(Kt){case pn.ignoreDuplicate:return;case pn.definitionCallbackOnly:Gt=!1,et=void 0;break;default:K=Kt,et=fn.get(K);break}}Gt&&((Ko.has(G)||G===P)&&(G=class extends G{}),fn.set(K,G),Ko.set(G,K),Y&&Ko.set(Y,K)),o.push(new Xd(e,K,G,n,k,Gt))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Jo.registerRoot(this.designTokenRoot)),e.registerWithContext(a,...t);for(const c of o)c.callback(c),c.willDefine&&c.definition!==null&&c.definition.define();return this}}class Xd{constructor(t,e,o,s,n,a){this.container=t,this.name=e,this.type=o,this.shadowRootMode=s,this.callback=n,this.willDefine=a,this.definition=null}definePresentation(t){qr.define(this.name,t,this.container)}defineElement(t){this.definition=new Ws(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Gd.tagFor(t)}}const Yd=(i,t)=>x`
    <div class="positioning-region" part="positioning-region">
        ${it(e=>e.modal,x`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${W("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ca=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Qd=ca.join(","),ts=typeof Element=="undefined"?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Zd=function(t){return t.contentEditable==="true"},Jd=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?Zd(t)||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e},gn=function(t){return t.tagName==="INPUT"},Kd=function(t){return gn(t)&&t.type==="hidden"},th=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(o){return o.tagName==="SUMMARY"});return e},eh=function(t,e){for(var o=0;o<t.length;o++)if(t[o].checked&&t[o].form===e)return t[o]},ih=function(t){if(!t.name)return!0;var e=t.form||t.ownerDocument,o=function(c){return e.querySelectorAll('input[type="radio"][name="'+c+'"]')},s;if(typeof window!="undefined"&&typeof window.CSS!="undefined"&&typeof window.CSS.escape=="function")s=o(window.CSS.escape(t.name));else try{s=o(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var n=eh(s,t.form);return!n||n===t},oh=function(t){return gn(t)&&t.type==="radio"},sh=function(t){return oh(t)&&!ih(t)},nh=function(t,e){if(getComputedStyle(t).visibility==="hidden")return!0;var o=ts.call(t,"details>summary:first-of-type"),s=o?t.parentElement:t;if(ts.call(s,"details:not([open]) *"))return!0;if(!e||e==="full")for(;t;){if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}else if(e==="non-zero-area"){var n=t.getBoundingClientRect(),a=n.width,c=n.height;return a===0&&c===0}return!1},rh=function(t){if(gn(t)||t.tagName==="SELECT"||t.tagName==="TEXTAREA"||t.tagName==="BUTTON")for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var o=0;o<e.children.length;o++){var s=e.children.item(o);if(s.tagName==="LEGEND")return!s.contains(t)}return!0}e=e.parentElement}return!1},da=function(t,e){return!(e.disabled||Kd(e)||nh(e,t.displayCheck)||th(e)||rh(e))},ah=function(t,e){return!(!da(t,e)||sh(e)||Jd(e)<0)},ha=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return ts.call(t,Qd)===!1?!1:ah(e,t)},lh=ca.concat("iframe").join(","),ua=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return ts.call(t,lh)===!1?!1:da(e,t)};class le extends P{constructor(){super(...arguments);this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case eo:this.dismiss(),t.preventDefault();break;case Qr:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return le.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),O.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss")}show(){this.hidden=!1}hide(){this.hidden=!0}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=N.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:ha(e)||le.isFocusableFastElement(e)&&le.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(le.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,o;return!!((o=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus)}static hasTabbableShadow(t){var e,o;return Array.from((o=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&o!==void 0?o:[]).some(s=>ha(s))}}r([d({mode:"boolean"})],le.prototype,"modal",void 0);r([d({mode:"boolean"})],le.prototype,"hidden",void 0);r([d({attribute:"trap-focus",mode:"boolean"})],le.prototype,"trapFocus",void 0);r([d({attribute:"aria-describedby"})],le.prototype,"ariaDescribedby",void 0);r([d({attribute:"aria-labelledby"})],le.prototype,"ariaLabelledby",void 0);r([d({attribute:"aria-label"})],le.prototype,"ariaLabel",void 0);const ch=(i,t)=>x`
    <details class="disclosure" ${W("details")}>
        <summary
            class="invoker"
            role="button"
            aria-controls="disclosure-content"
            aria-expanded="${e=>e.expanded}"
        >
            <slot name="start"></slot>
            <slot name="title">${e=>e.title}</slot>
            <slot name="end"></slot>
        </summary>
        <div id="disclosure-content"><slot></slot></div>
    </details>
`;class es extends P{connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle")}}r([d({mode:"boolean"})],es.prototype,"expanded",void 0);r([d],es.prototype,"title",void 0);const dh=(i,t)=>x`
    <template role="${e=>e.role}"></template>
`;var mn;(function(i){i.separator="separator",i.presentation="presentation"})(mn||(mn={}));class pa extends P{constructor(){super(...arguments);this.role=mn.separator}}r([d],pa.prototype,"role",void 0);var co;(function(i){i.next="next",i.previous="previous"})(co||(co={}));const hh=(i,t)=>x`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,o)=>e.keyupHandler(o.event)}"
    >
        ${it(e=>e.direction===co.next,x`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${it(e=>e.direction===co.previous,x`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class qe extends P{constructor(){super(...arguments);this.hiddenFromAT=!0,this.direction=co.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;e==="Enter"&&this.$emit("click",t),e==="Escape"&&this.blur()}}}r([d({mode:"boolean"})],qe.prototype,"disabled",void 0);r([d({attribute:"aria-hidden",converter:Mo})],qe.prototype,"hiddenFromAT",void 0);r([d],qe.prototype,"direction",void 0);const uh=(i,t)=>x`
    <template
        aria-selected="${e=>e.selected}"
        class="${e=>e.selected?"selected":""} ${e=>e.disabled?"disabled":""}"
        role="option"
    >
        ${jt(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Bt(i,t)}
    </template>
`;class bn extends Vt{mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}sizeChanged(t,e){const o=Math.max(0,parseInt(e.toFixed(),10));o!==e&&O.queueUpdate(()=>{this.size=o})}}r([d({converter:F})],bn.prototype,"size",void 0);const ph=(i,t)=>x`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        class="listbox"
        role="${e=>e.role}"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusin="${(e,o)=>e.focusinHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
        @mousedown="${(e,o)=>e.mousedownHandler(o.event)}"
    >
        <slot
            ${ct({filter:bn.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`;class Hi extends P{constructor(){super(...arguments);this.optionElements=[]}menuElementsChanged(){this.updateOptions()}headerElementsChanged(){this.updateOptions()}footerElementsChanged(){this.updateOptions()}updateOptions(){this.optionElements.splice(0,this.optionElements.length),this.addSlottedListItems(this.headerElements),this.addSlottedListItems(this.menuElements),this.addSlottedListItems(this.footerElements),this.$emit("optionsupdated",{bubbles:!1})}addSlottedListItems(t){t!==void 0&&t.forEach(e=>{e.nodeType===1&&e.getAttribute("role")==="listitem"&&(e.id=e.id||Go("option-"),this.optionElements.push(e))})}}r([f],Hi.prototype,"menuElements",void 0);r([f],Hi.prototype,"headerElements",void 0);r([f],Hi.prototype,"footerElements",void 0);r([f],Hi.prototype,"suggestionsAvailableText",void 0);const fh=x`
    <template>
        ${i=>i.value}
    </template>
`;class ho extends P{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectView()}handleClick(t){return t.defaultPrevented||this.handleInvoked(),!1}handleInvoked(){this.$emit("pickeroptioninvoked")}updateView(){var t,e;this.disconnectView(),this.customView=(e=(t=this.contentsTemplate)===null||t===void 0?void 0:t.render(this,this))!==null&&e!==void 0?e:fh.render(this,this)}disconnectView(){var t;(t=this.customView)===null||t===void 0||t.dispose(),this.customView=void 0}}r([d({attribute:"value"})],ho.prototype,"value",void 0);r([f],ho.prototype,"contentsTemplate",void 0);class vn extends P{}const gh=x`
    <template>
        ${i=>i.value}
    </template>
`;class uo extends P{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){this.disconnectView(),super.disconnectedCallback()}handleKeyDown(t){return t.defaultPrevented?!1:t.key===ve?(this.handleInvoke(),!1):!0}handleClick(t){return t.defaultPrevented||this.handleInvoke(),!1}handleInvoke(){this.$emit("pickeriteminvoked")}updateView(){var t,e;this.disconnectView(),this.customView=(e=(t=this.contentsTemplate)===null||t===void 0?void 0:t.render(this,this))!==null&&e!==void 0?e:gh.render(this,this)}disconnectView(){var t;(t=this.customView)===null||t===void 0||t.dispose(),this.customView=void 0}}r([d({attribute:"value"})],uo.prototype,"value",void 0);r([f],uo.prototype,"contentsTemplate",void 0);function mh(i){const t=i.tagFor(uo);return x`
    <${t}
        value="${e=>e}"
        :contentsTemplate="${(e,o)=>o.parent.listItemContentsTemplate}"
    >
    </${t}>
    `}function bh(i){const t=i.tagFor(ho);return x`
    <${t}
        value="${e=>e}"
        :contentsTemplate="${(e,o)=>o.parent.menuOptionContentsTemplate}"
    >
    </${t}>
    `}const vh=(i,t)=>{const e=i.tagFor(U),o=i.tagFor(Hi),s=i.tagFor(vn),n=i.tagFor(vn),a=mh(i),c=bh(i);return x`
        <template
            :selectedListTag="${()=>s}"
            :menuTag="${()=>o}"
            :defaultListItemTemplate="${a}"
            :defaultMenuOptionTemplate="${c}"
            @focusin="${(h,u)=>h.handleFocusIn(u.event)}"
            @focusout="${(h,u)=>h.handleFocusOut(u.event)}"
            @keydown="${(h,u)=>h.handleKeyDown(u.event)}"
            @pickeriteminvoked="${(h,u)=>h.handleItemInvoke(u.event)}"
            @pickeroptioninvoked="${(h,u)=>h.handleOptionInvoke(u.event)}"
        >
            <slot name="list-region"></slot>

            ${it(h=>h.flyoutOpen,x`
                <${e}
                    class="region"
                    auto-update-mode="auto"
                    fixed-placement="true"
                    vertical-positioning-mode="locktodefault"
                    vertical-default-position="bottom"
                    vertical-scaling="content"
                    vertical-inset="false"
                    horizontal-positioning-mode="locktodefault"
                    horizontal-default-position="right"
                    horizontal-scaling="anchor"
                    horizontal-inset="true"
                    @loaded="${(h,u)=>h.handleRegionLoaded(u.event)}"
                    ${W("region")}
                >
                    ${it(h=>!h.showNoOptions&&!h.showLoading,x`
                            <slot name="menu-region"></slot>
                        `)}
                    ${it(h=>h.showNoOptions&&!h.showLoading,x`
                            <div class="no-options-display" part="no-options-display">
                                <slot name="no-options-region">
                                    ${h=>h.noSuggestionsText}
                                </slot>
                            </div>
                        `)}
                    ${it(h=>h.showLoading,x`
                            <div class="loading-display" part="loading-display">
                                <slot name="loading-region">
                                    <${n}
                                        part="loading-progress"
                                        class="loading-progress
                                        slot="loading-region"
                                    ></${n}>
                                        ${h=>h.loadingText}
                                </slot>
                            </div>
                        `)}
                </${e}>
            `)}
        </template>
    `};class yh extends P{}class xh extends ye(yh){constructor(){super(...arguments);this.proxy=document.createElement("input")}}const $h=x`
    <input
        slot="input-region"
        role="combobox"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        haspopup="list"
        aria-label="${i=>i.label}"
        aria-labelledby="${i=>i.labelledBy}"
        placeholder="${i=>i.placeholder}"
        ${W("inputElement")}
    ></input>
`;class tt extends xh{constructor(){super(...arguments);this.selection="",this.filterSelected=!0,this.filterQuery=!0,this.noSuggestionsText="No suggestions available",this.suggestionsAvailableText="Suggestions available",this.loadingText="Loading suggestions",this.showLoading=!1,this.optionsList=[],this.filteredOptionsList=[],this.flyoutOpen=!1,this.menuFocusIndex=-1,this.showNoOptions=!1,this.selectedItems=[],this.inputElementView=null,this.handleTextInput=t=>{this.query=this.inputElement.value},this.handleInputClick=t=>{t.preventDefault(),this.toggleFlyout(!0)},this.setRegionProps=()=>{if(!!this.flyoutOpen){if(this.region===null||this.region===void 0){O.queueUpdate(this.setRegionProps);return}this.region.anchorElement=this.inputElement}}}selectionChanged(){this.$fastController.isConnected&&(this.handleSelectionChange(),this.proxy instanceof HTMLInputElement&&(this.proxy.value=this.selection,this.validate()))}optionsChanged(){this.optionsList=this.options.split(",").map(t=>t.trim()).filter(t=>t!=="")}showLoadingChanged(){this.$fastController.isConnected&&O.queueUpdate(()=>{this.setFocusedOption(0)})}listItemTemplateChanged(){this.updateListItemTemplate()}defaultListItemTemplateChanged(){this.updateListItemTemplate()}menuOptionTemplateChanged(){this.updateOptionTemplate()}defaultMenuOptionTemplateChanged(){this.updateOptionTemplate()}optionsListChanged(){this.updateFilteredOptions()}queryChanged(){this.$fastController.isConnected&&(this.inputElement.value!==this.query&&(this.inputElement.value=this.query),this.updateFilteredOptions(),this.$emit("querychange",{bubbles:!1}))}filteredOptionsListChanged(){this.$fastController.isConnected&&(this.showNoOptions=this.filteredOptionsList.length===0&&this.menuElement.querySelectorAll('[role="listitem"]').length===0,this.setFocusedOption(this.showNoOptions?-1:0))}flyoutOpenChanged(){this.flyoutOpen?(O.queueUpdate(this.setRegionProps),this.$emit("menuopening",{bubbles:!1})):this.$emit("menuclosing",{bubbles:!1})}showNoOptionsChanged(){this.$fastController.isConnected&&O.queueUpdate(()=>{this.setFocusedOption(0)})}connectedCallback(){super.connectedCallback(),this.listElement=document.createElement(this.selectedListTag),this.appendChild(this.listElement),this.itemsPlaceholderElement=document.createComment(""),this.listElement.append(this.itemsPlaceholderElement),this.inputElementView=$h.render(this,this.listElement);const t=this.menuTag.toUpperCase();this.menuElement=Array.from(this.children).find(e=>e.tagName===t),this.menuElement===void 0&&(this.menuElement=document.createElement(this.menuTag),this.appendChild(this.menuElement)),this.menuElement.id===""&&(this.menuElement.id=Go("listbox-")),this.menuId=this.menuElement.id,this.optionsPlaceholder=document.createComment(""),this.menuElement.append(this.optionsPlaceholder),O.queueUpdate(()=>this.initialize())}disconnectedCallback(){super.disconnectedCallback(),this.toggleFlyout(!1),this.inputElement.removeEventListener("input",this.handleTextInput),this.inputElement.removeEventListener("click",this.handleInputClick),this.inputElementView!==null&&(this.inputElementView.dispose(),this.inputElementView=null)}focus(){this.inputElement.focus()}initialize(){this.updateListItemTemplate(),this.updateOptionTemplate(),this.itemsRepeatBehavior=new Qi(t=>t.selectedItems,t=>t.activeListItemTemplate,{positioning:!0}).createBehavior(this.itemsPlaceholderElement),this.inputElement.addEventListener("input",this.handleTextInput),this.inputElement.addEventListener("click",this.handleInputClick),this.$fastController.addBehaviors([this.itemsRepeatBehavior]),this.menuElement.suggestionsAvailableText=this.suggestionsAvailableText,this.menuElement.addEventListener("optionsupdated",this.handleMenuOptionsUpdated),this.optionsRepeatBehavior=new Qi(t=>t.filteredOptionsList,t=>t.activeMenuOptionTemplate,{positioning:!0}).createBehavior(this.optionsPlaceholder),this.$fastController.addBehaviors([this.optionsRepeatBehavior]),this.handleSelectionChange()}toggleFlyout(t){if(this.flyoutOpen!==t){if(t&&document.activeElement===this.inputElement){this.flyoutOpen=t,O.queueUpdate(()=>{this.menuElement!==void 0?this.setFocusedOption(0):this.disableMenu()});return}this.flyoutOpen=!1,this.disableMenu()}}handleMenuOptionsUpdated(t){t.preventDefault(),this.flyoutOpen&&this.setFocusedOption(0)}handleKeyDown(t){if(t.defaultPrevented)return!1;switch(t.key){case fe:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{const e=this.flyoutOpen?Math.min(this.menuFocusIndex+1,this.menuElement.optionElements.length-1):0;this.setFocusedOption(e)}return!1}case ge:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{const e=this.flyoutOpen?Math.max(this.menuFocusIndex-1,0):0;this.setFocusedOption(e)}return!1}case eo:return this.toggleFlyout(!1),!1;case ve:return this.menuFocusIndex!==-1&&this.menuElement.optionElements.length>this.menuFocusIndex&&this.menuElement.optionElements[this.menuFocusIndex].click(),!1;case Re:return document.activeElement!==this.inputElement?(this.incrementFocusedItem(1),!1):!0;case Se:return this.inputElement.selectionStart===0?(this.incrementFocusedItem(-1),!1):!0;case Jc:case Zc:{if(document.activeElement===null)return!0;if(document.activeElement===this.inputElement)return this.inputElement.selectionStart===0?(this.selection=this.selectedItems.slice(0,this.selectedItems.length-1).toString(),this.toggleFlyout(!1),!1):!0;const e=Array.from(this.listElement.children),o=e.indexOf(document.activeElement);return o>-1?(this.selection=this.selectedItems.splice(o,1).toString(),O.queueUpdate(()=>{e[Math.min(e.length,o)].focus()}),!1):!0}}return this.toggleFlyout(!0),!0}handleFocusIn(t){return!1}handleFocusOut(t){return(this.menuElement===void 0||!this.menuElement.contains(t.relatedTarget))&&this.toggleFlyout(!1),!1}handleSelectionChange(){this.selectedItems.toString()!==this.selection&&(this.selectedItems=this.selection===""?[]:this.selection.split(","),this.updateFilteredOptions(),O.queueUpdate(()=>{this.checkMaxItems()}),this.$emit("selectionchange",{bubbles:!1}))}handleRegionLoaded(t){O.queueUpdate(()=>{this.setFocusedOption(0),this.$emit("menuloaded",{bubbles:!1})})}checkMaxItems(){if(this.inputElement!==void 0)if(this.maxSelected!==void 0&&this.selectedItems.length>=this.maxSelected){if(document.activeElement===this.inputElement){const t=Array.from(this.listElement.querySelectorAll("[role='listitem']"));t[t.length-1].focus()}this.inputElement.hidden=!0}else this.inputElement.hidden=!1}handleItemInvoke(t){if(t.defaultPrevented)return!1;if(t.target instanceof uo){const o=Array.from(this.listElement.querySelectorAll("[role='listitem']")).indexOf(t.target);if(o!==-1){const s=this.selectedItems.slice();s.splice(o,1),this.selection=s.toString(),O.queueUpdate(()=>this.incrementFocusedItem(0))}return!1}return!0}handleOptionInvoke(t){return t.defaultPrevented?!1:t.target instanceof ho?(t.target.value!==void 0&&(this.selection=`${this.selection}${this.selection===""?"":","}${t.target.value}`),this.inputElement.value="",this.query="",this.inputElement.focus(),this.toggleFlyout(!1),!1):!0}incrementFocusedItem(t){if(this.selectedItems.length===0){this.inputElement.focus();return}const e=Array.from(this.listElement.querySelectorAll("[role='listitem']"));if(document.activeElement!==null){let o=e.indexOf(document.activeElement);o===-1&&(o=e.length);const s=Math.min(e.length,Math.max(0,o+t));s===e.length?this.maxSelected!==void 0&&this.selectedItems.length>=this.maxSelected?e[s-1].focus():this.inputElement.focus():e[s].focus()}}disableMenu(){var t,e,o;this.menuFocusIndex=-1,this.menuFocusOptionId=void 0,(t=this.inputElement)===null||t===void 0||t.removeAttribute("aria-activedescendant"),(e=this.inputElement)===null||e===void 0||e.removeAttribute("aria-owns"),(o=this.inputElement)===null||o===void 0||o.removeAttribute("aria-expanded")}setFocusedOption(t){if(!this.flyoutOpen||t===-1||this.showNoOptions||this.showLoading){this.disableMenu();return}if(this.menuElement.optionElements.length===0)return;this.menuElement.optionElements.forEach(o=>{o.setAttribute("aria-selected","false")}),this.menuFocusIndex=t,this.menuFocusIndex>this.menuElement.optionElements.length-1&&(this.menuFocusIndex=this.menuElement.optionElements.length-1),this.menuFocusOptionId=this.menuElement.optionElements[this.menuFocusIndex].id,this.inputElement.setAttribute("aria-owns",this.menuId),this.inputElement.setAttribute("aria-expanded","true"),this.inputElement.setAttribute("aria-activedescendant",this.menuFocusOptionId);const e=this.menuElement.optionElements[this.menuFocusIndex];e.setAttribute("aria-selected","true"),this.menuElement.scrollTo(0,e.offsetTop)}updateListItemTemplate(){var t;this.activeListItemTemplate=(t=this.listItemTemplate)!==null&&t!==void 0?t:this.defaultListItemTemplate}updateOptionTemplate(){var t;this.activeMenuOptionTemplate=(t=this.menuOptionTemplate)!==null&&t!==void 0?t:this.defaultMenuOptionTemplate}updateFilteredOptions(){this.filteredOptionsList=this.optionsList.slice(0),this.filterSelected&&(this.filteredOptionsList=this.filteredOptionsList.filter(t=>this.selectedItems.indexOf(t)===-1)),this.filterQuery&&this.query!==""&&this.query!==void 0&&(this.filteredOptionsList=this.filteredOptionsList.filter(t=>t.indexOf(this.query)!==-1))}}r([d({attribute:"selection"})],tt.prototype,"selection",void 0);r([d({attribute:"options"})],tt.prototype,"options",void 0);r([d({attribute:"filter-selected",mode:"boolean"})],tt.prototype,"filterSelected",void 0);r([d({attribute:"filter-query",mode:"boolean"})],tt.prototype,"filterQuery",void 0);r([d({attribute:"max-selected"})],tt.prototype,"maxSelected",void 0);r([d({attribute:"no-suggestions-text"})],tt.prototype,"noSuggestionsText",void 0);r([d({attribute:"suggestions-available-text"})],tt.prototype,"suggestionsAvailableText",void 0);r([d({attribute:"loading-text"})],tt.prototype,"loadingText",void 0);r([d({attribute:"label"})],tt.prototype,"label",void 0);r([d({attribute:"labelledby"})],tt.prototype,"labelledBy",void 0);r([d({attribute:"placeholder"})],tt.prototype,"placeholder",void 0);r([f],tt.prototype,"showLoading",void 0);r([f],tt.prototype,"listItemTemplate",void 0);r([f],tt.prototype,"defaultListItemTemplate",void 0);r([f],tt.prototype,"activeListItemTemplate",void 0);r([f],tt.prototype,"menuOptionTemplate",void 0);r([f],tt.prototype,"defaultMenuOptionTemplate",void 0);r([f],tt.prototype,"activeMenuOptionTemplate",void 0);r([f],tt.prototype,"listItemContentsTemplate",void 0);r([f],tt.prototype,"menuOptionContentsTemplate",void 0);r([f],tt.prototype,"optionsList",void 0);r([f],tt.prototype,"query",void 0);r([f],tt.prototype,"filteredOptionsList",void 0);r([f],tt.prototype,"flyoutOpen",void 0);r([f],tt.prototype,"menuId",void 0);r([f],tt.prototype,"selectedListTag",void 0);r([f],tt.prototype,"menuTag",void 0);r([f],tt.prototype,"menuFocusIndex",void 0);r([f],tt.prototype,"menuFocusOptionId",void 0);r([f],tt.prototype,"showNoOptions",void 0);r([f],tt.prototype,"selectedItems",void 0);const wh=(i,t)=>x`
        <template role="list" slot="menu-region">
            <div class="options-display" part="options-display">
                <div class="header-region" part="header-region">
                    <slot name="header-region" ${ct("headerElements")}></slot>
                </div>

                <slot ${ct("menuElements")}></slot>
                <div class="footer-region" part="footer-region">
                    <slot name="footer-region" ${ct("footerElements")}></slot>
                </div>
                <div
                    role="alert"
                    aria-live="polite"
                    part="suggestions-available-alert"
                    class="suggestions-available-alert"
                >
                    ${e=>e.suggestionsAvailableText}
                </div>
            </div>
        </template>
    `,kh=(i,t)=>x`
        <template
            role="listitem"
            tabindex="-1"
            @click="${(e,o)=>e.handleClick(o.event)}"
        >
            <slot></slot>
        </template>
    `,Ch=(i,t)=>x`
        <template slot="list-region" role="list" class="picker-list">
            <slot></slot>
            <slot name="input-region"></slot>
        </template>
    `,Th=(i,t)=>x`
        <template
            role="listitem"
            tabindex="0"
            @click="${(e,o)=>e.handleClick(o.event)}"
            @keydown="${(e,o)=>e.handleKeyDown(o.event)}"
        >
            <slot></slot>
        </template>
    `;var Et;(function(i){i.menuitem="menuitem",i.menuitemcheckbox="menuitemcheckbox",i.menuitemradio="menuitemradio"})(Et||(Et={}));const Ih={[Et.menuitem]:"menuitem",[Et.menuitemcheckbox]:"menuitemcheckbox",[Et.menuitemradio]:"menuitemradio"};class ie extends P{constructor(){super(...arguments);this.role=Et.menuitem,this.hasSubmenu=!1,this.currentDirection=dt.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case ve:case io:return this.invoke(),!1;case Re:return this.expandAndFocus(),!1;case Se:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{!this.focusSubmenuOnLoad||(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{!this.hasSubmenu||(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Et.menuitemcheckbox:this.checked=!this.checked;break;case Et.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Et.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=si(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),O.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children)}}r([d({mode:"boolean"})],ie.prototype,"disabled",void 0);r([d({mode:"boolean"})],ie.prototype,"expanded",void 0);r([f],ie.prototype,"startColumnCount",void 0);r([d],ie.prototype,"role",void 0);r([d({mode:"boolean"})],ie.prototype,"checked",void 0);r([f],ie.prototype,"submenuRegion",void 0);r([f],ie.prototype,"hasSubmenu",void 0);r([f],ie.prototype,"currentDirection",void 0);r([f],ie.prototype,"submenu",void 0);ht(ie,Yt);const Fh=(i,t)=>x`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==Et.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,o)=>e.handleMenuItemKeyDown(o.event)}"
        @click="${(e,o)=>e.handleMenuItemClick(o.event)}"
        @mouseover="${(e,o)=>e.handleMouseOver(o.event)}"
        @mouseout="${(e,o)=>e.handleMouseOut(o.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${it(e=>e.role===Et.menuitemcheckbox,x`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${it(e=>e.role===Et.menuitemradio,x`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${jt(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Bt(i,t)}
        ${it(e=>e.hasSubmenu,x`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${it(e=>e.expanded,x`
                <${i.tagFor(U)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${W("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${i.tagFor(U)}>
            `)}
    </template>
`,Sh=(i,t)=>x`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,o)=>e.handleMenuKeyDown(o.event)}"
        @focusout="${(e,o)=>e.handleFocusOut(o.event)}"
    >
        <slot ${ct("items")}></slot>
    </template>
`;class po extends P{constructor(){super(...arguments);this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Fi(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.setItems=()=>{const t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0);function e(s){return!(s instanceof ie)||s.role!==Et.menuitem&&s.querySelector("[slot=start]")===null||s.role===Et.menuitem&&s.querySelector("[slot=start]")!==null?1:s.role!==Et.menuitem&&s.querySelector("[slot=start]")!==null?2:0}const o=t.reduce((s,n)=>{const a=e(n);return s>a?s:a},0);t.forEach((s,n)=>{s.setAttribute("tabindex",n===0?"0":"-1"),s.addEventListener("expanded-change",this.handleExpandedChanged),s.addEventListener("focus",this.handleItemFocus),s instanceof ie&&(s.startColumnCount=o)})},this.resetItems=t=>{t.forEach(e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)})},this.changeHandler=t=>{const e=t.target,o=this.menuItems.indexOf(e);if(o!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=o-1;n>=0;--n){const a=this.menuItems[n],c=a.getAttribute("role");if(c===Et.menuitemradio&&(a.checked=!1),c==="separator")break}const s=this.menuItems.length-1;for(let n=o+1;n<=s;++n){const a=this.menuItems[n],c=a.getAttribute("role");if(c===Et.menuitemradio&&(a.checked=!1),c==="separator")break}}},this.isMenuItemElement=t=>Fi(t)&&po.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&(this.menuItems=this.domChildren(),this.resetItems(t),this.setItems())}connectedCallback(){super.connectedCallback(),this.menuItems=this.domChildren(),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.menuItems=[],this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented)switch(t.key){case fe:this.setFocus(this.focusIndex+1,1);return;case ge:this.setFocus(this.focusIndex-1,-1);return;case je:this.setFocus(this.menuItems.length-1,-1);return;case Be:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children)}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const o=this.menuItems[t];if(this.isFocusableElement(o)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,o.setAttribute("tabindex","0"),o.focus();break}t+=e}}}po.focusableElementRoles=Ih;r([f],po.prototype,"items",void 0);const Rh=(i,t)=>x`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ct("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${jt(i,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                @keydown="${(e,o)=>e.handleKeyDown(o.event)}"
                @blur="${(e,o)=>e.handleBlur()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                type="text"
                inputmode="numeric"
                min="${e=>e.min}"
                max="${e=>e.max}"
                step="${e=>e.step}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${W("control")}
            />
            ${it(e=>!e.hideStep&&!e.readOnly&&!e.disabled,x`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${e=>e.stepUp()}">
                            <slot name="step-up-glyph">
                                ${t.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${e=>e.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${t.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${Bt(i,t)}
        </div>
    </template>
`,Dh=(i,t)=>x`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${ct({property:"defaultSlottedNodes",filter:ra})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${jt(i,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${W("control")}
            />
            ${Bt(i,t)}
        </div>
    </template>
`;class Eh extends P{}class Oh extends ye(Eh){constructor(){super(...arguments);this.proxy=document.createElement("input")}}var yn;(function(i){i.email="email",i.password="password",i.tel="tel",i.text="text",i.url="url"})(yn||(yn={}));class Zt extends Oh{constructor(){super(...arguments);this.type=yn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&O.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}r([d({attribute:"readonly",mode:"boolean"})],Zt.prototype,"readOnly",void 0);r([d({mode:"boolean"})],Zt.prototype,"autofocus",void 0);r([d],Zt.prototype,"placeholder",void 0);r([d],Zt.prototype,"type",void 0);r([d],Zt.prototype,"list",void 0);r([d({converter:F})],Zt.prototype,"maxlength",void 0);r([d({converter:F})],Zt.prototype,"minlength",void 0);r([d],Zt.prototype,"pattern",void 0);r([d({converter:F})],Zt.prototype,"size",void 0);r([d({mode:"boolean"})],Zt.prototype,"spellcheck",void 0);r([f],Zt.prototype,"defaultSlottedNodes",void 0);class is{}ht(is,lt);ht(Zt,Yt,is);class Lh extends P{}class Ph extends ye(Lh){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class qt extends Ph{constructor(){super(...arguments);this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var o;this.max=Math.max(e,(o=this.min)!==null&&o!==void 0?o:e);const s=Math.min(this.min,this.max);this.min!==void 0&&this.min!==s&&(this.min=s),this.value=this.getValidValue(this.value)}minChanged(t,e){var o;this.min=Math.min(e,(o=this.max)!==null&&o!==void 0?o:e);const s=Math.max(this.min,this.max);this.max!==void 0&&this.max!==s&&(this.max=s),this.value=this.getValidValue(this.value)}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}getValidValue(t){var e,o;let s=parseFloat(parseFloat(t).toPrecision(12));return isNaN(s)?s="":(s=Math.min(s,(e=this.max)!==null&&e!==void 0?e:s),s=Math.max(s,(o=this.min)!==null&&o!==void 0?o:s).toString()),s}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&O.queueUpdate(()=>{this.focus()})}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case ge:return this.stepUp(),!1;case fe:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}r([d({attribute:"readonly",mode:"boolean"})],qt.prototype,"readOnly",void 0);r([d({mode:"boolean"})],qt.prototype,"autofocus",void 0);r([d({attribute:"hide-step",mode:"boolean"})],qt.prototype,"hideStep",void 0);r([d],qt.prototype,"placeholder",void 0);r([d],qt.prototype,"list",void 0);r([d({converter:F})],qt.prototype,"maxlength",void 0);r([d({converter:F})],qt.prototype,"minlength",void 0);r([d({converter:F})],qt.prototype,"size",void 0);r([d({converter:F})],qt.prototype,"step",void 0);r([d({converter:F})],qt.prototype,"max",void 0);r([d({converter:F})],qt.prototype,"min",void 0);r([f],qt.prototype,"defaultSlottedNodes",void 0);ht(qt,Yt,is);const fa=44,Ah=(i,t)=>x`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${it(e=>typeof e.value=="number",x`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>fa*e.percentComplete/100}px ${fa}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${it(e=>typeof e.value!="number",x`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class li extends P{constructor(){super(...arguments);this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,o=typeof this.value=="number"?this.value:0,s=e-t;this.percentComplete=s===0?0:Math.fround((o-t)/s*100)}}r([d({converter:F})],li.prototype,"value",void 0);r([d({converter:F})],li.prototype,"min",void 0);r([d({converter:F})],li.prototype,"max",void 0);r([d({mode:"boolean"})],li.prototype,"paused",void 0);r([f],li.prototype,"percentComplete",void 0);const Vh=(i,t)=>x`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${it(e=>typeof e.value=="number",x`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${it(e=>typeof e.value!="number",x`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,Hh=(i,t)=>x`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
        @focusout="${(e,o)=>e.focusOutHandler(o.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===ut.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${ct({property:"slottedRadioButtons",filter:ei("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class _e extends P{constructor(){super(...arguments);this.orientation=ut.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(o=>{o!==e&&(o.checked=!1,this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const o=t[e];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach(s=>{s!==o&&s.setAttribute("tabindex","-1")}):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,o=t.target,s=o!==null?e.indexOf(o):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&s===n||n===e.length-1&&n===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(a=>{a!==this.selectedRadio&&a.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(a=>{a!==this.focusedRadio&&a.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const o=this.slottedRadioButtons;e.checked||o.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,o)=>t===e.length&&this.isInsideToolbar&&o===Re,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Se,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,e,t.key)){this.moveRightOffGroup();return}else o===e.length&&(o=0);for(;o<e.length&&e.length>1;)if(e[o].disabled){if(this.focusedRadio&&o===e.indexOf(this.focusedRadio))break;if(o+1>=e.length){if(this.isInsideToolbar)break;o=0}else o+=1}else{this.moveToRadioByIndex(e,o);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,o=o<0?e.length-1:o,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;o>=0&&e.length>1;)if(e[o].disabled){if(this.focusedRadio&&o===e.indexOf(this.focusedRadio))break;o-1<0?o=e.length-1:o-=1}else{this.moveToRadioByIndex(e,o);break}},this.keydownHandler=t=>{const e=t.key;if(e in Di&&this.isInsideFoundationToolbar)return!0;switch(e){case ve:{this.checkFocusedRadio();break}case Re:case fe:{this.direction===dt.ltr?this.moveRight(t):this.moveLeft(t);break}case Se:case ge:{this.direction===dt.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.getAttribute("value")===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!((t=this.parentToolbar)===null||t===void 0?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=si(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),e=t?t.length:0;if(e>1){const s=t[e-1];s.checked=!0}let o=!1;if(this.slottedRadioButtons.forEach(s=>{this.name!==void 0&&s.setAttribute("name",this.name),this.disabled&&(s.disabled=!0),this.readOnly&&(s.readOnly=!0),this.value&&this.value===s.value?(this.selectedRadio=s,this.focusedRadio=s,s.checked=!0,s.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"),s.checked=!1),s.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const s=this.slottedRadioButtons.filter(a=>a.hasAttribute("checked")),n=s!==null?s.length:0;if(n>0&&!o){const a=s[n-1];a.checked=!0,this.focusedRadio=a,a.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}r([d({attribute:"readonly",mode:"boolean"})],_e.prototype,"readOnly",void 0);r([d({attribute:"disabled",mode:"boolean"})],_e.prototype,"disabled",void 0);r([d],_e.prototype,"name",void 0);r([d],_e.prototype,"value",void 0);r([d],_e.prototype,"orientation",void 0);r([f],_e.prototype,"childItems",void 0);r([f],_e.prototype,"slottedRadioButtons",void 0);const zh=(i,t)=>x`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,o)=>e.keypressHandler(o.event)}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ct("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Mh extends P{}class Nh extends ln(Mh){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class os extends Nh{constructor(){super();this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case io:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}r([d({attribute:"readonly",mode:"boolean"})],os.prototype,"readOnly",void 0);r([f],os.prototype,"name",void 0);r([f],os.prototype,"defaultSlottedNodes",void 0);class Oe extends P{constructor(){super(...arguments);this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const o=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(o,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&this.setStops()}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,o)=>o instanceof HTMLSlotElement?e.concat(o.assignedElements()):(e.push(o),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops(),this.width=this.offsetWidth;let t=0,e=this.scrollItems.map(({offsetLeft:o,offsetWidth:s},n)=>{const a=o+s;return this.isRtl?-a:(t=a,n===0?0:o)}).concat(t);e=this.fixScrollMisalign(e),e.sort((o,s)=>Math.abs(o)-Math.abs(s)),this.scrollStops=e,this.setFlippers()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((o,s)=>s-o);const e=t[0];t=t.map(o=>o-e)}return t}setFlippers(){var t,e;const o=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",o===0),this.scrollStops){const s=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",Math.abs(o)+this.width>=s)}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,a)=>n<=t&&(this.isRtl||a===this.scrollStops.length-1||this.scrollStops[a+1]>t)),o=Math.abs(this.scrollStops[e+1]);let s=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>o);(s>e||s===-1)&&(s=e>0?e-1:0),this.scrollToPosition(this.scrollStops[s],t)}scrollToNext(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),o=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let s=e;o>e+2?s=o-2:e<this.scrollStops.length-2&&(s=e+1),this.scrollToPosition(this.scrollStops[s],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var o;if(this.scrolling)return;this.scrolling=!0;const s=(o=this.duration)!==null&&o!==void 0?o:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",s);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),a=u=>{u&&u.target!==u.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",a),this.scrolling=!1)};if(n===0){a();return}this.content.addEventListener("transitionend",a);const c=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let h=this.scrollContainer.scrollLeft-Math.min(t,c);this.isRtl&&(h=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),c)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${h}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}}r([d({converter:F})],Oe.prototype,"speed",void 0);r([d],Oe.prototype,"duration",void 0);r([d],Oe.prototype,"easing",void 0);r([d({attribute:"aria-hidden",converter:Mo})],Oe.prototype,"flippersHiddenFromAT",void 0);r([f],Oe.prototype,"scrolling",void 0);r([f],Oe.prototype,"scrollItems",void 0);r([d({attribute:"view"})],Oe.prototype,"view",void 0);const Bh=(i,t)=>{var e,o;return x`
    <template
        class="horizontal-scroll"
        @keyup="${(s,n)=>s.keyupHandler(n.event)}"
    >
        ${jt(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${s=>s.scrolled()}"
                ${W("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${W("content")}>
                    <slot
                        ${ct({property:"scrollItems",filter:ei()})}
                    ></slot>
                </div>
            </div>
            ${it(s=>s.view!=="mobile",x`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${W("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${t.previousFlipper instanceof Function?t.previousFlipper(i,t):(e=t.previousFlipper)!==null&&e!==void 0?e:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${W("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${t.nextFlipper instanceof Function?t.nextFlipper(i,t):(o=t.nextFlipper)!==null&&o!==void 0?o:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${Bt(i,t)}
    </template>
`},jh=(i,t)=>x`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${ct({property:"defaultSlottedNodes",filter:ra})}
            ></slot>
        </label>
        <div class="root" part="root" ${W("root")}>
            ${jt(i,t)}
            <div class="input-wrapper" part="input-wrapper">
                <input
                    class="control"
                    part="control"
                    id="control"
                    @input="${e=>e.handleTextInput()}"
                    @change="${e=>e.handleChange()}"
                    ?autofocus="${e=>e.autofocus}"
                    ?disabled="${e=>e.disabled}"
                    list="${e=>e.list}"
                    maxlength="${e=>e.maxlength}"
                    minlength="${e=>e.minlength}"
                    pattern="${e=>e.pattern}"
                    placeholder="${e=>e.placeholder}"
                    ?readonly="${e=>e.readOnly}"
                    ?required="${e=>e.required}"
                    size="${e=>e.size}"
                    ?spellcheck="${e=>e.spellcheck}"
                    :value="${e=>e.value}"
                    type="search"
                    aria-atomic="${e=>e.ariaAtomic}"
                    aria-busy="${e=>e.ariaBusy}"
                    aria-controls="${e=>e.ariaControls}"
                    aria-current="${e=>e.ariaCurrent}"
                    aria-describedby="${e=>e.ariaDescribedby}"
                    aria-details="${e=>e.ariaDetails}"
                    aria-disabled="${e=>e.ariaDisabled}"
                    aria-errormessage="${e=>e.ariaErrormessage}"
                    aria-flowto="${e=>e.ariaFlowto}"
                    aria-haspopup="${e=>e.ariaHaspopup}"
                    aria-hidden="${e=>e.ariaHidden}"
                    aria-invalid="${e=>e.ariaInvalid}"
                    aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                    aria-label="${e=>e.ariaLabel}"
                    aria-labelledby="${e=>e.ariaLabelledby}"
                    aria-live="${e=>e.ariaLive}"
                    aria-owns="${e=>e.ariaOwns}"
                    aria-relevant="${e=>e.ariaRelevant}"
                    aria-roledescription="${e=>e.ariaRoledescription}"
                    ${W("control")}
                />
                <slot name="close-button">
                    <${i.tagFor(Qt)} appearance="stealth" class="clear-button ${e=>e.value?"":"clear-button__hidden"}" part="clear-button" tabindex="-1" @click=${e=>e.handleClearInput()}>
                        <slot name="close-glyph">
                            <svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146447 0.146447C0.338683 -0.0478972 0.645911 -0.0270359 0.853553 0.146447L4.5 3.793L8.14645 0.146447C8.34171 -0.0488155 8.65829 -0.0488155 8.85355 0.146447C9.04882 0.341709 9.04882 0.658291 8.85355 0.853553L5.207 4.5L8.85355 8.14645C9.05934 8.35223 9.03129 8.67582 8.85355 8.85355C8.67582 9.03129 8.35409 9.02703 8.14645 8.85355L4.5 5.207L0.853553 8.85355C0.658291 9.04882 0.341709 9.04882 0.146447 8.85355C-0.0488155 8.65829 -0.0488155 8.34171 0.146447 8.14645L3.793 4.5L0.146447 0.853553C-0.0268697 0.680237 -0.0457894 0.34079 0.146447 0.146447Z"/>
                            </svg>
                        </slot>
                    </${i.tagFor(Qt)}>
                </slot>
            </div>
            ${Bt(i,t)}
        </div>
    </template>
`;class Uh extends P{}class qh extends ye(Uh){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class oe extends qh{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&O.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus()}handleChange(){this.$emit("change")}}r([d({attribute:"readonly",mode:"boolean"})],oe.prototype,"readOnly",void 0);r([d({mode:"boolean"})],oe.prototype,"autofocus",void 0);r([d],oe.prototype,"placeholder",void 0);r([d],oe.prototype,"list",void 0);r([d({converter:F})],oe.prototype,"maxlength",void 0);r([d({converter:F})],oe.prototype,"minlength",void 0);r([d],oe.prototype,"pattern",void 0);r([d({converter:F})],oe.prototype,"size",void 0);r([d({mode:"boolean"})],oe.prototype,"spellcheck",void 0);r([f],oe.prototype,"defaultSlottedNodes",void 0);class ga{}ht(ga,lt);ht(oe,Yt,ga);class _h extends Vt{}class Gh extends ye(_h){constructor(){super(...arguments);this.proxy=document.createElement("select")}}class ci extends Gh{constructor(){super(...arguments);this.open=!1,this.forcedPosition=!1,this.role=Zo.combobox,this.position=$e.below,this.maxHeight=0,this.displayValue=""}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex)}get value(){return N.track(this,"value"),this._value}set value(t){const e=`${this._value}`;if(this.$fastController.isConnected&&this.options){const o=this.options.findIndex(h=>h.value===t),s=this.options[this.selectedIndex],n=this.options[o],a=s?s.value:null,c=n?n.value:null;(o===-1||a!==c)&&(t="",this.selectedIndex=o),this.firstSelectedOption&&(t=this.firstSelectedOption.value)}e!==t&&(this._value=t,super.valueChanged(e,t),N.notify(this,"value"))}updateValue(t){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?this.firstSelectedOption.value:"",this.displayValue=this.firstSelectedOption?this.firstSelectedOption.textContent||this.firstSelectedOption.value:this.value),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}setPositioning(){const t=this.getBoundingClientRect(),o=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>o?$e.above:$e.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===$e.above?~~t.top:~~o}maxHeightChanged(){this.listbox&&this.listbox.style.setProperty("--max-height",`${this.maxHeight}px`)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),this.setDefaultSelectedOption(),this.value=this.firstSelectedOption.value}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(!this.open)return!0;const o=t.relatedTarget;if(this.isSameNode(o)){this.focus();return}((e=this.options)===null||e===void 0?void 0:e.includes(o))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.setProxyOptions(),this.updateValue()}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.appendChild(e)}))}keydownHandler(t){switch(super.keydownHandler(t),t.key||t.key.charCodeAt(0)){case" ":{this.typeaheadExpired&&(t.preventDefault(),this.open=!this.open);break}case"Enter":{t.preventDefault(),this.open=!this.open;break}case"Escape":{this.open&&(t.preventDefault(),this.open=!1);break}case"Tab":{if(!this.open)return!0;t.preventDefault(),this.open=!1}}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!0}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute}}r([d({attribute:"open",mode:"boolean"})],ci.prototype,"open",void 0);r([d({attribute:"position"})],ci.prototype,"positionAttribute",void 0);r([f],ci.prototype,"position",void 0);r([f],ci.prototype,"maxHeight",void 0);r([f],ci.prototype,"displayValue",void 0);class ss{}r([f],ss.prototype,"ariaExpanded",void 0);r([d({attribute:"aria-pressed",mode:"fromView"})],ss.prototype,"ariaPressed",void 0);ht(ss,lt);ht(ci,Yt,ss);const Wh=(i,t)=>x`
    <template
        class="${e=>e.open?"open":""} ${e=>e.disabled?"disabled":""} ${e=>e.position}"
        role="${e=>e.role}"
        tabindex="${e=>e.disabled?null:"0"}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusout="${(e,o)=>e.focusoutHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
    >
        <div
            aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
            aria-controls="listbox"
            aria-expanded="${e=>e.ariaExpanded}"
            aria-haspopup="listbox"
            class="control"
            part="control"
            role="button"
            ?disabled="${e=>e.disabled}"
        >
            ${jt(i,t)}
            <slot name="button-container">
                <div class="selected-value" part="selected-value">
                    <slot name="selected-value">${e=>e.displayValue}</slot>
                </div>
                <div class="indicator" part="indicator">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Bt(i,t)}
        </div>
        <div
            aria-disabled="${e=>e.disabled}"
            class="listbox"
            id="listbox"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${W("listbox")}
        >
            <slot
                ${ct({filter:Vt.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Xh=(i,t)=>x`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${it(e=>e.shimmer===!0,x`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class fo extends P{constructor(){super(...arguments);this.shape="rect"}}r([d],fo.prototype,"fill",void 0);r([d],fo.prototype,"shape",void 0);r([d],fo.prototype,"pattern",void 0);r([d({mode:"boolean"})],fo.prototype,"shimmer",void 0);const Yh=(i,t)=>x`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||ut.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${W("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${it(e=>!e.hideMark,x`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function xn(i,t,e,o){let s=rn(0,1,(i-t)/(e-t));return o===dt.rtl&&(s=1-s),s}const ns={min:0,max:0,direction:dt.ltr,orientation:ut.horizontal,disabled:!1};class we extends P{constructor(){super(...arguments);this.hideMark=!1,this.sliderDirection=dt.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=ns.direction||dt.ltr,this.sliderOrientation=ns.orientation||ut.horizontal,this.sliderMaxPosition=ns.max,this.sliderMinPosition=ns.min;else{const t=this.parentNode,{min:e,max:o,direction:s,orientation:n,disabled:a}=t;a!==void 0&&(this.disabled=a),this.sliderDirection=s||dt.ltr,this.sliderOrientation=n||ut.horizontal,this.sliderMaxPosition=o,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:dt.ltr,e=xn(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let o=Math.round((1-e)*100),s=Math.round(e*100);return s===Number.NaN&&o===Number.NaN&&(o=50,s=50),this.sliderOrientation===ut.horizontal?t===dt.rtl?`right: ${s}%; left: ${o}%;`:`left: ${s}%; right: ${o}%;`:`top: ${s}%; bottom: ${o}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=N.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMinPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}r([f],we.prototype,"positionStyle",void 0);r([d],we.prototype,"position",void 0);r([d({attribute:"hide-mark",mode:"boolean"})],we.prototype,"hideMark",void 0);r([d({attribute:"disabled",mode:"boolean"})],we.prototype,"disabled",void 0);r([f],we.prototype,"sliderOrientation",void 0);r([f],we.prototype,"sliderMinPosition",void 0);r([f],we.prototype,"sliderMaxPosition",void 0);r([f],we.prototype,"sliderDirection",void 0);const Qh=(i,t)=>x`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||ut.horizontal}"
        tabindex="${e=>e.disabled?null:0}"
        aria-valuetext="${e=>e.valueTextFormatter(e.value)}"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        aria-readonly="${e=>e.readOnly?!0:void 0}"
        aria-orientation="${e=>e.orientation}"
        class="${e=>e.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${W("track")} part="track-container" class="track">
                <slot name="track"></slot>
            </div>
            <slot></slot>
            <div
                ${W("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${e=>e.position}"
            >
                <slot name="thumb">${t.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class Zh extends P{}class Jh extends ye(Zh){constructor(){super(...arguments);this.proxy=document.createElement("input")}}var $n;(function(i){i.singleValue="single-value"})($n||($n={}));class Ht extends Jh{constructor(){super(...arguments);this.direction=dt.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=ut.horizontal,this.mode=$n.singleValue,this.keypressHandler=t=>{if(t.key===Be)t.preventDefault(),this.value=`${this.min}`;else if(t.key===je)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Re:case ge:t.preventDefault(),this.increment();break;case Se:case fe:t.preventDefault(),this.decrement();break}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown),this.thumb[e]("touchstart",this.handleThumbMouseDown),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.preventDefault(),t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),window[e]("touchmove",this.handleMouseMove),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,o=this.orientation===ut.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(o)}`},this.calculateNewValue=t=>{const e=xn(t,this.orientation===ut.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===ut.horizontal?this.trackWidth:this.trackHeight,this.direction),o=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(o)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const o=this.orientation===ut.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(o)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const o=Math.round(e/this.step),s=e-o*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=s>=Number(this.step)/2?e-s+Number(this.step):e-s,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=si(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==dt.rtl&&this.orientation!==ut.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),o=e<Number(this.max)?`${e}`:`${this.max}`;this.value=o}decrement(){const t=this.direction!==dt.rtl&&this.orientation!==ut.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),o=e>Number(this.min)?`${e}`:`${this.min}`;this.value=o}setThumbPositionForOrientation(t){const e=xn(Number(this.value),Number(this.min),Number(this.max),t),o=Math.round((1-e)*100);this.orientation===ut.horizontal?this.position=this.isDragging?`right: ${o}%; transition: none;`:`right: ${o}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${o}%; transition: none;`:`bottom: ${o}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}r([d({attribute:"readonly",mode:"boolean"})],Ht.prototype,"readOnly",void 0);r([f],Ht.prototype,"direction",void 0);r([f],Ht.prototype,"isDragging",void 0);r([f],Ht.prototype,"position",void 0);r([f],Ht.prototype,"trackWidth",void 0);r([f],Ht.prototype,"trackMinWidth",void 0);r([f],Ht.prototype,"trackHeight",void 0);r([f],Ht.prototype,"trackLeft",void 0);r([f],Ht.prototype,"trackMinHeight",void 0);r([f],Ht.prototype,"valueTextFormatter",void 0);r([d({converter:F})],Ht.prototype,"min",void 0);r([d({converter:F})],Ht.prototype,"max",void 0);r([d({converter:F})],Ht.prototype,"step",void 0);r([d],Ht.prototype,"orientation",void 0);r([d],Ht.prototype,"mode",void 0);const Kh=(i,t)=>x`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,o)=>e.keypressHandler(o.event)}"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ct("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`;class tu extends P{}class eu extends ln(tu){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class wn extends eu{constructor(){super();this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case ve:case io:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}r([d({attribute:"readonly",mode:"boolean"})],wn.prototype,"readOnly",void 0);r([f],wn.prototype,"defaultSlottedNodes",void 0);const iu=(i,t)=>x`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class ou extends P{}const su=(i,t)=>x`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class ma extends P{}r([d({mode:"boolean"})],ma.prototype,"disabled",void 0);const nu=(i,t)=>x`
    <template class="${e=>e.orientation}">
        ${jt(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${ct("tabs")}></slot>

            ${it(e=>e.showActiveIndicator,x`
                    <div
                        ${W("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Bt(i,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${ct("tabpanels")}></slot>
        </div>
    </template>
`;var rs;(function(i){i.vertical="vertical",i.horizontal="horizontal"})(rs||(rs={}));class Le extends P{constructor(){super(...arguments);this.orientation=rs.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",o=this.isHorizontal()?t:e;this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((s,n)=>{if(s.slot==="tab"&&this.isFocusableElement(s)){this.activeindicator&&(this.showActiveIndicator=!0);const a=this.tabIds[n],c=this.tabpanelIds[n];s.setAttribute("id",typeof a!="string"?`tab-${n+1}`:a),s.setAttribute("aria-selected",this.activeTabIndex===n?"true":"false"),s.setAttribute("aria-controls",typeof c!="string"?`panel-${n+1}`:c),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",this.activeTabIndex===n?"0":"-1"),this.activeTabIndex===n&&(this.activetab=s)}s.style[t]="",s.style[e]="",s.style[o]=`${n+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")})},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach((t,e)=>{const o=this.tabIds[e],s=this.tabpanelIds[e];t.setAttribute("id",typeof s!="string"?`panel-${e+1}`:s),t.setAttribute("aria-labelledby",typeof o!="string"?`tab-${e+1}`:o),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Se:t.preventDefault(),this.adjustBackward(t);break;case Re:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case ge:t.preventDefault(),this.adjustBackward(t);break;case fe:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case Be:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case je:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let o=0;for(o=this.activetab?e.indexOf(this.activetab)+1:1,o===e.length&&(o=0);o<e.length&&e.length>1;)if(this.isFocusableElement(e[o])){this.moveToTabByIndex(e,o);break}else{if(this.activetab&&o===e.indexOf(this.activetab))break;o+1>=e.length?o=0:o+=1}},this.adjustBackward=t=>{const e=this.tabs;let o=0;for(o=this.activetab?e.indexOf(this.activetab)-1:0,o=o<0?e.length-1:o;o>=0&&e.length>1;)if(this.isFocusableElement(e[o])){this.moveToTabByIndex(e,o);break}else o-1<0?o=e.length-1:o-=1},this.moveToTabByIndex=(t,e)=>{const o=t[e];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(o=>o.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>t.getAttribute("id"))}getTabPanelIds(){return this.tabpanels.map(t=>t.getAttribute("id"))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===rs.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[o];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[o];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const a=n-s;this.activeIndicatorRef.style.transform=`${e}(${a}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Zr(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}r([d],Le.prototype,"orientation",void 0);r([d],Le.prototype,"activeid",void 0);r([f],Le.prototype,"tabs",void 0);r([f],Le.prototype,"tabpanels",void 0);r([d({mode:"boolean"})],Le.prototype,"activeindicator",void 0);r([f],Le.prototype,"activeIndicatorRef",void 0);r([f],Le.prototype,"showActiveIndicator",void 0);ht(Le,Yt);class ru extends P{}class au extends ye(ru){constructor(){super(...arguments);this.proxy=document.createElement("textarea")}}var as;(function(i){i.none="none",i.both="both",i.horizontal="horizontal",i.vertical="vertical"})(as||(as={}));class zt extends au{constructor(){super(...arguments);this.resize=as.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}handleChange(){this.$emit("change")}}r([d({mode:"boolean"})],zt.prototype,"readOnly",void 0);r([d],zt.prototype,"resize",void 0);r([d({mode:"boolean"})],zt.prototype,"autofocus",void 0);r([d({attribute:"form"})],zt.prototype,"formId",void 0);r([d],zt.prototype,"list",void 0);r([d({converter:F})],zt.prototype,"maxlength",void 0);r([d({converter:F})],zt.prototype,"minlength",void 0);r([d],zt.prototype,"name",void 0);r([d],zt.prototype,"placeholder",void 0);r([d({converter:F,mode:"fromView"})],zt.prototype,"cols",void 0);r([d({converter:F,mode:"fromView"})],zt.prototype,"rows",void 0);r([d({mode:"boolean"})],zt.prototype,"spellcheck",void 0);r([f],zt.prototype,"defaultSlottedNodes",void 0);ht(zt,is);const lu=(i,t)=>x`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==as.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ct("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,o)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${W("control")}
        ></textarea>
    </template>
`,cu=(i,t)=>x`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @click="${(e,o)=>e.clickHandler(o.event)}"
        @focusin="${(e,o)=>e.focusinHandler(o.event)}"
        @keydown="${(e,o)=>e.keydownHandler(o.event)}"
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${jt(i,t)}
            <slot
                ${ct({filter:ei(),property:"slottedItems"})}
            ></slot>
            ${Bt(i,t)}
        </div>
    </template>
`,ba=Object.freeze({[Di.ArrowUp]:{[ut.vertical]:-1},[Di.ArrowDown]:{[ut.vertical]:1},[Di.ArrowLeft]:{[ut.horizontal]:{[dt.ltr]:-1,[dt.rtl]:1}},[Di.ArrowRight]:{[ut.horizontal]:{[dt.ltr]:1,[dt.rtl]:-1}}});class ke extends P{constructor(){super(...arguments);this._activeIndex=0,this.direction=dt.ltr,this.orientation=ut.horizontal}get activeIndex(){return N.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=rn(0,this.focusableElements.length-1,t),N.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var e;const o=(e=this.focusableElements)===null||e===void 0?void 0:e.indexOf(t.target);return o>-1&&this.activeIndex!==o&&this.setFocusedElement(o),!0}connectedCallback(){super.connectedCallback(),this.direction=si(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,o,s,n,a;return(a=(s=(o=(e=ba[t])===null||e===void 0?void 0:e[this.orientation])===null||o===void 0?void 0:o[this.direction])!==null&&s!==void 0?s:(n=ba[t])===null||n===void 0?void 0:n[this.orientation])!==null&&a!==void 0?a:0}keydownHandler(t){const e=t.key;if(!(e in Di)||t.defaultPrevented||t.shiftKey)return!0;const o=this.getDirectionalIncrementer(e);if(!o)return!t.target.closest("[role=radiogroup]");const s=this.activeIndex+o;return this.focusableElements[s]&&t.preventDefault(),this.setFocusedElement(s),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){this.focusableElements=this.allSlottedItems.reduce(ke.reduceFocusableItems,[]),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var o,s,n,a;const c=e.getAttribute("role")==="radio",h=(s=(o=e.$fastController)===null||o===void 0?void 0:o.definition.shadowOptions)===null||s===void 0?void 0:s.delegatesFocus,u=Array.from((a=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&a!==void 0?a:[]).some($=>ua($));return ua(e)||c||h||u?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(ke.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}}r([f],ke.prototype,"direction",void 0);r([d],ke.prototype,"orientation",void 0);r([f],ke.prototype,"slottedItems",void 0);r([f],ke.prototype,"slottedLabel",void 0);class ls{}r([d({attribute:"aria-labelledby"})],ls.prototype,"ariaLabelledby",void 0);r([d({attribute:"aria-label"})],ls.prototype,"ariaLabel",void 0);ht(ls,lt);ht(ke,Yt,ls);const du=(i,t)=>x`
        ${it(e=>e.tooltipVisible,x`
            <${i.tagFor(U)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${W("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${i.tagFor(U)}>
        `)}
    `;var Ge;(function(i){i.top="top",i.right="right",i.bottom="bottom",i.left="left",i.start="start",i.end="end"})(Ge||(Ge={}));class xt extends P{constructor(){super(...arguments);this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="true",this.verticalInset="false",this.horizontalScaling="anchor",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=dt.ltr,this.delayTimer=null,this.isAnchorHoveredFocused=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd")},this.handleAnchorMouseOver=t=>{this.startHoverTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.clearDelayTimer()},this.handleAnchorFocusIn=t=>{this.startHoverTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.clearDelayTimer()},this.startHoverTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.delayTimer===null&&(this.delayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearDelayTimer=()=>{this.delayTimer!==null&&(clearTimeout(this.delayTimer),this.delayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case eo:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=si(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),O.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{!this.tooltipVisible||(this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{!this.tooltipVisible||(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&this.updateLayout()}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(o=>{o.id===e&&this.startHoverTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateLayout(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.position){case Ge.top:case Ge.bottom:this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition=void 0,this.horizontalInset="true",this.verticalInset="false",this.horizontalScaling="anchor",this.verticalScaling="content";break;case Ge.right:case Ge.left:case Ge.start:case Ge.end:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="locktodefault",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=this.position,this.horizontalInset="false",this.verticalInset="true",this.horizontalScaling="content",this.verticalScaling="anchor";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.horizontalInset="true",this.verticalInset="false",this.horizontalScaling="anchor",this.verticalScaling="content";break}}}r([d({mode:"boolean"})],xt.prototype,"visible",void 0);r([d],xt.prototype,"anchor",void 0);r([d],xt.prototype,"delay",void 0);r([d],xt.prototype,"position",void 0);r([d({attribute:"auto-update-mode"})],xt.prototype,"autoUpdateMode",void 0);r([d({attribute:"horizontal-viewport-lock"})],xt.prototype,"horizontalViewportLock",void 0);r([d({attribute:"vertical-viewport-lock"})],xt.prototype,"verticalViewportLock",void 0);r([f],xt.prototype,"anchorElement",void 0);r([f],xt.prototype,"viewportElement",void 0);r([f],xt.prototype,"verticalPositioningMode",void 0);r([f],xt.prototype,"horizontalPositioningMode",void 0);r([f],xt.prototype,"horizontalInset",void 0);r([f],xt.prototype,"verticalInset",void 0);r([f],xt.prototype,"horizontalScaling",void 0);r([f],xt.prototype,"verticalScaling",void 0);r([f],xt.prototype,"verticalDefaultPosition",void 0);r([f],xt.prototype,"horizontalDefaultPosition",void 0);r([f],xt.prototype,"tooltipVisible",void 0);r([f],xt.prototype,"currentDirection",void 0);const hu=(i,t)=>x`
    <template
        role="treeitem"
        slot="${e=>e.isNestedItem()?"item":void 0}"
        tabindex="${e=>e.focusable?0:-1}"
        class="${e=>e.expanded?"expanded":""} ${e=>e.selected?"selected":""} ${e=>e.nested?"nested":""}
            ${e=>e.disabled?"disabled":""}"
        aria-expanded="${e=>e.childItems&&e.childItemLength()>0?e.expanded:void 0}"
        aria-selected="${e=>e.selected}"
        aria-disabled="${e=>e.disabled}"
        @click="${(e,o)=>e.handleClick(o.event)}"
        ${tn({property:"childItems",filter:ei()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${it(e=>e.childItems&&e.childItemLength()>0,x`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,o)=>e.handleExpandCollapseButtonClick(o.event)}"
                            ${W("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${jt(i,t)}
                <slot></slot>
                ${Bt(i,t)}
            </div>
        </div>
        ${it(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),x`
                <div role="group" class="items" part="items">
                    <slot name="item" ${ct("items")}></slot>
                </div>
            `)}
    </template>
`;function di(i){return Fi(i)&&i.getAttribute("role")==="treeitem"}class $t extends P{constructor(){super(...arguments);this.expanded=!1,this.focusable=!1,this.handleExpandCollapseButtonClick=t=>{this.disabled||(t.preventDefault(),this.setExpanded(!this.expanded))},this.handleClick=t=>{if(!t.defaultPrevented)return t.composedPath().find(s=>s instanceof HTMLElement&&di(s))===this&&this.handleSelected(),!0},this.isNestedItem=()=>di(this.parentElement)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(o=>{di(o)&&(o.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>di(e));return t?t.length:0}handleSelected(t){this.$emit("selected-change",t)}setExpanded(t){this.expanded=t,this.$emit("expanded-change",this)}}r([d({mode:"boolean"})],$t.prototype,"expanded",void 0);r([d({mode:"boolean"})],$t.prototype,"selected",void 0);r([d({mode:"boolean"})],$t.prototype,"disabled",void 0);r([f],$t.prototype,"focusable",void 0);r([f],$t.prototype,"childItems",void 0);r([f],$t.prototype,"items",void 0);r([f],$t.prototype,"nested",void 0);r([f],$t.prototype,"renderCollapsedChildren",void 0);ht($t,Yt);const uu=(i,t)=>x`
    <template
        role="tree"
        ${W("treeView")}
        @keydown="${(e,o)=>e.handleKeyDown(o.event)}"
        @focusout="${(e,o)=>e.handleBlur(o.event)}"
        @focusin="${(e,o)=>e.handleFocus(o.event)}"
    >
        <slot ${ct("slottedTreeItems")}></slot>
    </template>
`;class go extends P{constructor(){super(...arguments);this.handleBlur=t=>{const{relatedTarget:e,target:o}=t;o instanceof HTMLElement&&(e===null||!this.contains(e))&&this.setAttribute("tabindex","0")},this.handleFocus=t=>{const{relatedTarget:e,target:o}=t;if(o instanceof HTMLElement&&(e===null||!this.contains(e))){const s=this;o===this&&this.currentFocused instanceof $t&&($t.focusItem(this.currentFocused),this.currentFocused.setAttribute("tabindex","0")),s.setAttribute("tabindex","-1")}},this.handleKeyDown=t=>{if(!this.treeItems)return!0;switch(t.key){case Be:this.treeItems&&this.treeItems.length&&($t.focusItem(this.treeItems[0]),this.treeItems[0].setAttribute("tabindex","0"));break;case je:this.treeItems&&this.treeItems.length&&($t.focusItem(this.treeItems[this.treeItems.length-1]),this.treeItems[this.treeItems.length-1].setAttribute("tabindex","0"));break;case Se:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof $t&&e.childItemLength()>0&&(e.expanded=!1)}break;case Re:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof $t&&e.childItemLength()>0&&(e.expanded=!0)}break;case fe:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);break;case ge:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);break;case ve:this.handleSelected(t.target);break;default:return!0}},this.setItems=()=>{let t=this.treeItems.findIndex(this.isSelectedElement);t===-1&&(t=this.treeItems.findIndex(this.isFocusableElement));for(let e=0;e<this.treeItems.length;e++)e===t&&(this.treeItems[e].setAttribute("tabindex","0"),this.currentFocused=this.treeItems[e]),this.treeItems[e].addEventListener("selected-change",this.handleItemSelected)},this.resetItems=()=>{for(let t=0;t<this.treeItems.length;t++)this.treeItems[t].removeEventListener("selected-change",this.handleItemSelected)},this.handleItemSelected=t=>{const e=t.target;e!==this.currentSelected&&this.handleSelected(e)},this.isFocusableElement=t=>di(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(t,e){this.$fastController.isConnected&&(this.resetItems(),this.treeItems=this.getVisibleNodes(),this.setItems(),this.checkForNestedItems()&&this.slottedTreeItems.forEach(o=>{di(o)&&(o.nested=!0)}))}checkForNestedItems(){return this.slottedTreeItems.some(t=>di(t)&&t.querySelector("[role='treeitem']"))}connectedCallback(){super.connectedCallback(),this.treeItems=this.getVisibleNodes(),O.queueUpdate(()=>{const t=this.treeView.querySelector("[aria-selected='true']");t&&(this.currentSelected=t)})}focusNextNode(t,e){const o=this.getVisibleNodes();if(!o)return;const s=o.indexOf(e),n=o[s];(t<0&&s>0||t>0&&s<o.length-1)&&n.setAttribute("tabindex","-1");const a=o[o.indexOf(e)+t];Fi(a)&&($t.focusItem(a),a.setAttribute("tabindex","0"),this.currentFocused=a)}handleSelected(t){this.currentSelected!==t&&(t.setAttribute("tabindex","0"),this.currentSelected instanceof $t&&this.currentFocused&&(t.disabled||(this.currentSelected.selected=!1),this.currentFocused.setAttribute("tabindex","-1")),this.currentSelected||this.slottedTreeItems.forEach(e=>{e instanceof $t&&e.setAttribute("tabindex","-1")}),t.disabled||(t.selected=!0,this.currentSelected=t),this.currentFocused=t)}getVisibleNodes(){return _c(this,"[role='treeitem']")||[]}}r([d({attribute:"render-collapsed-nodes"})],go.prototype,"renderCollapsedNodes",void 0);r([f],go.prototype,"currentSelected",void 0);r([f],go.prototype,"nested",void 0);r([f],go.prototype,"slottedTreeItems",void 0);function Pe(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function kn(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function hi(i,t,e){return isNaN(i)?t:t+i*(e-t)}function va(i){return i*(Math.PI/180)}function pu(i){return i*(180/Math.PI)}function fu(i){const t=Math.round(Pe(i,0,255)).toString(16);return t.length===1?"0"+t:t}function Mt(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function Cn(i,t,e){if(i<=0)return t%360;if(i>=1)return e%360;const o=(t-e+360)%360,s=(e-t+360)%360;return o<=s?(t-o*i+360)%360:(t+o*i+360)%360}function wt(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class ui{constructor(t,e,o){this.h=t,this.s=e,this.l=o}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new ui(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new ui(wt(this.h,t),wt(this.s,t),wt(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class mo{constructor(t,e,o){this.h=t,this.s=e,this.v=o}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.v)?new mo(t.h,t.s,t.v):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new mo(wt(this.h,t),wt(this.s,t),wt(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class Ot{constructor(t,e,o){this.l=t,this.a=e,this.b=o}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Ot(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Ot(wt(this.l,t),wt(this.a,t),wt(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ot.epsilon=216/24389;Ot.kappa=24389/27;class zi{constructor(t,e,o){this.l=t,this.c=e,this.h=o}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.c)&&!isNaN(t.h)?new zi(t.l,t.c,t.h):null}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new zi(wt(this.l,t),wt(this.c,t),wt(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class bt{constructor(t,e,o,s){this.r=t,this.g=e,this.b=o,this.a=typeof s=="number"&&!isNaN(s)?s:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new bt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(hi(this.r,0,255))},${Math.round(hi(this.g,0,255))},${Math.round(hi(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(hi(this.r,0,255))},${Math.round(hi(this.g,0,255))},${Math.round(hi(this.b,0,255))},${Pe(this.a,0,1)})`}roundToPrecision(t){return new bt(wt(this.r,t),wt(this.g,t),wt(this.b,t),wt(this.a,t))}clamp(){return new bt(Pe(this.r,0,1),Pe(this.g,0,1),Pe(this.b,0,1),Pe(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return fu(hi(t,0,255))}}class Jt{constructor(t,e,o){this.x=t,this.y=e,this.z=o}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new Jt(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new Jt(wt(this.x,t),wt(this.y,t),wt(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}Jt.whitePoint=new Jt(.95047,1,1.08883);function Tn(i){return i.r*.2126+i.g*.7152+i.b*.0722}function In(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return Tn(new bt(t(i.r),t(i.g),t(i.b),1))}const ya=(i,t)=>(i+.05)/(t+.05);function xa(i,t){const e=In(i),o=In(t);return e>o?ya(e,o):ya(o,e)}function bo(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),o=t-e;let s=0;o!==0&&(t===i.r?s=60*((i.g-i.b)/o%6):t===i.g?s=60*((i.b-i.r)/o+2):s=60*((i.r-i.g)/o+4)),s<0&&(s+=360);const n=(t+e)/2;let a=0;return o!==0&&(a=o/(1-Math.abs(2*n-1))),new ui(s,a,n)}function Fn(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,o=e*(1-Math.abs(i.h/60%2-1)),s=i.l-e/2;let n=0,a=0,c=0;return i.h<60?(n=e,a=o,c=0):i.h<120?(n=o,a=e,c=0):i.h<180?(n=0,a=e,c=o):i.h<240?(n=0,a=o,c=e):i.h<300?(n=o,a=0,c=e):i.h<360&&(n=e,a=0,c=o),new bt(n+s,a+s,c+s,t)}function $a(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),o=t-e;let s=0;o!==0&&(t===i.r?s=60*((i.g-i.b)/o%6):t===i.g?s=60*((i.b-i.r)/o+2):s=60*((i.r-i.g)/o+4)),s<0&&(s+=360);let n=0;return t!==0&&(n=o/t),new mo(s,n,t)}function gu(i,t=1){const e=i.s*i.v,o=e*(1-Math.abs(i.h/60%2-1)),s=i.v-e;let n=0,a=0,c=0;return i.h<60?(n=e,a=o,c=0):i.h<120?(n=o,a=e,c=0):i.h<180?(n=0,a=e,c=o):i.h<240?(n=0,a=o,c=e):i.h<300?(n=o,a=0,c=e):i.h<360&&(n=e,a=0,c=o),new bt(n+s,a+s,c+s,t)}function mu(i){let t=0,e=0;return i.h!==0&&(t=Math.cos(va(i.h))*i.c,e=Math.sin(va(i.h))*i.c),new Ot(i.l,t,e)}function bu(i){let t=0;(Math.abs(i.b)>.001||Math.abs(i.a)>.001)&&(t=pu(Math.atan2(i.b,i.a))),t<0&&(t+=360);const e=Math.sqrt(i.a*i.a+i.b*i.b);return new zi(i.l,e,t)}function vu(i){const t=(i.l+16)/116,e=t+i.a/500,o=t-i.b/200,s=Math.pow(e,3),n=Math.pow(t,3),a=Math.pow(o,3);let c=0;s>Ot.epsilon?c=s:c=(116*e-16)/Ot.kappa;let h=0;i.l>Ot.epsilon*Ot.kappa?h=n:h=i.l/Ot.kappa;let u=0;return a>Ot.epsilon?u=a:u=(116*o-16)/Ot.kappa,c=Jt.whitePoint.x*c,h=Jt.whitePoint.y*h,u=Jt.whitePoint.z*u,new Jt(c,h,u)}function yu(i){function t(h){return h>Ot.epsilon?Math.pow(h,1/3):(Ot.kappa*h+16)/116}const e=t(i.x/Jt.whitePoint.x),o=t(i.y/Jt.whitePoint.y),s=t(i.z/Jt.whitePoint.z),n=116*o-16,a=500*(e-o),c=200*(o-s);return new Ot(n,a,c)}function Sn(i){function t(h){return h<=.04045?h/12.92:Math.pow((h+.055)/1.055,2.4)}const e=t(i.r),o=t(i.g),s=t(i.b),n=e*.4124564+o*.3575761+s*.1804375,a=e*.2126729+o*.7151522+s*.072175,c=e*.0193339+o*.119192+s*.9503041;return new Jt(n,a,c)}function wa(i,t=1){function e(a){return a<=.0031308?a*12.92:1.055*Math.pow(a,1/2.4)-.055}const o=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),s=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new bt(o,s,n,t)}function Rn(i){return yu(Sn(i))}function ka(i,t=1){return wa(vu(i),t)}function Dn(i){return bu(Rn(i))}function Ca(i,t=1){return ka(mu(i),t)}function Ta(i,t,e=18){const o=Dn(i);let s=o.c+t*e;return s<0&&(s=0),Ca(new zi(o.l,s,o.h))}function En(i,t){return i*t}function Ia(i,t){return new bt(En(i.r,t.r),En(i.g,t.g),En(i.b,t.b),1)}function On(i,t){return i<.5?Pe(2*t*i,0,1):Pe(1-2*(1-t)*(1-i),0,1)}function Fa(i,t){return new bt(On(i.r,t.r),On(i.g,t.g),On(i.b,t.b),1)}var Sa;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(Sa||(Sa={}));function xu(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new bt(Mt(i,t.r,e.r),Mt(i,t.g,e.g),Mt(i,t.b,e.b),Mt(i,t.a,e.a))}function $u(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new ui(Cn(i,t.h,e.h),Mt(i,t.s,e.s),Mt(i,t.l,e.l))}function wu(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new mo(Cn(i,t.h,e.h),Mt(i,t.s,e.s),Mt(i,t.v,e.v))}function ku(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Jt(Mt(i,t.x,e.x),Mt(i,t.y,e.y),Mt(i,t.z,e.z))}function Cu(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Ot(Mt(i,t.l,e.l),Mt(i,t.a,e.a),Mt(i,t.b,e.b))}function Tu(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new zi(Mt(i,t.l,e.l),Mt(i,t.c,e.c),Cn(i,t.h,e.h))}var se;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(se||(se={}));function vo(i,t,e,o){if(isNaN(i)||i<=0)return e;if(i>=1)return o;switch(t){case se.HSL:return Fn($u(i,bo(e),bo(o)));case se.HSV:return gu(wu(i,$a(e),$a(o)));case se.XYZ:return wa(ku(i,Sn(e),Sn(o)));case se.LAB:return ka(Cu(i,Rn(e),Rn(o)));case se.LCH:return Ca(Tu(i,Dn(e),Dn(o)));default:return xu(i,e,o)}}class ce{constructor(t){if(t==null||t.length===0)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(t==null||t.length===0)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let o=0;o<t.length;o++)o===0?e[o]={color:t[o],position:0}:o===t.length-1?e[o]={color:t[o],position:1}:e[o]={color:t[o],position:o*(1/(t.length-1))};return new ce(e)}getColor(t,e=se.RGB){if(this.stops.length===1)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let o=0;for(let a=0;a<this.stops.length;a++)this.stops[a].position<=t&&(o=a);let s=o+1;s>=this.stops.length&&(s=this.stops.length-1);const n=(t-this.stops[o].position)*(1/(this.stops[s].position-this.stops[o].position));return vo(n,e,this.stops[o].color,this.stops[s].color)}trim(t,e,o=se.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new ce([{color:this.getColor(t,o),position:0}]);const s=[];for(let c=0;c<this.stops.length;c++)this.stops[c].position>=t&&this.stops[c].position<=e&&s.push(this.stops[c]);if(s.length===0)return new ce([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);s[0].position!==t&&s.unshift({color:this.getColor(t),position:t}),s[s.length-1].position!==e&&s.push({color:this.getColor(e),position:e});const n=e-t,a=new Array(s.length);for(let c=0;c<s.length;c++)a[c]={color:s[c].color,position:(s[c].position-t)/n};return new ce(a)}findNextColor(t,e,o=!1,s=se.RGB,n=.005,a=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const c=this.getColor(t,s),h=o?0:1,u=this.getColor(h,s);if(xa(c,u)<=e)return h;let y=o?0:t,k=o?t:0,Y=h,G=0;for(;G<=a;){Y=Math.abs(k-y)/2+y;const K=this.getColor(Y,s),et=xa(c,K);if(Math.abs(et-e)<=n)return Y;et>e?o?y=Y:k=Y:o?k=Y:y=Y,G++}return Y}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new ce(t)}sortColorScaleStops(t){return t.sort((e,o)=>{const s=e.position,n=o.position;return s<n?-1:s>n?1:0})}}const Iu=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Mi(i){const t=Iu.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const s=e.charAt(0),n=e.charAt(1),a=e.charAt(2);e=s.concat(s,n,n,a,a)}const o=parseInt(e,16);return isNaN(o)?null:new bt(kn((o&16711680)>>>16,0,255),kn((o&65280)>>>8,0,255),kn(o&255,0,255),1)}class We{constructor(t){this.config=Object.assign({},We.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const o in t)this.config[o]&&(this.config[o].equalValue?this.config[o].equalValue(t[o])||(this.config[o]=t[o],e=!0):t[o]!==this.config[o]&&(this.config[o]=t[o],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=bo(this.config.baseColor),o=new ce([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark),s=o.getColor(0),n=o.getColor(1);let a=s,c=n;if(t.s>=this.config.saturationAdjustmentCutoff&&(a=Ta(a,this.config.saturationLight),c=Ta(c,this.config.saturationDark)),this.config.multiplyLight!==0){const h=Ia(this.config.baseColor,a);a=vo(this.config.multiplyLight,this.config.interpolationMode,a,h)}if(this.config.multiplyDark!==0){const h=Ia(this.config.baseColor,c);c=vo(this.config.multiplyDark,this.config.interpolationMode,c,h)}if(this.config.overlayLight!==0){const h=Fa(this.config.baseColor,a);a=vo(this.config.overlayLight,this.config.interpolationMode,a,h)}if(this.config.overlayDark!==0){const h=Fa(this.config.baseColor,c);c=vo(this.config.overlayDark,this.config.interpolationMode,c,h)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new ce([{position:0,color:this.config.baseColor},{position:1,color:c.clamp()}]):this.config.baseScalePosition>=1?new ce([{position:0,color:a.clamp()},{position:1,color:this.config.baseColor}]):new ce([{position:0,color:a.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:c.clamp()}]):new ce([{position:0,color:a.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:c.clamp()}])}}We.defaultPaletteConfig={baseColor:Mi("#808080"),steps:11,interpolationMode:se.RGB,scaleColorLight:new bt(1,1,1,1),scaleColorDark:new bt(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};We.greyscalePaletteConfig={baseColor:Mi("#808080"),steps:11,interpolationMode:se.RGB,scaleColorLight:new bt(1,1,1,1),scaleColorDark:new bt(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};We.defaultPaletteConfig.scaleColorLight,We.defaultPaletteConfig.scaleColorDark;class cs{constructor(t){this.palette=[],this.config=Object.assign({},cs.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,o=.06,s=new bt(e,e,e,1),n=94,c=new We(Object.assign(Object.assign({},We.greyscalePaletteConfig),{baseColor:s,baseScalePosition:(1-e)*100/n,steps:t})).palette,h=Tn(this.config.baseColor),u=bo(this.config.baseColor).l,$=(h+u)/2,k=this.matchRelativeLuminanceIndex($,c)/(t-1),G=this.matchRelativeLuminanceIndex(e,c)/(t-1),K=bo(this.config.baseColor),et=Fn(ui.fromObject({h:K.h,s:K.s,l:e})),Gt=Fn(ui.fromObject({h:K.h,s:K.s,l:o})),Kt=new Array(5);Kt[0]={position:0,color:new bt(1,1,1,1)},Kt[1]={position:k,color:this.config.baseColor},Kt[2]={position:G,color:et},Kt[3]={position:.99,color:Gt},Kt[4]={position:1,color:new bt(0,0,0,1)};const Ss=new ce(Kt);this.palette=new Array(t);for(let Qe=0;Qe<t;Qe++){const Io=Ss.getColor(Qe/(t-1),se.RGB);this.palette[Qe]=Io}}matchRelativeLuminanceIndex(t,e){let o=Number.MAX_VALUE,s=0,n=0;const a=e.length;for(;n<a;n++){const c=Math.abs(Tn(e[n])-t);c<o&&(o=c,s=n)}return s}}cs.defaultPaletteConfig={baseColor:Mi("#808080"),steps:94};function Ra(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,o=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(o.relativeLuminance+.05)}const Ae=Object.freeze({create(i,t,e){return new ds(i,t,e)},from(i){return new ds(i.r,i.g,i.b)}});function Fu(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class ds extends bt{constructor(t,e,o){super(t,e,o,1);this.toColorString=this.toStringHexRGB,this.contrast=Ra.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=In(this)}static fromObject(t){return new ds(t.r,t.g,t.b)}}function Ln(i,t,e=0,o=i.length-1){if(o===e)return i[e];const s=Math.floor((o-e)/2)+e;return t(i[s])?Ln(i,t,e,s):Ln(i,t,s+1,o)}const Su=(-.1+Math.sqrt(.21))/2;function Ru(i){return i.relativeLuminance<=Su}function pi(i){return Ru(i)?-1:1}function Du(i,t,e){return typeof i=="number"?hs.from(Ae.create(i,t,e)):hs.from(i)}function Eu(i){return Fu(i)?us.from(i):us.from(Ae.create(i.r,i.g,i.b))}const hs=Object.freeze({create:Du,from:Eu});class us{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,o,s){o===void 0&&(o=this.closestIndexOf(t));let n=this.swatches;const a=this.lastIndex;let c=o;s===void 0&&(s=pi(t));const h=u=>Ra(t,u)>=e;return s===-1&&(n=this.reversedSwatches,c=a-c),Ln(n,h,c,a)}get(t){return this.swatches[t]||this.swatches[Pe(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const o=this.swatches.reduce((s,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(s.relativeLuminance-t.relativeLuminance)?n:s);return e=this.swatches.indexOf(o),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new us(t,Object.freeze(new cs({baseColor:bt.fromObject(t)}).palette.map(e=>{const o=Mi(e.toStringHexRGB());return Ae.create(o.r,o.g,o.b)})))}}function Ou(i,t,e,o,s,n,a,c,h){const u=i.source,$=t.closestIndexOf(e),y=Math.max(a,c,h),k=$>=y?-1:1,G=i.closestIndexOf(u),K=G+k*-1*o,et=K+k*s,Gt=K+k*n;return{rest:i.get(K),hover:i.get(G),active:i.get(et),focus:i.get(Gt)}}function Lu(i,t,e,o,s,n,a){const c=i.source,h=i.closestIndexOf(c),u=pi(t),$=h+(u===1?Math.min(o,s):Math.max(u*o,u*s)),y=i.colorContrast(t,e,$,u),k=i.closestIndexOf(y),Y=k+u*Math.abs(o-s),G=u===1?o<s:u*o>u*s;let K,et;return G?(K=k,et=Y):(K=Y,et=k),{rest:i.get(K),hover:i.get(et),active:i.get(K+u*n),focus:i.get(K+u*a)}}const Da=Ae.create(1,1,1),Pu=Ae.create(0,0,0),Au=Ae.create(.5,.5,.5),Pn=Mi("#DA1A5F"),Vu=Ae.create(Pn.r,Pn.g,Pn.b);function Hu(i,t){return i.contrast(Da)>=t?Da:Pu}function zu(i,t,e,o,s,n){const a=i.closestIndexOf(t),c=Math.max(e,o,s,n),h=a>=c?-1:1;return{rest:i.get(a+h*e),hover:i.get(a+h*o),active:i.get(a+h*s),focus:i.get(a+h*n)}}function Mu(i,t,e,o,s,n){const a=pi(t),c=i.closestIndexOf(t);return{rest:i.get(c-a*e),hover:i.get(c-a*o),active:i.get(c-a*s),focus:i.get(c-a*n)}}function Nu(i,t,e){const o=i.closestIndexOf(t);return i.get(o-(o<e?e*-1:e))}function Bu(i,t,e,o,s,n,a,c,h,u){const $=Math.max(e,o,s,n,a,c,h,u),y=i.closestIndexOf(t),k=y>=$?-1:1;return{rest:i.get(y+k*e),hover:i.get(y+k*o),active:i.get(y+k*s),focus:i.get(y+k*n)}}function ju(i,t,e,o,s,n){const a=pi(t),c=i.closestIndexOf(i.colorContrast(t,4.5)),h=c+a*Math.abs(e-o),u=a===1?e<o:a*e>a*o;let $,y;return u?($=c,y=h):($=h,y=c),{rest:i.get($),hover:i.get(y),active:i.get($+a*s),focus:i.get($+a*n)}}function Uu(i,t){return i.colorContrast(t,3.5)}function qu(i,t,e){return i.colorContrast(e,3.5,i.closestIndexOf(i.source),pi(t)*-1)}function _u(i,t){return i.colorContrast(t,14)}function Gu(i,t){return i.colorContrast(t,4.5)}function ps(i){return Ae.create(i,i,i)}var An;(function(i){i[i.LightMode=1]="LightMode",i[i.DarkMode=.23]="DarkMode"})(An||(An={}));function Wu(i,t,e){return i.get(i.closestIndexOf(ps(t))+e)}function Xu(i,t,e){const o=i.closestIndexOf(ps(t))-e;return i.get(o-e)}function Yu(i,t){return i.get(i.closestIndexOf(ps(t)))}function Vn(i,t,e,o,s,n){return Math.max(i.closestIndexOf(ps(t))+e,o,s,n)}function Qu(i,t,e,o,s,n){return i.get(Vn(i,t,e,o,s,n))}function Zu(i,t,e,o,s,n){return i.get(Vn(i,t,e,o,s,n)+e)}function Ju(i,t,e,o,s,n){return i.get(Vn(i,t,e,o,s,n)+e*2)}function Ku(i,t,e,o,s,n){const a=i.closestIndexOf(t),c=pi(t),h=a+c*e,u=h+c*(o-e),$=h+c*(s-e),y=h+c*(n-e);return{rest:i.get(h),hover:i.get(u),active:i.get($),focus:i.get(y)}}function tp(i,t,e){return i.get(i.closestIndexOf(t)+pi(t)*e)}const{create:g}=Jo,at=g("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),fs=g("base-height-multiplier").withDefault(10),ep=g("base-horizontal-spacing-multiplier").withDefault(3),fi=g("base-layer-luminance").withDefault(An.DarkMode),B=g("control-corner-radius").withDefault(4),Xe=g("density").withDefault(0),w=g("design-unit").withDefault(4),gs=g("direction").withDefault(dt.ltr),kt=g("disabled-opacity").withDefault(.3),E=g("stroke-width").withDefault(1),X=g("focus-stroke-width").withDefault(2),Z=g("type-ramp-base-font-size").withDefault("14px"),ot=g("type-ramp-base-line-height").withDefault("20px"),ms=g("type-ramp-minus-1-font-size").withDefault("12px"),bs=g("type-ramp-minus-1-line-height").withDefault("16px"),ip=g("type-ramp-minus-2-font-size").withDefault("10px"),op=g("type-ramp-minus-2-line-height").withDefault("16px"),sp=g("type-ramp-plus-1-font-size").withDefault("16px"),np=g("type-ramp-plus-1-line-height").withDefault("24px"),rp=g("type-ramp-plus-2-font-size").withDefault("20px"),ap=g("type-ramp-plus-2-line-height").withDefault("28px"),Ea=g("type-ramp-plus-3-font-size").withDefault("28px"),Oa=g("type-ramp-plus-3-line-height").withDefault("36px"),lp=g("type-ramp-plus-4-font-size").withDefault("34px"),cp=g("type-ramp-plus-4-line-height").withDefault("44px"),dp=g("type-ramp-plus-5-font-size").withDefault("46px"),hp=g("type-ramp-plus-5-line-height").withDefault("56px"),up=g("type-ramp-plus-6-font-size").withDefault("60px"),pp=g("type-ramp-plus-6-line-height").withDefault("72px"),fp=g("accent-fill-rest-delta").withDefault(0),La=g("accent-fill-hover-delta").withDefault(4),Pa=g("accent-fill-active-delta").withDefault(-5),Aa=g("accent-fill-focus-delta").withDefault(0),Va=g("accent-foreground-rest-delta").withDefault(0),Ha=g("accent-foreground-hover-delta").withDefault(6),za=g("accent-foreground-active-delta").withDefault(-4),Ma=g("accent-foreground-focus-delta").withDefault(0),gi=g("neutral-fill-rest-delta").withDefault(7),mi=g("neutral-fill-hover-delta").withDefault(10),bi=g("neutral-fill-active-delta").withDefault(5),Hn=g("neutral-fill-focus-delta").withDefault(0),Na=g("neutral-fill-input-rest-delta").withDefault(0),Ba=g("neutral-fill-input-hover-delta").withDefault(0),ja=g("neutral-fill-input-active-delta").withDefault(0),Ua=g("neutral-fill-input-focus-delta").withDefault(0),qa=g("neutral-fill-stealth-rest-delta").withDefault(0),_a=g("neutral-fill-stealth-hover-delta").withDefault(5),Ga=g("neutral-fill-stealth-active-delta").withDefault(3),Wa=g("neutral-fill-stealth-focus-delta").withDefault(0),gp=g("neutral-fill-strong-rest-delta").withDefault(0),Xa=g("neutral-fill-strong-hover-delta").withDefault(8),Ya=g("neutral-fill-strong-active-delta").withDefault(-5),Qa=g("neutral-fill-strong-focus-delta").withDefault(0),vi=g("neutral-fill-layer-rest-delta").withDefault(3),Za=g("neutral-stroke-rest-delta").withDefault(25),Ja=g("neutral-stroke-hover-delta").withDefault(40),Ka=g("neutral-stroke-active-delta").withDefault(16),tl=g("neutral-stroke-focus-delta").withDefault(25),el=g("neutral-stroke-divider-rest-delta").withDefault(8),Rt=g({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(hs.create(Au)),vs=g({name:"accent-palette",cssCustomPropertyName:null}).withDefault(hs.create(Vu)),mp=g({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Wu(Rt.getValueFor(i),fi.getValueFor(i),vi.getValueFor(i))});g("neutral-layer-card-container").withDefault(i=>mp.getValueFor(i).evaluate(i));const bp=g({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Xu(Rt.getValueFor(i),fi.getValueFor(i),vi.getValueFor(i))}),yo=g("neutral-layer-floating").withDefault(i=>bp.getValueFor(i).evaluate(i)),vp=g({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Yu(Rt.getValueFor(i),fi.getValueFor(i))}),yp=g("neutral-layer-1").withDefault(i=>vp.getValueFor(i).evaluate(i)),xp=g({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Qu(Rt.getValueFor(i),fi.getValueFor(i),vi.getValueFor(i),gi.getValueFor(i),mi.getValueFor(i),bi.getValueFor(i))}),$p=g("neutral-layer-2").withDefault(i=>xp.getValueFor(i).evaluate(i)),wp=g({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Zu(Rt.getValueFor(i),fi.getValueFor(i),vi.getValueFor(i),gi.getValueFor(i),mi.getValueFor(i),bi.getValueFor(i))}),zn=g("neutral-layer-3").withDefault(i=>wp.getValueFor(i).evaluate(i)),kp=g({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Ju(Rt.getValueFor(i),fi.getValueFor(i),vi.getValueFor(i),gi.getValueFor(i),mi.getValueFor(i),bi.getValueFor(i))});g("neutral-layer-4").withDefault(i=>kp.getValueFor(i).evaluate(i));const J=g("fill-color").withDefault(i=>yp.getValueFor(i));var xo;(function(i){i[i.normal=4.5]="normal",i[i.large=7]="large"})(xo||(xo={}));const ys=g({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Ou(vs.getValueFor(i),Rt.getValueFor(i),t||J.getValueFor(i),La.getValueFor(i),Pa.getValueFor(i),Aa.getValueFor(i),gi.getValueFor(i),mi.getValueFor(i),bi.getValueFor(i))}),nt=g("accent-fill-rest").withDefault(i=>ys.getValueFor(i).evaluate(i).rest),Ct=g("accent-fill-hover").withDefault(i=>ys.getValueFor(i).evaluate(i).hover),vt=g("accent-fill-active").withDefault(i=>ys.getValueFor(i).evaluate(i).active),xs=g("accent-fill-focus").withDefault(i=>ys.getValueFor(i).evaluate(i).focus),il=i=>(t,e)=>Hu(e||nt.getValueFor(t),i),$s=g({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>il(xo.normal)(i,t)}),me=g("foreground-on-accent-rest").withDefault(i=>$s.getValueFor(i).evaluate(i,nt.getValueFor(i))),Ve=g("foreground-on-accent-hover").withDefault(i=>$s.getValueFor(i).evaluate(i,Ct.getValueFor(i))),de=g("foreground-on-accent-active").withDefault(i=>$s.getValueFor(i).evaluate(i,vt.getValueFor(i))),ol=g("foreground-on-accent-focus").withDefault(i=>$s.getValueFor(i).evaluate(i,xs.getValueFor(i))),ws=g({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>il(xo.large)(i,t)});g("foreground-on-accent-rest-large").withDefault(i=>ws.getValueFor(i).evaluate(i,nt.getValueFor(i)));g("foreground-on-accent-hover-large").withDefault(i=>ws.getValueFor(i).evaluate(i,Ct.getValueFor(i)));g("foreground-on-accent-active-large").withDefault(i=>ws.getValueFor(i).evaluate(i,vt.getValueFor(i)));g("foreground-on-accent-focus-large").withDefault(i=>ws.getValueFor(i).evaluate(i,xs.getValueFor(i)));const Cp=i=>(t,e)=>Lu(vs.getValueFor(t),e||J.getValueFor(t),i,Va.getValueFor(t),Ha.getValueFor(t),za.getValueFor(t),Ma.getValueFor(t)),ks=g({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Cp(xo.normal)(i,t)}),_t=g("accent-foreground-rest").withDefault(i=>ks.getValueFor(i).evaluate(i).rest),yi=g("accent-foreground-hover").withDefault(i=>ks.getValueFor(i).evaluate(i).hover),Ce=g("accent-foreground-active").withDefault(i=>ks.getValueFor(i).evaluate(i).active);g("accent-foreground-focus").withDefault(i=>ks.getValueFor(i).evaluate(i).focus);const Ni=g({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>zu(Rt.getValueFor(i),t||J.getValueFor(i),gi.getValueFor(i),mi.getValueFor(i),bi.getValueFor(i),Hn.getValueFor(i))}),Lt=g("neutral-fill-rest").withDefault(i=>Ni.getValueFor(i).evaluate(i).rest),Ye=g("neutral-fill-hover").withDefault(i=>Ni.getValueFor(i).evaluate(i).hover),sl=g("neutral-fill-active").withDefault(i=>Ni.getValueFor(i).evaluate(i).active);g("neutral-fill-focus").withDefault(i=>Ni.getValueFor(i).evaluate(i).focus);const Cs=g({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Mu(Rt.getValueFor(i),t||J.getValueFor(i),Na.getValueFor(i),Ba.getValueFor(i),ja.getValueFor(i),Ua.getValueFor(i))}),He=g("neutral-fill-input-rest").withDefault(i=>Cs.getValueFor(i).evaluate(i).rest),ne=g("neutral-fill-input-hover").withDefault(i=>Cs.getValueFor(i).evaluate(i).hover),$o=g("neutral-fill-input-active").withDefault(i=>Cs.getValueFor(i).evaluate(i).active);g("neutral-fill-input-focus").withDefault(i=>Cs.getValueFor(i).evaluate(i).focus);const Bi=g({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Bu(Rt.getValueFor(i),t||J.getValueFor(i),qa.getValueFor(i),_a.getValueFor(i),Ga.getValueFor(i),Wa.getValueFor(i),gi.getValueFor(i),mi.getValueFor(i),bi.getValueFor(i),Hn.getValueFor(i))}),xi=g("neutral-fill-stealth-rest").withDefault(i=>Bi.getValueFor(i).evaluate(i).rest),nl=g("neutral-fill-stealth-hover").withDefault(i=>Bi.getValueFor(i).evaluate(i).hover),rl=g("neutral-fill-stealth-active").withDefault(i=>Bi.getValueFor(i).evaluate(i).active);g("neutral-fill-stealth-focus").withDefault(i=>Bi.getValueFor(i).evaluate(i).focus);const Ts=g({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>ju(Rt.getValueFor(i),t||J.getValueFor(i),gp.getValueFor(i),Xa.getValueFor(i),Ya.getValueFor(i),Qa.getValueFor(i))});g("neutral-fill-strong-rest").withDefault(i=>Ts.getValueFor(i).evaluate(i).rest);g("neutral-fill-strong-hover").withDefault(i=>Ts.getValueFor(i).evaluate(i).hover);g("neutral-fill-strong-active").withDefault(i=>Ts.getValueFor(i).evaluate(i).active);g("neutral-fill-strong-focus").withDefault(i=>Ts.getValueFor(i).evaluate(i).focus);const Mn=g({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Nu(Rt.getValueFor(i),t||J.getValueFor(i),vi.getValueFor(i))});g("neutral-fill-layer-rest").withDefault(i=>Mn.getValueFor(i).evaluate(i));const Tp=g({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Uu(Rt.getValueFor(i),J.getValueFor(i))}),j=g("focus-stroke-outer").withDefault(i=>Tp.getValueFor(i).evaluate(i)),Ip=g({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>qu(vs.getValueFor(i),J.getValueFor(i),j.getValueFor(i))}),Is=g("focus-stroke-inner").withDefault(i=>Ip.getValueFor(i).evaluate(i)),Fp=g({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Gu(Rt.getValueFor(i),J.getValueFor(i))}),wo=g("neutral-foreground-hint").withDefault(i=>Fp.getValueFor(i).evaluate(i)),Sp=g({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>_u(Rt.getValueFor(i),J.getValueFor(i))}),R=g("neutral-foreground-rest").withDefault(i=>Sp.getValueFor(i).evaluate(i)),Fs=g({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Ku(Rt.getValueFor(i),J.getValueFor(i),Za.getValueFor(i),Ja.getValueFor(i),Ka.getValueFor(i),tl.getValueFor(i))}),he=g("neutral-stroke-rest").withDefault(i=>Fs.getValueFor(i).evaluate(i).rest),ko=g("neutral-stroke-hover").withDefault(i=>Fs.getValueFor(i).evaluate(i).hover),Nn=g("neutral-stroke-active").withDefault(i=>Fs.getValueFor(i).evaluate(i).active),Rp=g("neutral-stroke-focus").withDefault(i=>Fs.getValueFor(i).evaluate(i).focus),Dp=g({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>tp(Rt.getValueFor(i),t||J.getValueFor(i),el.getValueFor(i))}),Co=g("neutral-stroke-divider-rest").withDefault(i=>Dp.getValueFor(i).evaluate(i)),Ep=(i,t)=>v`
        ${q("flex")} :host {
            box-sizing: border-box;
            flex-direction: column;
            font-family: ${at};
            font-size: ${ms};
            line-height: ${bs};
            color: ${R};
            border-top: calc(${E} * 1px) solid ${Co};
        }
    `,L=Tr`(${fs} + ${Xe}) * ${w}`,Op=(i,t)=>v`
    ${q("flex")} :host {
        box-sizing: border-box;
        font-family: ${at};
        flex-direction: column;
        font-size: ${ms};
        line-height: ${bs};
        border-bottom: calc(${E} * 1px) solid ${Co};
    }

    .region {
        display: none;
        padding: calc((6 + (${w} * 2 * ${Xe})) * 1px);
    }

    .heading {
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr auto calc(${L} * 1px);
    }

    .button {
        appearance: none;
        border: none;
        background: none;
        grid-column: 2;
        grid-row: 1;
        outline: none;
        padding: 0 calc((6 + (${w} * 2 * ${Xe})) * 1px);
        text-align: left;
        height: calc(${L} * 1px);
        color: ${R};
        cursor: pointer;
        font-family: inherit;
    }

    .button:hover {
        color: ${R};
    }

    .button:active {
        color: ${R};
    }

    .button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
    }

    .button:${T}::before {
        outline: none;
        border: calc(${X} * 1px) solid ${j};
        border-radius: calc(${B} * 1px);
    }

    :host([expanded]) .region {
        display: block;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 4;
        pointer-events: none;
        position: relative;
    }

    slot[name="expanded-icon"],
    slot[name="collapsed-icon"] {
        fill: ${nt};
    }

    slot[name="collapsed-icon"] {
        display: flex;
    }

    :host([expanded]) slot[name="collapsed-icon"] {
        display: none;
    }

    slot[name="expanded-icon"] {
        display: none;
    }

    :host([expanded]) slot[name="expanded-icon"] {
        display: flex;
    }

    .start {
        display: flex;
        align-items: center;
        padding-inline-start: calc(${w} * 1px);
        justify-content: center;
        grid-column: 1;
        position: relative;
    }

    .end {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 3;
        position: relative;
    }
`.withBehaviors(M(v`
            .button:${T}::before {
                border-color: ${l.Highlight};
            }
            :host slot[name="collapsed-icon"],
            :host([expanded]) slot[name="expanded-icon"] {
                fill: ${l.ButtonText};
            }
        `)),Lp=ii.compose({baseName:"accordion-item",template:Rc,styles:Op,collapsedIcon:`
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.22 3H3.78a.78.78 0 00-.78.78v12.44c0 .43.35.78.78.78h12.44c.43 0 .78-.35.78-.78V3.78a.78.78 0 00-.78-.78zM3.78 2h12.44C17.2 2 18 2.8 18 3.78v12.44c0 .98-.8 1.78-1.78 1.78H3.78C2.8 18 2 17.2 2 16.22V3.78C2 2.8 2.8 2 3.78 2zM11 9h3v2h-3v3H9v-3H6V9h3V6h2v3z"
            />
        </svg>
    `,expandedIcon:`
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.78 3h12.44c.43 0 .78.35.78.78v12.44c0 .43-.35.78-.78.78H3.78a.78.78 0 01-.78-.78V3.78c0-.43.35-.78.78-.78zm12.44-1H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C18 2.8 17.2 2 16.22 2zM14 9H6v2h8V9z"
            />
        </svg>
    `}),Pp=an.compose({baseName:"accordion",template:Uc,styles:Ep}),Ap="0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))",Vp="0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))",ji=`box-shadow: ${Ap}, ${Vp};`,al=v`
    ${q("inline-flex")} :host {
        font-family: ${at};
        outline: none;
        font-size: ${Z};
        line-height: ${ot};
        height: calc(${L} * 1px);
        min-width: calc(${L} * 1px);
        background-color: ${Lt};
        color: ${R};
        border-radius: calc(${B} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (${w} * 2 * ${Xe})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${E} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${Ye};
    }

    :host(:active) {
        background-color: ${sl};
    }

    .control:${T} {
        border-color: ${j};
        box-shadow: 0 0 0 calc((${X} - ${E}) * 1px) ${j} inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(M(v`
            :host .control {
              background-color: ${l.ButtonFace};
              border-color: ${l.ButtonText};
              color: ${l.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${l.Highlight};
              color: ${l.HighlightText};
            }

            .control:${T} {
              forced-color-adjust: none;
              background-color: ${l.Highlight};
              border-color: ${l.ButtonText};
              box-shadow: 0 0 0 calc((${X} - ${E}) * 1px) ${l.ButtonText} inset;
              color: ${l.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${l.ButtonText};
            }

            :host([href]) .control {
                border-color: ${l.LinkText};
                color: ${l.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${T}{
              forced-color-adjust: none;
              background: ${l.ButtonFace};
              border-color: ${l.LinkText};
              box-shadow: 0 0 0 1px ${l.LinkText} inset;
              color: ${l.LinkText};
              fill: currentColor;
            }
        `)),ll=v`
    :host([appearance="accent"]) {
        background: ${nt};
        color: ${me};
    }

    :host([appearance="accent"]:hover) {
        background: ${Ct};
        color: ${Ve};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${vt};
        color: ${de};
    }

    :host([appearance="accent"]) .control:${T} {
        box-shadow: 0 0 0 calc((${X} - ${E}) * 1px) ${j} inset,
            0 0 0 calc((${X} + ${E}) * 1px) ${Is} inset;
    }
`.withBehaviors(M(v`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${l.Highlight};
                color: ${l.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${l.HighlightText};
                border-color: ${l.Highlight};
                color: ${l.Highlight};
            }

            :host([appearance="accent"]) .control:${T} {
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 calc(${X} * 1px) ${l.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${l.LinkText};
                color: ${l.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${l.ButtonFace};
                border-color: ${l.LinkText};
                box-shadow: none;
                color: ${l.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${T} {
                border-color: ${l.LinkText};
                box-shadow: 0 0 0 calc(${X} * 1px) ${l.HighlightText} inset;
            }
        `)),Hp=v`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${_t};
        border-bottom: calc(${E} * 1px) solid ${_t};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${yi};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Ce};
    }

    :host([appearance="hypertext"]) .control:${T} {
        border-bottom: calc(${X} * 1px) solid ${j};
        margin-bottom: calc(calc(${E} - ${X}) * 1px);
    }
`.withBehaviors(M(v`
            :host([appearance="hypertext"]:hover) {
                background-color: ${l.ButtonFace};
                color: ${l.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${T} {
                color: ${l.LinkText};
                border-bottom-color: ${l.LinkText};
                box-shadow: none;
            }
        `)),cl=v`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${_t};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${yi};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Ce};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${E} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${yi};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Ce};
    }

    :host([appearance="lightweight"]) .control:${T} .content::before {
        background: ${R};
        height: calc(${X} * 1px);
    }
`.withBehaviors(M(v`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${T} {
                forced-color-adjust: none;
                background: ${l.ButtonFace};
                color: ${l.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${T} .content::before {
                background: ${l.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${T} {
                background: ${l.ButtonFace};
                box-shadow: none;
                color: ${l.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${T} .content::before {
                background: ${l.LinkText};
            }
        `)),dl=v`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${nt};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${Ct};
    }

    :host([appearance="outline"]:active) {
        border-color: ${vt};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${T} {
        box-shadow: 0 0 0 calc((${X} - ${E}) * 1px) ${j} inset;
        border-color: ${j};
    }
`.withBehaviors(M(v`
            :host([appearance="outline"]) .control {
                border-color: ${l.ButtonText};
            }
            :host([appearance="outline"]) .control:${T} {
              forced-color-adjust: none;
              background-color: ${l.Highlight};
              border-color: ${l.ButtonText};
              box-shadow: 0 0 0 calc((${X} - ${E}) * 1px) ${l.ButtonText} inset;
              color: ${l.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${l.ButtonFace};
                border-color: ${l.LinkText};
                color: ${l.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${T} {
              forced-color-adjust: none;
              border-color: ${l.LinkText};
              box-shadow: 0 0 0 1px ${l.LinkText} inset;
            }
        `)),hl=v`
    :host([appearance="stealth"]) {
        background: ${xi};
    }

    :host([appearance="stealth"]:hover) {
        background: ${nl};
    }

    :host([appearance="stealth"]:active) {
        background: ${rl};
    }
`.withBehaviors(M(v`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${l.ButtonFace};
                border-color: transparent;
                color: ${l.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${l.Highlight};
                border-color: ${l.Highlight};
                color: ${l.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${T}) .control {
                background: ${l.Highlight};
                box-shadow: 0 0 0 1px ${l.Highlight};
                color: ${l.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${l.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${T}) .control {
                background: ${l.LinkText};
                border-color: ${l.LinkText};
                color: ${l.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${T}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${l.LinkText};
            }
        `));class To{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&gs.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new zp(this.ltr,this.rtl,t),o=gs.getValueFor(t);gs.subscribe(e),e.attach(o),this.cache.set(t,e)}}class zp{constructor(t,e,o){this.ltr=t,this.rtl=e,this.source=o,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}function ze(i,t){return new Pd("appearance",i,t)}const Mp=(i,t)=>v`
        ${al}
    `.withBehaviors(ze("accent",ll),ze("hypertext",Hp),ze("lightweight",cl),ze("outline",dl),ze("stealth",hl));class ul extends ee{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(t,e){const o=this.defaultSlottedContent.filter(s=>s.nodeType===Node.ELEMENT_NODE);o.length===1&&o[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}r([d],ul.prototype,"appearance",void 0);const Np=ul.compose({baseName:"anchor",baseClass:ee,template:Jr,styles:Mp,shadowOptions:{delegatesFocus:!0}}),Bp=(i,t)=>v`
    :host {
        contain: layout;
        display: block;
    }
`,jp=U.compose({baseName:"anchored-region",template:td,styles:Bp}),Up=(i,t)=>v`
    ::slotted(${i.tagFor(ni)}) {
        left: 0;
    }
`,qp=(i,t)=>v`
    ::slotted(${i.tagFor(ni)}) {
        right: 0;
    }
`,_p=(i,t)=>v`
        ${q("flex")} :host {
            position: relative;
            height: var(--avatar-size, var(--avatar-size-default));
            max-width: var(--avatar-size, var(--avatar-size-default));
            --avatar-size-default: calc(
                (
                        (${fs} + ${Xe}) * ${w} +
                            ((${w} * 8) - 40)
                    ) * 1px
            );
            --avatar-text-size: ${Z};
            --avatar-text-ratio: ${w};
        }

        .link {
            text-decoration: none;
            color: ${R};
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            min-width: 100%;
        }

        .square {
            border-radius: calc(${B} * 1px);
            min-width: 100%;
            overflow: hidden;
        }

        .circle {
            border-radius: 100%;
            min-width: 100%;
            overflow: hidden;
        }

        .backplate {
            position: relative;
            display: flex;
        }

        .media,
        ::slotted(img) {
            max-width: 100%;
            position: absolute;
            display: block;
        }

        .content {
            font-size: calc(
                (var(--avatar-text-size) + var(--avatar-size, var(--avatar-size-default))) /
                    var(--avatar-text-ratio)
            );
            line-height: var(--avatar-size, var(--avatar-size-default));
            display: block;
            min-height: var(--avatar-size, var(--avatar-size-default));
        }

        ::slotted(${i.tagFor(ni)}) {
            position: absolute;
            display: block;
        }
    `.withBehaviors(new To(qp(i),Up(i)));class Bn extends Ei{}r([d({attribute:"src"})],Bn.prototype,"imgSrc",void 0);r([d],Bn.prototype,"alt",void 0);const Gp=x`
    ${it(i=>i.imgSrc,x`
            <img
                src="${i=>i.imgSrc}"
                alt="${i=>i.alt}"
                slot="media"
                class="media"
                part="media"
            />
        `)}
`,Wp=Bn.compose({baseName:"avatar",baseClass:Ei,template:id,styles:_p,media:Gp,shadowOptions:{delegatesFocus:!0}}),Xp=(i,t)=>v`
        ${q("inline-block")} :host {
            box-sizing: border-box;
            font-family: ${at};
            font-size: ${ms};
            line-height: ${bs};
        }

        .control {
            border-radius: calc(${B} * 1px);
            padding: calc(((${w} * 0.5) - ${E}) * 1px)
                calc((${w} - ${E}) * 1px);
            color: ${_t};
            font-weight: 600;
            border: calc(${E} * 1px) solid transparent;
        }

        .control[style] {
            font-weight: 400;
        }

        :host([circular]) .control {
            border-radius: 100px;
            padding: 0 calc(${w} * 1px);
            /* Need to work with Brian on width and height here */
            height: calc((${L} - (${w} * 3)) * 1px);
            min-width: calc((${L} - (${w} * 3)) * 1px);
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }
    `,Yp=ni.compose({baseName:"badge",template:od,styles:Xp}),Qp=(i,t)=>v`
    ${q("inline-flex")} :host {
        background: transparent;
        box-sizing: border-box;
        font-family: ${at};
        font-size: ${Z};
        fill: currentColor;
        line-height: ${ot};
        min-width: calc(${L} * 1px);
        outline: none;
        color: ${R}
    }

    .listitem {
        display: flex;
        align-items: center;
        width: max-content;
    }

    .separator {
        margin: 0 6px;
        display: flex;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        color: ${_t};
        cursor: pointer;
        display: flex;
        fill: inherit;
        outline: none;
        text-decoration: none;
        white-space: nowrap;
    }

    .control:hover {
        color: ${yi};
    }

    .control:active {
        color: ${Ce};
    }

    .control .content {
        position: relative;
    }

    .control .content::before {
        content: "";
        display: block;
        height: calc(${E} * 1px);
        left: 0;
        position: absolute;
        right: 0;
        top: calc(1em + 4px);
        width: 100%;
    }

    .control:hover .content::before {
        background: ${yi};
    }

    .control:active .content::before {
        background: ${Ce};
    }

    .control:${T} .content::before {
        background: ${R};
        height: calc(${X} * 1px);
    }

    .control:not([href]) {
        color: ${R};
        cursor: default;
    }

    .control:not([href]) .content::before {
        background: none;
    }

    .start,
    .end {
        display: flex;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-end: 6px;
    }

    .end {
        margin-inline-start: 6px;
    }
`.withBehaviors(M(v`
                .control:hover .content::before,
                .control:${T} .content::before {
                    background: ${l.LinkText};
                }
                .start,
                .end {
                    fill: ${l.ButtonText};
                }
            `)),Zp=Oi.compose({baseName:"breadcrumb-item",template:sd,styles:Qp,separator:"/",shadowOptions:{delegatesFocus:!0}}),Jp=(i,t)=>v`
    ${q("inline-block")} :host {
        box-sizing: border-box;
        font-family: ${at};
        font-size: ${Z};
        line-height: ${ot};
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }
`,Kp=Kr.compose({baseName:"breadcrumb",template:nd,styles:Jp}),tf=(i,t)=>v`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${kt};
            background-color: ${Lt};
            cursor: ${gt};
        }

        ${al}
    `.withBehaviors(M(v`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${l.ButtonFace};
                    border-color: ${l.GrayText};
                    color: ${l.GrayText};
                    cursor: ${gt};
                    opacity: 1;
                }
            `),ze("accent",v`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${nt};
                }

                ${ll}
            `.withBehaviors(M(v`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${l.ButtonFace};
                            border-color: ${l.GrayText};
                            color: ${l.GrayText};
                        }
                    `))),ze("lightweight",v`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${_t};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${cl}
            `.withBehaviors(M(v`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${l.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),ze("outline",v`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${nt};
                }

                ${dl}
            `.withBehaviors(M(v`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${l.GrayText};
                        }
                    `))),ze("stealth",v`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${xi};
                }

                ${hl}
            `.withBehaviors(M(v`
                        :host([appearance="stealth"][disabled]) {
                            background: ${l.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${l.ButtonFace};
                            border-color: transparent;
                            color: ${l.GrayText};
                        }
                    `))));class pl extends Qt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(t,e){const o=this.defaultSlottedContent.filter(s=>s.nodeType===Node.ELEMENT_NODE);o.length===1&&o[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}r([d],pl.prototype,"appearance",void 0);const ef=pl.compose({baseName:"button",baseClass:Qt,template:rd,styles:tf,shadowOptions:{delegatesFocus:!0}}),of=v`
    ${q("block")} :host {
        --cell-border: none;
        --cell-height: calc(${L} * 1px);
        --selected-day-outline: 1px solid ${Ce};
        --selected-day-color: ${Ce};
        --selected-day-background: ${Lt};
        --cell-padding: calc(${w} * 1px);
        --disabled-day-opacity: ${kt};
        --inactive-day-opacity: ${kt};
        font-family: ${at};
        font-size: ${Z};
        line-height: ${ot};
        color: ${R};
    }

    .title {
        font-size: ${Ea};
        line-height: ${Oa};
        padding: var(--cell-padding);
        text-align: center;
    }

    .week-days,
    .week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        border-left: var(--cell-border, none);
        border-bottom: none;
        padding: 0;
    }

    .interact .week {
        grid-gap: calc(${w} * 1px);
        margin-top: calc(${w} * 1px);
    }

    .day,
    .week-day {
        border-bottom: var(--cell-border);
        border-right: var(--cell-border);
        padding: var(--cell-padding);
    }

    .week-day {
        text-align: center;
        border-radius: 0;
        border-top: var(--cell-border);
    }

    .day {
        box-sizing: border-box;
        vertical-align: top;
        outline-offset: -1px;
        line-height: var(--cell-line-height);
        white-space: normal;
    }

    .interact .day {
        background: ${Lt};
        cursor: pointer;
    }

    .day.inactive {
        background: var(--inactive-day-background);
        color: var(--inactive-day-color);
        opacity: var(--inactive-day-opacity);
        outline: var(--inactive-day-outline);
    }

    .day.disabled {
        background: var(--disabled-day-background);
        color: var(--disabled-day-color);
        cursor: ${gt};
        opacity: var(--disabled-day-opacity);
        outline: var(--disabled-day-outline);
    }

    .day.selected {
        color: var(--selected-day-color);
        background: var(--selected-day-background);
        outline: var(--selected-day-outline);
    }

    .date {
        padding: var(--cell-padding);
        text-align: center;
    }

    .interact .today,
    .today {
        color: ${de};
        background: ${Ce};
    }

    .today.inactive .date {
        background: transparent;
        color: inherit;
        width: auto;
    }
`.withBehaviors(M(v`
            :host {
                --selected-day-outline: 1px solid ${l.Highlight};
            }

            .day,
            .week-day {
                background: ${l.Canvas};
                color: ${l.CanvasText};
                fill: currentcolor;
            }

            .day.selected {
                color: ${l.Highlight};
            }

            .today .date {
                background: ${l.Highlight};
                color: ${l.HighlightText};
            }
        `)),sf=ae.compose({baseName:"calendar",template:Cd,styles:of,title:vd}),nf=(i,t)=>v`
        ${q("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${J};
            border-radius: calc(${B} * 1px);
            ${ji}
        }
    `.withBehaviors(M(v`
                :host {
                    forced-color-adjust: none;
                    background: ${l.Canvas};
                    box-shadow: 0 0 0 1px ${l.CanvasText};
                }
            `));class rf extends sa{connectedCallback(){super.connectedCallback();const t=so(this);t&&J.setValueFor(this,e=>Mn.getValueFor(e).evaluate(e,J.getValueFor(t)))}}const af=rf.compose({baseName:"card",baseClass:sa,template:Td,styles:nf}),lf=(i,t)=>v`
    ${q("inline-flex")} :host {
        align-items: center;
        outline: none;
        margin: calc(${w} * 1px) 0;
        /* Chromium likes to select label text or the default slot when the checkbox is
            clicked. Maybe there is a better solution here? */
        user-select: none;
    }

    .control {
        position: relative;
        width: calc((${L} / 2 + ${w}) * 1px);
        height: calc((${L} / 2 + ${w}) * 1px);
        box-sizing: border-box;
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid ${he};
        background: ${He};
        outline: none;
        cursor: pointer;
    }

    .label {
        font-family: ${at};
        color: ${R};
        /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
        padding-inline-start: calc(${w} * 2px + 2px);
        margin-inline-end: calc(${w} * 2px + 2px);
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .checked-indicator {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${me};
        opacity: 0;
        pointer-events: none;
    }

    .indeterminate-indicator {
        border-radius: calc(${B} * 1px);
        background: ${me};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    :host(:not([disabled])) .control:hover {
        background: ${ne};
        border-color: ${ko};
    }

    :host(:not([disabled])) .control:active {
        background: ${$o};
        border-color: ${Nn};
    }

    :host(:${T}) .control {
        box-shadow: 0 0 0 2px ${J}, 0 0 0 4px ${j};
    }

    :host([aria-checked="true"]) .control {
        background: ${nt};
        border: calc(${E} * 1px) solid ${nt};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: ${Ct};
        border: calc(${E} * 1px) solid ${Ct};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
        fill: ${Ve};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .indeterminate-indicator {
        background: ${Ve};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active {
        background: ${vt};
        border: calc(${E} * 1px) solid ${vt};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
        fill: ${de};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .indeterminate-indicator {
        background: ${de};
    }

    :host([aria-checked="true"]:${T}:not([disabled])) .control {
        box-shadow: 0 0 0 2px ${J}, 0 0 0 4px ${j};
    }


    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${gt};
    }

    :host([aria-checked="true"]:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${kt};
    }
`.withBehaviors(M(v`
            .control {
                forced-color-adjust: none;
                border-color: ${l.FieldText};
                background: ${l.Field};
            }
            .checked-indicator {
                fill: ${l.FieldText};
            }
            .indeterminate-indicator {
                background: ${l.FieldText};
            }
            :host(:not([disabled])) .control:hover, .control:active {
                border-color: ${l.Highlight};
                background: ${l.Field};
            }
            :host(:${T}) .control {
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([aria-checked="true"]:${T}:not([disabled])) .control {
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([aria-checked="true"]) .control {
                background: ${l.Highlight};
                border-color: ${l.Highlight};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover, .control:active {
                border-color: ${l.Highlight};
                background: ${l.HighlightText};
            }
            :host([aria-checked="true"]) .checked-indicator {
                fill: ${l.HighlightText};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
                fill: ${l.Highlight}
            }
            :host([aria-checked="true"]) .indeterminate-indicator {
                background: ${l.HighlightText};
            }
            :host([aria-checked="true"]) .control:hover .indeterminate-indicator {
                background: ${l.Highlight}
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .control {
                forced-color-adjust: none;
                border-color: ${l.GrayText};
                background: ${l.Field};
            }
            :host([disabled]) .indeterminate-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .indeterminate-indicator {
                forced-color-adjust: none;
                background: ${l.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                forced-color-adjust: none;
                fill: ${l.GrayText};
            }
        `)),cf=Qo.compose({baseName:"checkbox",template:Id,styles:lf,checkedIndicator:`
        <svg
            part="checked-indicator"
            class="checked-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `,indeterminateIndicator:`
        <div part="indeterminate-indicator" class="indeterminate-indicator"></div>
    `}),fl=(i,t)=>v`
    ${q("inline-flex")} :host {
        --elevation: 14;
        background: ${He};
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid ${nt};
        box-sizing: border-box;
        color: ${R};
        font-family: ${at};
        height: calc(${L} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
    }

    .listbox {
        ${ji}
        background: ${yo};
        border: calc(${E} * 1px) solid ${he};
        border-radius: calc(${B} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${L} * 1px));
        padding: calc(${w} * 1px) 0;
        overflow-y: auto;
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    .listbox[hidden] {
        display: none;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: ${Z};
        font-family: inherit;
        line-height: ${ot};
        min-height: 100%;
        padding: 0 calc(${w} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${ne};
        border-color: ${Ct};
    }

    :host(:${T}) {
        border-color: ${j};
        box-shadow: 0 0 0 calc(${X} * 1px) ${j};
    }

    :host(:${T}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${X} * 1px) inset ${Is};
        border-color: ${j};
        background: ${xs};
        color: ${ol};
    }

    :host([disabled]) {
        cursor: ${gt};
        opacity: ${kt};
    }

    :host([disabled]) .control {
        cursor: ${gt};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${xi};
        color: ${R};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${$o};
        border-color: ${vt};
        border-radius: calc(${B} * 1px);
    }

    :host([open][position="above"]) .listbox {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([open][position="below"]) .listbox {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :host([open][position="above"]) .listbox {
        border-bottom: 0;
        bottom: calc(${L} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${L} * 1px);
    }

    .selected-value {
        flex: 1 1 auto;
        font-family: inherit;
        text-align: start;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .indicator {
        flex: 0 0 auto;
        margin-inline-start: 1em;
    }

    slot[name="listbox"] {
        display: none;
        width: 100%;
    }

    :host([open]) slot[name="listbox"] {
        display: flex;
        position: absolute;
        ${ji}
    }

    .end {
        margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        fill: currentcolor;
        height: 1em;
        min-height: calc(${w} * 4px);
        min-width: calc(${w} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]),
    ::slotted(option) {
        flex: 0 0 auto;
    }

`.withBehaviors(M(v`
            :host(:not([disabled]):hover),
            :host(:not([disabled]):active) {
                border-color: ${l.Highlight};
            }

            :host(:not([disabled]):${T}) {
                background-color: ${l.ButtonFace};
                box-shadow: 0 0 0 calc(${X} * 1px) ${l.Highlight};
                color: ${l.ButtonText};
                fill: currentcolor;
                forced-color-adjust: none;
            }

            :host(:not([disabled]):${T}) .listbox {
                background: ${l.ButtonFace};
            }

            :host([disabled]) {
                border-color: ${l.GrayText};
                background-color: ${l.ButtonFace};
                color: ${l.GrayText};
                fill: currentcolor;
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${l.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${l.GrayText};
                border-color: ${l.GrayText};
            }

            :host([disabled]) .control .select-indicator {
                fill: ${l.GrayText};
            }

            :host(:${T}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${T}) ::slotted(option[aria-selected="true"]),
            :host(:${T}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${X} * 1px) inset ${l.HighlightText};
                color: ${l.HighlightText};
                fill: currentcolor;
            }

            .start,
            .end,
            .indicator,
            .select-indicator,
            ::slotted(svg) {
                color: ${l.ButtonText};
                fill: currentcolor;
            }
        `)),df=(i,t)=>v`
    ${fl()}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${gt};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${Z};
        line-height: ${ot};
        height: calc(100% - (${E} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${T},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`,hf=Ue.compose({baseName:"combobox",template:Ed,styles:df,shadowOptions:{delegatesFocus:!0},indicator:`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `}),uf=(i,t)=>v`
    :host {
        display: flex;
        position: relative;
        flex-direction: column;
    }
`,pf=(i,t)=>v`
    :host {
        display: grid;
        padding: 1px 0;
        box-sizing: border-box;
        width: 100%;
        border-bottom: calc(${E} * 1px) solid ${Co};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
        background: ${Lt};
        position: sticky;
        top: 0;
    }
`,ff=(i,t)=>v`
    :host {
        padding: calc(${w} * 1px) calc(${w} * 3px);
        color: ${R};
        box-sizing: border-box;
        font-family: ${at};
        font-size: ${Z};
        line-height: ${ot};
        font-weight: 400;
        border: transparent calc(${E} * 1px) solid;
        overflow: hidden;
        white-space: nowrap;
        border-radius: calc(${B} * 1px);
    }

    :host(.column-header) {
        font-weight: 600;
    }

    :host(:${T}) {
        border: ${j} calc(${E} * 1px) solid;
        color: ${R};
    }

`.withBehaviors(M(v`
        :host {
            forced-color-adjust: none;
            border-color: transparent;
            background: ${l.Field};
            color: ${l.FieldText};
        }

        :host(:${T}) {
            border-color: ${l.FieldText};
            box-shadow: 0 0 0 2px inset ${l.Field};
            color: ${l.FieldText};
        }
        `)),gf=De.compose({baseName:"data-grid-cell",template:bd,styles:ff}),mf=Dt.compose({baseName:"data-grid-row",template:md,styles:pf}),bf=Ft.compose({baseName:"data-grid",template:hd,styles:uf}),vf={toView(i){var t;return i==null?null:(t=i)===null||t===void 0?void 0:t.toColorString()},fromView(i){if(i==null)return null;const t=Mi(i);return t?Ae.create(t.r,t.g,t.b):null}},gl=v`
    :host {
        background-color: ${J};
        color: ${R};
    }
`.withBehaviors(M(v`
            :host {
                background-color: ${l.ButtonFace};
                box-shadow: 0 0 0 1px ${l.CanvasText};
                color: ${l.ButtonText};
            }
        `));function D(i){return(t,e)=>{t[e+"Changed"]=function(o,s){s!=null?i.setValueFor(this,s):i.deleteValueFor(this)}}}class S extends P{constructor(){super();this.noPaint=!1,N.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){!this.noPaint&&this.fillColor!==void 0?this.$fastController.addStyles(gl):this.$fastController.removeStyles(gl)}}r([d({attribute:"no-paint",mode:"boolean"})],S.prototype,"noPaint",void 0);r([d({attribute:"fill-color",converter:vf}),D(J)],S.prototype,"fillColor",void 0);r([f,D(Rt)],S.prototype,"neutralPalette",void 0);r([f,D(vs)],S.prototype,"accentPalette",void 0);r([d({converter:F}),D(Xe)],S.prototype,"density",void 0);r([d({attribute:"design-unit",converter:F}),D(w)],S.prototype,"designUnit",void 0);r([d({attribute:"direction"}),D(gs)],S.prototype,"direction",void 0);r([d({attribute:"base-height-multiplier",converter:F}),D(fs)],S.prototype,"baseHeightMultiplier",void 0);r([d({attribute:"base-horizontal-spacing-multiplier",converter:F}),D(ep)],S.prototype,"baseHorizontalSpacingMultiplier",void 0);r([d({attribute:"control-corner-radius",converter:F}),D(B)],S.prototype,"controlCornerRadius",void 0);r([d({attribute:"stroke-width",converter:F}),D(E)],S.prototype,"strokeWidth",void 0);r([d({attribute:"focus-stroke-width",converter:F}),D(X)],S.prototype,"focusStrokeWidth",void 0);r([d({attribute:"disabled-opacity",converter:F}),D(kt)],S.prototype,"disabledOpacity",void 0);r([d({attribute:"type-ramp-minus-2-font-size"}),D(ip)],S.prototype,"typeRampMinus2FontSize",void 0);r([d({attribute:"type-ramp-minus-2-line-height"}),D(op)],S.prototype,"typeRampMinus2LineHeight",void 0);r([d({attribute:"type-ramp-minus-1-font-size"}),D(ms)],S.prototype,"typeRampMinus1FontSize",void 0);r([d({attribute:"type-ramp-minus-1-line-height"}),D(bs)],S.prototype,"typeRampMinus1LineHeight",void 0);r([d({attribute:"type-ramp-base-font-size"}),D(Z)],S.prototype,"typeRampBaseFontSize",void 0);r([d({attribute:"type-ramp-base-line-height"}),D(ot)],S.prototype,"typeRampBaseLineHeight",void 0);r([d({attribute:"type-ramp-plus-1-font-size"}),D(sp)],S.prototype,"typeRampPlus1FontSize",void 0);r([d({attribute:"type-ramp-plus-1-line-height"}),D(np)],S.prototype,"typeRampPlus1LineHeight",void 0);r([d({attribute:"type-ramp-plus-2-font-size"}),D(rp)],S.prototype,"typeRampPlus2FontSize",void 0);r([d({attribute:"type-ramp-plus-2-line-height"}),D(ap)],S.prototype,"typeRampPlus2LineHeight",void 0);r([d({attribute:"type-ramp-plus-3-font-size"}),D(Ea)],S.prototype,"typeRampPlus3FontSize",void 0);r([d({attribute:"type-ramp-plus-3-line-height"}),D(Oa)],S.prototype,"typeRampPlus3LineHeight",void 0);r([d({attribute:"type-ramp-plus-4-font-size"}),D(lp)],S.prototype,"typeRampPlus4FontSize",void 0);r([d({attribute:"type-ramp-plus-4-line-height"}),D(cp)],S.prototype,"typeRampPlus4LineHeight",void 0);r([d({attribute:"type-ramp-plus-5-font-size"}),D(dp)],S.prototype,"typeRampPlus5FontSize",void 0);r([d({attribute:"type-ramp-plus-5-line-height"}),D(hp)],S.prototype,"typeRampPlus5LineHeight",void 0);r([d({attribute:"type-ramp-plus-6-font-size"}),D(up)],S.prototype,"typeRampPlus6FontSize",void 0);r([d({attribute:"type-ramp-plus-6-line-height"}),D(pp)],S.prototype,"typeRampPlus6LineHeight",void 0);r([d({attribute:"accent-fill-rest-delta",converter:F}),D(fp)],S.prototype,"accentFillRestDelta",void 0);r([d({attribute:"accent-fill-hover-delta",converter:F}),D(La)],S.prototype,"accentFillHoverDelta",void 0);r([d({attribute:"accent-fill-active-delta",converter:F}),D(Pa)],S.prototype,"accentFillActiveDelta",void 0);r([d({attribute:"accent-fill-focus-delta",converter:F}),D(Aa)],S.prototype,"accentFillFocusDelta",void 0);r([d({attribute:"accent-foreground-rest-delta",converter:F}),D(Va)],S.prototype,"accentForegroundRestDelta",void 0);r([d({attribute:"accent-foreground-hover-delta",converter:F}),D(Ha)],S.prototype,"accentForegroundHoverDelta",void 0);r([d({attribute:"accent-foreground-active-delta",converter:F}),D(za)],S.prototype,"accentForegroundActiveDelta",void 0);r([d({attribute:"accent-foreground-focus-delta",converter:F}),D(Ma)],S.prototype,"accentForegroundFocusDelta",void 0);r([d({attribute:"neutral-fill-rest-delta",converter:F}),D(gi)],S.prototype,"neutralFillRestDelta",void 0);r([d({attribute:"neutral-fill-hover-delta",converter:F}),D(mi)],S.prototype,"neutralFillHoverDelta",void 0);r([d({attribute:"neutral-fill-active-delta",converter:F}),D(bi)],S.prototype,"neutralFillActiveDelta",void 0);r([d({attribute:"neutral-fill-focus-delta",converter:F}),D(Hn)],S.prototype,"neutralFillFocusDelta",void 0);r([d({attribute:"neutral-fill-input-rest-delta",converter:F}),D(Na)],S.prototype,"neutralFillInputRestDelta",void 0);r([d({attribute:"neutral-fill-input-hover-delta",converter:F}),D(Ba)],S.prototype,"neutralFillInputHoverDelta",void 0);r([d({attribute:"neutral-fill-input-active-delta",converter:F}),D(ja)],S.prototype,"neutralFillInputActiveDelta",void 0);r([d({attribute:"neutral-fill-input-focus-delta",converter:F}),D(Ua)],S.prototype,"neutralFillInputFocusDelta",void 0);r([d({attribute:"neutral-fill-stealth-rest-delta",converter:F}),D(qa)],S.prototype,"neutralFillStealthRestDelta",void 0);r([d({attribute:"neutral-fill-stealth-hover-delta",converter:F}),D(_a)],S.prototype,"neutralFillStealthHoverDelta",void 0);r([d({attribute:"neutral-fill-stealth-active-delta",converter:F}),D(Ga)],S.prototype,"neutralFillStealthActiveDelta",void 0);r([d({attribute:"neutral-fill-stealth-focus-delta",converter:F}),D(Wa)],S.prototype,"neutralFillStealthFocusDelta",void 0);r([d({attribute:"neutral-fill-strong-hover-delta",converter:F}),D(Xa)],S.prototype,"neutralFillStrongHoverDelta",void 0);r([d({attribute:"neutral-fill-strong-active-delta",converter:F}),D(Ya)],S.prototype,"neutralFillStrongActiveDelta",void 0);r([d({attribute:"neutral-fill-strong-focus-delta",converter:F}),D(Qa)],S.prototype,"neutralFillStrongFocusDelta",void 0);r([d({attribute:"base-layer-luminance",converter:F}),D(fi)],S.prototype,"baseLayerLuminance",void 0);r([d({attribute:"neutral-fill-layer-rest-delta",converter:F}),D(vi)],S.prototype,"neutralFillLayerRestDelta",void 0);r([d({attribute:"neutral-stroke-divider-rest-delta",converter:F}),D(el)],S.prototype,"neutralStrokeDividerRestDelta",void 0);r([d({attribute:"neutral-stroke-rest-delta",converter:F}),D(Za)],S.prototype,"neutralStrokeRestDelta",void 0);r([d({attribute:"neutral-stroke-hover-delta",converter:F}),D(Ja)],S.prototype,"neutralStrokeHoverDelta",void 0);r([d({attribute:"neutral-stroke-active-delta",converter:F}),D(Ka)],S.prototype,"neutralStrokeActiveDelta",void 0);r([d({attribute:"neutral-stroke-focus-delta",converter:F}),D(tl)],S.prototype,"neutralStrokeFocusDelta",void 0);const yf=(i,t)=>x`
    <slot></slot>
`,xf=(i,t)=>v`
    ${q("block")}
`,$f=S.compose({baseName:"design-system-provider",template:yf,styles:xf}),wf=(i,t)=>v`
    :host([hidden]) {
        display: none;
    }

    :host {
        --elevation: 14;
        --dialog-height: 480px;
        --dialog-width: 640px;
        display: block;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        touch-action: none;
    }

    .positioning-region {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
    }

    .control {
        ${ji}
        margin-top: auto;
        margin-bottom: auto;
        width: var(--dialog-width);
        height: var(--dialog-height);
        background-color: ${J};
        z-index: 1;
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid transparent;
    }
`,kf=le.compose({baseName:"dialog",template:Yd,styles:wf}),Cf=(i,t)=>v`
    .disclosure {
        transition: height 0.35s;
    }

    .disclosure .invoker::-webkit-details-marker {
        display: none;
    }

    .disclosure .invoker {
        list-style-type: none;
    }

    :host([appearance="accent"]) .invoker {
        background: ${nt};
        color: ${me};
        font-family: ${at};
        font-size: ${Z};
        border-radius: calc(${B} * 1px);
        outline: none;
        cursor: pointer;
        margin: 16px 0;
        padding: 12px;
        max-width: max-content;
    }

    :host([appearance="accent"]) .invoker:active {
        background: ${vt};
        color: ${de};
    }

    :host([appearance="accent"]) .invoker:hover {
        background: ${Ct};
        color: ${Ve};
    }

    :host([appearance="lightweight"]) .invoker {
        background: transparent;
        color: ${_t};
        border-bottom: calc(${E} * 1px) solid ${_t};
        cursor: pointer;
        width: max-content;
        margin: 16px 0;
    }

    :host([appearance="lightweight"]) .invoker:active {
        border-bottom-color: ${Ce};
    }

    :host([appearance="lightweight"]) .invoker:hover {
        border-bottom-color: ${yi};
    }

    .disclosure[open] .invoker ~ * {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;class ml extends es{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}onToggle(){super.onToggle(),this.details.style.setProperty("height",`${this.disclosureHeight}px`)}setup(){super.setup(),this.appearance||(this.appearance="accent");const t=()=>this.details.getBoundingClientRect().height;this.show(),this.totalHeight=t(),this.hide(),this.height=t(),this.expanded&&this.show()}get disclosureHeight(){return this.expanded?this.totalHeight:this.height}}r([d],ml.prototype,"appearance",void 0);const Tf=ml.compose({baseName:"disclosure",baseClass:es,template:ch,styles:Cf}),If=(i,t)=>v`
        ${q("block")} :host {
            box-sizing: content-box;
            height: 0;
            margin: calc(${w} * 1px) 0;
            border: none;
            border-top: calc(${E} * 1px) solid ${Co};
        }
    `,Ff=pa.compose({baseName:"divider",template:dh,styles:If}),Sf=(i,t)=>v`
    ${q("inline-flex")} :host {
        width: calc(${L} * 1px);
        height: calc(${L} * 1px);
        justify-content: center;
        align-items: center;
        margin: 0;
        position: relative;
        fill: currentcolor;
        color: ${me};
        background: transparent;
        outline: none;
        border: none;
        padding: 0;
    }

    :host::before {
        content: "";
        background: ${nt};
        border: calc(${E} * 1px) solid ${nt};
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        transition: all 0.1s ease-in-out;
    }

    .next,
    .previous {
        position: relative;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
        display: grid;
    }

    :host([disabled]) {
        opacity: ${kt};
        cursor: ${gt};
        fill: currentcolor;
        color: ${R};
        pointer-events: none;
    }

    :host([disabled])::before,
    :host([disabled]:hover)::before,
    :host([disabled]:active)::before {
        background: ${xi};
        border-color: ${he};
    }

    :host(:hover) {
        color: ${Ve};
    }

    :host(:hover)::before {
        background: ${Ct};
        border-color: ${Ct};
    }

    :host(:active) {
        color: ${de};
    }

    :host(:active)::before {
        background: ${vt};
        border-color: ${vt};
    }

    :host(:${T}) {
        outline: none;
    }

    :host(:${T})::before {
        box-shadow: 0 0 0 calc((${X} - ${E}) * 1px) ${j} inset,
            0 0 0 calc((${X} + ${E}) * 1px) ${Is} inset;
        border-color: ${j};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors(M(v`
            :host {
                background: ${l.Canvas};
            }
            :host .next,
            :host .previous {
                color: ${l.ButtonText};
                fill: currentcolor;
            }
            :host::before {
                background: ${l.Canvas};
                border-color: ${l.ButtonText};
            }
            :host(:hover)::before {
                forced-color-adjust: none;
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                opacity: 1;
            }
            :host(:hover) .next,
            :host(:hover) .previous  {
                forced-color-adjust: none;
                color: ${l.HighlightText};
                fill: currentcolor;
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled])::before,
            :host([disabled]:hover)::before,
            :host([disabled]) .next,
            :host([disabled]) .previous {
                forced-color-adjust: none;
                background: ${l.Canvas};
                border-color: ${l.GrayText};
                color: ${l.GrayText};
                fill: ${l.GrayText};
            }
            :host(:${T})::before {
                forced-color-adjust: none;
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 calc((${X} - ${E}) * 1px) ${l.Highlight} inset;
            }
        `)),Rf=qe.compose({baseName:"flipper",template:hh,styles:Sf,next:`
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"
            />
        </svg>
    `,previous:`
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"
            />
        </svg>
    `}),Df=v`
    .scroll-prev {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before,
    .scroll-next .scroll-action {
        left: auto;
        right: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-next));
    }

    .scroll-next .scroll-action {
        transform: translate(50%, -50%);
    }
`,Ef=v`
    .scroll.scroll-next {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, var(--scroll-fade-next), transparent);
        left: auto;
        right: 0;
    }

    .scroll.scroll-prev::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
    }

    .scroll-prev .scroll-action {
        left: auto;
        right: 0;
        transform: translate(50%, -50%);
    }
`,Of=v`
    .scroll-area {
        position: relative;
    }

    div.scroll-view {
        overflow-x: hidden;
    }

    .scroll {
        bottom: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        user-select: none;
        width: 100px;
    }

    .scroll.disabled {
        display: none;
    }

    .scroll::before,
    .scroll-action {
        left: 0;
        position: absolute;
    }

    .scroll::before {
        background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
        content: "";
        display: block;
        height: 100%;
        width: 100%;
    }

    .scroll-action {
        pointer-events: auto;
        right: auto;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`.withBehaviors(new To(Df,Ef)),Lf=(i,t)=>v`
    ${q("block")} :host {
        --scroll-align: center;
        --scroll-item-spacing: 5px;
        contain: layout;
        position: relative;
    }

    .scroll-view {
        overflow-x: auto;
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content-container {
        align-items: var(--scroll-align);
        display: inline-flex;
        flex-wrap: nowrap;
        position: relative;
    }

    .content-container ::slotted(*) {
        margin-right: var(--scroll-item-spacing);
    }

    .content-container ::slotted(*:last-child) {
        margin-right: 0;
    }
`;class Pf extends Oe{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(Of)}}const Af=Pf.compose({baseName:"horizontal-scroll",baseClass:Oe,template:Bh,styles:Lf,nextFlipper:i=>x`
        <${i.tagFor(qe)}
            @click="${t=>t.scrollToNext()}"
            aria-hidden="${t=>t.flippersHiddenFromAT}"
        ></${i.tagFor(qe)}>
    `,previousFlipper:i=>x`
        <${i.tagFor(qe)}
            @click="${t=>t.scrollToPrevious()}"
            direction="previous"
            aria-hidden="${t=>t.flippersHiddenFromAT}"
        ></${i.tagFor(qe)}>
    `}),Vf=(i,t)=>v`
    ${q("inline-flex")} :host {
        align-items: center;
        font-family: ${at};
        border-radius: calc(${B} * 1px);
        border: calc(${X} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${R};
        cursor: pointer;
        flex: 0 0 auto;
        fill: currentcolor;
        font-size: ${Z};
        height: calc(${L} * 1px);
        line-height: ${ot};
        margin: 0 calc(${w} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${w} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${T}) {
        box-shadow: 0 0 0 calc(${X} * 1px) inset ${Is};
        border-color: ${j};
        background: ${xs};
        color: ${ol};
    }

    :host([aria-selected="true"]) {
        background: ${nt};
        color: ${me};
    }

    :host(:hover) {
        background: ${Ct};
        color: ${Ve};
    }

    :host(:active) {
        background: ${vt};
        color: ${de};
    }

    :host(:not([aria-selected="true"]):hover),
    :host(:not([aria-selected="true"]):active) {
        background: ${Ye};
        color: ${R};
    }

    :host([disabled]) {
        cursor: ${gt};
        opacity: ${kt};
    }

    :host([disabled]:hover) {
        background-color: inherit;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
        display: flex;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        height: calc(${w} * 4px);
        width: calc(${w} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }
`.withBehaviors(M(v`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${l.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${l.Highlight};
                    color: ${l.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${l.Canvas};
                    color: ${l.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `)),Hf=ai.compose({baseName:"option",template:uh,styles:Vf}),zf=(i,t)=>v`
        ${q("inline-flex")} :host {
            background: ${yo};
            border: calc(${E} * 1px) solid ${he};
            border-radius: calc(${B} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${w} * 1px) 0;
        }

        :host(:focus-within:not([disabled])) {
            border-color: ${j};
            box-shadow: 0 0 0 calc((${X} - ${E}) * 1px)
                ${j} inset;
        }

        :host([size]) {
            max-height: calc(
                (var(--size) * ${L} + ((${w} + ${E}) * 2)) *
                    1px
            );
            overflow-y: auto;
        }
    `.withBehaviors(M(v`
            :host(:${T}) ::slotted([aria-selected="true"][role="option"]) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${X} * 1px) inset ${l.HighlightText};
                color: ${l.HighlightText};
                fill: currentcolor;
            }

            :host(:${T}) ::slotted([aria-selected="true"][role="option"]) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${X} * 1px) inset ${l.HighlightText};
                color: ${l.HighlightText};
                fill: currentcolor;
            }
        `));class Mf extends bn{sizeChanged(t,e){super.sizeChanged(t,e),this.sizeStylesheet&&(this.sizeStylesheet=this.$fastController.removeStyles(this.sizeStylesheet)),this.size>0&&(this.sizeStylesheet=v`
                :host {
                    --size: ${""+this.size};
                }
            `,this.$fastController.addStyles(this.sizeStylesheet))}}const Nf=Mf.compose({baseName:"listbox",template:ph,styles:zf}),Bf=(i,t)=>v`
    ${q("grid")} :host {
        contain: layout;
        overflow: visible;
        font-family: ${at};
        outline: none;
        box-sizing: border-box;
        height: calc(${L} * 1px);
        grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        padding: 0;
        margin: 0 calc(${w} * 1px);
        white-space: nowrap;
        color: ${R};
        fill: currentcolor;
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
        border-radius: calc(${B} * 1px);
        border: calc(${X} * 1px) solid transparent;
    }

    :host(.indent-0) {
        grid-template-columns: auto 1fr minmax(42px, auto);
    }
    :host(.indent-0) .content {
        grid-column: 1;
        grid-row: 1;
        margin-inline-start: 10px;
    }
    :host(.indent-0) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }
    :host(.indent-2) {
        grid-template-columns: minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto) minmax(42px, auto);
    }
    :host(.indent-2) .content {
        grid-column: 3;
        grid-row: 1;
        margin-inline-start: 10px;
    }
    :host(.indent-2) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }
    :host(.indent-2) .start {
        grid-column: 2;
    }
    :host(.indent-2) .end {
        grid-column: 4;
    }

    :host(:${T}) {
        border-color: ${j};
        background: ${zn};
        color: ${R};
    }

    :host(:hover) {
        background: ${zn};
        color: ${R};
    }

    :host([aria-checked="true"]),
    :host(:active),
    :host(.expanded) {
        background: ${$p};
        color: ${R};
    }

    :host([disabled]) {
        cursor: ${gt};
        opacity: ${kt};
    }

    :host([disabled]:hover) {
        color: ${R};
        fill: currentcolor;
        background: ${xi};
    }

    :host([disabled]:hover) .start,
    :host([disabled]:hover) .end,
    :host([disabled]:hover)::slotted(svg) {
        fill: ${R};
    }

    .expand-collapse-glyph {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
        fill: currentcolor;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end {
        display: flex;
        justify-content: center;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    :host(:hover) .start,
    :host(:hover) .end,
    :host(:hover)::slotted(svg),
    :host(:active) .start,
    :host(:active) .end,
    :host(:active)::slotted(svg) {
        fill: ${R};
    }

    :host(.indent-0[aria-haspopup="menu"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(42px, auto);
        align-items: center;
        min-height: 32px;
    }

    :host(.indent-1[aria-haspopup="menu"]),
    :host(.indent-1[role="menuitemcheckbox"]),
    :host(.indent-1[role="menuitemradio"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(42px, auto);
        align-items: center;
        min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup="menu"])) .end {
        grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
        display: none;
    }

    :host([aria-haspopup="menu"]) .expand-collapse-glyph-container,
    :host([role="menuitemcheckbox"]) .input-container,
    :host([role="menuitemradio"]) .input-container {
        display: grid;
        margin-inline-end: 10px;
    }

    :host([aria-haspopup="menu"]) .content,
    :host([role="menuitemcheckbox"]) .content,
    :host([role="menuitemradio"]) .content {
        grid-column-start: 3;
    }

    :host([aria-haspopup="menu"].indent-0) .content {
        grid-column-start: 1;
    }

    :host([aria-haspopup="menu"]) .end,
    :host([role="menuitemcheckbox"]) .end,
    :host([role="menuitemradio"]) .end {
        grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        outline: none;
        margin-inline-start: 10px;
    }

    :host .checkbox,
    :host .radio {
        border: calc(${E} * 1px) solid ${R};
    }

    :host([aria-checked="true"]) .checkbox,
    :host([aria-checked="true"]) .radio {
        background: ${nt};
        border-color: ${nt};
    }

    :host .checkbox {
        border-radius: calc(${B} * 1px);
    }

    :host .radio {
        border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    :host .expand-collapse-indicator,
    ::slotted([slot="checkbox-indicator"]),
    ::slotted([slot="radio-indicator"]),
    ::slotted([slot="expand-collapse-indicator"]) {
        display: none;
    }

    ::slotted([slot="end"]:not(svg)) {
        margin-inline-end: 10px;
        color: ${wo}
    }

    :host([aria-checked="true"]) .checkbox-indicator,
    :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${me};
        pointer-events: none;
    }

    :host([aria-checked="true"]) .radio-indicator {
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        border-radius: 999px;
        display: block;
        background: ${me};
        pointer-events: none;
    }

    :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
        display: block;
        pointer-events: none;
    }
`.withBehaviors(M(v`
            :host {
                border-color: transparent;
                color: ${l.ButtonText};
                forced-color-adjust: none;
            }

            :host(:hover) {
                background: ${l.Highlight};
                color: ${l.HighlightText};
            }

            :host(:hover) .start,
            :host(:hover) .end,
            :host(:hover)::slotted(svg),
            :host(:active) .start,
            :host(:active) .end,
            :host(:active)::slotted(svg) {
                fill: ${l.HighlightText};
            }

            :host(.expanded) {
                background: ${l.Highlight};
                border-color: ${l.Highlight};
                color: ${l.HighlightText};
            }

            :host(:${T}) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${X} * 1px) inset ${l.HighlightText};
                color: ${l.HighlightText};
                fill: currentcolor;
            }

            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:hover) .start,
            :host([disabled]:hover) .end,
            :host([disabled]:hover)::slotted(svg) {
                background: ${l.Canvas};
                color: ${l.GrayText};
                fill: currentcolor;
                opacity: 1;
            }

            :host .expanded-toggle,
            :host .checkbox,
            :host .radio{
                border-color: ${l.ButtonText};
                background: ${l.HighlightText};
            }

            :host([checked="true"]) .checkbox,
            :host([checked="true"]) .radio {
                background: ${l.HighlightText};
                border-color: ${l.HighlightText};
            }

            :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${T}) .expanded-toggle,
            :host(:${T}) .checkbox,
            :host(:${T}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${T}) .checkbox,
            :host([checked="true"]:${T}) .radio {
                border-color: ${l.HighlightText};
            }

            :host([aria-checked="true"]) {
                background: ${l.Highlight};
                color: ${l.HighlightText};
            }

            :host([aria-checked="true"]) .checkbox-indicator,
            :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]),
            :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
                fill: ${l.Highlight};
            }

            :host([aria-checked="true"]) .radio-indicator {
                background: ${l.Highlight};
            }

            ::slotted([slot="end"]:not(svg)) {
                color: ${l.ButtonText};
            }

            :host(:hover) ::slotted([slot="end"]:not(svg)),
            :host(:${T}) ::slotted([slot="end"]:not(svg)) {
                color: ${l.HighlightText};
            }
        `),new To(v`
                .expand-collapse-glyph {
                    transform: rotate(0deg);
                }
            `,v`
                .expand-collapse-glyph {
                    transform: rotate(180deg);
                }
            `)),jf=ie.compose({baseName:"menu-item",template:Fh,styles:Bf,checkboxIndicator:`
        <svg
            part="checkbox-indicator"
            class="checkbox-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `,expandCollapseGlyph:`
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="expand-collapse-glyph"
            part="expand-collapse-glyph"
        >
            <path
                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
            />
        </svg>
    `,radioIndicator:`
        <span part="radio-indicator" class="radio-indicator"></span>
    `}),Uf=(i,t)=>v`
        ${q("block")} :host {
            --elevation: 11;
            background: ${yo};
            border: calc(${E} * 1px) solid transparent;
            ${ji}
            margin: 0;
            border-radius: calc(${B} * 1px);
            padding: calc(${w} * 1px) 0;
            max-width: 368px;
            min-width: 64px;
        }

        :host([slot="submenu"]) {
            width: max-content;
            margin: 0 calc(${w} * 1px);
        }

        ::slotted(hr) {
            box-sizing: content-box;
            height: 0;
            margin: 0;
            border: none;
            border-top: calc(${E} * 1px) solid ${Co};
        }
    `.withBehaviors(M(v`
                :host {
                    background: ${l.Canvas};
                    border-color: ${l.CanvasText};
                }
            `)),qf=po.compose({baseName:"menu",template:Sh,styles:Uf}),_f=(i,t)=>v`
    ${q("inline-block")} :host {
        font-family: ${at};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${R};
        background: ${He};
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid ${nt};
        height: calc(${L} * 1px);
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(${w} * 2px + 1px);
        font-size: ${Z};
        line-height: ${ot};
    }

    .control:hover,
    .control:${T},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .controls {
        opacity: 0;
    }

    .label {
        display: block;
        color: ${R};
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .start,
    .end {
        margin: auto;
        fill: currentcolor;
    }

    .step-up-glyph,
    .step-down-glyph {
        display: block;
        padding: 4px 10px;
        cursor: pointer;
    }

    .step-up-glyph:before,
    .step-down-glyph:before {
        content: '';
        display: block;
        border: solid transparent 6px;
    }

    .step-up-glyph:before {
        border-bottom-color: ${R};
    }

    .step-down-glyph:before {
        border-top-color: ${R};
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not([disabled])) .root {
        background: ${ne};
        border-color: ${Ct};
    }

    :host(:active:not([disabled])) .root {
        background: ${ne};
        border-color: ${vt};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${j};
        box-shadow: 0 0 0 1px ${j} inset;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
        opacity: 1;
    }

    :host([appearance="filled"]) .root {
        background: ${Lt};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${Ye};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${gt};
    }

    :host([disabled]) {
        opacity: ${kt};
    }

    :host([disabled]) .control {
        border-color: ${he};
    }
`.withBehaviors(M(v`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${l.Field};
                    border-color: ${l.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${l.Field};
                    border-color: ${l.Highlight};
                }
                .start,
                .end {
                    fill: currentcolor;
                }
                :host([disabled]) {
                    opacity: 1;
                }
                :host([disabled]) .root,
                :host([appearance="filled"]:hover[disabled]) .root {
                    border-color: ${l.GrayText};
                    background: ${l.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${l.Highlight};
                    box-shadow: 0 0 0 1px ${l.Highlight} inset;
                }
                input::placeholder {
                    color: ${l.GrayText};
                }
            `));class bl extends qt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}r([d],bl.prototype,"appearance",void 0);const Gf=bl.compose({baseName:"number-field",baseClass:qt,styles:_f,template:Rh,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
        <span class="step-down-glyph" part="step-down-glyph"></span>
    `,stepUpGlyph:`
        <span class="step-up-glyph" part="step-up-glyph"></span>
    `}),Wf=(i,t)=>v`
        .region {
            z-index: 1000;
            overflow: hidden;
            display: flex;
            font-family: ${at};
            font-size: ${Z};
        }

        .loaded {
            opacity: 1;
            pointer-events: none;
        }

        .loading-display,
        .no-options-display {
            background: ${yo};
            width: 100%;
            min-height: calc(${L} * 1px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            padding: calc(${w} * 1px);
        }

        .loading-progress {
            width: 42px;
            height: 42px;
        }

        .bottom {
            flex-direction: column;
        }

        .top {
            flex-direction: column-reverse;
        }
    `,Xf=(i,t)=>v`
        :host {
            background: ${yo};
            --elevation: 11;
            /* TODO: a mechanism to manage z-index across components
            https://github.com/microsoft/fast/issues/3813 */
            z-index: 1000;
            display: flex;
            width: 100%;
            max-height: 100%;
            min-height: 58px;
            box-sizing: border-box;
            flex-direction: column;
            overflow-y: auto;
            overflow-x: hidden;
            pointer-events: auto;
            border-radius: calc(${B} * 1px);
            padding: calc(${w} * 1px) 0;
            border: calc(${E} * 1px) solid transparent;
            ${ji}
        }

        .suggestions-available-alert {
            height: 0;
            opacity: 0;
            overflow: hidden;
        }
    `.withBehaviors(M(v`
                :host {
                    background: ${l.Canvas};
                    border-color: ${l.CanvasText};
                }
            `)),Yf=(i,t)=>v`
        :host {
        display: flex;
        align-items: center;
        justify-items: center;
        font-family: ${at};
        border-radius: calc(${B} * 1px);
        border: calc(${X} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${R};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${Z};
        min-height: calc(${L} * 1px);
        line-height: ${ot};
        margin: 0 calc(${w} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${w} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${T}[role="listitem"]) {
        border-color: ${j};
        background: ${Lt};
        color: ${R};
    }

    :host(:hover) {
        background: ${Ye};
        color: ${R};
    }

    :host([aria-selected="true"]) {
        background: ${nt};
        color: ${de};
    }

    `.withBehaviors(M(v`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${l.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${l.Highlight};
                    color: ${l.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${l.Canvas};
                    color: ${l.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `)),Qf=(i,t)=>v`
        :host {
            display: flex;
            flex-direction: row;
            column-gap: calc(${w} * 1px);
            row-gap: calc(${w} * 1px);
            flex-wrap: wrap;
        }

        ::slotted([role="combobox"]) {
            min-width: 260px;
            width: auto;
            box-sizing: border-box;
            color: ${R};
            background: ${He};
            border-radius: calc(${B} * 1px);
            border: calc(${E} * 1px) solid ${nt};
            height: calc(${L} * 1px);
            font-family: ${at};
            outline: none;
            user-select: none;
            font-size: ${Z};
            line-height: ${ot};
            padding: 0 calc(${w} * 2px + 1px);
        }

        ::slotted([role="combobox"]:active) { {
            background: ${ne};
            border-color: ${vt};
        }

        ::slotted([role="combobox"]:focus-within) {
            border-color: ${j};
            box-shadow: 0 0 0 1px ${j} inset;
        }
    `.withBehaviors(M(v`
                ::slotted([role="combobox"]:active) {
                    background: ${l.Field};
                    border-color: ${l.Highlight};
                }
                ::slotted([role="combobox"]:focus-within) {
                    border-color: ${l.Highlight};
                    box-shadow: 0 0 0 1px ${l.Highlight} inset;
                }
                ::slotted(input:placeholder) {
                    color: ${l.GrayText};
                }
            `)),Zf=(i,t)=>v`
:host {
    display: flex;
    align-items: center;
    justify-items: center;
    font-family: ${at};
    border-radius: calc(${B} * 1px);
    border: calc(${X} * 1px) solid transparent;
    box-sizing: border-box;
    color: ${R};
    cursor: pointer;
    fill: currentcolor;
    font-size: ${Z};
    height: calc(${L} * 1px);
    line-height: ${ot};
    outline: none;
    overflow: hidden;
    padding: 0 calc(${w} * 2.25px);
    user-select: none;
    white-space: nowrap;
}

:host(:${T}),
:host(:hover) {
    background: ${zn};
    color: ${R};
}

:host(:focusVisible) {
    border-color: ${j};
}

:host([aria-selected="true"]) {
    background: ${vt};
    color: ${de};
}`.withBehaviors(M(v`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${l.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${l.Highlight};
                    color: ${l.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${l.Canvas};
                    color: ${l.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `)),Jf=tt.compose({baseName:"picker",template:vh,styles:Wf,shadowOptions:{}}),Kf=Hi.compose({baseName:"picker-menu",template:wh,styles:Xf}),tg=ho.compose({baseName:"picker-menu-option",template:kh,styles:Yf}),eg=vn.compose({baseName:"picker-list",template:Ch,styles:Qf}),ig=uo.compose({baseName:"picker-list-item",template:Th,styles:Zf}),og=(i,t)=>v`
        ${q("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${L} * 1px);
            width: calc(${L} * 1px);
            margin: calc(${L} * 1px) 0;
        }

        .progress {
            height: 100%;
            width: 100%;
        }

        .background {
            stroke: ${Lt};
            fill: none;
            stroke-width: 2px;
        }

        .determinate {
            stroke: ${_t};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
        }

        .indeterminate-indicator-1 {
            stroke: ${_t};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
            animation: spin-infinite 2s linear infinite;
        }

        :host([paused]) .indeterminate-indicator-1 {
            animation-play-state: paused;
            stroke: ${Lt};
        }

        :host([paused]) .determinate {
            stroke: ${wo};
        }

        @keyframes spin-infinite {
            0% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(0deg);
            }
            50% {
                stroke-dasharray: 21.99px 21.99px;
                transform: rotate(450deg);
            }
            100% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(1080deg);
            }
        }
    `.withBehaviors(M(v`
                .indeterminate-indicator-1,
                .determinate {
                    stroke: ${l.FieldText};
                }
                .background {
                    stroke: ${l.Field};
                }
                :host([paused]) .indeterminate-indicator-1 {
                    stroke: ${l.Field};
                }
                :host([paused]) .determinate {
                    stroke: ${l.GrayText};
                }
            `)),sg=li.compose({baseName:"progress-ring",template:Ah,styles:og,indeterminateIndicator:`
        <svg class="progress" part="progress" viewBox="0 0 16 16">
            <circle
                class="background"
                part="background"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
            <circle
                class="indeterminate-indicator-1"
                part="indeterminate-indicator-1"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
        </svg>
    `}),ng=(i,t)=>v`
        ${q("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${w} * 1px);
            margin: calc(${w} * 1px) 0;
        }

        .progress {
            background-color: ${Lt};
            border-radius: calc(${w} * 1px);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
        }

        .determinate {
            background-color: ${_t};
            border-radius: calc(${w} * 1px);
            height: 100%;
            transition: all 0.2s ease-in-out;
            display: flex;
        }

        .indeterminate {
            height: 100%;
            border-radius: calc(${w} * 1px);
            display: flex;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .indeterminate-indicator-1 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${_t};
            border-radius: calc(${w} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 40%;
            animation: indeterminate-1 2s infinite;
        }

        .indeterminate-indicator-2 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${_t};
            border-radius: calc(${w} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 60%;
            animation: indeterminate-2 2s infinite;
        }

        :host([paused]) .indeterminate-indicator-1,
        :host([paused]) .indeterminate-indicator-2 {
            animation-play-state: paused;
            background-color: ${Lt};
        }

        :host([paused]) .determinate {
            background-color: ${wo};
        }

        @keyframes indeterminate-1 {
            0% {
                opacity: 1;
                transform: translateX(-100%);
            }
            70% {
                opacity: 1;
                transform: translateX(300%);
            }
            70.01% {
                opacity: 0;
            }
            100% {
                opacity: 0;
                transform: translateX(300%);
            }
        }

        @keyframes indeterminate-2 {
            0% {
                opacity: 0;
                transform: translateX(-150%);
            }
            29.99% {
                opacity: 0;
            }
            30% {
                opacity: 1;
                transform: translateX(-150%);
            }
            100% {
                transform: translateX(166.66%);
                opacity: 1;
            }
        }
    `.withBehaviors(M(v`
                .progress {
                    forced-color-adjust: none;
                    background-color: ${l.Field};
                    box-shadow: 0 0 0 1px inset ${l.FieldText};
                }
                .determinate,
                .indeterminate-indicator-1,
                .indeterminate-indicator-2 {
                    forced-color-adjust: none;
                    background-color: ${l.FieldText};
                }
                :host([paused]) .determinate,
                :host([paused]) .indeterminate-indicator-1,
                :host([paused]) .indeterminate-indicator-2 {
                    background-color: ${l.GrayText};
                }
            `)),rg=li.compose({baseName:"progress",template:Vh,styles:ng,indeterminateIndicator1:`
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `,indeterminateIndicator2:`
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `}),ag=(i,t)=>v`
    ${q("flex")} :host {
        align-items: flex-start;
        margin: calc(${w} * 1px) 0;
        flex-direction: column;
    }
    .positioning-region {
        display: flex;
        flex-wrap: wrap;
    }
    :host([orientation="vertical"]) .positioning-region {
        flex-direction: column;
    }
    :host([orientation="horizontal"]) .positioning-region {
        flex-direction: row;
    }
`,lg=_e.compose({baseName:"radio-group",template:Hh,styles:ag}),cg=(i,t)=>v`
    ${q("inline-flex")} :host {
        --input-size: calc((${L} / 2) + ${w});
        align-items: center;
        outline: none;
        margin: calc(${w} * 1px) 0;
        /* Chromium likes to select label text or the default slot when
            the radio is clicked. Maybe there is a better solution here? */
        user-select: none;
        position: relative;
        flex-direction: row;
        transition: all 0.2s ease-in-out;
    }

    .control {
        position: relative;
        width: calc((${L} / 2 + ${w}) * 1px);
        height: calc((${L} / 2 + ${w}) * 1px);
        box-sizing: border-box;
        border-radius: 999px;
        border: calc(${E} * 1px) solid ${he};
        background: ${He};
        outline: none;
        cursor: pointer;
    }

    .label {
        font-family: ${at};
        color: ${R};
        /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
        padding-inline-start: calc(${w} * 2px + 2px);
        margin-inline-end: calc(${w} * 2px + 2px);
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .control, .checked-indicator {
        flex-shrink: 0;
    }

    .checked-indicator {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 999px;
        display: inline-block;
        background: ${me};
        fill: ${me};
        opacity: 0;
        pointer-events: none;
    }

    :host(:not([disabled])) .control:hover{
        background: ${ne};
        border-color: ${ko};
    }

    :host(:not([disabled])) .control:active {
        background: ${$o};
        border-color: ${Nn};
    }

    :host(:${T}) .control {
        box-shadow: 0 0 0 2px ${J}, 0 0 0 4px ${j};
    }

    :host([aria-checked="true"]) .control {
        background: ${nt};
        border: calc(${E} * 1px) solid ${nt};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: ${Ct};
        border: calc(${E} * 1px) solid ${Ct};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
        background: ${Ve};
        fill: ${Ve};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active {
        background: ${vt};
        border: calc(${E} * 1px) solid ${vt};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
        background: ${de};
        fill: ${de};
    }

    :host([aria-checked="true"]:${T}:not([disabled])) .control {
        box-shadow: 0 0 0 2px ${J}, 0 0 0 4px ${j};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${gt};
    }

    :host([aria-checked="true"]) .checked-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${kt};
    }
`.withBehaviors(M(v`
            .control,
            :host([aria-checked="true"]:not([disabled])) .control {
                forced-color-adjust: none;
                border-color: ${l.FieldText};
                background: ${l.Field};
            }
            :host(:not([disabled])) .control:hover {
                border-color: ${l.Highlight};
                background: ${l.Field};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover,
            :host([aria-checked="true"]:not([disabled])) .control:active {
                border-color: ${l.Highlight};
                background: ${l.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${l.Highlight};
                fill: ${l.Highlight};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator,
            :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
                background: ${l.HighlightText};
                fill: ${l.HighlightText};
            }
            :host(:${T}) .control {
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([aria-checked="true"]:${T}:not([disabled])) .control {
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([disabled]) {
                forced-color-adjust: none;
                opacity: 1;
            }
            :host([disabled]) .label {
                color: ${l.GrayText};
            }
            :host([disabled]) .control,
            :host([aria-checked="true"][disabled]) .control:hover, .control:active {
                background: ${l.Field};
                border-color: ${l.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                fill: ${l.GrayText};
                background: ${l.GrayText};
            }
        `)),dg=os.compose({baseName:"radio",template:zh,styles:cg,checkedIndicator:`
        <div part="checked-indicator" class="checked-indicator"></div>
    `}),hg=(i,t)=>v`
    ${q("inline-block")} :host {
        font-family: ${at};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${R};
        background: ${He};
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid ${nt};
        height: calc(${L} * 1px);
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0;
        padding-inline-start: calc(${w} * 2px + 1px);
        padding-inline-end: calc((${w} * 2px) + (${L} * 1px) + 1px);
        font-size: ${Z};
        line-height: ${ot};
    }

    .control::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .control:hover,
    .control:${T},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .clear-button {
        position: absolute;
        right: 0;
        top: 1px;
        height: calc(100% - 2px);
        opacity: 0;
    }

    .input-wrapper {
        display: flex;
        position: relative;
        width: 100%;
    }

    .label {
        display: block;
        color: ${R};
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .start,
    .end {
        display: flex;
        margin: 1px;
        fill: currentcolor;
    }

    ::slotted([slot="end"]) {
        height: 100%
    }

    .end {
        margin-inline-end: 1px;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
        margin-inline-end: 11px;
        margin-inline-start: 11px;
        margin-top: auto;
        margin-bottom: auto;
    }

    :host(:hover:not([disabled])) .root {
        background: ${ne};
        border-color: ${Ct};
    }

    :host(:active:not([disabled])) .root {
        background: ${ne};
        border-color: ${vt};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${j};
        box-shadow: 0 0 0 1px ${j} inset;
    }

    .clear-button__hidden {
        opacity: 0;
    }

    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }

    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }

    :host([appearance="filled"]) .root {
        background: ${J};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${Ye};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${gt};
    }

    :host([disabled]) {
        opacity: ${kt};
    }

    :host([disabled]) .control {
        border-color: ${he};
    }
`.withBehaviors(M(v`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${l.Field};
                    border-color: ${l.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${l.Field};
                    border-color: ${l.Highlight};
                }
                .start,
                .end {
                    fill: currentcolor;
                }
                :host([disabled]) {
                    opacity: 1;
                }
                :host([disabled]) .root,
                :host([appearance="filled"]:hover[disabled]) .root {
                    border-color: ${l.GrayText};
                    background: ${l.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${l.Highlight};
                    box-shadow: 0 0 0 1px ${l.Highlight} inset;
                }
                input::placeholder {
                    color: ${l.GrayText};
                }
            `));class vl extends oe{constructor(){super(...arguments);this.appearance="outline"}appearanceChanged(t,e){O.queueUpdate(()=>{e==="filled"?J.setValueFor(this.root,o=>Ni.getValueFor(o).evaluate(o,J.getValueFor(this)).rest):t==="filled"&&J.deleteValueFor(this.root)})}}r([d],vl.prototype,"appearance",void 0);const ug=vl.compose({baseName:"search",baseClass:oe,template:jh,styles:hg,shadowOptions:{delegatesFocus:!0}}),pg=ci.compose({baseName:"select",template:Wh,styles:fl,indicator:`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `}),fg=(i,t)=>v`
        ${q("block")} :host {
            --skeleton-fill-default: #e1dfdd;
            overflow: hidden;
            width: 100%;
            position: relative;
            background-color: var(--skeleton-fill, var(--skeleton-fill-default));
            --skeleton-animation-gradient-default: linear-gradient(
                270deg,
                var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
                #f3f2f1 51.13%,
                var(--skeleton-fill, var(--skeleton-fill-default)) 100%
            );
            --skeleton-animation-timing-default: ease-in-out;
        }

        :host([shape="rect"]) {
            border-radius: calc(${B} * 1px);
        }

        :host([shape="circle"]) {
            border-radius: 100%;
            overflow: hidden;
        }

        object {
            position: absolute;
            width: 100%;
            height: auto;
            z-index: 2;
        }

        object img {
            width: 100%;
            height: auto;
        }

        ${q("block")} span.shimmer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: var(
                --skeleton-animation-gradient,
                var(--skeleton-animation-gradient-default)
            );
            background-size: 0px 0px / 90% 100%;
            background-repeat: no-repeat;
            background-color: var(--skeleton-animation-fill, ${Lt});
            animation: shimmer 2s infinite;
            animation-timing-function: var(
                --skeleton-animation-timing,
                var(--skeleton-timing-default)
            );
            animation-direction: normal;
            z-index: 1;
        }

        ::slotted(svg) {
            z-index: 2;
        }

        ::slotted(.pattern) {
            width: 100%;
            height: 100%;
        }

        @keyframes shimmer {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
        }
    `.withBehaviors(M(v`
                :host {
                    forced-color-adjust: none;
                    background-color: ${l.ButtonFace};
                    box-shadow: 0 0 0 1px ${l.ButtonText};
                }

                ${q("block")} span.shimmer {
                    display: none;
                }
            `)),gg=fo.compose({baseName:"skeleton",template:Xh,styles:fg}),yl=v`
    :host {
        align-self: start;
        grid-row: 2;
        margin-top: -2px;
        height: calc((${L} / 2 + ${w}) * 1px);
        width: auto;
    }
    .container {
        grid-template-rows: auto auto;
        grid-template-columns: 0;
    }
    .label {
        margin: 2px 0;
    }
`,xl=v`
    :host {
        justify-self: start;
        grid-column: 2;
        margin-left: 2px;
        height: auto;
        width: calc((${L} / 2 + ${w}) * 1px);
    }
    .container {
        grid-template-columns: auto auto;
        grid-template-rows: 0;
        min-width: calc(var(--thumb-size) * 1px);
        height: calc(var(--thumb-size) * 1px);
    }
    .mark {
        transform: rotate(90deg);
        align-self: center;
    }
    .label {
        margin-left: calc((${w} / 2) * 3px);
        align-self: center;
    }
`,mg=(i,t)=>v`
        ${q("block")} :host {
            font-family: ${at};
            color: ${R};
            fill: currentcolor;
        }
        .root {
            position: absolute;
            display: grid;
        }
        .container {
            display: grid;
            justify-self: center;
        }
        .label {
            justify-self: center;
            align-self: center;
            white-space: nowrap;
            max-width: 30px;
        }
        .mark {
            width: calc((${w} / 4) * 1px);
            height: calc(${L} * 0.25 * 1px);
            background: ${he};
            justify-self: center;
        }
        :host(.disabled) {
            opacity: ${kt};
        }
    `.withBehaviors(M(v`
                .mark {
                    forced-color-adjust: none;
                    background: ${l.FieldText};
                }
                :host(.disabled) {
                    forced-color-adjust: none;
                    opacity: 1;
                }
                :host(.disabled) .label {
                    color: ${l.GrayText};
                }
                :host(.disabled) .mark {
                    background: ${l.GrayText};
                }
            `));class bg extends we{sliderOrientationChanged(){this.sliderOrientation===ut.horizontal?(this.$fastController.addStyles(yl),this.$fastController.removeStyles(xl)):(this.$fastController.addStyles(xl),this.$fastController.removeStyles(yl))}}const vg=bg.compose({baseName:"slider-label",baseClass:we,template:Yh,styles:mg}),yg=(i,t)=>v`
    :host([hidden]) {
        display: none;
    }

    ${q("inline-grid")} :host {
        --thumb-size: calc(${L} * 0.5 - ${w});
        --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
        --track-overhang: calc((${w} / 2) * -1);
        --track-width: ${w};
        --fast-slider-height: calc(var(--thumb-size) * 10);
        align-items: center;
        width: 100%;
        margin: calc(${w} * 1px) 0;
        user-select: none;
        box-sizing: border-box;
        border-radius: calc(${B} * 1px);
        outline: none;
        cursor: pointer;
    }
    :host([orientation="horizontal"]) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host([orientation="vertical"]) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        height: 100%;
        grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }

    :host(:${T}) .thumb-cursor {
        box-shadow: 0 0 0 2px ${J}, 0 0 0 4px ${j};
    }

    .thumb-container {
        position: absolute;
        height: calc(var(--thumb-size) * 1px);
        width: calc(var(--thumb-size) * 1px);
        transition: all 0.2s ease;
        color: ${R};
        fill: currentcolor;
    }
    .thumb-cursor {
        border: none;
        width: calc(var(--thumb-size) * 1px);
        height: calc(var(--thumb-size) * 1px);
        background: ${R};
        border-radius: calc(${B} * 1px);
    }
    .thumb-cursor:hover {
        background: ${R};
        border-color: ${ko};
    }
    .thumb-cursor:active {
        background: ${R};
    }
    :host([orientation="horizontal"]) .thumb-container {
        transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host([orientation="vertical"]) .thumb-container {
        transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host([orientation="horizontal"]) {
        min-width: calc(var(--thumb-size) * 1px);
    }
    :host([orientation="horizontal"]) .track {
        right: calc(var(--track-overhang) * 1px);
        left: calc(var(--track-overhang) * 1px);
        align-self: start;
        height: calc(var(--track-width) * 1px);
    }
    :host([orientation="vertical"]) .track {
        top: calc(var(--track-overhang) * 1px);
        bottom: calc(var(--track-overhang) * 1px);
        width: calc(var(--track-width) * 1px);
        height: 100%;
    }
    .track {
        background: ${he};
        position: absolute;
        border-radius: calc(${B} * 1px);
    }
    :host([orientation="vertical"]) {
        height: calc(var(--fast-slider-height) * 1px);
        min-height: calc(var(--thumb-size) * 1px);
        min-width: calc(${w} * 20px);
    }
    :host([disabled]), :host([readonly]) {
        cursor: ${gt};
    }
    :host([disabled]) {
        opacity: ${kt};
    }
`.withBehaviors(M(v`
            .thumb-cursor {
                forced-color-adjust: none;
                border-color: ${l.FieldText};
                background: ${l.FieldText};
            }
            .thumb-cursor:hover,
            .thumb-cursor:active {
                background: ${l.Highlight};
            }
            .track {
                forced-color-adjust: none;
                background: ${l.FieldText};
            }
            :host(:${T}) .thumb-cursor {
                border-color: ${l.Highlight};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .track,
            :host([disabled]) .thumb-cursor {
                forced-color-adjust: none;
                background: ${l.GrayText};
            }

            :host(:${T}) .thumb-cursor {
                background: ${l.Highlight};
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
        `)),xg=Ht.compose({baseName:"slider",template:Qh,styles:yg,thumb:`
        <div class="thumb-cursor"></div>
    `}),$g=(i,t)=>v`
    :host([hidden]) {
        display: none;
    }

    ${q("inline-flex")} :host {
        align-items: center;
        outline: none;
        font-family: ${at};
        margin: calc(${w} * 1px) 0;
        ${""} user-select: none;
    }

    :host([disabled]) {
        opacity: ${kt};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .switch,
    :host([disabled]) .switch {
        cursor: ${gt};
    }

    .switch {
        position: relative;
        outline: none;
        box-sizing: border-box;
        width: calc(${L} * 1px);
        height: calc((${L} / 2 + ${w}) * 1px);
        background: ${He};
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid ${he};
    }

    .switch:hover {
        background: ${ne};
        border-color: ${ko};
        cursor: pointer;
    }

    host([disabled]) .switch:hover,
    host([readonly]) .switch:hover {
        background: ${ne};
        border-color: ${ko};
        cursor: ${gt};
    }

    :host(:not([disabled])) .switch:active {
        background: ${$o};
        border-color: ${Nn};
    }

    :host(:${T}) .switch {
        box-shadow: 0 0 0 2px ${J}, 0 0 0 4px ${j};
    }

    .checked-indicator {
        position: absolute;
        top: 5px;
        bottom: 5px;
        background: ${R};
        border-radius: calc(${B} * 1px);
        transition: all 0.2s ease-in-out;
    }

    .status-message {
        color: ${R};
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
    }

    :host([disabled]) .status-message,
    :host([readonly]) .status-message {
        cursor: ${gt};
    }

    .label {
        color: ${R};

        ${""} margin-inline-end: calc(${w} * 2px + 2px);
        font-size: ${Z};
        line-height: ${ot};
        cursor: pointer;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${w} * 2px + 2px);
    }

    :host([aria-checked="true"]) .checked-indicator {
        background: ${me};
    }

    :host([aria-checked="true"]) .switch {
        background: ${nt};
        border-color: ${nt};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:hover {
        background: ${Ct};
        border-color: ${Ct};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:hover .checked-indicator {
        background: ${Ve};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:active {
        background: ${vt};
        border-color: ${vt};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:active .checked-indicator {
        background: ${de};
    }

    :host([aria-checked="true"]:${T}:not([disabled])) .switch {
        box-shadow: 0 0 0 2px ${J}, 0 0 0 4px ${j};
    }

    .unchecked-message {
        display: block;
    }

    .checked-message {
        display: none;
    }

    :host([aria-checked="true"]) .unchecked-message {
        display: none;
    }

    :host([aria-checked="true"]) .checked-message {
        display: block;
    }
`.withBehaviors(M(v`
            .checked-indicator,
            :host(:not([disabled])) .switch:active .checked-indicator {
                forced-color-adjust: none;
                background: ${l.FieldText};
            }
            .switch {
                forced-color-adjust: none;
                background: ${l.Field};
                border-color: ${l.FieldText};
            }
            :host(:not([disabled])) .switch:hover {
                background: ${l.HighlightText};
                border-color: ${l.Highlight};
            }
            :host([aria-checked="true"]) .switch {
                background: ${l.Highlight};
                border-color: ${l.Highlight};
            }
            :host([aria-checked="true"]:not([disabled])) .switch:hover,
            :host(:not([disabled])) .switch:active {
                background: ${l.HighlightText};
                border-color: ${l.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${l.HighlightText};
            }
            :host([aria-checked="true"]:not([disabled])) .switch:hover .checked-indicator {
                background: ${l.Highlight};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host(:${T}) .switch {
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([aria-checked="true"]:${T}:not([disabled])) .switch {
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([disabled]) .checked-indicator {
                background: ${l.GrayText};
            }
            :host([disabled]) .switch {
                background: ${l.Field};
                border-color: ${l.GrayText};
            }
        `),new To(v`
                .checked-indicator {
                    left: 5px;
                    right: calc(((${L} / 2) + 1) * 1px);
                }

                :host([aria-checked="true"]) .checked-indicator {
                    left: calc(((${L} / 2) + 1) * 1px);
                    right: 5px;
                }
            `,v`
                .checked-indicator {
                    right: 5px;
                    left: calc(((${L} / 2) + 1) * 1px);
                }

                :host([aria-checked="true"]) .checked-indicator {
                    right: calc(((${L} / 2) + 1) * 1px);
                    left: 5px;
                }
            `)),wg=wn.compose({baseName:"switch",template:Kh,styles:$g,switch:`
        <span class="checked-indicator" part="checked-indicator"></span>
    `}),kg=(i,t)=>v`
        ${q("grid")} :host {
            box-sizing: border-box;
            font-family: ${at};
            font-size: ${Z};
            line-height: ${ot};
            color: ${R};
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr;
        }

        .tablist {
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: auto;
            position: relative;
            width: max-content;
            align-self: end;
            padding: calc(${w} * 4px) calc(${w} * 4px) 0;
            box-sizing: border-box;
        }

        .start,
        .end {
            align-self: center;
        }

        .activeIndicator {
            grid-row: 2;
            grid-column: 1;
            width: 100%;
            height: 5px;
            justify-self: center;
            background: ${nt};
            margin-top: 10px;
            border-radius: calc(${B} * 1px)
                calc(${B} * 1px) 0 0;
        }

        .activeIndicatorTransition {
            transition: transform 0.2s ease-in-out;
        }

        .tabpanel {
            grid-row: 2;
            grid-column-start: 1;
            grid-column-end: 4;
            position: relative;
        }

        :host([orientation="vertical"]) {
            grid-template-rows: auto 1fr auto;
            grid-template-columns: auto 1fr;
        }

        :host([orientation="vertical"]) .tablist {
            grid-row-start: 2;
            grid-row-end: 2;
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: auto 1fr;
            position: relative;
            width: max-content;
            justify-self: end;
            width: 100%;
            padding: calc((${L} - ${w}) * 1px)
                calc(${w} * 4px) calc((${L} - ${w}) * 1px) 0;
        }

        :host([orientation="vertical"]) .tabpanel {
            grid-column: 2;
            grid-row-start: 1;
            grid-row-end: 4;
        }

        :host([orientation="vertical"]) .end {
            grid-row: 3;
        }

        :host([orientation="vertical"]) .activeIndicator {
            grid-column: 1;
            grid-row: 1;
            width: 5px;
            height: 100%;
            margin-inline-end: 10px;
            align-self: center;
            background: ${nt};
            margin-top: 0;
            border-radius: 0 calc(${B} * 1px)
                calc(${B} * 1px) 0;
        }

        :host([orientation="vertical"]) .activeIndicatorTransition {
            transition: transform 0.2s linear;
        }
    `.withBehaviors(M(v`
                .activeIndicator,
                :host([orientation="vertical"]) .activeIndicator {
                    forced-color-adjust: none;
                    background: ${l.Highlight};
                }
            `)),Cg=(i,t)=>v`
    ${q("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${at};
        font-size: ${Z};
        line-height: ${ot};
        height: calc(${L} * 1px);
        padding: calc(${w} * 5px) calc(${w} * 4px);
        color: ${wo};
        fill: currentcolor;
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host(:hover) {
        color: ${R};
        fill: currentcolor;
    }

    :host(:active) {
        color: ${R};
        fill: currentcolor;
    }

    :host([disabled]) {
        cursor: ${gt};
        opacity: ${kt};
    }

    :host([disabled]:hover) {
        color: ${wo};
        background: ${xi};
    }

    :host([aria-selected="true"]) {
        background: ${Lt};
        color: ${_t};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:hover) {
        background: ${Ye};
        color: ${yi};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:active) {
        background: ${sl};
        color: ${Ce};
        fill: currentcolor;
    }

    :host(:${T}) {
        outline: none;
        border: calc(${E} * 1px) solid ${j};
        box-shadow: 0 0 0 calc((${X} - ${E}) * 1px)
            ${j};
    }

    :host(:focus) {
        outline: none;
    }

    :host(.vertical) {
        justify-content: end;
        grid-column: 2;
    }

    :host(.vertical[aria-selected="true"]) {
        z-index: 2;
    }

    :host(.vertical:hover) {
        color: ${R};
    }

    :host(.vertical:active) {
        color: ${R};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(M(v`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${l.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${l.Highlight};
                color: ${l.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${l.HighlightText};
                color: ${l.Highlight};
                fill: currentcolor;
            }
            :host(:${T}) {
                border-color: ${l.ButtonText};
                box-shadow: none;
            }
            :host([disabled]),
            :host([disabled]:hover) {
                opacity: 1;
                color: ${l.GrayText};
                background: ${l.ButtonFace};
            }
        `)),Tg=ma.compose({baseName:"tab",template:su,styles:Cg}),Ig=(i,t)=>v`
    ${q("block")} :host {
        box-sizing: border-box;
        font-size: ${Z};
        line-height: ${ot};
        padding: 0 calc((6 + (${w} * 2 * ${Xe})) * 1px);
    }
`,Fg=ou.compose({baseName:"tab-panel",template:iu,styles:Ig}),Sg=Le.compose({baseName:"tabs",template:nu,styles:kg}),Rg=(i,t)=>v`
    ${q("inline-block")} :host {
        font-family: ${at};
        outline: none;
        user-select: none;
    }

    .control {
        box-sizing: border-box;
        position: relative;
        color: ${R};
        background: ${He};
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid ${nt};
        height: calc(${L} * 2px);
        font: inherit;
        font-size: ${Z};
        line-height: ${ot};
        padding: calc(${w} * 2px + 1px);
        width: 100%;
        resize: none;
    }

    .control:hover:enabled {
        background: ${ne};
        border-color: ${Ct};
    }

    .control:active:enabled {
        background: ${$o};
        border-color: ${vt};
    }

    .control:hover,
    .control:${T},
    .control:disabled,
    .control:active {
        outline: none;
    }

    :host(:focus-within) .control {
        border-color: ${j};
        box-shadow: 0 0 0 1px ${j} inset;
    }

    :host([appearance="filled"]) .control {
        background: ${Lt};
    }

    :host([appearance="filled"]:hover:not([disabled])) .control {
        background: ${Ye};
    }

    :host([resize="both"]) .control {
        resize: both;
    }

    :host([resize="horizontal"]) .control {
        resize: horizontal;
    }

    :host([resize="vertical"]) .control {
        resize: vertical;
    }

    .label {
        display: block;
        color: ${R};
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${gt};
    }
    :host([disabled]) {
        opacity: ${kt};
    }
    :host([disabled]) .control {
        border-color: ${he};
    }
 `.withBehaviors(M(v`
                :host([disabled]) {
                    opacity: 1;
                }
            `));class $l extends zt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}r([d],$l.prototype,"appearance",void 0);const Dg=$l.compose({baseName:"text-area",baseClass:zt,template:lu,styles:Rg,shadowOptions:{delegatesFocus:!0}}),Eg=(i,t)=>v`
    ${q("inline-block")} :host {
        font-family: ${at};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${R};
        background: ${He};
        border-radius: calc(${B} * 1px);
        border: calc(${E} * 1px) solid ${nt};
        height: calc(${L} * 1px);
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(${w} * 2px + 1px);
        font-size: ${Z};
        line-height: ${ot};
    }

    .control:hover,
    .control:${T},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${R};
        cursor: pointer;
        font-size: ${Z};
        line-height: ${ot};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .start,
    .end {
        display: flex;
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not([disabled])) .root {
        background: ${ne};
        border-color: ${Ct};
    }

    :host(:active:not([disabled])) .root {
        background: ${ne};
        border-color: ${vt};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${j};
        box-shadow: 0 0 0 1px ${j} inset;
    }

    :host([appearance="filled"]) .root {
        background: ${Lt};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${Ye};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${gt};
    }

    :host([disabled]) {
        opacity: ${kt};
    }

    :host([disabled]) .control {
        border-color: ${he};
    }
`.withBehaviors(M(v`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${l.Field};
                    border-color: ${l.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${l.Field};
                    border-color: ${l.Highlight};
                }
                .start,
                .end {
                    fill: currentcolor;
                }
                :host([disabled]) {
                    opacity: 1;
                }
                :host([disabled]) .root,
                :host([appearance="filled"]:hover[disabled]) .root {
                    border-color: ${l.GrayText};
                    background: ${l.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${l.Highlight};
                    box-shadow: 0 0 0 1px ${l.Highlight} inset;
                }
                input::placeholder {
                    color: ${l.GrayText};
                }
            `));class wl extends Zt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}r([d],wl.prototype,"appearance",void 0);const Og=wl.compose({baseName:"text-field",baseClass:Zt,template:Dh,styles:Eg,shadowOptions:{delegatesFocus:!0}}),Lg=(i,t)=>v`
        ${q("inline-flex")} :host {
            --toolbar-item-gap: calc(
                (var(--design-unit) + calc(var(--density) + 2)) * 1px
            );
            background-color: ${J};
            border-radius: calc(${B} * 1px);
            fill: currentcolor;
            padding: var(--toolbar-item-gap);
        }

        :host(${T}) {
            outline: calc(${E} * 1px) solid ${Rp};
        }

        .positioning-region {
            align-items: flex-start;
            display: inline-flex;
            flex-flow: row wrap;
            justify-content: flex-start;
        }

        :host([orientation="vertical"]) .positioning-region {
            flex-direction: column;
        }

        ::slotted(:not([slot])) {
            flex: 0 0 auto;
            margin: 0 var(--toolbar-item-gap);
        }

        :host([orientation="vertical"]) ::slotted(:not([slot])) {
            margin: var(--toolbar-item-gap) 0;
        }

        .start,
        .end {
            display: flex;
            margin: auto;
            margin-inline: 0;
        }

        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            width: 16px;
            height: 16px;
        }
    `.withBehaviors(M(v`
            :host(:${T}) {
                box-shadow: 0 0 0 calc(${X} * 1px) ${l.Highlight};
                color: ${l.ButtonText};
                forced-color-adjust: none;
            }
        `));class Pg extends ke{connectedCallback(){super.connectedCallback();const t=so(this);t&&J.setValueFor(this,e=>Mn.getValueFor(e).evaluate(e,J.getValueFor(t)))}}const Ag=Pg.compose({baseName:"toolbar",baseClass:ke,template:cu,styles:Lg,shadowOptions:{delegatesFocus:!0}}),Vg=(i,t)=>v`
        :host {
            contain: size;
            overflow: visible;
            height: 0;
            width: 0;
        }

        .tooltip {
            box-sizing: border-box;
            border-radius: calc(${B} * 1px);
            border: calc(${E} * 1px) solid ${j};
            box-shadow: 0 0 0 1px ${j} inset;
            background: ${Lt};
            color: ${R};
            padding: 4px;
            height: fit-content;
            width: fit-content;
            font-family: ${at};
            font-size: ${Z};
            line-height: ${ot};
            white-space: nowrap;
            /* TODO: a mechanism to manage z-index across components
                https://github.com/microsoft/fast/issues/3813 */
            z-index: 10000;
        }

        ${i.tagFor(U)} {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: visible;
            flex-direction: row;
            pointer-events: none;
        }

        ${i.tagFor(U)}.right,
        ${i.tagFor(U)}.left {
            flex-direction: column;
        }

        ${i.tagFor(U)}.top .tooltip {
            margin-bottom: 4px;
        }

        ${i.tagFor(U)}.bottom .tooltip {
            margin-top: 4px;
        }

        ${i.tagFor(U)}.left .tooltip {
            margin-right: 4px;
        }

        ${i.tagFor(U)}.right .tooltip {
            margin-left: 4px;
        }
    `.withBehaviors(M(v`
                :host([disabled]) {
                    opacity: 1;
                }
            `)),Hg=xt.compose({baseName:"tooltip",template:du,styles:Vg}),zg=v`
    .expand-collapse-glyph {
        transform: rotate(0deg);
    }
    :host(.nested) .expand-collapse-button {
        left: var(--expand-collapse-button-nested-width, calc(${L} * -1px));
    }
    :host([selected])::after {
        left: calc(${X} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(45deg);
    }
`,Mg=v`
    .expand-collapse-glyph {
        transform: rotate(180deg);
    }
    :host(.nested) .expand-collapse-button {
        right: var(--expand-collapse-button-nested-width, calc(${L} * -1px));
    }
    :host([selected])::after {
        right: calc(${X} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(135deg);
    }
`,kl=Tr`((${fs} / 2) * ${w}) + ((${w} * ${Xe}) / 2)`,Ng=Jo.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=Bi.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),Bg=Jo.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=Ni.getValueFor(i);return Bi.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),jg=(i,t)=>v`
    ${q("block")} :host {
        contain: content;
        position: relative;
        outline: none;
        color: ${R};
        background: ${xi};
        cursor: pointer;
        font-family: ${at};
        --expand-collapse-button-size: calc(${L} * 1px);
        --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
        outline: none;
    }

    :host(:focus) .content-region {
        outline: none;
    }

    :host(:${T}) .positioning-region {
        border: ${j} calc(${E} * 1px) solid;
        border-radius: calc(${B} * 1px);
        color: ${R};
    }

    .positioning-region {
        display: flex;
        position: relative;
        box-sizing: border-box;
        border: transparent calc(${E} * 1px) solid;
        height: calc((${L} + 1) * 1px);
    }

    .positioning-region::before {
        content: "";
        display: block;
        width: var(--tree-item-nested-width);
        flex-shrink: 0;
    }

    .positioning-region:hover {
        background: ${nl};
    }

    .positioning-region:active {
        background: ${rl};
    }

    .content-region {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        width: 100%;
        height: calc(${L} * 1px);
        margin-inline-start: calc(${w} * 2px + 8px);
        font-size: ${Z};
        line-height: ${ot};
        font-weight: 400;
    }

    .items {
        display: none;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        font-size: calc(1em + (${w} + 16) * 1px);
    }

    .expand-collapse-button {
        background: none;
        border: none;
        outline: none;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: calc((${kl} + (${w} * 2)) * 1px);
        height: calc((${kl} + (${w} * 2)) * 1px);
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 6px;
        margin-right: 6px;
    }

    .expand-collapse-glyph {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
        transition: transform 0.1s linear;

        pointer-events: none;
        fill: currentcolor;
    }

    .start,
    .end {
        display: flex;
        fill: currentcolor;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
        margin-inline-end: calc(${w} * 2px + 2px);
    }

    .end {
        /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
        margin-inline-start: calc(${w} * 2px + 2px);
    }

    :host([expanded]) > .items {
        display: block;
    }

    :host([disabled]) .content-region {
        opacity: ${kt};
        cursor: ${gt};
    }

    :host(.nested) .content-region {
        position: relative;
        margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
        position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
        background: ${Ng};
    }

    :host([selected]) .positioning-region {
        background: ${Lt};
    }

    :host([selected]) .expand-collapse-button:hover {
        background: ${Bg};
    }

    :host([selected])::after {
        /* The background needs to be calculated based on the selected background state
            for this control. We currently have no way of changing that, so setting to
            accent-foreground-rest for the time being */
        background: ${_t};
        border-radius: calc(${B} * 1px);
        content: "";
        display: block;
        position: absolute;
        top: calc((${L} / 4) * 1px);
        width: 3px;
        height: calc((${L} / 2) * 1px);
    }

    ::slotted(${i.tagFor($t)}) {
        --tree-item-nested-width: 1em;
        --expand-collapse-button-nested-width: calc(${L} * -1px);
    }
`.withBehaviors(new To(zg,Mg),M(v`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                background: ${l.Field};
                color: ${l.FieldText};
            }
            :host .content-region .expand-collapse-glyph {
                fill: ${l.FieldText};
            }
            :host .positioning-region:hover,
            :host([selected]) .positioning-region {
                background: ${l.Highlight};
            }
            :host .positioning-region:hover .content-region,
            :host([selected]) .positioning-region .content-region {
                color: ${l.HighlightText};
            }
            :host .positioning-region:hover .content-region .expand-collapse-glyph,
            :host .positioning-region:hover .content-region .start,
            :host .positioning-region:hover .content-region .end,
            :host([selected]) .content-region .expand-collapse-glyph,
            :host([selected]) .content-region .start,
            :host([selected]) .content-region .end {
                fill: ${l.HighlightText};
            }
            :host([selected])::after {
                background: ${l.Field};
            }
            :host(:${T}) .positioning-region {
                border-color: ${l.FieldText};
                box-shadow: 0 0 0 2px inset ${l.Field};
                color: ${l.FieldText};
            }
            :host([disabled]) .content-region,
            :host([disabled]) .positioning-region:hover .content-region {
                opacity: 1;
                color: ${l.GrayText};
            }
            :host([disabled]) .content-region .expand-collapse-glyph,
            :host([disabled]) .content-region .start,
            :host([disabled]) .content-region .end,
            :host([disabled]) .positioning-region:hover .content-region .expand-collapse-glyph,
            :host([disabled]) .positioning-region:hover .content-region .start,
            :host([disabled]) .positioning-region:hover .content-region .end {
                fill: ${l.GrayText};
            }
            :host([disabled]) .positioning-region:hover {
                background: ${l.Field};
            }
            .expand-collapse-glyph,
            .start,
            .end {
                fill: ${l.FieldText};
            }
            :host(.nested) .expand-collapse-button:hover {
                background: ${l.Field};
            }
            :host(.nested) .expand-collapse-button:hover .expand-collapse-glyph {
                fill: ${l.FieldText};
            }
        `)),Ug=$t.compose({baseName:"tree-item",template:hu,styles:jg,expandCollapseGlyph:`
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="expand-collapse-glyph"
        >
            <path
                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
            />
        </svg>
    `}),qg=(i,t)=>v`
    ${q("flex")} :host {
        flex-direction: column;
        align-items: stretch;
        min-width: fit-content;
        font-size: 0;
    }

    :host:focus-visible {
        outline: none;
    }
`,_g=go.compose({baseName:"tree-view",template:uu,styles:qg}),Xg={fastAccordion:Pp,fastAccordionItem:Lp,fastAnchor:Np,fastAnchoredRegion:jp,fastAvatar:Wp,fastBadge:Yp,fastBreadcrumb:Kp,fastBreadcrumbItem:Zp,fastButton:ef,fastCalendar:sf,fastCard:af,fastCheckbox:cf,fastCombobox:hf,fastDataGrid:bf,fastDataGridCell:gf,fastDataGridRow:mf,fastDesignSystemProvider:$f,fastDialog:kf,fastDisclosure:Tf,fastDivider:Ff,fastFlipper:Rf,fastHorizontalScroll:Af,fastListbox:Nf,fastOption:Hf,fastMenu:qf,fastMenuItem:jf,fastNumberField:Gf,fastPicker:Jf,fastPickerList:eg,fastPickerListItem:ig,fastPickerMenu:Kf,fastPickerMenuOption:tg,fastProgress:rg,fastProgressRing:sg,fastRadio:dg,fastRadioGroup:lg,fastSearch:ug,fastSelect:pg,fastSkeleton:gg,fastSlider:xg,fastSliderLabel:vg,fastSwitch:wg,fastTabs:Sg,fastTab:Tg,fastTabPanel:Fg,fastTextArea:Dg,fastTextField:Og,fastTooltip:Hg,fastToolbar:Ag,fastTreeView:_g,fastTreeItem:Ug,register(i,...t){if(!!i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};export{Jo as D,P as F,Wg as M,hs as P,Gg as S,d as a,fi as b,v as c,q as d,An as e,vs as f,B as g,x as h,Gd as i,Xg as j,Rt as n,Mi as p};
