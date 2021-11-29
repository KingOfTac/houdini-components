const Mi=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof global!="undefined")return global;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;try{return new Function("return this")()}catch{return{}}}();Mi.trustedTypes===void 0&&(Mi.trustedTypes={createPolicy:(i,t)=>t});const ke=Object.freeze([]),ee=[],zs=Mi.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let Oo=zs;const Lo=[];function na(){if(Lo.length)throw Lo.shift()}function ra(i){try{i.call()}catch(t){Lo.push(t),setTimeout(na,0)}}const ai=`fast-${Math.random().toString(36).substring(2,8)}`,Ms=`${ai}{`,Ao=`}${ai}`,F=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(Oo!==zs)throw new Error("The HTML policy can only be set once.");Oo=i},createHTML(i){return Oo.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(ai)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${ai}:`,""))},createInterpolationPlaceholder(i){return`${Ms}${i}${Ao}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${ai}:${i}-->`},queueUpdate(i){ee.length<1&&window.requestAnimationFrame(F.processUpdates),ee.push(i)},processUpdates(){const i=1024;let t=0;for(;t<ee.length;)if(ra(ee[t]),t++,t>i){for(let e=0,o=ee.length-t;e<o;e++)ee[e]=ee[e+t];ee.length-=t,t=0}ee.length=0},nextUpdate(){return new Promise(i=>{F.queueUpdate(i)})},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});function aa(i){const t=this.spillover;t.indexOf(i)===-1&&t.push(i)}function la(i){const t=this.spillover,e=t.indexOf(i);e!==-1&&t.splice(e,1)}function ca(i){const t=this.spillover,e=this.source;for(let o=0,s=t.length;o<s;++o)t[o].handleChange(e,i)}function da(i){return this.spillover.indexOf(i)!==-1}class Ni{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){if(!this.has(t)){if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.subscribe=aa,this.unsubscribe=la,this.notify=ca,this.has=da,this.sub1=void 0,this.sub2=void 0}}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,o=this.sub2,s=this.source;e!==void 0&&e.handleChange(s,t),o!==void 0&&o.handleChange(s,t)}}class Ns{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const o=this.subscribers[t];o!==void 0&&o.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var o;if(e){let s=this.subscribers[e];s===void 0&&(this.subscribers[e]=s=new Ni(this.source)),s.subscribe(t)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new Ni(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var o;if(e){const s=this.subscribers[e];s!==void 0&&s.unsubscribe(t)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(t)}}const ha=/(:|&&|\|\||if)/,Bs=new WeakMap,Vo=new WeakMap;let jt,js=i=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class ua{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return jt!==void 0&&jt.watch(t,this.name),t[this.field]}setValue(t,e){const o=this.field,s=t[o];if(s!==e){t[o]=e;const n=t[this.callback];typeof n=="function"&&n.call(t,s,e),Po(t).notify(this.name)}}}const E=Object.freeze({setArrayObserverFactory(i){js=i},getNotifier(i){let t=i.$fastController||Bs.get(i);return t===void 0&&(Array.isArray(i)?t=js(i):Bs.set(i,t=new Ns(i))),t},track(i,t){jt!==void 0&&jt.watch(i,t)},trackVolatile(){jt!==void 0&&(jt.needsRefresh=!0)},notify(i,t){Po(i).notify(t)},defineProperty(i,t){typeof t=="string"&&(t=new ua(t)),this.getAccessors(i).push(t),Reflect.defineProperty(i,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(i){let t=Vo.get(i);if(t===void 0){let e=Reflect.getPrototypeOf(i);for(;t===void 0&&e!==null;)t=Vo.get(e),e=Reflect.getPrototypeOf(e);t===void 0?t=[]:t=t.slice(0),Vo.set(i,t)}return t},binding(i,t,e=this.isVolatileBinding(i)){return new fa(i,t,e)},isVolatileBinding(i){return ha.test(i.toString())}}),Po=E.getNotifier;E.trackVolatile;const pa=F.queueUpdate;function p(i,t){E.defineProperty(i,t)}let Us=null;function qs(i){Us=i}class Ho{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Us}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}E.defineProperty(Ho.prototype,"index");E.defineProperty(Ho.prototype,"length");const li=Object.seal(new Ho);class fa extends Ni{constructor(t,e,o=!1){super(t,e);this.binding=t,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&this.last!==null&&this.disconnect();const o=jt;jt=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const s=this.binding(t,e);return jt=o,s}disconnect(){if(this.last!==null){let t=this.first;for(;t!==void 0;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const o=this.last,s=Po(t),n=o===null?this.first:{};if(n.propertySource=t,n.propertyName=e,n.notifier=s,s.subscribe(this,e),o!==null){if(!this.needsRefresh){let a;jt=void 0,a=o.propertySource[o.propertyName],jt=this,t===a&&(this.needsRefresh=!0)}o.next=n}this.last=n}handleChange(){this.needsQueue&&(this.needsQueue=!1,pa(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return e===void 0?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}class Bi{constructor(){this.targetIndex=0}}class _s extends Bi{constructor(){super(...arguments);this.createPlaceholder=F.createInterpolationPlaceholder}}class zo extends Bi{constructor(t,e,o){super();this.name=t,this.behavior=e,this.options=o}createPlaceholder(t){return F.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function ga(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=E.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function ma(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function ba(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function va(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function ya(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function xa(i){F.setAttribute(this.target,this.targetName,i)}function $a(i){F.setBooleanAttribute(this.target,this.targetName,i)}function wa(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function ka(i){this.target[this.targetName]=i}function Ca(i){const t=this.classVersions||Object.create(null),e=this.target;let o=this.version||0;if(i!=null&&i.length){const s=i.split(/\s+/);for(let n=0,a=s.length;n<a;++n){const c=s[n];c!==""&&(t[c]=o,e.classList.add(c))}}if(this.classVersions=t,this.version=o+1,o!==0){o-=1;for(const s in t)t[s]===o&&e.classList.remove(s)}}class Mo extends _s{constructor(t){super();this.binding=t,this.bind=ga,this.unbind=ba,this.updateTarget=xa,this.isBindingVolatile=E.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=ka,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(o,s)=>F.createHTML(e(o,s))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=$a;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=ma,this.unbind=ya;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=Ca);break}}targetAtContent(){this.updateTarget=wa,this.unbind=va}createBehavior(t){return new Ta(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ta{constructor(t,e,o,s,n,a,c){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=o,this.bind=s,this.unbind=n,this.updateTarget=a,this.targetName=c}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){qs(t);const e=this.binding(this.source,this.context);qs(null),e!==!0&&t.preventDefault()}}let No=null;class Bo{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){No=this}static borrow(t){const e=No||new Bo;return e.directives=t,e.reset(),No=null,e}}function Ia(i){if(i.length===1)return i[0];let t;const e=i.length,o=i.map(a=>typeof a=="string"?()=>a:(t=a.targetName||t,a.binding)),s=(a,c)=>{let h="";for(let u=0;u<e;++u)h+=o[u](a,c);return h},n=new Mo(s);return n.targetName=t,n}const Fa=Ao.length;function Gs(i,t){const e=t.split(Ms);if(e.length===1)return null;const o=[];for(let s=0,n=e.length;s<n;++s){const a=e[s],c=a.indexOf(Ao);let h;if(c===-1)h=a;else{const u=parseInt(a.substring(0,c));o.push(i.directives[u]),h=a.substring(c+Fa)}h!==""&&o.push(h)}return o}function Ws(i,t,e=!1){const o=t.attributes;for(let s=0,n=o.length;s<n;++s){const a=o[s],c=a.value,h=Gs(i,c);let u=null;h===null?e&&(u=new Mo(()=>c),u.targetName=a.name):u=Ia(h),u!==null&&(t.removeAttributeNode(a),s--,n--,i.addFactory(u))}}function Sa(i,t,e){const o=Gs(i,t.textContent);if(o!==null){let s=t;for(let n=0,a=o.length;n<a;++n){const c=o[n],h=n===0?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof c=="string"?h.textContent=c:(h.textContent=" ",i.captureContentBinding(c)),s=h,i.targetIndex++,h!==t&&e.nextNode()}i.targetIndex--}}function Da(i,t){const e=i.content;document.adoptNode(e);const o=Bo.borrow(t);Ws(o,i,!0);const s=o.behaviorFactories;o.reset();const n=F.createTemplateWalker(e);let a;for(;a=n.nextNode();)switch(o.targetIndex++,a.nodeType){case 1:Ws(o,a);break;case 3:Sa(o,a,n);break;case 8:F.isMarker(a)&&o.addFactory(t[F.extractDirectiveIndexFromMarker(a)])}let c=0;(F.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),c=-1);const h=o.behaviorFactories;return o.release(),{fragment:e,viewBehaviorFactories:h,hostBehaviorFactories:s,targetOffset:c}}const jo=document.createRange();class Xs{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,o=this.lastChild;let s=this.firstChild,n;for(;s!==o;)n=s.nextSibling,e.insertBefore(s,t),s=n;e.insertBefore(o,t)}}remove(){const t=this.fragment,e=this.lastChild;let o=this.firstChild,s;for(;o!==e;)s=o.nextSibling,t.appendChild(o),o=s;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let o=this.firstChild,s;for(;o!==e;)s=o.nextSibling,t.removeChild(o),o=s;t.removeChild(e);const n=this.behaviors,a=this.source;for(let c=0,h=n.length;c<h;++c)n[c].unbind(a)}bind(t,e){const o=this.behaviors;if(this.source!==t)if(this.source!==null){const s=this.source;this.source=t,this.context=e;for(let n=0,a=o.length;n<a;++n){const c=o[n];c.unbind(s),c.bind(t,e)}}else{this.source=t,this.context=e;for(let s=0,n=o.length;s<n;++s)o[s].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let o=0,s=t.length;o<s;++o)t[o].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){jo.setStartBefore(t[0].firstChild),jo.setEndAfter(t[t.length-1].lastChild),jo.deleteContents();for(let e=0,o=t.length;e<o;++e){const s=t[e],n=s.behaviors,a=s.source;for(let c=0,h=n.length;c<h;++c)n[c].unbind(a)}}}}class Ys{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let u;const v=this.html;if(typeof v=="string"){u=document.createElement("template"),u.innerHTML=F.createHTML(v);const $=u.content.firstElementChild;$!==null&&$.tagName==="TEMPLATE"&&(u=$)}else u=v;const b=Da(u,this.directives);this.fragment=b.fragment,this.viewBehaviorFactories=b.viewBehaviorFactories,this.hostBehaviorFactories=b.hostBehaviorFactories,this.targetOffset=b.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,s=new Array(this.behaviorCount),n=F.createTemplateWalker(e);let a=0,c=this.targetOffset,h=n.nextNode();for(let u=o.length;a<u;++a){const v=o[a],b=v.targetIndex;for(;h!==null;)if(c===b){s[a]=v.createBehavior(h);break}else h=n.nextNode(),c++}if(this.hasHostBehaviors){const u=this.hostBehaviorFactories;for(let v=0,b=u.length;v<b;++v,++a)s[a]=u[v].createBehavior(t)}return new Xs(e,s)}render(t,e,o){typeof e=="string"&&(e=document.getElementById(e)),o===void 0&&(o=e);const s=this.create(o);return s.bind(t,li),s.appendTo(e),s}}const Ra=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function m(i,...t){const e=[];let o="";for(let s=0,n=i.length-1;s<n;++s){const a=i[s];let c=t[s];if(o+=a,c instanceof Ys){const h=c;c=()=>h}if(typeof c=="function"&&(c=new Mo(c)),c instanceof _s){const h=Ra.exec(a);h!==null&&(c.targetName=h[2])}c instanceof Bi?(o+=c.createPlaceholder(e.length),e.push(c)):o+=c}return o+=i[i.length-1],new Ys(o,e)}class $t{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}$t.create=(()=>{if(F.supportsAdoptedStyleSheets){const i=new Map;return t=>new Ea(t,i)}return i=>new Aa(i)})();function Uo(i){return i.map(t=>t instanceof $t?Uo(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Qs(i){return i.map(t=>t instanceof $t?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}class Ea extends $t{constructor(t,e){super();this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Qs(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=Uo(t).map(o=>{if(o instanceof CSSStyleSheet)return o;let s=e.get(o);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(o),e.set(o,s)),s})}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter(o=>e.indexOf(o)===-1),super.removeStylesFrom(t)}}let Oa=0;function La(){return`fast-style-class-${++Oa}`}class Aa extends $t{constructor(t){super();this.styles=t,this.behaviors=null,this.behaviors=Qs(t),this.styleSheets=Uo(t),this.styleClass=La()}addStylesTo(t){const e=this.styleSheets,o=this.styleClass;t=this.normalizeTarget(t);for(let s=0;s<e.length;s++){const n=document.createElement("style");n.innerHTML=e[s],n.className=o,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let o=0,s=e.length;o<s;++o)t.removeChild(e[o]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const ji={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},w={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class Ui{constructor(t,e,o=e.toLowerCase(),s="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=o,this.mode=s,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,s==="boolean"&&n===void 0&&(this.converter=ji)}setValue(t,e){const o=t[this.fieldName],s=this.converter;s!==void 0&&(e=s.fromView(e)),o!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](o,e),t.$fastController.notify(this.name))}getValue(t){return E.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,o=this.guards;o.has(t)||e==="fromView"||F.queueUpdate(()=>{o.add(t);const s=t[this.fieldName];switch(e){case"reflect":const n=this.converter;F.setAttribute(t,this.attribute,n!==void 0?n.toView(s):s);break;case"boolean":F.setBooleanAttribute(t,this.attribute,s);break}o.delete(t)})}static collect(t,...e){const o=[];e.push(t.attributes);for(let s=0,n=e.length;s<n;++s){const a=e[s];if(a!==void 0)for(let c=0,h=a.length;c<h;++c){const u=a[c];typeof u=="string"?o.push(new Ui(t,u)):o.push(new Ui(t,u.property,u.attribute,u.mode,u.converter))}}return o}}function d(i,t){let e;function o(s,n){arguments.length>1&&(e.property=n),(s.constructor.attributes||(s.constructor.attributes=[])).push(e)}if(arguments.length>1){e={},o(i,t);return}return e=i===void 0?{}:i,o}const Zs={mode:"open"},Js={},Ks=new Map;class qo{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const o=Ui.collect(t,e.attributes),s=new Array(o.length),n={},a={};for(let c=0,h=o.length;c<h;++c){const u=o[c];s[c]=u.attribute,n[u.name]=u,a[u.attribute]=u}this.attributes=o,this.observedAttributes=s,this.propertyLookup=n,this.attributeLookup=a,this.shadowOptions=e.shadowOptions===void 0?Zs:e.shadowOptions===null?void 0:Object.assign(Object.assign({},Zs),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?Js:Object.assign(Object.assign({},Js),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?$t.create(e.styles):e.styles instanceof $t?e.styles:$t.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const o=this.attributes,s=e.prototype;for(let n=0,a=o.length;n<a;++n)E.defineProperty(s,o[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),Ks.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return Ks.get(t)}}const tn=new WeakMap,Va={bubbles:!0,composed:!0,cancelable:!0};function _o(i){return i.shadowRoot||tn.get(i)||null}class Go extends Ns{constructor(t,e){super(t);this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const o=e.shadowOptions;if(o!==void 0){const n=t.attachShadow(o);o.mode==="closed"&&tn.set(t,n)}const s=E.getAccessors(t);if(s.length>0){const n=this.boundObservables=Object.create(null);for(let a=0,c=s.length;a<c;++a){const h=s[a].name,u=t[h];u!==void 0&&(delete t[h],n[h]=u)}}}get isConnected(){return E.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,E.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=_o(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const o=t.behaviors;t.addStylesTo(e),o!==null&&this.addBehaviors(o)}}removeStyles(t){const e=_o(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const o=t.behaviors;t.removeStylesFrom(e),o!==null&&this.removeBehaviors(o)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),o=t.length,s=[];for(let n=0;n<o;++n){const a=t[n];e.has(a)?e.set(a,e.get(a)+1):(e.set(a,1),s.push(a))}if(this._isConnected){const n=this.element;for(let a=0;a<s.length;++a)s[a].bind(n,li)}}removeBehaviors(t,e=!1){const o=this.behaviors;if(o===null)return;const s=t.length,n=[];for(let a=0;a<s;++a){const c=t[a];if(o.has(c)){const h=o.get(c)-1;h===0||e?o.delete(c)&&n.push(c):o.set(c,h)}}if(this._isConnected){const a=this.element;for(let c=0;c<n.length;++c)n[c].unbind(a)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,li);const e=this.behaviors;if(e!==null)for(const[o]of e)o.bind(t,li);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const o=this.element;for(const[s]of e)s.unbind(o)}}onAttributeChangedCallback(t,e,o){const s=this.definition.attributeLookup[t];s!==void 0&&s.onAttributeChangedCallback(this.element,o)}emit(t,e,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},Va),o))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const s=Object.keys(e);for(let n=0,a=s.length;n<a;++n){const c=s[n];t[c]=e[c]}this.boundObservables=null}const o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,o=_o(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||F.removeChildNodes(o),t&&(this.view=t.render(e,o,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const o=qo.forType(t.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new Go(t,o)}}function en(i){return class extends i{constructor(){super();Go.forCustomElement(this)}$emit(t,e,o){return this.$fastController.emit(t,e,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,o){this.$fastController.onAttributeChangedCallback(t,e,o)}}}const qi=Object.assign(en(HTMLElement),{from(i){return en(i)},define(i,t){return new qo(i,t).define().type}});class Wo{createCSS(){return""}createBehavior(){}}function on(i,t){const e=[];let o="";const s=[];for(let n=0,a=i.length-1;n<a;++n){o+=i[n];let c=t[n];if(c instanceof Wo){const h=c.createBehavior();c=c.createCSS(),h&&s.push(h)}c instanceof $t||c instanceof CSSStyleSheet?(o.trim()!==""&&(e.push(o),o=""),e.push(c)):o+=c}return o+=i[i.length-1],o.trim()!==""&&e.push(o),{styles:e,behaviors:s}}function g(i,...t){const{styles:e,behaviors:o}=on(i,t),s=$t.create(e);return o.length&&s.withBehaviors(...o),s}class Pa extends Wo{constructor(t,e){super();this.behaviors=e,this.css="";const o=t.reduce((s,n)=>(typeof n=="string"?this.css+=n:s.push(n),s),[]);o.length&&(this.styles=$t.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function sn(i,...t){const{styles:e,behaviors:o}=on(i,t);return new Pa(e,o)}function Ut(i,t,e){return{index:i,removed:t,addedCount:e}}const nn=0,rn=1,Xo=2,Yo=3;function Ha(i,t,e,o,s,n){const a=n-s+1,c=e-t+1,h=new Array(a);let u,v;for(let b=0;b<a;++b)h[b]=new Array(c),h[b][0]=b;for(let b=0;b<c;++b)h[0][b]=b;for(let b=1;b<a;++b)for(let $=1;$<c;++$)i[t+$-1]===o[s+b-1]?h[b][$]=h[b-1][$-1]:(u=h[b-1][$]+1,v=h[b][$-1]+1,h[b][$]=u<v?u:v);return h}function za(i){let t=i.length-1,e=i[0].length-1,o=i[t][e];const s=[];for(;t>0||e>0;){if(t===0){s.push(Xo),e--;continue}if(e===0){s.push(Yo),t--;continue}const n=i[t-1][e-1],a=i[t-1][e],c=i[t][e-1];let h;a<c?h=a<n?a:n:h=c<n?c:n,h===n?(n===o?s.push(nn):(s.push(rn),o=n),t--,e--):h===a?(s.push(Yo),t--,o=a):(s.push(Xo),e--,o=c)}return s.reverse(),s}function Ma(i,t,e){for(let o=0;o<e;++o)if(i[o]!==t[o])return o;return e}function Na(i,t,e){let o=i.length,s=t.length,n=0;for(;n<e&&i[--o]===t[--s];)n++;return n}function Ba(i,t,e,o){return t<e||o<i?-1:t===e||o===i?0:i<e?t<o?t-e:o-e:o<t?o-i:t-i}function an(i,t,e,o,s,n){let a=0,c=0;const h=Math.min(e-t,n-s);if(t===0&&s===0&&(a=Ma(i,o,h)),e===i.length&&n===o.length&&(c=Na(i,o,h-a)),t+=a,s+=a,e-=c,n-=c,e-t==0&&n-s==0)return ke;if(t===e){const B=Ut(t,[],0);for(;s<n;)B.removed.push(o[s++]);return[B]}else if(s===n)return[Ut(t,[],e-t)];const u=za(Ha(i,t,e,o,s,n)),v=[];let b,$=t,_=s;for(let B=0;B<u.length;++B)switch(u[B]){case nn:b!==void 0&&(v.push(b),b=void 0),$++,_++;break;case rn:b===void 0&&(b=Ut($,[],0)),b.addedCount++,$++,b.removed.push(o[_]),_++;break;case Xo:b===void 0&&(b=Ut($,[],0)),b.addedCount++,$++;break;case Yo:b===void 0&&(b=Ut($,[],0)),b.removed.push(o[_]),_++;break}return b!==void 0&&v.push(b),v}const ln=Array.prototype.push;function ja(i,t,e,o){const s=Ut(t,e,o);let n=!1,a=0;for(let c=0;c<i.length;c++){const h=i[c];if(h.index+=a,n)continue;const u=Ba(s.index,s.index+s.removed.length,h.index,h.index+h.addedCount);if(u>=0){i.splice(c,1),c--,a-=h.addedCount-h.removed.length,s.addedCount+=h.addedCount-u;const v=s.removed.length+h.removed.length-u;if(!s.addedCount&&!v)n=!0;else{let b=h.removed;if(s.index<h.index){const $=s.removed.slice(0,h.index-s.index);ln.apply($,b),b=$}if(s.index+s.removed.length>h.index+h.addedCount){const $=s.removed.slice(h.index+h.addedCount-s.index);ln.apply(b,$)}s.removed=b,h.index<s.index&&(s.index=h.index)}}else if(s.index<h.index){n=!0,i.splice(c,0,s),c++;const v=s.addedCount-s.removed.length;h.index+=v,a+=v}}n||i.push(s)}function Ua(i){const t=[];for(let e=0,o=i.length;e<o;e++){const s=i[e];ja(t,s.index,s.removed,s.addedCount)}return t}function qa(i,t){let e=[];const o=Ua(t);for(let s=0,n=o.length;s<n;++s){const a=o[s];if(a.addedCount===1&&a.removed.length===1){a.removed[0]!==i[a.index]&&e.push(a);continue}e=e.concat(an(i,a.index,a.index+a.addedCount,a.removed,0,a.removed.length))}return e}let cn=!1;function Qo(i,t){let e=i.index;const o=t.length;return e>o?e=o-i.addedCount:e<0&&(e=o+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class _a extends Ni{constructor(t){super(t);this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,t.$fastController=this}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,F.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,F.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=e===void 0?qa(this.source,t):an(this.source,0,this.source.length,e,0,e.length);this.notify(o)}}function Ga(){if(cn)return;cn=!0,E.setArrayObserverFactory(h=>new _a(h));const i=Array.prototype,t=i.pop,e=i.push,o=i.reverse,s=i.shift,n=i.sort,a=i.splice,c=i.unshift;i.pop=function(){const h=this.length>0,u=t.apply(this,arguments),v=this.$fastController;return v!==void 0&&h&&v.addSplice(Ut(this.length,[u],0)),u},i.push=function(){const h=e.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(Qo(Ut(this.length-arguments.length,[],arguments.length),this)),h},i.reverse=function(){let h;const u=this.$fastController;u!==void 0&&(u.flush(),h=this.slice());const v=o.apply(this,arguments);return u!==void 0&&u.reset(h),v},i.shift=function(){const h=this.length>0,u=s.apply(this,arguments),v=this.$fastController;return v!==void 0&&h&&v.addSplice(Ut(0,[u],0)),u},i.sort=function(){let h;const u=this.$fastController;u!==void 0&&(u.flush(),h=this.slice());const v=n.apply(this,arguments);return u!==void 0&&u.reset(h),v},i.splice=function(){const h=a.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(Qo(Ut(+arguments[0],h,arguments.length>2?arguments.length-2:0),this)),h},i.unshift=function(){const h=c.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(Qo(Ut(0,[],arguments.length),this)),h}}class Wa{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function P(i){return new zo("fast-ref",Wa,i)}function U(i,t){const e=typeof t=="function"?t:()=>t;return(o,s)=>i(o,s)?e(o,s):null}const Xa=Object.freeze({positioning:!1});function Ya(i,t,e,o){i.bind(t[e],o)}function Qa(i,t,e,o){const s=Object.create(o);s.index=e,s.length=t.length,i.bind(t[e],s)}class Za{constructor(t,e,o,s,n,a){this.location=t,this.itemsBinding=e,this.templateBinding=s,this.options=a,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ya,this.itemsBindingObserver=E.binding(e,this,o),this.templateBindingObserver=E.binding(s,this,n),a.positioning&&(this.bindView=Qa)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=ke;return}const e=this.itemsObserver,o=this.itemsObserver=E.getNotifier(this.items),s=e!==o;s&&e!==null&&e.unsubscribe(this),(s||t)&&o.subscribe(this)}updateViews(t){const e=this.childContext,o=this.views,s=[],n=this.bindView;let a=0;for(let u=0,v=t.length;u<v;++u){const b=t[u],$=b.removed;s.push(...o.splice(b.index+a,$.length)),a-=b.addedCount}const c=this.items,h=this.template;for(let u=0,v=t.length;u<v;++u){const b=t[u];let $=b.index;const _=$+b.addedCount;for(;$<_;++$){const B=o[$],j=B?B.firstChild:this.location,tt=s.length>0?s.shift():h.create();o.splice($,0,tt),n(tt,c,$,e),tt.insertBefore(j)}}for(let u=0,v=s.length;u<v;++u)s[u].dispose();if(this.options.positioning)for(let u=0,v=o.length;u<v;++u){const b=o[u].context;b.length=v,b.index=u}}refreshAllViews(t=!1){const e=this.items,o=this.childContext,s=this.template,n=this.location,a=this.bindView;let c=e.length,h=this.views,u=h.length;if((c===0||t)&&(Xs.disposeContiguousBatch(h),u=0),u===0){this.views=h=new Array(c);for(let v=0;v<c;++v){const b=s.create();a(b,e,v,o),h[v]=b,b.insertBefore(n)}}else{let v=0;for(;v<c;++v)if(v<u){const $=h[v];a($,e,v,o)}else{const $=s.create();a($,e,v,o),h.push($),$.insertBefore(n)}const b=h.splice(v,u-v);for(v=0,c=b.length;v<c;++v)b[v].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,o=t.length;e<o;++e)t[e].unbind()}}class ci extends Bi{constructor(t,e,o){super();this.itemsBinding=t,this.templateBinding=e,this.options=o,this.createPlaceholder=F.createBlockPlaceholder,Ga(),this.isItemsBindingVolatile=E.isVolatileBinding(t),this.isTemplateBindingVolatile=E.isVolatileBinding(e)}createBehavior(t){return new Za(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function qe(i,t,e=Xa){const o=typeof t=="function"?t:()=>t;return new ci(i,o,e)}function Ce(i){return i?function(t,e,o){return t.nodeType===1&&t.matches(i)}:function(t,e,o){return t.nodeType===1}}class dn{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=E.getAccessors(t).some(o=>o.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(ke),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Ja extends dn{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Y(i){return typeof i=="string"&&(i={property:i}),new zo("fast-slotted",Ja,i)}class Ka extends dn{constructor(t,e){super(t,e);this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Zo(i){return typeof i=="string"&&(i={property:i}),new zo("fast-children",Ka,i)}class Ft{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const wt=(i,t)=>m`
    <span
        part="end"
        ${P("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${P("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,kt=(i,t)=>m`
    <span
        part="start"
        ${P("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${P("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,tl=m`
    <span part="end" ${P("endContainer")}>
        <slot
            name="end"
            ${P("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,el=m`
    <span part="start" ${P("startContainer")}>
        <slot
            name="start"
            ${P("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,il=(i,t)=>m`
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
                ${P("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,o)=>e.clickHandler(o.event)}"
            >
                <span class="heading">
                    <slot name="heading" part="heading"></slot>
                </span>
            </button>
            ${kt(i,t)}
            ${wt(i,t)}
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
***************************************************************************** */function r(i,t,e,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,o);else for(var c=i.length-1;c>=0;c--)(a=i[c])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n}const Jo=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let o=Jo.get(e);o===void 0&&Jo.set(e,o=new Map),o.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=Jo.get(t);if(e!==void 0)return e.get(i)});class ol{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,bn(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:o,key:s}=this;return this.container=this.key=void 0,o.registerResolver(s,new Pt(s,t,e))}}function di(i){const t=i.slice(),e=Object.keys(i),o=e.length;let s;for(let n=0;n<o;++n)s=e[n],$n(s)||(t[s]=i[s]);return t}const sl=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Pt(i,1,i)},transient(i){return new Pt(i,2,i)}}),Ko=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:sl.singleton})}),hn=new Map;function un(i){return t=>Reflect.getOwnMetadata(i,t)}let pn=null;const K=Object.freeze({createContainer(i){return new hi(null,Object.assign({},Ko.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:K.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(mn,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||K.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new hi(i,Object.assign({},Ko.default,t,{parentLocator:K.findParentContainer})):pn||(pn=new hi(null,Object.assign({},Ko.default,t,{parentLocator:()=>null})))},getDesignParamtypes:un("design:paramtypes"),getAnnotationParamtypes:un("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=hn.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const o=K.getDesignParamtypes(i),s=K.getAnnotationParamtypes(i);if(o===void 0)if(s===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=di(K.getDependencies(n)):t=[]}else t=di(s);else if(s===void 0)t=di(o);else{t=di(o);let n=s.length,a;for(let u=0;u<n;++u)a=s[u],a!==void 0&&(t[u]=a);const c=Object.keys(s);n=c.length;let h;for(let u=0;u<n;++u)h=c[u],$n(h)||(t[h]=s[h])}}else t=di(e);hn.set(i,t)}return t},defineProperty(i,t,e,o=!1){const s=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[s];if(n===void 0&&(n=(this instanceof HTMLElement?K.findResponsibleContainer(this):K.getOrCreateDOMContainer()).get(e),this[s]=n,o&&this instanceof qi)){const c=this.$fastController,h=()=>{const v=K.findResponsibleContainer(this).get(e),b=this[s];v!==b&&(this[s]=n,c.notify(t))};c.subscribe({handleChange:h},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,o=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||yn,s=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(a,c,h){if(a==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(c)K.defineProperty(a,c,n,s);else{const u=K.getOrCreateAnnotationParamTypes(a);u[h]=n}};return n.$isInterface=!0,n.friendlyName=o==null?"(anonymous)":o,e!=null&&(n.register=function(a,c){return e(new ol(a,c!=null?c:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,o){if(typeof o=="number"){const s=K.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(s[o]=n)}else if(e)K.defineProperty(t,e,i[0]);else{const s=o?K.getOrCreateAnnotationParamTypes(o.value):K.getOrCreateAnnotationParamTypes(t);let n;for(let a=0;a<i.length;++a)n=i[a],n!==void 0&&(s[a]=n)}}},transient(i){return i.register=function(e){return ui.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=rl){return i.register=function(o){return ui.singleton(i,i).register(o)},i.registerInRequestor=t.scoped,i}}),nl=K.createInterface("Container");K.inject;const rl={scoped:!1};class Pt{constructor(t,e,o){this.key=t,this.strategy=e,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const o=t.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,o,s;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(s=(o=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||o===void 0?void 0:o.call(e,t))!==null&&s!==void 0?s:null;default:return null}}}function fn(i){return this.get(i)}function al(i,t){return t(i)}class ll{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let o;return e===void 0?o=new this.Type(...this.dependencies.map(fn,t)):o=new this.Type(...this.dependencies.map(fn,t),...e),this.transformers==null?o:this.transformers.reduce(al,o)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const cl={$isResolver:!0,resolve(i,t){return t}};function _i(i){return typeof i.register=="function"}function dl(i){return _i(i)&&typeof i.registerInRequestor=="boolean"}function gn(i){return dl(i)&&i.registerInRequestor}function hl(i){return i.prototype!==void 0}const ul=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),mn="__DI_LOCATE_PARENT__",ts=new Map;class hi{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(nl,cl),t instanceof Node&&t.addEventListener(mn,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth==100)throw new Error("Unable to autoregister dependency");let e,o,s,n,a;const c=this.context;for(let h=0,u=t.length;h<u;++h)if(e=t[h],!!xn(e))if(_i(e))e.register(this,c);else if(hl(e))ui.singleton(e,e).register(this);else for(o=Object.keys(e),n=0,a=o.length;n<a;++n)s=e[o[n]],!!xn(s)&&(_i(s)?s.register(this,c):this.register(s));return--this.registerDepth,this}registerResolver(t,e){Gi(t);const o=this.resolvers,s=o.get(t);return s==null?o.set(t,e):s instanceof Pt&&s.strategy===4?s.state.push(e):o.set(t,new Pt(t,4,[s,e])),e}registerTransformer(t,e){const o=this.getResolver(t);if(o==null)return!1;if(o.getFactory){const s=o.getFactory(this);return s==null?!1:(s.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(Gi(t),t.resolve!==void 0)return t;let o=this,s;for(;o!=null;)if(s=o.resolvers.get(t),s==null){if(o.parent==null){const n=gn(t)?this:o;return e?this.jitRegister(t,n):null}o=o.parent}else return s;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(Gi(t),t.$isResolver)return t.resolve(this,this);let e=this,o;for(;e!=null;)if(o=e.resolvers.get(t),o==null){if(e.parent==null){const s=gn(t)?this:e;return o=this.jitRegister(t,s),o.resolve(e,this)}e=e.parent}else return o.resolve(e,this);throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){Gi(t);const o=this;let s=o,n;if(e){let a=ke;for(;s!=null;)n=s.resolvers.get(t),n!=null&&(a=a.concat(vn(n,s,o))),s=s.parent;return a}else for(;s!=null;)if(n=s.resolvers.get(t),n==null){if(s=s.parent,s==null)return ke}else return vn(n,s,o);return ke}getFactory(t){let e=ts.get(t);if(e===void 0){if(pl(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);ts.set(t,e=new ll(t,K.getDependencies(t)))}return e}registerFactory(t,e){ts.set(t,e)}createChild(t){return new hi(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(ul.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(_i(t)){const o=t.register(e);if(!(o instanceof Object)||o.resolve==null){const s=e.resolvers.get(t);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const o=this.config.defaultResolver(t,e);return e.resolvers.set(t,o),o}}}}const es=new WeakMap;function bn(i){return function(t,e,o){if(es.has(o))return es.get(o);const s=i(t,e,o);return es.set(o,s),s}}const ui=Object.freeze({instance(i,t){return new Pt(i,0,t)},singleton(i,t){return new Pt(i,1,t)},transient(i,t){return new Pt(i,2,t)},callback(i,t){return new Pt(i,3,t)},cachedCallback(i,t){return new Pt(i,3,bn(t))},aliasTo(i,t){return new Pt(t,5,i)}});function Gi(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function vn(i,t,e){if(i instanceof Pt&&i.strategy===4){const o=i.state;let s=o.length;const n=new Array(s);for(;s--;)n[s]=o[s].resolve(t,e);return n}return[i.resolve(t,e)]}const yn="(anonymous)";function xn(i){return typeof i=="object"&&i!==null||typeof i=="function"}const pl=function(){const i=new WeakMap;let t=!1,e="",o=0;return function(s){return t=i.get(s),t===void 0&&(e=s.toString(),o=e.length,t=o>=29&&o<=100&&e.charCodeAt(o-1)===125&&e.charCodeAt(o-2)<=32&&e.charCodeAt(o-3)===93&&e.charCodeAt(o-4)===101&&e.charCodeAt(o-5)===100&&e.charCodeAt(o-6)===111&&e.charCodeAt(o-7)===99&&e.charCodeAt(o-8)===32&&e.charCodeAt(o-9)===101&&e.charCodeAt(o-10)===118&&e.charCodeAt(o-11)===105&&e.charCodeAt(o-12)===116&&e.charCodeAt(o-13)===97&&e.charCodeAt(o-14)===110&&e.charCodeAt(o-15)===88,i.set(s,t)),t}}(),Wi={};function $n(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=Wi[i];if(t!==void 0)return t;const e=i.length;if(e===0)return Wi[i]=!1;let o=0;for(let s=0;s<e;++s)if(o=i.charCodeAt(s),s===0&&o===48&&e>1||o<48||o>57)return Wi[i]=!1;return Wi[i]=!0}default:return!1}}function wn(i){return`${i.toLowerCase()}:presentation`}const Xi=new Map,kn=Object.freeze({define(i,t,e){const o=wn(i);Xi.get(o)===void 0?Xi.set(o,t):Xi.set(o,!1),e.register(ui.instance(o,t))},forTag(i,t){const e=wn(i),o=Xi.get(e);return o===!1?K.findResponsibleContainer(t).get(e):o||null}});class fl{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?$t.create(e):e instanceof $t?e:$t.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class D extends qi{constructor(){super(...arguments);this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=kn.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new gl(this===D?class extends D{}:this,t,e)}}r([p],D.prototype,"template",void 0);r([p],D.prototype,"styles",void 0);function pi(i,t,e){return typeof i=="function"?i(t,e):i}class gl{constructor(t,e,o){this.type=t,this.elementDefinition=e,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const o=this.definition,s=this.overrideDefinition,a=`${o.prefix||e.elementPrefix}-${o.baseName}`;e.tryDefineElement({name:a,type:this.type,baseClass:this.elementDefinition.baseClass,callback:c=>{const h=new fl(pi(o.template,c,o),pi(o.styles,c,o));c.definePresentation(h);let u=pi(o.shadowOptions,c,o);c.shadowRootMode&&(u?s.shadowOptions||(u.mode=c.shadowRootMode):u!==null&&(u={mode:c.shadowRootMode})),c.defineElement({elementOptions:pi(o.elementOptions,c,o),shadowOptions:u,attributes:pi(o.attributes,c,o)})}})}}function Z(i,...t){t.forEach(e=>{if(Object.getOwnPropertyNames(e.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(i.prototype,o,Object.getOwnPropertyDescriptor(e.prototype,o))}),e.attributes){const o=i.attributes||[];i.attributes=o.concat(e.attributes)}})}class Te extends D{constructor(){super(...arguments);this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}r([d({attribute:"heading-level",mode:"fromView",converter:w})],Te.prototype,"headinglevel",void 0);r([d({mode:"boolean"})],Te.prototype,"expanded",void 0);r([d],Te.prototype,"id",void 0);Z(Te,Ft);const ml=(i,t)=>m`
    <template>
        <slot name="item" part="item" ${Y("accordionItems")}></slot>
    </template>
`;var J;(function(i){i.horizontal="horizontal",i.vertical="vertical"})(J||(J={}));function bl(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function _e(...i){return i.every(t=>t instanceof HTMLElement)}function vl(i,t){return!i||!t||!_e(i)?void 0:Array.from(i.querySelectorAll(t)).filter(o=>o.offsetParent!==null)}function yl(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Ie;function xl(){if(typeof Ie=="boolean")return Ie;if(!bl())return Ie=!1,Ie;const i=document.createElement("style"),t=yl();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Ie=!0}catch{Ie=!1}finally{document.head.removeChild(i)}return Ie}const Cn="focus",Tn="focusin",Ge="focusout",We="keydown",In="resize",Fn="scroll";var Sn;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Sn||(Sn={}));const qt="ArrowDown",ie="ArrowLeft",oe="ArrowRight",_t="ArrowUp",Wt="Enter",fi="Escape",pe="Home",fe="End",$l="F2",wl="PageDown",kl="PageUp",gi=" ",Dn="Tab",Cl="Backspace",Tl="Delete",Xe={ArrowDown:qt,ArrowLeft:ie,ArrowRight:oe,ArrowUp:_t};var Q;(function(i){i.ltr="ltr",i.rtl="rtl"})(Q||(Q={}));function Rn(i,t,e){return e<i?t:e>t?i:e}function is(i,t,e){return Math.min(Math.max(e,i),t)}let Il=0;function Yi(i=""){return`${i}${Il++}`}var l;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(l||(l={}));var Qi;(function(i){i.single="single",i.multi="multi"})(Qi||(Qi={}));class os extends D{constructor(){super(...arguments);this.expandmode=Qi.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,o)=>{e instanceof Te&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==o?e.expanded=!1:e.expanded=!0));const s=this.accordionIds[o];e.setAttribute("id",typeof s!="string"?`accordion-${o+1}`:s),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,o)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{const e=t.target;this.activeid=t.target.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(o=>{!o.hasAttribute("disabled")&&o.id!==this.activeid&&o.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case _t:t.preventDefault(),this.adjust(-1);break;case qt:t.preventDefault(),this.adjust(1);break;case pe:this.activeItemIndex=0,this.focusItem();break;case fe:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,o=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==o&&o!==-1&&(this.activeItemIndex=o,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Qi.single}adjust(t){this.activeItemIndex=Rn(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Te&&t.expandbutton.focus()}}r([d({attribute:"expand-mode"})],os.prototype,"expandmode",void 0);r([p],os.prototype,"accordionItems",void 0);const En=(i,t)=>m`
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
        ${P("control")}
    >
        ${kt(i,t)}
        <span class="content" part="content">
            <slot ${Y("defaultSlottedContent")}></slot>
        </span>
        ${wt(i,t)}
    </a>
`;class X{}r([d({attribute:"aria-atomic",mode:"fromView"})],X.prototype,"ariaAtomic",void 0);r([d({attribute:"aria-busy",mode:"fromView"})],X.prototype,"ariaBusy",void 0);r([d({attribute:"aria-controls",mode:"fromView"})],X.prototype,"ariaControls",void 0);r([d({attribute:"aria-current",mode:"fromView"})],X.prototype,"ariaCurrent",void 0);r([d({attribute:"aria-describedby",mode:"fromView"})],X.prototype,"ariaDescribedby",void 0);r([d({attribute:"aria-details",mode:"fromView"})],X.prototype,"ariaDetails",void 0);r([d({attribute:"aria-disabled",mode:"fromView"})],X.prototype,"ariaDisabled",void 0);r([d({attribute:"aria-errormessage",mode:"fromView"})],X.prototype,"ariaErrormessage",void 0);r([d({attribute:"aria-flowto",mode:"fromView"})],X.prototype,"ariaFlowto",void 0);r([d({attribute:"aria-haspopup",mode:"fromView"})],X.prototype,"ariaHaspopup",void 0);r([d({attribute:"aria-hidden",mode:"fromView"})],X.prototype,"ariaHidden",void 0);r([d({attribute:"aria-invalid",mode:"fromView"})],X.prototype,"ariaInvalid",void 0);r([d({attribute:"aria-keyshortcuts",mode:"fromView"})],X.prototype,"ariaKeyshortcuts",void 0);r([d({attribute:"aria-label",mode:"fromView"})],X.prototype,"ariaLabel",void 0);r([d({attribute:"aria-labelledby",mode:"fromView"})],X.prototype,"ariaLabelledby",void 0);r([d({attribute:"aria-live",mode:"fromView"})],X.prototype,"ariaLive",void 0);r([d({attribute:"aria-owns",mode:"fromView"})],X.prototype,"ariaOwns",void 0);r([d({attribute:"aria-relevant",mode:"fromView"})],X.prototype,"ariaRelevant",void 0);r([d({attribute:"aria-roledescription",mode:"fromView"})],X.prototype,"ariaRoledescription",void 0);class Et extends D{constructor(){super(...arguments);this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((t=this.$fastController.definition.shadowOptions)===null||t===void 0?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}r([d],Et.prototype,"download",void 0);r([d],Et.prototype,"href",void 0);r([d],Et.prototype,"hreflang",void 0);r([d],Et.prototype,"ping",void 0);r([d],Et.prototype,"referrerpolicy",void 0);r([d],Et.prototype,"rel",void 0);r([d],Et.prototype,"target",void 0);r([d],Et.prototype,"type",void 0);r([p],Et.prototype,"defaultSlottedContent",void 0);class Zi{}r([d({attribute:"aria-expanded",mode:"fromView"})],Zi.prototype,"ariaExpanded",void 0);Z(Zi,X);Z(Et,Ft,Zi);const Fl=(i,t)=>m`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${U(e=>e.initialLayoutComplete,m`
                <slot></slot>
            `)}
    </template>
`,Fe=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?Q.rtl:Q.ltr};class Sl{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var o;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(o=this.observedElements.get(t))===null||o===void 0||o.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const o=this.observedElements.get(t);if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}},this.initializeIntersectionDetector=()=>{!Mi.IntersectionObserver||(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],o=[];t.forEach(s=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(s.target);const a=this.observedElements.get(s.target);a!==void 0&&(a.forEach(c=>{let h=e.indexOf(c);h===-1&&(h=e.length,e.push(c),o.push([])),o[h].push(s)}),this.observedElements.delete(s.target))}),e.forEach((s,n)=>{s(o[n])})},this.initializeIntersectionDetector()}}class A extends D{constructor(){super(...arguments);this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Q.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(A.intersectionService.requestPosition(this,this.handleIntersection),A.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&A.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,A.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&A.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&A.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{!this.pendingPositioningUpdate||(this.pendingPositioningUpdate=!1,!!this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),o=t.find(n=>n.target===this.anchorElement),s=t.find(n=>n.target===this.viewportElement);return e===void 0||s===void 0||o===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,o.boundingClientRect)||this.isRectDifferent(this.viewportRect,s.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=o.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(s.boundingClientRect.x+document.documentElement.scrollLeft,s.boundingClientRect.y+document.documentElement.scrollTop,s.boundingClientRect.width,s.boundingClientRect.height):this.viewportRect=s.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{!this.pendingReset||(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Fe(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let $=this.horizontalDefaultPosition;if($==="start"||$==="end"){const _=Fe(this);if(_!==this.currentDirection){this.currentDirection=_,this.initialize();return}this.currentDirection===Q.ltr?$=$==="start"?"left":"right":$=$==="start"?"right":"left"}switch($){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const a=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,c=this.anchorRect!==void 0?this.anchorRect.left:0,h=this.anchorRect!==void 0?this.anchorRect.right:0,u=this.anchorRect!==void 0?this.anchorRect.width:0,v=this.viewportRect!==void 0?this.viewportRect.left:0,b=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,c,h,u,v,b)<a)&&(e=this.getAvailableSpace(n[0],c,h,u,v,b)>this.getAvailableSpace(n[1],c,h,u,v,b)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const a=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,c=this.anchorRect!==void 0?this.anchorRect.top:0,h=this.anchorRect!==void 0?this.anchorRect.bottom:0,u=this.anchorRect!==void 0?this.anchorRect.height:0,v=this.viewportRect!==void 0?this.viewportRect.top:0,b=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,c,h,u,v,b)<a)&&(t=this.getAvailableSpace(n[0],c,h,u,v,b)>this.getAvailableSpace(n[1],c,h,u,v,b)?n[0]:n[1])}const o=this.getNextRegionDimension(e,t),s=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,o),this.setVerticalPosition(t,o),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),s&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let o=0;switch(this.horizontalScaling){case"anchor":case"fill":o=e.width,this.regionWidth=`${o}px`;break;case"content":o=this.regionRect.width,this.regionWidth="unset";break}let s=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-o,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-o+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(s=(this.anchorRect.width-o)/2,this.translateX=this.baseHorizontalOffset+s,this.horizontalViewportLock){const n=this.anchorRect.left+s,a=this.anchorRect.right-s;n<this.viewportRect.left&&!(a>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):a>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(a-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let o=0;switch(this.verticalScaling){case"anchor":case"fill":o=e.height,this.regionHeight=`${o}px`;break;case"content":o=this.regionRect.height,this.regionHeight="unset";break}let s=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-o,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-o+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(s=(this.anchorRect.height-o)/2,this.translateY=this.baseVerticalOffset+s,this.verticalViewportLock){const n=this.anchorRect.top+s,a=this.anchorRect.bottom-s;n<this.viewportRect.top&&!(a>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):a>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(a-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,o,s,n,a)=>{const c=e-n,h=a-(e+s);switch(t){case"start":return c;case"insetStart":return c+s;case"insetEnd":return h+s;case"end":return h;case"center":return Math.min(c,h)*2+s}},this.getNextRegionDimension=(t,e)=>{const o={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?o.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(o.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?o.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(o.height=this.anchorRect!==void 0?this.anchorRect.height:0),o},this.startAutoUpdateEventListeners=()=>{window.addEventListener(In,this.update,{passive:!0}),window.addEventListener(Fn,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(In,this.update),window.removeEventListener(Fn,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),F.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}A.intersectionService=new Sl;r([d],A.prototype,"anchor",void 0);r([d],A.prototype,"viewport",void 0);r([d({attribute:"horizontal-positioning-mode"})],A.prototype,"horizontalPositioningMode",void 0);r([d({attribute:"horizontal-default-position"})],A.prototype,"horizontalDefaultPosition",void 0);r([d({attribute:"horizontal-viewport-lock",mode:"boolean"})],A.prototype,"horizontalViewportLock",void 0);r([d({attribute:"horizontal-inset",mode:"boolean"})],A.prototype,"horizontalInset",void 0);r([d({attribute:"horizontal-threshold"})],A.prototype,"horizontalThreshold",void 0);r([d({attribute:"horizontal-scaling"})],A.prototype,"horizontalScaling",void 0);r([d({attribute:"vertical-positioning-mode"})],A.prototype,"verticalPositioningMode",void 0);r([d({attribute:"vertical-default-position"})],A.prototype,"verticalDefaultPosition",void 0);r([d({attribute:"vertical-viewport-lock",mode:"boolean"})],A.prototype,"verticalViewportLock",void 0);r([d({attribute:"vertical-inset",mode:"boolean"})],A.prototype,"verticalInset",void 0);r([d({attribute:"vertical-threshold"})],A.prototype,"verticalThreshold",void 0);r([d({attribute:"vertical-scaling"})],A.prototype,"verticalScaling",void 0);r([d({attribute:"fixed-placement",mode:"boolean"})],A.prototype,"fixedPlacement",void 0);r([d({attribute:"auto-update-mode"})],A.prototype,"autoUpdateMode",void 0);r([p],A.prototype,"anchorElement",void 0);r([p],A.prototype,"viewportElement",void 0);r([p],A.prototype,"initialLayoutComplete",void 0);const Dl=(i,t)=>m`
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
`;class Ye extends D{connectedCallback(){super.connectedCallback(),this.shape||(this.shape="circle")}}r([d],Ye.prototype,"fill",void 0);r([d],Ye.prototype,"color",void 0);r([d],Ye.prototype,"link",void 0);r([d],Ye.prototype,"shape",void 0);const Rl=(i,t)=>m`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class Se extends D{constructor(){super(...arguments);this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}}r([d({attribute:"fill"})],Se.prototype,"fill",void 0);r([d({attribute:"color"})],Se.prototype,"color",void 0);r([d({mode:"boolean"})],Se.prototype,"circular",void 0);const El=(i,t)=>m`
    <div role="listitem" class="listitem" part="listitem">
        ${U(e=>e.href&&e.href.length>0,m`
                ${En(i,t)}
            `)}
        ${U(e=>!e.href,m`
                ${kt(i,t)}
                <slot></slot>
                ${wt(i,t)}
            `)}
        ${U(e=>e.separator,m`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Qe extends Et{constructor(){super(...arguments);this.separator=!0}}r([p],Qe.prototype,"separator",void 0);Z(Qe,Ft,Zi);const Ol=(i,t)=>m`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${Y({property:"slottedBreadcrumbItems",filter:Ce()})}
            ></slot>
        </div>
    </template>
`;class On extends D{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.setItemSeparator(t),this.setLastItemAriaCurrent(t)}}setItemSeparator(t){this.slottedBreadcrumbItems.forEach(e=>{e instanceof Qe&&(e.separator=!0)}),t instanceof Qe&&(t.separator=!1)}findChildWithHref(t){var e,o;return t.childElementCount>0?t.querySelector("a[href]"):((e=t.shadowRoot)===null||e===void 0?void 0:e.childElementCount)?(o=t.shadowRoot)===null||o===void 0?void 0:o.querySelector("a[href]"):null}setLastItemAriaCurrent(t){const e=this.findChildWithHref(t);e===null&&t.hasAttribute("href")&&t instanceof Qe?t.ariaCurrent="page":e!==null&&e.setAttribute("aria-current","page")}}r([p],On.prototype,"slottedBreadcrumbItems",void 0);const Ll=(i,t)=>m`
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
        ${P("control")}
    >
        ${kt(i,t)}
        <span class="content" part="content">
            <slot ${Y("defaultSlottedContent")}></slot>
        </span>
        ${wt(i,t)}
    </button>
`,Ln="form-associated-proxy",An="ElementInternals",Vn=An in window&&"setFormValue"in window[An].prototype,Pn=new Map;function Xt(i){const t=class extends i{constructor(...e){super(...e);this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Vn}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=e?o.concat(Array.from(e)):o;return Object.freeze(s)}else return ke}valueChanged(e,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),F.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),F.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Vn)return null;let e=Pn.get(this);return e||(e=this.attachInternals(),Pn.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,o,s){this.elementInternals?this.elementInternals.setValidity(e,o,s):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Ln),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Ln)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,o){this.elementInternals&&this.elementInternals.setFormValue(e,o||e)}_keypressHandler(e){switch(e.key){case Wt:if(this.form instanceof HTMLFormElement){const o=this.form.querySelector("[type=submit]");o==null||o.click()}break}}stopPropagation(e){e.stopPropagation()}};return d({mode:"boolean"})(t.prototype,"disabled"),d({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),d({attribute:"current-value"})(t.prototype,"currentValue"),d(t.prototype,"name"),d({mode:"boolean"})(t.prototype,"required"),p(t.prototype,"value"),t}function ss(i){class t extends Xt(i){}class e extends t{constructor(...s){super(s);this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(s,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),s!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(s,n){this.checked=this.currentChecked}updateForm(){const s=this.checked?this.value:null;this.setFormValue(s,s)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return d({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),d({attribute:"current-checked",converter:ji})(e.prototype,"currentChecked"),p(e.prototype,"defaultChecked"),p(e.prototype,"checked"),e}class Al extends D{}class Vl extends Xt(Al){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class St extends Vl{constructor(){super(...arguments);this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((t=this.$fastController.definition.shadowOptions)===null||t===void 0?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}r([d({mode:"boolean"})],St.prototype,"autofocus",void 0);r([d({attribute:"form"})],St.prototype,"formId",void 0);r([d],St.prototype,"formaction",void 0);r([d],St.prototype,"formenctype",void 0);r([d],St.prototype,"formmethod",void 0);r([d({mode:"boolean"})],St.prototype,"formnovalidate",void 0);r([d],St.prototype,"formtarget",void 0);r([d],St.prototype,"type",void 0);r([p],St.prototype,"defaultSlottedContent",void 0);class Ji{}r([d({attribute:"aria-expanded",mode:"fromView"})],Ji.prototype,"ariaExpanded",void 0);r([d({attribute:"aria-pressed",mode:"fromView"})],Ji.prototype,"ariaPressed",void 0);Z(Ji,X);Z(St,Ft,Ji);class Pl{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const o=t[e];e==="date"?this.date=this.getDateObject(o):this[e]=o}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:o,year:s}=t;return new Date(s,o-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},o=this.locale){const s=this.getDateObject(t),n=Object.assign({timeZone:"utc"},e);return new Intl.DateTimeFormat(o,n).format(s)}getDay(t=this.date.getDate(),e=this.dayFormat,o=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},o)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,o=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},o)}getYear(t=this.date.getFullYear(),e=this.yearFormat,o=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},o)}getWeekday(t=0,e=this.weekdayFormat,o=this.locale){const s=`1-${t+1}-2017`;return this.getDate(s,{weekday:e},o)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((o,s)=>this.getWeekday(s,t,e))}}class Ht extends D{constructor(){super(...arguments);this.dateFormatter=new Pl,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const o=h=>new Date(h.getFullYear(),h.getMonth(),1).getDay(),s=h=>{const u=new Date(h.getFullYear(),h.getMonth()+1,1);return new Date(u.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),a=new Date(e,t),c=new Date(e,t-2);return{length:s(n),month:t,start:o(n),year:e,previous:{length:s(c),month:c.getMonth()+1,start:o(c),year:c.getFullYear()},next:{length:s(a),month:a.getMonth()+1,start:o(a),year:a.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:o,length:s,previous:n,next:a}=t,c=[];let h=1-o;for(;h<s+1||c.length<e||c[c.length-1].length%7!=0;){const{month:u,year:v}=h<1?n:h>s?a:t,b=h<1?n.length+h:h>s?h-s:h,$=`${u}-${b}-${v}`,_=this.dateInString($,this.disabledDates),B=this.dateInString($,this.selectedDates),j={day:b,month:u,year:v,disabled:_,selected:B},tt=c[c.length-1];c.length===0||tt.length%7==0?c.push([j]):tt.push(j),h++}return c}dateInString(t,e){const o=e.split(",").map(s=>s.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,o.some(s=>s===t)}getDayClassNames(t,e){const{day:o,month:s,year:n,disabled:a,selected:c}=t,h=e===`${s}-${o}-${n}`,u=this.month!==s;return["day",h&&"today",u&&"inactive",a&&"disabled",c&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((o,s)=>{o.abbr=e[s]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===Wt&&this.handleDateSelect(t,e),!0}}r([d({mode:"boolean"})],Ht.prototype,"readonly",void 0);r([d],Ht.prototype,"locale",void 0);r([d({converter:w})],Ht.prototype,"month",void 0);r([d({converter:w})],Ht.prototype,"year",void 0);r([d({attribute:"day-format",mode:"fromView"})],Ht.prototype,"dayFormat",void 0);r([d({attribute:"weekday-format",mode:"fromView"})],Ht.prototype,"weekdayFormat",void 0);r([d({attribute:"month-format",mode:"fromView"})],Ht.prototype,"monthFormat",void 0);r([d({attribute:"year-format",mode:"fromView"})],Ht.prototype,"yearFormat",void 0);r([d({attribute:"min-weeks",converter:w})],Ht.prototype,"minWeeks",void 0);r([d({attribute:"disabled-dates"})],Ht.prototype,"disabledDates",void 0);r([d({attribute:"selected-dates"})],Ht.prototype,"selectedDates",void 0);var Ze;(function(i){i.none="none",i.default="default",i.sticky="sticky"})(Ze||(Ze={}));var Yt;(function(i){i.default="default",i.columnHeader="columnheader",i.rowHeader="rowheader"})(Yt||(Yt={}));var De;(function(i){i.default="default",i.header="header",i.stickyHeader="sticky-header"})(De||(De={}));class pt extends D{constructor(){super(...arguments);this.rowType=De.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new ci(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ge,this.handleFocusout),this.addEventListener(We,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ge,this.handleFocusout),this.removeEventListener(We,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case ie:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case oe:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case pe:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case fe:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===De.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===De.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}r([d({attribute:"grid-template-columns"})],pt.prototype,"gridTemplateColumns",void 0);r([d({attribute:"row-type"})],pt.prototype,"rowType",void 0);r([p],pt.prototype,"rowData",void 0);r([p],pt.prototype,"columnDefinitions",void 0);r([p],pt.prototype,"cellItemTemplate",void 0);r([p],pt.prototype,"headerCellItemTemplate",void 0);r([p],pt.prototype,"rowIndex",void 0);r([p],pt.prototype,"isActiveRow",void 0);r([p],pt.prototype,"activeCellItemTemplate",void 0);r([p],pt.prototype,"defaultCellItemTemplate",void 0);r([p],pt.prototype,"defaultHeaderCellItemTemplate",void 0);r([p],pt.prototype,"cellElements",void 0);function Hl(i){const t=i.tagFor(pt);return m`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,o)=>o.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,o)=>o.parent.headerCellItemTemplate}"
    ></${t}>
`}const zl=(i,t)=>{const e=Hl(i),o=i.tagFor(pt);return m`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>o}"
            :defaultRowItemTemplate="${e}"
            ${Zo({property:"rowElements",filter:Ce("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class dt extends D{constructor(){super();this.generateHeader=Ze.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,o)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const s=Math.max(0,Math.min(this.rowElements.length-1,t)),a=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),c=Math.max(0,Math.min(a.length-1,e)),h=a[c];o&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&h.scrollIntoView({block:"center",inline:"center"}),h.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(o=>{o.addedNodes.forEach(s=>{s.nodeType===1&&s.getAttribute("role")==="row"&&(s.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,F.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{const t=this.gridTemplateColumns===void 0?this.generatedGridTemplateColumns:this.gridTemplateColumns;this.rowElements.forEach((e,o)=>{const s=e;s.rowIndex=o,s.gridTemplateColumns=t,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(o=>{e=`${e}${e===""?"":" "}1fr`}),e}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=dt.generateColumns(this.rowsData[0]))}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=dt.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new ci(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Cn,this.handleFocus),this.addEventListener(We,this.handleKeydown),this.addEventListener(Ge,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),F.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Cn,this.handleFocus),this.removeEventListener(We,this.handleKeydown),this.removeEventListener(Ge,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex","0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const o=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,n=this.rowElements[o];switch(t.key){case _t:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case qt:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case kl:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const a=this.rowElements[e];if(a.offsetTop<this.scrollTop){this.scrollTop=a.offsetTop+a.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case wl:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=o||n.offsetTop+n.offsetHeight<=s){this.focusOnCell(o,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=o;e++){const a=this.rowElements[e];if(a.offsetTop+a.offsetHeight>s){let c=0;this.generateHeader===Ze.sticky&&this.generatedHeader!==null&&(c=this.generatedHeader.clientHeight),this.scrollTop=a.offsetTop-c;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case pe:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case fe:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,F.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Ze.none){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Ze.sticky?De.stickyHeader:De.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}dt.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));r([d({attribute:"generate-header"})],dt.prototype,"generateHeader",void 0);r([d({attribute:"grid-template-columns"})],dt.prototype,"gridTemplateColumns",void 0);r([p],dt.prototype,"rowsData",void 0);r([p],dt.prototype,"columnDefinitions",void 0);r([p],dt.prototype,"rowItemTemplate",void 0);r([p],dt.prototype,"cellItemTemplate",void 0);r([p],dt.prototype,"headerCellItemTemplate",void 0);r([p],dt.prototype,"focusRowIndex",void 0);r([p],dt.prototype,"focusColumnIndex",void 0);r([p],dt.prototype,"defaultRowItemTemplate",void 0);r([p],dt.prototype,"rowElementTag",void 0);r([p],dt.prototype,"rowElements",void 0);const Ml=m`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,Nl=m`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class se extends D{constructor(){super(...arguments);this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.isInternalFocused=!1,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Tn,this.handleFocusin),this.addEventListener(Ge,this.handleFocusout),this.addEventListener(We,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Tn,this.handleFocusin),this.removeEventListener(Ge,this.handleFocusout),this.removeEventListener(We,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Yt.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1,this.isInternalFocused=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===Yt.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Yt.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case Wt:case $l:if(this.isInternalFocused||this.columnDefinition===void 0)return;switch(this.cellType){case Yt.default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&(this.isInternalFocused=!0,e.focus()),t.preventDefault()}break;case Yt.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&(this.isInternalFocused=!0,e.focus()),t.preventDefault()}break}break;case fi:this.isInternalFocused&&(this.focus(),this.isInternalFocused=!1,t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Yt.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Nl.render(this,this);break;case void 0:case Yt.rowHeader:case Yt.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Ml.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}r([d({attribute:"cell-type"})],se.prototype,"cellType",void 0);r([d({attribute:"grid-column"})],se.prototype,"gridColumn",void 0);r([p],se.prototype,"rowData",void 0);r([p],se.prototype,"columnDefinition",void 0);function Bl(i){const t=i.tagFor(se);return m`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,o)=>o.index+1}"
        :rowData="${(e,o)=>o.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function jl(i){const t=i.tagFor(se);return m`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,o)=>o.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const Ul=(i,t)=>{const e=Bl(i),o=jl(i);return m`
        <template
            role="row"
            class="${s=>s.rowType!=="default"?s.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${o}"
            ${Zo({property:"cellElements",filter:Ce('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Y("slottedCellElements")}></slot>
        </template>
    `},ql=(i,t)=>m`
        <template
            tabindex="-1"
            role="${e=>{var o;return(o=e.cellType)!==null&&o!==void 0?o:"gridcell"}}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,_l=m`
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
`,Gl=i=>{const t=i.tagFor(se);return m`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,o)=>o.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},Wl=(i,t)=>{const e=i.tagFor(se);return m`
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
    `},Xl=(i,t)=>{const e=i.tagFor(pt);return m`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${qe(o=>o,Wl(i,t),{positioning:!0})}
        </${e}>
    `},Yl=(i,t)=>{const e=i.tagFor(dt),o=i.tagFor(pt);return m`
    <${e} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${qe(s=>s.getWeekdayText(),Gl(i),{positioning:!0})}
        </${o}>
        ${qe(s=>s.getDays(),Xl(i,t))}
    </${e}>
`},Ql=i=>m`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${qe(t=>t.getWeekdayText(),m`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${qe(t=>t.getDays(),m`
                    <div class="week">
                        ${qe(t=>t,m`
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
    `,Zl=(i,t)=>{var e;const o=new Date,s=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return m`
        <template>
            ${el}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${U(n=>n.readonly===!1,Yl(i,s))}
            ${U(n=>n.readonly===!0,Ql(s))}
            ${tl}
        </template>
    `},Jl=(i,t)=>m`
    <slot></slot>
`;class Hn extends D{}const Kl=(i,t)=>m`
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
            <slot ${Y("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class tc extends D{}class ec extends ss(tc){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class Ki extends ec{constructor(){super();this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{switch(t.key){case gi:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}r([d({attribute:"readonly",mode:"boolean"})],Ki.prototype,"readOnly",void 0);r([p],Ki.prototype,"defaultSlottedNodes",void 0);r([p],Ki.prototype,"indeterminate",void 0);var Qt;(function(i){i.above="above",i.below="below"})(Qt||(Qt={}));var to;(function(i){i.combobox="combobox"})(to||(to={}));function zn(i){return _e(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class Re extends D{constructor(t,e,o,s){super();this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,this.initialValue=this.initialValue||"",t&&(this.textContent=t),e&&(this.initialValue=e),o&&(this.defaultSelected=o),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.$fastController.isConnected&&(this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected))}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value?this.value:this.textContent?this.textContent:""}get text(){return this.textContent}set value(t){this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=t),E.notify(this,"value")}get value(){return E.track(this,"value"),this._value?this._value:this.text}get form(){return this.proxy?this.proxy.form:null}}r([p],Re.prototype,"defaultSelected",void 0);r([d({mode:"boolean"})],Re.prototype,"disabled",void 0);r([d({attribute:"selected",mode:"boolean"})],Re.prototype,"selectedAttribute",void 0);r([p],Re.prototype,"selected",void 0);r([d({attribute:"value",mode:"fromView"})],Re.prototype,"initialValue",void 0);Z(Re,Ft);var ns;(function(i){i.listbox="listbox"})(ns||(ns={}));class bt extends D{constructor(){super(...arguments);this._options=[],this.role=ns.listbox,this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get length(){return this.options?this.options.length:0}get options(){return E.track(this,"options"),this._options}set options(t){this._options=t,E.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&this.firstSelectedOption&&(this.firstSelectedOption.focus(),requestAnimationFrame(()=>{this.firstSelectedOption.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,bt.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case pe:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case qt:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case _t:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case fe:{t.preventDefault(),this.selectLastOption();break}case Dn:return this.focusAndScrollOptionIntoView(),!0;case Wt:case fi:return!0;case gi:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}selectedIndexChanged(t,e){this.setSelectedOptions()}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this.options.forEach(o=>{o.selected=e.includes(o)})}selectFirstOption(){this.disabled||(this.selectedIndex=0)}selectLastOption(){this.disabled||(this.selectedIndex=this.options.length-1)}selectNextOption(){!this.disabled&&this.options&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.options&&this.$fastController.isConnected){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null);if(t!==-1){this.selectedIndex=t;return}this.selectedIndex=0}}setSelectedOptions(){var t,e,o;if(this.$fastController.isConnected&&this.options){const s=(t=this.options[this.selectedIndex])!==null&&t!==void 0?t:null;this.selectedOptions=this.options.filter(n=>n.isSameNode(s)),this.ariaActiveDescendant=(o=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}}slottedOptionsChanged(t,e){this.$fastController.isConnected&&(this.options=e.reduce((o,s)=>(zn(s)&&o.push(s),o),[]),this.options.forEach(o=>{o.id=o.id||Yi("option-")}),this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const o=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),s=new RegExp(`^${o}`,"gi"),n=this.options.filter(a=>a.text.trim().match(s));if(n.length){const a=this.options.indexOf(n[0]);a>-1&&(this.selectedIndex=a)}this.typeaheadExpired=!1}}}bt.slottedOptionFilter=i=>zn(i)&&!i.disabled&&!i.hidden;bt.TYPE_AHEAD_TIMEOUT_MS=1e3;r([d({mode:"boolean"})],bt.prototype,"disabled",void 0);r([d],bt.prototype,"role",void 0);r([p],bt.prototype,"selectedIndex",void 0);r([p],bt.prototype,"selectedOptions",void 0);r([p],bt.prototype,"slottedOptions",void 0);r([p],bt.prototype,"typeaheadBuffer",void 0);class mi{constructor(){this.ariaActiveDescendant=""}}r([p],mi.prototype,"ariaActiveDescendant",void 0);r([p],mi.prototype,"ariaDisabled",void 0);r([p],mi.prototype,"ariaExpanded",void 0);Z(mi,X);Z(bt,mi);class ic extends bt{}class oc extends Xt(ic){constructor(){super(...arguments);this.proxy=document.createElement("input")}}var Je;(function(i){i.inline="inline",i.list="list",i.both="both",i.none="none"})(Je||(Je={}));class ge extends oc{constructor(){super(...arguments);this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Yi("listbox-"),this.maxHeight=0,this.open=!1,this.position=Qt.below,this.role=to.combobox}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}get isAutocompleteInline(){return this.autocomplete===Je.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Je.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Je.both}maxHeightChanged(){this.listbox&&this.listbox.style.setProperty("--max-height",`${this.maxHeight}px`)}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView())}get options(){return E.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,E.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return E.track(this,"value"),this._value}set value(t){var e,o,s;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const a=this.options.findIndex(u=>u.text.toLowerCase()===t.toLowerCase()),c=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,h=(o=this.options[a])===null||o===void 0?void 0:o.text;this.selectedIndex=c!==h?a:this.selectedIndex,t=((s=this.firstSelectedOption)===null||s===void 0?void 0:s.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),E.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text}return this.open=!this.open,this.open||this.updateValue(!0),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Je.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusoutHandler(t){if(this.updateValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),t.inputType==="deleteContentBackward"||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1;const o=this.control.value.length;this.control.setSelectionRange(o,o);break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.updateValue(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=is(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){const t=this.getBoundingClientRect(),o=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>o?Qt.above:Qt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Qt.above?~~t.top:~~o}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=e.includes(o)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value),t&&this.$emit("change")}}r([d({attribute:"autocomplete",mode:"fromView"})],ge.prototype,"autocomplete",void 0);r([p],ge.prototype,"maxHeight",void 0);r([d({attribute:"open",mode:"boolean"})],ge.prototype,"open",void 0);r([d],ge.prototype,"placeholder",void 0);r([d({attribute:"position"})],ge.prototype,"positionAttribute",void 0);r([p],ge.prototype,"position",void 0);class rs{}r([d({attribute:"aria-autocomplete",mode:"fromView"})],rs.prototype,"ariaAutocomplete",void 0);Z(rs,X);Z(ge,Ft,rs);const sc=(i,t)=>m`
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
            ${kt(i,t)}
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
                    ${P("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${wt(i,t)}
        </div>
        <div
            aria-disabled="${e=>e.disabled}"
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${P("listbox")}
        >
            <slot
                ${Y({filter:bt.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function bi(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function nc(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=bi(e)}return!1}class rc{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,o=this.constructListener(t);o.bind(e)(),e.addListener(o),this.listenerCache.set(t,o)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class vi extends rc{constructor(t,e){super(t);this.styles=e}static with(t){return e=>new vi(t,e)}constructListener(t){let e=!1;const o=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(o),e=n):!n&&e&&(t.$fastController.removeStyles(o),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const R=vi.with(window.matchMedia("(forced-colors)"));vi.with(window.matchMedia("(prefers-color-scheme: dark)"));vi.with(window.matchMedia("(prefers-color-scheme: light)"));class ac{constructor(t,e,o){this.propertyName=t,this.value=e,this.styles=o}bind(t){E.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){E.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const et="not-allowed",lc=":host([hidden]){display:none}";function V(i){return`${lc}:host{display:${i}}`}const x=xl()?"focus-visible":"focus";function Mn(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}const ne=document.createElement("div");function cc(i){return i instanceof qi}class as{setProperty(t,e){F.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){F.queueUpdate(()=>this.target.removeProperty(t))}}class dc extends as{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles($t.create([e]))}}class hc extends as{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class uc extends as{constructor(){super();this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Nn{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),E.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),F.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),F.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:o}=this.style;if(o){const s=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[s].style}else this.target=null}}r([p],Nn.prototype,"target",void 0);class pc{constructor(t){this.target=t.style}setProperty(t,e){F.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){F.queueUpdate(()=>this.target.removeProperty(t))}}class ht{setProperty(t,e){ht.properties[t]=e;for(const o of ht.roots.values())Ke.getOrCreate(ht.normalizeRoot(o)).setProperty(t,e)}removeProperty(t){delete ht.properties[t];for(const e of ht.roots.values())Ke.getOrCreate(ht.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=ht;if(!e.has(t)){e.add(t);const o=Ke.getOrCreate(this.normalizeRoot(t));for(const s in ht.properties)o.setProperty(s,ht.properties[s])}}static unregisterRoot(t){const{roots:e}=ht;if(e.has(t)){e.delete(t);const o=Ke.getOrCreate(ht.normalizeRoot(t));for(const s in ht.properties)o.removeProperty(s)}}static normalizeRoot(t){return t===ne?document:t}}ht.roots=new Set;ht.properties={};const ls=new WeakMap,fc=F.supportsAdoptedStyleSheets?dc:Nn,Ke=Object.freeze({getOrCreate(i){if(ls.has(i))return ls.get(i);let t;return i===ne?t=new ht:i instanceof Document?t=F.supportsAdoptedStyleSheets?new hc:new uc:cc(i)?t=new fc(i):t=new pc(i),ls.set(i,t),t}});class Ct extends Wo{constructor(t){super();this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ct.uniqueId(),Ct.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Ct({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Ct.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=it.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof Ct&&(e=this.alias(e)),it.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),it.existsFor(t)&&it.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(ne,t),this}subscribe(t,e){const o=this.getOrCreateSubscriberSet(e);e&&!it.existsFor(e)&&it.getOrCreate(e),o.has(t)||o.add(t)}unsubscribe(t,e){const o=this.subscribers.get(e||this);o&&o.has(t)&&o.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(o=>o.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}Ct.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();Ct.tokensById=new Map;class gc{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:o}=t;this.add(e,o)}add(t,e){Ke.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(it.getOrCreate(e).get(t)))}remove(t,e){Ke.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class mc{constructor(t,e,o){this.source=t,this.token=e,this.node=o,this.dependencies=new Set,this.observer=E.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,li))}}class bc{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),E.getNotifier(this).notify(t.id))}get(t){return E.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const yi=new WeakMap,xi=new WeakMap;class it{constructor(t){this.target=t,this.store=new bc,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,o)=>{const s=Ct.getTokenById(o);if(s&&(s.notify(this.target),Ct.isCSSDesignToken(s))){const n=this.parent,a=this.isReflecting(s);if(n){const c=n.get(s),h=e.get(s);c!==h&&!a?this.reflectToCSS(s):c===h&&a&&this.stopReflectToCSS(s)}else a||this.reflectToCSS(s)}}},yi.set(t,this),E.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof qi?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return yi.get(t)||new it(t)}static existsFor(t){return yi.has(t)}static findParent(t){if(ne!==t.target){let e=bi(t.target);for(;e!==null;){if(yi.has(e))return yi.get(e);e=bi(e)}return it.getOrCreate(ne)}return null}static findClosestAssignedNode(t,e){let o=e;do{if(o.has(t))return o;o=o.parent?o.parent:o.target!==ne?it.getOrCreate(ne):null}while(o!==null);return null}get parent(){return xi.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const o=this.getRaw(t);if(o!==void 0)return this.hydrate(t,o),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=it.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){Ct.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),Ct.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=it.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&xi.get(this).removeChild(this)}appendChild(t){t.parent&&xi.get(t).removeChild(t);const e=this.children.filter(o=>t.contains(o));xi.set(t,this),this.children.push(t),e.forEach(o=>t.appendChild(o)),E.getNotifier(this.store).subscribe(t);for(const[o,s]of this.store.all())t.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):s)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),E.getNotifier(this.store).unsubscribe(t),t.parent===this?xi.delete(t):!1}contains(t){return nc(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),it.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),it.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const o=Ct.getTokenById(e);!o||this.hydrate(o,this.getRaw(o))}hydrate(t,e){if(!this.has(t)){const o=this.bindingObservers.get(t);Ct.isDerivedDesignTokenValue(e)?o?o.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(o&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const o=new mc(e,t,this);return this.bindingObservers.set(t,o),o}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}it.cssCustomPropertyReflector=new gc;r([p],it.prototype,"children",void 0);function vc(i){return Ct.from(i)}const eo=Object.freeze({create:vc,notifyConnection(i){return!i.isConnected||!it.existsFor(i)?!1:(it.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!it.existsFor(i)?!1:(it.getOrCreate(i).unbind(),!0)},registerRoot(i=ne){ht.registerRoot(i)},unregisterRoot(i=ne){ht.unregisterRoot(i)}}),cs=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ds=new Map,io=new Map;let ti=null;const $i=K.createInterface(i=>i.cachedCallback(t=>(ti===null&&(ti=new Bn(null,t)),ti))),yc=Object.freeze({tagFor(i){return io.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||K.findResponsibleContainer(i).get($i)},getOrCreate(i){if(!i)return ti===null&&(ti=K.getOrCreateDOMContainer().get($i)),ti;const t=i.$$designSystem$$;if(t)return t;const e=K.getOrCreateDOMContainer(i);if(e.has($i,!1))return e.get($i);{const o=new Bn(i,e);return e.register(ui.instance($i,o)),o}}});function xc(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class Bn{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>cs.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,o=[],s=this.disambiguate,n=this.shadowRootMode,a={elementPrefix:this.prefix,tryDefineElement(c,h,u){const v=xc(c,h,u),{name:b,callback:$,baseClass:_}=v;let{type:B}=v,j=b,tt=ds.get(j),we=!0;for(;tt;){const te=s(j,B,tt);switch(te){case cs.ignoreDuplicate:return;case cs.definitionCallbackOnly:we=!1,tt=void 0;break;default:j=te,tt=ds.get(j);break}}we&&((io.has(B)||B===D)&&(B=class extends B{}),ds.set(j,B),io.set(B,j),_&&io.set(_,j)),o.push(new $c(e,j,B,n,$,we))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&eo.registerRoot(this.designTokenRoot)),e.registerWithContext(a,...t);for(const c of o)c.callback(c),c.willDefine&&c.definition!==null&&c.definition.define();return this}}class $c{constructor(t,e,o,s,n,a){this.container=t,this.name=e,this.type=o,this.shadowRootMode=s,this.callback=n,this.willDefine=a,this.definition=null}definePresentation(t){kn.define(this.name,t,this.container)}defineElement(t){this.definition=new qo(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return yc.tagFor(t)}}const wc=(i,t)=>m`
    <div class="positioning-region" part="positioning-region">
        ${U(e=>e.modal,m`
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
            ${P("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var jn=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],kc=jn.join(","),oo=typeof Element=="undefined"?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Cc=function(t){return t.contentEditable==="true"},Tc=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?Cc(t)||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e},hs=function(t){return t.tagName==="INPUT"},Ic=function(t){return hs(t)&&t.type==="hidden"},Fc=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(o){return o.tagName==="SUMMARY"});return e},Sc=function(t,e){for(var o=0;o<t.length;o++)if(t[o].checked&&t[o].form===e)return t[o]},Dc=function(t){if(!t.name)return!0;var e=t.form||t.ownerDocument,o=function(c){return e.querySelectorAll('input[type="radio"][name="'+c+'"]')},s;if(typeof window!="undefined"&&typeof window.CSS!="undefined"&&typeof window.CSS.escape=="function")s=o(window.CSS.escape(t.name));else try{s=o(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var n=Sc(s,t.form);return!n||n===t},Rc=function(t){return hs(t)&&t.type==="radio"},Ec=function(t){return Rc(t)&&!Dc(t)},Oc=function(t,e){if(getComputedStyle(t).visibility==="hidden")return!0;var o=oo.call(t,"details>summary:first-of-type"),s=o?t.parentElement:t;if(oo.call(s,"details:not([open]) *"))return!0;if(!e||e==="full")for(;t;){if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}else if(e==="non-zero-area"){var n=t.getBoundingClientRect(),a=n.width,c=n.height;return a===0&&c===0}return!1},Lc=function(t){if(hs(t)||t.tagName==="SELECT"||t.tagName==="TEXTAREA"||t.tagName==="BUTTON")for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var o=0;o<e.children.length;o++){var s=e.children.item(o);if(s.tagName==="LEGEND")return!s.contains(t)}return!0}e=e.parentElement}return!1},Un=function(t,e){return!(e.disabled||Ic(e)||Oc(e,t.displayCheck)||Fc(e)||Lc(e))},Ac=function(t,e){return!(!Un(t,e)||Ec(e)||Tc(e)<0)},qn=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return oo.call(t,kc)===!1?!1:Ac(e,t)},Vc=jn.concat("iframe").join(","),_n=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return oo.call(t,Vc)===!1?!1:Un(e,t)};class zt extends D{constructor(){super(...arguments);this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case fi:this.dismiss(),t.preventDefault();break;case Dn:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return zt.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),F.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss")}show(){this.hidden=!1}hide(){this.hidden=!0}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=E.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:qn(e)||zt.isFocusableFastElement(e)&&zt.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(zt.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,o;return!!((o=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus)}static hasTabbableShadow(t){var e,o;return Array.from((o=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&o!==void 0?o:[]).some(s=>qn(s))}}r([d({mode:"boolean"})],zt.prototype,"modal",void 0);r([d({mode:"boolean"})],zt.prototype,"hidden",void 0);r([d({attribute:"trap-focus",mode:"boolean"})],zt.prototype,"trapFocus",void 0);r([d({attribute:"aria-describedby"})],zt.prototype,"ariaDescribedby",void 0);r([d({attribute:"aria-labelledby"})],zt.prototype,"ariaLabelledby",void 0);r([d({attribute:"aria-label"})],zt.prototype,"ariaLabel",void 0);const Pc=(i,t)=>m`
    <details class="disclosure" ${P("details")}>
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
`;class so extends D{connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle")}}r([d({mode:"boolean"})],so.prototype,"expanded",void 0);r([d],so.prototype,"title",void 0);const Hc=(i,t)=>m`
    <template role="${e=>e.role}"></template>
`;var us;(function(i){i.separator="separator",i.presentation="presentation"})(us||(us={}));class Gn extends D{constructor(){super(...arguments);this.role=us.separator}}r([d],Gn.prototype,"role",void 0);var wi;(function(i){i.next="next",i.previous="previous"})(wi||(wi={}));const zc=(i,t)=>m`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,o)=>e.keyupHandler(o.event)}"
    >
        ${U(e=>e.direction===wi.next,m`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${U(e=>e.direction===wi.previous,m`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class me extends D{constructor(){super(...arguments);this.hiddenFromAT=!0,this.direction=wi.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;e==="Enter"&&this.$emit("click",t),e==="Escape"&&this.blur()}}}r([d({mode:"boolean"})],me.prototype,"disabled",void 0);r([d({attribute:"aria-hidden",converter:ji})],me.prototype,"hiddenFromAT",void 0);r([d],me.prototype,"direction",void 0);const Mc=(i,t)=>m`
    <template
        aria-selected="${e=>e.selected}"
        class="${e=>e.selected?"selected":""} ${e=>e.disabled?"disabled":""}"
        role="option"
    >
        ${kt(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${wt(i,t)}
    </template>
`;class ps extends bt{mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}sizeChanged(t,e){const o=Math.max(0,parseInt(e.toFixed(),10));o!==e&&F.queueUpdate(()=>{this.size=o})}}r([d({converter:w})],ps.prototype,"size",void 0);const Nc=(i,t)=>m`
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
            ${Y({filter:ps.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`;class ei extends D{constructor(){super(...arguments);this.optionElements=[]}menuElementsChanged(){this.updateOptions()}headerElementsChanged(){this.updateOptions()}footerElementsChanged(){this.updateOptions()}updateOptions(){this.optionElements.splice(0,this.optionElements.length),this.addSlottedListItems(this.headerElements),this.addSlottedListItems(this.menuElements),this.addSlottedListItems(this.footerElements),this.$emit("optionsupdated",{bubbles:!1})}addSlottedListItems(t){t!==void 0&&t.forEach(e=>{e.nodeType===1&&e.getAttribute("role")==="listitem"&&(e.id=e.id||Yi("option-"),this.optionElements.push(e))})}}r([p],ei.prototype,"menuElements",void 0);r([p],ei.prototype,"headerElements",void 0);r([p],ei.prototype,"footerElements",void 0);r([p],ei.prototype,"suggestionsAvailableText",void 0);const Bc=m`
    <template>
        ${i=>i.value}
    </template>
`;class ki extends D{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectView()}handleClick(t){return t.defaultPrevented||this.handleInvoked(),!1}handleInvoked(){this.$emit("pickeroptioninvoked")}updateView(){var t,e;this.disconnectView(),this.customView=(e=(t=this.contentsTemplate)===null||t===void 0?void 0:t.render(this,this))!==null&&e!==void 0?e:Bc.render(this,this)}disconnectView(){var t;(t=this.customView)===null||t===void 0||t.dispose(),this.customView=void 0}}r([d({attribute:"value"})],ki.prototype,"value",void 0);r([p],ki.prototype,"contentsTemplate",void 0);class fs extends D{}const jc=m`
    <template>
        ${i=>i.value}
    </template>
`;class Ci extends D{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){this.disconnectView(),super.disconnectedCallback()}handleKeyDown(t){return t.defaultPrevented?!1:t.key===Wt?(this.handleInvoke(),!1):!0}handleClick(t){return t.defaultPrevented||this.handleInvoke(),!1}handleInvoke(){this.$emit("pickeriteminvoked")}updateView(){var t,e;this.disconnectView(),this.customView=(e=(t=this.contentsTemplate)===null||t===void 0?void 0:t.render(this,this))!==null&&e!==void 0?e:jc.render(this,this)}disconnectView(){var t;(t=this.customView)===null||t===void 0||t.dispose(),this.customView=void 0}}r([d({attribute:"value"})],Ci.prototype,"value",void 0);r([p],Ci.prototype,"contentsTemplate",void 0);function Uc(i){const t=i.tagFor(Ci);return m`
    <${t}
        value="${e=>e}"
        :contentsTemplate="${(e,o)=>o.parent.listItemContentsTemplate}"
    >
    </${t}>
    `}function qc(i){const t=i.tagFor(ki);return m`
    <${t}
        value="${e=>e}"
        :contentsTemplate="${(e,o)=>o.parent.menuOptionContentsTemplate}"
    >
    </${t}>
    `}const _c=(i,t)=>{const e=i.tagFor(A),o=i.tagFor(ei),s=i.tagFor(fs),n=i.tagFor(fs),a=Uc(i),c=qc(i);return m`
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

            ${U(h=>h.flyoutOpen,m`
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
                    ${P("region")}
                >
                    ${U(h=>!h.showNoOptions&&!h.showLoading,m`
                            <slot name="menu-region"></slot>
                        `)}
                    ${U(h=>h.showNoOptions&&!h.showLoading,m`
                            <div class="no-options-display" part="no-options-display">
                                <slot name="no-options-region">
                                    ${h=>h.noSuggestionsText}
                                </slot>
                            </div>
                        `)}
                    ${U(h=>h.showLoading,m`
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
    `};class Gc extends D{}class Wc extends Xt(Gc){constructor(){super(...arguments);this.proxy=document.createElement("input")}}const Xc=m`
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
        ${P("inputElement")}
    ></input>
`;class N extends Wc{constructor(){super(...arguments);this.selection="",this.filterSelected=!0,this.filterQuery=!0,this.noSuggestionsText="No suggestions available",this.suggestionsAvailableText="Suggestions available",this.loadingText="Loading suggestions",this.showLoading=!1,this.optionsList=[],this.filteredOptionsList=[],this.flyoutOpen=!1,this.menuFocusIndex=-1,this.showNoOptions=!1,this.selectedItems=[],this.inputElementView=null,this.handleTextInput=t=>{this.query=this.inputElement.value},this.handleInputClick=t=>{t.preventDefault(),this.toggleFlyout(!0)},this.setRegionProps=()=>{if(!!this.flyoutOpen){if(this.region===null||this.region===void 0){F.queueUpdate(this.setRegionProps);return}this.region.anchorElement=this.inputElement}}}selectionChanged(){this.$fastController.isConnected&&(this.handleSelectionChange(),this.proxy instanceof HTMLInputElement&&(this.proxy.value=this.selection,this.validate()))}optionsChanged(){this.optionsList=this.options.split(",").map(t=>t.trim()).filter(t=>t!=="")}showLoadingChanged(){this.$fastController.isConnected&&F.queueUpdate(()=>{this.setFocusedOption(0)})}listItemTemplateChanged(){this.updateListItemTemplate()}defaultListItemTemplateChanged(){this.updateListItemTemplate()}menuOptionTemplateChanged(){this.updateOptionTemplate()}defaultMenuOptionTemplateChanged(){this.updateOptionTemplate()}optionsListChanged(){this.updateFilteredOptions()}queryChanged(){this.$fastController.isConnected&&(this.inputElement.value!==this.query&&(this.inputElement.value=this.query),this.updateFilteredOptions(),this.$emit("querychange",{bubbles:!1}))}filteredOptionsListChanged(){this.$fastController.isConnected&&(this.showNoOptions=this.filteredOptionsList.length===0&&this.menuElement.querySelectorAll('[role="listitem"]').length===0,this.setFocusedOption(this.showNoOptions?-1:0))}flyoutOpenChanged(){this.flyoutOpen?(F.queueUpdate(this.setRegionProps),this.$emit("menuopening",{bubbles:!1})):this.$emit("menuclosing",{bubbles:!1})}showNoOptionsChanged(){this.$fastController.isConnected&&F.queueUpdate(()=>{this.setFocusedOption(0)})}connectedCallback(){super.connectedCallback(),this.listElement=document.createElement(this.selectedListTag),this.appendChild(this.listElement),this.itemsPlaceholderElement=document.createComment(""),this.listElement.append(this.itemsPlaceholderElement),this.inputElementView=Xc.render(this,this.listElement);const t=this.menuTag.toUpperCase();this.menuElement=Array.from(this.children).find(e=>e.tagName===t),this.menuElement===void 0&&(this.menuElement=document.createElement(this.menuTag),this.appendChild(this.menuElement)),this.menuElement.id===""&&(this.menuElement.id=Yi("listbox-")),this.menuId=this.menuElement.id,this.optionsPlaceholder=document.createComment(""),this.menuElement.append(this.optionsPlaceholder),F.queueUpdate(()=>this.initialize())}disconnectedCallback(){super.disconnectedCallback(),this.toggleFlyout(!1),this.inputElement.removeEventListener("input",this.handleTextInput),this.inputElement.removeEventListener("click",this.handleInputClick),this.inputElementView!==null&&(this.inputElementView.dispose(),this.inputElementView=null)}focus(){this.inputElement.focus()}initialize(){this.updateListItemTemplate(),this.updateOptionTemplate(),this.itemsRepeatBehavior=new ci(t=>t.selectedItems,t=>t.activeListItemTemplate,{positioning:!0}).createBehavior(this.itemsPlaceholderElement),this.inputElement.addEventListener("input",this.handleTextInput),this.inputElement.addEventListener("click",this.handleInputClick),this.$fastController.addBehaviors([this.itemsRepeatBehavior]),this.menuElement.suggestionsAvailableText=this.suggestionsAvailableText,this.menuElement.addEventListener("optionsupdated",this.handleMenuOptionsUpdated),this.optionsRepeatBehavior=new ci(t=>t.filteredOptionsList,t=>t.activeMenuOptionTemplate,{positioning:!0}).createBehavior(this.optionsPlaceholder),this.$fastController.addBehaviors([this.optionsRepeatBehavior]),this.handleSelectionChange()}toggleFlyout(t){if(this.flyoutOpen!==t){if(t&&document.activeElement===this.inputElement){this.flyoutOpen=t,F.queueUpdate(()=>{this.menuElement!==void 0?this.setFocusedOption(0):this.disableMenu()});return}this.flyoutOpen=!1,this.disableMenu()}}handleMenuOptionsUpdated(t){t.preventDefault(),this.flyoutOpen&&this.setFocusedOption(0)}handleKeyDown(t){if(t.defaultPrevented)return!1;switch(t.key){case qt:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{const e=this.flyoutOpen?Math.min(this.menuFocusIndex+1,this.menuElement.optionElements.length-1):0;this.setFocusedOption(e)}return!1}case _t:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{const e=this.flyoutOpen?Math.max(this.menuFocusIndex-1,0):0;this.setFocusedOption(e)}return!1}case fi:return this.toggleFlyout(!1),!1;case Wt:return this.menuFocusIndex!==-1&&this.menuElement.optionElements.length>this.menuFocusIndex&&this.menuElement.optionElements[this.menuFocusIndex].click(),!1;case oe:return document.activeElement!==this.inputElement?(this.incrementFocusedItem(1),!1):!0;case ie:return this.inputElement.selectionStart===0?(this.incrementFocusedItem(-1),!1):!0;case Tl:case Cl:{if(document.activeElement===null)return!0;if(document.activeElement===this.inputElement)return this.inputElement.selectionStart===0?(this.selection=this.selectedItems.slice(0,this.selectedItems.length-1).toString(),this.toggleFlyout(!1),!1):!0;const e=Array.from(this.listElement.children),o=e.indexOf(document.activeElement);return o>-1?(this.selection=this.selectedItems.splice(o,1).toString(),F.queueUpdate(()=>{e[Math.min(e.length,o)].focus()}),!1):!0}}return this.toggleFlyout(!0),!0}handleFocusIn(t){return!1}handleFocusOut(t){return(this.menuElement===void 0||!this.menuElement.contains(t.relatedTarget))&&this.toggleFlyout(!1),!1}handleSelectionChange(){this.selectedItems.toString()!==this.selection&&(this.selectedItems=this.selection===""?[]:this.selection.split(","),this.updateFilteredOptions(),F.queueUpdate(()=>{this.checkMaxItems()}),this.$emit("selectionchange",{bubbles:!1}))}handleRegionLoaded(t){F.queueUpdate(()=>{this.setFocusedOption(0),this.$emit("menuloaded",{bubbles:!1})})}checkMaxItems(){if(this.inputElement!==void 0)if(this.maxSelected!==void 0&&this.selectedItems.length>=this.maxSelected){if(document.activeElement===this.inputElement){const t=Array.from(this.listElement.querySelectorAll("[role='listitem']"));t[t.length-1].focus()}this.inputElement.hidden=!0}else this.inputElement.hidden=!1}handleItemInvoke(t){if(t.defaultPrevented)return!1;if(t.target instanceof Ci){const o=Array.from(this.listElement.querySelectorAll("[role='listitem']")).indexOf(t.target);if(o!==-1){const s=this.selectedItems.slice();s.splice(o,1),this.selection=s.toString(),F.queueUpdate(()=>this.incrementFocusedItem(0))}return!1}return!0}handleOptionInvoke(t){return t.defaultPrevented?!1:t.target instanceof ki?(t.target.value!==void 0&&(this.selection=`${this.selection}${this.selection===""?"":","}${t.target.value}`),this.inputElement.value="",this.query="",this.inputElement.focus(),this.toggleFlyout(!1),!1):!0}incrementFocusedItem(t){if(this.selectedItems.length===0){this.inputElement.focus();return}const e=Array.from(this.listElement.querySelectorAll("[role='listitem']"));if(document.activeElement!==null){let o=e.indexOf(document.activeElement);o===-1&&(o=e.length);const s=Math.min(e.length,Math.max(0,o+t));s===e.length?this.maxSelected!==void 0&&this.selectedItems.length>=this.maxSelected?e[s-1].focus():this.inputElement.focus():e[s].focus()}}disableMenu(){var t,e,o;this.menuFocusIndex=-1,this.menuFocusOptionId=void 0,(t=this.inputElement)===null||t===void 0||t.removeAttribute("aria-activedescendant"),(e=this.inputElement)===null||e===void 0||e.removeAttribute("aria-owns"),(o=this.inputElement)===null||o===void 0||o.removeAttribute("aria-expanded")}setFocusedOption(t){if(!this.flyoutOpen||t===-1||this.showNoOptions||this.showLoading){this.disableMenu();return}if(this.menuElement.optionElements.length===0)return;this.menuElement.optionElements.forEach(o=>{o.setAttribute("aria-selected","false")}),this.menuFocusIndex=t,this.menuFocusIndex>this.menuElement.optionElements.length-1&&(this.menuFocusIndex=this.menuElement.optionElements.length-1),this.menuFocusOptionId=this.menuElement.optionElements[this.menuFocusIndex].id,this.inputElement.setAttribute("aria-owns",this.menuId),this.inputElement.setAttribute("aria-expanded","true"),this.inputElement.setAttribute("aria-activedescendant",this.menuFocusOptionId);const e=this.menuElement.optionElements[this.menuFocusIndex];e.setAttribute("aria-selected","true"),this.menuElement.scrollTo(0,e.offsetTop)}updateListItemTemplate(){var t;this.activeListItemTemplate=(t=this.listItemTemplate)!==null&&t!==void 0?t:this.defaultListItemTemplate}updateOptionTemplate(){var t;this.activeMenuOptionTemplate=(t=this.menuOptionTemplate)!==null&&t!==void 0?t:this.defaultMenuOptionTemplate}updateFilteredOptions(){this.filteredOptionsList=this.optionsList.slice(0),this.filterSelected&&(this.filteredOptionsList=this.filteredOptionsList.filter(t=>this.selectedItems.indexOf(t)===-1)),this.filterQuery&&this.query!==""&&this.query!==void 0&&(this.filteredOptionsList=this.filteredOptionsList.filter(t=>t.indexOf(this.query)!==-1))}}r([d({attribute:"selection"})],N.prototype,"selection",void 0);r([d({attribute:"options"})],N.prototype,"options",void 0);r([d({attribute:"filter-selected",mode:"boolean"})],N.prototype,"filterSelected",void 0);r([d({attribute:"filter-query",mode:"boolean"})],N.prototype,"filterQuery",void 0);r([d({attribute:"max-selected"})],N.prototype,"maxSelected",void 0);r([d({attribute:"no-suggestions-text"})],N.prototype,"noSuggestionsText",void 0);r([d({attribute:"suggestions-available-text"})],N.prototype,"suggestionsAvailableText",void 0);r([d({attribute:"loading-text"})],N.prototype,"loadingText",void 0);r([d({attribute:"label"})],N.prototype,"label",void 0);r([d({attribute:"labelledby"})],N.prototype,"labelledBy",void 0);r([d({attribute:"placeholder"})],N.prototype,"placeholder",void 0);r([p],N.prototype,"showLoading",void 0);r([p],N.prototype,"listItemTemplate",void 0);r([p],N.prototype,"defaultListItemTemplate",void 0);r([p],N.prototype,"activeListItemTemplate",void 0);r([p],N.prototype,"menuOptionTemplate",void 0);r([p],N.prototype,"defaultMenuOptionTemplate",void 0);r([p],N.prototype,"activeMenuOptionTemplate",void 0);r([p],N.prototype,"listItemContentsTemplate",void 0);r([p],N.prototype,"menuOptionContentsTemplate",void 0);r([p],N.prototype,"optionsList",void 0);r([p],N.prototype,"query",void 0);r([p],N.prototype,"filteredOptionsList",void 0);r([p],N.prototype,"flyoutOpen",void 0);r([p],N.prototype,"menuId",void 0);r([p],N.prototype,"selectedListTag",void 0);r([p],N.prototype,"menuTag",void 0);r([p],N.prototype,"menuFocusIndex",void 0);r([p],N.prototype,"menuFocusOptionId",void 0);r([p],N.prototype,"showNoOptions",void 0);r([p],N.prototype,"selectedItems",void 0);const Yc=(i,t)=>m`
        <template role="list" slot="menu-region">
            <div class="options-display" part="options-display">
                <div class="header-region" part="header-region">
                    <slot name="header-region" ${Y("headerElements")}></slot>
                </div>

                <slot ${Y("menuElements")}></slot>
                <div class="footer-region" part="footer-region">
                    <slot name="footer-region" ${Y("footerElements")}></slot>
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
    `,Qc=(i,t)=>m`
        <template
            role="listitem"
            tabindex="-1"
            @click="${(e,o)=>e.handleClick(o.event)}"
        >
            <slot></slot>
        </template>
    `,Zc=(i,t)=>m`
        <template slot="list-region" role="list" class="picker-list">
            <slot></slot>
            <slot name="input-region"></slot>
        </template>
    `,Jc=(i,t)=>m`
        <template
            role="listitem"
            tabindex="0"
            @click="${(e,o)=>e.handleClick(o.event)}"
            @keydown="${(e,o)=>e.handleKeyDown(o.event)}"
        >
            <slot></slot>
        </template>
    `;var ft;(function(i){i.menuitem="menuitem",i.menuitemcheckbox="menuitemcheckbox",i.menuitemradio="menuitemradio"})(ft||(ft={}));const Kc={[ft.menuitem]:"menuitem",[ft.menuitemcheckbox]:"menuitemcheckbox",[ft.menuitemradio]:"menuitemradio"};class Ot extends D{constructor(){super(...arguments);this.role=ft.menuitem,this.hasSubmenu=!1,this.currentDirection=Q.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case Wt:case gi:return this.invoke(),!1;case oe:return this.expandAndFocus(),!1;case ie:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{!this.focusSubmenuOnLoad||(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{!this.hasSubmenu||(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case ft.menuitemcheckbox:this.checked=!this.checked;break;case ft.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case ft.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Fe(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),F.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children)}}r([d({mode:"boolean"})],Ot.prototype,"disabled",void 0);r([d({mode:"boolean"})],Ot.prototype,"expanded",void 0);r([p],Ot.prototype,"startColumnCount",void 0);r([d],Ot.prototype,"role",void 0);r([d({mode:"boolean"})],Ot.prototype,"checked",void 0);r([p],Ot.prototype,"submenuRegion",void 0);r([p],Ot.prototype,"hasSubmenu",void 0);r([p],Ot.prototype,"currentDirection",void 0);r([p],Ot.prototype,"submenu",void 0);Z(Ot,Ft);const td=(i,t)=>m`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==ft.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,o)=>e.handleMenuItemKeyDown(o.event)}"
        @click="${(e,o)=>e.handleMenuItemClick(o.event)}"
        @mouseover="${(e,o)=>e.handleMouseOver(o.event)}"
        @mouseout="${(e,o)=>e.handleMouseOut(o.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${U(e=>e.role===ft.menuitemcheckbox,m`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${U(e=>e.role===ft.menuitemradio,m`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${kt(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${wt(i,t)}
        ${U(e=>e.hasSubmenu,m`
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
        ${U(e=>e.expanded,m`
                <${i.tagFor(A)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${P("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${i.tagFor(A)}>
            `)}
    </template>
`,ed=(i,t)=>m`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,o)=>e.handleMenuKeyDown(o.event)}"
        @focusout="${(e,o)=>e.handleFocusOut(o.event)}"
    >
        <slot ${Y("items")}></slot>
    </template>
`;class Ti extends D{constructor(){super(...arguments);this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&_e(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.setItems=()=>{const t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0);function e(s){return!(s instanceof Ot)||s.role!==ft.menuitem&&s.querySelector("[slot=start]")===null||s.role===ft.menuitem&&s.querySelector("[slot=start]")!==null?1:s.role!==ft.menuitem&&s.querySelector("[slot=start]")!==null?2:0}const o=t.reduce((s,n)=>{const a=e(n);return s>a?s:a},0);t.forEach((s,n)=>{s.setAttribute("tabindex",n===0?"0":"-1"),s.addEventListener("expanded-change",this.handleExpandedChanged),s.addEventListener("focus",this.handleItemFocus),s instanceof Ot&&(s.startColumnCount=o)})},this.resetItems=t=>{t.forEach(e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)})},this.changeHandler=t=>{const e=t.target,o=this.menuItems.indexOf(e);if(o!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=o-1;n>=0;--n){const a=this.menuItems[n],c=a.getAttribute("role");if(c===ft.menuitemradio&&(a.checked=!1),c==="separator")break}const s=this.menuItems.length-1;for(let n=o+1;n<=s;++n){const a=this.menuItems[n],c=a.getAttribute("role");if(c===ft.menuitemradio&&(a.checked=!1),c==="separator")break}}},this.isMenuItemElement=t=>_e(t)&&Ti.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&(this.menuItems=this.domChildren(),this.resetItems(t),this.setItems())}connectedCallback(){super.connectedCallback(),this.menuItems=this.domChildren(),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.menuItems=[],this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented)switch(t.key){case qt:this.setFocus(this.focusIndex+1,1);return;case _t:this.setFocus(this.focusIndex-1,-1);return;case fe:this.setFocus(this.menuItems.length-1,-1);return;case pe:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children)}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const o=this.menuItems[t];if(this.isFocusableElement(o)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,o.setAttribute("tabindex","0"),o.focus();break}t+=e}}}Ti.focusableElementRoles=Kc;r([p],Ti.prototype,"items",void 0);const id=(i,t)=>m`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Y("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${kt(i,t)}
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
                ${P("control")}
            />
            ${U(e=>!e.hideStep&&!e.readOnly&&!e.disabled,m`
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
            ${wt(i,t)}
        </div>
    </template>
`,od=(i,t)=>m`
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
                ${Y({property:"defaultSlottedNodes",filter:Mn})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${kt(i,t)}
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
                ${P("control")}
            />
            ${wt(i,t)}
        </div>
    </template>
`;class sd extends D{}class nd extends Xt(sd){constructor(){super(...arguments);this.proxy=document.createElement("input")}}var gs;(function(i){i.email="email",i.password="password",i.tel="tel",i.text="text",i.url="url"})(gs||(gs={}));class Dt extends nd{constructor(){super(...arguments);this.type=gs.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&F.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}r([d({attribute:"readonly",mode:"boolean"})],Dt.prototype,"readOnly",void 0);r([d({mode:"boolean"})],Dt.prototype,"autofocus",void 0);r([d],Dt.prototype,"placeholder",void 0);r([d],Dt.prototype,"type",void 0);r([d],Dt.prototype,"list",void 0);r([d({converter:w})],Dt.prototype,"maxlength",void 0);r([d({converter:w})],Dt.prototype,"minlength",void 0);r([d],Dt.prototype,"pattern",void 0);r([d({converter:w})],Dt.prototype,"size",void 0);r([d({mode:"boolean"})],Dt.prototype,"spellcheck",void 0);r([p],Dt.prototype,"defaultSlottedNodes",void 0);class no{}Z(no,X);Z(Dt,Ft,no);class rd extends D{}class ad extends Xt(rd){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class Tt extends ad{constructor(){super(...arguments);this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var o;this.max=Math.max(e,(o=this.min)!==null&&o!==void 0?o:e);const s=Math.min(this.min,this.max);this.min!==void 0&&this.min!==s&&(this.min=s),this.value=this.getValidValue(this.value)}minChanged(t,e){var o;this.min=Math.min(e,(o=this.max)!==null&&o!==void 0?o:e);const s=Math.max(this.min,this.max);this.max!==void 0&&this.max!==s&&(this.max=s),this.value=this.getValidValue(this.value)}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}getValidValue(t){var e,o;let s=parseFloat(parseFloat(t).toPrecision(12));return isNaN(s)?s="":(s=Math.min(s,(e=this.max)!==null&&e!==void 0?e:s),s=Math.max(s,(o=this.min)!==null&&o!==void 0?o:s).toString()),s}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&F.queueUpdate(()=>{this.focus()})}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case _t:return this.stepUp(),!1;case qt:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}r([d({attribute:"readonly",mode:"boolean"})],Tt.prototype,"readOnly",void 0);r([d({mode:"boolean"})],Tt.prototype,"autofocus",void 0);r([d({attribute:"hide-step",mode:"boolean"})],Tt.prototype,"hideStep",void 0);r([d],Tt.prototype,"placeholder",void 0);r([d],Tt.prototype,"list",void 0);r([d({converter:w})],Tt.prototype,"maxlength",void 0);r([d({converter:w})],Tt.prototype,"minlength",void 0);r([d({converter:w})],Tt.prototype,"size",void 0);r([d({converter:w})],Tt.prototype,"step",void 0);r([d({converter:w})],Tt.prototype,"max",void 0);r([d({converter:w})],Tt.prototype,"min",void 0);r([p],Tt.prototype,"defaultSlottedNodes",void 0);Z(Tt,Ft,no);const Wn=44,ld=(i,t)=>m`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${U(e=>typeof e.value=="number",m`
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
                        style="stroke-dasharray: ${e=>Wn*e.percentComplete/100}px ${Wn}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${U(e=>typeof e.value!="number",m`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Ee extends D{constructor(){super(...arguments);this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,o=typeof this.value=="number"?this.value:0,s=e-t;this.percentComplete=s===0?0:Math.fround((o-t)/s*100)}}r([d({converter:w})],Ee.prototype,"value",void 0);r([d({converter:w})],Ee.prototype,"min",void 0);r([d({converter:w})],Ee.prototype,"max",void 0);r([d({mode:"boolean"})],Ee.prototype,"paused",void 0);r([p],Ee.prototype,"percentComplete",void 0);const cd=(i,t)=>m`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${U(e=>typeof e.value=="number",m`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${U(e=>typeof e.value!="number",m`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,dd=(i,t)=>m`
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
            class="positioning-region ${e=>e.orientation===J.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Y({property:"slottedRadioButtons",filter:Ce("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class be extends D{constructor(){super(...arguments);this.orientation=J.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(o=>{o!==e&&(o.checked=!1,this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const o=t[e];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach(s=>{s!==o&&s.setAttribute("tabindex","-1")}):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,o=t.target,s=o!==null?e.indexOf(o):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&s===n||n===e.length-1&&n===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(a=>{a!==this.selectedRadio&&a.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(a=>{a!==this.focusedRadio&&a.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const o=this.slottedRadioButtons;e.checked||o.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,o)=>t===e.length&&this.isInsideToolbar&&o===oe,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===ie,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,e,t.key)){this.moveRightOffGroup();return}else o===e.length&&(o=0);for(;o<e.length&&e.length>1;)if(e[o].disabled){if(this.focusedRadio&&o===e.indexOf(this.focusedRadio))break;if(o+1>=e.length){if(this.isInsideToolbar)break;o=0}else o+=1}else{this.moveToRadioByIndex(e,o);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,o=o<0?e.length-1:o,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;o>=0&&e.length>1;)if(e[o].disabled){if(this.focusedRadio&&o===e.indexOf(this.focusedRadio))break;o-1<0?o=e.length-1:o-=1}else{this.moveToRadioByIndex(e,o);break}},this.keydownHandler=t=>{const e=t.key;if(e in Xe&&this.isInsideFoundationToolbar)return!0;switch(e){case Wt:{this.checkFocusedRadio();break}case oe:case qt:{this.direction===Q.ltr?this.moveRight(t):this.moveLeft(t);break}case ie:case _t:{this.direction===Q.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.getAttribute("value")===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!((t=this.parentToolbar)===null||t===void 0?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Fe(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),e=t?t.length:0;if(e>1){const s=t[e-1];s.checked=!0}let o=!1;if(this.slottedRadioButtons.forEach(s=>{this.name!==void 0&&s.setAttribute("name",this.name),this.disabled&&(s.disabled=!0),this.readOnly&&(s.readOnly=!0),this.value&&this.value===s.value?(this.selectedRadio=s,this.focusedRadio=s,s.checked=!0,s.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"),s.checked=!1),s.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const s=this.slottedRadioButtons.filter(a=>a.hasAttribute("checked")),n=s!==null?s.length:0;if(n>0&&!o){const a=s[n-1];a.checked=!0,this.focusedRadio=a,a.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}r([d({attribute:"readonly",mode:"boolean"})],be.prototype,"readOnly",void 0);r([d({attribute:"disabled",mode:"boolean"})],be.prototype,"disabled",void 0);r([d],be.prototype,"name",void 0);r([d],be.prototype,"value",void 0);r([d],be.prototype,"orientation",void 0);r([p],be.prototype,"childItems",void 0);r([p],be.prototype,"slottedRadioButtons",void 0);const hd=(i,t)=>m`
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
            <slot ${Y("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class ud extends D{}class pd extends ss(ud){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class ro extends pd{constructor(){super();this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case gi:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}r([d({attribute:"readonly",mode:"boolean"})],ro.prototype,"readOnly",void 0);r([p],ro.prototype,"name",void 0);r([p],ro.prototype,"defaultSlottedNodes",void 0);class re extends D{constructor(){super(...arguments);this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const o=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(o,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&this.setStops()}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,o)=>o instanceof HTMLSlotElement?e.concat(o.assignedElements()):(e.push(o),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops(),this.width=this.offsetWidth;let t=0,e=this.scrollItems.map(({offsetLeft:o,offsetWidth:s},n)=>{const a=o+s;return this.isRtl?-a:(t=a,n===0?0:o)}).concat(t);e=this.fixScrollMisalign(e),e.sort((o,s)=>Math.abs(o)-Math.abs(s)),this.scrollStops=e,this.setFlippers()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((o,s)=>s-o);const e=t[0];t=t.map(o=>o-e)}return t}setFlippers(){var t,e;const o=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",o===0),this.scrollStops){const s=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",Math.abs(o)+this.width>=s)}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,a)=>n<=t&&(this.isRtl||a===this.scrollStops.length-1||this.scrollStops[a+1]>t)),o=Math.abs(this.scrollStops[e+1]);let s=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>o);(s>e||s===-1)&&(s=e>0?e-1:0),this.scrollToPosition(this.scrollStops[s],t)}scrollToNext(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),o=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let s=e;o>e+2?s=o-2:e<this.scrollStops.length-2&&(s=e+1),this.scrollToPosition(this.scrollStops[s],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var o;if(this.scrolling)return;this.scrolling=!0;const s=(o=this.duration)!==null&&o!==void 0?o:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",s);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),a=u=>{u&&u.target!==u.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",a),this.scrolling=!1)};if(n===0){a();return}this.content.addEventListener("transitionend",a);const c=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let h=this.scrollContainer.scrollLeft-Math.min(t,c);this.isRtl&&(h=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),c)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${h}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}}r([d({converter:w})],re.prototype,"speed",void 0);r([d],re.prototype,"duration",void 0);r([d],re.prototype,"easing",void 0);r([d({attribute:"aria-hidden",converter:ji})],re.prototype,"flippersHiddenFromAT",void 0);r([p],re.prototype,"scrolling",void 0);r([p],re.prototype,"scrollItems",void 0);r([d({attribute:"view"})],re.prototype,"view",void 0);const fd=(i,t)=>{var e,o;return m`
    <template
        class="horizontal-scroll"
        @keyup="${(s,n)=>s.keyupHandler(n.event)}"
    >
        ${kt(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${s=>s.scrolled()}"
                ${P("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${P("content")}>
                    <slot
                        ${Y({property:"scrollItems",filter:Ce()})}
                    ></slot>
                </div>
            </div>
            ${U(s=>s.view!=="mobile",m`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${P("previousFlipperContainer")}
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
                        ${P("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${t.nextFlipper instanceof Function?t.nextFlipper(i,t):(o=t.nextFlipper)!==null&&o!==void 0?o:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${wt(i,t)}
    </template>
`},gd=(i,t)=>m`
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
                ${Y({property:"defaultSlottedNodes",filter:Mn})}
            ></slot>
        </label>
        <div class="root" part="root" ${P("root")}>
            ${kt(i,t)}
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
                    ${P("control")}
                />
                <slot name="close-button">
                    <${i.tagFor(St)} appearance="stealth" class="clear-button ${e=>e.value?"":"clear-button__hidden"}" part="clear-button" tabindex="-1" @click=${e=>e.handleClearInput()}>
                        <slot name="close-glyph">
                            <svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146447 0.146447C0.338683 -0.0478972 0.645911 -0.0270359 0.853553 0.146447L4.5 3.793L8.14645 0.146447C8.34171 -0.0488155 8.65829 -0.0488155 8.85355 0.146447C9.04882 0.341709 9.04882 0.658291 8.85355 0.853553L5.207 4.5L8.85355 8.14645C9.05934 8.35223 9.03129 8.67582 8.85355 8.85355C8.67582 9.03129 8.35409 9.02703 8.14645 8.85355L4.5 5.207L0.853553 8.85355C0.658291 9.04882 0.341709 9.04882 0.146447 8.85355C-0.0488155 8.65829 -0.0488155 8.34171 0.146447 8.14645L3.793 4.5L0.146447 0.853553C-0.0268697 0.680237 -0.0457894 0.34079 0.146447 0.146447Z"/>
                            </svg>
                        </slot>
                    </${i.tagFor(St)}>
                </slot>
            </div>
            ${wt(i,t)}
        </div>
    </template>
`;class md extends D{}class bd extends Xt(md){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class Lt extends bd{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&F.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus()}handleChange(){this.$emit("change")}}r([d({attribute:"readonly",mode:"boolean"})],Lt.prototype,"readOnly",void 0);r([d({mode:"boolean"})],Lt.prototype,"autofocus",void 0);r([d],Lt.prototype,"placeholder",void 0);r([d],Lt.prototype,"list",void 0);r([d({converter:w})],Lt.prototype,"maxlength",void 0);r([d({converter:w})],Lt.prototype,"minlength",void 0);r([d],Lt.prototype,"pattern",void 0);r([d({converter:w})],Lt.prototype,"size",void 0);r([d({mode:"boolean"})],Lt.prototype,"spellcheck",void 0);r([p],Lt.prototype,"defaultSlottedNodes",void 0);class Xn{}Z(Xn,X);Z(Lt,Ft,Xn);class vd extends bt{}class yd extends Xt(vd){constructor(){super(...arguments);this.proxy=document.createElement("select")}}class Oe extends yd{constructor(){super(...arguments);this.open=!1,this.forcedPosition=!1,this.role=to.combobox,this.position=Qt.below,this.maxHeight=0,this.displayValue=""}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex)}get value(){return E.track(this,"value"),this._value}set value(t){const e=`${this._value}`;if(this.$fastController.isConnected&&this.options){const o=this.options.findIndex(h=>h.value===t),s=this.options[this.selectedIndex],n=this.options[o],a=s?s.value:null,c=n?n.value:null;(o===-1||a!==c)&&(t="",this.selectedIndex=o),this.firstSelectedOption&&(t=this.firstSelectedOption.value)}e!==t&&(this._value=t,super.valueChanged(e,t),E.notify(this,"value"))}updateValue(t){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?this.firstSelectedOption.value:"",this.displayValue=this.firstSelectedOption?this.firstSelectedOption.textContent||this.firstSelectedOption.value:this.value),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}setPositioning(){const t=this.getBoundingClientRect(),o=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>o?Qt.above:Qt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Qt.above?~~t.top:~~o}maxHeightChanged(){this.listbox&&this.listbox.style.setProperty("--max-height",`${this.maxHeight}px`)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),this.setDefaultSelectedOption(),this.value=this.firstSelectedOption.value}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(!this.open)return!0;const o=t.relatedTarget;if(this.isSameNode(o)){this.focus();return}((e=this.options)===null||e===void 0?void 0:e.includes(o))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.setProxyOptions(),this.updateValue()}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.appendChild(e)}))}keydownHandler(t){switch(super.keydownHandler(t),t.key||t.key.charCodeAt(0)){case" ":{this.typeaheadExpired&&(t.preventDefault(),this.open=!this.open);break}case"Enter":{t.preventDefault(),this.open=!this.open;break}case"Escape":{this.open&&(t.preventDefault(),this.open=!1);break}case"Tab":{if(!this.open)return!0;t.preventDefault(),this.open=!1}}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!0}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute}}r([d({attribute:"open",mode:"boolean"})],Oe.prototype,"open",void 0);r([d({attribute:"position"})],Oe.prototype,"positionAttribute",void 0);r([p],Oe.prototype,"position",void 0);r([p],Oe.prototype,"maxHeight",void 0);r([p],Oe.prototype,"displayValue",void 0);class ao{}r([p],ao.prototype,"ariaExpanded",void 0);r([d({attribute:"aria-pressed",mode:"fromView"})],ao.prototype,"ariaPressed",void 0);Z(ao,X);Z(Oe,Ft,ao);const xd=(i,t)=>m`
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
            ${kt(i,t)}
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
            ${wt(i,t)}
        </div>
        <div
            aria-disabled="${e=>e.disabled}"
            class="listbox"
            id="listbox"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${P("listbox")}
        >
            <slot
                ${Y({filter:bt.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,$d=(i,t)=>m`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${U(e=>e.shimmer===!0,m`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Ii extends D{constructor(){super(...arguments);this.shape="rect"}}r([d],Ii.prototype,"fill",void 0);r([d],Ii.prototype,"shape",void 0);r([d],Ii.prototype,"pattern",void 0);r([d({mode:"boolean"})],Ii.prototype,"shimmer",void 0);const wd=(i,t)=>m`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||J.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${P("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${U(e=>!e.hideMark,m`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function ms(i,t,e,o){let s=is(0,1,(i-t)/(e-t));return o===Q.rtl&&(s=1-s),s}const lo={min:0,max:0,direction:Q.ltr,orientation:J.horizontal,disabled:!1};class Zt extends D{constructor(){super(...arguments);this.hideMark=!1,this.sliderDirection=Q.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=lo.direction||Q.ltr,this.sliderOrientation=lo.orientation||J.horizontal,this.sliderMaxPosition=lo.max,this.sliderMinPosition=lo.min;else{const t=this.parentNode,{min:e,max:o,direction:s,orientation:n,disabled:a}=t;a!==void 0&&(this.disabled=a),this.sliderDirection=s||Q.ltr,this.sliderOrientation=n||J.horizontal,this.sliderMaxPosition=o,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:Q.ltr,e=ms(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let o=Math.round((1-e)*100),s=Math.round(e*100);return s===Number.NaN&&o===Number.NaN&&(o=50,s=50),this.sliderOrientation===J.horizontal?t===Q.rtl?`right: ${s}%; left: ${o}%;`:`left: ${s}%; right: ${o}%;`:`top: ${s}%; bottom: ${o}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=E.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMinPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}r([p],Zt.prototype,"positionStyle",void 0);r([d],Zt.prototype,"position",void 0);r([d({attribute:"hide-mark",mode:"boolean"})],Zt.prototype,"hideMark",void 0);r([d({attribute:"disabled",mode:"boolean"})],Zt.prototype,"disabled",void 0);r([p],Zt.prototype,"sliderOrientation",void 0);r([p],Zt.prototype,"sliderMinPosition",void 0);r([p],Zt.prototype,"sliderMaxPosition",void 0);r([p],Zt.prototype,"sliderDirection",void 0);const kd=(i,t)=>m`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||J.horizontal}"
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
            <div ${P("track")} part="track-container" class="track">
                <slot name="track"></slot>
            </div>
            <slot></slot>
            <div
                ${P("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${e=>e.position}"
            >
                <slot name="thumb">${t.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class Cd extends D{}class Td extends Xt(Cd){constructor(){super(...arguments);this.proxy=document.createElement("input")}}var bs;(function(i){i.singleValue="single-value"})(bs||(bs={}));class vt extends Td{constructor(){super(...arguments);this.direction=Q.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=J.horizontal,this.mode=bs.singleValue,this.keypressHandler=t=>{if(t.key===pe)t.preventDefault(),this.value=`${this.min}`;else if(t.key===fe)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case oe:case _t:t.preventDefault(),this.increment();break;case ie:case qt:t.preventDefault(),this.decrement();break}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown),this.thumb[e]("touchstart",this.handleThumbMouseDown),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.preventDefault(),t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),window[e]("touchmove",this.handleMouseMove),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,o=this.orientation===J.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(o)}`},this.calculateNewValue=t=>{const e=ms(t,this.orientation===J.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===J.horizontal?this.trackWidth:this.trackHeight,this.direction),o=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(o)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const o=this.orientation===J.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(o)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const o=Math.round(e/this.step),s=e-o*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=s>=Number(this.step)/2?e-s+Number(this.step):e-s,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Fe(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==Q.rtl&&this.orientation!==J.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),o=e<Number(this.max)?`${e}`:`${this.max}`;this.value=o}decrement(){const t=this.direction!==Q.rtl&&this.orientation!==J.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),o=e>Number(this.min)?`${e}`:`${this.min}`;this.value=o}setThumbPositionForOrientation(t){const e=ms(Number(this.value),Number(this.min),Number(this.max),t),o=Math.round((1-e)*100);this.orientation===J.horizontal?this.position=this.isDragging?`right: ${o}%; transition: none;`:`right: ${o}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${o}%; transition: none;`:`bottom: ${o}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}r([d({attribute:"readonly",mode:"boolean"})],vt.prototype,"readOnly",void 0);r([p],vt.prototype,"direction",void 0);r([p],vt.prototype,"isDragging",void 0);r([p],vt.prototype,"position",void 0);r([p],vt.prototype,"trackWidth",void 0);r([p],vt.prototype,"trackMinWidth",void 0);r([p],vt.prototype,"trackHeight",void 0);r([p],vt.prototype,"trackLeft",void 0);r([p],vt.prototype,"trackMinHeight",void 0);r([p],vt.prototype,"valueTextFormatter",void 0);r([d({converter:w})],vt.prototype,"min",void 0);r([d({converter:w})],vt.prototype,"max",void 0);r([d({converter:w})],vt.prototype,"step",void 0);r([d],vt.prototype,"orientation",void 0);r([d],vt.prototype,"mode",void 0);const Id=(i,t)=>m`
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
            <slot ${Y("defaultSlottedNodes")}></slot>
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
`;class Fd extends D{}class Sd extends ss(Fd){constructor(){super(...arguments);this.proxy=document.createElement("input")}}class vs extends Sd{constructor(){super();this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case Wt:case gi:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}r([d({attribute:"readonly",mode:"boolean"})],vs.prototype,"readOnly",void 0);r([p],vs.prototype,"defaultSlottedNodes",void 0);const Dd=(i,t)=>m`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Rd extends D{}const Ed=(i,t)=>m`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class Yn extends D{}r([d({mode:"boolean"})],Yn.prototype,"disabled",void 0);const Od=(i,t)=>m`
    <template class="${e=>e.orientation}">
        ${kt(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Y("tabs")}></slot>

            ${U(e=>e.showActiveIndicator,m`
                    <div
                        ${P("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${wt(i,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Y("tabpanels")}></slot>
        </div>
    </template>
`;var co;(function(i){i.vertical="vertical",i.horizontal="horizontal"})(co||(co={}));class ae extends D{constructor(){super(...arguments);this.orientation=co.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",o=this.isHorizontal()?t:e;this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((s,n)=>{if(s.slot==="tab"&&this.isFocusableElement(s)){this.activeindicator&&(this.showActiveIndicator=!0);const a=this.tabIds[n],c=this.tabpanelIds[n];s.setAttribute("id",typeof a!="string"?`tab-${n+1}`:a),s.setAttribute("aria-selected",this.activeTabIndex===n?"true":"false"),s.setAttribute("aria-controls",typeof c!="string"?`panel-${n+1}`:c),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",this.activeTabIndex===n?"0":"-1"),this.activeTabIndex===n&&(this.activetab=s)}s.style[t]="",s.style[e]="",s.style[o]=`${n+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")})},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach((t,e)=>{const o=this.tabIds[e],s=this.tabpanelIds[e];t.setAttribute("id",typeof s!="string"?`panel-${e+1}`:s),t.setAttribute("aria-labelledby",typeof o!="string"?`tab-${e+1}`:o),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case ie:t.preventDefault(),this.adjustBackward(t);break;case oe:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case _t:t.preventDefault(),this.adjustBackward(t);break;case qt:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case pe:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case fe:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let o=0;for(o=this.activetab?e.indexOf(this.activetab)+1:1,o===e.length&&(o=0);o<e.length&&e.length>1;)if(this.isFocusableElement(e[o])){this.moveToTabByIndex(e,o);break}else{if(this.activetab&&o===e.indexOf(this.activetab))break;o+1>=e.length?o=0:o+=1}},this.adjustBackward=t=>{const e=this.tabs;let o=0;for(o=this.activetab?e.indexOf(this.activetab)-1:0,o=o<0?e.length-1:o;o>=0&&e.length>1;)if(this.isFocusableElement(e[o])){this.moveToTabByIndex(e,o);break}else o-1<0?o=e.length-1:o-=1},this.moveToTabByIndex=(t,e)=>{const o=t[e];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(o=>o.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>t.getAttribute("id"))}getTabPanelIds(){return this.tabpanels.map(t=>t.getAttribute("id"))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===co.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[o];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[o];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const a=n-s;this.activeIndicatorRef.style.transform=`${e}(${a}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Rn(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}r([d],ae.prototype,"orientation",void 0);r([d],ae.prototype,"activeid",void 0);r([p],ae.prototype,"tabs",void 0);r([p],ae.prototype,"tabpanels",void 0);r([d({mode:"boolean"})],ae.prototype,"activeindicator",void 0);r([p],ae.prototype,"activeIndicatorRef",void 0);r([p],ae.prototype,"showActiveIndicator",void 0);Z(ae,Ft);class Ld extends D{}class Ad extends Xt(Ld){constructor(){super(...arguments);this.proxy=document.createElement("textarea")}}var ho;(function(i){i.none="none",i.both="both",i.horizontal="horizontal",i.vertical="vertical"})(ho||(ho={}));class yt extends Ad{constructor(){super(...arguments);this.resize=ho.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}handleChange(){this.$emit("change")}}r([d({mode:"boolean"})],yt.prototype,"readOnly",void 0);r([d],yt.prototype,"resize",void 0);r([d({mode:"boolean"})],yt.prototype,"autofocus",void 0);r([d({attribute:"form"})],yt.prototype,"formId",void 0);r([d],yt.prototype,"list",void 0);r([d({converter:w})],yt.prototype,"maxlength",void 0);r([d({converter:w})],yt.prototype,"minlength",void 0);r([d],yt.prototype,"name",void 0);r([d],yt.prototype,"placeholder",void 0);r([d({converter:w,mode:"fromView"})],yt.prototype,"cols",void 0);r([d({converter:w,mode:"fromView"})],yt.prototype,"rows",void 0);r([d({mode:"boolean"})],yt.prototype,"spellcheck",void 0);r([p],yt.prototype,"defaultSlottedNodes",void 0);Z(yt,no);const Vd=(i,t)=>m`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==ho.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Y("defaultSlottedNodes")}></slot>
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
            ${P("control")}
        ></textarea>
    </template>
`,Pd=(i,t)=>m`
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
            ${kt(i,t)}
            <slot
                ${Y({filter:Ce(),property:"slottedItems"})}
            ></slot>
            ${wt(i,t)}
        </div>
    </template>
`,Qn=Object.freeze({[Xe.ArrowUp]:{[J.vertical]:-1},[Xe.ArrowDown]:{[J.vertical]:1},[Xe.ArrowLeft]:{[J.horizontal]:{[Q.ltr]:-1,[Q.rtl]:1}},[Xe.ArrowRight]:{[J.horizontal]:{[Q.ltr]:1,[Q.rtl]:-1}}});class Jt extends D{constructor(){super(...arguments);this._activeIndex=0,this.direction=Q.ltr,this.orientation=J.horizontal}get activeIndex(){return E.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=is(0,this.focusableElements.length-1,t),E.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var e;const o=(e=this.focusableElements)===null||e===void 0?void 0:e.indexOf(t.target);return o>-1&&this.activeIndex!==o&&this.setFocusedElement(o),!0}connectedCallback(){super.connectedCallback(),this.direction=Fe(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,o,s,n,a;return(a=(s=(o=(e=Qn[t])===null||e===void 0?void 0:e[this.orientation])===null||o===void 0?void 0:o[this.direction])!==null&&s!==void 0?s:(n=Qn[t])===null||n===void 0?void 0:n[this.orientation])!==null&&a!==void 0?a:0}keydownHandler(t){const e=t.key;if(!(e in Xe)||t.defaultPrevented||t.shiftKey)return!0;const o=this.getDirectionalIncrementer(e);if(!o)return!t.target.closest("[role=radiogroup]");const s=this.activeIndex+o;return this.focusableElements[s]&&t.preventDefault(),this.setFocusedElement(s),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){this.focusableElements=this.allSlottedItems.reduce(Jt.reduceFocusableItems,[]),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var o,s,n,a;const c=e.getAttribute("role")==="radio",h=(s=(o=e.$fastController)===null||o===void 0?void 0:o.definition.shadowOptions)===null||s===void 0?void 0:s.delegatesFocus,u=Array.from((a=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&a!==void 0?a:[]).some(v=>_n(v));return _n(e)||c||h||u?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Jt.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}}r([p],Jt.prototype,"direction",void 0);r([d],Jt.prototype,"orientation",void 0);r([p],Jt.prototype,"slottedItems",void 0);r([p],Jt.prototype,"slottedLabel",void 0);class uo{}r([d({attribute:"aria-labelledby"})],uo.prototype,"ariaLabelledby",void 0);r([d({attribute:"aria-label"})],uo.prototype,"ariaLabel",void 0);Z(uo,X);Z(Jt,Ft,uo);const Hd=(i,t)=>m`
        ${U(e=>e.tooltipVisible,m`
            <${i.tagFor(A)}
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
                ${P("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${i.tagFor(A)}>
        `)}
    `;var ve;(function(i){i.top="top",i.right="right",i.bottom="bottom",i.left="left",i.start="start",i.end="end"})(ve||(ve={}));class nt extends D{constructor(){super(...arguments);this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="true",this.verticalInset="false",this.horizontalScaling="anchor",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Q.ltr,this.delayTimer=null,this.isAnchorHoveredFocused=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd")},this.handleAnchorMouseOver=t=>{this.startHoverTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.clearDelayTimer()},this.handleAnchorFocusIn=t=>{this.startHoverTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.clearDelayTimer()},this.startHoverTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.delayTimer===null&&(this.delayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearDelayTimer=()=>{this.delayTimer!==null&&(clearTimeout(this.delayTimer),this.delayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case fi:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Fe(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),F.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{!this.tooltipVisible||(this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{!this.tooltipVisible||(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&this.updateLayout()}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(o=>{o.id===e&&this.startHoverTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateLayout(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.position){case ve.top:case ve.bottom:this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition=void 0,this.horizontalInset="true",this.verticalInset="false",this.horizontalScaling="anchor",this.verticalScaling="content";break;case ve.right:case ve.left:case ve.start:case ve.end:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="locktodefault",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=this.position,this.horizontalInset="false",this.verticalInset="true",this.horizontalScaling="content",this.verticalScaling="anchor";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.horizontalInset="true",this.verticalInset="false",this.horizontalScaling="anchor",this.verticalScaling="content";break}}}r([d({mode:"boolean"})],nt.prototype,"visible",void 0);r([d],nt.prototype,"anchor",void 0);r([d],nt.prototype,"delay",void 0);r([d],nt.prototype,"position",void 0);r([d({attribute:"auto-update-mode"})],nt.prototype,"autoUpdateMode",void 0);r([d({attribute:"horizontal-viewport-lock"})],nt.prototype,"horizontalViewportLock",void 0);r([d({attribute:"vertical-viewport-lock"})],nt.prototype,"verticalViewportLock",void 0);r([p],nt.prototype,"anchorElement",void 0);r([p],nt.prototype,"viewportElement",void 0);r([p],nt.prototype,"verticalPositioningMode",void 0);r([p],nt.prototype,"horizontalPositioningMode",void 0);r([p],nt.prototype,"horizontalInset",void 0);r([p],nt.prototype,"verticalInset",void 0);r([p],nt.prototype,"horizontalScaling",void 0);r([p],nt.prototype,"verticalScaling",void 0);r([p],nt.prototype,"verticalDefaultPosition",void 0);r([p],nt.prototype,"horizontalDefaultPosition",void 0);r([p],nt.prototype,"tooltipVisible",void 0);r([p],nt.prototype,"currentDirection",void 0);const zd=(i,t)=>m`
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
        ${Zo({property:"childItems",filter:Ce()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${U(e=>e.childItems&&e.childItemLength()>0,m`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,o)=>e.handleExpandCollapseButtonClick(o.event)}"
                            ${P("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${kt(i,t)}
                <slot></slot>
                ${wt(i,t)}
            </div>
        </div>
        ${U(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),m`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Y("items")}></slot>
                </div>
            `)}
    </template>
`;function Le(i){return _e(i)&&i.getAttribute("role")==="treeitem"}class rt extends D{constructor(){super(...arguments);this.expanded=!1,this.focusable=!1,this.handleExpandCollapseButtonClick=t=>{this.disabled||(t.preventDefault(),this.setExpanded(!this.expanded))},this.handleClick=t=>{if(!t.defaultPrevented)return t.composedPath().find(s=>s instanceof HTMLElement&&Le(s))===this&&this.handleSelected(),!0},this.isNestedItem=()=>Le(this.parentElement)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(o=>{Le(o)&&(o.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>Le(e));return t?t.length:0}handleSelected(t){this.$emit("selected-change",t)}setExpanded(t){this.expanded=t,this.$emit("expanded-change",this)}}r([d({mode:"boolean"})],rt.prototype,"expanded",void 0);r([d({mode:"boolean"})],rt.prototype,"selected",void 0);r([d({mode:"boolean"})],rt.prototype,"disabled",void 0);r([p],rt.prototype,"focusable",void 0);r([p],rt.prototype,"childItems",void 0);r([p],rt.prototype,"items",void 0);r([p],rt.prototype,"nested",void 0);r([p],rt.prototype,"renderCollapsedChildren",void 0);Z(rt,Ft);const Md=(i,t)=>m`
    <template
        role="tree"
        ${P("treeView")}
        @keydown="${(e,o)=>e.handleKeyDown(o.event)}"
        @focusout="${(e,o)=>e.handleBlur(o.event)}"
        @focusin="${(e,o)=>e.handleFocus(o.event)}"
    >
        <slot ${Y("slottedTreeItems")}></slot>
    </template>
`;class Fi extends D{constructor(){super(...arguments);this.handleBlur=t=>{const{relatedTarget:e,target:o}=t;o instanceof HTMLElement&&(e===null||!this.contains(e))&&this.setAttribute("tabindex","0")},this.handleFocus=t=>{const{relatedTarget:e,target:o}=t;if(o instanceof HTMLElement&&(e===null||!this.contains(e))){const s=this;o===this&&this.currentFocused instanceof rt&&(rt.focusItem(this.currentFocused),this.currentFocused.setAttribute("tabindex","0")),s.setAttribute("tabindex","-1")}},this.handleKeyDown=t=>{if(!this.treeItems)return!0;switch(t.key){case pe:this.treeItems&&this.treeItems.length&&(rt.focusItem(this.treeItems[0]),this.treeItems[0].setAttribute("tabindex","0"));break;case fe:this.treeItems&&this.treeItems.length&&(rt.focusItem(this.treeItems[this.treeItems.length-1]),this.treeItems[this.treeItems.length-1].setAttribute("tabindex","0"));break;case ie:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof rt&&e.childItemLength()>0&&(e.expanded=!1)}break;case oe:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof rt&&e.childItemLength()>0&&(e.expanded=!0)}break;case qt:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);break;case _t:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);break;case Wt:this.handleSelected(t.target);break;default:return!0}},this.setItems=()=>{let t=this.treeItems.findIndex(this.isSelectedElement);t===-1&&(t=this.treeItems.findIndex(this.isFocusableElement));for(let e=0;e<this.treeItems.length;e++)e===t&&(this.treeItems[e].setAttribute("tabindex","0"),this.currentFocused=this.treeItems[e]),this.treeItems[e].addEventListener("selected-change",this.handleItemSelected)},this.resetItems=()=>{for(let t=0;t<this.treeItems.length;t++)this.treeItems[t].removeEventListener("selected-change",this.handleItemSelected)},this.handleItemSelected=t=>{const e=t.target;e!==this.currentSelected&&this.handleSelected(e)},this.isFocusableElement=t=>Le(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(t,e){this.$fastController.isConnected&&(this.resetItems(),this.treeItems=this.getVisibleNodes(),this.setItems(),this.checkForNestedItems()&&this.slottedTreeItems.forEach(o=>{Le(o)&&(o.nested=!0)}))}checkForNestedItems(){return this.slottedTreeItems.some(t=>Le(t)&&t.querySelector("[role='treeitem']"))}connectedCallback(){super.connectedCallback(),this.treeItems=this.getVisibleNodes(),F.queueUpdate(()=>{const t=this.treeView.querySelector("[aria-selected='true']");t&&(this.currentSelected=t)})}focusNextNode(t,e){const o=this.getVisibleNodes();if(!o)return;const s=o.indexOf(e),n=o[s];(t<0&&s>0||t>0&&s<o.length-1)&&n.setAttribute("tabindex","-1");const a=o[o.indexOf(e)+t];_e(a)&&(rt.focusItem(a),a.setAttribute("tabindex","0"),this.currentFocused=a)}handleSelected(t){this.currentSelected!==t&&(t.setAttribute("tabindex","0"),this.currentSelected instanceof rt&&this.currentFocused&&(t.disabled||(this.currentSelected.selected=!1),this.currentFocused.setAttribute("tabindex","-1")),this.currentSelected||this.slottedTreeItems.forEach(e=>{e instanceof rt&&e.setAttribute("tabindex","-1")}),t.disabled||(t.selected=!0,this.currentSelected=t),this.currentFocused=t)}getVisibleNodes(){return vl(this,"[role='treeitem']")||[]}}r([d({attribute:"render-collapsed-nodes"})],Fi.prototype,"renderCollapsedNodes",void 0);r([p],Fi.prototype,"currentSelected",void 0);r([p],Fi.prototype,"nested",void 0);r([p],Fi.prototype,"slottedTreeItems",void 0);function le(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function ys(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Ae(i,t,e){return isNaN(i)?t:t+i*(e-t)}function Zn(i){return i*(Math.PI/180)}function Nd(i){return i*(180/Math.PI)}function Bd(i){const t=Math.round(le(i,0,255)).toString(16);return t.length===1?"0"+t:t}function xt(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function xs(i,t,e){if(i<=0)return t%360;if(i>=1)return e%360;const o=(t-e+360)%360,s=(e-t+360)%360;return o<=s?(t-o*i+360)%360:(t+o*i+360)%360}function at(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class Ve{constructor(t,e,o){this.h=t,this.s=e,this.l=o}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new Ve(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Ve(at(this.h,t),at(this.s,t),at(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Si{constructor(t,e,o){this.h=t,this.s=e,this.v=o}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.v)?new Si(t.h,t.s,t.v):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new Si(at(this.h,t),at(this.s,t),at(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class gt{constructor(t,e,o){this.l=t,this.a=e,this.b=o}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new gt(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new gt(at(this.l,t),at(this.a,t),at(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}gt.epsilon=216/24389;gt.kappa=24389/27;class ii{constructor(t,e,o){this.l=t,this.c=e,this.h=o}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.c)&&!isNaN(t.h)?new ii(t.l,t.c,t.h):null}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new ii(at(this.l,t),at(this.c,t),at(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class ot{constructor(t,e,o,s){this.r=t,this.g=e,this.b=o,this.a=typeof s=="number"&&!isNaN(s)?s:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new ot(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Ae(this.r,0,255))},${Math.round(Ae(this.g,0,255))},${Math.round(Ae(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Ae(this.r,0,255))},${Math.round(Ae(this.g,0,255))},${Math.round(Ae(this.b,0,255))},${le(this.a,0,1)})`}roundToPrecision(t){return new ot(at(this.r,t),at(this.g,t),at(this.b,t),at(this.a,t))}clamp(){return new ot(le(this.r,0,1),le(this.g,0,1),le(this.b,0,1),le(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return Bd(Ae(t,0,255))}}class Rt{constructor(t,e,o){this.x=t,this.y=e,this.z=o}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new Rt(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new Rt(at(this.x,t),at(this.y,t),at(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}Rt.whitePoint=new Rt(.95047,1,1.08883);function $s(i){return i.r*.2126+i.g*.7152+i.b*.0722}function ws(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return $s(new ot(t(i.r),t(i.g),t(i.b),1))}const Jn=(i,t)=>(i+.05)/(t+.05);function Kn(i,t){const e=ws(i),o=ws(t);return e>o?Jn(e,o):Jn(o,e)}function Di(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),o=t-e;let s=0;o!==0&&(t===i.r?s=60*((i.g-i.b)/o%6):t===i.g?s=60*((i.b-i.r)/o+2):s=60*((i.r-i.g)/o+4)),s<0&&(s+=360);const n=(t+e)/2;let a=0;return o!==0&&(a=o/(1-Math.abs(2*n-1))),new Ve(s,a,n)}function ks(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,o=e*(1-Math.abs(i.h/60%2-1)),s=i.l-e/2;let n=0,a=0,c=0;return i.h<60?(n=e,a=o,c=0):i.h<120?(n=o,a=e,c=0):i.h<180?(n=0,a=e,c=o):i.h<240?(n=0,a=o,c=e):i.h<300?(n=o,a=0,c=e):i.h<360&&(n=e,a=0,c=o),new ot(n+s,a+s,c+s,t)}function tr(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),o=t-e;let s=0;o!==0&&(t===i.r?s=60*((i.g-i.b)/o%6):t===i.g?s=60*((i.b-i.r)/o+2):s=60*((i.r-i.g)/o+4)),s<0&&(s+=360);let n=0;return t!==0&&(n=o/t),new Si(s,n,t)}function jd(i,t=1){const e=i.s*i.v,o=e*(1-Math.abs(i.h/60%2-1)),s=i.v-e;let n=0,a=0,c=0;return i.h<60?(n=e,a=o,c=0):i.h<120?(n=o,a=e,c=0):i.h<180?(n=0,a=e,c=o):i.h<240?(n=0,a=o,c=e):i.h<300?(n=o,a=0,c=e):i.h<360&&(n=e,a=0,c=o),new ot(n+s,a+s,c+s,t)}function Ud(i){let t=0,e=0;return i.h!==0&&(t=Math.cos(Zn(i.h))*i.c,e=Math.sin(Zn(i.h))*i.c),new gt(i.l,t,e)}function qd(i){let t=0;(Math.abs(i.b)>.001||Math.abs(i.a)>.001)&&(t=Nd(Math.atan2(i.b,i.a))),t<0&&(t+=360);const e=Math.sqrt(i.a*i.a+i.b*i.b);return new ii(i.l,e,t)}function _d(i){const t=(i.l+16)/116,e=t+i.a/500,o=t-i.b/200,s=Math.pow(e,3),n=Math.pow(t,3),a=Math.pow(o,3);let c=0;s>gt.epsilon?c=s:c=(116*e-16)/gt.kappa;let h=0;i.l>gt.epsilon*gt.kappa?h=n:h=i.l/gt.kappa;let u=0;return a>gt.epsilon?u=a:u=(116*o-16)/gt.kappa,c=Rt.whitePoint.x*c,h=Rt.whitePoint.y*h,u=Rt.whitePoint.z*u,new Rt(c,h,u)}function Gd(i){function t(h){return h>gt.epsilon?Math.pow(h,1/3):(gt.kappa*h+16)/116}const e=t(i.x/Rt.whitePoint.x),o=t(i.y/Rt.whitePoint.y),s=t(i.z/Rt.whitePoint.z),n=116*o-16,a=500*(e-o),c=200*(o-s);return new gt(n,a,c)}function Cs(i){function t(h){return h<=.04045?h/12.92:Math.pow((h+.055)/1.055,2.4)}const e=t(i.r),o=t(i.g),s=t(i.b),n=e*.4124564+o*.3575761+s*.1804375,a=e*.2126729+o*.7151522+s*.072175,c=e*.0193339+o*.119192+s*.9503041;return new Rt(n,a,c)}function er(i,t=1){function e(a){return a<=.0031308?a*12.92:1.055*Math.pow(a,1/2.4)-.055}const o=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),s=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new ot(o,s,n,t)}function Ts(i){return Gd(Cs(i))}function ir(i,t=1){return er(_d(i),t)}function Is(i){return qd(Ts(i))}function or(i,t=1){return ir(Ud(i),t)}function sr(i,t,e=18){const o=Is(i);let s=o.c+t*e;return s<0&&(s=0),or(new ii(o.l,s,o.h))}function Fs(i,t){return i*t}function nr(i,t){return new ot(Fs(i.r,t.r),Fs(i.g,t.g),Fs(i.b,t.b),1)}function Ss(i,t){return i<.5?le(2*t*i,0,1):le(1-2*(1-t)*(1-i),0,1)}function rr(i,t){return new ot(Ss(i.r,t.r),Ss(i.g,t.g),Ss(i.b,t.b),1)}var ar;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(ar||(ar={}));function Wd(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new ot(xt(i,t.r,e.r),xt(i,t.g,e.g),xt(i,t.b,e.b),xt(i,t.a,e.a))}function Xd(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Ve(xs(i,t.h,e.h),xt(i,t.s,e.s),xt(i,t.l,e.l))}function Yd(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Si(xs(i,t.h,e.h),xt(i,t.s,e.s),xt(i,t.v,e.v))}function Qd(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Rt(xt(i,t.x,e.x),xt(i,t.y,e.y),xt(i,t.z,e.z))}function Zd(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new gt(xt(i,t.l,e.l),xt(i,t.a,e.a),xt(i,t.b,e.b))}function Jd(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new ii(xt(i,t.l,e.l),xt(i,t.c,e.c),xs(i,t.h,e.h))}var At;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(At||(At={}));function Ri(i,t,e,o){if(isNaN(i)||i<=0)return e;if(i>=1)return o;switch(t){case At.HSL:return ks(Xd(i,Di(e),Di(o)));case At.HSV:return jd(Yd(i,tr(e),tr(o)));case At.XYZ:return er(Qd(i,Cs(e),Cs(o)));case At.LAB:return ir(Zd(i,Ts(e),Ts(o)));case At.LCH:return or(Jd(i,Is(e),Is(o)));default:return Wd(i,e,o)}}class Mt{constructor(t){if(t==null||t.length===0)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(t==null||t.length===0)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let o=0;o<t.length;o++)o===0?e[o]={color:t[o],position:0}:o===t.length-1?e[o]={color:t[o],position:1}:e[o]={color:t[o],position:o*(1/(t.length-1))};return new Mt(e)}getColor(t,e=At.RGB){if(this.stops.length===1)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let o=0;for(let a=0;a<this.stops.length;a++)this.stops[a].position<=t&&(o=a);let s=o+1;s>=this.stops.length&&(s=this.stops.length-1);const n=(t-this.stops[o].position)*(1/(this.stops[s].position-this.stops[o].position));return Ri(n,e,this.stops[o].color,this.stops[s].color)}trim(t,e,o=At.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new Mt([{color:this.getColor(t,o),position:0}]);const s=[];for(let c=0;c<this.stops.length;c++)this.stops[c].position>=t&&this.stops[c].position<=e&&s.push(this.stops[c]);if(s.length===0)return new Mt([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);s[0].position!==t&&s.unshift({color:this.getColor(t),position:t}),s[s.length-1].position!==e&&s.push({color:this.getColor(e),position:e});const n=e-t,a=new Array(s.length);for(let c=0;c<s.length;c++)a[c]={color:s[c].color,position:(s[c].position-t)/n};return new Mt(a)}findNextColor(t,e,o=!1,s=At.RGB,n=.005,a=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const c=this.getColor(t,s),h=o?0:1,u=this.getColor(h,s);if(Kn(c,u)<=e)return h;let b=o?0:t,$=o?t:0,_=h,B=0;for(;B<=a;){_=Math.abs($-b)/2+b;const j=this.getColor(_,s),tt=Kn(c,j);if(Math.abs(tt-e)<=n)return _;tt>e?o?b=_:$=_:o?$=_:b=_,B++}return _}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new Mt(t)}sortColorScaleStops(t){return t.sort((e,o)=>{const s=e.position,n=o.position;return s<n?-1:s>n?1:0})}}const Kd=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function oi(i){const t=Kd.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const s=e.charAt(0),n=e.charAt(1),a=e.charAt(2);e=s.concat(s,n,n,a,a)}const o=parseInt(e,16);return isNaN(o)?null:new ot(ys((o&16711680)>>>16,0,255),ys((o&65280)>>>8,0,255),ys(o&255,0,255),1)}class ye{constructor(t){this.config=Object.assign({},ye.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const o in t)this.config[o]&&(this.config[o].equalValue?this.config[o].equalValue(t[o])||(this.config[o]=t[o],e=!0):t[o]!==this.config[o]&&(this.config[o]=t[o],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=Di(this.config.baseColor),o=new Mt([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark),s=o.getColor(0),n=o.getColor(1);let a=s,c=n;if(t.s>=this.config.saturationAdjustmentCutoff&&(a=sr(a,this.config.saturationLight),c=sr(c,this.config.saturationDark)),this.config.multiplyLight!==0){const h=nr(this.config.baseColor,a);a=Ri(this.config.multiplyLight,this.config.interpolationMode,a,h)}if(this.config.multiplyDark!==0){const h=nr(this.config.baseColor,c);c=Ri(this.config.multiplyDark,this.config.interpolationMode,c,h)}if(this.config.overlayLight!==0){const h=rr(this.config.baseColor,a);a=Ri(this.config.overlayLight,this.config.interpolationMode,a,h)}if(this.config.overlayDark!==0){const h=rr(this.config.baseColor,c);c=Ri(this.config.overlayDark,this.config.interpolationMode,c,h)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Mt([{position:0,color:this.config.baseColor},{position:1,color:c.clamp()}]):this.config.baseScalePosition>=1?new Mt([{position:0,color:a.clamp()},{position:1,color:this.config.baseColor}]):new Mt([{position:0,color:a.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:c.clamp()}]):new Mt([{position:0,color:a.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:c.clamp()}])}}ye.defaultPaletteConfig={baseColor:oi("#808080"),steps:11,interpolationMode:At.RGB,scaleColorLight:new ot(1,1,1,1),scaleColorDark:new ot(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};ye.greyscalePaletteConfig={baseColor:oi("#808080"),steps:11,interpolationMode:At.RGB,scaleColorLight:new ot(1,1,1,1),scaleColorDark:new ot(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};ye.defaultPaletteConfig.scaleColorLight,ye.defaultPaletteConfig.scaleColorDark;class po{constructor(t){this.palette=[],this.config=Object.assign({},po.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,o=.06,s=new ot(e,e,e,1),n=94,c=new ye(Object.assign(Object.assign({},ye.greyscalePaletteConfig),{baseColor:s,baseScalePosition:(1-e)*100/n,steps:t})).palette,h=$s(this.config.baseColor),u=Di(this.config.baseColor).l,v=(h+u)/2,$=this.matchRelativeLuminanceIndex(v,c)/(t-1),B=this.matchRelativeLuminanceIndex(e,c)/(t-1),j=Di(this.config.baseColor),tt=ks(Ve.fromObject({h:j.h,s:j.s,l:e})),we=ks(Ve.fromObject({h:j.h,s:j.s,l:o})),te=new Array(5);te[0]={position:0,color:new ot(1,1,1,1)},te[1]={position:$,color:this.config.baseColor},te[2]={position:B,color:tt},te[3]={position:.99,color:we},te[4]={position:1,color:new ot(0,0,0,1)};const oa=new Mt(te);this.palette=new Array(t);for(let zi=0;zi<t;zi++){const sa=oa.getColor(zi/(t-1),At.RGB);this.palette[zi]=sa}}matchRelativeLuminanceIndex(t,e){let o=Number.MAX_VALUE,s=0,n=0;const a=e.length;for(;n<a;n++){const c=Math.abs($s(e[n])-t);c<o&&(o=c,s=n)}return s}}po.defaultPaletteConfig={baseColor:oi("#808080"),steps:94};function lr(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,o=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(o.relativeLuminance+.05)}const ce=Object.freeze({create(i,t,e){return new fo(i,t,e)},from(i){return new fo(i.r,i.g,i.b)}});function th(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class fo extends ot{constructor(t,e,o){super(t,e,o,1);this.toColorString=this.toStringHexRGB,this.contrast=lr.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ws(this)}static fromObject(t){return new fo(t.r,t.g,t.b)}}function Ds(i,t,e=0,o=i.length-1){if(o===e)return i[e];const s=Math.floor((o-e)/2)+e;return t(i[s])?Ds(i,t,e,s):Ds(i,t,s+1,o)}const eh=(-.1+Math.sqrt(.21))/2;function ih(i){return i.relativeLuminance<=eh}function Pe(i){return ih(i)?-1:1}function oh(i,t,e){return typeof i=="number"?go.from(ce.create(i,t,e)):go.from(i)}function sh(i){return th(i)?mo.from(i):mo.from(ce.create(i.r,i.g,i.b))}const go=Object.freeze({create:oh,from:sh});class mo{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,o,s){o===void 0&&(o=this.closestIndexOf(t));let n=this.swatches;const a=this.lastIndex;let c=o;s===void 0&&(s=Pe(t));const h=u=>lr(t,u)>=e;return s===-1&&(n=this.reversedSwatches,c=a-c),Ds(n,h,c,a)}get(t){return this.swatches[t]||this.swatches[le(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const o=this.swatches.reduce((s,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(s.relativeLuminance-t.relativeLuminance)?n:s);return e=this.swatches.indexOf(o),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new mo(t,Object.freeze(new po({baseColor:ot.fromObject(t)}).palette.map(e=>{const o=oi(e.toStringHexRGB());return ce.create(o.r,o.g,o.b)})))}}function nh(i,t,e,o,s,n,a,c,h){const u=i.source,v=t.closestIndexOf(e),b=Math.max(a,c,h),$=v>=b?-1:1,B=i.closestIndexOf(u),j=B+$*-1*o,tt=j+$*s,we=j+$*n;return{rest:i.get(j),hover:i.get(B),active:i.get(tt),focus:i.get(we)}}function rh(i,t,e,o,s,n,a){const c=i.source,h=i.closestIndexOf(c),u=Pe(t),v=h+(u===1?Math.min(o,s):Math.max(u*o,u*s)),b=i.colorContrast(t,e,v,u),$=i.closestIndexOf(b),_=$+u*Math.abs(o-s),B=u===1?o<s:u*o>u*s;let j,tt;return B?(j=$,tt=_):(j=_,tt=$),{rest:i.get(j),hover:i.get(tt),active:i.get(j+u*n),focus:i.get(j+u*a)}}const cr=ce.create(1,1,1),ah=ce.create(0,0,0),lh=ce.create(.5,.5,.5),Rs=oi("#DA1A5F"),ch=ce.create(Rs.r,Rs.g,Rs.b);function dh(i,t){return i.contrast(cr)>=t?cr:ah}function hh(i,t,e,o,s,n){const a=i.closestIndexOf(t),c=Math.max(e,o,s,n),h=a>=c?-1:1;return{rest:i.get(a+h*e),hover:i.get(a+h*o),active:i.get(a+h*s),focus:i.get(a+h*n)}}function uh(i,t,e,o,s,n){const a=Pe(t),c=i.closestIndexOf(t);return{rest:i.get(c-a*e),hover:i.get(c-a*o),active:i.get(c-a*s),focus:i.get(c-a*n)}}function ph(i,t,e){const o=i.closestIndexOf(t);return i.get(o-(o<e?e*-1:e))}function fh(i,t,e,o,s,n,a,c,h,u){const v=Math.max(e,o,s,n,a,c,h,u),b=i.closestIndexOf(t),$=b>=v?-1:1;return{rest:i.get(b+$*e),hover:i.get(b+$*o),active:i.get(b+$*s),focus:i.get(b+$*n)}}function gh(i,t,e,o,s,n){const a=Pe(t),c=i.closestIndexOf(i.colorContrast(t,4.5)),h=c+a*Math.abs(e-o),u=a===1?e<o:a*e>a*o;let v,b;return u?(v=c,b=h):(v=h,b=c),{rest:i.get(v),hover:i.get(b),active:i.get(v+a*s),focus:i.get(v+a*n)}}function mh(i,t){return i.colorContrast(t,3.5)}function bh(i,t,e){return i.colorContrast(e,3.5,i.closestIndexOf(i.source),Pe(t)*-1)}function vh(i,t){return i.colorContrast(t,14)}function yh(i,t){return i.colorContrast(t,4.5)}function bo(i){return ce.create(i,i,i)}var Es;(function(i){i[i.LightMode=1]="LightMode",i[i.DarkMode=.23]="DarkMode"})(Es||(Es={}));function xh(i,t,e){return i.get(i.closestIndexOf(bo(t))+e)}function $h(i,t,e){const o=i.closestIndexOf(bo(t))-e;return i.get(o-e)}function wh(i,t){return i.get(i.closestIndexOf(bo(t)))}function Os(i,t,e,o,s,n){return Math.max(i.closestIndexOf(bo(t))+e,o,s,n)}function kh(i,t,e,o,s,n){return i.get(Os(i,t,e,o,s,n))}function Ch(i,t,e,o,s,n){return i.get(Os(i,t,e,o,s,n)+e)}function Th(i,t,e,o,s,n){return i.get(Os(i,t,e,o,s,n)+e*2)}function Ih(i,t,e,o,s,n){const a=i.closestIndexOf(t),c=Pe(t),h=a+c*e,u=h+c*(o-e),v=h+c*(s-e),b=h+c*(n-e);return{rest:i.get(h),hover:i.get(u),active:i.get(v),focus:i.get(b)}}function Fh(i,t,e){return i.get(i.closestIndexOf(t)+Pe(t)*e)}const{create:f}=eo,W=f("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),vo=f("base-height-multiplier").withDefault(10),Sh=f("base-horizontal-spacing-multiplier").withDefault(3),He=f("base-layer-luminance").withDefault(Es.DarkMode),O=f("control-corner-radius").withDefault(4),xe=f("density").withDefault(0),y=f("design-unit").withDefault(4),yo=f("direction").withDefault(Q.ltr),lt=f("disabled-opacity").withDefault(.3),I=f("stroke-width").withDefault(1),H=f("focus-stroke-width").withDefault(2),z=f("type-ramp-base-font-size").withDefault("14px"),q=f("type-ramp-base-line-height").withDefault("20px"),xo=f("type-ramp-minus-1-font-size").withDefault("12px"),$o=f("type-ramp-minus-1-line-height").withDefault("16px"),Dh=f("type-ramp-minus-2-font-size").withDefault("10px"),Rh=f("type-ramp-minus-2-line-height").withDefault("16px"),Eh=f("type-ramp-plus-1-font-size").withDefault("16px"),Oh=f("type-ramp-plus-1-line-height").withDefault("24px"),Lh=f("type-ramp-plus-2-font-size").withDefault("20px"),Ah=f("type-ramp-plus-2-line-height").withDefault("28px"),dr=f("type-ramp-plus-3-font-size").withDefault("28px"),hr=f("type-ramp-plus-3-line-height").withDefault("36px"),Vh=f("type-ramp-plus-4-font-size").withDefault("34px"),Ph=f("type-ramp-plus-4-line-height").withDefault("44px"),Hh=f("type-ramp-plus-5-font-size").withDefault("46px"),zh=f("type-ramp-plus-5-line-height").withDefault("56px"),Mh=f("type-ramp-plus-6-font-size").withDefault("60px"),Nh=f("type-ramp-plus-6-line-height").withDefault("72px"),Bh=f("accent-fill-rest-delta").withDefault(0),ur=f("accent-fill-hover-delta").withDefault(4),pr=f("accent-fill-active-delta").withDefault(-5),fr=f("accent-fill-focus-delta").withDefault(0),gr=f("accent-foreground-rest-delta").withDefault(0),mr=f("accent-foreground-hover-delta").withDefault(6),br=f("accent-foreground-active-delta").withDefault(-4),vr=f("accent-foreground-focus-delta").withDefault(0),ze=f("neutral-fill-rest-delta").withDefault(7),Me=f("neutral-fill-hover-delta").withDefault(10),Ne=f("neutral-fill-active-delta").withDefault(5),Ls=f("neutral-fill-focus-delta").withDefault(0),yr=f("neutral-fill-input-rest-delta").withDefault(0),xr=f("neutral-fill-input-hover-delta").withDefault(0),$r=f("neutral-fill-input-active-delta").withDefault(0),wr=f("neutral-fill-input-focus-delta").withDefault(0),kr=f("neutral-fill-stealth-rest-delta").withDefault(0),Cr=f("neutral-fill-stealth-hover-delta").withDefault(5),Tr=f("neutral-fill-stealth-active-delta").withDefault(3),Ir=f("neutral-fill-stealth-focus-delta").withDefault(0),jh=f("neutral-fill-strong-rest-delta").withDefault(0),Fr=f("neutral-fill-strong-hover-delta").withDefault(8),Sr=f("neutral-fill-strong-active-delta").withDefault(-5),Dr=f("neutral-fill-strong-focus-delta").withDefault(0),Be=f("neutral-fill-layer-rest-delta").withDefault(3),Rr=f("neutral-stroke-rest-delta").withDefault(25),Er=f("neutral-stroke-hover-delta").withDefault(40),Or=f("neutral-stroke-active-delta").withDefault(16),Lr=f("neutral-stroke-focus-delta").withDefault(25),Ar=f("neutral-stroke-divider-rest-delta").withDefault(8),ut=f({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(go.create(lh)),wo=f({name:"accent-palette",cssCustomPropertyName:null}).withDefault(go.create(ch)),Uh=f({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>xh(ut.getValueFor(i),He.getValueFor(i),Be.getValueFor(i))});f("neutral-layer-card-container").withDefault(i=>Uh.getValueFor(i).evaluate(i));const qh=f({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>$h(ut.getValueFor(i),He.getValueFor(i),Be.getValueFor(i))}),Ei=f("neutral-layer-floating").withDefault(i=>qh.getValueFor(i).evaluate(i)),_h=f({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>wh(ut.getValueFor(i),He.getValueFor(i))}),Gh=f("neutral-layer-1").withDefault(i=>_h.getValueFor(i).evaluate(i)),Wh=f({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>kh(ut.getValueFor(i),He.getValueFor(i),Be.getValueFor(i),ze.getValueFor(i),Me.getValueFor(i),Ne.getValueFor(i))}),Xh=f("neutral-layer-2").withDefault(i=>Wh.getValueFor(i).evaluate(i)),Yh=f({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Ch(ut.getValueFor(i),He.getValueFor(i),Be.getValueFor(i),ze.getValueFor(i),Me.getValueFor(i),Ne.getValueFor(i))}),As=f("neutral-layer-3").withDefault(i=>Yh.getValueFor(i).evaluate(i)),Qh=f({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Th(ut.getValueFor(i),He.getValueFor(i),Be.getValueFor(i),ze.getValueFor(i),Me.getValueFor(i),Ne.getValueFor(i))});f("neutral-layer-4").withDefault(i=>Qh.getValueFor(i).evaluate(i));const M=f("fill-color").withDefault(i=>Gh.getValueFor(i));var Oi;(function(i){i[i.normal=4.5]="normal",i[i.large=7]="large"})(Oi||(Oi={}));const ko=f({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>nh(wo.getValueFor(i),ut.getValueFor(i),t||M.getValueFor(i),ur.getValueFor(i),pr.getValueFor(i),fr.getValueFor(i),ze.getValueFor(i),Me.getValueFor(i),Ne.getValueFor(i))}),G=f("accent-fill-rest").withDefault(i=>ko.getValueFor(i).evaluate(i).rest),ct=f("accent-fill-hover").withDefault(i=>ko.getValueFor(i).evaluate(i).hover),st=f("accent-fill-active").withDefault(i=>ko.getValueFor(i).evaluate(i).active),Co=f("accent-fill-focus").withDefault(i=>ko.getValueFor(i).evaluate(i).focus),Vr=i=>(t,e)=>dh(e||G.getValueFor(t),i),To=f({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Vr(Oi.normal)(i,t)}),Gt=f("foreground-on-accent-rest").withDefault(i=>To.getValueFor(i).evaluate(i,G.getValueFor(i))),de=f("foreground-on-accent-hover").withDefault(i=>To.getValueFor(i).evaluate(i,ct.getValueFor(i))),Nt=f("foreground-on-accent-active").withDefault(i=>To.getValueFor(i).evaluate(i,st.getValueFor(i))),Pr=f("foreground-on-accent-focus").withDefault(i=>To.getValueFor(i).evaluate(i,Co.getValueFor(i))),Io=f({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Vr(Oi.large)(i,t)});f("foreground-on-accent-rest-large").withDefault(i=>Io.getValueFor(i).evaluate(i,G.getValueFor(i)));f("foreground-on-accent-hover-large").withDefault(i=>Io.getValueFor(i).evaluate(i,ct.getValueFor(i)));f("foreground-on-accent-active-large").withDefault(i=>Io.getValueFor(i).evaluate(i,st.getValueFor(i)));f("foreground-on-accent-focus-large").withDefault(i=>Io.getValueFor(i).evaluate(i,Co.getValueFor(i)));const Zh=i=>(t,e)=>rh(wo.getValueFor(t),e||M.getValueFor(t),i,gr.getValueFor(t),mr.getValueFor(t),br.getValueFor(t),vr.getValueFor(t)),Fo=f({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Zh(Oi.normal)(i,t)}),It=f("accent-foreground-rest").withDefault(i=>Fo.getValueFor(i).evaluate(i).rest),je=f("accent-foreground-hover").withDefault(i=>Fo.getValueFor(i).evaluate(i).hover),Kt=f("accent-foreground-active").withDefault(i=>Fo.getValueFor(i).evaluate(i).active);f("accent-foreground-focus").withDefault(i=>Fo.getValueFor(i).evaluate(i).focus);const si=f({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>hh(ut.getValueFor(i),t||M.getValueFor(i),ze.getValueFor(i),Me.getValueFor(i),Ne.getValueFor(i),Ls.getValueFor(i))}),mt=f("neutral-fill-rest").withDefault(i=>si.getValueFor(i).evaluate(i).rest),$e=f("neutral-fill-hover").withDefault(i=>si.getValueFor(i).evaluate(i).hover),Hr=f("neutral-fill-active").withDefault(i=>si.getValueFor(i).evaluate(i).active);f("neutral-fill-focus").withDefault(i=>si.getValueFor(i).evaluate(i).focus);const So=f({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>uh(ut.getValueFor(i),t||M.getValueFor(i),yr.getValueFor(i),xr.getValueFor(i),$r.getValueFor(i),wr.getValueFor(i))}),he=f("neutral-fill-input-rest").withDefault(i=>So.getValueFor(i).evaluate(i).rest),Vt=f("neutral-fill-input-hover").withDefault(i=>So.getValueFor(i).evaluate(i).hover),Li=f("neutral-fill-input-active").withDefault(i=>So.getValueFor(i).evaluate(i).active);f("neutral-fill-input-focus").withDefault(i=>So.getValueFor(i).evaluate(i).focus);const ni=f({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>fh(ut.getValueFor(i),t||M.getValueFor(i),kr.getValueFor(i),Cr.getValueFor(i),Tr.getValueFor(i),Ir.getValueFor(i),ze.getValueFor(i),Me.getValueFor(i),Ne.getValueFor(i),Ls.getValueFor(i))}),Ue=f("neutral-fill-stealth-rest").withDefault(i=>ni.getValueFor(i).evaluate(i).rest),zr=f("neutral-fill-stealth-hover").withDefault(i=>ni.getValueFor(i).evaluate(i).hover),Mr=f("neutral-fill-stealth-active").withDefault(i=>ni.getValueFor(i).evaluate(i).active);f("neutral-fill-stealth-focus").withDefault(i=>ni.getValueFor(i).evaluate(i).focus);const Do=f({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>gh(ut.getValueFor(i),t||M.getValueFor(i),jh.getValueFor(i),Fr.getValueFor(i),Sr.getValueFor(i),Dr.getValueFor(i))});f("neutral-fill-strong-rest").withDefault(i=>Do.getValueFor(i).evaluate(i).rest);f("neutral-fill-strong-hover").withDefault(i=>Do.getValueFor(i).evaluate(i).hover);f("neutral-fill-strong-active").withDefault(i=>Do.getValueFor(i).evaluate(i).active);f("neutral-fill-strong-focus").withDefault(i=>Do.getValueFor(i).evaluate(i).focus);const Vs=f({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>ph(ut.getValueFor(i),t||M.getValueFor(i),Be.getValueFor(i))});f("neutral-fill-layer-rest").withDefault(i=>Vs.getValueFor(i).evaluate(i));const Jh=f({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>mh(ut.getValueFor(i),M.getValueFor(i))}),L=f("focus-stroke-outer").withDefault(i=>Jh.getValueFor(i).evaluate(i)),Kh=f({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>bh(wo.getValueFor(i),M.getValueFor(i),L.getValueFor(i))}),Ro=f("focus-stroke-inner").withDefault(i=>Kh.getValueFor(i).evaluate(i)),tu=f({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>yh(ut.getValueFor(i),M.getValueFor(i))}),Ai=f("neutral-foreground-hint").withDefault(i=>tu.getValueFor(i).evaluate(i)),eu=f({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>vh(ut.getValueFor(i),M.getValueFor(i))}),C=f("neutral-foreground-rest").withDefault(i=>eu.getValueFor(i).evaluate(i)),Eo=f({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:i=>Ih(ut.getValueFor(i),M.getValueFor(i),Rr.getValueFor(i),Er.getValueFor(i),Or.getValueFor(i),Lr.getValueFor(i))}),Bt=f("neutral-stroke-rest").withDefault(i=>Eo.getValueFor(i).evaluate(i).rest),Vi=f("neutral-stroke-hover").withDefault(i=>Eo.getValueFor(i).evaluate(i).hover),Ps=f("neutral-stroke-active").withDefault(i=>Eo.getValueFor(i).evaluate(i).active),iu=f("neutral-stroke-focus").withDefault(i=>Eo.getValueFor(i).evaluate(i).focus),ou=f({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(i,t)=>Fh(ut.getValueFor(i),t||M.getValueFor(i),Ar.getValueFor(i))}),Pi=f("neutral-stroke-divider-rest").withDefault(i=>ou.getValueFor(i).evaluate(i)),su=(i,t)=>g`
        ${V("flex")} :host {
            box-sizing: border-box;
            flex-direction: column;
            font-family: ${W};
            font-size: ${xo};
            line-height: ${$o};
            color: ${C};
            border-top: calc(${I} * 1px) solid ${Pi};
        }
    `,S=sn`(${vo} + ${xe}) * ${y}`,nu=(i,t)=>g`
    ${V("flex")} :host {
        box-sizing: border-box;
        font-family: ${W};
        flex-direction: column;
        font-size: ${xo};
        line-height: ${$o};
        border-bottom: calc(${I} * 1px) solid ${Pi};
    }

    .region {
        display: none;
        padding: calc((6 + (${y} * 2 * ${xe})) * 1px);
    }

    .heading {
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr auto calc(${S} * 1px);
    }

    .button {
        appearance: none;
        border: none;
        background: none;
        grid-column: 2;
        grid-row: 1;
        outline: none;
        padding: 0 calc((6 + (${y} * 2 * ${xe})) * 1px);
        text-align: left;
        height: calc(${S} * 1px);
        color: ${C};
        cursor: pointer;
        font-family: inherit;
    }

    .button:hover {
        color: ${C};
    }

    .button:active {
        color: ${C};
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

    .button:${x}::before {
        outline: none;
        border: calc(${H} * 1px) solid ${L};
        border-radius: calc(${O} * 1px);
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
        fill: ${G};
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
        padding-inline-start: calc(${y} * 1px);
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
`.withBehaviors(R(g`
            .button:${x}::before {
                border-color: ${l.Highlight};
            }
            :host slot[name="collapsed-icon"],
            :host([expanded]) slot[name="expanded-icon"] {
                fill: ${l.ButtonText};
            }
        `)),ru=Te.compose({baseName:"accordion-item",template:il,styles:nu,collapsedIcon:`
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
    `}),au=os.compose({baseName:"accordion",template:ml,styles:su}),lu="0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))",cu="0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))",ri=`box-shadow: ${lu}, ${cu};`,Nr=g`
    ${V("inline-flex")} :host {
        font-family: ${W};
        outline: none;
        font-size: ${z};
        line-height: ${q};
        height: calc(${S} * 1px);
        min-width: calc(${S} * 1px);
        background-color: ${mt};
        color: ${C};
        border-radius: calc(${O} * 1px);
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
        padding: 0 calc((10 + (${y} * 2 * ${xe})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${I} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${$e};
    }

    :host(:active) {
        background-color: ${Hr};
    }

    .control:${x} {
        border-color: ${L};
        box-shadow: 0 0 0 calc((${H} - ${I}) * 1px) ${L} inset;
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
`.withBehaviors(R(g`
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

            .control:${x} {
              forced-color-adjust: none;
              background-color: ${l.Highlight};
              border-color: ${l.ButtonText};
              box-shadow: 0 0 0 calc((${H} - ${I}) * 1px) ${l.ButtonText} inset;
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
            :host([href]) .control:${x}{
              forced-color-adjust: none;
              background: ${l.ButtonFace};
              border-color: ${l.LinkText};
              box-shadow: 0 0 0 1px ${l.LinkText} inset;
              color: ${l.LinkText};
              fill: currentColor;
            }
        `)),Br=g`
    :host([appearance="accent"]) {
        background: ${G};
        color: ${Gt};
    }

    :host([appearance="accent"]:hover) {
        background: ${ct};
        color: ${de};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${st};
        color: ${Nt};
    }

    :host([appearance="accent"]) .control:${x} {
        box-shadow: 0 0 0 calc((${H} - ${I}) * 1px) ${L} inset,
            0 0 0 calc((${H} + ${I}) * 1px) ${Ro} inset;
    }
`.withBehaviors(R(g`
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

            :host([appearance="accent"]) .control:${x} {
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 calc(${H} * 1px) ${l.HighlightText} inset;
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

            :host([appearance="accent"][href]) .control:${x} {
                border-color: ${l.LinkText};
                box-shadow: 0 0 0 calc(${H} * 1px) ${l.HighlightText} inset;
            }
        `)),du=g`
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
        color: ${It};
        border-bottom: calc(${I} * 1px) solid ${It};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${je};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Kt};
    }

    :host([appearance="hypertext"]) .control:${x} {
        border-bottom: calc(${H} * 1px) solid ${L};
        margin-bottom: calc(calc(${I} - ${H}) * 1px);
    }
`.withBehaviors(R(g`
            :host([appearance="hypertext"]:hover) {
                background-color: ${l.ButtonFace};
                color: ${l.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${x} {
                color: ${l.LinkText};
                border-bottom-color: ${l.LinkText};
                box-shadow: none;
            }
        `)),jr=g`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${It};
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
        color: ${je};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Kt};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${I} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${je};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Kt};
    }

    :host([appearance="lightweight"]) .control:${x} .content::before {
        background: ${C};
        height: calc(${H} * 1px);
    }
`.withBehaviors(R(g`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${x} {
                forced-color-adjust: none;
                background: ${l.ButtonFace};
                color: ${l.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${x} .content::before {
                background: ${l.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${x} {
                background: ${l.ButtonFace};
                box-shadow: none;
                color: ${l.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${x} .content::before {
                background: ${l.LinkText};
            }
        `)),Ur=g`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${G};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${ct};
    }

    :host([appearance="outline"]:active) {
        border-color: ${st};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${x} {
        box-shadow: 0 0 0 calc((${H} - ${I}) * 1px) ${L} inset;
        border-color: ${L};
    }
`.withBehaviors(R(g`
            :host([appearance="outline"]) .control {
                border-color: ${l.ButtonText};
            }
            :host([appearance="outline"]) .control:${x} {
              forced-color-adjust: none;
              background-color: ${l.Highlight};
              border-color: ${l.ButtonText};
              box-shadow: 0 0 0 calc((${H} - ${I}) * 1px) ${l.ButtonText} inset;
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
            :host([appearance="outline"][href]) .control:${x} {
              forced-color-adjust: none;
              border-color: ${l.LinkText};
              box-shadow: 0 0 0 1px ${l.LinkText} inset;
            }
        `)),qr=g`
    :host([appearance="stealth"]) {
        background: ${Ue};
    }

    :host([appearance="stealth"]:hover) {
        background: ${zr};
    }

    :host([appearance="stealth"]:active) {
        background: ${Mr};
    }
`.withBehaviors(R(g`
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

            :host([appearance="stealth"]:${x}) .control {
                background: ${l.Highlight};
                box-shadow: 0 0 0 1px ${l.Highlight};
                color: ${l.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${l.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${x}) .control {
                background: ${l.LinkText};
                border-color: ${l.LinkText};
                color: ${l.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${x}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${l.LinkText};
            }
        `));class Hi{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&yo.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new hu(this.ltr,this.rtl,t),o=yo.getValueFor(t);yo.subscribe(e),e.attach(o),this.cache.set(t,e)}}class hu{constructor(t,e,o){this.ltr=t,this.rtl=e,this.source=o,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}function ue(i,t){return new ac("appearance",i,t)}const uu=(i,t)=>g`
        ${Nr}
    `.withBehaviors(ue("accent",Br),ue("hypertext",du),ue("lightweight",jr),ue("outline",Ur),ue("stealth",qr));class _r extends Et{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(t,e){const o=this.defaultSlottedContent.filter(s=>s.nodeType===Node.ELEMENT_NODE);o.length===1&&o[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}r([d],_r.prototype,"appearance",void 0);const pu=_r.compose({baseName:"anchor",baseClass:Et,template:En,styles:uu,shadowOptions:{delegatesFocus:!0}}),fu=(i,t)=>g`
    :host {
        contain: layout;
        display: block;
    }
`,gu=A.compose({baseName:"anchored-region",template:Fl,styles:fu}),mu=(i,t)=>g`
    ::slotted(${i.tagFor(Se)}) {
        left: 0;
    }
`,bu=(i,t)=>g`
    ::slotted(${i.tagFor(Se)}) {
        right: 0;
    }
`,vu=(i,t)=>g`
        ${V("flex")} :host {
            position: relative;
            height: var(--avatar-size, var(--avatar-size-default));
            max-width: var(--avatar-size, var(--avatar-size-default));
            --avatar-size-default: calc(
                (
                        (${vo} + ${xe}) * ${y} +
                            ((${y} * 8) - 40)
                    ) * 1px
            );
            --avatar-text-size: ${z};
            --avatar-text-ratio: ${y};
        }

        .link {
            text-decoration: none;
            color: ${C};
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            min-width: 100%;
        }

        .square {
            border-radius: calc(${O} * 1px);
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

        ::slotted(${i.tagFor(Se)}) {
            position: absolute;
            display: block;
        }
    `.withBehaviors(new Hi(bu(i),mu(i)));class Hs extends Ye{}r([d({attribute:"src"})],Hs.prototype,"imgSrc",void 0);r([d],Hs.prototype,"alt",void 0);const yu=m`
    ${U(i=>i.imgSrc,m`
            <img
                src="${i=>i.imgSrc}"
                alt="${i=>i.alt}"
                slot="media"
                class="media"
                part="media"
            />
        `)}
`,xu=Hs.compose({baseName:"avatar",baseClass:Ye,template:Dl,styles:vu,media:yu,shadowOptions:{delegatesFocus:!0}}),$u=(i,t)=>g`
        ${V("inline-block")} :host {
            box-sizing: border-box;
            font-family: ${W};
            font-size: ${xo};
            line-height: ${$o};
        }

        .control {
            border-radius: calc(${O} * 1px);
            padding: calc(((${y} * 0.5) - ${I}) * 1px)
                calc((${y} - ${I}) * 1px);
            color: ${It};
            font-weight: 600;
            border: calc(${I} * 1px) solid transparent;
        }

        .control[style] {
            font-weight: 400;
        }

        :host([circular]) .control {
            border-radius: 100px;
            padding: 0 calc(${y} * 1px);
            /* Need to work with Brian on width and height here */
            height: calc((${S} - (${y} * 3)) * 1px);
            min-width: calc((${S} - (${y} * 3)) * 1px);
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }
    `,wu=Se.compose({baseName:"badge",template:Rl,styles:$u}),ku=(i,t)=>g`
    ${V("inline-flex")} :host {
        background: transparent;
        box-sizing: border-box;
        font-family: ${W};
        font-size: ${z};
        fill: currentColor;
        line-height: ${q};
        min-width: calc(${S} * 1px);
        outline: none;
        color: ${C}
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
        color: ${It};
        cursor: pointer;
        display: flex;
        fill: inherit;
        outline: none;
        text-decoration: none;
        white-space: nowrap;
    }

    .control:hover {
        color: ${je};
    }

    .control:active {
        color: ${Kt};
    }

    .control .content {
        position: relative;
    }

    .control .content::before {
        content: "";
        display: block;
        height: calc(${I} * 1px);
        left: 0;
        position: absolute;
        right: 0;
        top: calc(1em + 4px);
        width: 100%;
    }

    .control:hover .content::before {
        background: ${je};
    }

    .control:active .content::before {
        background: ${Kt};
    }

    .control:${x} .content::before {
        background: ${C};
        height: calc(${H} * 1px);
    }

    .control:not([href]) {
        color: ${C};
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
`.withBehaviors(R(g`
                .control:hover .content::before,
                .control:${x} .content::before {
                    background: ${l.LinkText};
                }
                .start,
                .end {
                    fill: ${l.ButtonText};
                }
            `)),Cu=Qe.compose({baseName:"breadcrumb-item",template:El,styles:ku,separator:"/",shadowOptions:{delegatesFocus:!0}}),Tu=(i,t)=>g`
    ${V("inline-block")} :host {
        box-sizing: border-box;
        font-family: ${W};
        font-size: ${z};
        line-height: ${q};
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }
`,Iu=On.compose({baseName:"breadcrumb",template:Ol,styles:Tu}),Fu=(i,t)=>g`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${lt};
            background-color: ${mt};
            cursor: ${et};
        }

        ${Nr}
    `.withBehaviors(R(g`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${l.ButtonFace};
                    border-color: ${l.GrayText};
                    color: ${l.GrayText};
                    cursor: ${et};
                    opacity: 1;
                }
            `),ue("accent",g`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${G};
                }

                ${Br}
            `.withBehaviors(R(g`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${l.ButtonFace};
                            border-color: ${l.GrayText};
                            color: ${l.GrayText};
                        }
                    `))),ue("lightweight",g`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${It};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${jr}
            `.withBehaviors(R(g`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${l.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),ue("outline",g`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${G};
                }

                ${Ur}
            `.withBehaviors(R(g`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${l.GrayText};
                        }
                    `))),ue("stealth",g`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${Ue};
                }

                ${qr}
            `.withBehaviors(R(g`
                        :host([appearance="stealth"][disabled]) {
                            background: ${l.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${l.ButtonFace};
                            border-color: transparent;
                            color: ${l.GrayText};
                        }
                    `))));class Gr extends St{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(t,e){const o=this.defaultSlottedContent.filter(s=>s.nodeType===Node.ELEMENT_NODE);o.length===1&&o[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}r([d],Gr.prototype,"appearance",void 0);const Su=Gr.compose({baseName:"button",baseClass:St,template:Ll,styles:Fu,shadowOptions:{delegatesFocus:!0}}),Du=g`
    ${V("block")} :host {
        --cell-border: none;
        --cell-height: calc(${S} * 1px);
        --selected-day-outline: 1px solid ${Kt};
        --selected-day-color: ${Kt};
        --selected-day-background: ${mt};
        --cell-padding: calc(${y} * 1px);
        --disabled-day-opacity: ${lt};
        --inactive-day-opacity: ${lt};
        font-family: ${W};
        font-size: ${z};
        line-height: ${q};
        color: ${C};
    }

    .title {
        font-size: ${dr};
        line-height: ${hr};
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
        grid-gap: calc(${y} * 1px);
        margin-top: calc(${y} * 1px);
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
        background: ${mt};
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
        cursor: ${et};
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
        color: ${Nt};
        background: ${Kt};
    }

    .today.inactive .date {
        background: transparent;
        color: inherit;
        width: auto;
    }
`.withBehaviors(R(g`
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
        `)),Ru=Ht.compose({baseName:"calendar",template:Zl,styles:Du,title:_l}),Eu=(i,t)=>g`
        ${V("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${M};
            border-radius: calc(${O} * 1px);
            ${ri}
        }
    `.withBehaviors(R(g`
                :host {
                    forced-color-adjust: none;
                    background: ${l.Canvas};
                    box-shadow: 0 0 0 1px ${l.CanvasText};
                }
            `));class Ou extends Hn{connectedCallback(){super.connectedCallback();const t=bi(this);t&&M.setValueFor(this,e=>Vs.getValueFor(e).evaluate(e,M.getValueFor(t)))}}const Lu=Ou.compose({baseName:"card",baseClass:Hn,template:Jl,styles:Eu}),Au=(i,t)=>g`
    ${V("inline-flex")} :host {
        align-items: center;
        outline: none;
        margin: calc(${y} * 1px) 0;
        /* Chromium likes to select label text or the default slot when the checkbox is
            clicked. Maybe there is a better solution here? */
        user-select: none;
    }

    .control {
        position: relative;
        width: calc((${S} / 2 + ${y}) * 1px);
        height: calc((${S} / 2 + ${y}) * 1px);
        box-sizing: border-box;
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid ${Bt};
        background: ${he};
        outline: none;
        cursor: pointer;
    }

    .label {
        font-family: ${W};
        color: ${C};
        /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
        padding-inline-start: calc(${y} * 2px + 2px);
        margin-inline-end: calc(${y} * 2px + 2px);
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .checked-indicator {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${Gt};
        opacity: 0;
        pointer-events: none;
    }

    .indeterminate-indicator {
        border-radius: calc(${O} * 1px);
        background: ${Gt};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    :host(:not([disabled])) .control:hover {
        background: ${Vt};
        border-color: ${Vi};
    }

    :host(:not([disabled])) .control:active {
        background: ${Li};
        border-color: ${Ps};
    }

    :host(:${x}) .control {
        box-shadow: 0 0 0 2px ${M}, 0 0 0 4px ${L};
    }

    :host([aria-checked="true"]) .control {
        background: ${G};
        border: calc(${I} * 1px) solid ${G};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: ${ct};
        border: calc(${I} * 1px) solid ${ct};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
        fill: ${de};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .indeterminate-indicator {
        background: ${de};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active {
        background: ${st};
        border: calc(${I} * 1px) solid ${st};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
        fill: ${Nt};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .indeterminate-indicator {
        background: ${Nt};
    }

    :host([aria-checked="true"]:${x}:not([disabled])) .control {
        box-shadow: 0 0 0 2px ${M}, 0 0 0 4px ${L};
    }


    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${et};
    }

    :host([aria-checked="true"]:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${lt};
    }
`.withBehaviors(R(g`
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
            :host(:${x}) .control {
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([aria-checked="true"]:${x}:not([disabled])) .control {
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
        `)),Vu=Ki.compose({baseName:"checkbox",template:Kl,styles:Au,checkedIndicator:`
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
    `}),Wr=(i,t)=>g`
    ${V("inline-flex")} :host {
        --elevation: 14;
        background: ${he};
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid ${G};
        box-sizing: border-box;
        color: ${C};
        font-family: ${W};
        height: calc(${S} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
    }

    .listbox {
        ${ri}
        background: ${Ei};
        border: calc(${I} * 1px) solid ${Bt};
        border-radius: calc(${O} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${S} * 1px));
        padding: calc(${y} * 1px) 0;
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
        font-size: ${z};
        font-family: inherit;
        line-height: ${q};
        min-height: 100%;
        padding: 0 calc(${y} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${Vt};
        border-color: ${ct};
    }

    :host(:${x}) {
        border-color: ${L};
        box-shadow: 0 0 0 calc(${H} * 1px) ${L};
    }

    :host(:${x}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${H} * 1px) inset ${Ro};
        border-color: ${L};
        background: ${Co};
        color: ${Pr};
    }

    :host([disabled]) {
        cursor: ${et};
        opacity: ${lt};
    }

    :host([disabled]) .control {
        cursor: ${et};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${Ue};
        color: ${C};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${Li};
        border-color: ${st};
        border-radius: calc(${O} * 1px);
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
        bottom: calc(${S} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${S} * 1px);
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
        ${ri}
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
        min-height: calc(${y} * 4px);
        min-width: calc(${y} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]),
    ::slotted(option) {
        flex: 0 0 auto;
    }

`.withBehaviors(R(g`
            :host(:not([disabled]):hover),
            :host(:not([disabled]):active) {
                border-color: ${l.Highlight};
            }

            :host(:not([disabled]):${x}) {
                background-color: ${l.ButtonFace};
                box-shadow: 0 0 0 calc(${H} * 1px) ${l.Highlight};
                color: ${l.ButtonText};
                fill: currentcolor;
                forced-color-adjust: none;
            }

            :host(:not([disabled]):${x}) .listbox {
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

            :host(:${x}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${x}) ::slotted(option[aria-selected="true"]),
            :host(:${x}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${H} * 1px) inset ${l.HighlightText};
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
        `)),Pu=(i,t)=>g`
    ${Wr()}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${et};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${z};
        line-height: ${q};
        height: calc(100% - (${I} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${x},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`,Hu=ge.compose({baseName:"combobox",template:sc,styles:Pu,shadowOptions:{delegatesFocus:!0},indicator:`
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
    `}),zu=(i,t)=>g`
    :host {
        display: flex;
        position: relative;
        flex-direction: column;
    }
`,Mu=(i,t)=>g`
    :host {
        display: grid;
        padding: 1px 0;
        box-sizing: border-box;
        width: 100%;
        border-bottom: calc(${I} * 1px) solid ${Pi};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
        background: ${mt};
        position: sticky;
        top: 0;
    }
`,Nu=(i,t)=>g`
    :host {
        padding: calc(${y} * 1px) calc(${y} * 3px);
        color: ${C};
        box-sizing: border-box;
        font-family: ${W};
        font-size: ${z};
        line-height: ${q};
        font-weight: 400;
        border: transparent calc(${I} * 1px) solid;
        overflow: hidden;
        white-space: nowrap;
        border-radius: calc(${O} * 1px);
    }

    :host(.column-header) {
        font-weight: 600;
    }

    :host(:${x}) {
        border: ${L} calc(${I} * 1px) solid;
        color: ${C};
    }

`.withBehaviors(R(g`
        :host {
            forced-color-adjust: none;
            border-color: transparent;
            background: ${l.Field};
            color: ${l.FieldText};
        }

        :host(:${x}) {
            border-color: ${l.FieldText};
            box-shadow: 0 0 0 2px inset ${l.Field};
            color: ${l.FieldText};
        }
        `)),Bu=se.compose({baseName:"data-grid-cell",template:ql,styles:Nu}),ju=pt.compose({baseName:"data-grid-row",template:Ul,styles:Mu}),Uu=dt.compose({baseName:"data-grid",template:zl,styles:zu}),qu={toView(i){var t;return i==null?null:(t=i)===null||t===void 0?void 0:t.toColorString()},fromView(i){if(i==null)return null;const t=oi(i);return t?ce.create(t.r,t.g,t.b):null}},Xr=g`
    :host {
        background-color: ${M};
        color: ${C};
    }
`.withBehaviors(R(g`
            :host {
                background-color: ${l.ButtonFace};
                box-shadow: 0 0 0 1px ${l.CanvasText};
                color: ${l.ButtonText};
            }
        `));function T(i){return(t,e)=>{t[e+"Changed"]=function(o,s){s!=null?i.setValueFor(this,s):i.deleteValueFor(this)}}}class k extends D{constructor(){super();this.noPaint=!1,E.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){!this.noPaint&&this.fillColor!==void 0?this.$fastController.addStyles(Xr):this.$fastController.removeStyles(Xr)}}r([d({attribute:"no-paint",mode:"boolean"})],k.prototype,"noPaint",void 0);r([d({attribute:"fill-color",converter:qu}),T(M)],k.prototype,"fillColor",void 0);r([p,T(ut)],k.prototype,"neutralPalette",void 0);r([p,T(wo)],k.prototype,"accentPalette",void 0);r([d({converter:w}),T(xe)],k.prototype,"density",void 0);r([d({attribute:"design-unit",converter:w}),T(y)],k.prototype,"designUnit",void 0);r([d({attribute:"direction"}),T(yo)],k.prototype,"direction",void 0);r([d({attribute:"base-height-multiplier",converter:w}),T(vo)],k.prototype,"baseHeightMultiplier",void 0);r([d({attribute:"base-horizontal-spacing-multiplier",converter:w}),T(Sh)],k.prototype,"baseHorizontalSpacingMultiplier",void 0);r([d({attribute:"control-corner-radius",converter:w}),T(O)],k.prototype,"controlCornerRadius",void 0);r([d({attribute:"stroke-width",converter:w}),T(I)],k.prototype,"strokeWidth",void 0);r([d({attribute:"focus-stroke-width",converter:w}),T(H)],k.prototype,"focusStrokeWidth",void 0);r([d({attribute:"disabled-opacity",converter:w}),T(lt)],k.prototype,"disabledOpacity",void 0);r([d({attribute:"type-ramp-minus-2-font-size"}),T(Dh)],k.prototype,"typeRampMinus2FontSize",void 0);r([d({attribute:"type-ramp-minus-2-line-height"}),T(Rh)],k.prototype,"typeRampMinus2LineHeight",void 0);r([d({attribute:"type-ramp-minus-1-font-size"}),T(xo)],k.prototype,"typeRampMinus1FontSize",void 0);r([d({attribute:"type-ramp-minus-1-line-height"}),T($o)],k.prototype,"typeRampMinus1LineHeight",void 0);r([d({attribute:"type-ramp-base-font-size"}),T(z)],k.prototype,"typeRampBaseFontSize",void 0);r([d({attribute:"type-ramp-base-line-height"}),T(q)],k.prototype,"typeRampBaseLineHeight",void 0);r([d({attribute:"type-ramp-plus-1-font-size"}),T(Eh)],k.prototype,"typeRampPlus1FontSize",void 0);r([d({attribute:"type-ramp-plus-1-line-height"}),T(Oh)],k.prototype,"typeRampPlus1LineHeight",void 0);r([d({attribute:"type-ramp-plus-2-font-size"}),T(Lh)],k.prototype,"typeRampPlus2FontSize",void 0);r([d({attribute:"type-ramp-plus-2-line-height"}),T(Ah)],k.prototype,"typeRampPlus2LineHeight",void 0);r([d({attribute:"type-ramp-plus-3-font-size"}),T(dr)],k.prototype,"typeRampPlus3FontSize",void 0);r([d({attribute:"type-ramp-plus-3-line-height"}),T(hr)],k.prototype,"typeRampPlus3LineHeight",void 0);r([d({attribute:"type-ramp-plus-4-font-size"}),T(Vh)],k.prototype,"typeRampPlus4FontSize",void 0);r([d({attribute:"type-ramp-plus-4-line-height"}),T(Ph)],k.prototype,"typeRampPlus4LineHeight",void 0);r([d({attribute:"type-ramp-plus-5-font-size"}),T(Hh)],k.prototype,"typeRampPlus5FontSize",void 0);r([d({attribute:"type-ramp-plus-5-line-height"}),T(zh)],k.prototype,"typeRampPlus5LineHeight",void 0);r([d({attribute:"type-ramp-plus-6-font-size"}),T(Mh)],k.prototype,"typeRampPlus6FontSize",void 0);r([d({attribute:"type-ramp-plus-6-line-height"}),T(Nh)],k.prototype,"typeRampPlus6LineHeight",void 0);r([d({attribute:"accent-fill-rest-delta",converter:w}),T(Bh)],k.prototype,"accentFillRestDelta",void 0);r([d({attribute:"accent-fill-hover-delta",converter:w}),T(ur)],k.prototype,"accentFillHoverDelta",void 0);r([d({attribute:"accent-fill-active-delta",converter:w}),T(pr)],k.prototype,"accentFillActiveDelta",void 0);r([d({attribute:"accent-fill-focus-delta",converter:w}),T(fr)],k.prototype,"accentFillFocusDelta",void 0);r([d({attribute:"accent-foreground-rest-delta",converter:w}),T(gr)],k.prototype,"accentForegroundRestDelta",void 0);r([d({attribute:"accent-foreground-hover-delta",converter:w}),T(mr)],k.prototype,"accentForegroundHoverDelta",void 0);r([d({attribute:"accent-foreground-active-delta",converter:w}),T(br)],k.prototype,"accentForegroundActiveDelta",void 0);r([d({attribute:"accent-foreground-focus-delta",converter:w}),T(vr)],k.prototype,"accentForegroundFocusDelta",void 0);r([d({attribute:"neutral-fill-rest-delta",converter:w}),T(ze)],k.prototype,"neutralFillRestDelta",void 0);r([d({attribute:"neutral-fill-hover-delta",converter:w}),T(Me)],k.prototype,"neutralFillHoverDelta",void 0);r([d({attribute:"neutral-fill-active-delta",converter:w}),T(Ne)],k.prototype,"neutralFillActiveDelta",void 0);r([d({attribute:"neutral-fill-focus-delta",converter:w}),T(Ls)],k.prototype,"neutralFillFocusDelta",void 0);r([d({attribute:"neutral-fill-input-rest-delta",converter:w}),T(yr)],k.prototype,"neutralFillInputRestDelta",void 0);r([d({attribute:"neutral-fill-input-hover-delta",converter:w}),T(xr)],k.prototype,"neutralFillInputHoverDelta",void 0);r([d({attribute:"neutral-fill-input-active-delta",converter:w}),T($r)],k.prototype,"neutralFillInputActiveDelta",void 0);r([d({attribute:"neutral-fill-input-focus-delta",converter:w}),T(wr)],k.prototype,"neutralFillInputFocusDelta",void 0);r([d({attribute:"neutral-fill-stealth-rest-delta",converter:w}),T(kr)],k.prototype,"neutralFillStealthRestDelta",void 0);r([d({attribute:"neutral-fill-stealth-hover-delta",converter:w}),T(Cr)],k.prototype,"neutralFillStealthHoverDelta",void 0);r([d({attribute:"neutral-fill-stealth-active-delta",converter:w}),T(Tr)],k.prototype,"neutralFillStealthActiveDelta",void 0);r([d({attribute:"neutral-fill-stealth-focus-delta",converter:w}),T(Ir)],k.prototype,"neutralFillStealthFocusDelta",void 0);r([d({attribute:"neutral-fill-strong-hover-delta",converter:w}),T(Fr)],k.prototype,"neutralFillStrongHoverDelta",void 0);r([d({attribute:"neutral-fill-strong-active-delta",converter:w}),T(Sr)],k.prototype,"neutralFillStrongActiveDelta",void 0);r([d({attribute:"neutral-fill-strong-focus-delta",converter:w}),T(Dr)],k.prototype,"neutralFillStrongFocusDelta",void 0);r([d({attribute:"base-layer-luminance",converter:w}),T(He)],k.prototype,"baseLayerLuminance",void 0);r([d({attribute:"neutral-fill-layer-rest-delta",converter:w}),T(Be)],k.prototype,"neutralFillLayerRestDelta",void 0);r([d({attribute:"neutral-stroke-divider-rest-delta",converter:w}),T(Ar)],k.prototype,"neutralStrokeDividerRestDelta",void 0);r([d({attribute:"neutral-stroke-rest-delta",converter:w}),T(Rr)],k.prototype,"neutralStrokeRestDelta",void 0);r([d({attribute:"neutral-stroke-hover-delta",converter:w}),T(Er)],k.prototype,"neutralStrokeHoverDelta",void 0);r([d({attribute:"neutral-stroke-active-delta",converter:w}),T(Or)],k.prototype,"neutralStrokeActiveDelta",void 0);r([d({attribute:"neutral-stroke-focus-delta",converter:w}),T(Lr)],k.prototype,"neutralStrokeFocusDelta",void 0);const _u=(i,t)=>m`
    <slot></slot>
`,Gu=(i,t)=>g`
    ${V("block")}
`,Wu=k.compose({baseName:"design-system-provider",template:_u,styles:Gu}),Xu=(i,t)=>g`
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
        ${ri}
        margin-top: auto;
        margin-bottom: auto;
        width: var(--dialog-width);
        height: var(--dialog-height);
        background-color: ${M};
        z-index: 1;
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid transparent;
    }
`,Yu=zt.compose({baseName:"dialog",template:wc,styles:Xu}),Qu=(i,t)=>g`
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
        background: ${G};
        color: ${Gt};
        font-family: ${W};
        font-size: ${z};
        border-radius: calc(${O} * 1px);
        outline: none;
        cursor: pointer;
        margin: 16px 0;
        padding: 12px;
        max-width: max-content;
    }

    :host([appearance="accent"]) .invoker:active {
        background: ${st};
        color: ${Nt};
    }

    :host([appearance="accent"]) .invoker:hover {
        background: ${ct};
        color: ${de};
    }

    :host([appearance="lightweight"]) .invoker {
        background: transparent;
        color: ${It};
        border-bottom: calc(${I} * 1px) solid ${It};
        cursor: pointer;
        width: max-content;
        margin: 16px 0;
    }

    :host([appearance="lightweight"]) .invoker:active {
        border-bottom-color: ${Kt};
    }

    :host([appearance="lightweight"]) .invoker:hover {
        border-bottom-color: ${je};
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
`;class Yr extends so{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}onToggle(){super.onToggle(),this.details.style.setProperty("height",`${this.disclosureHeight}px`)}setup(){super.setup(),this.appearance||(this.appearance="accent");const t=()=>this.details.getBoundingClientRect().height;this.show(),this.totalHeight=t(),this.hide(),this.height=t(),this.expanded&&this.show()}get disclosureHeight(){return this.expanded?this.totalHeight:this.height}}r([d],Yr.prototype,"appearance",void 0);const Zu=Yr.compose({baseName:"disclosure",baseClass:so,template:Pc,styles:Qu}),Ju=(i,t)=>g`
        ${V("block")} :host {
            box-sizing: content-box;
            height: 0;
            margin: calc(${y} * 1px) 0;
            border: none;
            border-top: calc(${I} * 1px) solid ${Pi};
        }
    `,Ku=Gn.compose({baseName:"divider",template:Hc,styles:Ju}),tp=(i,t)=>g`
    ${V("inline-flex")} :host {
        width: calc(${S} * 1px);
        height: calc(${S} * 1px);
        justify-content: center;
        align-items: center;
        margin: 0;
        position: relative;
        fill: currentcolor;
        color: ${Gt};
        background: transparent;
        outline: none;
        border: none;
        padding: 0;
    }

    :host::before {
        content: "";
        background: ${G};
        border: calc(${I} * 1px) solid ${G};
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
        opacity: ${lt};
        cursor: ${et};
        fill: currentcolor;
        color: ${C};
        pointer-events: none;
    }

    :host([disabled])::before,
    :host([disabled]:hover)::before,
    :host([disabled]:active)::before {
        background: ${Ue};
        border-color: ${Bt};
    }

    :host(:hover) {
        color: ${de};
    }

    :host(:hover)::before {
        background: ${ct};
        border-color: ${ct};
    }

    :host(:active) {
        color: ${Nt};
    }

    :host(:active)::before {
        background: ${st};
        border-color: ${st};
    }

    :host(:${x}) {
        outline: none;
    }

    :host(:${x})::before {
        box-shadow: 0 0 0 calc((${H} - ${I}) * 1px) ${L} inset,
            0 0 0 calc((${H} + ${I}) * 1px) ${Ro} inset;
        border-color: ${L};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors(R(g`
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
            :host(:${x})::before {
                forced-color-adjust: none;
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 calc((${H} - ${I}) * 1px) ${l.Highlight} inset;
            }
        `)),ep=me.compose({baseName:"flipper",template:zc,styles:tp,next:`
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
    `}),ip=g`
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
`,op=g`
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
`,sp=g`
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
`.withBehaviors(new Hi(ip,op)),np=(i,t)=>g`
    ${V("block")} :host {
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
`;class rp extends re{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(sp)}}const ap=rp.compose({baseName:"horizontal-scroll",baseClass:re,template:fd,styles:np,nextFlipper:i=>m`
        <${i.tagFor(me)}
            @click="${t=>t.scrollToNext()}"
            aria-hidden="${t=>t.flippersHiddenFromAT}"
        ></${i.tagFor(me)}>
    `,previousFlipper:i=>m`
        <${i.tagFor(me)}
            @click="${t=>t.scrollToPrevious()}"
            direction="previous"
            aria-hidden="${t=>t.flippersHiddenFromAT}"
        ></${i.tagFor(me)}>
    `}),lp=(i,t)=>g`
    ${V("inline-flex")} :host {
        align-items: center;
        font-family: ${W};
        border-radius: calc(${O} * 1px);
        border: calc(${H} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${C};
        cursor: pointer;
        flex: 0 0 auto;
        fill: currentcolor;
        font-size: ${z};
        height: calc(${S} * 1px);
        line-height: ${q};
        margin: 0 calc(${y} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${y} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${x}) {
        box-shadow: 0 0 0 calc(${H} * 1px) inset ${Ro};
        border-color: ${L};
        background: ${Co};
        color: ${Pr};
    }

    :host([aria-selected="true"]) {
        background: ${G};
        color: ${Gt};
    }

    :host(:hover) {
        background: ${ct};
        color: ${de};
    }

    :host(:active) {
        background: ${st};
        color: ${Nt};
    }

    :host(:not([aria-selected="true"]):hover),
    :host(:not([aria-selected="true"]):active) {
        background: ${$e};
        color: ${C};
    }

    :host([disabled]) {
        cursor: ${et};
        opacity: ${lt};
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
        height: calc(${y} * 4px);
        width: calc(${y} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }
`.withBehaviors(R(g`
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
            `)),cp=Re.compose({baseName:"option",template:Mc,styles:lp}),dp=(i,t)=>g`
        ${V("inline-flex")} :host {
            background: ${Ei};
            border: calc(${I} * 1px) solid ${Bt};
            border-radius: calc(${O} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${y} * 1px) 0;
        }

        :host(:focus-within:not([disabled])) {
            border-color: ${L};
            box-shadow: 0 0 0 calc((${H} - ${I}) * 1px)
                ${L} inset;
        }

        :host([size]) {
            max-height: calc(
                (var(--size) * ${S} + ((${y} + ${I}) * 2)) *
                    1px
            );
            overflow-y: auto;
        }
    `.withBehaviors(R(g`
            :host(:${x}) ::slotted([aria-selected="true"][role="option"]) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${H} * 1px) inset ${l.HighlightText};
                color: ${l.HighlightText};
                fill: currentcolor;
            }

            :host(:${x}) ::slotted([aria-selected="true"][role="option"]) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${H} * 1px) inset ${l.HighlightText};
                color: ${l.HighlightText};
                fill: currentcolor;
            }
        `));class hp extends ps{sizeChanged(t,e){super.sizeChanged(t,e),this.sizeStylesheet&&(this.sizeStylesheet=this.$fastController.removeStyles(this.sizeStylesheet)),this.size>0&&(this.sizeStylesheet=g`
                :host {
                    --size: ${""+this.size};
                }
            `,this.$fastController.addStyles(this.sizeStylesheet))}}const up=hp.compose({baseName:"listbox",template:Nc,styles:dp}),pp=(i,t)=>g`
    ${V("grid")} :host {
        contain: layout;
        overflow: visible;
        font-family: ${W};
        outline: none;
        box-sizing: border-box;
        height: calc(${S} * 1px);
        grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        padding: 0;
        margin: 0 calc(${y} * 1px);
        white-space: nowrap;
        color: ${C};
        fill: currentcolor;
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
        border-radius: calc(${O} * 1px);
        border: calc(${H} * 1px) solid transparent;
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

    :host(:${x}) {
        border-color: ${L};
        background: ${As};
        color: ${C};
    }

    :host(:hover) {
        background: ${As};
        color: ${C};
    }

    :host([aria-checked="true"]),
    :host(:active),
    :host(.expanded) {
        background: ${Xh};
        color: ${C};
    }

    :host([disabled]) {
        cursor: ${et};
        opacity: ${lt};
    }

    :host([disabled]:hover) {
        color: ${C};
        fill: currentcolor;
        background: ${Ue};
    }

    :host([disabled]:hover) .start,
    :host([disabled]:hover) .end,
    :host([disabled]:hover)::slotted(svg) {
        fill: ${C};
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
        fill: ${C};
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
        border: calc(${I} * 1px) solid ${C};
    }

    :host([aria-checked="true"]) .checkbox,
    :host([aria-checked="true"]) .radio {
        background: ${G};
        border-color: ${G};
    }

    :host .checkbox {
        border-radius: calc(${O} * 1px);
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
        color: ${Ai}
    }

    :host([aria-checked="true"]) .checkbox-indicator,
    :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${Gt};
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
        background: ${Gt};
        pointer-events: none;
    }

    :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
        display: block;
        pointer-events: none;
    }
`.withBehaviors(R(g`
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

            :host(:${x}) {
                background: ${l.Highlight};
                border-color: ${l.ButtonText};
                box-shadow: 0 0 0 calc(${H} * 1px) inset ${l.HighlightText};
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
            :host(:${x}) .expanded-toggle,
            :host(:${x}) .checkbox,
            :host(:${x}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${x}) .checkbox,
            :host([checked="true"]:${x}) .radio {
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
            :host(:${x}) ::slotted([slot="end"]:not(svg)) {
                color: ${l.HighlightText};
            }
        `),new Hi(g`
                .expand-collapse-glyph {
                    transform: rotate(0deg);
                }
            `,g`
                .expand-collapse-glyph {
                    transform: rotate(180deg);
                }
            `)),fp=Ot.compose({baseName:"menu-item",template:td,styles:pp,checkboxIndicator:`
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
    `}),gp=(i,t)=>g`
        ${V("block")} :host {
            --elevation: 11;
            background: ${Ei};
            border: calc(${I} * 1px) solid transparent;
            ${ri}
            margin: 0;
            border-radius: calc(${O} * 1px);
            padding: calc(${y} * 1px) 0;
            max-width: 368px;
            min-width: 64px;
        }

        :host([slot="submenu"]) {
            width: max-content;
            margin: 0 calc(${y} * 1px);
        }

        ::slotted(hr) {
            box-sizing: content-box;
            height: 0;
            margin: 0;
            border: none;
            border-top: calc(${I} * 1px) solid ${Pi};
        }
    `.withBehaviors(R(g`
                :host {
                    background: ${l.Canvas};
                    border-color: ${l.CanvasText};
                }
            `)),mp=Ti.compose({baseName:"menu",template:ed,styles:gp}),bp=(i,t)=>g`
    ${V("inline-block")} :host {
        font-family: ${W};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${C};
        background: ${he};
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid ${G};
        height: calc(${S} * 1px);
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
        padding: 0 calc(${y} * 2px + 1px);
        font-size: ${z};
        line-height: ${q};
    }

    .control:hover,
    .control:${x},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .controls {
        opacity: 0;
    }

    .label {
        display: block;
        color: ${C};
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
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
        border-bottom-color: ${C};
    }

    .step-down-glyph:before {
        border-top-color: ${C};
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
        background: ${Vt};
        border-color: ${ct};
    }

    :host(:active:not([disabled])) .root {
        background: ${Vt};
        border-color: ${st};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${L};
        box-shadow: 0 0 0 1px ${L} inset;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
        opacity: 1;
    }

    :host([appearance="filled"]) .root {
        background: ${mt};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${$e};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${et};
    }

    :host([disabled]) {
        opacity: ${lt};
    }

    :host([disabled]) .control {
        border-color: ${Bt};
    }
`.withBehaviors(R(g`
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
            `));class Qr extends Tt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}r([d],Qr.prototype,"appearance",void 0);const vp=Qr.compose({baseName:"number-field",baseClass:Tt,styles:bp,template:id,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
        <span class="step-down-glyph" part="step-down-glyph"></span>
    `,stepUpGlyph:`
        <span class="step-up-glyph" part="step-up-glyph"></span>
    `}),yp=(i,t)=>g`
        .region {
            z-index: 1000;
            overflow: hidden;
            display: flex;
            font-family: ${W};
            font-size: ${z};
        }

        .loaded {
            opacity: 1;
            pointer-events: none;
        }

        .loading-display,
        .no-options-display {
            background: ${Ei};
            width: 100%;
            min-height: calc(${S} * 1px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            padding: calc(${y} * 1px);
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
    `,xp=(i,t)=>g`
        :host {
            background: ${Ei};
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
            border-radius: calc(${O} * 1px);
            padding: calc(${y} * 1px) 0;
            border: calc(${I} * 1px) solid transparent;
            ${ri}
        }

        .suggestions-available-alert {
            height: 0;
            opacity: 0;
            overflow: hidden;
        }
    `.withBehaviors(R(g`
                :host {
                    background: ${l.Canvas};
                    border-color: ${l.CanvasText};
                }
            `)),$p=(i,t)=>g`
        :host {
        display: flex;
        align-items: center;
        justify-items: center;
        font-family: ${W};
        border-radius: calc(${O} * 1px);
        border: calc(${H} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${C};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${z};
        min-height: calc(${S} * 1px);
        line-height: ${q};
        margin: 0 calc(${y} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${y} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${x}[role="listitem"]) {
        border-color: ${L};
        background: ${mt};
        color: ${C};
    }

    :host(:hover) {
        background: ${$e};
        color: ${C};
    }

    :host([aria-selected="true"]) {
        background: ${G};
        color: ${Nt};
    }

    `.withBehaviors(R(g`
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
            `)),wp=(i,t)=>g`
        :host {
            display: flex;
            flex-direction: row;
            column-gap: calc(${y} * 1px);
            row-gap: calc(${y} * 1px);
            flex-wrap: wrap;
        }

        ::slotted([role="combobox"]) {
            min-width: 260px;
            width: auto;
            box-sizing: border-box;
            color: ${C};
            background: ${he};
            border-radius: calc(${O} * 1px);
            border: calc(${I} * 1px) solid ${G};
            height: calc(${S} * 1px);
            font-family: ${W};
            outline: none;
            user-select: none;
            font-size: ${z};
            line-height: ${q};
            padding: 0 calc(${y} * 2px + 1px);
        }

        ::slotted([role="combobox"]:active) { {
            background: ${Vt};
            border-color: ${st};
        }

        ::slotted([role="combobox"]:focus-within) {
            border-color: ${L};
            box-shadow: 0 0 0 1px ${L} inset;
        }
    `.withBehaviors(R(g`
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
            `)),kp=(i,t)=>g`
:host {
    display: flex;
    align-items: center;
    justify-items: center;
    font-family: ${W};
    border-radius: calc(${O} * 1px);
    border: calc(${H} * 1px) solid transparent;
    box-sizing: border-box;
    color: ${C};
    cursor: pointer;
    fill: currentcolor;
    font-size: ${z};
    height: calc(${S} * 1px);
    line-height: ${q};
    outline: none;
    overflow: hidden;
    padding: 0 calc(${y} * 2.25px);
    user-select: none;
    white-space: nowrap;
}

:host(:${x}),
:host(:hover) {
    background: ${As};
    color: ${C};
}

:host(:focusVisible) {
    border-color: ${L};
}

:host([aria-selected="true"]) {
    background: ${st};
    color: ${Nt};
}`.withBehaviors(R(g`
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
            `)),Cp=N.compose({baseName:"picker",template:_c,styles:yp,shadowOptions:{}}),Tp=ei.compose({baseName:"picker-menu",template:Yc,styles:xp}),Ip=ki.compose({baseName:"picker-menu-option",template:Qc,styles:$p}),Fp=fs.compose({baseName:"picker-list",template:Zc,styles:wp}),Sp=Ci.compose({baseName:"picker-list-item",template:Jc,styles:kp}),Dp=(i,t)=>g`
        ${V("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${S} * 1px);
            width: calc(${S} * 1px);
            margin: calc(${S} * 1px) 0;
        }

        .progress {
            height: 100%;
            width: 100%;
        }

        .background {
            stroke: ${mt};
            fill: none;
            stroke-width: 2px;
        }

        .determinate {
            stroke: ${It};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
        }

        .indeterminate-indicator-1 {
            stroke: ${It};
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
            stroke: ${mt};
        }

        :host([paused]) .determinate {
            stroke: ${Ai};
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
    `.withBehaviors(R(g`
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
            `)),Rp=Ee.compose({baseName:"progress-ring",template:ld,styles:Dp,indeterminateIndicator:`
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
    `}),Ep=(i,t)=>g`
        ${V("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${y} * 1px);
            margin: calc(${y} * 1px) 0;
        }

        .progress {
            background-color: ${mt};
            border-radius: calc(${y} * 1px);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
        }

        .determinate {
            background-color: ${It};
            border-radius: calc(${y} * 1px);
            height: 100%;
            transition: all 0.2s ease-in-out;
            display: flex;
        }

        .indeterminate {
            height: 100%;
            border-radius: calc(${y} * 1px);
            display: flex;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .indeterminate-indicator-1 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${It};
            border-radius: calc(${y} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 40%;
            animation: indeterminate-1 2s infinite;
        }

        .indeterminate-indicator-2 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${It};
            border-radius: calc(${y} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 60%;
            animation: indeterminate-2 2s infinite;
        }

        :host([paused]) .indeterminate-indicator-1,
        :host([paused]) .indeterminate-indicator-2 {
            animation-play-state: paused;
            background-color: ${mt};
        }

        :host([paused]) .determinate {
            background-color: ${Ai};
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
    `.withBehaviors(R(g`
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
            `)),Op=Ee.compose({baseName:"progress",template:cd,styles:Ep,indeterminateIndicator1:`
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `,indeterminateIndicator2:`
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `}),Lp=(i,t)=>g`
    ${V("flex")} :host {
        align-items: flex-start;
        margin: calc(${y} * 1px) 0;
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
`,Ap=be.compose({baseName:"radio-group",template:dd,styles:Lp}),Vp=(i,t)=>g`
    ${V("inline-flex")} :host {
        --input-size: calc((${S} / 2) + ${y});
        align-items: center;
        outline: none;
        margin: calc(${y} * 1px) 0;
        /* Chromium likes to select label text or the default slot when
            the radio is clicked. Maybe there is a better solution here? */
        user-select: none;
        position: relative;
        flex-direction: row;
        transition: all 0.2s ease-in-out;
    }

    .control {
        position: relative;
        width: calc((${S} / 2 + ${y}) * 1px);
        height: calc((${S} / 2 + ${y}) * 1px);
        box-sizing: border-box;
        border-radius: 999px;
        border: calc(${I} * 1px) solid ${Bt};
        background: ${he};
        outline: none;
        cursor: pointer;
    }

    .label {
        font-family: ${W};
        color: ${C};
        /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
        padding-inline-start: calc(${y} * 2px + 2px);
        margin-inline-end: calc(${y} * 2px + 2px);
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
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
        background: ${Gt};
        fill: ${Gt};
        opacity: 0;
        pointer-events: none;
    }

    :host(:not([disabled])) .control:hover{
        background: ${Vt};
        border-color: ${Vi};
    }

    :host(:not([disabled])) .control:active {
        background: ${Li};
        border-color: ${Ps};
    }

    :host(:${x}) .control {
        box-shadow: 0 0 0 2px ${M}, 0 0 0 4px ${L};
    }

    :host([aria-checked="true"]) .control {
        background: ${G};
        border: calc(${I} * 1px) solid ${G};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: ${ct};
        border: calc(${I} * 1px) solid ${ct};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
        background: ${de};
        fill: ${de};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active {
        background: ${st};
        border: calc(${I} * 1px) solid ${st};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
        background: ${Nt};
        fill: ${Nt};
    }

    :host([aria-checked="true"]:${x}:not([disabled])) .control {
        box-shadow: 0 0 0 2px ${M}, 0 0 0 4px ${L};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${et};
    }

    :host([aria-checked="true"]) .checked-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${lt};
    }
`.withBehaviors(R(g`
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
            :host(:${x}) .control {
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([aria-checked="true"]:${x}:not([disabled])) .control {
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
        `)),Pp=ro.compose({baseName:"radio",template:hd,styles:Vp,checkedIndicator:`
        <div part="checked-indicator" class="checked-indicator"></div>
    `}),Hp=(i,t)=>g`
    ${V("inline-block")} :host {
        font-family: ${W};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${C};
        background: ${he};
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid ${G};
        height: calc(${S} * 1px);
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
        padding-inline-start: calc(${y} * 2px + 1px);
        padding-inline-end: calc((${y} * 2px) + (${S} * 1px) + 1px);
        font-size: ${z};
        line-height: ${q};
    }

    .control::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .control:hover,
    .control:${x},
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
        color: ${C};
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
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
        background: ${Vt};
        border-color: ${ct};
    }

    :host(:active:not([disabled])) .root {
        background: ${Vt};
        border-color: ${st};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${L};
        box-shadow: 0 0 0 1px ${L} inset;
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
        background: ${M};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${$e};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${et};
    }

    :host([disabled]) {
        opacity: ${lt};
    }

    :host([disabled]) .control {
        border-color: ${Bt};
    }
`.withBehaviors(R(g`
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
            `));class Zr extends Lt{constructor(){super(...arguments);this.appearance="outline"}appearanceChanged(t,e){F.queueUpdate(()=>{e==="filled"?M.setValueFor(this.root,o=>si.getValueFor(o).evaluate(o,M.getValueFor(this)).rest):t==="filled"&&M.deleteValueFor(this.root)})}}r([d],Zr.prototype,"appearance",void 0);const zp=Zr.compose({baseName:"search",baseClass:Lt,template:gd,styles:Hp,shadowOptions:{delegatesFocus:!0}}),Mp=Oe.compose({baseName:"select",template:xd,styles:Wr,indicator:`
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
    `}),Np=(i,t)=>g`
        ${V("block")} :host {
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
            border-radius: calc(${O} * 1px);
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

        ${V("block")} span.shimmer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: var(
                --skeleton-animation-gradient,
                var(--skeleton-animation-gradient-default)
            );
            background-size: 0px 0px / 90% 100%;
            background-repeat: no-repeat;
            background-color: var(--skeleton-animation-fill, ${mt});
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
    `.withBehaviors(R(g`
                :host {
                    forced-color-adjust: none;
                    background-color: ${l.ButtonFace};
                    box-shadow: 0 0 0 1px ${l.ButtonText};
                }

                ${V("block")} span.shimmer {
                    display: none;
                }
            `)),Bp=Ii.compose({baseName:"skeleton",template:$d,styles:Np}),Jr=g`
    :host {
        align-self: start;
        grid-row: 2;
        margin-top: -2px;
        height: calc((${S} / 2 + ${y}) * 1px);
        width: auto;
    }
    .container {
        grid-template-rows: auto auto;
        grid-template-columns: 0;
    }
    .label {
        margin: 2px 0;
    }
`,Kr=g`
    :host {
        justify-self: start;
        grid-column: 2;
        margin-left: 2px;
        height: auto;
        width: calc((${S} / 2 + ${y}) * 1px);
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
        margin-left: calc((${y} / 2) * 3px);
        align-self: center;
    }
`,jp=(i,t)=>g`
        ${V("block")} :host {
            font-family: ${W};
            color: ${C};
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
            width: calc((${y} / 4) * 1px);
            height: calc(${S} * 0.25 * 1px);
            background: ${Bt};
            justify-self: center;
        }
        :host(.disabled) {
            opacity: ${lt};
        }
    `.withBehaviors(R(g`
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
            `));class Up extends Zt{sliderOrientationChanged(){this.sliderOrientation===J.horizontal?(this.$fastController.addStyles(Jr),this.$fastController.removeStyles(Kr)):(this.$fastController.addStyles(Kr),this.$fastController.removeStyles(Jr))}}const qp=Up.compose({baseName:"slider-label",baseClass:Zt,template:wd,styles:jp}),_p=(i,t)=>g`
    :host([hidden]) {
        display: none;
    }

    ${V("inline-grid")} :host {
        --thumb-size: calc(${S} * 0.5 - ${y});
        --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
        --track-overhang: calc((${y} / 2) * -1);
        --track-width: ${y};
        --fast-slider-height: calc(var(--thumb-size) * 10);
        align-items: center;
        width: 100%;
        margin: calc(${y} * 1px) 0;
        user-select: none;
        box-sizing: border-box;
        border-radius: calc(${O} * 1px);
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

    :host(:${x}) .thumb-cursor {
        box-shadow: 0 0 0 2px ${M}, 0 0 0 4px ${L};
    }

    .thumb-container {
        position: absolute;
        height: calc(var(--thumb-size) * 1px);
        width: calc(var(--thumb-size) * 1px);
        transition: all 0.2s ease;
        color: ${C};
        fill: currentcolor;
    }
    .thumb-cursor {
        border: none;
        width: calc(var(--thumb-size) * 1px);
        height: calc(var(--thumb-size) * 1px);
        background: ${C};
        border-radius: calc(${O} * 1px);
    }
    .thumb-cursor:hover {
        background: ${C};
        border-color: ${Vi};
    }
    .thumb-cursor:active {
        background: ${C};
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
        background: ${Bt};
        position: absolute;
        border-radius: calc(${O} * 1px);
    }
    :host([orientation="vertical"]) {
        height: calc(var(--fast-slider-height) * 1px);
        min-height: calc(var(--thumb-size) * 1px);
        min-width: calc(${y} * 20px);
    }
    :host([disabled]), :host([readonly]) {
        cursor: ${et};
    }
    :host([disabled]) {
        opacity: ${lt};
    }
`.withBehaviors(R(g`
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
            :host(:${x}) .thumb-cursor {
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

            :host(:${x}) .thumb-cursor {
                background: ${l.Highlight};
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
        `)),Gp=vt.compose({baseName:"slider",template:kd,styles:_p,thumb:`
        <div class="thumb-cursor"></div>
    `}),Wp=(i,t)=>g`
    :host([hidden]) {
        display: none;
    }

    ${V("inline-flex")} :host {
        align-items: center;
        outline: none;
        font-family: ${W};
        margin: calc(${y} * 1px) 0;
        ${""} user-select: none;
    }

    :host([disabled]) {
        opacity: ${lt};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .switch,
    :host([disabled]) .switch {
        cursor: ${et};
    }

    .switch {
        position: relative;
        outline: none;
        box-sizing: border-box;
        width: calc(${S} * 1px);
        height: calc((${S} / 2 + ${y}) * 1px);
        background: ${he};
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid ${Bt};
    }

    .switch:hover {
        background: ${Vt};
        border-color: ${Vi};
        cursor: pointer;
    }

    host([disabled]) .switch:hover,
    host([readonly]) .switch:hover {
        background: ${Vt};
        border-color: ${Vi};
        cursor: ${et};
    }

    :host(:not([disabled])) .switch:active {
        background: ${Li};
        border-color: ${Ps};
    }

    :host(:${x}) .switch {
        box-shadow: 0 0 0 2px ${M}, 0 0 0 4px ${L};
    }

    .checked-indicator {
        position: absolute;
        top: 5px;
        bottom: 5px;
        background: ${C};
        border-radius: calc(${O} * 1px);
        transition: all 0.2s ease-in-out;
    }

    .status-message {
        color: ${C};
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
    }

    :host([disabled]) .status-message,
    :host([readonly]) .status-message {
        cursor: ${et};
    }

    .label {
        color: ${C};

        ${""} margin-inline-end: calc(${y} * 2px + 2px);
        font-size: ${z};
        line-height: ${q};
        cursor: pointer;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${y} * 2px + 2px);
    }

    :host([aria-checked="true"]) .checked-indicator {
        background: ${Gt};
    }

    :host([aria-checked="true"]) .switch {
        background: ${G};
        border-color: ${G};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:hover {
        background: ${ct};
        border-color: ${ct};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:hover .checked-indicator {
        background: ${de};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:active {
        background: ${st};
        border-color: ${st};
    }

    :host([aria-checked="true"]:not([disabled])) .switch:active .checked-indicator {
        background: ${Nt};
    }

    :host([aria-checked="true"]:${x}:not([disabled])) .switch {
        box-shadow: 0 0 0 2px ${M}, 0 0 0 4px ${L};
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
`.withBehaviors(R(g`
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
            :host(:${x}) .switch {
                border-color: ${l.Highlight};
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([aria-checked="true"]:${x}:not([disabled])) .switch {
                box-shadow: 0 0 0 2px ${l.Field}, 0 0 0 4px ${l.FieldText};
            }
            :host([disabled]) .checked-indicator {
                background: ${l.GrayText};
            }
            :host([disabled]) .switch {
                background: ${l.Field};
                border-color: ${l.GrayText};
            }
        `),new Hi(g`
                .checked-indicator {
                    left: 5px;
                    right: calc(((${S} / 2) + 1) * 1px);
                }

                :host([aria-checked="true"]) .checked-indicator {
                    left: calc(((${S} / 2) + 1) * 1px);
                    right: 5px;
                }
            `,g`
                .checked-indicator {
                    right: 5px;
                    left: calc(((${S} / 2) + 1) * 1px);
                }

                :host([aria-checked="true"]) .checked-indicator {
                    right: calc(((${S} / 2) + 1) * 1px);
                    left: 5px;
                }
            `)),Xp=vs.compose({baseName:"switch",template:Id,styles:Wp,switch:`
        <span class="checked-indicator" part="checked-indicator"></span>
    `}),Yp=(i,t)=>g`
        ${V("grid")} :host {
            box-sizing: border-box;
            font-family: ${W};
            font-size: ${z};
            line-height: ${q};
            color: ${C};
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
            padding: calc(${y} * 4px) calc(${y} * 4px) 0;
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
            background: ${G};
            margin-top: 10px;
            border-radius: calc(${O} * 1px)
                calc(${O} * 1px) 0 0;
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
            padding: calc((${S} - ${y}) * 1px)
                calc(${y} * 4px) calc((${S} - ${y}) * 1px) 0;
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
            background: ${G};
            margin-top: 0;
            border-radius: 0 calc(${O} * 1px)
                calc(${O} * 1px) 0;
        }

        :host([orientation="vertical"]) .activeIndicatorTransition {
            transition: transform 0.2s linear;
        }
    `.withBehaviors(R(g`
                .activeIndicator,
                :host([orientation="vertical"]) .activeIndicator {
                    forced-color-adjust: none;
                    background: ${l.Highlight};
                }
            `)),Qp=(i,t)=>g`
    ${V("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${W};
        font-size: ${z};
        line-height: ${q};
        height: calc(${S} * 1px);
        padding: calc(${y} * 5px) calc(${y} * 4px);
        color: ${Ai};
        fill: currentcolor;
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host(:hover) {
        color: ${C};
        fill: currentcolor;
    }

    :host(:active) {
        color: ${C};
        fill: currentcolor;
    }

    :host([disabled]) {
        cursor: ${et};
        opacity: ${lt};
    }

    :host([disabled]:hover) {
        color: ${Ai};
        background: ${Ue};
    }

    :host([aria-selected="true"]) {
        background: ${mt};
        color: ${It};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:hover) {
        background: ${$e};
        color: ${je};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:active) {
        background: ${Hr};
        color: ${Kt};
        fill: currentcolor;
    }

    :host(:${x}) {
        outline: none;
        border: calc(${I} * 1px) solid ${L};
        box-shadow: 0 0 0 calc((${H} - ${I}) * 1px)
            ${L};
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
        color: ${C};
    }

    :host(.vertical:active) {
        color: ${C};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(R(g`
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
            :host(:${x}) {
                border-color: ${l.ButtonText};
                box-shadow: none;
            }
            :host([disabled]),
            :host([disabled]:hover) {
                opacity: 1;
                color: ${l.GrayText};
                background: ${l.ButtonFace};
            }
        `)),Zp=Yn.compose({baseName:"tab",template:Ed,styles:Qp}),Jp=(i,t)=>g`
    ${V("block")} :host {
        box-sizing: border-box;
        font-size: ${z};
        line-height: ${q};
        padding: 0 calc((6 + (${y} * 2 * ${xe})) * 1px);
    }
`,Kp=Rd.compose({baseName:"tab-panel",template:Dd,styles:Jp}),tf=ae.compose({baseName:"tabs",template:Od,styles:Yp}),ef=(i,t)=>g`
    ${V("inline-block")} :host {
        font-family: ${W};
        outline: none;
        user-select: none;
    }

    .control {
        box-sizing: border-box;
        position: relative;
        color: ${C};
        background: ${he};
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid ${G};
        height: calc(${S} * 2px);
        font: inherit;
        font-size: ${z};
        line-height: ${q};
        padding: calc(${y} * 2px + 1px);
        width: 100%;
        resize: none;
    }

    .control:hover:enabled {
        background: ${Vt};
        border-color: ${ct};
    }

    .control:active:enabled {
        background: ${Li};
        border-color: ${st};
    }

    .control:hover,
    .control:${x},
    .control:disabled,
    .control:active {
        outline: none;
    }

    :host(:focus-within) .control {
        border-color: ${L};
        box-shadow: 0 0 0 1px ${L} inset;
    }

    :host([appearance="filled"]) .control {
        background: ${mt};
    }

    :host([appearance="filled"]:hover:not([disabled])) .control {
        background: ${$e};
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
        color: ${C};
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
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
        cursor: ${et};
    }
    :host([disabled]) {
        opacity: ${lt};
    }
    :host([disabled]) .control {
        border-color: ${Bt};
    }
 `.withBehaviors(R(g`
                :host([disabled]) {
                    opacity: 1;
                }
            `));class ta extends yt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}r([d],ta.prototype,"appearance",void 0);const of=ta.compose({baseName:"text-area",baseClass:yt,template:Vd,styles:ef,shadowOptions:{delegatesFocus:!0}}),sf=(i,t)=>g`
    ${V("inline-block")} :host {
        font-family: ${W};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${C};
        background: ${he};
        border-radius: calc(${O} * 1px);
        border: calc(${I} * 1px) solid ${G};
        height: calc(${S} * 1px);
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
        padding: 0 calc(${y} * 2px + 1px);
        font-size: ${z};
        line-height: ${q};
    }

    .control:hover,
    .control:${x},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${C};
        cursor: pointer;
        font-size: ${z};
        line-height: ${q};
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
        background: ${Vt};
        border-color: ${ct};
    }

    :host(:active:not([disabled])) .root {
        background: ${Vt};
        border-color: ${st};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${L};
        box-shadow: 0 0 0 1px ${L} inset;
    }

    :host([appearance="filled"]) .root {
        background: ${mt};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${$e};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${et};
    }

    :host([disabled]) {
        opacity: ${lt};
    }

    :host([disabled]) .control {
        border-color: ${Bt};
    }
`.withBehaviors(R(g`
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
            `));class ea extends Dt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}r([d],ea.prototype,"appearance",void 0);const nf=ea.compose({baseName:"text-field",baseClass:Dt,template:od,styles:sf,shadowOptions:{delegatesFocus:!0}}),rf=(i,t)=>g`
        ${V("inline-flex")} :host {
            --toolbar-item-gap: calc(
                (var(--design-unit) + calc(var(--density) + 2)) * 1px
            );
            background-color: ${M};
            border-radius: calc(${O} * 1px);
            fill: currentcolor;
            padding: var(--toolbar-item-gap);
        }

        :host(${x}) {
            outline: calc(${I} * 1px) solid ${iu};
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
    `.withBehaviors(R(g`
            :host(:${x}) {
                box-shadow: 0 0 0 calc(${H} * 1px) ${l.Highlight};
                color: ${l.ButtonText};
                forced-color-adjust: none;
            }
        `));class af extends Jt{connectedCallback(){super.connectedCallback();const t=bi(this);t&&M.setValueFor(this,e=>Vs.getValueFor(e).evaluate(e,M.getValueFor(t)))}}const lf=af.compose({baseName:"toolbar",baseClass:Jt,template:Pd,styles:rf,shadowOptions:{delegatesFocus:!0}}),cf=(i,t)=>g`
        :host {
            contain: size;
            overflow: visible;
            height: 0;
            width: 0;
        }

        .tooltip {
            box-sizing: border-box;
            border-radius: calc(${O} * 1px);
            border: calc(${I} * 1px) solid ${L};
            box-shadow: 0 0 0 1px ${L} inset;
            background: ${mt};
            color: ${C};
            padding: 4px;
            height: fit-content;
            width: fit-content;
            font-family: ${W};
            font-size: ${z};
            line-height: ${q};
            white-space: nowrap;
            /* TODO: a mechanism to manage z-index across components
                https://github.com/microsoft/fast/issues/3813 */
            z-index: 10000;
        }

        ${i.tagFor(A)} {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: visible;
            flex-direction: row;
            pointer-events: none;
        }

        ${i.tagFor(A)}.right,
        ${i.tagFor(A)}.left {
            flex-direction: column;
        }

        ${i.tagFor(A)}.top .tooltip {
            margin-bottom: 4px;
        }

        ${i.tagFor(A)}.bottom .tooltip {
            margin-top: 4px;
        }

        ${i.tagFor(A)}.left .tooltip {
            margin-right: 4px;
        }

        ${i.tagFor(A)}.right .tooltip {
            margin-left: 4px;
        }
    `.withBehaviors(R(g`
                :host([disabled]) {
                    opacity: 1;
                }
            `)),df=nt.compose({baseName:"tooltip",template:Hd,styles:cf}),hf=g`
    .expand-collapse-glyph {
        transform: rotate(0deg);
    }
    :host(.nested) .expand-collapse-button {
        left: var(--expand-collapse-button-nested-width, calc(${S} * -1px));
    }
    :host([selected])::after {
        left: calc(${H} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(45deg);
    }
`,uf=g`
    .expand-collapse-glyph {
        transform: rotate(180deg);
    }
    :host(.nested) .expand-collapse-button {
        right: var(--expand-collapse-button-nested-width, calc(${S} * -1px));
    }
    :host([selected])::after {
        right: calc(${H} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(135deg);
    }
`,ia=sn`((${vo} / 2) * ${y}) + ((${y} * ${xe}) / 2)`,pf=eo.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=ni.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),ff=eo.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=si.getValueFor(i);return ni.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),gf=(i,t)=>g`
    ${V("block")} :host {
        contain: content;
        position: relative;
        outline: none;
        color: ${C};
        background: ${Ue};
        cursor: pointer;
        font-family: ${W};
        --expand-collapse-button-size: calc(${S} * 1px);
        --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
        outline: none;
    }

    :host(:focus) .content-region {
        outline: none;
    }

    :host(:${x}) .positioning-region {
        border: ${L} calc(${I} * 1px) solid;
        border-radius: calc(${O} * 1px);
        color: ${C};
    }

    .positioning-region {
        display: flex;
        position: relative;
        box-sizing: border-box;
        border: transparent calc(${I} * 1px) solid;
        height: calc((${S} + 1) * 1px);
    }

    .positioning-region::before {
        content: "";
        display: block;
        width: var(--tree-item-nested-width);
        flex-shrink: 0;
    }

    .positioning-region:hover {
        background: ${zr};
    }

    .positioning-region:active {
        background: ${Mr};
    }

    .content-region {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        width: 100%;
        height: calc(${S} * 1px);
        margin-inline-start: calc(${y} * 2px + 8px);
        font-size: ${z};
        line-height: ${q};
        font-weight: 400;
    }

    .items {
        display: none;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        font-size: calc(1em + (${y} + 16) * 1px);
    }

    .expand-collapse-button {
        background: none;
        border: none;
        outline: none;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: calc((${ia} + (${y} * 2)) * 1px);
        height: calc((${ia} + (${y} * 2)) * 1px);
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
        margin-inline-end: calc(${y} * 2px + 2px);
    }

    .end {
        /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
        margin-inline-start: calc(${y} * 2px + 2px);
    }

    :host([expanded]) > .items {
        display: block;
    }

    :host([disabled]) .content-region {
        opacity: ${lt};
        cursor: ${et};
    }

    :host(.nested) .content-region {
        position: relative;
        margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
        position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
        background: ${pf};
    }

    :host([selected]) .positioning-region {
        background: ${mt};
    }

    :host([selected]) .expand-collapse-button:hover {
        background: ${ff};
    }

    :host([selected])::after {
        /* The background needs to be calculated based on the selected background state
            for this control. We currently have no way of changing that, so setting to
            accent-foreground-rest for the time being */
        background: ${It};
        border-radius: calc(${O} * 1px);
        content: "";
        display: block;
        position: absolute;
        top: calc((${S} / 4) * 1px);
        width: 3px;
        height: calc((${S} / 2) * 1px);
    }

    ::slotted(${i.tagFor(rt)}) {
        --tree-item-nested-width: 1em;
        --expand-collapse-button-nested-width: calc(${S} * -1px);
    }
`.withBehaviors(new Hi(hf,uf),R(g`
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
            :host(:${x}) .positioning-region {
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
        `)),mf=rt.compose({baseName:"tree-item",template:zd,styles:gf,expandCollapseGlyph:`
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="expand-collapse-glyph"
        >
            <path
                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
            />
        </svg>
    `}),bf=(i,t)=>g`
    ${V("flex")} :host {
        flex-direction: column;
        align-items: stretch;
        min-width: fit-content;
        font-size: 0;
    }

    :host:focus-visible {
        outline: none;
    }
`,vf=Fi.compose({baseName:"tree-view",template:Md,styles:bf}),yf={fastAccordion:au,fastAccordionItem:ru,fastAnchor:pu,fastAnchoredRegion:gu,fastAvatar:xu,fastBadge:wu,fastBreadcrumb:Iu,fastBreadcrumbItem:Cu,fastButton:Su,fastCalendar:Ru,fastCard:Lu,fastCheckbox:Vu,fastCombobox:Hu,fastDataGrid:Uu,fastDataGridCell:Bu,fastDataGridRow:ju,fastDesignSystemProvider:Wu,fastDialog:Yu,fastDisclosure:Zu,fastDivider:Ku,fastFlipper:ep,fastHorizontalScroll:ap,fastListbox:up,fastOption:cp,fastMenu:mp,fastMenuItem:fp,fastNumberField:vp,fastPicker:Cp,fastPickerList:Fp,fastPickerListItem:Sp,fastPickerMenu:Tp,fastPickerMenuOption:Ip,fastProgress:Op,fastProgressRing:Rp,fastRadio:Pp,fastRadioGroup:Ap,fastSearch:zp,fastSelect:Mp,fastSkeleton:Bp,fastSlider:Gp,fastSliderLabel:qp,fastSwitch:Xp,fastTabs:tf,fastTab:Zp,fastTabPanel:Kp,fastTextArea:of,fastTextField:nf,fastTooltip:df,fastToolbar:lf,fastTreeView:vf,fastTreeItem:mf,register(i,...t){if(!!i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};export{eo as D,D as F,go as P,Es as S,d as a,He as b,g as c,V as d,wo as e,O as f,yc as g,m as h,yf as i,ut as n,oi as p};
