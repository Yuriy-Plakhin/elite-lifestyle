(this["webpackJsonpelite-lifestyle"]=this["webpackJsonpelite-lifestyle"]||[]).push([[0],Array(30).concat([function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"setDate",(function(){return E})),n.d(r,"toggleAnimation",(function(){return I})),n.d(r,"setExercises",(function(){return k})),n.d(r,"fetchExercises",(function(){return D})),n.d(r,"setMenuItems",(function(){return L})),n.d(r,"setSearch",(function(){return U})),n.d(r,"setUserExercises",(function(){return A})),n.d(r,"toggleLoginForm",(function(){return R})),n.d(r,"toggleRepeatsForm",(function(){return M})),n.d(r,"hideRepeatsForm",(function(){return J})),n.d(r,"setExercisesStep",(function(){return T}));var c=n(1),i=n.n(c),s=n(15),a=n.n(s),o=n(3),l=n(5),u=n(4),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setDate":return t.payload;case"toggleAnimation":return Object(u.a)(Object(u.a)({},e),{},{toggle:!e.toggle});default:return e}},j=n(8),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setExercises":return[].concat(Object(j.a)(e),Object(j.a)(t.payload));case"fetchExercises":return t.payload;default:return e}},f=[{id:"3",title:"Build Yourself",imageUrl:"../img/workout.webp",url:"workout"},{id:"4",title:"Calculate Food",imageUrl:"../img/food.webp",url:"food"}],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return"setMenuItems"===t.type?t.payload:e},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"setSearch"===t.type?t.payload:e},v=n(12),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("setUserExercises"===t.type){var n=t.payload,r=n.date,c=(n.id,n.exercises);return Object(u.a)(Object(u.a)({},e),{},Object(v.a)({},r,c))}return e},O=function(){var e,t,n,r,c,i,s,a,o,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loginForm:{show:!1,mode:"signIn"},repeatsForm:{show:!1,repeatId:1,currentExerciseID:""}},u=arguments.length>1?arguments[1]:void 0;switch(u.type){case"toggleLoginForm":return{loginForm:{show:!l.loginForm.show,mode:u.payload},repeatsForm:{show:!1}};case"toggleRepeatsForm":return{loginForm:{show:!1,mode:"signIn"},repeatsForm:{show:null!==(e=u.payload)&&void 0!==e&&e.show?null===(t=u.payload)||void 0===t?void 0:t.show:!l.repeatsForm.show,repeatId:null===(n=u.payload)||void 0===n?void 0:n.repeatId,currentExerciseID:null===(r=u.payload)||void 0===r?void 0:r.id,actionType:null===(c=u.payload)||void 0===c?void 0:c.actionType,repeats:null===(i=u.payload)||void 0===i?void 0:i.repeats,weight:null===(s=u.payload)||void 0===s?void 0:s.weight}};case"hideRepeatsForm":return{loginForm:{show:!1,mode:"signIn"},repeatsForm:{show:!1,repeatId:null===(a=u.payload)||void 0===a?void 0:a.repeatId,currentExerciseID:null===(o=u.payload)||void 0===o?void 0:o.id}};default:return l}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setExercisesStep":return t.payload;case"resetExercisesStep":return 1;default:return e}},g=Object(l.c)({date:d,exercises:b,menu:p,search:m,userExercises:h,forms:O,exercisesStep:x}),y=n(20);var N=Object(l.d)(g,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),Object(l.a)(y.a));N.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(N.getState())}));var _=n(11),w=n(2),E=function(e){return function(t){t({type:"setDate",payload:e})}},I=function(e){return function(t){t({type:"toggleAnimation",payload:e})}},S=n(21),F=n(18),C=n.n(F),k=function(e){return function(t){t({type:"setExercises",payload:e})}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://130.61.70.251:8080/exercises";return function(){var t=Object(S.a)(C.a.mark((function t(n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return r=t.sent,t.next=5,r.json();case 5:r=t.sent,n({type:"fetchExercises",payload:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(t){t({type:"setMenuItems",payload:e})}},U=function(e){return function(t){t({type:"setSearch",payload:e})}},A=function(e){var t=e.date,n=e.exercises;return function(e){e({type:"setUserExercises",payload:{date:t,exercises:n}})}},R=function(e){return function(t){t({type:"toggleLoginForm",payload:e})}},M=function(e){return function(t){t({type:"toggleRepeatsForm",payload:e})}},J=function(e){return function(t){t({type:"hideRepeatsForm",payload:e})}},T=function(e){return function(t){t({type:"setExercisesStep",payload:e})}},Y=(n(30),n(0)),B=function(e){var t=e.mode,n=void 0===t?"login":t,r=e.show;return void 0!==r&&r?Object(Y.jsxs)("form",{className:"submit-form",id:"submit-form",action:"submit",children:[Object(Y.jsxs)("p",{className:"form--label",children:["login"===n?"Sign In":"Sign Up to"," Elite Lifestyle"]}),Object(Y.jsx)("input",{type:"email",className:"input",placeholder:"Email",name:"",id:"email--field"}),Object(Y.jsx)("input",{type:"password",className:"input",placeholder:"Password",name:"",id:"password--field"}),Object(Y.jsx)("input",{type:"submit",className:"submit-btn",value:"signIn"===n?"Sign In":"Sign Up"})]}):Object(Y.jsx)(Y.Fragment,{})},P=(n(32),function(e){var t=Object(o.b)(),n=Object(l.b)(r,t).toggleLoginForm,c=Object(o.c)((function(e){return e.forms.loginForm}));return Object(Y.jsxs)("header",{className:"header",children:[Object(Y.jsx)(B,Object(u.a)({},c)),Object(Y.jsx)(_.b,{to:"/",children:Object(Y.jsx)("div",{className:"logo",children:"Elite Lifestyle"})}),Object(Y.jsx)("nav",{className:"nav--bar",children:Object.values(e).map((function(e){return"register"!==e.url&&"login"!==e.url?Object(Y.jsx)(_.b,{to:"/".concat(e.url),children:e.url[0].toUpperCase()+e.url.slice(1)},e.id):Object(Y.jsx)("p",{className:"".concat(e.url+"--nav"," text--selection__none"),onClick:function(t){return t.target.classList.toString().includes(e.url)&&n(e.url)},children:e.url[0].toUpperCase()+e.url.slice(1)},e.id)}))})]})}),G=(n(33),function(){return Object(Y.jsx)("footer",{className:"footer",children:Object(Y.jsxs)("div",{className:"author--ref",children:[Object(Y.jsx)("p",{children:"\xa9Made by Yuriy Plakhin"}),Object(Y.jsxs)("a",{href:"https://github.com/Yuriy-Plakhin/elite-lifestyle",target:"_blank",rel:"noopener noreferrer",children:[Object(Y.jsx)("img",{src:"img/github.webp",alt:"GitHub Logo"}),"\xa0GitHub"]})]})})}),H=n(10);function q(e,t,n){var r,c;if(n){var i=t.filter((function(t){return t.id.includes(e)})),s=n.filter((function(t){return t.id.includes(e)}));return JSON.stringify(null===(r=s[0])||void 0===r?void 0:r.id)===JSON.stringify(null===(c=i[0])||void 0===c?void 0:c.id)}}function W(e,t,n){var r,c,i,s=e.target.classList.value,a=null===(r=e.target)||void 0===r||null===(c=r.parentElement)||void 0===c||null===(i=c.classList)||void 0===i?void 0:i.value,o=n.some((function(e){return a===e}));if(t===s||o)return!0}function z(e,t,n,r){var c=e.target.closest(".exercise--card").id,i=t.filter((function(e){return e.id.includes(c)}));return q(c,t,n)?{date:r,exercises:Object(j.a)(n.filter((function(e){return e.id!==i[0].id})))}:Array.isArray(n)?{date:r,exercises:Object(j.a)(new Set([].concat(Object(j.a)(n),Object(j.a)(i))))}:{date:r,exercises:Object(j.a)(i)}}var K=n(50),Q=(n(34),function(){var e,t=Object(o.b)(),n=Object(l.b)(r,t),c=n.toggleRepeatsForm,i=n.setUserExercises,s=Object(o.c)((function(e){return e})),a=s.forms,d=s.date,b=s.userExercises,f=d.full_date,p=a.repeatsForm,m=p.show,h=p.repeatId,O=p.currentExerciseID,x=p.actionType,g=b[f],y=null===g||void 0===g?void 0:g.filter((function(e){return e.id===O}))[0],N=null===y||void 0===y||null===(e=y.repeats)||void 0===e?void 0:e.length,_="add"===x?(N||0)+1:function(e,t){var n=null===e||void 0===e?void 0:e.repeats,r=null===n||void 0===n?void 0:n.filter((function(e){return(null===e||void 0===e?void 0:e.id)===t}));return(null===n||void 0===n?void 0:n.indexOf(r[0]))||""}(y,h)+1,w=function(e){e.target[0].value="",e.target[1].value=""},E=function(e,t,n){var r={id:n,weight:e.target[0].value,repeats:e.target[1].value};if(t.repeats){var c=t.repeats;return(null===c||void 0===c?void 0:c.some((function(e){return(null===e||void 0===e?void 0:e.id)===n})))?c.map((function(e){return e.id!==r.id?e:r})):(c.push(r),w(e),c)}return w(e),[r]};return m?Object(Y.jsxs)("form",{className:"submit-form",id:"submit-form",action:"submit",onSubmit:function(e){!function(e,t,n){e.preventDefault();var r,c=Object(u.a)({},g.filter((function(e){return e.id===t})))[0];r=n||Object(K.a)().slice(0,8);var s={repeats:E(e,c,r)},a=Object.assign(c,s),o={date:f,exercises:Object(j.a)(g.map((function(e){return e.id!==t?e:a})))};i(o)}(e,O,h),c()},children:[Object(Y.jsxs)("div",{className:"submit--form__header text--selection__none",children:[Object(Y.jsxs)("p",{className:"form--label",children:["Repeat \u2116",_]}),Object(Y.jsx)(H.f,{className:"delete--repeat",onClick:function(){!function(e,t){var n=Object(j.a)(g),r=Object(j.a)(n.filter((function(t){return t.id===e})))[0],c=r.repeats,s=null===c||void 0===c?void 0:c.filter((function(e){return e.id!==t}));r.repeats=s;var a=Object(u.a)(Object(u.a)({},b),{},Object(v.a)({},f,[].concat(Object(j.a)(g.filter((function(t){return t.id!==e}))),[r])));i(a)}(O,h),c()}})]}),Object(Y.jsx)("input",{type:"number",className:"input",placeholder:"Weight",id:"weight--field"}),Object(Y.jsx)("input",{type:"number",className:"input",placeholder:"Repeats",id:"repeats--field"}),Object(Y.jsxs)("div",{className:"repeats--buttons",children:[Object(Y.jsx)("input",{type:"submit",className:"save-btn",value:"Save "}),Object(Y.jsx)("input",{type:"button",className:"cancel-btn",value:"Cancel",onClick:function(){return c()}})]})]}):Object(Y.jsx)(Y.Fragment,{})}),V=(n(35),function(e){var t=e.id,n=e.title,r=e.imageUrl,c=e.url;return Object(Y.jsx)(_.b,{to:"/".concat(c),children:Object(Y.jsxs)("div",{className:"menu--item",id:t,children:[Object(Y.jsx)("div",{className:"background--image__container",children:Object(Y.jsx)("img",{className:"background--image",src:r,alt:"Menu Background"})}),Object(Y.jsx)("div",{className:"content",children:Object(Y.jsx)("h2",{className:"title",children:n})})]})})}),X=(n(36),function(e){return Object(Y.jsx)("div",{className:"directory",children:Object.values(e).filter((function(e){return e.imageUrl})).map((function(e){return Object(Y.jsx)(V,Object(u.a)({},e),e.id)}))})}),Z=(n(37),function(e){return Object(Y.jsx)("div",{className:"homepage",children:Object(Y.jsx)(X,Object(u.a)({},e))})}),$=n(7),ee=(n(38),function(e,t){if(t[e]&&""!==t[e]){var n=t[e].length,r=" border--indicator ";return 1===n?"".concat(r," not--empty__day"):n>1&&n<=3?"".concat(r," semi--full__day"):n>=4?"".concat(r," full--day"):""}return""}),te=function(e,t,n){for(var r=0,c={};r<e;){r++;var i=t.substring(0,8)+r.toString().padStart(2,"0");c[i]=ee(i,n)}return c},ne=function(e,t){var n=[];return Object.keys(e).forEach((function(r){var c=r.slice(8,10);n.push(Object(Y.jsx)("div",{id:r,className:"day text--selection__none ".concat(t===Number(c)&&"current--day ").concat(e[r]),children:c},r))})),Object(Y.jsx)(Y.Fragment,{children:n})},re=function(e){var t=e.genDateObject,n=Object(o.b)(),c=Object(l.b)(r,n).setDate,i=Object(o.c)((function(e){return e})),s=i.date,a=i.userExercises,u=s.days_in_month,d=s.full_date,j=s.day;return Object(Y.jsx)("div",{className:"days--container",onClick:function(e){try{var n=e.target.id.split("/"),r=Object($.a)(n,3),i=r[0],s=r[1],a=r[2],o=new Date(i,s-1,a),l=t(o);l.day&&c(l)}catch(u){console.log(u)}},children:ne(te(u,d,a),j)})},ce=(n(39),function(e,t){return new Date(e,t,0).getDate()}),ie=function(e){return e.toString().padStart(2,"0")};function se(e){var t=e.getDate(),n=e.getMonth(),r=e.getFullYear(),c=e.toLocaleString("en-US",{month:"long"});return{day:t,month:n,year:r,full_date:"".concat(r,"/").concat(ie(n+1),"/").concat(ie(t)),month_name:c,days_in_month:ce(r,n+1),userExercises:[]}}var ae=function(e,t,n){return se(new Date(e,t,n))},oe=function(){var e=Object(o.b)(),t=Object(l.b)(r,e).setDate,n=Object(o.c)((function(e){return e})).date,i=n.day,s=n.month,a=n.year,d=n.month_name;return Object(c.useEffect)((function(){var e=se(new Date);t(e)}),[]),Object(Y.jsx)("section",{className:"calendar--section",children:Object(Y.jsxs)("div",{className:"days--controls",children:[Object(Y.jsxs)("div",{className:"month--year",children:[Object(Y.jsx)("button",{onClick:function(){t(Object(u.a)({},function(e,t,n){return ae(e,Number(t)-1,n)}(a,s,i)))},className:"month--btn prev--month__btn",children:Object(Y.jsx)(H.b,{className:"month--btn__component"})}),Object(Y.jsxs)("div",{className:"date--container",children:[Object(Y.jsx)("div",{className:"month",children:d}),Object(Y.jsx)("div",{className:"year",children:a})]}),Object(Y.jsx)("button",{onClick:function(){t(Object(u.a)({},function(e,t,n){return ae(e,Number(t)+1,n)}(a,s,i)))},className:"month--btn next--month__btn",children:Object(Y.jsx)(H.c,{className:"month--btn__component"})})]}),Object(Y.jsx)(re,{genDateObject:se})]})})},le=(n(40),function(e){switch(e){case"IoIosClose":return Object(Y.jsx)(H.d,{className:"btn__component",id:"btn__remove"});case"IoIosAdd":return Object(Y.jsx)(H.a,{className:"btn__component"});default:Y.Fragment}}),ue=function(e,t,n,r,c){var i,s=c.repeatId,a=c.show;if(e){var o=null===r||void 0===r?void 0:r[t].indexOf(n),l=null===r||void 0===r||null===(i=r[t])||void 0===i?void 0:i[o],u=null===l||void 0===l?void 0:l.repeats;return Object(Y.jsxs)("div",{className:"repeats--container",children:[Object(Y.jsxs)("div",{className:"repeat--units",children:[Object(Y.jsx)("i",{className:"weight--units",children:"kg"}),Object(Y.jsx)("i",{className:"repeat--units",children:"rp"})]}),Array.isArray(u)&&u.map((function(e){var t=e.id,n=e.weight,r=e.repeats,c=function(e,t,n){return t===e&&n?" active--repeat":""}(t,s,a);return Object(Y.jsxs)("div",{className:"repeat".concat(c),id:t,children:[Object(Y.jsx)("p",{className:"exercise--weight",children:Object(Y.jsx)("b",{children:n})}),Object(Y.jsx)("p",{className:"exercise--repeats",children:Object(Y.jsx)("b",{children:r})})]},t)})),Object(Y.jsx)(H.a,{className:"add--repeat__btn",id:"add--repeat__btn"})]})}},de=function(e){var t=e.exercise,n=e.btnName,r=e.userExerciseCard,c=void 0!==r&&r,i=e.observe,s=Object(o.c)((function(e){return e})),a=s.userExercises,l=s.date,u=s.forms,d=l.full_date,j=t.id,b=t.images_url_bbc,f=t.exercise_name,p=t.body_part,m=u.repeatsForm;return Object(Y.jsxs)("article",{className:"exercise--card",id:j,ref:i,children:[Object(Y.jsx)("div",{className:"image--container",children:Object(Y.jsx)("img",{src:b.replace("{","").replace("}","").split(",")[0],alt:"Exercise"})}),Object(Y.jsxs)("div",{className:"exercise--description",children:[Object(Y.jsx)("p",{className:"exercise--name",children:Object(Y.jsx)("strong",{children:f})}),Object(Y.jsx)("p",{className:"body--part",children:p}),ue(c,d,t,a,m)]}),Object(Y.jsx)("button",{className:"btn",children:le(n)})]},j)},je=function(){var e=Object(o.b)(),t=Object(l.b)(r,e),n=t.setUserExercises,c=t.toggleRepeatsForm,i=Object(o.c)((function(e){return e})),s=i.userExercises,a=i.date,u=i.exercises,d=a.full_date,j=s[d],b=null===j||void 0===j?void 0:j[0];return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Q,{}),Object(Y.jsx)("section",{className:"user--exercises",onClick:function(e){return function(e){var t;e.preventDefault();var r="btn__component",i="add--repeat__btn",s=null===(t=e.target.closest(".repeat"))||void 0===t?void 0:t.classList.value.includes("active--repeat");if(W(e,r,[r]))n(z(e,u,j,d));else if(W(e,i,[i])){var a={id:e.target.closest("article").id,repeatId:"",actionType:"add"};c(a)}else if(W(e,"repeat",["repeat","exercise--weight","exercise--repeats"])){var o=e.target.closest("article").id,l=e.target.closest(".repeat").id,b=j.filter((function(e){return e.id===o})),f=Object($.a)(b,1)[0].repeats.filter((function(e){return e.id===l})),p=Object($.a)(f,1)[0],m=p.repeats,v=p.weight;c({show:!s,id:o,repeatId:l,actionType:"modify",repeats:m,weight:v})}}(e)},children:b?j.map((function(e){return function(e){return Object(Y.jsx)(de,{exercise:e,btnName:"IoIosClose",userExerciseCard:!0,userExercises:s},e.id)}(e)})):Object(Y.jsx)("div",{className:"user--exercises__placeholder",children:"Add some exercises"})})]})},be=(n(41),n(42),function(){return Object(Y.jsx)("div",{className:"loading--container rotate",children:Object(Y.jsx)(H.e,{})})}),fe=(n(43),function(e){var t=e.placeholder,n=Object(o.b)(),c=Object(l.b)(r,n),i=c.setSearch,s=c.setExercisesStep;return Object(Y.jsx)("div",{className:"search--box",children:Object(Y.jsx)("input",{type:"search",placeholder:t,onChange:function(e){i(e.target.value),s(1)}})})}),pe=function(){var e,t,n=Object(o.b)(),i=Object(l.b)(r,n),s=i.setUserExercises,a=i.setExercisesStep,u=i.setSearch,d=Object(o.c)((function(e){return e})),j=d.search,b=d.exercises,f=d.userExercises,p=d.date,m=d.exercisesStep,v=p.full_date,h=f[v],O=function(e,t){return e.filter((function(e){try{return e.exercise_name.toLowerCase().includes(t.toLowerCase())||e.body_part.toLowerCase().includes(t.toLowerCase())||e.equipment_type.toLowerCase().includes(t.toLowerCase())}catch(n){console.log(n)}}))}(b,j),x=(e=50,t=m,O.slice(0,e*t)),g=function(e){if(Object($.a)(e,1)[0].isIntersecting)return a(m+1)},y=Object(c.useRef)(),N={root:null,rootMargin:"0px",threshold:.7};return Object(c.useEffect)((function(){var e=new IntersectionObserver(g,N);return y.current&&e.observe(y.current),function(){y.current&&e.unobserve(y.current)}})),Object(c.useEffect)((function(){n(D()),a(1),u("")}),[]),Object(Y.jsxs)("section",{className:"exercise--search__section",children:[Object(Y.jsx)(fe,{placeholder:"Search"}),Object(Y.jsx)("div",{className:"exercise--cards",onClick:function(e){!function(e){var t="btn__component";try{if(!W(e,t,[t]))return;s(z(e,b,f[v],v))}catch(n){console.log(n)}}(e)},children:null!==x&&void 0!==x&&x[0]?x.map((function(e){return function(e,t){try{var n=e.id,r=q(n,b,h)?"IoIosClose":"IoIosAdd";return Object(Y.jsx)(de,{exercise:e,btnName:r,observe:t},n)}catch(c){console.log(c)}}(e,y)})):null!==x&&void 0!==x&&x[0]||!j?Object(Y.jsx)(be,{}):Object(Y.jsx)("div",{className:"not--found",children:Object(Y.jsx)("p",{children:"Nothing found"})})})]})},me=(n(44),function(){var e=Object(o.b)(),t=Object(l.b)(r,e).hideRepeatsForm,n=Object(o.c)((function(e){return e})).date.full_date;return Object(c.useEffect)((function(){try{t()}catch(e){}}),[]),Object(c.useEffect)((function(){t()}),[n]),Object(Y.jsxs)("section",{className:"workout--section",children:[Object(Y.jsx)(je,{}),Object(Y.jsx)(oe,{}),Object(Y.jsx)(pe,{})]})}),ve=(n(45),function(){var e=Object(o.b)();(0,Object(l.b)(r,e).setMenuItems)(f);var t=Object(o.c)((function(e){return e.menu}));return Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)(P,Object(u.a)({},t)),Object(Y.jsxs)(w.c,{children:[Object(Y.jsx)(w.a,{exact:!0,path:"/",element:Object(Y.jsx)(Z,Object(u.a)({},t))}),Object(Y.jsx)(w.a,{exact:!0,path:"/workout",element:Object(Y.jsx)(me,{})}),Object(Y.jsx)(w.a,{exact:!0,path:"/food",element:Object(Y.jsx)(Q,{})})]}),Object(Y.jsx)(G,{})]})});n(46);a.a.render(Object(Y.jsx)(i.a.StrictMode,{children:Object(Y.jsx)(_.a,{children:Object(Y.jsx)(o.a,{store:N,children:Object(Y.jsx)(ve,{})})})}),document.getElementById("root"))}]),[[47,1,2]]]);
//# sourceMappingURL=main.6b0c10cb.chunk.js.map