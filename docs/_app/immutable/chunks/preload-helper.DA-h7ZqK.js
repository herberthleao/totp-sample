const E="modulepreload",v=function(c,o){return new URL(c,o).href},h={},y=function(c,o,a){let u=Promise.resolve();if(o&&o.length>0){const r=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));u=Promise.allSettled(o.map(t=>{if(t=v(t,a),t in h)return;h[t]=!0;const s=t.endsWith(".css"),m=s?'[rel="stylesheet"]':"";if(a)for(let i=r.length-1;i>=0;i--){const l=r[i];if(l.href===t&&(!s||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${m}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":E,s||(n.as="script"),n.crossOrigin="",n.href=t,d&&n.setAttribute("nonce",d),document.head.appendChild(n),s)return new Promise((i,l)=>{n.addEventListener("load",i),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})}))}function f(r){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r}return u.then(r=>{for(const e of r||[])e.status==="rejected"&&f(e.reason);return c().catch(f)})};export{y as _};
