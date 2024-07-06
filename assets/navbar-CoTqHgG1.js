import{m as M,s as Q,_ as ie,$ as ce,K as se,h as z,a0 as Z,a as X,l as o,T as oe,a1 as ue,n as C,d as he,q as de,r as V,i as n,f as t,a2 as w,p as k,Q as xe,a3 as ge,k as $,a4 as ve,M as x,g,Z as E,o as R,A as me,F as fe,j as be,G as we,x as $e,y as Ce,v as F,w as D}from"./index-HzsorJAI.js";var pe=o("<a>");function _(e){e=M({inactiveClass:"inactive",activeClass:"active"},e);const[,a]=Q(e,["href","state","class","activeClass","inactiveClass","end"]),s=ie(()=>e.href),r=ce(s),l=se(),i=z(()=>{const h=s();if(h===void 0)return[!1,!1];const d=Z(h.split(/[?#]/,1)[0]).toLowerCase(),v=Z(l.pathname).toLowerCase();return[e.end?d===v:v.startsWith(d+"/")||v===d,d===v]});return(()=>{var h=pe();return X(h,M(a,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...a.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1,!1),h})()}const P=100;var m=(e=>(e.HOME="home",e.SIDEBOX="sidebox",e.BARCHART="barchart",e.LINECHART="linechart",e.PIECHART="piechart",e.CLIPBOARDDOCUMENT="clipboarddocument",e.FILETEXT="filetext",e.USER="user",e.USERS="users",e))(m||{}),_e=o('<div class="w-full z-99"><label class="swap swap-rotate"><input type=checkbox class=theme-controller placeholder="Change Theme"><svg class="swap-off fill-current w-7 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-[30px] 3xl:h-[30px]"xmlns=http://www.w2.org/2000/svg viewBox="-1 0 24 24"><path d=M4.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z></path></svg><svg class="swap-on fill-current w-7 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-[30px] 3xl:h-[30px]"xmlns=http://www.w2.org/2000/svg viewBox="-1 0 24 24"><path d=M20.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z>');function K(){const{themeFunc:e}=oe.useTheme();return(()=>{var a=_e(),s=a.firstChild,r=s.firstChild;return ue(r,"click",e,!0),a})()}C(["click"]);var Me=o('<div class="w-full p-0 m-0 min-h-screen flex justify-center items-center bg-base-200 relative"><div class="absolute top-5 right-5 z-[99]"></div><div class="w-full h-screen xl:h-auto xl:w-[30%] 2xl:w-[25%] 3xl:w-[20%] bg-base-100 rounded-lg shadow-md flex flex-col items-center p-5 pb-7 gap-8 pt-20 xl:pt-7"><div class="flex items-center gap-1 xl:gap-2"><button type=button class="text-[18px] leading-[1.2] sm:text-lg xl:text-3xl 2xl:text-3xl font-semibold text-base-content dark:text-neutral-200">');function Ke(e){const a=he(),{changeTitle:s}=de.useMeta();return V(()=>{e.title?s(e.title):s()}),(()=>{var r=Me(),l=r.firstChild,i=l.nextSibling,h=i.firstChild,d=h.firstChild;return n(l,t(K,{})),d.$$click=()=>a("/"),d.disabled=e.disabled?e.disabled:!1,n(d,w),n(i,()=>e.children,null),r})()}C(["click"]);var ke=o("<svg stroke-width=0>");function u(e,a){const s=M(e.a,a),[r,l]=Q(s,["src"]),[i,h]=k(""),d=z(()=>a.title?`${e.c}<title>${a.title}</title>`:e.c);return V(()=>h(d())),xe(()=>{h("")}),(()=>{var v=ke();return X(v,M({get stroke(){return e.a?.stroke},get color(){return a.color||"currentColor"},get fill(){return a.color||"currentColor"},get style(){return{...a.style,overflow:"visible"}}},l,{get height(){return a.size||"1em"},get width(){return a.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return i()}}),!0,!0),n(v,()=>ge),v})()}function Ae(e){return u({a:{viewBox:"0 0 384 512"},c:'<path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"/>'},e)}var Le=o('<div class="fixed bottom-5 right-5 z-50 animate-bounce transition ease-in-out delay-500"><button type=button class="btn btn-circle bg-custom-yellow">');function Ge(){const[e,a]=k(!1),s=()=>window.scrollTo({top:0,behavior:"smooth"}),r=()=>{const l=document.body.scrollTop>P,i=document.documentElement.scrollTop>P;a(!!(l||i))};return window.onscroll=()=>r(),(()=>{var l=Le(),i=l.firstChild;return l.$$click=s,n(i,t(Ae,{color:"black"})),$(()=>l.hidden=!e()),l})()}C(["click"]);function He(e){return u({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01 20.73 6.96"/><path d="M12 22.08 12 12"/>'},e)}function ze(e){return u({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><path d="M9 3A4 4 0 1 0 9 11 4 4 0 1 0 9 3z"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'},e)}function Ve(e){return u({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/>'},e)}function Te(e){return u({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path fill="currentColor" fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>'},e)}function Je(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"/><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"/>'},e)}function We(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"/>'},e)}function ye(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"/>'},e)}function Se(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M854.6 288.6 639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"/>'},e)}function j(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M946.5 505 560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"/>'},e)}function Be(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z"/>'},e)}function Oe(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1 398.19 398.19 0 0 0-85.7 127.1A397.61 397.61 0 0 0 72 552a398.46 398.46 0 0 0 117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 0 0 472 952a398.46 398.46 0 0 0 282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 0 0 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"/>'},e)}function Ze(e){return u({a:{viewBox:"0 0 1024 1024"},c:'<path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/>'},e)}var Ee=o('<span class="hidden xl:block px-2 xl:text-sm 2xl:text-base 3xl:text-lg uppercase">'),I=o('<div><span class="xl:text-sm 2xl:text-base 3xl:text-lg capitalize">'),Re=o('<span class="xl:text-sm 2xl:text-base 3xl:text-lg capitalize">'),Fe=o('<div class="w-full flex flex-col items-stretch gap-2">'),De=o("<div>Something went wrong");function Pe(e){const a=ve(()=>e.url),s=r=>t(R,{get fallback(){return t(j,{class:r})},get children(){return[t(x,{get when(){return e.icon.toLowerCase()==m.USER.valueOf()},get children(){return t(Ze,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.USERS.valueOf()},get children(){return t(ze,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.FILETEXT.valueOf()},get children(){return t(Se,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.CLIPBOARDDOCUMENT.valueOf()},get children(){return t(Ve,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.PIECHART.valueOf()},get children(){return t(Oe,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.LINECHART.valueOf()},get children(){return t(Be,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.BARCHART.valueOf()},get children(){return t(ye,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.SIDEBOX.valueOf()},get children(){return t(He,{class:r})}}),t(x,{get when(){return e.icon.toLowerCase()==m.HOME.valueOf()},get children(){return t(j,{class:r})}})]}});return(()=>{var r=Fe();return n(r,t(R,{get fallback(){return De()},get children(){return[t(x,{get when(){return!e.isLink},get children(){var l=Ee();return n(l,()=>e.label),l}}),t(x,{get when(){return e.isLink&&e.disabled},get children(){var l=I(),i=l.firstChild;return n(l,t(g,{get when(){return e.icon},get children(){return s("xl:text-2xl 2xl:text-3xl 3xl:text-4xl")}}),i),n(i,()=>e.label),$(()=>E(l,a()?"btn 2xl:min-h-[52px] 3xl:min-h-[64px] btn-active btn-ghost btn-block justify-start":"btn 2xl:min-h-[52px] 3xl:min-h-[64px] btn-ghost btn-block justify-start")),l}}),t(x,{get when(){return e.isLink&&!e.disabled},get children(){return[t(g,{get when(){return e.icon&&e.onClick},get children(){var l=I(),i=l.firstChild;return l.$$click=()=>e.onClick,n(l,()=>s("xl:text-2xl 2xl:text-3xl 3xl:text-4xl"),i),n(i,()=>e.label),$(()=>E(l,a()?"btn 2xl:min-h-[52px] 3xl:min-h-[64px] btn-active btn-ghost btn-block justify-start":"btn 2xl:min-h-[52px] 3xl:min-h-[64px] btn-ghost btn-block justify-start")),l}}),t(g,{get when(){return e.icon&&!e.onClick},get children(){return t(_,{get href(){return e.url||"?"},get class(){return a()?"btn 2xl:min-h-[52px] 3xl:min-h-[64px] btn-active btn-ghost btn-block justify-start":"btn 2xl:min-h-[52px] 3xl:min-h-[64px] btn-ghost btn-block justify-start"},get children(){return[z(()=>s("xl:text-2xl 2xl:text-3xl 3xl:text-4xl")),(()=>{var l=Re();return n(l,()=>e.label),l})()]}})}})]}})]}})),r})()}C(["click"]);function je(e){return u({a:{viewBox:"0 0 24 24"},c:'<path fill="currentColor" d="M18 7h4v2h-6V3h2v4ZM8 9H2V7h4V3h2v6Zm10 8v4h-2v-6h6v2h-4ZM8 15v6H6v-4H2v-2h6Z"/>'},e)}function Ie(e){return u({a:{viewBox:"0 0 24 24"},c:'<path fill="currentColor" d="M16 3h6v6h-2V5h-4V3ZM2 3h6v2H4v4H2V3Zm18 16v-4h2v6h-6v-2h4ZM4 19h4v2H2v-6h2v4Z"/>'},e)}var U=o('<span class="text-[16px] leading-[1.2] sm:text-lg xl:text-xl 2xl:text-2xl font-semibold text-base-content dark:text-neutral-200">'),Ue=o('<div class="flex items-center gap-1 xl:gap-2 mt-1 mb-5"><span class="text-[16px] leading-[1.2] sm:text-lg xl:text-xl 2xl:text-2xl font-semibold text-base-content dark:text-neutral-200">'),Ne=o('<div class="flex items-center gap-1 xl:gap-2"><span class="text-[16px] leading-[1.2] sm:text-lg xl:text-xl 2xl:text-2xl font-semibold text-base-content dark:text-neutral-200">'),N=o("<li><a class=justify-between>My Profile"),q=o("<li><a>Log Out"),qe=o('<div class="fixed z-[3] top-0 left-0 right-0 bg-base-100 w-full flex justify-between px-3 xl:px-4 py-3 xl:py-5 gap-4 xl:gap-0"><div class="flex gap-3 items-center"><div class="drawer w-auto p-0 mr-1 xl:hidden"><input id=drawer-navbar-mobile type=checkbox class=drawer-toggle><div class="p-0 w-auto drawer-content"><label for=drawer-navbar-mobile class="p-0 btn btn-ghost drawer-button"></label></div><div class="drawer-side z-[99]"><label for=drawer-navbar-mobile aria-label="close sidebar"class=drawer-overlay></label><div class="menu p-4 w-auto min-h-full bg-base-200 text-base-content"></div></div></div></div><div class="flex items-center gap-0 xl:gap-1 2xl:gap-2 3xl:gap-5"><button type=button title="Toggle Fullscreen"class="hidden xl:inline-flex btn btn-circle btn-ghost"></button><div class="px-0 xl:px-auto btn btn-circle btn-ghost xl:mr-1"></div><div class="dropdown dropdown-end"><div tabindex=0 role=button class="btn btn-ghost btn-circle avatar"><div class="w-9 rounded-full"><img alt=user-profile></div></div><ul tabindex=0 class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">'),Qe=o("<div>No Data for Sidebar ");function Ye(e){const{misc:a,logoutUser:s}=me.useAuth(),r=document.getElementById("root"),[l,i]=k(!1),[h,d]=k(!1),v=()=>i(!l()),T=()=>d(!h());V(()=>{l()?r?.requestFullscreen({navigationUI:"auto"}):document?.exitFullscreen()});const G=()=>{we.fire({title:"Konfirmasi",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:`
        <div class="flex justify-center items-center gap-4 mt-4">
          <span>Apakah anda yakin ingin melakukan logout?</span>
        </div>
      `}).then(f=>{f.isConfirmed&&J()})},J=async()=>{await $e.post({url:"/protected/logout",name:"Logout",server:Ce.AUTH,success:f=>{s();const b=f.data;F("Logout",b.message,D.SUCCESS)},error:()=>{F("Logout","Something went wrong when logging out user",D.ERROR)}})};return(()=>{var f=qe(),b=f.firstChild,W=b.firstChild,A=W.firstChild,y=A.nextSibling,Y=y.firstChild,ee=y.nextSibling,te=ee.firstChild,L=te.nextSibling,le=b.nextSibling,p=le.firstChild,S=p.nextSibling,ne=S.nextSibling,B=ne.firstChild,ae=B.firstChild,re=ae.firstChild,O=B.nextSibling;return A.addEventListener("change",T),n(Y,t(Te,{class:"text-2xl"})),n(L,t(g,{get when(){return!e.disabled},get children(){return t(_,{href:"/dashboard",class:"flex items-center gap-1 xl:gap-2 mt-1 mb-5",get children(){var c=U();return n(c,w),c}})}}),null),n(L,t(g,{get when(){return e.disabled},get children(){var c=Ue(),H=c.firstChild;return n(H,w),c}}),null),n(L,t(fe,{get each(){return e.sidebarData},get fallback(){return Qe()},children:c=>t(Pe,{onClick:()=>T(),get disabled(){return e.disabled},get label(){return c.label},get isLink(){return c.is_page},get url(){return c.page_url},get icon(){return c.icon}})}),null),n(b,t(g,{get when(){return!e.disabled},get children(){return t(_,{href:"/dashboard",class:"flex items-center gap-1 xl:gap-2",get children(){var c=U();return n(c,w),c}})}}),null),n(b,t(g,{get when(){return e.disabled},get children(){var c=Ne(),H=c.firstChild;return n(H,w),c}}),null),p.$$click=v,n(p,t(g,{get when(){return!l()},get children(){return t(Ie,{class:"xl:text-xl 2xl:text-2xl 3xl:text-3xl"})}}),null),n(p,t(g,{get when(){return l()},get children(){return t(je,{class:"xl:text-xl 2xl:text-2xl 3xl:text-3xl"})}}),null),n(S,t(K,{})),n(O,t(g,{get when(){return!e.disabled},get children(){return[t(_,{href:"/dashboard/profile",get children(){return N()}}),(()=>{var c=q();return c.$$click=()=>G(),c})()]}}),null),n(O,t(g,{get when(){return e.disabled},get children(){return[N(),q()]}}),null),$(()=>be(re,"src",a()?.logo||"https://th.bing.com/th/id/OIP.j1rpn-KTUmqcVBQygXuOuQHaIk?rs=1&pid=ImgDetMain")),$(()=>A.checked=h()),f})()}C(["click"]);export{_ as A,K as C,Pe as M,Ye as N,Ge as S,Ke as a,Je as b,We as c};
