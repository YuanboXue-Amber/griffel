"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[319],{9759:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var r=n(7896),a=n(1461),o=(n(2784),n(876)),s=["components"],i={sidebar_position:2},l="Limitations",p={unversionedId:"react/guides/limitations",id:"react/guides/limitations",title:"Limitations",description:"CSS shorthands are not supported",source:"@site/docs/react/guides/limitations.md",sourceDirName:"react/guides",slug:"/react/guides/limitations",permalink:"/react/guides/limitations",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/guides/limitations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reactSidebar",previous:{title:"Atomic CSS",permalink:"/react/guides/atomic-css"},next:{title:"Build time transforms",permalink:"/react/guides/build-time-transforms"}},c=[{value:"CSS shorthands are not supported",id:"css-shorthands-are-not-supported",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"limitations"},"Limitations"),(0,o.kt)("h2",{id:"css-shorthands-are-not-supported"},"CSS shorthands are not supported"),(0,o.kt)("p",null,"There are ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"},"shorthand and longhand properties")," in CSS. Shorthand properties allow to define a set of longhand properties. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* Define with multiple properties */\n.longhand-rule {\n  padding-top: 2px;\n  padding-right: 4px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n}\n\n/* Define with a single property */\n.shorthand-rule {\n  padding: 2px 4px 8px 16px;\n}\n")),(0,o.kt)("p",null,"Griffel relies on ",(0,o.kt)("a",{parentName:"p",href:"/react/guides/atomic-css"},"Atomic CSS")," and produces atomic classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \ud83d\udca1 makeStyles() generates hashed classes, but it's not important in this example */\n.a {\n  background-color: red;\n}\n.b {\n  background-color: green;\n}\n.c {\n  color: yellow;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Case 1: \u274c Wrong usage --\x3e\n<div class="a b c">Hello world!</div>\n\x3c!-- Case 2: \u2705 Correct usage --\x3e\n<div class="a c">Hello world!</div>\n<div class="b c">Hello world!</div>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In "Case 1" both classes are applied to an element: it\'s wrong as result is ',(0,o.kt)("strong",{parentName:"li"},"nondeterministic")," and depends on classes order in CSS definitions (i.e. ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/css-cascade-3/#cascade-order"},"order of appearance"),"), ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/css-insertion-order-matters-mgt6y"},"demo on CodeSandbox")),(0,o.kt)("li",{parentName:"ul"},'In "Case 2" only single classname per CSS property is applied, result will be deterministic')),(0,o.kt)("p",null,"This problem is solved by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/griffel/blob/main/packages/core/src/mergeClasses.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"mergeClasses()"))," function: it de-duplicates classes based on property name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u26a0 Simplified example\nfunction App() {\n  //                     \ud83d\udc47 skips \"a\", returns only \"b c\"\n  return <div className={mergeClasses('a', 'b', 'c')}>Hello world</div>;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only non colliding properties should be applied to DOM elements with Atomic CSS.")),(0,o.kt)("p",null,"This works well for longhands, but there are cases when longhands and shorthands are combined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u26a0 Not real code\nconst useClasses1 = makeStyles({\n  root: {\n    backgroundColor: 'red',\n    background: 'green',\n  },\n});\nconst useClasses2 = makeStyles({\n  root: {\n    background: 'green',\n    backgroundColor: 'red',\n  },\n});\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this example the problem is the same: both classes will be applied, result depends on the order of appearance."))),(0,o.kt)("p",null,"There is an option to expand CSS shorthands to longhands, but it's not reliable and does not work with static rules i.e. you can't expand rules with CSS variables without knowing their value. The single predictable solution is to disallow the usage of CSS shorthands."),(0,o.kt)("p",null,"You can get more information on the original RFC, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/fluentui/pull/20573"},"microsoft/fluentui#20573"),". For this reason Griffel disallows CSS shorthand properties in the input style object. Instead of shorthand properties, use ",(0,o.kt)("a",{parentName:"p",href:"/react/api/shorthands"},"shorthands helper functions")," which do the shorthand to longhand expansion statically."))}u.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);