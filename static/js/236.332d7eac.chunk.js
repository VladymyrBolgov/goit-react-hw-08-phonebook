"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[236],{8236:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var n=t(2791),r=t(885),s=t(9434),l=t(6476),o=t(184),i={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},u=function(){var e=(0,s.I0)(),a=(0,n.useState)(""),t=(0,r.Z)(a,2),u=t[0],c=t[1],d=(0,n.useState)(""),m=(0,r.Z)(d,2),p=m[0],h=m[1],b=(0,n.useState)(""),f=(0,r.Z)(b,2),x=f[0],w=f[1],g=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"name":c(n);break;case"email":h(n);break;case"password":w(n);break;default:return}},y=function(){c(""),h(""),w("")};return(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:function(a){a.preventDefault(),console.log({name:u,email:p,password:x}),e(l.ZP.register({name:u,email:p,password:x})),y()},style:i.form,children:[(0,o.jsxs)("label",{style:i.label,children:["Username",(0,o.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:u,onChange:g,required:!0})]}),(0,o.jsxs)("label",{style:i.label,children:["Email",(0,o.jsx)("input",{type:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",value:p,onChange:g,required:!0})]}),(0,o.jsxs)("label",{style:i.label,children:["Password",(0,o.jsx)("input",{type:"password",name:"password",value:x,onChange:g,required:!0})]}),(0,o.jsx)("button",{type:"submit",children:"Register"})]})})},c=function(){return(0,o.jsx)(u,{})}}}]);
//# sourceMappingURL=236.332d7eac.chunk.js.map