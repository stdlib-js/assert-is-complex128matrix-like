// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(t){var e,n,s;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,s=parseInt(n,10),!isFinite(s)){if(!r(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===t.specifier||10!==e)&&(s=4294967295+s+1),s<0?(n=(-s).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=s.toString(e),s||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,c=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,_=/\.0*e/,b=/(\..*[^0])0*e/;function m(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":f(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=l.call(n,b,"$1e"),n=l.call(n,_,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,h,"e-0$1"),t.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,y,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===c.call(t.specifier)?c.call(n):u.call(n)}function w(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var v=String.fromCharCode,O=isNaN,A=Array.isArray;function E(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function j(t){var e,r,n,o,a,f,u,c,l,p,h,g,y;if(!A(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(f="",u=1,c=0;c<t.length;c++)if("string"==typeof(n=t[c]))f+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(o=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,O(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):v(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,g=n.padRight,y=void 0,(y=h-p.length)<0?p:p=g?p+w(y):w(y)+p)),f+=n.arg||"",u+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function U(t){var e,r,n,i;for(r=[],i=0,n=x.exec(t);n;)(e=t.slice(i,x.lastIndex-n[0].length)).length&&r.push(e),r.push(I(n)),i=x.lastIndex,n=x.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function S(t){var e,r;if("string"!=typeof t)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[U(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return j.apply(null,e)}var T,N=Object.prototype,R=N.toString,L=N.__defineGetter__,B=N.__defineSetter__,F=N.__lookupGetter__,V=N.__lookupSetter__;T=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(F.call(t,e)||V.call(t,e)?(n=t.__proto__,t.__proto__=N,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(t,e,r.get),a&&B&&B.call(t,e,r.set),t};var C=T;function k(t,e,r){C(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function M(t){return"boolean"==typeof t}var P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return P&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function $(t,e){return null!=t&&Y.call(t,e)}var J="function"==typeof Symbol?Symbol:void 0,W="function"==typeof J?J.toStringTag:"",z=G()?function(t){var e,r,n;if(null==t)return D.call(t);r=t[W],e=$(t,W);try{t[W]=void 0}catch(e){return D.call(t)}return n=D.call(t),e?t[W]=r:delete t[W],n}:function(t){return D.call(t)},X=Boolean,Z=Boolean.prototype.toString,H=G();function q(t){return"object"==typeof t&&(t instanceof X||(H?function(t){try{return Z.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function K(t){return M(t)||q(t)}k(K,"isPrimitive",M),k(K,"isObject",q);var Q="object"==typeof self?self:null,tt="object"==typeof window?window:null,et="object"==typeof globalThis?globalThis:null;function rt(t){if(arguments.length){if(!M(t))throw new TypeError(S("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(et)return et;if(Q)return Q;if(tt)return tt;throw new Error("unexpected error. Unable to resolve global object.")}var nt=rt();function it(t,e,r){C(t,e,{configurable:!1,enumerable:!1,get:r})}var ot={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function at(t){return Math.abs(t)}function st(t,e){return e&&(2===t||3===t)}function ft(t,e){return e&&(1===t||3===t)}function ut(t,e,r){var n,i,o,a,s;for(n=t.length,i=r,o=r,s=0;s<n;s++){if(0===t[s])return[r,r];(a=e[s])>0?o+=a*(t[s]-1):a<0&&(i+=a*(t[s]-1))}return[i,o]}function ct(t){return t.re}function lt(t){return t.im}function pt(t){return"string"==typeof t}k(ut,"assign",(function(t,e,r,n){var i,o,a,s,f;for(i=t.length,o=r,a=r,f=0;f<i;f++){if(0===t[f])return n[0]=r,n[1]=r,n;(s=e[f])>0?a+=s*(t[f]-1):s<0&&(o+=s*(t[f]-1))}return n[0]=o,n[1]=a,n}));var ht=String.prototype.valueOf,gt=G();function yt(t){return"object"==typeof t&&(t instanceof String||(gt?function(t){try{return ht.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function dt(t){return pt(t)||yt(t)}k(dt,"isPrimitive",pt),k(dt,"isObject",yt);var _t=/[-\/\\^$*+?.()|[\]{}]/g,bt=/./,mt=rt(),wt=mt.document&&mt.document.childNodes,vt=Int8Array;function Ot(){return/^\s*function\s*([^(]*)/i}var At=/^\s*function\s*([^(]*)/i;k(Ot,"REGEXP",At);var Et=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};function jt(t){return null!==t&&"object"==typeof t}function xt(t){var e,r,n,i;if(("Object"===(r=z(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=At.exec(n.toString()))return e[1]}return jt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}k(jt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(S("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Et(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(jt));var It="function"==typeof bt||"object"==typeof vt||"function"==typeof wt?function(t){return xt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?xt(t).toLowerCase():e},Ut=RegExp.prototype.exec,St=G();function Tt(t){return"object"==typeof t&&(t instanceof RegExp||(St?function(t){try{return Ut.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===z(t)))}function Nt(t,e,r){if(!pt(t))throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",t));if(pt(e))e=new RegExp(function(t){var e,r;if(!pt(t))throw new TypeError(S("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(_t,"\\$&"):(e=(e=t.substring(1,r)).replace(_t,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Tt(e))throw new TypeError(S("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!pt(r)&&"function"!==It(r))throw new TypeError(S("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Rt,Lt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"},Bt="function"==typeof Uint8Array,Ft="function"==typeof Uint8Array?Uint8Array:null,Vt="function"==typeof Uint8Array?Uint8Array:void 0;Rt=function(){var t,e,r;if("function"!=typeof Ft)return!1;try{e=new Ft(e=[1,3.14,-3.14,256,257]),r=e,t=(Bt&&r instanceof Uint8Array||"[object Uint8Array]"===z(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Vt:function(){throw new Error("not implemented")};var Ct,kt=Rt,Mt="function"==typeof Uint16Array,Pt="function"==typeof Uint16Array?Uint16Array:null,Gt="function"==typeof Uint16Array?Uint16Array:void 0;Ct=function(){var t,e,r;if("function"!=typeof Pt)return!1;try{e=new Pt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Mt&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Gt:function(){throw new Error("not implemented")};var Dt,Yt={uint16:Ct,uint8:kt};(Dt=new Yt.uint16(1))[0]=4660;var $t,Jt=52===new Yt.uint8(Dt.buffer)[0],Wt="function"==typeof ArrayBuffer,zt="function"==typeof Float64Array,Xt="function"==typeof Float64Array?Float64Array:null,Zt="function"==typeof Float64Array?Float64Array:void 0;$t=function(){var t,e,r;if("function"!=typeof Xt)return!1;try{e=new Xt([1,3.14,-3.14,NaN]),r=e,t=(zt&&r instanceof Float64Array||"[object Float64Array]"===z(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Zt:function(){throw new Error("not implemented")};var Ht,qt=$t,Kt="function"==typeof ArrayBuffer?ArrayBuffer:null,Qt="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Ht=function(){var t,e,r,n;if("function"!=typeof Kt)return!1;try{r=new Kt(16),n=r,(t=(Wt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===z(n))&&"function"==typeof Kt.isView)&&((e=new qt(r))[0]=-3.14,e[1]=NaN,t=t&&Kt.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?Qt:function(){throw new Error("not implemented")};var te,ee=Ht,re="function"==typeof DataView,ne="function"==typeof DataView?DataView:null,ie="function"==typeof DataView?DataView:void 0;te=function(){var t,e,r,n;if("function"!=typeof ne)return!1;try{r=new ee(24),e=new ne(r,8),n=e,(t=(re&&n instanceof DataView||"[object DataView]"===z(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?ie:function(){throw new Error("not implemented")};var oe=te,ae="function"==typeof BigInt?BigInt:void 0,se={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function fe(){var t;return 0===arguments.length?se.all.slice():(t=se[arguments[0]])?t.slice():[]}function ue(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ce(t,e,r){C(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function le(t){return Object.keys(Object(t))}var pe,he=void 0!==Object.keys;function ge(t){return"[object Arguments]"===z(t)}pe=function(){return ge(arguments)}();var ye=pe;function de(t){return"number"==typeof t}var _e=Number,be=_e.prototype.toString,me=G();function we(t){return"object"==typeof t&&(t instanceof _e||(me?function(t){try{return be.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function ve(t){return de(t)||we(t)}function Oe(t){return t!=t}function Ae(t){return de(t)&&Oe(t)}function Ee(t){return we(t)&&Oe(t.valueOf())}function je(t){return Ae(t)||Ee(t)}k(ve,"isPrimitive",de),k(ve,"isObject",we),k(je,"isPrimitive",Ae),k(je,"isObject",Ee);var xe=Number.POSITIVE_INFINITY,Ie=_e.NEGATIVE_INFINITY,Ue=Math.floor;function Se(t){return Ue(t)===t}function Te(t){return t<xe&&t>Ie&&Se(t)}function Ne(t){return de(t)&&Te(t)}function Re(t){return we(t)&&Te(t.valueOf())}function Le(t){return Ne(t)||Re(t)}k(Le,"isPrimitive",Ne),k(Le,"isObject",Re);var Be=Object.prototype.propertyIsEnumerable,Fe=!Be.call("beep","0");function Ve(t,e){var r;return null!=t&&(!(r=Be.call(t,e))&&Fe&&dt(t)?!Ae(e=+e)&&Ne(e)&&e>=0&&e<t.length:r)}var Ce=ye?ge:function(t){return null!==t&&"object"==typeof t&&!Et(t)&&"number"==typeof t.length&&Se(t.length)&&t.length>=0&&t.length<=4294967295&&$(t,"callee")&&!Ve(t,"callee")},ke=Array.prototype.slice,Me=Ve((function(){}),"prototype"),Pe=!Ve({toString:null},"toString"),Ge=9007199254740991;function De(t,e,r){var n,i,o;if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&Se(o.length)&&o.length>=0&&o.length<=Ge||pt(t)))throw new TypeError(S("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Ne(r))throw new TypeError(S("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(je(e)){for(;i<n;i++)if(je(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Ye(t){return t.constructor&&t.constructor.prototype===t}var $e,Je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],We="undefined"==typeof window?void 0:window,ze=function(){var t;if("undefined"===It(We))return!1;for(t in We)try{-1===De(Je,t)&&$(We,t)&&null!==We[t]&&"object"===It(We[t])&&Ye(We[t])}catch(t){return!0}return!1}(),Xe="undefined"!=typeof window,Ze=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];$e=he?function(){return 2!==(le(arguments)||"").length}(1,2)?function(t){return Ce(t)?le(ke.call(t)):le(t)}:le:function(t){var e,r,n,i,o,a,s;if(i=[],Ce(t)){for(s=0;s<t.length;s++)i.push(s.toString());return i}if("string"==typeof t){if(t.length>0&&!$(t,"0"))for(s=0;s<t.length;s++)i.push(s.toString())}else{if(0==(n="function"==typeof t)&&!jt(t))return i;r=Me&&n}for(o in t)r&&"prototype"===o||!$(t,o)||i.push(String(o));if(Pe)for(e=function(t){if(!1===Xe&&!ze)return Ye(t);try{return Ye(t)}catch(t){return!1}}(t),s=0;s<Ze.length;s++)a=Ze[s],e&&"constructor"===a||!$(t,a)||i.push(String(a));return i};var He=$e;k(fe,"enum",ue),function(t,e){var r,n,i;for(r=He(e),i=0;i<r.length;i++)ce(t,n=r[i],e[n])}(fe,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var qe=["row-major","column-major"];function Ke(){return{"row-major":1,"column-major":2}}k((function(){return qe.slice()}),"enum",Ke);var Qe=["throw","normalize","clamp","wrap"];function tr(){return{throw:1,clamp:2,wrap:3,normalize:4}}k((function(){return Qe.slice()}),"enum",tr);var er={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},rr={"row-major":1,"column-major":2},nr={throw:1,clamp:2,wrap:3,normalize:4},ir=4294967295,or=4294967296,ar=new kt(8),sr=new oe(ar.buffer);function fr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<ar.length;a++)e[n]=0,n+=r;return e}for(o=(t&ir)>>>0,i=Ue(t/or),Jt?(sr.setUint32(0,o,Jt),sr.setUint32(4,i,Jt)):(sr.setUint32(0,i,Jt),sr.setUint32(4,o,Jt)),a=0;a<ar.length;a++)e[n]=ar[a],n+=r;return e}k((function(t){var e,r,n,i;return e=new kt(8),0===t||(i=(4294967295&t)>>>0,n=Ue(t/4294967296),r=new oe(e.buffer),Jt?(r.setUint32(0,i,Jt),r.setUint32(4,n,Jt)):(r.setUint32(0,n,Jt),r.setUint32(4,i,Jt))),e}),"assign",fr);var ur={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},cr={"row-major":1,"column-major":2},lr={throw:1,clamp:2,wrap:3,normalize:4};function pr(t,e,r,n,i,o){var a,s,f,u,c;if(!(this instanceof pr))return new pr(t,e,r,n,i,o);for(u=1,c=0;c<r.length;c++)u*=r[c];return s=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*u:null,this._byteLength=s,this._bytesPerElement=function(t){return ot[t]||null}(t),this._buffer=e,this._dtype=t,this._length=u,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=X(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=ut(e,r,n))[1]-o[0]+1}(u,r,n,i,this._iterationOrder),f=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=at(t[0]),a=1;a<r;a++){if(o=at(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:ft(f,a),COLUMN_MAJOR_CONTIGUOUS:st(f,a),READONLY:!1},this.__meta_dataview__=null,this}function hr(t){return function(t){return t instanceof pr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length}return k(pr,"name","ndarray"),it(pr.prototype,"byteLength",(function(){return this._byteLength})),it(pr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),it(pr.prototype,"data",(function(){return this._buffer})),it(pr.prototype,"dtype",(function(){return this._dtype})),it(pr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),it(pr.prototype,"length",(function(){return this._length})),it(pr.prototype,"ndims",(function(){return this._ndims})),it(pr.prototype,"offset",(function(){return this._offset})),it(pr.prototype,"order",(function(){return this._order})),it(pr.prototype,"shape",(function(){return this._shape.slice()})),it(pr.prototype,"strides",(function(){return this._strides.slice()})),k(pr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),k(pr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),k(pr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),k(pr.prototype,"iset",(function(t,e){var r,n,i,o,a,s;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(s=0;s<i;s++)t-=a=t%n[s],t/=n[s],o+=a*r[s];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(s=i-1;s>=0;s--)t-=a=t%n[s],t/=n[s],o+=a*r[s];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),k(pr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=ct(i=this.iget(o))+", "+lt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=ct(i=this.iget(o))+", "+lt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=ct(i=this.iget(this._length-1-o))+", "+lt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Nt(Lt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),k(pr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(ct(r),lt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),k(pr.prototype,"__array_meta_dataview__","function"==typeof nt.BigInt&&"function"==typeof BigInt&&"bigint"==typeof nt.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,s,f,u,c,l,p,h;if(f=this._mode||"throw",a=this._submode||[f],r=33+16*(l=this._ndims)+(p=a.length),(s=this.__meta_dataview__)&&s.byteLength===r)return s;for(s=new oe(new ee(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,u=0,s.setInt8(u,Jt?1:0),u+=1,s.setInt16(u,er[n],Jt),u+=2,s.setBigInt64(u,ae(l),Jt),c=8*l,u+=8,h=0;h<l;h++)s.setBigInt64(u,ae(i[h]),Jt),s.setBigInt64(u+c,ae(o[h]*t),Jt),u+=8;for(u+=c,s.setBigInt64(u,ae(this._offset*t),Jt),u+=8,s.setInt8(u,rr[this._order]),u+=1,s.setInt8(u,nr[f]),u+=1,s.setBigInt64(u,ae(p),Jt),u+=8,h=0;h<p;h++)s.setInt8(u,nr[a[h]]),u+=1;return e=0,e|=this._flags.READONLY?4:0,s.setInt32(u,e,Jt),this.__meta_dataview__=s,s}:function(){var t,e,r,n,i,o,a,s,f,u,c,l,p,h,g;if(u=this._mode||"throw",s=this._submode||[u],n=33+16*(p=this._ndims)+(h=s.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new oe(new ee(n)),e=new kt(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,Jt?1:0),c+=1,f.setInt16(c,ur[i],Jt),fr(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)fr(o[g],e,1,c),fr(a[g]*t,e,1,c+l),c+=8;for(c+=l,fr(this._offset*t,e,1,c),c+=8,f.setInt8(c,cr[this._order]),c+=1,f.setInt8(c,lr[u]),fr(h,e,1,c+=1),c+=8,g=0;g<h;g++)f.setInt8(c,lr[s[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(c,r,Jt),this.__meta_dataview__=f,f}),function(t){return hr(t)&&"complex128"===t.dtype}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isComplex128MatrixLike=e();
//# sourceMappingURL=browser.js.map
