import{p as a,n as i,P as n,a as c,b as u,S as d,D as f,c as p}from"./vendor.df4e6871.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};m();var y="/assets/polygon-worklet.d4bf10c1.js",g="/assets/masonry-worklet.67bc287d.js",h="/assets/quadtree-worklet.6cc44f40.js";CSS.paintWorklet.addModule(y);CSS.layoutWorklet&&(CSS.layoutWorklet.addModule(g),CSS.layoutWorklet.addModule(h));const S=a("#341E11");i.withDefault(n.from(S));const L=a("#4d525e");c.withDefault(n.from(L));u.withDefault(d.LightMode);const w=document.querySelector("#app");f.getOrCreate(w).withPrefix("houdini").register(p);