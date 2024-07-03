import{d as F,A as M,p as O,f as l,i as n,g as R,j as q,l as b,q as m,E as p,r as j,v as H,w as g,x as v,n as Z}from"./index-BsES15Te.js";import{c as P,a as A,T as C,b as L,f as i}from"./text.input-wRMa5HVC.js";import{a as B}from"./navbar-U4Lqfhly.js";var N=b('<span class="xl:text-xl font-semibold">Halo, 👋 Selamat Datang Kembali!'),G=b("<span>Masuk"),K=b('<span class="loading loading-dots loading-lg">'),z=b('<div class="w-full flex flex-col items-stretch gap-3"><label class="input input-bordered min-w-full flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path></svg></label><label class="input input-bordered flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path fill-rule=evenodd d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"clip-rule=evenodd></path></svg></label><div class="flex items-center justify-between"><div class=form-control></div><button type=button class="link link-primary font-semibold text-xs no-underline">Forgot Password?</button></div><button type=submit class="btn btn-block btn-primary"></button><div class="divider text-sm">OR</div><div class="w-full flex justify-center items-center gap-4"><button type=button class="btn btn-block dark:btn-neutral">Daftar</button></div><div class="w-full flex justify-center items-center gap-4 mt-2"><button type=button class="btn btn-block dark:btn-neutral">Home');function X(){const u=F(),{updateData:d}=M.useAuth(),[a,h]=O(!1),e=P({username_or_email:A("",{required:!0,validators:[i.required,i.minLength,i.maxLength]}),password:A("",{required:!0,validators:[i.required,i.minLength,i.maxLength]})}),V=()=>{if(e.isSubmitted){m("System","Formulir sudah dikirimkan",p.ERROR);return}if(!e.isValid){m("System","Silahkan isi semua formulir",p.ERROR);return}e.markSubmitted(!0),h(!0),I()},I=async()=>{await j.post({url:"public/login",name:"System",data:{username_or_email:e.value.username_or_email,password:e.value.password},server:H.AUTH,success:s=>{const t=s.data;d(g.STATUS,!0),d(g.ROLE,t.data?.role),d(g.USER,{email:t.data?.email,username:t.data?.username}),d(g.MISC,{logo:t.data?.logo,status:t.data?.verified==v.VERIFIED.valueOf()?v.VERIFIED:v.UNVERIFIED}),m("System",t.message,p.SUCCESS),u("/dashboard",{replace:!0})},error:()=>{m("System","Something went wrong when checking data from database",p.ERROR)},finally:()=>{e.markSubmitted(!1),h(!1)}})};return l(B,{get disabled(){return a()},title:"Masuk",get children(){return[N(),(()=>{var s=z(),t=s.firstChild;t.firstChild;var c=t.nextSibling;c.firstChild;var f=c.nextSibling,T=f.firstChild,w=T.nextSibling,o=f.nextSibling,U=o.nextSibling,x=U.nextSibling,S=x.firstChild,D=x.nextSibling,y=D.firstChild;return n(t,l(C,{type:"text",name:"username_or_email",get disabled(){return a()},placeholder:"Email atau Username",get control(){return e.controls.username_or_email},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),n(s,l(L,{name:"Email atau Username",get control(){return e.controls.username_or_email}}),c),n(c,l(C,{type:"password",name:"password",get disabled(){return a()},placeholder:"Password",get control(){return e.controls.password},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),n(s,l(L,{name:"Password",get control(){return e.controls.password}}),f),w.$$click=()=>u("/forgot-password"),o.$$click=V,n(o,l(R,{get when(){return!a()},get children(){return G()}}),null),n(o,l(R,{get when(){return a()},get children(){return K()}}),null),S.$$click=()=>u("/register"),y.$$click=()=>u("/"),q(r=>{var _=a(),E=a(),k=a(),$=a();return _!==r.e&&(w.disabled=r.e=_),E!==r.t&&(o.disabled=r.t=E),k!==r.a&&(S.disabled=r.a=k),$!==r.o&&(y.disabled=r.o=$),r},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()]}})}Z(["click"]);export{X as default};
