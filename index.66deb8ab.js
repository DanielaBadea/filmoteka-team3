var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={},r=e.parcelRequire713f;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire713f=r),r.register("kEUo3",(function(t,n){(function(){var i,r="Expected a function",o="__lodash_hash_undefined__",s="__lodash_placeholder__",a=16,l=32,c=64,u=128,h=256,d=1/0,f=9007199254740991,p=NaN,m=4294967295,g=[["ary",u],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",l],["partialRight",c],["rearg",h]],_="[object Arguments]",v="[object Array]",y="[object Boolean]",b="[object Date]",w="[object Error]",x="[object Function]",k="[object GeneratorFunction]",C="[object Map]",I="[object Number]",T="[object Object]",N="[object Promise]",E="[object RegExp]",S="[object Set]",R="[object String]",A="[object Symbol]",P="[object WeakMap]",L="[object ArrayBuffer]",O="[object DataView]",D="[object Float32Array]",M="[object Float64Array]",z="[object Int8Array]",F="[object Int16Array]",W="[object Int32Array]",U="[object Uint8Array]",j="[object Uint8ClampedArray]",B="[object Uint16Array]",H="[object Uint32Array]",q=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,$=/(__e\(.*?\)|\b__t\)) \+\n'';/g,X=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(X.source),Y=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Q=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/,ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/[\\^$.*+?()[\]{}|]/g,re=RegExp(ie.source),oe=/^\s+/,se=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,le=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,he=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pe=/\w*$/,me=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,_e=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,ye=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,xe=/['\n\r\u2028\u2029\\]/g,ke="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ce="\\u2700-\\u27bf",Ie="a-z\\xdf-\\xf6\\xf8-\\xff",Te="A-Z\\xc0-\\xd6\\xd8-\\xde",Ne="\\ufe0e\\ufe0f",Ee="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Se="['’]",Re="[\ud800-\udfff]",Ae="["+Ee+"]",Pe="["+ke+"]",Le="\\d+",Oe="[\\u2700-\\u27bf]",De="["+Ie+"]",Me="[^\ud800-\udfff"+Ee+Le+Ce+Ie+Te+"]",ze="[^\ud800-\udfff]",Fe="(?:\ud83c[\udde6-\uddff]){2}",We="[\ud800-\udbff][\udc00-\udfff]",Ue="["+Te+"]",je="(?:"+De+"|"+Me+")",Be="(?:"+Ue+"|"+Me+")",He="(?:['’](?:d|ll|m|re|s|t|ve))?",qe="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+Pe+"|"+"\ud83c[\udffb-\udfff])"+"?",$e="[\\ufe0e\\ufe0f]?",Xe=$e+Ve+("(?:\\u200d(?:"+[ze,Fe,We].join("|")+")"+$e+Ve+")*"),Ke="(?:"+[Oe,Fe,We].join("|")+")"+Xe,Ge="(?:"+[ze+Pe+"?",Pe,Fe,We,Re].join("|")+")",Ye=RegExp(Se,"g"),Je=RegExp(Pe,"g"),Qe=RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|"+Ge+Xe,"g"),Ze=RegExp([Ue+"?"+De+"+"+He+"(?="+[Ae,Ue,"$"].join("|")+")",Be+"+"+qe+"(?="+[Ae,Ue+je,"$"].join("|")+")",Ue+"?"+je+"+"+He,Ue+"+"+qe,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Le,Ke].join("|"),"g"),et=RegExp("[\\u200d\ud800-\udfff"+ke+Ne+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],it=-1,rt={};rt[D]=rt[M]=rt[z]=rt[F]=rt[W]=rt[U]=rt[j]=rt[B]=rt[H]=!0,rt[_]=rt[v]=rt[L]=rt[y]=rt[O]=rt[b]=rt[w]=rt[x]=rt[C]=rt[I]=rt[T]=rt[E]=rt[S]=rt[R]=rt[P]=!1;var ot={};ot[_]=ot[v]=ot[L]=ot[O]=ot[y]=ot[b]=ot[D]=ot[M]=ot[z]=ot[F]=ot[W]=ot[C]=ot[I]=ot[T]=ot[E]=ot[S]=ot[R]=ot[A]=ot[U]=ot[j]=ot[B]=ot[H]=!0,ot[w]=ot[x]=ot[P]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},at=parseFloat,lt=parseInt,ct="object"==typeof e&&e&&e.Object===Object&&e,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=ct||ut||Function("return this")(),dt=n&&!n.nodeType&&n,ft=dt&&t&&!t.nodeType&&t,pt=ft&&ft.exports===dt,mt=pt&&ct.process,gt=function(){try{var e=ft&&ft.require&&ft.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),_t=gt&&gt.isArrayBuffer,vt=gt&&gt.isDate,yt=gt&&gt.isMap,bt=gt&&gt.isRegExp,wt=gt&&gt.isSet,xt=gt&&gt.isTypedArray;function kt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ct(e,t,n,i){for(var r=-1,o=null==e?0:e.length;++r<o;){var s=e[r];t(i,s,n(s),e)}return i}function It(e,t){for(var n=-1,i=null==e?0:e.length;++n<i&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Nt(e,t){for(var n=-1,i=null==e?0:e.length;++n<i;)if(!t(e[n],n,e))return!1;return!0}function Et(e,t){for(var n=-1,i=null==e?0:e.length,r=0,o=[];++n<i;){var s=e[n];t(s,n,e)&&(o[r++]=s)}return o}function St(e,t){return!!(null==e?0:e.length)&&Wt(e,t,0)>-1}function Rt(e,t,n){for(var i=-1,r=null==e?0:e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function At(e,t){for(var n=-1,i=null==e?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r}function Pt(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function Lt(e,t,n,i){var r=-1,o=null==e?0:e.length;for(i&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}function Ot(e,t,n,i){var r=null==e?0:e.length;for(i&&r&&(n=e[--r]);r--;)n=t(n,e[r],r,e);return n}function Dt(e,t){for(var n=-1,i=null==e?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var Mt=Ht("length");function zt(e,t,n){var i;return n(e,(function(e,n,r){if(t(e,n,r))return i=n,!1})),i}function Ft(e,t,n,i){for(var r=e.length,o=n+(i?1:-1);i?o--:++o<r;)if(t(e[o],o,e))return o;return-1}function Wt(e,t,n){return t==t?function(e,t,n){var i=n-1,r=e.length;for(;++i<r;)if(e[i]===t)return i;return-1}(e,t,n):Ft(e,jt,n)}function Ut(e,t,n,i){for(var r=n-1,o=e.length;++r<o;)if(i(e[r],t))return r;return-1}function jt(e){return e!=e}function Bt(e,t){var n=null==e?0:e.length;return n?$t(e,t)/n:p}function Ht(e){return function(t){return null==t?i:t[e]}}function qt(e){return function(t){return null==e?i:e[t]}}function Vt(e,t,n,i,r){return r(e,(function(e,r,o){n=i?(i=!1,e):t(n,e,r,o)})),n}function $t(e,t){for(var n,r=-1,o=e.length;++r<o;){var s=t(e[r]);s!==i&&(n=n===i?s:n+s)}return n}function Xt(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function Kt(e){return e?e.slice(0,fn(e)+1).replace(oe,""):e}function Gt(e){return function(t){return e(t)}}function Yt(e,t){return At(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,i=e.length;++n<i&&Wt(t,e[n],0)>-1;);return n}function Zt(e,t){for(var n=e.length;n--&&Wt(t,e[n],0)>-1;);return n}function en(e,t){for(var n=e.length,i=0;n--;)e[n]===t&&++i;return i}var tn=qt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nn=qt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rn(e){return"\\"+st[e]}function on(e){return et.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function an(e,t){return function(n){return e(t(n))}}function ln(e,t){for(var n=-1,i=e.length,r=0,o=[];++n<i;){var a=e[n];a!==t&&a!==s||(e[n]=s,o[r++]=n)}return o}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function hn(e){return on(e)?function(e){var t=Qe.lastIndex=0;for(;Qe.test(e);)++t;return t}(e):Mt(e)}function dn(e){return on(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function fn(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var pn=qt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var mn=function e(t){var n,se=(t=null==t?ht:mn.defaults(ht.Object(),t,mn.pick(ht,nt))).Array,ke=t.Date,Ce=t.Error,Ie=t.Function,Te=t.Math,Ne=t.Object,Ee=t.RegExp,Se=t.String,Re=t.TypeError,Ae=se.prototype,Pe=Ie.prototype,Le=Ne.prototype,Oe=t["__core-js_shared__"],De=Pe.toString,Me=Le.hasOwnProperty,ze=0,Fe=(n=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",We=Le.toString,Ue=De.call(Ne),je=ht._,Be=Ee("^"+De.call(Me).replace(ie,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=pt?t.Buffer:i,qe=t.Symbol,Ve=t.Uint8Array,$e=He?He.allocUnsafe:i,Xe=an(Ne.getPrototypeOf,Ne),Ke=Ne.create,Ge=Le.propertyIsEnumerable,Qe=Ae.splice,et=qe?qe.isConcatSpreadable:i,st=qe?qe.iterator:i,ct=qe?qe.toStringTag:i,ut=function(){try{var e=po(Ne,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ft=ke&&ke.now!==ht.Date.now&&ke.now,mt=t.setTimeout!==ht.setTimeout&&t.setTimeout,gt=Te.ceil,Mt=Te.floor,qt=Ne.getOwnPropertySymbols,gn=He?He.isBuffer:i,_n=t.isFinite,vn=Ae.join,yn=an(Ne.keys,Ne),bn=Te.max,wn=Te.min,xn=ke.now,kn=t.parseInt,Cn=Te.random,In=Ae.reverse,Tn=po(t,"DataView"),Nn=po(t,"Map"),En=po(t,"Promise"),Sn=po(t,"Set"),Rn=po(t,"WeakMap"),An=po(Ne,"create"),Pn=Rn&&new Rn,Ln={},On=qo(Tn),Dn=qo(Nn),Mn=qo(En),zn=qo(Sn),Fn=qo(Rn),Wn=qe?qe.prototype:i,Un=Wn?Wn.valueOf:i,jn=Wn?Wn.toString:i;function Bn(e){if(aa(e)&&!Ys(e)&&!(e instanceof $n)){if(e instanceof Vn)return e;if(Me.call(e,"__wrapped__"))return Vo(e)}return new Vn(e)}var Hn=function(){function e(){}return function(t){if(!sa(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=i,n}}();function qn(){}function Vn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function $n(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=m,this.__views__=[]}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Gn;++t<n;)this.add(e[t])}function Jn(e){var t=this.__data__=new Kn(e);this.size=t.size}function Qn(e,t){var n=Ys(e),i=!n&&Gs(e),r=!n&&!i&&ea(e),o=!n&&!i&&!r&&ma(e),s=n||i||r||o,a=s?Xt(e.length,Se):[],l=a.length;for(var c in e)!t&&!Me.call(e,c)||s&&("length"==c||r&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||wo(c,l))||a.push(c);return a}function Zn(e){var t=e.length;return t?e[Yi(0,t-1)]:i}function ei(e,t){return Fo(Ar(e),ci(t,0,e.length))}function ti(e){return Fo(Ar(e))}function ni(e,t,n){(n!==i&&!$s(e[t],n)||n===i&&!(t in e))&&ai(e,t,n)}function ii(e,t,n){var r=e[t];Me.call(e,t)&&$s(r,n)&&(n!==i||t in e)||ai(e,t,n)}function ri(e,t){for(var n=e.length;n--;)if($s(e[n][0],t))return n;return-1}function oi(e,t,n,i){return pi(e,(function(e,r,o){t(i,e,n(e),o)})),i}function si(e,t){return e&&Pr(t,za(t),e)}function ai(e,t,n){"__proto__"==t&&ut?ut(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function li(e,t){for(var n=-1,r=t.length,o=se(r),s=null==e;++n<r;)o[n]=s?i:Pa(e,t[n]);return o}function ci(e,t,n){return e==e&&(n!==i&&(e=e<=n?e:n),t!==i&&(e=e>=t?e:t)),e}function ui(e,t,n,r,o,s){var a,l=1&t,c=2&t,u=4&t;if(n&&(a=o?n(e,r,o,s):n(e)),a!==i)return a;if(!sa(e))return e;var h=Ys(e);if(h){if(a=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&Me.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Ar(e,a)}else{var d=_o(e),f=d==x||d==k;if(ea(e))return Ir(e,l);if(d==T||d==_||f&&!o){if(a=c||f?{}:yo(e),!l)return c?function(e,t){return Pr(e,go(e),t)}(e,function(e,t){return e&&Pr(t,Fa(t),e)}(a,e)):function(e,t){return Pr(e,mo(e),t)}(e,si(a,e))}else{if(!ot[d])return o?e:{};a=function(e,t,n){var i=e.constructor;switch(t){case L:return Tr(e);case y:case b:return new i(+e);case O:return function(e,t){var n=t?Tr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case D:case M:case z:case F:case W:case U:case j:case B:case H:return Nr(e,n);case C:return new i;case I:case R:return new i(e);case E:return function(e){var t=new e.constructor(e.source,pe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case S:return new i;case A:return r=e,Un?Ne(Un.call(r)):{}}var r}(e,d,l)}}s||(s=new Jn);var p=s.get(e);if(p)return p;s.set(e,a),da(e)?e.forEach((function(i){a.add(ui(i,t,n,i,e,s))})):la(e)&&e.forEach((function(i,r){a.set(r,ui(i,t,n,r,e,s))}));var m=h?i:(u?c?so:oo:c?Fa:za)(e);return It(m||e,(function(i,r){m&&(i=e[r=i]),ii(a,r,ui(i,t,n,r,e,s))})),a}function hi(e,t,n){var r=n.length;if(null==e)return!r;for(e=Ne(e);r--;){var o=n[r],s=t[o],a=e[o];if(a===i&&!(o in e)||!s(a))return!1}return!0}function di(e,t,n){if("function"!=typeof e)throw new Re(r);return Oo((function(){e.apply(i,n)}),t)}function fi(e,t,n,i){var r=-1,o=St,s=!0,a=e.length,l=[],c=t.length;if(!a)return l;n&&(t=At(t,Gt(n))),i?(o=Rt,s=!1):t.length>=200&&(o=Jt,s=!1,t=new Yn(t));e:for(;++r<a;){var u=e[r],h=null==n?u:n(u);if(u=i||0!==u?u:0,s&&h==h){for(var d=c;d--;)if(t[d]===h)continue e;l.push(u)}else o(t,h,i)||l.push(u)}return l}Bn.templateSettings={escape:J,evaluate:Q,interpolate:Z,variable:"",imports:{_:Bn}},Bn.prototype=qn.prototype,Bn.prototype.constructor=Bn,Vn.prototype=Hn(qn.prototype),Vn.prototype.constructor=Vn,$n.prototype=Hn(qn.prototype),$n.prototype.constructor=$n,Xn.prototype.clear=function(){this.__data__=An?An(null):{},this.size=0},Xn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Xn.prototype.get=function(e){var t=this.__data__;if(An){var n=t[e];return n===o?i:n}return Me.call(t,e)?t[e]:i},Xn.prototype.has=function(e){var t=this.__data__;return An?t[e]!==i:Me.call(t,e)},Xn.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=An&&t===i?o:t,this},Kn.prototype.clear=function(){this.__data__=[],this.size=0},Kn.prototype.delete=function(e){var t=this.__data__,n=ri(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qe.call(t,n,1),--this.size,!0)},Kn.prototype.get=function(e){var t=this.__data__,n=ri(t,e);return n<0?i:t[n][1]},Kn.prototype.has=function(e){return ri(this.__data__,e)>-1},Kn.prototype.set=function(e,t){var n=this.__data__,i=ri(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this},Gn.prototype.clear=function(){this.size=0,this.__data__={hash:new Xn,map:new(Nn||Kn),string:new Xn}},Gn.prototype.delete=function(e){var t=ho(this,e).delete(e);return this.size-=t?1:0,t},Gn.prototype.get=function(e){return ho(this,e).get(e)},Gn.prototype.has=function(e){return ho(this,e).has(e)},Gn.prototype.set=function(e,t){var n=ho(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this},Yn.prototype.add=Yn.prototype.push=function(e){return this.__data__.set(e,o),this},Yn.prototype.has=function(e){return this.__data__.has(e)},Jn.prototype.clear=function(){this.__data__=new Kn,this.size=0},Jn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Jn.prototype.get=function(e){return this.__data__.get(e)},Jn.prototype.has=function(e){return this.__data__.has(e)},Jn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Kn){var i=n.__data__;if(!Nn||i.length<199)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new Gn(i)}return n.set(e,t),this.size=n.size,this};var pi=Dr(xi),mi=Dr(ki,!0);function gi(e,t){var n=!0;return pi(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function _i(e,t,n){for(var r=-1,o=e.length;++r<o;){var s=e[r],a=t(s);if(null!=a&&(l===i?a==a&&!pa(a):n(a,l)))var l=a,c=s}return c}function vi(e,t){var n=[];return pi(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function yi(e,t,n,i,r){var o=-1,s=e.length;for(n||(n=bo),r||(r=[]);++o<s;){var a=e[o];t>0&&n(a)?t>1?yi(a,t-1,n,i,r):Pt(r,a):i||(r[r.length]=a)}return r}var bi=Mr(),wi=Mr(!0);function xi(e,t){return e&&bi(e,t,za)}function ki(e,t){return e&&wi(e,t,za)}function Ci(e,t){return Et(t,(function(t){return ia(e[t])}))}function Ii(e,t){for(var n=0,r=(t=wr(t,e)).length;null!=e&&n<r;)e=e[Ho(t[n++])];return n&&n==r?e:i}function Ti(e,t,n){var i=t(e);return Ys(e)?i:Pt(i,n(e))}function Ni(e){return null==e?e===i?"[object Undefined]":"[object Null]":ct&&ct in Ne(e)?function(e){var t=Me.call(e,ct),n=e[ct];try{e[ct]=i;var r=!0}catch(e){}var o=We.call(e);r&&(t?e[ct]=n:delete e[ct]);return o}(e):function(e){return We.call(e)}(e)}function Ei(e,t){return e>t}function Si(e,t){return null!=e&&Me.call(e,t)}function Ri(e,t){return null!=e&&t in Ne(e)}function Ai(e,t,n){for(var r=n?Rt:St,o=e[0].length,s=e.length,a=s,l=se(s),c=1/0,u=[];a--;){var h=e[a];a&&t&&(h=At(h,Gt(t))),c=wn(h.length,c),l[a]=!n&&(t||o>=120&&h.length>=120)?new Yn(a&&h):i}h=e[0];var d=-1,f=l[0];e:for(;++d<o&&u.length<c;){var p=h[d],m=t?t(p):p;if(p=n||0!==p?p:0,!(f?Jt(f,m):r(u,m,n))){for(a=s;--a;){var g=l[a];if(!(g?Jt(g,m):r(e[a],m,n)))continue e}f&&f.push(m),u.push(p)}}return u}function Pi(e,t,n){var r=null==(e=Ro(e,t=wr(t,e)))?e:e[Ho(ns(t))];return null==r?i:kt(r,e,n)}function Li(e){return aa(e)&&Ni(e)==_}function Oi(e,t,n,r,o){return e===t||(null==e||null==t||!aa(e)&&!aa(t)?e!=e&&t!=t:function(e,t,n,r,o,s){var a=Ys(e),l=Ys(t),c=a?v:_o(e),u=l?v:_o(t),h=(c=c==_?T:c)==T,d=(u=u==_?T:u)==T,f=c==u;if(f&&ea(e)){if(!ea(t))return!1;a=!0,h=!1}if(f&&!h)return s||(s=new Jn),a||ma(e)?io(e,t,n,r,o,s):function(e,t,n,i,r,o,s){switch(n){case O:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case L:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case y:case b:case I:return $s(+e,+t);case w:return e.name==t.name&&e.message==t.message;case E:case R:return e==t+"";case C:var a=sn;case S:var l=1&i;if(a||(a=cn),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;i|=2,s.set(e,t);var u=io(a(e),a(t),i,r,o,s);return s.delete(e),u;case A:if(Un)return Un.call(e)==Un.call(t)}return!1}(e,t,c,n,r,o,s);if(!(1&n)){var p=h&&Me.call(e,"__wrapped__"),m=d&&Me.call(t,"__wrapped__");if(p||m){var g=p?e.value():e,x=m?t.value():t;return s||(s=new Jn),o(g,x,n,r,s)}}return!!f&&(s||(s=new Jn),function(e,t,n,r,o,s){var a=1&n,l=oo(e),c=l.length,u=oo(t).length;if(c!=u&&!a)return!1;var h=c;for(;h--;){var d=l[h];if(!(a?d in t:Me.call(t,d)))return!1}var f=s.get(e),p=s.get(t);if(f&&p)return f==t&&p==e;var m=!0;s.set(e,t),s.set(t,e);var g=a;for(;++h<c;){var _=e[d=l[h]],v=t[d];if(r)var y=a?r(v,_,d,t,e,s):r(_,v,d,e,t,s);if(!(y===i?_===v||o(_,v,n,r,s):y)){m=!1;break}g||(g="constructor"==d)}if(m&&!g){var b=e.constructor,w=t.constructor;b==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w||(m=!1)}return s.delete(e),s.delete(t),m}(e,t,n,r,o,s))}(e,t,n,r,Oi,o))}function Di(e,t,n,r){var o=n.length,s=o,a=!r;if(null==e)return!s;for(e=Ne(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<s;){var c=(l=n[o])[0],u=e[c],h=l[1];if(a&&l[2]){if(u===i&&!(c in e))return!1}else{var d=new Jn;if(r)var f=r(u,h,c,e,t,d);if(!(f===i?Oi(h,u,3,r,d):f))return!1}}return!0}function Mi(e){return!(!sa(e)||(t=e,Fe&&Fe in t))&&(ia(e)?Be:_e).test(qo(e));var t}function zi(e){return"function"==typeof e?e:null==e?cl:"object"==typeof e?Ys(e)?Hi(e[0],e[1]):Bi(e):vl(e)}function Fi(e){if(!To(e))return yn(e);var t=[];for(var n in Ne(e))Me.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Wi(e){if(!sa(e))return function(e){var t=[];if(null!=e)for(var n in Ne(e))t.push(n);return t}(e);var t=To(e),n=[];for(var i in e)("constructor"!=i||!t&&Me.call(e,i))&&n.push(i);return n}function Ui(e,t){return e<t}function ji(e,t){var n=-1,i=Qs(e)?se(e.length):[];return pi(e,(function(e,r,o){i[++n]=t(e,r,o)})),i}function Bi(e){var t=fo(e);return 1==t.length&&t[0][2]?Eo(t[0][0],t[0][1]):function(n){return n===e||Di(n,e,t)}}function Hi(e,t){return ko(e)&&No(t)?Eo(Ho(e),t):function(n){var r=Pa(n,e);return r===i&&r===t?La(n,e):Oi(t,r,3)}}function qi(e,t,n,r,o){e!==t&&bi(t,(function(s,a){if(o||(o=new Jn),sa(s))!function(e,t,n,r,o,s,a){var l=Po(e,n),c=Po(t,n),u=a.get(c);if(u)return void ni(e,n,u);var h=s?s(l,c,n+"",e,t,a):i,d=h===i;if(d){var f=Ys(c),p=!f&&ea(c),m=!f&&!p&&ma(c);h=c,f||p||m?Ys(l)?h=l:Zs(l)?h=Ar(l):p?(d=!1,h=Ir(c,!0)):m?(d=!1,h=Nr(c,!0)):h=[]:ua(c)||Gs(c)?(h=l,Gs(l)?h=ka(l):sa(l)&&!ia(l)||(h=yo(c))):d=!1}d&&(a.set(c,h),o(h,c,r,s,a),a.delete(c));ni(e,n,h)}(e,t,a,n,qi,r,o);else{var l=r?r(Po(e,a),s,a+"",e,t,o):i;l===i&&(l=s),ni(e,a,l)}}),Fa)}function Vi(e,t){var n=e.length;if(n)return wo(t+=t<0?n:0,n)?e[t]:i}function $i(e,t,n){t=t.length?At(t,(function(e){return Ys(e)?function(t){return Ii(t,1===e.length?e[0]:e)}:e})):[cl];var i=-1;return t=At(t,Gt(uo())),function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(ji(e,(function(e,n,r){return{criteria:At(t,(function(t){return t(e)})),index:++i,value:e}})),(function(e,t){return function(e,t,n){var i=-1,r=e.criteria,o=t.criteria,s=r.length,a=n.length;for(;++i<s;){var l=Er(r[i],o[i]);if(l)return i>=a?l:l*("desc"==n[i]?-1:1)}return e.index-t.index}(e,t,n)}))}function Xi(e,t,n){for(var i=-1,r=t.length,o={};++i<r;){var s=t[i],a=Ii(e,s);n(a,s)&&tr(o,wr(s,e),a)}return o}function Ki(e,t,n,i){var r=i?Ut:Wt,o=-1,s=t.length,a=e;for(e===t&&(t=Ar(t)),n&&(a=At(e,Gt(n)));++o<s;)for(var l=0,c=t[o],u=n?n(c):c;(l=r(a,u,l,i))>-1;)a!==e&&Qe.call(a,l,1),Qe.call(e,l,1);return e}function Gi(e,t){for(var n=e?t.length:0,i=n-1;n--;){var r=t[n];if(n==i||r!==o){var o=r;wo(r)?Qe.call(e,r,1):fr(e,r)}}return e}function Yi(e,t){return e+Mt(Cn()*(t-e+1))}function Ji(e,t){var n="";if(!e||t<1||t>f)return n;do{t%2&&(n+=e),(t=Mt(t/2))&&(e+=e)}while(t);return n}function Qi(e,t){return Do(So(e,t,cl),e+"")}function Zi(e){return Zn($a(e))}function er(e,t){var n=$a(e);return Fo(n,ci(t,0,n.length))}function tr(e,t,n,r){if(!sa(e))return e;for(var o=-1,s=(t=wr(t,e)).length,a=s-1,l=e;null!=l&&++o<s;){var c=Ho(t[o]),u=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=a){var h=l[c];(u=r?r(h,c,l):i)===i&&(u=sa(h)?h:wo(t[o+1])?[]:{})}ii(l,c,u),l=l[c]}return e}var nr=Pn?function(e,t){return Pn.set(e,t),e}:cl,ir=ut?function(e,t){return ut(e,"toString",{configurable:!0,enumerable:!1,value:sl(t),writable:!0})}:cl;function rr(e){return Fo($a(e))}function or(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var o=se(r);++i<r;)o[i]=e[i+t];return o}function sr(e,t){var n;return pi(e,(function(e,i,r){return!(n=t(e,i,r))})),!!n}function ar(e,t,n){var i=0,r=null==e?i:e.length;if("number"==typeof t&&t==t&&r<=2147483647){for(;i<r;){var o=i+r>>>1,s=e[o];null!==s&&!pa(s)&&(n?s<=t:s<t)?i=o+1:r=o}return r}return lr(e,t,cl,n)}function lr(e,t,n,r){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var a=(t=n(t))!=t,l=null===t,c=pa(t),u=t===i;o<s;){var h=Mt((o+s)/2),d=n(e[h]),f=d!==i,p=null===d,m=d==d,g=pa(d);if(a)var _=r||m;else _=u?m&&(r||f):l?m&&f&&(r||!p):c?m&&f&&!p&&(r||!g):!p&&!g&&(r?d<=t:d<t);_?o=h+1:s=h}return wn(s,4294967294)}function cr(e,t){for(var n=-1,i=e.length,r=0,o=[];++n<i;){var s=e[n],a=t?t(s):s;if(!n||!$s(a,l)){var l=a;o[r++]=0===s?0:s}}return o}function ur(e){return"number"==typeof e?e:pa(e)?p:+e}function hr(e){if("string"==typeof e)return e;if(Ys(e))return At(e,hr)+"";if(pa(e))return jn?jn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function dr(e,t,n){var i=-1,r=St,o=e.length,s=!0,a=[],l=a;if(n)s=!1,r=Rt;else if(o>=200){var c=t?null:Jr(e);if(c)return cn(c);s=!1,r=Jt,l=new Yn}else l=t?[]:a;e:for(;++i<o;){var u=e[i],h=t?t(u):u;if(u=n||0!==u?u:0,s&&h==h){for(var d=l.length;d--;)if(l[d]===h)continue e;t&&l.push(h),a.push(u)}else r(l,h,n)||(l!==a&&l.push(h),a.push(u))}return a}function fr(e,t){return null==(e=Ro(e,t=wr(t,e)))||delete e[Ho(ns(t))]}function pr(e,t,n,i){return tr(e,t,n(Ii(e,t)),i)}function mr(e,t,n,i){for(var r=e.length,o=i?r:-1;(i?o--:++o<r)&&t(e[o],o,e););return n?or(e,i?0:o,i?o+1:r):or(e,i?o+1:0,i?r:o)}function gr(e,t){var n=e;return n instanceof $n&&(n=n.value()),Lt(t,(function(e,t){return t.func.apply(t.thisArg,Pt([e],t.args))}),n)}function _r(e,t,n){var i=e.length;if(i<2)return i?dr(e[0]):[];for(var r=-1,o=se(i);++r<i;)for(var s=e[r],a=-1;++a<i;)a!=r&&(o[r]=fi(o[r]||s,e[a],t,n));return dr(yi(o,1),t,n)}function vr(e,t,n){for(var r=-1,o=e.length,s=t.length,a={};++r<o;){var l=r<s?t[r]:i;n(a,e[r],l)}return a}function yr(e){return Zs(e)?e:[]}function br(e){return"function"==typeof e?e:cl}function wr(e,t){return Ys(e)?e:ko(e,t)?[e]:Bo(Ca(e))}var xr=Qi;function kr(e,t,n){var r=e.length;return n=n===i?r:n,!t&&n>=r?e:or(e,t,n)}var Cr=dt||function(e){return ht.clearTimeout(e)};function Ir(e,t){if(t)return e.slice();var n=e.length,i=$e?$e(n):new e.constructor(n);return e.copy(i),i}function Tr(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function Nr(e,t){var n=t?Tr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Er(e,t){if(e!==t){var n=e!==i,r=null===e,o=e==e,s=pa(e),a=t!==i,l=null===t,c=t==t,u=pa(t);if(!l&&!u&&!s&&e>t||s&&a&&c&&!l&&!u||r&&a&&c||!n&&c||!o)return 1;if(!r&&!s&&!u&&e<t||u&&n&&o&&!r&&!s||l&&n&&o||!a&&o||!c)return-1}return 0}function Sr(e,t,n,i){for(var r=-1,o=e.length,s=n.length,a=-1,l=t.length,c=bn(o-s,0),u=se(l+c),h=!i;++a<l;)u[a]=t[a];for(;++r<s;)(h||r<o)&&(u[n[r]]=e[r]);for(;c--;)u[a++]=e[r++];return u}function Rr(e,t,n,i){for(var r=-1,o=e.length,s=-1,a=n.length,l=-1,c=t.length,u=bn(o-a,0),h=se(u+c),d=!i;++r<u;)h[r]=e[r];for(var f=r;++l<c;)h[f+l]=t[l];for(;++s<a;)(d||r<o)&&(h[f+n[s]]=e[r++]);return h}function Ar(e,t){var n=-1,i=e.length;for(t||(t=se(i));++n<i;)t[n]=e[n];return t}function Pr(e,t,n,r){var o=!n;n||(n={});for(var s=-1,a=t.length;++s<a;){var l=t[s],c=r?r(n[l],e[l],l,n,e):i;c===i&&(c=e[l]),o?ai(n,l,c):ii(n,l,c)}return n}function Lr(e,t){return function(n,i){var r=Ys(n)?Ct:oi,o=t?t():{};return r(n,e,uo(i,2),o)}}function Or(e){return Qi((function(t,n){var r=-1,o=n.length,s=o>1?n[o-1]:i,a=o>2?n[2]:i;for(s=e.length>3&&"function"==typeof s?(o--,s):i,a&&xo(n[0],n[1],a)&&(s=o<3?i:s,o=1),t=Ne(t);++r<o;){var l=n[r];l&&e(t,l,r,s)}return t}))}function Dr(e,t){return function(n,i){if(null==n)return n;if(!Qs(n))return e(n,i);for(var r=n.length,o=t?r:-1,s=Ne(n);(t?o--:++o<r)&&!1!==i(s[o],o,s););return n}}function Mr(e){return function(t,n,i){for(var r=-1,o=Ne(t),s=i(t),a=s.length;a--;){var l=s[e?a:++r];if(!1===n(o[l],l,o))break}return t}}function zr(e){return function(t){var n=on(t=Ca(t))?dn(t):i,r=n?n[0]:t.charAt(0),o=n?kr(n,1).join(""):t.slice(1);return r[e]()+o}}function Fr(e){return function(t){return Lt(il(Ga(t).replace(Ye,"")),e,"")}}function Wr(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Hn(e.prototype),i=e.apply(n,t);return sa(i)?i:n}}function Ur(e){return function(t,n,r){var o=Ne(t);if(!Qs(t)){var s=uo(n,3);t=za(t),n=function(e){return s(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[s?t[a]:a]:i}}function jr(e){return ro((function(t){var n=t.length,o=n,s=Vn.prototype.thru;for(e&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new Re(r);if(s&&!l&&"wrapper"==lo(a))var l=new Vn([],!0)}for(o=l?o:n;++o<n;){var c=lo(a=t[o]),u="wrapper"==c?ao(a):i;l=u&&Co(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?l[lo(u[0])].apply(l,u[3]):1==a.length&&Co(a)?l[c]():l.thru(a)}return function(){var e=arguments,i=e[0];if(l&&1==e.length&&Ys(i))return l.plant(i).value();for(var r=0,o=n?t[r].apply(this,e):i;++r<n;)o=t[r].call(this,o);return o}}))}function Br(e,t,n,r,o,s,a,l,c,h){var d=t&u,f=1&t,p=2&t,m=24&t,g=512&t,_=p?i:Wr(e);return function i(){for(var u=arguments.length,v=se(u),y=u;y--;)v[y]=arguments[y];if(m)var b=co(i),w=en(v,b);if(r&&(v=Sr(v,r,o,m)),s&&(v=Rr(v,s,a,m)),u-=w,m&&u<h){var x=ln(v,b);return Gr(e,t,Br,i.placeholder,n,v,x,l,c,h-u)}var k=f?n:this,C=p?k[e]:e;return u=v.length,l?v=Ao(v,l):g&&u>1&&v.reverse(),d&&c<u&&(v.length=c),this&&this!==ht&&this instanceof i&&(C=_||Wr(C)),C.apply(k,v)}}function Hr(e,t){return function(n,i){return function(e,t,n,i){return xi(e,(function(e,r,o){t(i,n(e),r,o)})),i}(n,e,t(i),{})}}function qr(e,t){return function(n,r){var o;if(n===i&&r===i)return t;if(n!==i&&(o=n),r!==i){if(o===i)return r;"string"==typeof n||"string"==typeof r?(n=hr(n),r=hr(r)):(n=ur(n),r=ur(r)),o=e(n,r)}return o}}function Vr(e){return ro((function(t){return t=At(t,Gt(uo())),Qi((function(n){var i=this;return e(t,(function(e){return kt(e,i,n)}))}))}))}function $r(e,t){var n=(t=t===i?" ":hr(t)).length;if(n<2)return n?Ji(t,e):t;var r=Ji(t,gt(e/hn(t)));return on(t)?kr(dn(r),0,e).join(""):r.slice(0,e)}function Xr(e){return function(t,n,r){return r&&"number"!=typeof r&&xo(t,n,r)&&(n=r=i),t=ya(t),n===i?(n=t,t=0):n=ya(n),function(e,t,n,i){for(var r=-1,o=bn(gt((t-e)/(n||1)),0),s=se(o);o--;)s[i?o:++r]=e,e+=n;return s}(t,n,r=r===i?t<n?1:-1:ya(r),e)}}function Kr(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=xa(t),n=xa(n)),e(t,n)}}function Gr(e,t,n,r,o,s,a,u,h,d){var f=8&t;t|=f?l:c,4&(t&=~(f?c:l))||(t&=-4);var p=[e,t,o,f?s:i,f?a:i,f?i:s,f?i:a,u,h,d],m=n.apply(i,p);return Co(e)&&Lo(m,p),m.placeholder=r,Mo(m,e,t)}function Yr(e){var t=Te[e];return function(e,n){if(e=xa(e),(n=null==n?0:wn(ba(n),292))&&_n(e)){var i=(Ca(e)+"e").split("e");return+((i=(Ca(t(i[0]+"e"+(+i[1]+n)))+"e").split("e"))[0]+"e"+(+i[1]-n))}return t(e)}}var Jr=Sn&&1/cn(new Sn([,-0]))[1]==d?function(e){return new Sn(e)}:pl;function Qr(e){return function(t){var n=_o(t);return n==C?sn(t):n==S?un(t):function(e,t){return At(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zr(e,t,n,o,d,f,p,m){var g=2&t;if(!g&&"function"!=typeof e)throw new Re(r);var _=o?o.length:0;if(_||(t&=-97,o=d=i),p=p===i?p:bn(ba(p),0),m=m===i?m:ba(m),_-=d?d.length:0,t&c){var v=o,y=d;o=d=i}var b=g?i:ao(e),w=[e,t,n,o,d,v,y,f,p,m];if(b&&function(e,t){var n=e[1],i=t[1],r=n|i,o=r<131,a=i==u&&8==n||i==u&&n==h&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==n;if(!o&&!a)return e;1&i&&(e[2]=t[2],r|=1&n?0:4);var l=t[3];if(l){var c=e[3];e[3]=c?Sr(c,l,t[4]):l,e[4]=c?ln(e[3],s):t[4]}(l=t[5])&&(c=e[5],e[5]=c?Rr(c,l,t[6]):l,e[6]=c?ln(e[5],s):t[6]);(l=t[7])&&(e[7]=l);i&u&&(e[8]=null==e[8]?t[8]:wn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=r}(w,b),e=w[0],t=w[1],n=w[2],o=w[3],d=w[4],!(m=w[9]=w[9]===i?g?0:e.length:bn(w[9]-_,0))&&24&t&&(t&=-25),t&&1!=t)x=8==t||t==a?function(e,t,n){var r=Wr(e);return function o(){for(var s=arguments.length,a=se(s),l=s,c=co(o);l--;)a[l]=arguments[l];var u=s<3&&a[0]!==c&&a[s-1]!==c?[]:ln(a,c);return(s-=u.length)<n?Gr(e,t,Br,o.placeholder,i,a,u,i,i,n-s):kt(this&&this!==ht&&this instanceof o?r:e,this,a)}}(e,t,m):t!=l&&33!=t||d.length?Br.apply(i,w):function(e,t,n,i){var r=1&t,o=Wr(e);return function t(){for(var s=-1,a=arguments.length,l=-1,c=i.length,u=se(c+a),h=this&&this!==ht&&this instanceof t?o:e;++l<c;)u[l]=i[l];for(;a--;)u[l++]=arguments[++s];return kt(h,r?n:this,u)}}(e,t,n,o);else var x=function(e,t,n){var i=1&t,r=Wr(e);return function t(){return(this&&this!==ht&&this instanceof t?r:e).apply(i?n:this,arguments)}}(e,t,n);return Mo((b?nr:Lo)(x,w),e,t)}function eo(e,t,n,r){return e===i||$s(e,Le[n])&&!Me.call(r,n)?t:e}function to(e,t,n,r,o,s){return sa(e)&&sa(t)&&(s.set(t,e),qi(e,t,i,to,s),s.delete(t)),e}function no(e){return ua(e)?i:e}function io(e,t,n,r,o,s){var a=1&n,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var u=s.get(e),h=s.get(t);if(u&&h)return u==t&&h==e;var d=-1,f=!0,p=2&n?new Yn:i;for(s.set(e,t),s.set(t,e);++d<l;){var m=e[d],g=t[d];if(r)var _=a?r(g,m,d,t,e,s):r(m,g,d,e,t,s);if(_!==i){if(_)continue;f=!1;break}if(p){if(!Dt(t,(function(e,t){if(!Jt(p,t)&&(m===e||o(m,e,n,r,s)))return p.push(t)}))){f=!1;break}}else if(m!==g&&!o(m,g,n,r,s)){f=!1;break}}return s.delete(e),s.delete(t),f}function ro(e){return Do(So(e,i,Jo),e+"")}function oo(e){return Ti(e,za,mo)}function so(e){return Ti(e,Fa,go)}var ao=Pn?function(e){return Pn.get(e)}:pl;function lo(e){for(var t=e.name+"",n=Ln[t],i=Me.call(Ln,t)?n.length:0;i--;){var r=n[i],o=r.func;if(null==o||o==e)return r.name}return t}function co(e){return(Me.call(Bn,"placeholder")?Bn:e).placeholder}function uo(){var e=Bn.iteratee||ul;return e=e===ul?zi:e,arguments.length?e(arguments[0],arguments[1]):e}function ho(e,t){var n,i,r=e.__data__;return("string"==(i=typeof(n=t))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof t?"string":"hash"]:r.map}function fo(e){for(var t=za(e),n=t.length;n--;){var i=t[n],r=e[i];t[n]=[i,r,No(r)]}return t}function po(e,t){var n=function(e,t){return null==e?i:e[t]}(e,t);return Mi(n)?n:i}var mo=qt?function(e){return null==e?[]:(e=Ne(e),Et(qt(e),(function(t){return Ge.call(e,t)})))}:wl,go=qt?function(e){for(var t=[];e;)Pt(t,mo(e)),e=Xe(e);return t}:wl,_o=Ni;function vo(e,t,n){for(var i=-1,r=(t=wr(t,e)).length,o=!1;++i<r;){var s=Ho(t[i]);if(!(o=null!=e&&n(e,s)))break;e=e[s]}return o||++i!=r?o:!!(r=null==e?0:e.length)&&oa(r)&&wo(s,r)&&(Ys(e)||Gs(e))}function yo(e){return"function"!=typeof e.constructor||To(e)?{}:Hn(Xe(e))}function bo(e){return Ys(e)||Gs(e)||!!(et&&e&&e[et])}function wo(e,t){var n=typeof e;return!!(t=null==t?f:t)&&("number"==n||"symbol"!=n&&ye.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,n){if(!sa(n))return!1;var i=typeof t;return!!("number"==i?Qs(n)&&wo(t,n.length):"string"==i&&t in n)&&$s(n[t],e)}function ko(e,t){if(Ys(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!pa(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Ne(t))}function Co(e){var t=lo(e),n=Bn[t];if("function"!=typeof n||!(t in $n.prototype))return!1;if(e===n)return!0;var i=ao(n);return!!i&&e===i[0]}(Tn&&_o(new Tn(new ArrayBuffer(1)))!=O||Nn&&_o(new Nn)!=C||En&&_o(En.resolve())!=N||Sn&&_o(new Sn)!=S||Rn&&_o(new Rn)!=P)&&(_o=function(e){var t=Ni(e),n=t==T?e.constructor:i,r=n?qo(n):"";if(r)switch(r){case On:return O;case Dn:return C;case Mn:return N;case zn:return S;case Fn:return P}return t});var Io=Oe?ia:xl;function To(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Le)}function No(e){return e==e&&!sa(e)}function Eo(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==i||e in Ne(n)))}}function So(e,t,n){return t=bn(t===i?e.length-1:t,0),function(){for(var i=arguments,r=-1,o=bn(i.length-t,0),s=se(o);++r<o;)s[r]=i[t+r];r=-1;for(var a=se(t+1);++r<t;)a[r]=i[r];return a[t]=n(s),kt(e,this,a)}}function Ro(e,t){return t.length<2?e:Ii(e,or(t,0,-1))}function Ao(e,t){for(var n=e.length,r=wn(t.length,n),o=Ar(e);r--;){var s=t[r];e[r]=wo(s,n)?o[s]:i}return e}function Po(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Lo=zo(nr),Oo=mt||function(e,t){return ht.setTimeout(e,t)},Do=zo(ir);function Mo(e,t,n){var i=t+"";return Do(e,function(e,t){var n=t.length;if(!n)return e;var i=n-1;return t[i]=(n>1?"& ":"")+t[i],t=t.join(n>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(i,function(e,t){return It(g,(function(n){var i="_."+n[0];t&n[1]&&!St(e,i)&&e.push(i)})),e.sort()}(function(e){var t=e.match(le);return t?t[1].split(ce):[]}(i),n)))}function zo(e){var t=0,n=0;return function(){var r=xn(),o=16-(r-n);if(n=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(i,arguments)}}function Fo(e,t){var n=-1,r=e.length,o=r-1;for(t=t===i?r:t;++n<t;){var s=Yi(n,o),a=e[s];e[s]=e[n],e[n]=a}return e.length=t,e}var Wo,Uo,jo,Bo=(Wo=function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ne,(function(e,n,i,r){t.push(i?r.replace(de,"$1"):n||e)})),t},Uo=Us(Wo,(function(e){return 500===jo.size&&jo.clear(),e})),jo=Uo.cache,Uo);function Ho(e){if("string"==typeof e||pa(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function qo(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Vo(e){if(e instanceof $n)return e.clone();var t=new Vn(e.__wrapped__,e.__chain__);return t.__actions__=Ar(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var $o=Qi((function(e,t){return Zs(e)?fi(e,yi(t,1,Zs,!0)):[]})),Xo=Qi((function(e,t){var n=ns(t);return Zs(n)&&(n=i),Zs(e)?fi(e,yi(t,1,Zs,!0),uo(n,2)):[]})),Ko=Qi((function(e,t){var n=ns(t);return Zs(n)&&(n=i),Zs(e)?fi(e,yi(t,1,Zs,!0),i,n):[]}));function Go(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var r=null==n?0:ba(n);return r<0&&(r=bn(i+r,0)),Ft(e,uo(t,3),r)}function Yo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r-1;return n!==i&&(o=ba(n),o=n<0?bn(r+o,0):wn(o,r-1)),Ft(e,uo(t,3),o,!0)}function Jo(e){return(null==e?0:e.length)?yi(e,1):[]}function Qo(e){return e&&e.length?e[0]:i}var Zo=Qi((function(e){var t=At(e,yr);return t.length&&t[0]===e[0]?Ai(t):[]})),es=Qi((function(e){var t=ns(e),n=At(e,yr);return t===ns(n)?t=i:n.pop(),n.length&&n[0]===e[0]?Ai(n,uo(t,2)):[]})),ts=Qi((function(e){var t=ns(e),n=At(e,yr);return(t="function"==typeof t?t:i)&&n.pop(),n.length&&n[0]===e[0]?Ai(n,i,t):[]}));function ns(e){var t=null==e?0:e.length;return t?e[t-1]:i}var is=Qi(rs);function rs(e,t){return e&&e.length&&t&&t.length?Ki(e,t):e}var os=ro((function(e,t){var n=null==e?0:e.length,i=li(e,t);return Gi(e,At(t,(function(e){return wo(e,n)?+e:e})).sort(Er)),i}));function ss(e){return null==e?e:In.call(e)}var as=Qi((function(e){return dr(yi(e,1,Zs,!0))})),ls=Qi((function(e){var t=ns(e);return Zs(t)&&(t=i),dr(yi(e,1,Zs,!0),uo(t,2))})),cs=Qi((function(e){var t=ns(e);return t="function"==typeof t?t:i,dr(yi(e,1,Zs,!0),i,t)}));function us(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Zs(e))return t=bn(e.length,t),!0})),Xt(t,(function(t){return At(e,Ht(t))}))}function hs(e,t){if(!e||!e.length)return[];var n=us(e);return null==t?n:At(n,(function(e){return kt(t,i,e)}))}var ds=Qi((function(e,t){return Zs(e)?fi(e,t):[]})),fs=Qi((function(e){return _r(Et(e,Zs))})),ps=Qi((function(e){var t=ns(e);return Zs(t)&&(t=i),_r(Et(e,Zs),uo(t,2))})),ms=Qi((function(e){var t=ns(e);return t="function"==typeof t?t:i,_r(Et(e,Zs),i,t)})),gs=Qi(us);var _s=Qi((function(e){var t=e.length,n=t>1?e[t-1]:i;return n="function"==typeof n?(e.pop(),n):i,hs(e,n)}));function vs(e){var t=Bn(e);return t.__chain__=!0,t}function ys(e,t){return t(e)}var bs=ro((function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,o=function(t){return li(t,e)};return!(t>1||this.__actions__.length)&&r instanceof $n&&wo(n)?((r=r.slice(n,+n+(t?1:0))).__actions__.push({func:ys,args:[o],thisArg:i}),new Vn(r,this.__chain__).thru((function(e){return t&&!e.length&&e.push(i),e}))):this.thru(o)}));var ws=Lr((function(e,t,n){Me.call(e,n)?++e[n]:ai(e,n,1)}));var xs=Ur(Go),ks=Ur(Yo);function Cs(e,t){return(Ys(e)?It:pi)(e,uo(t,3))}function Is(e,t){return(Ys(e)?Tt:mi)(e,uo(t,3))}var Ts=Lr((function(e,t,n){Me.call(e,n)?e[n].push(t):ai(e,n,[t])}));var Ns=Qi((function(e,t,n){var i=-1,r="function"==typeof t,o=Qs(e)?se(e.length):[];return pi(e,(function(e){o[++i]=r?kt(t,e,n):Pi(e,t,n)})),o})),Es=Lr((function(e,t,n){ai(e,n,t)}));function Ss(e,t){return(Ys(e)?At:ji)(e,uo(t,3))}var Rs=Lr((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var As=Qi((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xo(e,t[0],t[1])?t=[]:n>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),$i(e,yi(t,1),[])})),Ps=ft||function(){return ht.Date.now()};function Ls(e,t,n){return t=n?i:t,t=e&&null==t?e.length:t,Zr(e,u,i,i,i,i,t)}function Os(e,t){var n;if("function"!=typeof t)throw new Re(r);return e=ba(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=i),n}}var Ds=Qi((function(e,t,n){var i=1;if(n.length){var r=ln(n,co(Ds));i|=l}return Zr(e,i,t,n,r)})),Ms=Qi((function(e,t,n){var i=3;if(n.length){var r=ln(n,co(Ms));i|=l}return Zr(t,i,e,n,r)}));function zs(e,t,n){var o,s,a,l,c,u,h=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new Re(r);function m(t){var n=o,r=s;return o=s=i,h=t,l=e.apply(r,n)}function g(e){return h=e,c=Oo(v,t),d?m(e):l}function _(e){var n=e-u;return u===i||n>=t||n<0||f&&e-h>=a}function v(){var e=Ps();if(_(e))return y(e);c=Oo(v,function(e){var n=t-(e-u);return f?wn(n,a-(e-h)):n}(e))}function y(e){return c=i,p&&o?m(e):(o=s=i,l)}function b(){var e=Ps(),n=_(e);if(o=arguments,s=this,u=e,n){if(c===i)return g(u);if(f)return Cr(c),c=Oo(v,t),m(u)}return c===i&&(c=Oo(v,t)),l}return t=xa(t)||0,sa(n)&&(d=!!n.leading,a=(f="maxWait"in n)?bn(xa(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),b.cancel=function(){c!==i&&Cr(c),h=0,o=u=s=c=i},b.flush=function(){return c===i?l:y(Ps())},b}var Fs=Qi((function(e,t){return di(e,1,t)})),Ws=Qi((function(e,t,n){return di(e,xa(t)||0,n)}));function Us(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Re(r);var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var s=e.apply(this,i);return n.cache=o.set(r,s)||o,s};return n.cache=new(Us.Cache||Gn),n}function js(e){if("function"!=typeof e)throw new Re(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Us.Cache=Gn;var Bs=xr((function(e,t){var n=(t=1==t.length&&Ys(t[0])?At(t[0],Gt(uo())):At(yi(t,1),Gt(uo()))).length;return Qi((function(i){for(var r=-1,o=wn(i.length,n);++r<o;)i[r]=t[r].call(this,i[r]);return kt(e,this,i)}))})),Hs=Qi((function(e,t){var n=ln(t,co(Hs));return Zr(e,l,i,t,n)})),qs=Qi((function(e,t){var n=ln(t,co(qs));return Zr(e,c,i,t,n)})),Vs=ro((function(e,t){return Zr(e,h,i,i,i,t)}));function $s(e,t){return e===t||e!=e&&t!=t}var Xs=Kr(Ei),Ks=Kr((function(e,t){return e>=t})),Gs=Li(function(){return arguments}())?Li:function(e){return aa(e)&&Me.call(e,"callee")&&!Ge.call(e,"callee")},Ys=se.isArray,Js=_t?Gt(_t):function(e){return aa(e)&&Ni(e)==L};function Qs(e){return null!=e&&oa(e.length)&&!ia(e)}function Zs(e){return aa(e)&&Qs(e)}var ea=gn||xl,ta=vt?Gt(vt):function(e){return aa(e)&&Ni(e)==b};function na(e){if(!aa(e))return!1;var t=Ni(e);return t==w||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!ua(e)}function ia(e){if(!sa(e))return!1;var t=Ni(e);return t==x||t==k||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ra(e){return"number"==typeof e&&e==ba(e)}function oa(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function sa(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function aa(e){return null!=e&&"object"==typeof e}var la=yt?Gt(yt):function(e){return aa(e)&&_o(e)==C};function ca(e){return"number"==typeof e||aa(e)&&Ni(e)==I}function ua(e){if(!aa(e)||Ni(e)!=T)return!1;var t=Xe(e);if(null===t)return!0;var n=Me.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&De.call(n)==Ue}var ha=bt?Gt(bt):function(e){return aa(e)&&Ni(e)==E};var da=wt?Gt(wt):function(e){return aa(e)&&_o(e)==S};function fa(e){return"string"==typeof e||!Ys(e)&&aa(e)&&Ni(e)==R}function pa(e){return"symbol"==typeof e||aa(e)&&Ni(e)==A}var ma=xt?Gt(xt):function(e){return aa(e)&&oa(e.length)&&!!rt[Ni(e)]};var ga=Kr(Ui),_a=Kr((function(e,t){return e<=t}));function va(e){if(!e)return[];if(Qs(e))return fa(e)?dn(e):Ar(e);if(st&&e[st])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[st]());var t=_o(e);return(t==C?sn:t==S?cn:$a)(e)}function ya(e){return e?(e=xa(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ba(e){var t=ya(e),n=t%1;return t==t?n?t-n:t:0}function wa(e){return e?ci(ba(e),0,m):0}function xa(e){if("number"==typeof e)return e;if(pa(e))return p;if(sa(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=sa(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Kt(e);var n=ge.test(e);return n||ve.test(e)?lt(e.slice(2),n?2:8):me.test(e)?p:+e}function ka(e){return Pr(e,Fa(e))}function Ca(e){return null==e?"":hr(e)}var Ia=Or((function(e,t){if(To(t)||Qs(t))Pr(t,za(t),e);else for(var n in t)Me.call(t,n)&&ii(e,n,t[n])})),Ta=Or((function(e,t){Pr(t,Fa(t),e)})),Na=Or((function(e,t,n,i){Pr(t,Fa(t),e,i)})),Ea=Or((function(e,t,n,i){Pr(t,za(t),e,i)})),Sa=ro(li);var Ra=Qi((function(e,t){e=Ne(e);var n=-1,r=t.length,o=r>2?t[2]:i;for(o&&xo(t[0],t[1],o)&&(r=1);++n<r;)for(var s=t[n],a=Fa(s),l=-1,c=a.length;++l<c;){var u=a[l],h=e[u];(h===i||$s(h,Le[u])&&!Me.call(e,u))&&(e[u]=s[u])}return e})),Aa=Qi((function(e){return e.push(i,to),kt(Ua,i,e)}));function Pa(e,t,n){var r=null==e?i:Ii(e,t);return r===i?n:r}function La(e,t){return null!=e&&vo(e,t,Ri)}var Oa=Hr((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=We.call(t)),e[t]=n}),sl(cl)),Da=Hr((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=We.call(t)),Me.call(e,t)?e[t].push(n):e[t]=[n]}),uo),Ma=Qi(Pi);function za(e){return Qs(e)?Qn(e):Fi(e)}function Fa(e){return Qs(e)?Qn(e,!0):Wi(e)}var Wa=Or((function(e,t,n){qi(e,t,n)})),Ua=Or((function(e,t,n,i){qi(e,t,n,i)})),ja=ro((function(e,t){var n={};if(null==e)return n;var i=!1;t=At(t,(function(t){return t=wr(t,e),i||(i=t.length>1),t})),Pr(e,so(e),n),i&&(n=ui(n,7,no));for(var r=t.length;r--;)fr(n,t[r]);return n}));var Ba=ro((function(e,t){return null==e?{}:function(e,t){return Xi(e,t,(function(t,n){return La(e,n)}))}(e,t)}));function Ha(e,t){if(null==e)return{};var n=At(so(e),(function(e){return[e]}));return t=uo(t),Xi(e,n,(function(e,n){return t(e,n[0])}))}var qa=Qr(za),Va=Qr(Fa);function $a(e){return null==e?[]:Yt(e,za(e))}var Xa=Fr((function(e,t,n){return t=t.toLowerCase(),e+(n?Ka(t):t)}));function Ka(e){return nl(Ca(e).toLowerCase())}function Ga(e){return(e=Ca(e))&&e.replace(be,tn).replace(Je,"")}var Ya=Fr((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ja=Fr((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Qa=zr("toLowerCase");var Za=Fr((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var el=Fr((function(e,t,n){return e+(n?" ":"")+nl(t)}));var tl=Fr((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),nl=zr("toUpperCase");function il(e,t,n){return e=Ca(e),(t=n?i:t)===i?function(e){return tt.test(e)}(e)?function(e){return e.match(Ze)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var rl=Qi((function(e,t){try{return kt(e,i,t)}catch(e){return na(e)?e:new Ce(e)}})),ol=ro((function(e,t){return It(t,(function(t){t=Ho(t),ai(e,t,Ds(e[t],e))})),e}));function sl(e){return function(){return e}}var al=jr(),ll=jr(!0);function cl(e){return e}function ul(e){return zi("function"==typeof e?e:ui(e,1))}var hl=Qi((function(e,t){return function(n){return Pi(n,e,t)}})),dl=Qi((function(e,t){return function(n){return Pi(e,n,t)}}));function fl(e,t,n){var i=za(t),r=Ci(t,i);null!=n||sa(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=Ci(t,za(t)));var o=!(sa(n)&&"chain"in n&&!n.chain),s=ia(e);return It(r,(function(n){var i=t[n];e[n]=i,s&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),r=n.__actions__=Ar(this.__actions__);return r.push({func:i,args:arguments,thisArg:e}),n.__chain__=t,n}return i.apply(e,Pt([this.value()],arguments))})})),e}function pl(){}var ml=Vr(At),gl=Vr(Nt),_l=Vr(Dt);function vl(e){return ko(e)?Ht(Ho(e)):function(e){return function(t){return Ii(t,e)}}(e)}var yl=Xr(),bl=Xr(!0);function wl(){return[]}function xl(){return!1}var kl=qr((function(e,t){return e+t}),0),Cl=Yr("ceil"),Il=qr((function(e,t){return e/t}),1),Tl=Yr("floor");var Nl,El=qr((function(e,t){return e*t}),1),Sl=Yr("round"),Rl=qr((function(e,t){return e-t}),0);return Bn.after=function(e,t){if("function"!=typeof t)throw new Re(r);return e=ba(e),function(){if(--e<1)return t.apply(this,arguments)}},Bn.ary=Ls,Bn.assign=Ia,Bn.assignIn=Ta,Bn.assignInWith=Na,Bn.assignWith=Ea,Bn.at=Sa,Bn.before=Os,Bn.bind=Ds,Bn.bindAll=ol,Bn.bindKey=Ms,Bn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ys(e)?e:[e]},Bn.chain=vs,Bn.chunk=function(e,t,n){t=(n?xo(e,t,n):t===i)?1:bn(ba(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var o=0,s=0,a=se(gt(r/t));o<r;)a[s++]=or(e,o,o+=t);return a},Bn.compact=function(e){for(var t=-1,n=null==e?0:e.length,i=0,r=[];++t<n;){var o=e[t];o&&(r[i++]=o)}return r},Bn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=se(e-1),n=arguments[0],i=e;i--;)t[i-1]=arguments[i];return Pt(Ys(n)?Ar(n):[n],yi(t,1))},Bn.cond=function(e){var t=null==e?0:e.length,n=uo();return e=t?At(e,(function(e){if("function"!=typeof e[1])throw new Re(r);return[n(e[0]),e[1]]})):[],Qi((function(n){for(var i=-1;++i<t;){var r=e[i];if(kt(r[0],this,n))return kt(r[1],this,n)}}))},Bn.conforms=function(e){return function(e){var t=za(e);return function(n){return hi(n,e,t)}}(ui(e,1))},Bn.constant=sl,Bn.countBy=ws,Bn.create=function(e,t){var n=Hn(e);return null==t?n:si(n,t)},Bn.curry=function e(t,n,r){var o=Zr(t,8,i,i,i,i,i,n=r?i:n);return o.placeholder=e.placeholder,o},Bn.curryRight=function e(t,n,r){var o=Zr(t,a,i,i,i,i,i,n=r?i:n);return o.placeholder=e.placeholder,o},Bn.debounce=zs,Bn.defaults=Ra,Bn.defaultsDeep=Aa,Bn.defer=Fs,Bn.delay=Ws,Bn.difference=$o,Bn.differenceBy=Xo,Bn.differenceWith=Ko,Bn.drop=function(e,t,n){var r=null==e?0:e.length;return r?or(e,(t=n||t===i?1:ba(t))<0?0:t,r):[]},Bn.dropRight=function(e,t,n){var r=null==e?0:e.length;return r?or(e,0,(t=r-(t=n||t===i?1:ba(t)))<0?0:t):[]},Bn.dropRightWhile=function(e,t){return e&&e.length?mr(e,uo(t,3),!0,!0):[]},Bn.dropWhile=function(e,t){return e&&e.length?mr(e,uo(t,3),!0):[]},Bn.fill=function(e,t,n,r){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&xo(e,t,n)&&(n=0,r=o),function(e,t,n,r){var o=e.length;for((n=ba(n))<0&&(n=-n>o?0:o+n),(r=r===i||r>o?o:ba(r))<0&&(r+=o),r=n>r?0:wa(r);n<r;)e[n++]=t;return e}(e,t,n,r)):[]},Bn.filter=function(e,t){return(Ys(e)?Et:vi)(e,uo(t,3))},Bn.flatMap=function(e,t){return yi(Ss(e,t),1)},Bn.flatMapDeep=function(e,t){return yi(Ss(e,t),d)},Bn.flatMapDepth=function(e,t,n){return n=n===i?1:ba(n),yi(Ss(e,t),n)},Bn.flatten=Jo,Bn.flattenDeep=function(e){return(null==e?0:e.length)?yi(e,d):[]},Bn.flattenDepth=function(e,t){return(null==e?0:e.length)?yi(e,t=t===i?1:ba(t)):[]},Bn.flip=function(e){return Zr(e,512)},Bn.flow=al,Bn.flowRight=ll,Bn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,i={};++t<n;){var r=e[t];i[r[0]]=r[1]}return i},Bn.functions=function(e){return null==e?[]:Ci(e,za(e))},Bn.functionsIn=function(e){return null==e?[]:Ci(e,Fa(e))},Bn.groupBy=Ts,Bn.initial=function(e){return(null==e?0:e.length)?or(e,0,-1):[]},Bn.intersection=Zo,Bn.intersectionBy=es,Bn.intersectionWith=ts,Bn.invert=Oa,Bn.invertBy=Da,Bn.invokeMap=Ns,Bn.iteratee=ul,Bn.keyBy=Es,Bn.keys=za,Bn.keysIn=Fa,Bn.map=Ss,Bn.mapKeys=function(e,t){var n={};return t=uo(t,3),xi(e,(function(e,i,r){ai(n,t(e,i,r),e)})),n},Bn.mapValues=function(e,t){var n={};return t=uo(t,3),xi(e,(function(e,i,r){ai(n,i,t(e,i,r))})),n},Bn.matches=function(e){return Bi(ui(e,1))},Bn.matchesProperty=function(e,t){return Hi(e,ui(t,1))},Bn.memoize=Us,Bn.merge=Wa,Bn.mergeWith=Ua,Bn.method=hl,Bn.methodOf=dl,Bn.mixin=fl,Bn.negate=js,Bn.nthArg=function(e){return e=ba(e),Qi((function(t){return Vi(t,e)}))},Bn.omit=ja,Bn.omitBy=function(e,t){return Ha(e,js(uo(t)))},Bn.once=function(e){return Os(2,e)},Bn.orderBy=function(e,t,n,r){return null==e?[]:(Ys(t)||(t=null==t?[]:[t]),Ys(n=r?i:n)||(n=null==n?[]:[n]),$i(e,t,n))},Bn.over=ml,Bn.overArgs=Bs,Bn.overEvery=gl,Bn.overSome=_l,Bn.partial=Hs,Bn.partialRight=qs,Bn.partition=Rs,Bn.pick=Ba,Bn.pickBy=Ha,Bn.property=vl,Bn.propertyOf=function(e){return function(t){return null==e?i:Ii(e,t)}},Bn.pull=is,Bn.pullAll=rs,Bn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ki(e,t,uo(n,2)):e},Bn.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Ki(e,t,i,n):e},Bn.pullAt=os,Bn.range=yl,Bn.rangeRight=bl,Bn.rearg=Vs,Bn.reject=function(e,t){return(Ys(e)?Et:vi)(e,js(uo(t,3)))},Bn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var i=-1,r=[],o=e.length;for(t=uo(t,3);++i<o;){var s=e[i];t(s,i,e)&&(n.push(s),r.push(i))}return Gi(e,r),n},Bn.rest=function(e,t){if("function"!=typeof e)throw new Re(r);return Qi(e,t=t===i?t:ba(t))},Bn.reverse=ss,Bn.sampleSize=function(e,t,n){return t=(n?xo(e,t,n):t===i)?1:ba(t),(Ys(e)?ei:er)(e,t)},Bn.set=function(e,t,n){return null==e?e:tr(e,t,n)},Bn.setWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:tr(e,t,n,r)},Bn.shuffle=function(e){return(Ys(e)?ti:rr)(e)},Bn.slice=function(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&xo(e,t,n)?(t=0,n=r):(t=null==t?0:ba(t),n=n===i?r:ba(n)),or(e,t,n)):[]},Bn.sortBy=As,Bn.sortedUniq=function(e){return e&&e.length?cr(e):[]},Bn.sortedUniqBy=function(e,t){return e&&e.length?cr(e,uo(t,2)):[]},Bn.split=function(e,t,n){return n&&"number"!=typeof n&&xo(e,t,n)&&(t=n=i),(n=n===i?m:n>>>0)?(e=Ca(e))&&("string"==typeof t||null!=t&&!ha(t))&&!(t=hr(t))&&on(e)?kr(dn(e),0,n):e.split(t,n):[]},Bn.spread=function(e,t){if("function"!=typeof e)throw new Re(r);return t=null==t?0:bn(ba(t),0),Qi((function(n){var i=n[t],r=kr(n,0,t);return i&&Pt(r,i),kt(e,this,r)}))},Bn.tail=function(e){var t=null==e?0:e.length;return t?or(e,1,t):[]},Bn.take=function(e,t,n){return e&&e.length?or(e,0,(t=n||t===i?1:ba(t))<0?0:t):[]},Bn.takeRight=function(e,t,n){var r=null==e?0:e.length;return r?or(e,(t=r-(t=n||t===i?1:ba(t)))<0?0:t,r):[]},Bn.takeRightWhile=function(e,t){return e&&e.length?mr(e,uo(t,3),!1,!0):[]},Bn.takeWhile=function(e,t){return e&&e.length?mr(e,uo(t,3)):[]},Bn.tap=function(e,t){return t(e),e},Bn.throttle=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new Re(r);return sa(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),zs(e,t,{leading:i,maxWait:t,trailing:o})},Bn.thru=ys,Bn.toArray=va,Bn.toPairs=qa,Bn.toPairsIn=Va,Bn.toPath=function(e){return Ys(e)?At(e,Ho):pa(e)?[e]:Ar(Bo(Ca(e)))},Bn.toPlainObject=ka,Bn.transform=function(e,t,n){var i=Ys(e),r=i||ea(e)||ma(e);if(t=uo(t,4),null==n){var o=e&&e.constructor;n=r?i?new o:[]:sa(e)&&ia(o)?Hn(Xe(e)):{}}return(r?It:xi)(e,(function(e,i,r){return t(n,e,i,r)})),n},Bn.unary=function(e){return Ls(e,1)},Bn.union=as,Bn.unionBy=ls,Bn.unionWith=cs,Bn.uniq=function(e){return e&&e.length?dr(e):[]},Bn.uniqBy=function(e,t){return e&&e.length?dr(e,uo(t,2)):[]},Bn.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?dr(e,i,t):[]},Bn.unset=function(e,t){return null==e||fr(e,t)},Bn.unzip=us,Bn.unzipWith=hs,Bn.update=function(e,t,n){return null==e?e:pr(e,t,br(n))},Bn.updateWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:pr(e,t,br(n),r)},Bn.values=$a,Bn.valuesIn=function(e){return null==e?[]:Yt(e,Fa(e))},Bn.without=ds,Bn.words=il,Bn.wrap=function(e,t){return Hs(br(t),e)},Bn.xor=fs,Bn.xorBy=ps,Bn.xorWith=ms,Bn.zip=gs,Bn.zipObject=function(e,t){return vr(e||[],t||[],ii)},Bn.zipObjectDeep=function(e,t){return vr(e||[],t||[],tr)},Bn.zipWith=_s,Bn.entries=qa,Bn.entriesIn=Va,Bn.extend=Ta,Bn.extendWith=Na,fl(Bn,Bn),Bn.add=kl,Bn.attempt=rl,Bn.camelCase=Xa,Bn.capitalize=Ka,Bn.ceil=Cl,Bn.clamp=function(e,t,n){return n===i&&(n=t,t=i),n!==i&&(n=(n=xa(n))==n?n:0),t!==i&&(t=(t=xa(t))==t?t:0),ci(xa(e),t,n)},Bn.clone=function(e){return ui(e,4)},Bn.cloneDeep=function(e){return ui(e,5)},Bn.cloneDeepWith=function(e,t){return ui(e,5,t="function"==typeof t?t:i)},Bn.cloneWith=function(e,t){return ui(e,4,t="function"==typeof t?t:i)},Bn.conformsTo=function(e,t){return null==t||hi(e,t,za(t))},Bn.deburr=Ga,Bn.defaultTo=function(e,t){return null==e||e!=e?t:e},Bn.divide=Il,Bn.endsWith=function(e,t,n){e=Ca(e),t=hr(t);var r=e.length,o=n=n===i?r:ci(ba(n),0,r);return(n-=t.length)>=0&&e.slice(n,o)==t},Bn.eq=$s,Bn.escape=function(e){return(e=Ca(e))&&Y.test(e)?e.replace(K,nn):e},Bn.escapeRegExp=function(e){return(e=Ca(e))&&re.test(e)?e.replace(ie,"\\$&"):e},Bn.every=function(e,t,n){var r=Ys(e)?Nt:gi;return n&&xo(e,t,n)&&(t=i),r(e,uo(t,3))},Bn.find=xs,Bn.findIndex=Go,Bn.findKey=function(e,t){return zt(e,uo(t,3),xi)},Bn.findLast=ks,Bn.findLastIndex=Yo,Bn.findLastKey=function(e,t){return zt(e,uo(t,3),ki)},Bn.floor=Tl,Bn.forEach=Cs,Bn.forEachRight=Is,Bn.forIn=function(e,t){return null==e?e:bi(e,uo(t,3),Fa)},Bn.forInRight=function(e,t){return null==e?e:wi(e,uo(t,3),Fa)},Bn.forOwn=function(e,t){return e&&xi(e,uo(t,3))},Bn.forOwnRight=function(e,t){return e&&ki(e,uo(t,3))},Bn.get=Pa,Bn.gt=Xs,Bn.gte=Ks,Bn.has=function(e,t){return null!=e&&vo(e,t,Si)},Bn.hasIn=La,Bn.head=Qo,Bn.identity=cl,Bn.includes=function(e,t,n,i){e=Qs(e)?e:$a(e),n=n&&!i?ba(n):0;var r=e.length;return n<0&&(n=bn(r+n,0)),fa(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&Wt(e,t,n)>-1},Bn.indexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var r=null==n?0:ba(n);return r<0&&(r=bn(i+r,0)),Wt(e,t,r)},Bn.inRange=function(e,t,n){return t=ya(t),n===i?(n=t,t=0):n=ya(n),function(e,t,n){return e>=wn(t,n)&&e<bn(t,n)}(e=xa(e),t,n)},Bn.invoke=Ma,Bn.isArguments=Gs,Bn.isArray=Ys,Bn.isArrayBuffer=Js,Bn.isArrayLike=Qs,Bn.isArrayLikeObject=Zs,Bn.isBoolean=function(e){return!0===e||!1===e||aa(e)&&Ni(e)==y},Bn.isBuffer=ea,Bn.isDate=ta,Bn.isElement=function(e){return aa(e)&&1===e.nodeType&&!ua(e)},Bn.isEmpty=function(e){if(null==e)return!0;if(Qs(e)&&(Ys(e)||"string"==typeof e||"function"==typeof e.splice||ea(e)||ma(e)||Gs(e)))return!e.length;var t=_o(e);if(t==C||t==S)return!e.size;if(To(e))return!Fi(e).length;for(var n in e)if(Me.call(e,n))return!1;return!0},Bn.isEqual=function(e,t){return Oi(e,t)},Bn.isEqualWith=function(e,t,n){var r=(n="function"==typeof n?n:i)?n(e,t):i;return r===i?Oi(e,t,i,n):!!r},Bn.isError=na,Bn.isFinite=function(e){return"number"==typeof e&&_n(e)},Bn.isFunction=ia,Bn.isInteger=ra,Bn.isLength=oa,Bn.isMap=la,Bn.isMatch=function(e,t){return e===t||Di(e,t,fo(t))},Bn.isMatchWith=function(e,t,n){return n="function"==typeof n?n:i,Di(e,t,fo(t),n)},Bn.isNaN=function(e){return ca(e)&&e!=+e},Bn.isNative=function(e){if(Io(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Mi(e)},Bn.isNil=function(e){return null==e},Bn.isNull=function(e){return null===e},Bn.isNumber=ca,Bn.isObject=sa,Bn.isObjectLike=aa,Bn.isPlainObject=ua,Bn.isRegExp=ha,Bn.isSafeInteger=function(e){return ra(e)&&e>=-9007199254740991&&e<=f},Bn.isSet=da,Bn.isString=fa,Bn.isSymbol=pa,Bn.isTypedArray=ma,Bn.isUndefined=function(e){return e===i},Bn.isWeakMap=function(e){return aa(e)&&_o(e)==P},Bn.isWeakSet=function(e){return aa(e)&&"[object WeakSet]"==Ni(e)},Bn.join=function(e,t){return null==e?"":vn.call(e,t)},Bn.kebabCase=Ya,Bn.last=ns,Bn.lastIndexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r;return n!==i&&(o=(o=ba(n))<0?bn(r+o,0):wn(o,r-1)),t==t?function(e,t,n){for(var i=n+1;i--;)if(e[i]===t)return i;return i}(e,t,o):Ft(e,jt,o,!0)},Bn.lowerCase=Ja,Bn.lowerFirst=Qa,Bn.lt=ga,Bn.lte=_a,Bn.max=function(e){return e&&e.length?_i(e,cl,Ei):i},Bn.maxBy=function(e,t){return e&&e.length?_i(e,uo(t,2),Ei):i},Bn.mean=function(e){return Bt(e,cl)},Bn.meanBy=function(e,t){return Bt(e,uo(t,2))},Bn.min=function(e){return e&&e.length?_i(e,cl,Ui):i},Bn.minBy=function(e,t){return e&&e.length?_i(e,uo(t,2),Ui):i},Bn.stubArray=wl,Bn.stubFalse=xl,Bn.stubObject=function(){return{}},Bn.stubString=function(){return""},Bn.stubTrue=function(){return!0},Bn.multiply=El,Bn.nth=function(e,t){return e&&e.length?Vi(e,ba(t)):i},Bn.noConflict=function(){return ht._===this&&(ht._=je),this},Bn.noop=pl,Bn.now=Ps,Bn.pad=function(e,t,n){e=Ca(e);var i=(t=ba(t))?hn(e):0;if(!t||i>=t)return e;var r=(t-i)/2;return $r(Mt(r),n)+e+$r(gt(r),n)},Bn.padEnd=function(e,t,n){e=Ca(e);var i=(t=ba(t))?hn(e):0;return t&&i<t?e+$r(t-i,n):e},Bn.padStart=function(e,t,n){e=Ca(e);var i=(t=ba(t))?hn(e):0;return t&&i<t?$r(t-i,n)+e:e},Bn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),kn(Ca(e).replace(oe,""),t||0)},Bn.random=function(e,t,n){if(n&&"boolean"!=typeof n&&xo(e,t,n)&&(t=n=i),n===i&&("boolean"==typeof t?(n=t,t=i):"boolean"==typeof e&&(n=e,e=i)),e===i&&t===i?(e=0,t=1):(e=ya(e),t===i?(t=e,e=0):t=ya(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var o=Cn();return wn(e+o*(t-e+at("1e-"+((o+"").length-1))),t)}return Yi(e,t)},Bn.reduce=function(e,t,n){var i=Ys(e)?Lt:Vt,r=arguments.length<3;return i(e,uo(t,4),n,r,pi)},Bn.reduceRight=function(e,t,n){var i=Ys(e)?Ot:Vt,r=arguments.length<3;return i(e,uo(t,4),n,r,mi)},Bn.repeat=function(e,t,n){return t=(n?xo(e,t,n):t===i)?1:ba(t),Ji(Ca(e),t)},Bn.replace=function(){var e=arguments,t=Ca(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Bn.result=function(e,t,n){var r=-1,o=(t=wr(t,e)).length;for(o||(o=1,e=i);++r<o;){var s=null==e?i:e[Ho(t[r])];s===i&&(r=o,s=n),e=ia(s)?s.call(e):s}return e},Bn.round=Sl,Bn.runInContext=e,Bn.sample=function(e){return(Ys(e)?Zn:Zi)(e)},Bn.size=function(e){if(null==e)return 0;if(Qs(e))return fa(e)?hn(e):e.length;var t=_o(e);return t==C||t==S?e.size:Fi(e).length},Bn.snakeCase=Za,Bn.some=function(e,t,n){var r=Ys(e)?Dt:sr;return n&&xo(e,t,n)&&(t=i),r(e,uo(t,3))},Bn.sortedIndex=function(e,t){return ar(e,t)},Bn.sortedIndexBy=function(e,t,n){return lr(e,t,uo(n,2))},Bn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var i=ar(e,t);if(i<n&&$s(e[i],t))return i}return-1},Bn.sortedLastIndex=function(e,t){return ar(e,t,!0)},Bn.sortedLastIndexBy=function(e,t,n){return lr(e,t,uo(n,2),!0)},Bn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=ar(e,t,!0)-1;if($s(e[n],t))return n}return-1},Bn.startCase=el,Bn.startsWith=function(e,t,n){return e=Ca(e),n=null==n?0:ci(ba(n),0,e.length),t=hr(t),e.slice(n,n+t.length)==t},Bn.subtract=Rl,Bn.sum=function(e){return e&&e.length?$t(e,cl):0},Bn.sumBy=function(e,t){return e&&e.length?$t(e,uo(t,2)):0},Bn.template=function(e,t,n){var r=Bn.templateSettings;n&&xo(e,t,n)&&(t=i),e=Ca(e),t=Na({},t,r,eo);var o,s,a=Na({},t.imports,r.imports,eo),l=za(a),c=Yt(a,l),u=0,h=t.interpolate||we,d="__p += '",f=Ee((t.escape||we).source+"|"+h.source+"|"+(h===Z?fe:we).source+"|"+(t.evaluate||we).source+"|$","g"),p="//# sourceURL="+(Me.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++it+"]")+"\n";e.replace(f,(function(t,n,i,r,a,l){return i||(i=r),d+=e.slice(u,l).replace(xe,rn),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),a&&(s=!0,d+="';\n"+a+";\n__p += '"),i&&(d+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),u=l+t.length,t})),d+="';\n";var m=Me.call(t,"variable")&&t.variable;if(m){if(he.test(m))throw new Ce("Invalid `variable` option passed into `_.template`")}else d="with (obj) {\n"+d+"\n}\n";d=(s?d.replace(q,""):d).replace(V,"$1").replace($,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var g=rl((function(){return Ie(l,p+"return "+d).apply(i,c)}));if(g.source=d,na(g))throw g;return g},Bn.times=function(e,t){if((e=ba(e))<1||e>f)return[];var n=m,i=wn(e,m);t=uo(t),e-=m;for(var r=Xt(i,t);++n<e;)t(n);return r},Bn.toFinite=ya,Bn.toInteger=ba,Bn.toLength=wa,Bn.toLower=function(e){return Ca(e).toLowerCase()},Bn.toNumber=xa,Bn.toSafeInteger=function(e){return e?ci(ba(e),-9007199254740991,f):0===e?e:0},Bn.toString=Ca,Bn.toUpper=function(e){return Ca(e).toUpperCase()},Bn.trim=function(e,t,n){if((e=Ca(e))&&(n||t===i))return Kt(e);if(!e||!(t=hr(t)))return e;var r=dn(e),o=dn(t);return kr(r,Qt(r,o),Zt(r,o)+1).join("")},Bn.trimEnd=function(e,t,n){if((e=Ca(e))&&(n||t===i))return e.slice(0,fn(e)+1);if(!e||!(t=hr(t)))return e;var r=dn(e);return kr(r,0,Zt(r,dn(t))+1).join("")},Bn.trimStart=function(e,t,n){if((e=Ca(e))&&(n||t===i))return e.replace(oe,"");if(!e||!(t=hr(t)))return e;var r=dn(e);return kr(r,Qt(r,dn(t))).join("")},Bn.truncate=function(e,t){var n=30,r="...";if(sa(t)){var o="separator"in t?t.separator:o;n="length"in t?ba(t.length):n,r="omission"in t?hr(t.omission):r}var s=(e=Ca(e)).length;if(on(e)){var a=dn(e);s=a.length}if(n>=s)return e;var l=n-hn(r);if(l<1)return r;var c=a?kr(a,0,l).join(""):e.slice(0,l);if(o===i)return c+r;if(a&&(l+=c.length-l),ha(o)){if(e.slice(l).search(o)){var u,h=c;for(o.global||(o=Ee(o.source,Ca(pe.exec(o))+"g")),o.lastIndex=0;u=o.exec(h);)var d=u.index;c=c.slice(0,d===i?l:d)}}else if(e.indexOf(hr(o),l)!=l){var f=c.lastIndexOf(o);f>-1&&(c=c.slice(0,f))}return c+r},Bn.unescape=function(e){return(e=Ca(e))&&G.test(e)?e.replace(X,pn):e},Bn.uniqueId=function(e){var t=++ze;return Ca(e)+t},Bn.upperCase=tl,Bn.upperFirst=nl,Bn.each=Cs,Bn.eachRight=Is,Bn.first=Qo,fl(Bn,(Nl={},xi(Bn,(function(e,t){Me.call(Bn.prototype,t)||(Nl[t]=e)})),Nl),{chain:!1}),Bn.VERSION="4.17.21",It(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Bn[e].placeholder=Bn})),It(["drop","take"],(function(e,t){$n.prototype[e]=function(n){n=n===i?1:bn(ba(n),0);var r=this.__filtered__&&!t?new $n(this):this.clone();return r.__filtered__?r.__takeCount__=wn(n,r.__takeCount__):r.__views__.push({size:wn(n,m),type:e+(r.__dir__<0?"Right":"")}),r},$n.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),It(["filter","map","takeWhile"],(function(e,t){var n=t+1,i=1==n||3==n;$n.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:uo(e,3),type:n}),t.__filtered__=t.__filtered__||i,t}})),It(["head","last"],(function(e,t){var n="take"+(t?"Right":"");$n.prototype[e]=function(){return this[n](1).value()[0]}})),It(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");$n.prototype[e]=function(){return this.__filtered__?new $n(this):this[n](1)}})),$n.prototype.compact=function(){return this.filter(cl)},$n.prototype.find=function(e){return this.filter(e).head()},$n.prototype.findLast=function(e){return this.reverse().find(e)},$n.prototype.invokeMap=Qi((function(e,t){return"function"==typeof e?new $n(this):this.map((function(n){return Pi(n,e,t)}))})),$n.prototype.reject=function(e){return this.filter(js(uo(e)))},$n.prototype.slice=function(e,t){e=ba(e);var n=this;return n.__filtered__&&(e>0||t<0)?new $n(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==i&&(n=(t=ba(t))<0?n.dropRight(-t):n.take(t-e)),n)},$n.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},$n.prototype.toArray=function(){return this.take(m)},xi($n.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),o=Bn[r?"take"+("last"==t?"Right":""):t],s=r||/^find/.test(t);o&&(Bn.prototype[t]=function(){var t=this.__wrapped__,a=r?[1]:arguments,l=t instanceof $n,c=a[0],u=l||Ys(t),h=function(e){var t=o.apply(Bn,Pt([e],a));return r&&d?t[0]:t};u&&n&&"function"==typeof c&&1!=c.length&&(l=u=!1);var d=this.__chain__,f=!!this.__actions__.length,p=s&&!d,m=l&&!f;if(!s&&u){t=m?t:new $n(this);var g=e.apply(t,a);return g.__actions__.push({func:ys,args:[h],thisArg:i}),new Vn(g,d)}return p&&m?e.apply(this,a):(g=this.thru(h),p?r?g.value()[0]:g.value():g)})})),It(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ae[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);Bn.prototype[e]=function(){var e=arguments;if(i&&!this.__chain__){var r=this.value();return t.apply(Ys(r)?r:[],e)}return this[n]((function(n){return t.apply(Ys(n)?n:[],e)}))}})),xi($n.prototype,(function(e,t){var n=Bn[t];if(n){var i=n.name+"";Me.call(Ln,i)||(Ln[i]=[]),Ln[i].push({name:t,func:n})}})),Ln[Br(i,2).name]=[{name:"wrapper",func:i}],$n.prototype.clone=function(){var e=new $n(this.__wrapped__);return e.__actions__=Ar(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ar(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ar(this.__views__),e},$n.prototype.reverse=function(){if(this.__filtered__){var e=new $n(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},$n.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Ys(e),i=t<0,r=n?e.length:0,o=function(e,t,n){var i=-1,r=n.length;for(;++i<r;){var o=n[i],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=wn(t,e+s);break;case"takeRight":e=bn(e,t-s)}}return{start:e,end:t}}(0,r,this.__views__),s=o.start,a=o.end,l=a-s,c=i?a:s-1,u=this.__iteratees__,h=u.length,d=0,f=wn(l,this.__takeCount__);if(!n||!i&&r==l&&f==l)return gr(e,this.__actions__);var p=[];e:for(;l--&&d<f;){for(var m=-1,g=e[c+=t];++m<h;){var _=u[m],v=_.iteratee,y=_.type,b=v(g);if(2==y)g=b;else if(!b){if(1==y)continue e;break e}}p[d++]=g}return p},Bn.prototype.at=bs,Bn.prototype.chain=function(){return vs(this)},Bn.prototype.commit=function(){return new Vn(this.value(),this.__chain__)},Bn.prototype.next=function(){this.__values__===i&&(this.__values__=va(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?i:this.__values__[this.__index__++]}},Bn.prototype.plant=function(e){for(var t,n=this;n instanceof qn;){var r=Vo(n);r.__index__=0,r.__values__=i,t?o.__wrapped__=r:t=r;var o=r;n=n.__wrapped__}return o.__wrapped__=e,t},Bn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof $n){var t=e;return this.__actions__.length&&(t=new $n(this)),(t=t.reverse()).__actions__.push({func:ys,args:[ss],thisArg:i}),new Vn(t,this.__chain__)}return this.thru(ss)},Bn.prototype.toJSON=Bn.prototype.valueOf=Bn.prototype.value=function(){return gr(this.__wrapped__,this.__actions__)},Bn.prototype.first=Bn.prototype.head,st&&(Bn.prototype[st]=function(){return this}),Bn}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ht._=mn,define((function(){return mn}))):ft?((ft.exports=mn)._=mn,dt._=mn):ht._=mn}).call(this)})),r("gwSlI"),r("7rYDH"),r("lUidB");var o=r("7rYDH"),s=r("5uEKZ");const a=document.querySelector(".list-cards");function l(e){(async function(){return{genres:await(0,o.getMovieGenres)().then((({genres:e})=>e))}})().then((({genres:t})=>{(0,s.saveLocalStorage)("genresList",t),e.results&&e.results.forEach((e=>{const{genre_ids:n,release_date:i}=e;t.forEach((({name:t,id:r})=>{n.includes(r)&&(n.length>2&&n.splice(2,n.length-1,"Other"),n.splice(n.indexOf(r),1,t)),e.genre_names=n.join(", "),e.release_date&&(e.release_date=i.slice(0,4))}))}));const n=function(e){if(e){const t=e.map((({original_title:e,poster_path:t,overview:n,vote_average:i,id:r,genre_names:s,release_date:a})=>{let l="";return l=t?`${o.IMG_BASE_URL}${o.IMG_W500}/${t}`:"No found poster!",`<li class='list-cards-item' key='${r}'>\n        <img\n          class='poster-list__img'\n          src='${l}'\n          alt='${e}'\n          width\n          loading='lazy'\n        />\n        <span class='poster-list-rate'>${i.toFixed(1)}</span>\n        <div class='poster-list-wrap'>\n          <h2 class='poster-list-title text-posters'><b>${e}</b></h2>\n          <div class='poster-list-info'>\n            <p class='poster-list-text text-posters'>${s}</p>\n            <p class='poster-list-age text-posters'>| ${a}</p>\n          </div>\n        </div>\n      </li>`})).join("");return console.log(e),t}}(e.results);a&&(a.innerHTML=n)}))}function c(){document.querySelector("#header-input").removeAttribute("placeholder")}function u(){const e=document.querySelector("#header-input");""===e.value&&e.setAttribute("placeholder","Movie search")}r("8G1wF"),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#header-input");e.addEventListener("focus",c),e.addEventListener("blur",u)})),r("kEUo3");var h,d,f={};h=void 0===e?"undefined"==typeof window?f:window:e,d=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",_={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",y="Ask",b="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",k="Hourglass",C="Circle",I="Arrows",T="Dots",N="Pulse",E="Custom",S="Notiflix",R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",P="Hourglass",L="Circle",O="Arrows",D="Dots",M="Pulse",z={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},W=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},U=function(t){return t||(t="head"),null!==e.document[t]||(F('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!U("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},B=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?B(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},H=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Y=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(n,i,r,o){if(!U("body"))return!1;t||le.Notify.init({});var s=B(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),t=B(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=H(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=B(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var _=e.document.createElement("div");_.id=t.ID+"-"+J,_.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),_.style.fontSize=t.fontSize,_.style.color=p.textColor,_.style.background=p.background,_.style.borderRadius=t.borderRadius,_.style.pointerEvents="all",t.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),_.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(_.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)_.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"");else{var y="";n===l?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),_.innerHTML=y+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"")}else _.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(d.wrapID);b.insertBefore(_,b.firstChild)}else e.document.getElementById(d.wrapID).appendChild(_);var w=e.document.getElementById(_.id);if(w){var x,k,C=function(){w.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(x)},I=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(_.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof r&&r(),C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var T=function(){x=setTimeout((function(){C()}),t.timeout),k=setTimeout((function(){I()}),t.timeout+t.cssAnimationDuration)};T(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(x),clearTimeout(k)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),T()})))}}if(t.showOnlyTheLastOne&&0<J)for(var N,E=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+J+"])"),S=0;S<E.length;S++)null!==(N=E[S]).parentNode&&N.parentNode.removeChild(N);t=B(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,r,o,s,l){if(!U("body"))return!1;n||le.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=B(!0,n,{}),n=B(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof r&&(t===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=H(i),r=H(r),o=H(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=_.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",y=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(y?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b,w,x="";if(t===f?(b=n.svgSize,w=h.svgColor,b||(b="110px"),w||(w="#32c682"),x='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+b+'" height="'+b+'" fill="'+w+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===p?x=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?x=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(x=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+x+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var k=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),k()})),v&&y&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){k()}))}n=B(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,r,o,s,l,c,u,h){if(!U("body"))return!1;i||le.Confirm.init({});var d=B(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=B(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=H(n),r=H(r),s=H(s),l=H(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=w.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var _="",v=null,x=void 0;if(t===y||t===b){v=o||"";var k=t===y||200<v.length?Math.ceil(1.5*v.length):250;_='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+v+'"':"")+' maxlength="'+k+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+_+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var C=e.document.getElementById(f.id),I=e.document.getElementById("NXConfirmButtonOk"),T=e.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(e){var n=e.target.value;t===y&&n!==v?(e.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(t===y&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(e){if(t===y&&v&&T){if((T.value||"").toString()!==v)return T.focus(),T.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&T&&(x=T.value||""),c(x)),C.classList.add("nx-remove");var n=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===b&&T&&(x=T.value||""),u(x)),C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),i.cssAnimationDuration)}))}i=B(!0,i,d)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,n,i,o,s){if(!U("body"))return!1;r||le.Loading.init({});var l=B(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=B(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var h="";0<(u=u.length>r.messageMaxLength?H(u).toString().substring(0,r.messageMaxLength)+"...":H(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(t===x)d=q(r.svgSize,r.svgColor);else if(t===k)d=V(r.svgSize,r.svgColor);else if(t===C)d=$(r.svgSize,r.svgColor);else if(t===I)d=X(r.svgSize,r.svgColor);else if(t===T)d=K(r.svgSize,r.svgColor);else if(t===N)d=G(r.svgSize,r.svgColor);else if(t===E&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(t===E&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===E&&(null===r.customSvgUrl||null===r.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",_=e.document.createElement("div");_.id=R.ID,_.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),_.style.zIndex=r.zindex,_.style.background=r.backgroundColor,_.style.animationDuration=r.cssAnimationDuration+"ms",_.style.fontFamily='"'+r.fontFamily+'", '+a,_.style.display="flex",_.style.flexWrap="wrap",_.style.flexDirection="column",_.style.alignItems="center",_.style.justifyContent="center",r.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),_.innerHTML=g+h,!e.document.getElementById(_.id)&&(e.document.body.appendChild(_),r.clickToClose)&&e.document.getElementById(_.id).addEventListener("click",(function(){_.classList.add("nx-remove");var e=setTimeout((function(){null!==_.parentNode&&(_.parentNode.removeChild(_),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(R.ID))var v=e.document.getElementById(R.ID),y=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(y)}),s);r=B(!0,r,l)},oe=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},se=0,ae=function(t,n,i,r,s,l){var c;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||le.Block.init({});var h=B(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),o=B(!0,o,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=z.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,_="nx-block-temporary-position";if(t){for(var v,y=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=c[b]){if(-1<y.indexOf(v.tagName.toLocaleLowerCase("en")))break;var w=v.querySelectorAll("[id^="+z.ID+"]");if(1>w.length){var x="";n&&(x=n===P?V(o.svgSize,o.svgColor):n===L?$(o.svgSize,o.svgColor):n===O?X(o.svgSize,o.svgColor):n===D?K(o.svgSize,o.svgColor):n===M?G(o.svgSize,o.svgColor):q(o.svgSize,o.svgColor));var k='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+x+"</span>",C="";0<f.length&&(f=f.length>o.messageMaxLength?H(f).substring(0,o.messageMaxLength)+"...":H(f),C='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),se++;var I=e.document.createElement("div");I.id=z.ID+"-"+se,I.className=p+(o.cssAnimation?" nx-with-animation":""),I.style.position=o.position,I.style.zIndex=o.zindex,I.style.background=o.backgroundColor,I.style.animationDuration=o.cssAnimationDuration+"ms",I.style.fontFamily='"'+o.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",o.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=k+C;var T,N=e.getComputedStyle(v).getPropertyValue("position"),E="string"==typeof N?N.toLocaleLowerCase("en"):"relative",S=Math.round(1.25*parseInt(o.svgSize))+40,R="";S>(v.offsetHeight||0)&&(R="min-height:"+S+"px;"),T=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var A="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(E);if(j||0<R.length){if(!U("head"))return!1;j&&(A="position:relative!important;");var Y='<style id="Style-'+z.ID+"-"+se+'">'+T+"."+_+"{"+A+R+"}</style>",J=e.document.createRange();J.selectNode(e.document.head);var Q=J.createContextualFragment(Y);e.document.head.appendChild(Q),v.classList.add(_)}v.appendChild(I)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),r=e.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else W("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(_),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+z.ID+"]"),ee(w));clearTimeout(ne)}),l);o=B(!0,o,h)},le={Notify:{init:function(e){t=B(!0,d,e),j(Y,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=B(!0,t,e)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(l,e,t,n)},failure:function(e,t,n){Q(c,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(h,e,t,n)}},Report:{init:function(e){n=B(!0,_,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=B(!0,n,e)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,r){ee(f,e,t,n,i,r)},failure:function(e,t,n,i,r){ee(p,e,t,n,i,r)},warning:function(e,t,n,i,r){ee(m,e,t,n,i,r)},info:function(e,t,n,i,r){ee(g,e,t,n,i,r)}},Confirm:{init:function(e){i=B(!0,w,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=B(!0,i,e)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,r,o,s){ne(v,e,t,null,n,i,r,o,s)},ask:function(e,t,n,i,r,o,s,a){ne(y,e,t,n,i,r,o,s,a)},prompt:function(e,t,n,i,r,o,s,a){ne(b,e,t,n,i,r,o,s,a)}},Loading:{init:function(e){r=B(!0,R,e),j(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=B(!0,r,e)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(x,e,t,!0,0)},hourglass:function(e,t){re(k,e,t,!0,0)},circle:function(e,t){re(C,e,t,!0,0)},arrows:function(e,t){re(I,e,t,!0,0)},dots:function(e,t){re(T,e,t,!0,0)},pulse:function(e,t){re(N,e,t,!0,0)},custom:function(e,t){re(E,e,t,!0,0)},notiflix:function(e,t){re(S,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(R.ID);if(n)if(0<t.length){t=t.length>r.messageMaxLength?H(t).substring(0,r.messageMaxLength)+"...":H(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var o=e.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else F("Where is the new message?")}(t)}},Block:{init:function(e){o=B(!0,z,e),j(oe,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=B(!0,o,e)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ae(!0,A,e,t,n)},hourglass:function(e,t,n){ae(!0,P,e,t,n)},circle:function(e,t,n){ae(!0,L,e,t,n)},arrows:function(e,t,n){ae(!0,O,e,t,n)},dots:function(e,t,n){ae(!0,D,e,t,n)},pulse:function(e,t,n){ae(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ae(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?B(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return d(h)})):"object"==typeof f?f=d(h):h.Notiflix=d(h);o=r("7rYDH");const p=document.querySelector(".loader"),m=document.getElementById("header-input");t(f).Notify.init({width:"400px",position:"right-bottom",distance:"10px",fontSize:"16px",borderRadius:"5px",timeout:3e3,pauseOnHover:!0}),document.querySelector(".header-form").addEventListener("submit",(async function(e){e.preventDefault();const n=m.value.trim();try{if(!n)return t(f).Notify.failure("Please enter a movie name!");p.style.display="block";const e=await(0,o.getSearchMovie)(n,1);if(!e.results||0===e.results.length)return t(f).Notify.failure("Search result not successful. Enter the correct movie name!");l(e)}catch(e){console.error("Error searching for movies:",e)}finally{p.style.display="none"}})),r("5uEKZ"),r("lUidB");o=r("7rYDH"),s=r("5uEKZ");(0,o.getTrending)(1).then((e=>{l(e),(0,s.saveLocalStorage)("moviesData",e.results)}));const g=document.getElementById("login"),_=document.getElementById("register"),v=document.getElementById("btn-connect");function y(){g.style.left="-400px",_.style.left="50px",v.style.left="110px"}function b(){g.style.left="50px",_.style.left="450px",v.style.left="0px"}document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".toggle-btn[onclick='login()']"),t=document.querySelector(".toggle-btn[onclick='register()']");e&&(e.onclick=null,e.addEventListener("click",b)),t&&(t.onclick=null,t.addEventListener("click",y))})),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();var w,x,k,C=w={};function I(){throw new Error("setTimeout has not been defined")}function T(){throw new Error("clearTimeout has not been defined")}function N(e){if(x===setTimeout)return setTimeout(e,0);if((x===I||!x)&&setTimeout)return x=setTimeout,setTimeout(e,0);try{return x(e,0)}catch(t){try{return x.call(null,e,0)}catch(t){return x.call(this,e,0)}}}!function(){try{x="function"==typeof setTimeout?setTimeout:I}catch(e){x=I}try{k="function"==typeof clearTimeout?clearTimeout:T}catch(e){k=T}}();var E,S=[],R=!1,A=-1;function P(){R&&E&&(R=!1,E.length?S=E.concat(S):A=-1,S.length&&L())}function L(){if(!R){var e=N(P);R=!0;for(var t=S.length;t;){for(E=S,S=[];++A<t;)E&&E[A].run();A=-1,t=S.length}E=null,R=!1,function(e){if(k===clearTimeout)return clearTimeout(e);if((k===T||!k)&&clearTimeout)return k=clearTimeout,clearTimeout(e);try{k(e)}catch(t){try{return k.call(null,e)}catch(t){return k.call(this,e)}}}(e)}}function O(e,t){this.fun=e,this.array=t}function D(){}C.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];S.push(new O(e,t)),1!==S.length||R||N(L)},O.prototype.run=function(){this.fun.apply(null,this.array)},C.title="browser",C.browser=!0,C.env={},C.argv=[],C.version="",C.versions={},C.on=D,C.addListener=D,C.once=D,C.off=D,C.removeListener=D,C.removeAllListeners=D,C.emit=D,C.prependListener=D,C.prependOnceListener=D,C.listeners=function(e){return[]},C.binding=function(e){throw new Error("process.binding is not supported")},C.cwd=function(){return"/"},C.chdir=function(e){throw new Error("process.chdir is not supported")},C.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M=!1,z=!1,F="${JSCORE_VERSION}",W=function(e,t){if(!e)throw U(t)},U=function(e){return new Error("Firebase Database ("+F+") INTERNAL ASSERT FAILED: "+e)},j=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},B={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(j(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw new H;const l=r<<2|o>>4;if(i.push(l),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q=function(e){const t=j(e);return B.encodeByteArray(t,!0)},V=function(e){return q(e).replace(/\./g,"")},$=function(e){try{return B.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){return K(void 0,e)}function K(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=K(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Y=()=>{try{return G()||(()=>{if(void 0===w||void 0===w.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&$(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},J=e=>{var t,n;return null===(n=null===(t=Y())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Q=e=>{const t=J(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Z=()=>{var e;return null===(e=Y())||void 0===e?void 0:e.config},ee=e=>{var t;return null===(t=Y())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[V(JSON.stringify({alg:"none",type:"JWT"})),V(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function re(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function oe(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function se(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ae(){const e=ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function le(){return!0===M||!0===z}function ce(){try{return"object"==typeof indexedDB}catch(e){return!1}}class ue extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,he.prototype.create)}}class he{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(de,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new ue(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const de=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return JSON.parse(e)}function pe(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=fe($(o[0])||""),n=fe($(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},ge=function(e){const t=me(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},_e=function(e){const t=me(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function be(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function we(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function xe(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(ke(n)&&ke(o)){if(!xe(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function ke(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ce(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ie(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Te(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^s&(a^l),r=1518500249):(i=s^a^l,r=1859775393):e<60?(i=s&a|l&(s|a),r=2400959708):(i=s^a^l,r=3395469782);const t=(o<<5|o>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(0===o)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function Ee(e,t){const n=new Se(e,t);return n.subscribe.bind(n)}class Se{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Re),void 0===i.error&&(i.error=Re),void 0===i.complete&&(i.complete=Re);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Re(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,W(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Le=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe(e){return e&&e._delegate?e._delegate:e}class De{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new te;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ze{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Me(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=[];var We,Ue;(Ue=We||(We={}))[Ue.DEBUG=0]="DEBUG",Ue[Ue.VERBOSE=1]="VERBOSE",Ue[Ue.INFO=2]="INFO",Ue[Ue.WARN=3]="WARN",Ue[Ue.ERROR=4]="ERROR",Ue[Ue.SILENT=5]="SILENT";const je={debug:We.DEBUG,verbose:We.VERBOSE,info:We.INFO,warn:We.WARN,error:We.ERROR,silent:We.SILENT},Be=We.INFO,He={[We.DEBUG]:"log",[We.VERBOSE]:"log",[We.INFO]:"info",[We.WARN]:"warn",[We.ERROR]:"error"},qe=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=He[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Ve{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in We))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?je[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,We.DEBUG,...e),this._logHandler(this,We.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,We.VERBOSE,...e),this._logHandler(this,We.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,We.INFO,...e),this._logHandler(this,We.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,We.WARN,...e),this._logHandler(this,We.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,We.ERROR,...e),this._logHandler(this,We.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Be,this._logHandler=qe,this._userLogHandler=null,Fe.push(this)}}let $e,Xe;const Ke=new WeakMap,Ge=new WeakMap,Ye=new WeakMap,Je=new WeakMap,Qe=new WeakMap;let Ze={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ge.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ye.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function et(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Xe||(Xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(it(this),t),nt(Ke.get(this))}:function(...t){return nt(e.apply(it(this),t))}:function(t,...n){const i=e.call(it(this),t,...n);return Ye.set(i,t.sort?t.sort():[t]),nt(i)}}function tt(e){return"function"==typeof e?et(e):(e instanceof IDBTransaction&&function(e){if(Ge.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));Ge.set(e,t)}(e),t=e,($e||($e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ze):e);var t}function nt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(nt(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Ke.set(t,e)})).catch((()=>{})),Qe.set(t,e),t}(e);if(Je.has(e))return Je.get(e);const t=tt(e);return t!==e&&(Je.set(e,t),Qe.set(t,e)),t}const it=e=>Qe.get(e);function rt(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=nt(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(nt(s.result),e.oldVersion,e.newVersion,nt(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const ot=["get","getKey","getAll","getAllKeys","count"],st=["put","add","delete","clear"],at=new Map;function lt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(at.get(t))return at.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=st.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!ot.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return at.set(t,o),o}Ze=(e=>({...e,get:(t,n,i)=>lt(t,n)||e.get(t,n,i),has:(t,n)=>!!lt(t,n)||e.has(t,n)}))(Ze);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ut=new Ve("@firebase/app"),ht={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},dt=new Map,ft=new Map;function pt(e,t){try{e.container.addComponent(t)}catch(n){ut.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mt(e){const t=e.name;if(ft.has(t))return ut.debug(`There were multiple attempts to register component ${t}.`),!1;ft.set(t,e);for(const t of dt.values())pt(t,e);return!0}function gt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t=new he("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new De("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw _t.create("bad-app-name",{appName:String(r)});if(n||(n=Z()),!n)throw _t.create("no-options");const o=dt.get(r);if(o){if(xe(n,o.options)&&xe(i,o.config))return o;throw _t.create("duplicate-app",{appName:r})}const s=new ze(r);for(const e of ft.values())s.addComponent(e);const a=new vt(n,i,s);return dt.set(r,a),a}function bt(e="[DEFAULT]"){const t=dt.get(e);if(!t&&"[DEFAULT]"===e&&Z())return yt();if(!t)throw _t.create("no-app",{appName:e});return t}function wt(e,t,n){var i;let r=null!==(i=ht[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ut.warn(e.join(" "))}mt(new De(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let xt=null;function kt(){return xt||(xt=rt("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore("firebase-heartbeat-store")}catch(e){console.warn(e)}}}).catch((e=>{throw _t.create("idb-open",{originalErrorMessage:e.message})}))),xt}async function Ct(e,t){try{const n=(await kt()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,It(e)),await n.done}catch(e){if(e instanceof ue)ut.warn(e.message);else{const t=_t.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ut.warn(t.message)}}}function It(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nt();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),St(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),St(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=V(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Et(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Nt(){return(new Date).toISOString().substring(0,10)}class Et{async runIndexedDBEnvironmentCheck(){return!!ce()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await kt()).transaction("firebase-heartbeat-store"),n=await t.objectStore("firebase-heartbeat-store").get(It(e));return await t.done,n}catch(e){if(e instanceof ue)ut.warn(e.message);else{const t=_t.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ut.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function St(e){return V(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt;Rt="",mt(new De("platform-logger",(e=>new ct(e)),"PRIVATE")),mt(new De("heartbeat",(e=>new Tt(e)),"PRIVATE")),wt("@firebase/app","0.9.28",Rt),wt("@firebase/app","0.9.28","esm2017"),wt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
wt("firebase","10.8.1","app");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At="";function Pt(e){At=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:fe(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ve(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Lt(t)}}catch(e){}return new Ot},Mt=Dt("localStorage"),zt=Dt("sessionStorage"),Ft=new Ve("@firebase/database"),Wt=function(){let e=1;return function(){return e++}}(),Ut=function(e){const t=Pe(e),n=new Ne;n.update(t);const i=n.digest();return B.encodeByteArray(i)},jt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=jt.apply(null,i):t+="object"==typeof i?pe(i):i,t+=" "}return t};let Bt=null,Ht=!0;const qt=function(e,t){W(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ft.logLevel=We.VERBOSE,Bt=Ft.log.bind(Ft),t&&zt.set("logging_enabled",!0)):"function"==typeof e?Bt=e:(Bt=null,zt.remove("logging_enabled"))},Vt=function(...e){if(!0===Ht&&(Ht=!1,null===Bt&&!0===zt.get("logging_enabled")&&qt(!0)),Bt){const t=jt.apply(null,e);Bt(t)}},$t=function(e){return function(...t){Vt(e,...t)}},Xt=function(...e){const t="FIREBASE INTERNAL ERROR: "+jt(...e);Ft.error(t)},Kt=function(...e){const t=`FIREBASE FATAL ERROR: ${jt(...e)}`;throw Ft.error(t),new Error(t)},Gt=function(...e){const t="FIREBASE WARNING: "+jt(...e);Ft.warn(t)},Yt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Jt=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=sn(e),i=sn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Qt=function(e,t){return e===t?0:e<t?-1:1},Zt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+pe(t))},en=function(e){if("object"!=typeof e||null===e)return pe(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=pe(t[i]),n+=":",n+=en(e[t[i]]);return n+="}",n},tn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function nn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const rn=function(e){W(!Yt(e),"Invalid JSON number");const t=1023;let n,i,r,o,s;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const on=new RegExp("^-?(0*)\\d{1,10}$"),sn=function(e){if(on.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},an=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Gt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ln=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gt(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class hn{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}hn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mt.get("host:"+e)||this._host}}function pn(e,t,n){let i;if(W("string"==typeof t,"typeof type must == string"),W("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return nn(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{incrementCounter(e,t=1){ve(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return X(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={},_n={};function vn(e){const t=e.toString();return gn[t]||(gn[t]=new mn),gn[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&an((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(le()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new wn(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&dn.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bn.forceAllow_=!0}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){return!le()&&(!!bn.forceAllow_||!(bn.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=q(t),i=tn(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(le())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=pe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$t(e),this.stats_=vn(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),pn(t,"long_polling",e))}}class wn{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Vt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){le()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,le())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Wt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=wn.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Vt("frame writing exception"),e.stack&&Vt(e.stack),Vt(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn=null;"undefined"!=typeof MozWebSocket?xn=MozWebSocket:"undefined"!=typeof WebSocket&&(xn=WebSocket);class kn{static connectionURL_(e,t,n,i,r){const o={v:"5"};return!le()&&"undefined"!=typeof location&&location.hostname&&dn.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o.ac=i),r&&(o.p=r),pn(e,"websocket",o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mt.set("previous_websocket_failure",!0);try{let e;if(le()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${At}/${w.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new xn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==xn&&!kn.forceDisallow_}static previouslyFailed(){return Mt.isInMemoryStorage||!0===Mt.get("previous_websocket_failure")}markConnectionHealthy(){Mt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=fe(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=tn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$t(this.connId),this.stats_=vn(t),this.connURL=kn.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}}kn.responsesRequiredToBeHealthy=2,kn.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{static get ALL_TRANSPORTS(){return[bn,kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=kn&&kn.isAvailable();let n=t&&!kn.previouslyFailed();if(e.webSocketOnly&&(t||Gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[kn];else{const e=this.transports_=[];for(const t of Cn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Cn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Cn.globalTransportInitialized_=!1;class In{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ln((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Zt("t",e),n=Zt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Zt("t",e),n=Zt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Zt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Xt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ln((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ln((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$t("c:"+this.id+":"),this.transportManager_=new Cn(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){W(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Nn{static getInstance(){return new En}getInitialEvent(e){return W("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||re()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Rn(){return new Sn("")}function An(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Pn(e){return e.pieces_.length-e.pieceNum_}function Ln(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Sn(e.pieces_,t)}function On(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Dn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Mn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Sn(t,0)}function zn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Sn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Sn(n,0)}function Fn(e){return e.pieceNum_>=e.pieces_.length}function Wn(e,t){const n=An(e),i=An(t);if(null===n)return t;if(n===i)return Wn(Ln(e),Ln(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Un(e,t){if(Pn(e)!==Pn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function jn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Pn(e)>Pn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Bn{constructor(e,t){this.errorPrefix_=t,this.parts_=Dn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Le(this.parts_[e]);Hn(this)}}function Hn(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+qn(e))}function qn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Nn{static getInstance(){return new Vn}getInitialEvent(e){return W("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Tn{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(pe(r)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new te,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const o=r.d,s=r.s;$n.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ve(e,"w")){const n=ye(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||_e(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ge(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Xt("Unrecognized action received from server: "+pe(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},l=function(e){W(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Vt("getToken() completed but was canceled"):(Vt("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new In(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Gt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Gt(e),a())}}}interrupt(e){Vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],be(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>en(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Sn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Vt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Vt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";le()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+At.replace(/\./g,"-")]=1,re()?e["framework.cordova"]=1:se()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=En.getInstance().currentlyOnline();return be(this.interruptReasons_)&&e}constructor(e,t,n,i,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=$n.nextPersistentConnectionId_++,this.log_=$t("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!le())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&En.getInstance().on("online",this.onOnline_,this)}}$n.nextPersistentConnectionId_=0,$n.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{static Wrap(e,t){return new Xn(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Xn("[MIN_NAME]",e),i=new Xn("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Xn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn;class Yn extends Kn{static get __EMPTY_NODE(){return Gn}static set __EMPTY_NODE(e){Gn=e}compare(e,t){return Jt(e.name,t.name)}isDefinedOn(e){throw U("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Xn.MIN}maxPost(){return new Xn("[MAX_NAME]",Gn)}makePost(e,t){return W("string"==typeof e,"KeyIndex indexValue must always be a string."),new Xn(e,Gn)}toString(){return".key"}}const Jn=new Yn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Zn{copy(e,t,n,i,r){return new Zn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ei.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ei.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Zn.RED,this.left=null!=i?i:ei.EMPTY_NODE,this.right=null!=r?r:ei.EMPTY_NODE}}Zn.RED=!0,Zn.BLACK=!1;class ei{insert(e,t){return new ei(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zn.BLACK,null,null))}remove(e){return new ei(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Qn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Qn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Qn(this.root_,null,this.comparator_,!0,e)}constructor(e,t=ei.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(e,t){return Jt(e.name,t.name)}function ni(e,t){return Jt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;ei.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Zn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ri=function(e){return"number"==typeof e?"number:"+rn(e):"string:"+e},oi=function(e){if(e.isLeafNode()){const t=e.val();W("string"==typeof t||"number"==typeof t||"object"==typeof t&&ve(t,".sv"),"Priority must be a string or number.")}else W(e===ii||e.isEmpty(),"priority of unexpected type.");W(e===ii||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let si,ai,li;class ci{static set __childrenNodeConstructor(e){si=e}static get __childrenNodeConstructor(){return si}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ci(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ci.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Fn(e)?this:".priority"===An(e)?this.priorityNode_:ci.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ci.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=An(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(W(".priority"!==n||1===Pn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ci.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ln(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ri(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?rn(this.value_):this.value_,this.lazyHash_=Ut(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ci.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ci.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ci.VALUE_TYPE_ORDER.indexOf(t),r=ci.VALUE_TYPE_ORDER.indexOf(n);return W(i>=0,"Unknown leaf type: "+t),W(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=ci.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,W(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),oi(this.priorityNode_)}}ci.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ui=new class extends Kn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Jt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Xn.MIN}maxPost(){return new Xn("[MAX_NAME]",new ci("[PRIORITY-POST]",li))}makePost(e,t){const n=ai(e);return new Xn(t,new ci("[PRIORITY-POST]",n))}toString(){return".priority"}},hi=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/hi,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const fi=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Zn(a,s.node,Zn.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=r(t,l),u=r(l+1,i);return s=e[l],a=n?n(s):s,new Zn(a,s.node,Zn.BLACK,c,u)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const c=r(o+1,a),u=e[o],h=n?n(u):u;l(new Zn(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Zn.BLACK):(a(i,Zn.BLACK),a(i,Zn.RED))}return o}(new di(e.length));return new ei(i||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;const mi={};class gi{static get Default(){return W(mi&&ui,"ChildrenNode.ts has not been loaded"),pi=pi||new gi({".priority":mi},{".priority":ui}),pi}get(e){const t=ye(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ei?t:null}hasIndex(e){return ve(this.indexSet_,e.toString())}addIndex(e,t){W(e!==Jn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Xn.Wrap);let o,s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();o=i?fi(n,e.getCompare()):mi;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=o,new gi(c,l)}addToIndexes(e,t){const n=we(this.indexes_,((n,i)=>{const r=ye(this.indexSet_,i);if(W(r,"Missing index implementation for "+i),n===mi){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Xn.Wrap);let o=i.getNext();for(;o;)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),fi(n,r.getCompare())}return mi}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Xn(e.name,i))),r.insert(e,e.node)}}));return new gi(n,this.indexSet_)}removeFromIndexes(e,t){const n=we(this.indexes_,(n=>{if(n===mi)return n;{const i=t.get(e.name);return i?n.remove(new Xn(e.name,i)):n}}));return new gi(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class vi{static get EMPTY_NODE(){return _i||(_i=new vi(new ei(ni),null,gi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_i}updatePriority(e){return this.children_.isEmpty()?this:new vi(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?_i:t}}getChild(e){const t=An(e);return null===t?this:this.getImmediateChild(t).getChild(Ln(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(W(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Xn(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?_i:this.priorityNode_;return new vi(i,o,r)}}updateChild(e,t){const n=An(e);if(null===n)return t;{W(".priority"!==An(e)||1===Pn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Ln(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ui,((o,s)=>{t[o]=s.val(e),n++,r&&vi.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ri(this.getPriority().val())+":"),this.forEachChild(ui,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ut(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Xn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Xn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Xn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Xn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Xn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yi?-1:0}withIndex(e){if(e===Jn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vi(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Jn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ui),n=t.getIterator(ui);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Jn?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&oi(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}vi.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const yi=new class extends vi{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vi.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new ei(ni),vi.EMPTY_NODE,gi.Default)}};Object.defineProperties(Xn,{MIN:{value:new Xn("[MIN_NAME]",vi.EMPTY_NODE)},MAX:{value:new Xn("[MAX_NAME]",yi)}}),Yn.__EMPTY_NODE=vi.EMPTY_NODE,ci.__childrenNodeConstructor=vi,ii=yi,function(e){li=e}(yi);function bi(e,t=null){if(null===e)return vi.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),W(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ci(e,bi(t))}if(e instanceof Array){let n=vi.EMPTY_NODE;return nn(e,((t,i)=>{if(ve(e,t)&&"."!==t.substring(0,1)){const e=bi(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(bi(t))}{const n=[];let i=!1;if(nn(e,((e,t)=>{if("."!==e.substring(0,1)){const r=bi(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Xn(e,r)))}})),0===n.length)return vi.EMPTY_NODE;const r=fi(n,ti,(e=>e.name),ni);if(i){const e=fi(n,ui.getCompare());return new vi(r,bi(t),new gi({".priority":e},{".priority":ui}))}return new vi(r,bi(t),gi.Default)}}!function(e){ai=e}(bi);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi extends Kn{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Jt(e.name,t.name):r}makePost(e,t){const n=bi(e),i=vi.EMPTY_NODE.updateChild(this.indexPath_,n);return new Xn(t,i)}maxPost(){const e=vi.EMPTY_NODE.updateChild(this.indexPath_,yi);return new Xn("[MAX_NAME]",e)}toString(){return Dn(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,W(!Fn(e)&&".priority"!==An(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new class extends Kn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Jt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Xn.MIN}maxPost(){return Xn.MAX}makePost(e,t){const n=bi(e);return new Xn(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e){return{type:"value",snapshotNode:e}}function Ci(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ii(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ti(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ui}copy(){const e=new Ni;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ui}}function Ei(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ui?n="$priority":e.index_===xi?n="$value":e.index_===Jn?n="$key":(W(e.index_ instanceof wi,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=pe(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=pe(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+pe(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=pe(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+pe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Si(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ui&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Tn{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ri.getListenId_(e,n),s={};this.listens_[o]=s;const a=Ei(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ye(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ri.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ei(e._queryParams),n=e._path.toString(),i=new te;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ce(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=fe(s.responseText)}catch(e){Gt("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&Gt("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=$t("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=vi.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){return{value:null,children:new Map}}function Li(e,t,n){if(Fn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=An(t);e.children.has(i)||e.children.set(i,Pi());Li(e.children.get(i),t=Ln(t),n)}}function Oi(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Oi(i,new Sn(t.toString()+"/"+e),n)}))}class Di{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&nn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;nn(e,((e,i)=>{i>0&&ve(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),ln(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Di(e);const n=1e4+2e4*Math.random();ln(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zi,Fi;function Wi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Fi=zi||(zi={}))[Fi.OVERWRITE=0]="OVERWRITE",Fi[Fi.MERGE=1]="MERGE",Fi[Fi.ACK_USER_WRITE=2]="ACK_USER_WRITE",Fi[Fi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ui{operationForChild(e){if(Fn(this.path)){if(null!=this.affectedTree.value)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Sn(e));return new Ui(Rn(),t,this.revert)}}return W(An(this.path)===e,"operationForChild called for unrelated child."),new Ui(Ln(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=zi.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{operationForChild(e){return Fn(this.path)?new ji(this.source,Rn(),this.snap.getImmediateChild(e)):new ji(this.source,Ln(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=zi.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{operationForChild(e){if(Fn(this.path)){const t=this.children.subtree(new Sn(e));return t.isEmpty()?null:t.value?new ji(this.source,Rn(),t.value):new Bi(this.source,Rn(),t)}return W(An(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bi(this.source,Ln(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=zi.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Fn(e))return this.isFullyInitialized()&&!this.filtered_;const t=An(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw U("Should only compare child_ events.");const i=new Xn(t.childName,t.snapshotNode),r=new Xn(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Vi(e,t){return{eventCache:e,serverCache:t}}function $i(e,t,n,i){return Vi(new Hi(t,n,i),e.serverCache)}function Xi(e,t,n,i){return Vi(e.eventCache,new Hi(t,n,i))}function Ki(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Gi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi;class Ji{static fromObject(e){let t=new Ji(null);return nn(e,((e,n)=>{t=t.set(new Sn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Rn(),value:this.value};if(Fn(e))return null;{const n=An(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Ln(e),t);if(null!=r){return{path:zn(new Sn(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Fn(e))return this;{const t=An(e),n=this.children.get(t);return null!==n?n.subtree(Ln(e)):new Ji(null)}}set(e,t){if(Fn(e))return new Ji(t,this.children);{const n=An(e),i=(this.children.get(n)||new Ji(null)).set(Ln(e),t),r=this.children.insert(n,i);return new Ji(this.value,r)}}remove(e){if(Fn(e))return this.children.isEmpty()?new Ji(null):new Ji(null,this.children);{const t=An(e),n=this.children.get(t);if(n){const i=n.remove(Ln(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ji(null):new Ji(this.value,r)}return this}}get(e){if(Fn(e))return this.value;{const t=An(e),n=this.children.get(t);return n?n.get(Ln(e)):null}}setTree(e,t){if(Fn(e))return t;{const n=An(e),i=(this.children.get(n)||new Ji(null)).setTree(Ln(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Ji(this.value,r)}}fold(e){return this.fold_(Rn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(zn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Rn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Fn(e))return null;{const i=An(e),r=this.children.get(i);return r?r.findOnPath_(Ln(e),zn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Rn(),t)}foreachOnPath_(e,t,n){if(Fn(e))return this;{this.value&&n(t,this.value);const i=An(e),r=this.children.get(i);return r?r.foreachOnPath_(Ln(e),zn(t,i),n):new Ji(null)}}foreach(e){this.foreach_(Rn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(zn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Yi||(Yi=new ei(Qt)),Yi))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{static empty(){return new Qi(new Ji(null))}constructor(e){this.writeTree_=e}}function Zi(e,t,n){if(Fn(t))return new Qi(new Ji(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=Wn(r,t);return o=o.updateChild(s,n),new Qi(e.writeTree_.set(r,o))}{const i=new Ji(n),r=e.writeTree_.setTree(t,i);return new Qi(r)}}}function er(e,t,n){let i=e;return nn(n,((e,n)=>{i=Zi(i,zn(t,e),n)})),i}function tr(e,t){if(Fn(t))return Qi.empty();{const n=e.writeTree_.setTree(t,new Ji(null));return new Qi(n)}}function nr(e,t){return null!=ir(e,t)}function ir(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Wn(n.path,t)):null}function rr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ui,((e,n)=>{t.push(new Xn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Xn(e,n.value))})),t}function or(e,t){if(Fn(t))return e;{const n=ir(e,t);return new Qi(null!=n?new Ji(n):e.writeTree_.subtree(t))}}function sr(e){return e.writeTree_.isEmpty()}function ar(e,t){return lr(Rn(),e.writeTree_,t)}function lr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(W(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=lr(zn(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(zn(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e,t){return xr(t,e)}function ur(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));W(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&hr(t,i.path)?r=!1:jn(i.path,t.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=fr(e.allWrites,dr,Rn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=tr(e.visibleWrites,i.path);else{nn(i.children,(t=>{e.visibleWrites=tr(e.visibleWrites,zn(i.path,t))}))}return!0}return!1}function hr(e,t){if(e.snap)return jn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&jn(zn(e.path,n),t))return!0;return!1}function dr(e){return e.visible}function fr(e,t,n){let i=Qi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)jn(n,e)?(t=Wn(n,e),i=Zi(i,t,o.snap)):jn(e,n)&&(t=Wn(e,n),i=Zi(i,Rn(),o.snap.getChild(t)));else{if(!o.children)throw U("WriteRecord should have .snap or .children");if(jn(n,e))t=Wn(n,e),i=er(i,t,o.children);else if(jn(e,n))if(t=Wn(e,n),Fn(t))i=er(i,Rn(),o.children);else{const e=ye(o.children,An(t));if(e){const n=e.getChild(Ln(t));i=Zi(i,Rn(),n)}}}}}return i}function pr(e,t,n,i,r){if(i||r){const o=or(e.visibleWrites,t);if(!r&&sr(o))return n;if(r||null!=n||nr(o,Rn())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(jn(e.path,t)||jn(t,e.path))};return ar(fr(e.allWrites,o,t),n||vi.EMPTY_NODE)}return null}{const i=ir(e.visibleWrites,t);if(null!=i)return i;{const i=or(e.visibleWrites,t);if(sr(i))return n;if(null!=n||nr(i,Rn())){return ar(i,n||vi.EMPTY_NODE)}return null}}}function mr(e,t,n,i){return pr(e.writeTree,e.treePath,t,n,i)}function gr(e,t){return function(e,t,n){let i=vi.EMPTY_NODE;const r=ir(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ui,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=or(e.visibleWrites,t);return n.forEachChild(ui,((e,t)=>{const n=ar(or(r,new Sn(e)),t);i=i.updateImmediateChild(e,n)})),rr(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return rr(or(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function _r(e,t,n,i){return function(e,t,n,i,r){W(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=zn(t,n);if(nr(e.visibleWrites,o))return null;{const t=or(e.visibleWrites,o);return sr(t)?r.getChild(n):ar(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function vr(e,t){return function(e,t){return ir(e.visibleWrites,t)}(e.writeTree,zn(e.treePath,t))}function yr(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){let a;const l=or(e.visibleWrites,t),c=ir(l,Rn());if(null!=c)a=c;else{if(null==n)return[];a=ar(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,o)}function br(e,t,n){return function(e,t,n,i){const r=zn(t,n),o=ir(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n))return ar(or(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function wr(e,t){return xr(zn(e.treePath,t),e.writeTree)}function xr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{trackChildChange(e){const t=e.type,n=e.childName;W("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),W(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Ti(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Ii(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Ci(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw U("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ti(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Ir{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Hi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return br(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Gi(this.viewCache_),r=yr(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t,n,i,r){const o=new kr;let s,a;if(n.type===zi.OVERWRITE){const l=n;l.source.fromUser?s=Sr(e,t,l.path,l.snap,i,r,o):(W(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Fn(l.path),s=Er(e,t,l.path,l.snap,i,r,a,o))}else if(n.type===zi.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,l)=>{const c=zn(n,i);Rr(t,An(c))&&(a=Sr(e,a,c,l,r,o,s))})),i.foreach(((i,l)=>{const c=zn(n,i);Rr(t,An(c))||(a=Sr(e,a,c,l,r,o,s))})),a}(e,t,l.path,l.children,i,r,o):(W(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=Pr(e,t,l.path,l.children,i,r,a,o))}else if(n.type===zi.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,r,o){let s;if(null!=vr(i,n))return t;{const a=new Ir(i,t,r),l=t.eventCache.getNode();let c;if(Fn(n)||".priority"===An(n)){let n;if(t.serverCache.isFullyInitialized())n=mr(i,Gi(t));else{const e=t.serverCache.getNode();W(e instanceof vi,"serverChildren would be complete if leaf node"),n=gr(i,e)}c=e.filter.updateFullNode(l,n,o)}else{const r=An(n);let u=br(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,Ln(n),a,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,vi.EMPTY_NODE,Ln(n),a,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=mr(i,Gi(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=vr(i,Rn()),$i(t,c,s,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,o):function(e,t,n,i,r,o,s){if(null!=vr(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Fn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Er(e,t,n,l.getNode().getChild(n),r,o,a,s);if(Fn(n)){let i=new Ji(null);return l.getNode().forEachChild(Jn,((e,t)=>{i=i.set(new Sn(e),t)})),Pr(e,t,n,i,r,o,a,s)}return t}{let c=new Ji(null);return i.foreach(((e,t)=>{const i=zn(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Pr(e,t,n,c,r,o,a,s)}}(e,t,a.path,a.affectedTree,i,r,o)}else{if(n.type!==zi.LISTEN_COMPLETE)throw U("Unknown operation type: "+n.type);s=function(e,t,n,i,r){const o=t.serverCache,s=Xi(t,o.getNode(),o.isFullyInitialized()||Fn(n),o.isFiltered());return Nr(e,s,n,i,Cr,r)}(e,t,n.path,i,o)}const l=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Ki(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(ki(Ki(t)))}}(t,s,l),{viewCache:s,changes:l}}function Nr(e,t,n,i,r,o){const s=t.eventCache;if(null!=vr(i,n))return t;{let a,l;if(Fn(n))if(W(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Gi(t),r=gr(i,n instanceof vi?n:vi.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=mr(i,Gi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=An(n);if(".priority"===c){W(1===Pn(n),"Can't have a priority with additional path components");const r=s.getNode();l=t.serverCache.getNode();const o=_r(i,n,r,l);a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const u=Ln(n);let h;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const e=_r(i,n,s.getNode(),l);h=null!=e?s.getNode().getImmediateChild(c).updateChild(u,e):s.getNode().getImmediateChild(c)}else h=br(i,c,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),c,h,u,r,o):s.getNode()}}return $i(t,a,s.isFullyInitialized()||Fn(n),e.filter.filtersNodes())}}function Er(e,t,n,i,r,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(Fn(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=An(n);if(!l.isCompleteForPath(n)&&Pn(n)>1)return t;const r=Ln(n),o=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,r,Cr,null)}const h=Xi(t,c,l.isFullyInitialized()||Fn(n),u.filtersNodes());return Nr(e,h,n,r,new Ir(r,h,o),a)}function Sr(e,t,n,i,r,o,s){const a=t.eventCache;let l,c;const u=new Ir(r,t,o);if(Fn(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,s),l=$i(t,c,!0,e.filter.filtersNodes());else{const r=An(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=$i(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=Ln(n),c=a.getNode().getImmediateChild(r);let h;if(Fn(o))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===On(o)&&e.getChild(Mn(o)).isEmpty()?e:e.updateChild(o,i):vi.EMPTY_NODE}if(c.equals(h))l=t;else{l=$i(t,e.filter.updateChild(a.getNode(),r,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Rr(e,t){return e.eventCache.isCompleteForChild(t)}function Ar(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Pr(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Fn(n)?i:new Ji(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=Ar(0,t.serverCache.getNode().getImmediateChild(n),i);c=Er(e,c,new Sn(n),l,r,o,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=Ar(0,t.serverCache.getNode().getImmediateChild(n),i);c=Er(e,c,new Sn(n),l,r,o,s,a)}})),c}function Lr(e,t){const n=Gi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Fn(t)&&!n.getImmediateChild(An(t)).isEmpty())?n.getChild(t):null}function Or(e,t,n,i){t.type===zi.MERGE&&null!==t.source.queryId&&(W(Gi(e.viewCache_),"We should always have a full cache before handling merges"),W(Ki(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Tr(e.processor_,r,t,n,i);var s,a;return s=e.processor_,a=o.viewCache,W(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),W(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),W(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Dr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Dr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],o=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),qi(e,r,"child_removed",t,i,n),qi(e,r,"child_added",t,i,n),qi(e,r,"child_moved",o,i,n),qi(e,r,"child_changed",t,i,n),qi(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr,zr;function Fr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return W(null!=o,"SyncTree gave us an op for an invalid query."),Or(o,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(Or(o,t,n,i));return r}}function Wr(e,t){let n=null;for(const i of e.views.values())n=n||Lr(i,t);return n}class Ur{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ji(null),this.pendingWriteTree_={visibleWrites:Qi.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jr(e,t,n,i,r){return function(e,t,n,i,r){W(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Zi(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?$r(e,new ji({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Br(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ur(e.pendingWriteTree_,t)){let t=new Ji(null);return null!=i.snap?t=t.set(Rn(),!0):nn(i.children,(e=>{t=t.set(new Sn(e),!0)})),$r(e,new Ui(i.path,t,n))}return[]}function Hr(e,t,n){return $r(e,new ji({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function qr(e,t,n,i){const r=Gr(e,i);if(null!=r){const i=Yr(r),o=i.path,s=i.queryId,a=Wn(o,t);return Jr(e,o,new ji(Wi(s),a,n))}return[]}function Vr(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Wr(n,Wn(e,t));if(i)return i}));return pr(i,t,r,n,!0)}function $r(e,t){return Xr(t,e.syncPointTree_,null,cr(e.pendingWriteTree_,Rn()))}function Xr(e,t,n,i){if(Fn(e.path))return Kr(e,t,n,i);{const r=t.get(Rn());null==n&&null!=r&&(n=Wr(r,Rn()));let o=[];const s=An(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=wr(i,s);o=o.concat(Xr(a,l,e,t))}return r&&(o=o.concat(Fr(r,e,i,n))),o}}function Kr(e,t,n,i){const r=t.get(Rn());null==n&&null!=r&&(n=Wr(r,Rn()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=wr(i,t),l=e.operationForChild(t);l&&(o=o.concat(Kr(l,r,s,a)))})),r&&(o=o.concat(Fr(r,e,i,n))),o}function Gr(e,t){return e.tagToQueryMap.get(t)}function Yr(e){const t=e.indexOf("$");return W(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Sn(e.substr(0,t))}}function Jr(e,t,n){const i=e.syncPointTree_.get(t);W(i,"Missing sync point for query tag that we're tracking");return Fr(i,n,cr(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qr(t)}node(){return this.node_}constructor(e){this.node_=e}}class Zr{getImmediateChild(e){const t=zn(this.path_,e);return new Zr(this.syncTree_,t)}node(){return Vr(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const eo=function(e,t,n){return e&&"object"==typeof e?(W(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?to(e[".sv"],t,n):"object"==typeof e[".sv"]?no(e[".sv"],t):void W(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},to=function(e,t,n){if("timestamp"===e)return n.timestamp;W(!1,"Unexpected server value: "+e)},no=function(e,t,n){e.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&W(!1,"Unexpected increment value: "+i);const r=t.node();if(W(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},io=function(e,t,n,i){return oo(t,new Zr(n,e),i)},ro=function(e,t,n){return oo(e,new Qr(t),n)};function oo(e,t,n){const i=e.getPriority().val(),r=eo(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=eo(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new ci(o,bi(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new ci(r))),i.forEachChild(ui,((e,i)=>{const r=oo(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function ao(e,t){let n=t instanceof Sn?t:new Sn(t),i=e,r=An(n);for(;null!==r;){const e=ye(i.node.children,r)||{children:{},childCount:0};i=new so(r,i,e),n=Ln(n),r=An(n)}return i}function lo(e){return e.node.value}function co(e,t){e.node.value=t,mo(e)}function uo(e){return e.node.childCount>0}function ho(e,t){nn(e.node.children,((n,i)=>{t(new so(n,e,i))}))}function fo(e,t,n,i){n&&!i&&t(e),ho(e,(e=>{fo(e,t,!0,i)})),n&&i&&t(e)}function po(e){return new Sn(null===e.parent?e.name:po(e.parent)+"/"+e.name)}function mo(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===lo(e)&&!uo(e)}(n),r=ve(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,mo(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,mo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const go=/[\[\].#$\/\u0000-\u001F\u007F]/,_o=/[\[\].#$\u0000-\u001F\u007F]/,vo=function(e){return"string"==typeof e&&0!==e.length&&!go.test(e)},yo=function(e){return"string"==typeof e&&0!==e.length&&!_o.test(e)},bo=function(e,t,n,i){i&&void 0===t||wo(Ae(e,"value"),t,n)},wo=function(e,t,n){const i=n instanceof Sn?new Bn(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+qn(i));if("function"==typeof t)throw new Error(e+"contains a function "+qn(i)+" with contents = "+t.toString());if(Yt(t))throw new Error(e+"contains "+t.toString()+" "+qn(i));if("string"==typeof t&&t.length>10485760/3&&Le(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+qn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(nn(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!vo(t)))throw new Error(e+" contains an invalid key ("+t+") "+qn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=Le(a),Hn(s),wo(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=Le(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+qn(i)+" in addition to actual children.")}},xo=function(e,t,n,i){if(!(i&&void 0===n||yo(n)))throw new Error(Ae(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ko=function(e,t){if(".info"===An(t))throw new Error(e+" failed = Can't modify data under /.info/")},Co=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!vo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),yo(e)}(n))throw new Error(Ae(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function To(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||Un(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function No(e,t,n){To(e,n),Eo(e,(e=>jn(e,t)||jn(t,e)))}function Eo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(So(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function So(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Bt&&Vt("event: "+n.toString()),an(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Io,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pi(),this.transactionQueueTree_=new so,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Ao(e,t,n){if(e.stats_=vn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ri(e.repoInfo_,((t,n,i,r)=>{Oo(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Do(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new $n(e.repoInfo_,t,((t,n,i,r)=>{Oo(e,t,n,i,r)}),(t=>{Do(e,t)}),(t=>{!function(e,t){nn(t,((t,n)=>{Mo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return _n[n]||(_n[n]=t()),_n[n]}(e.repoInfo_,(()=>new Mi(e.stats_,e.server_))),e.infoData_=new Ai,e.infoSyncTree_=new Ur({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Hr(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),Mo(e,"connected",!1),e.serverSyncTree_=new Ur({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);No(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Po(e){const t=e.infoData_.getNode(new Sn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Lo(e){return(t=(t={timestamp:Po(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Oo(e,t,n,i,r){e.dataUpdateCount++;const o=new Sn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(r)if(i){const t=we(n,(e=>bi(e)));s=function(e,t,n,i){const r=Gr(e,i);if(r){const i=Yr(r),o=i.path,s=i.queryId,a=Wn(o,t),l=Ji.fromObject(n);return Jr(e,o,new Bi(Wi(s),a,l))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=bi(n);s=qr(e.serverSyncTree_,o,t,r)}else if(i){const t=we(n,(e=>bi(e)));s=function(e,t,n){const i=Ji.fromObject(n);return $r(e,new Bi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=bi(n);s=Hr(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=qo(e,o)),No(e.eventQueue_,a,s)}function Do(e,t){Mo(e,"connected",t),!1===t&&function(e){Uo(e,"onDisconnectEvents");const t=Lo(e),n=Pi();Oi(e.onDisconnect_,Rn(),((i,r)=>{const o=io(i,r,e.serverSyncTree_,t);Li(n,i,o)}));let i=[];Oi(n,Rn(),((t,n)=>{i=i.concat(Hr(e.serverSyncTree_,t,n));const r=Go(e,t);qo(e,r)})),e.onDisconnect_=Pi(),No(e.eventQueue_,Rn(),i)}(e)}function Mo(e,t,n){const i=new Sn("/.info/"+t),r=bi(n);e.infoData_.updateSnapshot(i,r);const o=Hr(e.infoSyncTree_,i,r);No(e.eventQueue_,i,o)}function zo(e){return e.nextWriteId_++}function Fo(e,t,n,i,r){Uo(e,"set",{path:t.toString(),value:n,priority:i});const o=Lo(e),s=bi(n,i),a=Vr(e.serverSyncTree_,t),l=ro(s,a,o),c=zo(e),u=jr(e.serverSyncTree_,t,l,c,!0);To(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const o="ok"===n;o||Gt("set at "+t+" failed: "+n);const s=Br(e.serverSyncTree_,c,!o);No(e.eventQueue_,t,s),jo(e,r,n,i)}));const h=Go(e,t);qo(e,h),No(e.eventQueue_,h,[])}function Wo(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Uo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Vt(n,...t)}function jo(e,t,n,i){t&&an((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function Bo(e,t,n){return Vr(e.serverSyncTree_,t,n)||vi.EMPTY_NODE}function Ho(e,t=e.transactionQueueTree_){if(t||Ko(e,t),lo(t)){const n=$o(e,t);W(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Bo(e,t,i);let o=r;const s=r.hash();for(let e=0;e<n.length;e++){const i=n[e];W(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Wn(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Uo(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Br(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ko(e,ao(e.transactionQueueTree_,t)),Ho(e,e.transactionQueueTree_),No(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)an(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Gt("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}qo(e,t)}}),s)}(e,po(t),n)}else uo(t)&&ho(t,(t=>{Ho(e,t)}))}function qo(e,t){const n=Vo(e,t),i=po(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Wn(n,l.path);let u,h=!1;if(W(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,r=r.concat(Br(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",r=r.concat(Br(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Bo(e,l.path,o);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){wo("transaction failed: Data returned ",i,l.path);let t=bi(i);"object"==typeof i&&null!=i&&ve(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=Lo(e),c=ro(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=zo(e),o.splice(o.indexOf(s),1),r=r.concat(jr(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(Br(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",r=r.concat(Br(e.serverSyncTree_,l.currentWriteId,!0))}No(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var s;Ko(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)an(i[e]);Ho(e,e.transactionQueueTree_)}(e,$o(e,n),i),i}function Vo(e,t){let n,i=e.transactionQueueTree_;for(n=An(t);null!==n&&void 0===lo(i);)i=ao(i,n),n=An(t=Ln(t));return i}function $o(e,t){const n=[];return Xo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Xo(e,t,n){const i=lo(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);ho(t,(t=>{Xo(e,t,n)}))}function Ko(e,t){const n=lo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,co(t,n.length>0?n:void 0)}ho(t,(t=>{Ko(e,t)}))}function Go(e,t){const n=po(Vo(e,t)),i=ao(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Yo(e,t)})),Yo(e,i),fo(i,(t=>{Yo(e,t)})),n}function Yo(e,t){const n=lo(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(W(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(W(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Br(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?co(t,void 0):n.length=o+1,No(e.eventQueue_,po(t),r);for(let e=0;e<i.length;e++)an(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=function(e,t){const n=Qo(e),i=n.namespace;"firebase.com"===n.domain&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new fn(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Sn(n.pathString)}},Qo=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Gt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{get key(){return Fn(this._path)?null:On(this._path)}get ref(){return new es(this._repo,this._path)}get _queryIdentifier(){const e=Si(this._queryParams),t=en(e);return"{}"===t?"default":t}get _queryObject(){return Si(this._queryParams)}isEqual(e){if(!((e=Oe(e))instanceof Zo))return!1;const t=this._repo===e._repo,n=Un(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class es extends Zo{get parent(){const e=Mn(this._path);return null===e?null:new es(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Ni,!1)}}function ts(e,t){return(e=Oe(e))._checkNotDeleted("ref"),void 0!==t?ns(e._root,t):e._root}function ns(e,t){var n,i,r,o;return null===An((e=Oe(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),xo(n,i,r,o)):xo("child","path",t,!1),new es(e._repo,zn(e._path,t))}function is(e,t){e=Oe(e),ko("set",e._path),bo("set",t,e._path,!1);const n=new te;return Fo(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}!function(e){W(!Mr,"__referenceConstructor has already been defined"),Mr=e}(es),function(e){W(!zr,"__referenceConstructor has already been defined"),zr=e}(es);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs={};let os=!1;function ss(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Vt("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=Jo(o,r),c=l.repoInfo;void 0!==w&&w.env&&(a=w.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${c.namespace}`,l=Jo(o,r),c=l.repoInfo):s=!l.repoInfo.secure;const u=r&&s?new hn(hn.OWNER):new un(e.name,e.options,t);Co("Invalid Firebase Database URL",l),Fn(l.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=rs[t.name];r||(r={},rs[t.name]=r);let o=r[e.toURLString()];o&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Ro(e,os,n,i),r[e.toURLString()]=o,o}(c,e,u,new cn(e.name,n));return new as(h,e)}class as{get _repo(){return this._instanceStarted||(Ao(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new es(this._repo,Rn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=rs[t];n&&n[e.key]===e||Kt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Wo(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Kt("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}$n.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},$n.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Pt("10.8.1"),mt(new De("database",((e,{instanceIdentifier:t})=>ss(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),wt("@firebase/database","1.0.3",e),wt("@firebase/database","1.0.3","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function ls(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function cs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const us=cs,hs=new he("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ds=new Ve("@firebase/auth");function fs(e,...t){ds.logLevel<=We.ERROR&&ds.error(`Auth (10.8.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e,...t){throw _s(e,...t)}function ms(e,...t){return _s(e,...t)}function gs(e,t,n){const i=Object.assign(Object.assign({},us()),{[t]:n});return new he("auth","Firebase",i).create(t,{appName:e.name})}function _s(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return hs.create(e,...t)}function vs(e,t,...n){if(!e)throw _s(t,...n)}function ys(e){const t="INTERNAL ASSERTION FAILED: "+e;throw fs(t),new Error(t)}function bs(e,t){e||ys(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function xs(){return"http:"===ks()||"https:"===ks()}function ks(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(xs()||oe()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{get(){return Cs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,bs(t>e,"Short delay should be less than long delay!"),this.isMobile=re()||se()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e,t){bs(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ys("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ys("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ys("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ss=new Is(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function As(e,t,n,i,r={}){return Ps(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const s=Ce(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ns.fetch()(Os(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ps(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Es),t);try{const t=new Ms(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zs(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw zs(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw zs(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw zs(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw gs(e,a,s);ps(e,a)}}catch(t){if(t instanceof ue)throw t;ps(e,"network-request-failed",{message:String(t)})}}async function Ls(e,t,n,i,r={}){const o=await As(e,t,n,i,r);return"mfaPendingCredential"in o&&ps(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Os(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Ts(e.config,r):`${e.config.apiScheme}://${r}`}function Ds(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ms{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ms(this.auth,"network-request-failed"))),Ss.get())}))}}function zs(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ms(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e){return void 0!==e&&void 0!==e.enterprise}class Ws{getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ds(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(e,t){return As(e,"GET","/v2/recaptchaConfig",Rs(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function js(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e){return 1e3*Number(e)}function Hs(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const e=$(n);return e?JSON.parse(e):(fs("Failed to decode base64 JWT payload"),null)}catch(e){return fs("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qs(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ue&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Vs{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(e){var t;const n=e.auth,i=await e.getIdToken(),r=await qs(e,async function(e,t){return As(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));vs(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=ls(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new $s(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){vs(e.idToken,"internal-error"),vs(void 0!==e.idToken,"internal-error"),vs(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Hs(e);return vs(t,"internal-error"),vs(void 0!==t.exp,"internal-error"),vs(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return vs(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ps(e,{},(async()=>{const n=Ce({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=Os(e,i,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Ns.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Ks;return n&&(vs("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(vs("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(vs("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return ys("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e,t){vs("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ys{async getIdToken(e){const t=await qs(this,this.stsTokenManager.getToken(this.auth,e));return vs(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Oe(e),i=await n.getIdToken(t),r=Hs(i);vs(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:js(Bs(r.auth_time)),issuedAtTime:js(Bs(r.iat)),expirationTime:js(Bs(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Oe(e);await Xs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(vs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ys(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){vs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Xs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qs(this,async function(e,t){return As(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:x}=t;vs(v&&x,e,"internal-error");const k=Ks.fromJSON(this.name,x);vs("string"==typeof v,e,"internal-error"),Gs(u,e.name),Gs(h,e.name),vs("boolean"==typeof y,e,"internal-error"),vs("boolean"==typeof b,e,"internal-error"),Gs(d,e.name),Gs(f,e.name),Gs(p,e.name),Gs(m,e.name),Gs(g,e.name),Gs(_,e.name);const C=new Ys({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:_});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ks;i.updateFromServerResponse(t);const r=new Ys({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Xs(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ls(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $s(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Map;function Qs(e){bs(e instanceof Function,"Expected a class definition");let t=Js.get(e);return t?(bs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Js.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Zs.type="NONE";const ea=Zs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e,t,n){return`firebase:${e}:${t}:${n}`}class na{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ys._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new na(Qs(ea),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Qs(ea);const o=ta(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=Ys._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new na(r,e,n)):new na(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=ta("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(aa(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ra(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ca(t))return"Blackberry";if(ua(t))return"Webos";if(oa(t))return"Safari";if((t.includes("chrome/")||sa(t))&&!t.includes("edge/"))return"Chrome";if(la(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ra(e=ie()){return/firefox\//i.test(e)}function oa(e=ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sa(e=ie()){return/crios\//i.test(e)}function aa(e=ie()){return/iemobile/i.test(e)}function la(e=ie()){return/android/i.test(e)}function ca(e=ie()){return/blackberry/i.test(e)}function ua(e=ie()){return/webos/i.test(e)}function ha(e=ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function da(){return ae()&&10===document.documentMode}function fa(e=ie()){return ha(e)||la(e)||ua(e)||ca(e)||/windows phone/i.test(e)||aa(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pa(e,t=[]){let n;switch(e){case"Browser":n=ia(ie());break;case"Worker":n=`${ia(ie())}-${e}`;break;default:n=e}return`${n}/JsCore/10.8.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{validatePassword(e){var t,n,i,r,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}constructor(e){var t,n,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qs(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await na.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return vs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xs(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Oe(e):null;return t&&vs(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&vs(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Qs(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return As(e,"GET","/v2/passwordPolicy",Rs(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new ga(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new he("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return As(e,"POST","/v2/accounts:revokeToken",Rs(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qs(e)||this._popupRedirectResolver;vs(t,this,"argument-error"),this.redirectPersistenceManager=await na.create(this,[Qs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(vs(s,this,"internal-error"),s.then((()=>{o||r(this.currentUser)})),"function"==typeof t){const r=e.addObserver(t,n,i);return()=>{o=!0,r()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return vs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){ds.logLevel<=We.WARN&&ds.warn(`Auth (10.8.1): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ya(this),this.idTokenSubscription=new ya(this),this.beforeStateQueue=new ma(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function va(e){return Oe(e)}class ya{get next(){return vs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Ee((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wa(e){return ba.loadJS(e)}function xa(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ka{async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;Fs(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Us(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Ws(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Fs(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=ba.recaptchaEnterpriseScript;0!==t.length&&(t+=r),wa(t).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=va(e)}}async function Ca(e,t,n,i=!1){const r=new ka(e);let o;try{o=await r.verify(n)}catch(e){o=await r.verify(n,!0)}const s=Object.assign({},t);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ia(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ca(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await Ca(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)}))}function Ta(e,t,n){const i=va(e);vs(i._canInitEmulator,i,"emulator-config-failed"),vs(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=Na(t),{host:s,port:a}=function(e){const t=Na(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ea(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ea(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Na(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ea(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Sa{toJSON(){return ys("not implemented")}_getIdTokenResponse(e){return ys("not implemented")}_linkToIdToken(e,t){return ys("not implemented")}_getReauthenticationResolver(e){return ys("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(e,t){return As(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Aa(e,t){return Ls(e,"POST","/v1/accounts:signInWithPassword",Rs(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa extends Sa{static _fromEmailAndPassword(e,t){return new Pa(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pa(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ia(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Aa);case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ls(e,"POST","/v1/accounts:signInWithEmailLink",Rs(e,t))}(e,{email:this._email,oobCode:this._password});default:ps(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ia(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ra);case"emailLink":return async function(e,t){return Ls(e,"POST","/v1/accounts:signInWithEmailLink",Rs(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ps(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(e,t){return Ls(e,"POST","/v1/accounts:signInWithIdp",Rs(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends Sa{static _fromParams(e){const t=new Oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ps("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=ls(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Oa(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return La(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,La(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,La(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ce(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma extends Sa{static _fromVerification(e,t){return new Ma({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ma({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ls(e,"POST","/v1/accounts:signInWithPhoneNumber",Rs(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ls(e,"POST","/v1/accounts:signInWithPhoneNumber",Rs(e,t));if(n.temporaryProof)throw zs(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ls(e,"POST","/v1/accounts:signInWithPhoneNumber",Rs(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Da)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Ma({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{static parseLink(e){const t=function(e){const t=Ie(Te(e)).link,n=t?Ie(Te(t)).deep_link_id:null,i=Ie(Te(e)).deep_link_id;return(i?Ie(Te(i)).link:null)||i||n||t||e}(e);try{return new za(t)}catch(e){return null}}constructor(e){var t,n,i,r,o,s;const a=Ie(Te(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);vs(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{static credential(e,t){return Pa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=za.parseLink(t);return vs(n,"argument-error"),Pa._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Fa.PROVIDER_ID}}Fa.PROVIDER_ID="password",Fa.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Fa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Wa{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja extends Ua{static credential(e){return Oa._fromParams({providerId:ja.PROVIDER_ID,signInMethod:ja.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ja.credentialFromTaggedObject(e)}static credentialFromError(e){return ja.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ja.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}ja.FACEBOOK_SIGN_IN_METHOD="facebook.com",ja.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba extends Ua{static credential(e,t){return Oa._fromParams({providerId:Ba.PROVIDER_ID,signInMethod:Ba.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ba.credentialFromTaggedObject(e)}static credentialFromError(e){return Ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ba.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ba.GOOGLE_SIGN_IN_METHOD="google.com",Ba.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha extends Ua{static credential(e){return Oa._fromParams({providerId:Ha.PROVIDER_ID,signInMethod:Ha.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ha.credentialFromTaggedObject(e)}static credentialFromError(e){return Ha.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ha.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ha.GITHUB_SIGN_IN_METHOD="github.com",Ha.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa extends Ua{static credential(e,t){return Oa._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qa.credentialFromTaggedObject(e)}static credentialFromError(e){return qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return qa.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Va(e,t){return Ls(e,"POST","/v1/accounts:signUp",Rs(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qa.TWITTER_SIGN_IN_METHOD="twitter.com",qa.PROVIDER_ID="twitter.com";class $a{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Ys._fromIdTokenResponse(e,n,i),o=Xa(n);return new $a({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Xa(n);return new $a({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Xa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka extends ue{static _fromErrorAndOperation(e,t,n,i){return new Ka(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ga(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ka._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(e,t,n=!1){const i=await qs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $a._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ja(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await qs(e,Ga(i,r,t,e),n);vs(o.idToken,i,"internal-error");const s=Hs(o.idToken);vs(s,i,"internal-error");const{sub:a}=s;return vs(e.uid===a,i,"user-mismatch"),$a._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ps(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(e,t,n=!1){const i="signIn",r=await Ga(e,i,t),o=await $a._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function Za(e,t){return Qa(va(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function el(e){const t=va(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tl(e,t,n){const i=va(e),r=Ia(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Va),o=await r.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&el(e),t})),s=await $a._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(s.user),s}function nl(e,t,n){return Za(Oe(e),Fa.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&el(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends il{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);da()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ie();return oa(e)||ha(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=fa(),this._shouldAllowMigration=!0}}rl.type="LOCAL";const ol=rl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends il{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}sl.type="SESSION";const al=sl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ll(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cl(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ll.receivers=[];class ul{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=cl("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dl(){return void 0!==hl().WorkerGlobalScope&&"function"==typeof hl().importScripts}class fl{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function pl(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ml(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new fl(e).toPromise()}(),t(await ml()))}))}))}async function gl(e,t,n){const i=pl(e,!0).put({fbase_key:t,value:n});return new fl(i).toPromise()}function _l(e,t){const n=pl(e,!0).delete(t);return new fl(n).toPromise()}class vl{async _openDb(){return this.db||(this.db=await ml()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ll._getInstance(dl()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ul(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await gl(e,"__sak","1"),await _l(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>gl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=pl(e,!1).get(t),i=await new fl(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_l(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=pl(e,!1).getAll();return new fl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}vl.type="LOCAL";const yl=vl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xa("rcb"),new Is(3e4,6e4);async function bl(e,t,n){var i;const r=await n.verify();try{let o;if(vs("string"==typeof r,e,"argument-error"),vs("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){vs("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return As(e,"POST","/v2/accounts/mfaEnrollment:start",Rs(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{vs("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;vs(n,e,"missing-multi-factor-info");const s=await function(e,t){return As(e,"POST","/v2/accounts/mfaSignIn:start",Rs(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return As(e,"POST","/v1/accounts:sendVerificationCode",Rs(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{verifyPhoneNumber(e,t){return bl(this.auth,e,Oe(t))}static credential(e,t){return Ma._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wl.credentialFromTaggedObject(t)}static credentialFromError(e){return wl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ma._fromTokenResponse(t,n):null}constructor(e){this.providerId=wl.PROVIDER_ID,this.auth=va(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xl(e,t){return t?Qs(t):(vs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wl.PROVIDER_ID="phone",wl.PHONE_SIGN_IN_METHOD="phone";class kl extends Sa{_getIdTokenResponse(e){return La(e,this._buildIdpRequest())}_linkToIdToken(e,t){return La(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return La(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Cl(e){return Qa(e.auth,new kl(e),e.bypassAuthState)}function Il(e){const{auth:t,user:n}=e;return vs(n,t,"internal-error"),Ja(n,new kl(e),e.bypassAuthState)}async function Tl(e){const{auth:t,user:n}=e;return vs(n,t,"internal-error"),Ya(n,new kl(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cl;case"linkViaPopup":case"linkViaRedirect":return Tl;case"reauthViaPopup":case"reauthViaRedirect":return Il;default:ps(this.auth,"internal-error")}}resolve(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Is(2e3,1e4);class Sl extends Nl{async executeNotNull(){const e=await this.execute();return vs(e,this.auth,"internal-error"),e}async onExecution(){bs(1===this.filter.length,"Popup operations only handle one event");const e=cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ms(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ms(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ms(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,El.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Sl.currentPopupAction&&Sl.currentPopupAction.cancel(),Sl.currentPopupAction=this}}Sl.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rl=new Map;class Al extends Nl{async execute(){let e=Rl.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ol(t),i=Ll(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Pl(e,t){Rl.set(e._key(),t)}function Ll(e){return Qs(e._redirectPersistence)}function Ol(e){return ta("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(e,t,n=!1){const i=va(e),r=xl(i,t),o=new Al(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class Ml{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fl(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Fl(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ms(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(zl(e))}saveEventToCache(e){this.cachedEventUids.add(zl(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function zl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Fl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ul=/^https?/;async function jl(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return As(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Bl(e))return}catch(e){}ps(e,"unauthorized-domain")}function Bl(e){const t=ws(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ul.test(n))return!1;if(Wl.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Is(3e4,6e4);function ql(){const e=hl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Vl(e){return new Promise(((t,n)=>{var i,r,o;function s(){ql(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ql(),n(ms(e,"network-request-failed"))},timeout:Hl.get()})}if(null===(r=null===(i=hl().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=hl().gapi)||void 0===o?void 0:o.load)){const t=xa("iframefcb");return hl()[t]=()=>{gapi.load?s():n(ms(e,"network-request-failed"))},wa(`${ba.gapiScript}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw $l=null,e}))}let $l=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xl=new Is(5e3,15e3),Kl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yl(e){const t=e.config;vs(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ts(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"10.8.1"},r=Gl.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Ce(i).slice(1)}`}async function Jl(e){const t=await function(e){return $l=$l||Vl(e),$l}(e),n=hl().gapi;return vs(n,e,"internal-error"),t.open({where:document.body,url:Yl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kl,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=ms(e,"network-request-failed"),o=hl().setTimeout((()=>{i(r)}),Xl.get());function s(){hl().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Zl{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function ec(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ql),{width:i.toString(),height:r.toString(),top:o,left:s}),c=ie().toLowerCase();n&&(a=sa(c)?"_blank":n),ra(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ie()){var t;return ha(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Zl(null);const h=window.open(t||"",a,u);vs(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Zl(h)}const tc=encodeURIComponent("fac");async function nc(e,t,n,i,r,o){vs(e.config.authDomain,e,"auth-domain-config-required"),vs(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"10.8.1",eventId:r};if(t instanceof Wa){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",be(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof Ua){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${tc}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?Ts(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ce(a).slice(1)}${c}`}const ic=class{async _openPopup(e,t,n,i){var r;bs(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return ec(e,await nc(e,t,n,ws(),i),cl())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){hl().location.href=e}(await nc(e,t,n,ws(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(bs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Jl(e),n=new Ml(e);return t.register("authEvent",(t=>{vs(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),ps(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fa()||oa()||ha()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=al,this._completeRedirectFn=Dl,this._overrideRedirectResult=Pl}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rc{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){vs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oc=ee("authIdTokenMaxAge")||300;let sc=null;var ac,lc;ac={loadJS:e=>new Promise(((t,n)=>{const i=document.createElement("script");var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=ms("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},ba=ac,lc="Browser",mt(new De("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;vs(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:lc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pa(lc)},l=new _a(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Qs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),mt(new De("auth-internal",(e=>{const t=va(e.getProvider("auth").getImmediate());return new rc(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),wt("@firebase/auth","1.6.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(lc)),wt("@firebase/auth","1.6.1","esm2017");const cc=yt({apiKey:"AIzaSyBfSnlYUdcEqahuE0nuEPgZtyc05nxjtHE",authDomain:"filmoteka-582f6.firebaseapp.com",databaseURL:"https://filmoteka-582f6-default-rtdb.firebaseio.com",projectId:"filmoteka-582f6",storageBucket:"filmoteka-582f6.appspot.com",messagingSenderId:"218771303492",appId:"1:218771303492:web:8772c72c18d03702ab6011",measurementId:"G-239H878QXK"}),uc=function(e=bt()){const t=gt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=gt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(xe(n.getOptions(),null!=t?t:{}))return e;ps(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ic,persistence:[yl,ol,al]}),i=ee("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>oc)return;const i=null==t?void 0:t.token;sc!==i&&(sc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Oe(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Oe(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const o=J("auth");return o&&Ta(n,`http://${o}`),n}(),hc=function(e=bt(),t){const n=gt(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Q("database");e&&function(e,t,n,i={}){(e=Oe(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new hn(hn.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:ne(i.mockUserToken,e.app.options.projectId);o=new hn(t)}!function(e,t,n,i){e.repoInfo_=new fn(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,o)}(n,...e)}return n}(cc);function dc(){email=document.getElementById("register_email").value,password=document.getElementById("register_password").value,0!=pc(email)&&0!=mc(password)?tl(uc,email,password).then((function(e){const t=e.user,n=(ts(hc),{email:email,last_login:Date.now()});is(ts(hc,"users/"+t.uid),n).then((()=>{alert("User Created!!")})).catch((e=>{alert("Error creating user data: "+e.message)}))})).catch((function(e){e.code;const t=e.message;alert(t)})):alert("Email or Password is Outta Line!!")}function fc(){email=document.getElementById("login_email").value,password=document.getElementById("login_password").value,0!=pc(email)&&0!=mc(password)?nl(uc,email,password).then((function(){const e=currentUser,t=hc.ref(),n={last_login:Date.now()};t.child("users/"+e.uid).update(n),alert("User Logged In!!!")})).catch((function(e){e.code;const t=e.message;alert(t)})):alert("Email or Password is Outta Line!!")}function pc(e){return expression=/^[^@]+@\w+(\.\w+)+\w$/,1==expression.test(e)}function mc(e){return!(e>6)}console.log(cc),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".submit-btn[onclick='loginModal()']"),t=document.querySelector(".submit-btn[onclick='registerModal()']");e&&(e.onclick=null,e.addEventListener("click",fc)),t&&(t.onclick=null,t.addEventListener("click",dc))}));s=r("5uEKZ"),o=r("7rYDH"),s=r("5uEKZ");const gc=document.querySelector(".modal-backdrop"),_c=document.querySelector(".modal"),vc=document.querySelector(".list-cards"),yc=({poster_path:e,popularity:t,vote_average:n,vote_count:i,original_title:r,genre_ids:a,overview:l})=>{let c="";return c=e?`${o.IMG_BASE_URL}${o.IMG_W400}/${e}`:"No found poster!",`\n<button type = "button" class="modal__btn-closs btn__closs-modal">\n<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>\n      </svg>\n    </button>\n<div class="modal__movi-poster">\n<img src="${c}" alt="placeholder" />\n</div>\n<div class="modal_movi-info">\n<h2 class="modal__title">${r}</h2>\n<div class="modal__info-card info-card">\n  <ul class="info-card__list-parametrs">\n    <li class="info-card__item info-card__item-paramter">Vote / Votes</li>\n    <li class="info-card__item info-card__item-point">\n      <span>${n.toFixed(1)}</span> <span>/</span> <span>${i}</span>\n    </li>\n    <li class="info-card__item info-card__item-paramter">Popularity</li>\n    <li class="info-card__item info-card__item-point">${t.toFixed(1)}</li>\n    <li class="info-card__item info-card__item-paramter">Original Title</li>\n    <li class="info-card__item info-card__item-point">${r}</li>\n    <li class="info-card__item info-card__item-paramter">Genre</li>\n    <li class="info-card__item info-card__item-point">${(e=>{const t=(0,s.loadLocalStorage)("genresList"),n=[];return e.map((e=>{t.map((t=>{e===t.id&&n.push(t.name)}))})),n.join(", ")})(a)}</li>\n  </ul>\n</div>\n<div class="modal__about">\n  <h3 class="modal__about-title">ABOUT </h3>\n  <p class="modal__about-text">\n    ${l}\n  </p>\n</div>\n<div class="modal__buttons">\n    <button type="button" class="modal__add-watched" data-watched='false'>add to watched</button>\n    <button type="button" class="modal__add-queue" data-queue='false' >add to queue</button>\n    </div>\n    </div>\n  </div>`};function bc(e){"Escape"===e.key&&xc()}function wc(e){e.target===gc&&xc()}function xc(){gc.firstElementChild.classList.add("modal"),gc.classList.remove("modal-open"),document.body.style.overflow="overlay",document.removeEventListener("keydown",bc),gc.removeEventListener("keydown",wc),_c.innerHTML=""}vc&&vc.addEventListener("click",(function(e){const t=e.target.closest("li"),n=Number(t.getAttribute("key"));let i=JSON.parse(localStorage.getItem("moviesData"));if((0,s.saveLocalStorage)("moviesData",i),console.log(i),t&&i){const e=i.find((e=>e.id===n));console.log(e),function(e){gc.firstElementChild.innerHTML=yc(e)}(e),gc.classList.add("modal-open"),document.body.style.overflow="hidden",gc.addEventListener("click",wc),document.addEventListener("keydown",bc),document.querySelector(".modal__btn-closs").addEventListener("click",xc),gc.firstElementChild.dataset.id=e.id}else console.error("Selected movie or moviesData is not defined.")}));
//# sourceMappingURL=index.66deb8ab.js.map