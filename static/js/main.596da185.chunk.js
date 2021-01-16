(this["webpackJsonpinvestment-calculator"]=this["webpackJsonpinvestment-calculator"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),l=a(10),o=a.n(l),s=(a(23),a(7)),i=(a(24),a(32)),d=a(31),j=a(16),u=a(34),h=a(8),b={PreTax:"Tax Deferred",PostTax:"Roth"};var m=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:e.acctType}),Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsxs)(u.a.Label,{children:["How much ",e.acctType," have you saved for retirement?"]}),Object(n.jsx)(h.a,{placeholder:"$1000",className:"form-control",value:e.amountSaved,displayType:"input",thousandSeparator:!0,prefix:"$",onChange:e.amountSavedChanged,decimalScale:"0"}),Object(n.jsx)(u.a.Text,{className:"text-muted",children:"This should be the total of all your retirement accounts including 401(k)s, IRAs, 403(b)s, etc."})]}),Object(n.jsxs)(u.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsxs)(u.a.Label,{children:["How much ",e.acctType," will you contribute monthly?"]}),Object(n.jsx)(h.a,{className:"form-control",placeholder:"$1000",value:e.monthlySaved,displayType:"input",thousandSeparator:!0,prefix:"$",onChange:e.monthlySavedChanged,decimalScale:"0"}),Object(n.jsx)(u.a.Text,{className:"text-muted",children:"This is the amount you add to your retirement savings each month. Ideally, you should save 15% of your pay toward retirement."})]})]})]})};var x=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Investment Calculator"}),Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(u.a.Label,{children:"Enter your current age."}),Object(n.jsx)(h.a,{placeholder:"25",className:"form-control",value:e.startAge,displayType:"input",onChange:e.startAgeChanged,decimalScale:"0",allowNegative:!1}),Object(n.jsx)(u.a.Text,{className:"text-muted"})]}),Object(n.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(u.a.Label,{children:"Enter the age you plan to retire."}),Object(n.jsx)(h.a,{className:"form-control",placeholder:"65",value:e.endAge,displayType:"input",onChange:e.endAgeChanged,decimalScale:"0",allowNegative:!1}),Object(n.jsx)(u.a.Text,{className:"text-muted",children:"If you were born in 1960 or later, 67 years old is the age at which you can retire with full benefits."})]}),Object(n.jsxs)(u.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(u.a.Label,{children:"What do you think your annual return will be?"}),Object(n.jsx)(h.a,{placeholder:"8%",className:"form-control",value:e.percent,displayType:"input",thousandSeparator:!1,onChange:e.percentChanged,suffix:"%",decimalScale:"2"}),Object(n.jsx)(u.a.Text,{className:"text-muted",children:"This is the return your investment will generate over time. Historically, the 30-year return of the S&P 500 has been roughly 12%."})]})]})]})},O=a(29),g=a(33);function p(e){return Object(n.jsx)("a",{href:"#",onClick:e.toggleAmortization,children:e.amortizationButtonText})}function v(e){return Object(n.jsxs)(d.a,{children:[Object(n.jsx)(j.a,{children:e.monthYear}),Object(n.jsx)(j.a,{children:Object(n.jsx)(h.a,{value:e.balance,displayType:"text",thousandSeparator:!0,prefix:"$"})}),Object(n.jsx)(j.a,{children:e.age})]})}var y=function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(r.useState)("Show Amortization"),i=Object(s.a)(o,2),u=i[0],b=i[1];if(e.startAge&&e.endAge&&e.amountSaved&&e.monthlySaved&&e.interest){var m=null,x=function(e){var t=e.interest.replace("%",""),a=parseFloat(t)/100/12,n=parseFloat(e.amountSaved.replace("$","").replace(",","").replace(".","")),r=parseFloat(e.monthlySaved.replace("$","").replace(",","").replace(".","")),c=[],l=(new Date).getFullYear(),o=0;for(o=e.startAge;o<e.endAge;o++){var s=0;for(s=1;s<=12;s++)n=Math.round(n*(1+a),2)+r,c.push({monthYear:"".concat(s,"/").concat(l),balance:n,age:o});l++}return c}(e),O=x[x.length-1];return c&&(m=function(e,t){var a=t.map((function(e){return Object(n.jsx)(v,{monthYear:e.monthYear,balance:e.balance,age:e.age},e.monthYear)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("b",{children:"Date"})}),Object(n.jsx)(j.a,{children:Object(n.jsx)("b",{children:"Balance"})}),Object(n.jsx)(j.a,{children:Object(n.jsx)("b",{children:"Age"})})]}),a]})}(0,x)),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("b",{children:Object(n.jsxs)("label",{style:{marginRight:10},children:["Total At Retirement:(",e.endAge,")"]})}),Object(n.jsx)(h.a,{value:O.balance,displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("br",{}),Object(n.jsx)(p,{amortizationButtonText:u,toggleAmortization:function(){b(c?"Show Amortization":"Hide Amortization"),l(!c)}}),m]})}return""};var f=function(){var e=function(e){var t=c.a.useState(localStorage.getItem(e)||""),a=Object(s.a)(t,2),n=a[0],r=a[1];return c.a.useEffect((function(){localStorage.setItem(e,n)}),[n]),[n,r]},t=e("rothSaved"),a=Object(s.a)(t,2),l=a[0],o=a[1],u=e("monthlyRothSaved"),h=Object(s.a)(u,2),p=h[0],v=h[1],f=e("amountSaved"),S=Object(s.a)(f,2),T=S[0],A=S[1],C=e("monthlySaved"),w=Object(s.a)(C,2),F=w[0],I=w[1],N=e("startAge"),B=Object(s.a)(N,2),P=B[0],R=B[1],k=e("endAge"),$=Object(s.a)(k,2),z=$[0],E=$[1],L=e("expectedReturn"),H=Object(s.a)(L,2),Y=H[0],G=H[1],D=Object(r.useState)(!1),J=Object(s.a)(D,2),M=J[0],V=J[1],W=function(){return V(!1)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(i.a,{children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(j.a,{lg:"6",children:Object(n.jsx)(x,{startAge:P,startAgeChanged:function(e){return R(e.target.value)},endAge:z,endAgeChanged:function(e){return E(e.target.value)},percent:Y,percentChanged:function(e){return G(e.target.value)}})})}),Object(n.jsxs)(d.a,{children:[Object(n.jsxs)(j.a,{sm:"12",md:"6",children:[Object(n.jsx)(m,{amountSaved:l,amountSavedChanged:function(e){return o(e.target.value)},monthlySaved:p,monthlySavedChanged:function(e){return v(e.target.value)},acctType:b.PostTax}),Object(n.jsx)(y,{startAge:P,endAge:z,amountSaved:l,monthlySaved:p,interest:Y})]}),Object(n.jsxs)(j.a,{sm:"12",md:"6",children:[Object(n.jsx)(m,{amountSaved:T,amountSavedChanged:function(e){return A(e.target.value)},monthlySaved:F,monthlySavedChanged:function(e){return I(e.target.value)},acctType:b.PreTax}),Object(n.jsx)(y,{startAge:P,endAge:z,amountSaved:T,monthlySaved:F,interest:Y})]})]}),Object(n.jsx)(d.a,{children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(O.a,{variant:"secondary",onClick:function(){return V(!0)},children:"Reset"}),Object(n.jsx)(O.a,{variant:"primary",className:"ml-2",children:"Calculate"})]})}),Object(n.jsxs)(g.a,{show:M,onHide:W,children:[Object(n.jsx)(g.a.Header,{closeButton:!0,children:Object(n.jsx)(g.a.Title,{children:"Reset Values"})}),Object(n.jsx)(g.a.Body,{children:"Are you sure you want to reset all form values?"}),Object(n.jsxs)(g.a.Footer,{children:[Object(n.jsx)(O.a,{variant:"secondary",onClick:W,children:"Cancel"}),Object(n.jsx)(O.a,{variant:"primary",onClick:function(){localStorage.clear(),o(""),v(""),A(""),I(""),R(""),E(""),G(""),W()},children:"Reset Values"})]})]})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),S()}},[[28,1,2]]]);
//# sourceMappingURL=main.596da185.chunk.js.map