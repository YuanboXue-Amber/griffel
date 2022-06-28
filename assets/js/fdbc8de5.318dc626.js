"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[96],{6325:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(2784),r=n(2600);const o="container_Knlc";const s=function(e){return a.createElement("div",{className:o},a.createElement(r.iC,null),a.createElement("span",null,e.children))}},85:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>m,default:()=>u});var a=n(7896),r=n(1461),o=(n(2784),n(876)),s=n(6325),l=["components"],i={sidebar_position:1},c="makeStyles",p={unversionedId:"react/api/make-styles",id:"react/api/make-styles",title:"makeStyles",description:"Is used to define styles, returns a React hook that should be called inside a component:",source:"@site/docs/react/api/make-styles.md",sourceDirName:"react/api",slug:"/react/api/make-styles",permalink:"/react/api/make-styles",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/api/make-styles.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reactSidebar",previous:{title:"Install",permalink:"/react/install"},next:{title:"mergeClasses",permalink:"/react/api/merge-classes"}},m=[{value:"Nesting selector",id:"nesting-selector",children:[],level:3},{value:"Pseudo-classes",id:"pseudo-classes",children:[],level:3},{value:"<code>:global()</code> selector",id:"global-selector",children:[],level:3},{value:"At-rules",id:"at-rules",children:[],level:3},{value:"<code>@keyframes</code> (animations)",id:"keyframes-animations",children:[],level:3},{value:"CSS Fallback Properties",id:"css-fallback-properties",children:[],level:3}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"makestyles"},"makeStyles"),(0,o.kt)("p",null,"Is used to define styles, returns ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"a React hook")," that should be called inside a component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  button: { color: 'red' },\n  icon: { paddingLeft: '5px' },\n});\n\nfunction Component() {\n  const classes = useClasses();\n\n  return (\n    <div>\n      <button className={classes.button} />\n      <span className={classes.icon} />\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"nesting-selector"},"Nesting selector"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Use with caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"One of the promises of Atomic CSS is reducing the amount of styles, however more selectors are created when nested."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"&")," character references the parent selector(s):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    '& .foo': { color: 'green' },\n    '&.bar': { color: 'red' },\n  },\n});\n")),(0,o.kt)(s.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".f15f830o .foo {\n  color: green;\n}\n.fns74iw.bar {\n  color: red;\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As in CSS spacing between ",(0,o.kt)("inlineCode",{parentName:"p"},"&")," and a selector matters, ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/whats-the-difference/"},"What\u2019s the Difference?")))),(0,o.kt)("h3",{id:"pseudo-classes"},"Pseudo-classes"),(0,o.kt)("p",null,"These rules are transformed to receive a nesting selector:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ':active': { color: 'pink' },\n    ':hover': { color: 'blue' },\n    // \ud83d\udca1 :link, :focus, etc. are also supported\n\n    ':nth-child(2n)': { backgroundColor: '#fafafa' },\n  },\n});\n")),(0,o.kt)(s.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".fqsesyh:active {\n  color: pink;\n}\n.f10q6zxg:hover {\n  color: blue;\n}\n.fnbrw4x:nth-child(2n) {\n  background-color: #fafafa;\n}\n")),(0,o.kt)("h3",{id:"global-selector"},(0,o.kt)("inlineCode",{parentName:"h3"},":global()")," selector"),(0,o.kt)("p",null,"Another useful feature is ",(0,o.kt)("inlineCode",{parentName:"p"},":global()")," selector, it associates local styles with global selectors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ':global(html[data-whatintent=\"mouse\"])': { backgroundColor: 'yellow' },\n  },\n});\n")),(0,o.kt)(s.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"html[data-whatintent='mouse'] .f1xz3i88 {\n  background-color: yellow;\n}\n")),(0,o.kt)("h3",{id:"at-rules"},"At-rules"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@media"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@supports")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"@layer")," queries are also supported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    '@media screen and (max-width: 992px)': { color: 'orange' },\n    '@supports (display: grid)': { color: 'red' },\n    '@layer utility': { marginBottom: '1em' }\n  },\n});\n")),(0,o.kt)(s.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@media screen and (max-width: 992px) {\n  .f5d6c3d {\n    color: orange;\n  }\n}\n@supports (display: grid) {\n  .f1ofq0jl {\n    color: red;\n  }\n}\n\n@layer utility {\n  .f2d3jla {\n    margin-bottom: 1em;\n  }\n}\n")),(0,o.kt)("h3",{id:"keyframes-animations"},(0,o.kt)("inlineCode",{parentName:"h3"},"@keyframes")," (animations)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"keyframes")," are supported via ",(0,o.kt)("inlineCode",{parentName:"p"},"animationName")," property that can be defined as an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    animationIterationCount: 'infinite',\n    animationDuration: '3s',\n    animationName: {\n      from: { transform: 'rotate(0deg)' },\n      to: { transform: 'rotate(360deg)' },\n    },\n  },\n});\n")),(0,o.kt)(s.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".f1cpbl36 {\n  animation-iteration-count: infinite;\n}\n.f1a27w2r {\n  animation-duration: 3s;\n}\n.f1g6ul6r {\n  animation-name: f1q8eu9e;\n}\n@keyframes f1q8eu9e {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"animationName")," can be also an array of styles objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  asArray: {\n    animationIterationCount: 'infinite',\n    animationDuration: '3s',\n    animationName: [\n      {\n        from: { transform: 'rotate(0deg)' },\n        to: { transform: 'rotate(360deg)' },\n      },\n      {\n        from: { height: '100px' },\n        to: { height: '200px' },\n      },\n    ],\n  },\n});\n")),(0,o.kt)("h3",{id:"css-fallback-properties"},"CSS Fallback Properties"),(0,o.kt)("p",null,"Griffel supports CSS fallback properties in order to support older browsers."),(0,o.kt)("p",null,"Any CSS property accepts an array of values which are all added to the styles.\nEvery browser will use the latest valid value (which might be a different one in different browsers, based on supported CSS in that browser): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    overflowY: ['scroll', 'overlay'],\n  },\n});\n")),(0,o.kt)(s.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".f1qdoogn{\n  overflow-y: scroll;  /* Fallback for browsers which do not support overflow: overlay */\n  overflow-y: overlay; /* Used by browsers which support overflow: overlay */\n}\n")))}u.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);