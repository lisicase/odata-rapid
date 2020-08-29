(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(6),o=(r(0),r(85)),i={id:"graphql",title:"RAPID and GraphQL"},c={unversionedId:"related/graphql",id:"related/graphql",isDocsHomePage:!1,title:"RAPID and GraphQL",description:"RAPID and GraphQL both provide a means of describing and requesting data from a service that represents a graph of data.",source:"@site/..\\docs\\related\\rapd-pro-graphql.md",slug:"/related/graphql",permalink:"/docs/related/graphql",editUrl:"https://github.com/oasis-open/odata-rapid/edit/master/docs/../docs/related/rapd-pro-graphql.md",version:"current",sidebar:"docs",previous:{title:"RAPID and OData",permalink:"/docs/related/odata"},next:{title:"RAPID and OpenAPI",permalink:"/docs/related/openapi"}},p=[{value:"Schema Description",id:"schema-description",children:[]},{value:"Query Syntax",id:"query-syntax",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Use of HTTP",id:"use-of-http",children:[]}],s={rightToc:p};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RAPID and GraphQL both provide a means of describing and requesting data from a service that represents a graph of data."),Object(o.b)("h2",{id:"schema-description"},"Schema Description"),Object(o.b)("p",null,"In GraphQL, the schema of a service can be described through introspection."),Object(o.b)("p",null,"In RAPID, the schema of a service can be described through a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/spec/resourceformat"}),"request")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"$metadata")," endpoint of the service."),Object(o.b)("p",null,"GraphQL defines a simple syntax for defining the shape of a service."),Object(o.b)("h2",{id:"query-syntax"},"Query Syntax"),Object(o.b)("p",null,"In a GraphQL query, the developer describes the properties to be retrieved, and depth traversed, through a JSON-like structure."),Object(o.b)("p",null,"In a RAPID query, the developer describes the properties to be retrieved through a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rapid-read#selecting-individual-properties-of-a-resource"}),"projection"),",\nand the depth traversed through an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rapid-read#including-related-resources"}),"expansion")," operator."),Object(o.b)("h2",{id:"filter"},"Filter"),Object(o.b)("p",null,"GraphQL does not define predicates that can be applied to filter the membership of the result.\nInstead, GraphQL extensions such as OpenCRUD define use custom operations, defined in schema, to define each type of filter operation."),Object(o.b)("p",null,"While RAPID supports ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/operations#functions"}),"custom functions")," that may be used to encapsulate business logic or other predefined operations,\nit also defines a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rapid-read#filtering-results"}),"filter syntax")," that can be used to support dynamic queries against properties described by the service as queryable, providing a more flexible way for developers to interact with the data."),Object(o.b)("h2",{id:"use-of-http"},"Use of HTTP"),Object(o.b)("p",null,"GraphQL submits requests using HTTP POST, passing the query in the body of the request."),Object(o.b)("p",null,"RAPID builds on REST, using HTTP verbs to GET ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rapid-read"}),"(retrieve)"),", POST ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rapid-edit#creating-a-resource"}),"(create)"),", PATCH ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rapid-edit#updating-a-resource"}),"(update)"),", and DELETE ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/rapid-edit#deleting-a-resource"}),"(delete)")," data.\nBy making fuller use of HTTP, RAPID is able to leverage HTTP Caching and other built-in mechanisms."))}d.isMDXComponent=!0},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(r),b=a,h=l["".concat(i,".").concat(b)]||l[b]||u[b]||o;return r?n.a.createElement(h,c(c({ref:t},s),{},{components:r})):n.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);