import{D as m,c as g,d as y,h as v,F as C,a as l,b as u,S as p,p as f,n as b,P as h,e as S,f as w,g as D,i as $}from"./vendor.fd35c0d6.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}};k();var F="/assets/polygon-worklet.d4bf10c1.js",L="/assets/masonry-worklet.67bc287d.js",P="/assets/quadtree-worklet.36472c99.js";function O(a,t){const e={};return t.forEach(n=>e[n[0]]=m.create(`${a}-${n[0]}`).withDefault(n[1])),e}const j="polygon",M=[["color","black"],["sides",3],["rotation",0],["radius",0],["rounded",!1],["scale",1],["shadow",JSON.stringify([])],["moveto",[0,0]]],r=O(j,M),T=g`
	${y("inline-block")} :host {
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
`;var _=Object.defineProperty,E=Object.getOwnPropertyDescriptor,d=(a,t,e,n)=>{for(var o=n>1?void 0:n?E(t,e):t,s=a.length-1,c;s>=0;s--)(c=a[s])&&(o=(n?c(t,e,o):c(o))||o);return n&&o&&_(t,e,o),o};const N={toView(a){return a.join(",")},fromView(a){return a.split(",").map(t=>`${t.trim()}px`)}};class i extends C{colorChanged(t,e){t!==e&&r.color.setValueFor(this,e)}sidesChanged(t,e){t!==e&&r.sides.setValueFor(this,e)}roundedChanged(t,e){t!==e&&r.rounded.setValueFor(this,e)}radiusChanged(t,e){t!==e&&r.radius.setValueFor(this,e)}rotationChanged(t,e){t!==e&&r.rotation.setValueFor(this,e)}scaleChanged(t,e){t!==e&&r.scale.setValueFor(this,e)}shadowChanged(t,e){t!==e&&r.shadow.setValueFor(this,e)}moveToChanged(t,e){t!==e&&r.moveto.setValueFor(this,e.join(","))}}d([l],i.prototype,"color",2);d([l],i.prototype,"sides",2);d([l({mode:"boolean"})],i.prototype,"rounded",2);d([l],i.prototype,"radius",2);d([l],i.prototype,"rotation",2);d([l],i.prototype,"scale",2);d([l],i.prototype,"shadow",2);d([l({attribute:"move-to",converter:N})],i.prototype,"moveTo",2);const W=i.compose({baseName:"shape",template:x,styles:T});CSS.paintWorklet.addModule(F);CSS.layoutWorklet&&(CSS.layoutWorklet.addModule(L),CSS.layoutWorklet.addModule(P));document.getElementById("mode-toggle").addEventListener("change",a=>{a.target.checked?u.withDefault(p.DarkMode):u.withDefault(p.LightMode)});const q=f("#4d525e");b.withDefault(h.from(q));const B=f("#6ac999");S.withDefault(h.from(B));u.withDefault(p.LightMode);w.withDefault(14);D.getOrCreate().withPrefix("houdini").register($,W());
