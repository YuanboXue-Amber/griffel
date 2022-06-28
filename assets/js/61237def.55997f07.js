"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[542],{7095:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>u});var t=n(7896),i=n(1461),o=(n(2784),n(876)),a=["components"],d={sidebar_position:5},c="Child Window/Shadow DOM Rendering",s={unversionedId:"react/guides/child-window-rendering",id:"react/guides/child-window-rendering",title:"Child Window/Shadow DOM Rendering",description:"When rendering in the main browser window, many components will need access to window or document to apply styles, listening for events, or measuring things. However it is possible to render to child windows and elements hosted in iframes.",source:"@site/docs/react/guides/child-window-rendering.md",sourceDirName:"react/guides",slug:"/react/guides/child-window-rendering",permalink:"/react/guides/child-window-rendering",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/guides/child-window-rendering.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"reactSidebar",previous:{title:"Server-Side Rendering",permalink:"/react/guides/ssr-usage"}},l=[{value:"Configure rendering",id:"configure-rendering",children:[],level:2}],p={toc:l};function u(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"child-windowshadow-dom-rendering"},"Child Window/Shadow DOM Rendering"),(0,o.kt)("p",null,"When rendering in the main browser window, many components will need access to window or document to apply styles, listening for events, or measuring things. However it is possible to render to child windows and elements hosted in iframes."),(0,o.kt)("h2",{id:"configure-rendering"},"Configure rendering"),(0,o.kt)("p",null,"We need to configure a renderer for ",(0,o.kt)("inlineCode",{parentName:"p"},"makeStyles()")," and pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"targetDocument")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"RendererProvider"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createDOMRenderer, RendererProvider } from '@griffel/react';\nimport React from 'react';\n\nfunction MyComponent(props) {\n  const { children, targetDocument } = props;\n  const renderer = React.useMemo(() => createDOMRenderer(targetDocument), [targetDocument]);\n\n  return (\n    <RendererProvider renderer={renderer} targetDocument={targetDocument}>\n      {children}\n    </RendererProvider>\n  );\n}\n")),(0,o.kt)("p",null,"You can check out the complete example in ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/griffel-react-rendering-into-iframe-btezpu"},"CodeSandbox"),"."))}u.isMDXComponent=!0},876:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(2784);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?t.createElement(g,a(a({ref:r},l),{},{components:n})):t.createElement(g,a({ref:r},l))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);