var K=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var O=(t,e,a)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,_=(t,e)=>{for(var a in e||(e={}))Z.call(e,a)&&O(t,a,e[a]);if(L)for(var a of L(e))x.call(e,a)&&O(t,a,e[a]);return t},w=(t,e)=>X(t,Y(e));import{C as f,S as B,i as Q,s as W,e as j,c as T,a as U,d as S,b as p,Z as m,f as $,E as tt,P as F,I as et,A as at,ab as ot,ac as G,R as N,J as v,K as b,L as st,ad as rt,N as D}from"./vendor-77f1dd11.js";import{c as H,e as I,f as R,i as it,h as nt,j as ct,a as lt,k as ut}from"./state-0d414003.js";const dt=f(void 0);function ft(t){let e,a;return{c(){e=j("div"),a=j("div"),this.h()},l(s){e=T(s,"DIV",{id:!0,class:!0});var o=U(e);a=T(o,"DIV",{id:!0,class:!0}),U(a).forEach(S),o.forEach(S),this.h()},h(){p(a,"id","container"),p(a,"class","flex-1 overflow-auto"),p(e,"id","view"),p(e,"class","p-2 svelte-5ndy2s"),m(e,"error",t[2]),m(e,"outOfSync",t[3])},m(s,o){$(s,e,o),tt(e,a),t[4](a),t[5](e)},p(s,[o]){o&4&&m(e,"error",s[2]),o&8&&m(e,"outOfSync",s[3])},i:F,o:F,d(s){s&&S(e),t[4](null),t[5](null)}}}function pt(t,e,a){let s;et(t,H,i=>a(9,s=i));let o="",u="",r,c,n=!1,l=!1,d=!0;at(()=>{H.subscribe(i=>{try{if(r&&i&&(i.updateDiagram||i.autoSync)){if(i.autoSync||ot(H,s.updateDiagram=!1,s),a(3,l=!1),d=!0,o===i.code&&u===i.mermaid)return;o=i.code,u=i.mermaid;const y=c.parentElement.scrollTop;delete r.dataset.processed,G.initialize(Object.assign({},JSON.parse(i.mermaid))),G.render("graph-div",o,z=>{a(0,r.innerHTML=z,r)}),a(1,c.parentElement.scrollTop=y,c),a(2,n=!1)}else d?d=!1:a(3,l=!0)}catch(y){console.log("view fail",y),a(2,n=!0)}}),dt.subscribe(i=>{typeof i=="undefined"?a(2,n=!1):(a(2,n=!0),console.log("Error: ",i))})});function M(i){N[i?"unshift":"push"](()=>{r=i,a(0,r)})}function q(i){N[i?"unshift":"push"](()=>{c=i,a(1,c)})}return[r,c,n,l,M,q]}class It extends B{constructor(e){super();Q(this,e,pt,ft,W,{})}}const mt=30,E=v(f("manual"),b(),"autoHistoryMode"),g=v(f([]),b(),"autoHistoryStore"),h=v(f([]),b(),"manualHistoryStore"),V=f([]),Et=st([E,g,h,V],([t,e,a,s],o)=>{o(t==="auto"?e:t==="manual"?a:t==="loader"?s:e)}),gt=t=>{if(t.type==="loader"){V.update(e=>[t,...e]);return}if(t.name=rt(2),t.type!=="auto"){h.update(e=>[t,...e]);return}g.update(e=>(e.length===mt&&e.pop(),[t,...e]))},Lt=t=>{(D(E)==="auto"?g:h).update(e=>(D(E)!=="loader"&&(e=e.filter(a=>t&&a.time!=t)),e))},Ot=t=>{const e=D(t?g:h);return e.length>0?JSON.stringify(e[0].state):""},k="code.mmd",A="config.json",ht=t=>k in t,C=async t=>t.truncated?await(await fetch(t.raw_url)).text():t.content,yt=async t=>{const[e,a,s,o]=t.split("github.com").pop().split("/"),{html_url:u,files:r,history:c}=await(await fetch(`https://api.github.com/gists/${s}${o?"/"+o:""}`)).json();if(ht(r)){const n=await C(r[k]);let l;A in r&&(l=await C(r[A]));const d=c[0];return{url:`${u}/${d.version}`,code:n,config:l,author:d.user.login,time:new Date(d.committed_at).getTime(),version:d.version.slice(-7)}}else throw"Invalid gist provided"},P=(t,e=t.url)=>{const a=w(_({},I),{code:t.code,loader:{type:"gist",config:{url:e}}});return t.config&&(a.mermaid=t.config),a},_t=async t=>{try{const[e,a,s,o]=t.split("github.com").pop().split("/"),{history:u}=await(await fetch(`https://api.github.com/gists/${s}${o?"/"+o:""}`)).json(),r=[];for(const n of u){const l=await yt(n.url).catch(()=>{});l&&r.push(l)}if(r.length===0)throw"Invalid gist provided";r.reverse();const c=P(r.slice(-1).pop(),t);for(const n of r)gt({state:P(n),time:n.time,type:"loader",url:n.url,name:`${n.author} v${n.version}`});return c}catch(e){console.error(e)}},J={gist:_t},wt=async()=>{const t=new URLSearchParams(window.location.search);let e=I,a,s,o=!1;const u=t.get("code"),r=t.get("config");if(u&&(a=await(await fetch(u)).text(),o=!0),r?s=await(await fetch(r)).text():s=I.mermaid,a)e={code:a,mermaid:s,loader:{type:"files",config:{codeURL:u,configURL:r}}};else for(const[c,n]of t.entries())if(c in J)try{e=await J[c](n),o=!0;break}catch(l){console.error(l)}o&&R(w(_({},e),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))},St=()=>{ut(window.location.hash.slice(1))},vt=()=>{R({updateDiagram:!0})},jt=async()=>{var t;St(),await it("Loading Gist...",wt().catch(console.error)),vt(),nt(),await ct(),(t=lt)==null||t.page()};export{It as V,Et as a,gt as b,Lt as c,dt as e,Ot as g,E as h,jt as i,V as l,vt as s};
