(this["webpackJsonpprop-it-up"]=this["webpackJsonpprop-it-up"]||[]).push([[0],{25:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(0),r=c.n(o),s=c(18),l=c.n(s),a=(c(25),c(3)),i=(c(7),c(4)),u=c.n(i),d=c(5),b=function(e){var t=Object(o.useState)([]),c=Object(a.a)(t,2),r=c[0],s=c[1],l=Object(o.useState)(""),i=Object(a.a)(l,2),b=i[0],j=i[1],m=Object(o.useState)(10),h=Object(a.a)(m,2),p=h[0],O=h[1],f=Object(o.useState)(""),x=Object(a.a)(f,2),g=x[0],v=x[1];function N(){u.a.get("http://localhost:8000/api/products").then((function(e){console.log(e),s(e.data)})).catch((function(e){return console.error(e)}))}Object(o.useEffect)((function(){N()}),[]);return Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsxs)("form",{className:"centered align-center",onSubmit:function(e){u.a.post("http://localhost:8000/api/products/new",{title:b,price:p,description:g}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:[Object(n.jsx)("h1",{className:"mb-3",children:"Product Manager"}),Object(n.jsx)("div",{className:"form-group row  ml-3 rounded border col-sm-4 bg-light",children:Object(n.jsxs)("label",{className:"col-sm-12 col-form-label text-muted",children:["Title",Object(n.jsx)("input",{type:"text",className:"ml-3 rounded border ",onChange:function(e){return j(e.target.value)},value:b})]})}),Object(n.jsx)("div",{className:"form-group row  ml-3 rounded border col-sm-4 bg-light",children:Object(n.jsxs)("label",{className:"col-sm-12 col-form-label text-muted",children:["Price",Object(n.jsx)("input",{type:"number",min:"10",className:"ml-3 rounded border ",onChange:function(e){return O(e.target.value)},value:p})]})}),Object(n.jsx)("div",{className:"form-group row  ml-3 rounded border  col-sm-4 bg-light",children:Object(n.jsxs)("label",{className:"col-sm-12 col-form-label text-muted",children:["Description",Object(n.jsx)("input",{type:"text",className:"ml-3 rounded border ",onChange:function(e){return v(e.target.value)},value:g})]})}),Object(n.jsx)("input",{type:"submit",value:"Create",className:"btn btn-info"})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsxs)("ul",{className:"text-center list-group list-group-flush",children:[Object(n.jsx)("h1",{children:"All Products:"}),r.map((function(e){return Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)(d.a,{to:"/view/".concat(e._id),className:"text-dark",children:e.title}),Object(n.jsx)(d.a,{to:"/edit/".concat(e._id),className:"btn btn-outline-info btn-sm ml-2",children:"Edit"}),Object(n.jsx)("button",{className:"btn btn-outline-danger btn-sm ml-2",onClick:function(t){return c=e._id,void u.a.delete("http://localhost:8000/api/products/"+c).then((function(e){console.log(e),N()})).catch((function(e){return console.error(e)}));var c},children:"Remove"})]},e._id)}))]})})]})},j=function(e){var t=Object(o.useState)({}),c=Object(a.a)(t,2),r=c[0],s=c[1];return Object(o.useEffect)((function(){console.log(e._id),u.a.get("http://localhost:8000/api/products/"+e._id).then((function(e){console.log(e),s(e.data.product),console.log(e.data.product)})).catch((function(e){return console.error(e)}))}),[e._id]),Object(n.jsx)("div",{className:"container mt-5",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{class:"card",children:Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h4",{children:r.title}),Object(n.jsxs)("p",{children:["Price: ",r.price]}),Object(n.jsxs)("p",{children:["Description: ",r.description]})]})})})})},m=function(e){var t=Object(o.useState)(""),c=Object(a.a)(t,2),r=c[0],s=c[1],l=Object(o.useState)(10),i=Object(a.a)(l,2),b=i[0],j=i[1],m=Object(o.useState)(""),h=Object(a.a)(m,2),p=h[0],O=h[1];Object(o.useEffect)((function(){console.log(e._id),u.a.get("http://localhost:8000/api/products/"+e._id).then((function(e){console.log(e),s(e.data.product.title),j(e.data.product.price),O(e.data.product.description)})).catch((function(e){return console.error(e)}))}),[e._id]);return Object(n.jsx)("div",{className:"container mt-5 ",children:Object(n.jsxs)("form",{className:"centered align-center",onSubmit:function(t){t.preventDefault();var c={title:r,price:b,description:p};u.a.put("http://localhost:8000/api/products/"+e._id,c).then((function(e){console.log(e),Object(d.c)("/")})).catch((function(e){console.error(e)}))},children:[Object(n.jsx)("h1",{className:"mb-3",children:"Update"}),Object(n.jsx)("div",{className:"form-group row  ml-3 rounded border col-sm-4 bg-light",children:Object(n.jsxs)("label",{className:"col-sm-12 col-form-label text-muted",children:["Title",Object(n.jsx)("input",{type:"text",className:"ml-3 rounded border ",onChange:function(e){return s(e.target.value)},value:r})]})}),Object(n.jsx)("div",{className:"form-group row  ml-3 rounded border col-sm-4 bg-light",children:Object(n.jsxs)("label",{className:"col-sm-12 col-form-label text-muted",children:["Price",Object(n.jsx)("input",{type:"number",min:"10",className:"ml-3 rounded border ",onChange:function(e){return j(e.target.value)},value:b})]})}),Object(n.jsx)("div",{className:"form-group row  ml-3 rounded border  col-sm-4 bg-light",children:Object(n.jsxs)("label",{className:"col-sm-12 col-form-label text-muted",children:["Description",Object(n.jsx)("input",{type:"text",className:"ml-3 rounded border ",onChange:function(e){return O(e.target.value)},value:p})]})}),Object(n.jsx)("input",{type:"submit",value:"Update Product",className:"btn btn-info"})]})})};var h=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(d.b,{children:[Object(n.jsx)(b,{path:"/"}),Object(n.jsx)(j,{path:"/view/:_id"}),Object(n.jsx)(m,{path:"/edit/:_id"})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),o(e),r(e),s(e)}))};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),p()}},[[49,1,2]]]);
//# sourceMappingURL=main.e94611ad.chunk.js.map