"use strict";var T9WORD=T9WORD||{};T9WORD.controller=function(){function a(b){for(var c=b[0],h=0,i=d[c].length;i>h;h+=1)e=d[c][h],b[1]?(g+=e,a(b.slice(1))):f.push((g+e).toLowerCase());return e="",g=g.slice(0,-1),f}function b(a){return""===a?(c(1),!1):/^\d*$/.test(a)?(a=a.replace(/[01]/g,""),0===a.length?(c(2),!1):"number"==typeof a?a.toString().split(/\B/):a.split(/\B/)):(c(0),!1)}function c(a){var b=["Entry can only contain numbers","Please enter some numbers","A combination of only zeros and ones produces no results"];h=b[a]}var d={0:[],1:[],2:["A","B","C"],3:["D","E","F"],4:["G","H","I"],5:["J","K","L"],6:["M","N","O"],7:["P","Q","R","S"],8:["T","U","V"],9:["W","X","Y","Z"]},e="",f=[],g="",h="";return function(c){var d=b(c);return d?(f=[],f=a(d)):h}}();var T9WORD=T9WORD||{};T9WORD.view=function(){var a=document.getElementsByTagName("button")[0],b=document.getElementById("numbers"),c=document.getElementById("output");a.onclick=function(){c.value=T9WORD.controller(b.value)},b.focus(),window.onkeypress=function(a){13===a.which&&(a.preventDefault(),c.value=T9WORD.controller(b.value))}}();