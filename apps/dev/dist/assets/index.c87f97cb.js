import{D as h,c as y,d as g,h as v,F as w,a as i,b as u,S as f,p,n as C,P as m,e as b,f as k,g as L,i as S}from"./vendor.f9ee0f77.js";const D=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}};D();var $="/assets/polygon-worklet.d4bf10c1.js",F="/assets/masonry-worklet.67bc287d.js",P="/assets/quadtree-worklet.36472c99.js";function O(a,t){const e={};return t.forEach(n=>e[n[0]]=h.create(`${a}-${n[0]}`).withDefault(n[1])),e}const M="polygon",T=[["color","black"],["sides",3],["rotation",0],["radius",0],["rounded",!1],["scale",1],["shadow",JSON.stringify([])],["moveto",[0,0]]],r=O(M,T),j=y`
	${g("inline-block")} :host {
		${r.color};
		${r.sides};
		${r.rotation};
		${r.radius};
		${r.rounded};
		${r.scale};
		${r.shadow};
		${r.moveto};

		background-image: paint(polygon);
		padding: calc(var(--polygon-scale) * 1px);
		transform: translate(var(--polygon-moveto));
	}
`,x=v`
	<template>
		<slot></slot>
	</template>
`;var E=Object.defineProperty,_=Object.getOwnPropertyDescriptor,d=(a,t,e,n)=>{for(var o=n>1?void 0:n?_(t,e):t,s=a.length-1,c;s>=0;s--)(c=a[s])&&(o=(n?c(t,e,o):c(o))||o);return n&&o&&E(t,e,o),o};const B={toView(a){return a.join(",")},fromView(a){return a.split(",").map(t=>`${t.trim()}px`)}};class l extends w{colorChanged(t,e){t!==e&&r.color.setValueFor(this,e)}sidesChanged(t,e){t!==e&&r.sides.setValueFor(this,e)}roundedChanged(t,e){t!==e&&r.rounded.setValueFor(this,e)}radiusChanged(t,e){t!==e&&r.radius.setValueFor(this,e)}rotationChanged(t,e){t!==e&&r.rotation.setValueFor(this,e)}scaleChanged(t,e){t!==e&&r.scale.setValueFor(this,e)}shadowChanged(t,e){t!==e&&r.shadow.setValueFor(this,e)}moveToChanged(t,e){t!==e&&r.moveto.setValueFor(this,e.join(","))}}d([i],l.prototype,"color",2);d([i],l.prototype,"sides",2);d([i({mode:"boolean"})],l.prototype,"rounded",2);d([i],l.prototype,"radius",2);d([i],l.prototype,"rotation",2);d([i],l.prototype,"scale",2);d([i],l.prototype,"shadow",2);d([i({attribute:"move-to",converter:B})],l.prototype,"moveTo",2);const N=l.compose({baseName:"shape",template:x,styles:j});CSS.paintWorklet.addModule($);CSS.layoutWorklet?(CSS.layoutWorklet.addModule(F),CSS.layoutWorklet.addModule(P)):(document.getElementById("masonry").innerHTML="Layout worklets currently only work on chrome canary or edge canary with experimental platform features enabled.",document.getElementById("quadtree").innerHTML="Layout worklets currently only work on chrome canary or edge canary with experimental platform features enabled.");document.getElementById("mode-toggle").addEventListener("change",a=>{a.target.checked?u.withDefault(f.DarkMode):u.withDefault(f.LightMode)});const q=p("#4d525e");C.withDefault(m.from(q));const I=p("#6ac999");b.withDefault(m.from(I));u.withDefault(f.LightMode);k.withDefault(14);L.getOrCreate().withPrefix("houdini").register(S,N());
