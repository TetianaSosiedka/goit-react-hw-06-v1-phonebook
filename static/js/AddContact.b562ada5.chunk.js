"use strict";(self.webpackChunkgoit_react_hw_06_v1_phonebook=self.webpackChunkgoit_react_hw_06_v1_phonebook||[]).push([[221],{6695:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var a,r=t(9434),s=t(6871),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},o=t(5562),c=t.n(o),u=t(168),d=t(7939).ZP.form(a||(a=(0,u.Z)(["\n  width: 400px;\n  border: solid 2px #000000;\n  padding: 15px;\n  label {\n    display: block;\n    margin-bottom: 15px;\n  }\n  span {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: 700;\n  }\n  input {\n    padding: 5px;\n  }\n"]))),l=t(885),p=t(2791),m=function(){var n=(0,p.useState)(""),e=(0,l.Z)(n,2),t=e[0],a=e[1],r=(0,p.useState)(""),s=(0,l.Z)(r,2),i=s[0],o=s[1];return{name:t,number:i,setState:function(n,e){switch(n){case"name":a(e);break;case"number":o(e);break;default:a(""),o("")}}}},h=t(1642),b=t(3661),f=t(184),g=function(){var n=(0,r.I0)(),e=(0,s.s0)(),t=(0,r.v9)((function(n){return n.contacts.items})),a=m(),o=a.name,u=a.number,l=a.setState,p=i(),g=i(),x=function(n){l(n.target.name,n.target.value)};return(0,f.jsxs)(d,{onSubmit:function(a){a.preventDefault();var r,s=i();r={name:o,number:u,id:s},t.find((function(n){return n.name===r.name}))?c().Report.warning("Warning","".concat(r.name," is alredy incontacts"),"Cancel",(function(){})):(c().Report.success("Success","Contact added","Ok",(function(){e("/")})),n((0,b.$)(r))),l()},children:[(0,f.jsxs)("label",{htmlFor:p,children:[(0,f.jsx)("span",{children:"Name"}),(0,f.jsx)("input",{id:p,onChange:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:o})]}),(0,f.jsxs)("label",{htmlFor:g,children:[(0,f.jsx)("span",{children:"Number"}),(0,f.jsx)("input",{id:g,onChange:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:u})]}),(0,f.jsxs)(h.Z,{variant:"contained",size:"small",type:"submit",children:[" ","Add contact"]})]})},x=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Enter contact details:"}),(0,f.jsx)(g,{})]})}}}]);
//# sourceMappingURL=AddContact.b562ada5.chunk.js.map