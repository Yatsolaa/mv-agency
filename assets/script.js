"use strict";!function o(r,c,a){function u(t,e){if(!c[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=c[t]={exports:{}},r[t][0].call(n.exports,function(e){return u(r[t][1][e]||e)},n,n.exports,o,r,c,a)}return c[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,n){window.onload=function(){document.body.style.overflow="auto",document.querySelector(".preloader").classList.add("preloader--disabled")};var u=document.querySelector(".js-animated-text"),l=document.querySelector(".js-to-left"),s=document.querySelector(".js-to-right");window.addEventListener("scroll",function(){var e,t,n,o,r,c=u.offsetTop,a=window.scrollY;t=u,n=window.scrollY,o=n+window.innerHeight,r=t.offsetTop,t=r+t.offsetHeight,(n<=r&&r<=o||n<=t&&t<=o)&&(r=768<window.screen.width?(e=(a-c)/1.5+300,-(a-c)/1.5-300):(e=(a-c)/1.5+900,-(a-c)/1.5-900),l.style.transform="translateX("+r+"px)",s.style.transform="translateX("+e+"px)")}),document.querySelectorAll(".js-contact-us").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".popup").classList.add("is-active"),document.querySelector(".overlay").classList.add("is-active"),document.querySelector("body").style.overflow="hidden"})}),document.querySelector(".overlay").addEventListener("click",function(){document.querySelector(".popup").classList.remove("is-active"),document.querySelector(".overlay").classList.remove("is-active"),document.querySelector("body").style.overflow="auto"}),document.getElementById("contactForm").addEventListener("submit",function(e){e.preventDefault(),e={name:document.getElementById("name").value,email:document.getElementById("email").value,number:document.getElementById("phone").value,message:document.getElementById("message").value},emailjs.send("service_9t61o06","template_tfb31ug",e).then(function(e){document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("phone").value="",document.getElementById("message").value="",document.querySelector(".popup").classList.remove("is-active"),document.querySelector(".overlay").classList.remove("is-active"),document.querySelector("body").style.overflow="auto"}).catch(function(e){return console.log(e)})}),document.querySelectorAll(".js-language-swither").forEach(function(e){e.addEventListener("click",function(e){document.querySelectorAll(".js-language-swither").forEach(function(e){e.classList.remove("header__language-switcher--current")}),setTimeout(function(){var e;e=window.location.hash.substring(1),o=e,r()},10),e.target.classList.add("header__language-switcher--current")})});var o="en";function r(){var e=document.getElementById("".concat(o,"-language"));fetch(e.src).then(function(e){return e.json()}).then(function(o){document.querySelectorAll("[data-translate]").forEach(function(e){var t=e.dataset.translate.split("."),n=o;t.forEach(function(e){n=n[e]}),console.log("element type",e.tagName),"INPUT"==e.tagName||"TEXTAREA"==e.tagName?e.placeholder=n||"":e.innerHTML=n||""})})}document.addEventListener("DOMContentLoaded",r)},{}]},{},[1]);