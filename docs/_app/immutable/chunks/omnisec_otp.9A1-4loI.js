let i;const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);function m(e){return a[e]}let _=a.length;function W(e){e<132||(a[e]=_,_=e)}function x(e){const n=m(e);return W(e),n}const h=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&h.decode();let d=null;function b(){return(d===null||d.byteLength===0)&&(d=new Uint8Array(i.memory.buffer)),d}function p(e,n){return e=e>>>0,h.decode(b().subarray(e,e+n))}let g=0;const w=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},E=typeof w.encodeInto=="function"?function(e,n){return w.encodeInto(e,n)}:function(e,n){const t=w.encode(e);return n.set(t),{read:e.length,written:t.length}};function M(e,n,t){if(t===void 0){const s=w.encode(e),u=n(s.length,1)>>>0;return b().subarray(u,u+s.length).set(s),g=s.length,u}let r=e.length,c=n(r,1)>>>0;const f=b();let o=0;for(;o<r;o++){const s=e.charCodeAt(o);if(s>127)break;f[c+o]=s}if(o!==r){o!==0&&(e=e.slice(o)),c=t(c,r,r=o+e.length*3,1)>>>0;const s=b().subarray(c+o,c+r),u=E(e,s);o+=u.written,c=t(c,r,o,1)>>>0}return g=o,c}let l=null;function y(){return(l===null||l.byteLength===0)&&(l=new Int32Array(i.memory.buffer)),l}function v(e){let n,t;try{const f=i.__wbindgen_add_to_stack_pointer(-16),o=M(e,i.__wbindgen_malloc,i.__wbindgen_realloc),s=g;i.generate_code(f,o,s);var r=y()[f/4+0],c=y()[f/4+1];return n=r,t=c,p(r,c)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(n,t,1)}}function R(e){_===a.length&&a.push(a.length+1);const n=_;return _=a[n],a[n]=e,n}async function I(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function A(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){x(n)},e.wbg.__wbg_getTime_2bc4375165f02d15=function(n){return m(n).getTime()},e.wbg.__wbg_new0_7d84e5b2cd9fdc73=function(){return R(new Date)},e.wbg.__wbindgen_throw=function(n,t){throw new Error(p(n,t))},e}function T(e,n){return i=e.exports,S.__wbindgen_wasm_module=n,l=null,d=null,i}function L(e){if(i!==void 0)return i;const n=A();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));const t=new WebAssembly.Instance(e,n);return T(t,e)}async function S(e){if(i!==void 0)return i;typeof e>"u"&&(e=new URL(""+new URL("../assets/omnisec_otp_bg.Co2-3W3w.wasm",import.meta.url).href,import.meta.url));const n=A();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await I(await e,n);return T(t,r)}export{S as default,v as generate_code,L as initSync};
