(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={tn:"Section_tn__2biXb"}},function(e,t,n){e.exports={bbb:"Statistics_bbb__3K0vp"}},function(e,t,n){e.exports={notif:"Notification_notif__1eWg9"}},function(e,t,n){e.exports={btn:"FeedbackOptions_btn__2Iebz"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(4),r=n.n(a),o=(n(13),n(2)),s=(n(14),n(5)),b=n.n(s),u=n(0),d=function(e){var t=e.title,n=void 0===t?"":t,c=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:b.a.tn,children:n}),c]})},j=n(6),l=n.n(j),f=function(e){var t=e.good,n=e.neutral,c=e.bad,i=e.total,a=void 0===i?0:i,r=e.positivePercentage,o=void 0===r?0:r;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Good: ",t]}),Object(u.jsxs)("p",{children:["Neutral: ",n]}),Object(u.jsxs)("p",{children:["Bad: ",c]}),Object(u.jsxs)("p",{children:["Total: ",a," "]}),Object(u.jsxs)("p",{className:l.a.bbb,children:["Positive feedback:",o," %"]})]})},h=n(7),O=n.n(h),v=function(e){var t=e.message;return Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:O.a.notif,children:t})})},x=n(8),p=n.n(x),g=function(e){var t=e.buttons,n=e.onLeaveFeedback;return Object(u.jsx)("div",{children:Object.keys(t).map((function(e){return Object(u.jsx)("button",{type:"button",className:p.a.btn,onClick:function(){n(e)},children:e},e)}))})};var k=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(0),r=Object(o.a)(a,2),s=r[0],b=r[1],j=Object(c.useState)(0),l=Object(o.a)(j,2),h=l[0],O=l[1],x={good:n,neutral:s,bad:h},p=function(){return Object.values(x).reduce((function(e,t){return e+t}),0)},k=function(){var e=p();return e>0?Math.round(n/e*100):0},_=p();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{title:"Please leave feedback",children:Object(u.jsx)(g,{buttons:x,onLeaveFeedback:function(e){switch(e){case"good":i((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}})}),_>0?Object(u.jsx)(d,{title:"Statistics",children:Object(u.jsx)(f,{good:n,neutral:s,bad:h,total:p(),positivePercentage:k()?k():0})}):Object(u.jsx)(v,{message:"No feedback given"})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),_()}],[[16,1,2]]]);
//# sourceMappingURL=main.c3c4337f.chunk.js.map