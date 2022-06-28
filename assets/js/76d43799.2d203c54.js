"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[780],{5098:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(7896),a=r(1461),o=(r(2784),r(876)),i=["components"],s={sidebar_position:4},l="Server-Side Rendering",p={unversionedId:"react/guides/ssr-usage",id:"react/guides/ssr-usage",title:"Server-Side Rendering",description:"Griffel provides first class support for Server-Side Rendering.",source:"@site/docs/react/guides/ssr-usage.md",sourceDirName:"react/guides",slug:"/react/guides/ssr-usage",permalink:"/react/guides/ssr-usage",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/guides/ssr-usage.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reactSidebar",previous:{title:"Build time transforms",permalink:"/react/guides/build-time-transforms"},next:{title:"Child Window/Shadow DOM Rendering",permalink:"/react/guides/child-window-rendering"}},c=[{value:"Next.js",id:"nextjs",children:[{value:"Base setup",id:"base-setup",children:[],level:3},{value:"Configuring a project",id:"configuring-a-project",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"server-side-rendering"},"Server-Side Rendering"),(0,o.kt)("p",null,"Griffel provides first class support for Server-Side Rendering."),(0,o.kt)("h2",{id:"nextjs"},"Next.js"),(0,o.kt)("h3",{id:"base-setup"},"Base setup"),(0,o.kt)("p",null,"For basic instructions to setup Next.js, see ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},"Getting Started"),". Please complete following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get a basic Next.js setup running, rendering a page from the ",(0,o.kt)("inlineCode",{parentName:"li"},"pages")," folder, as guided by the tutorial."),(0,o.kt)("li",{parentName:"ol"},"Add the Griffel to dependencies (",(0,o.kt)("inlineCode",{parentName:"li"},"@griffel/react")," package), check ",(0,o.kt)("a",{parentName:"li",href:"/react/install"},"Install")," page.")),(0,o.kt)("p",null,"A complete demo project is available on ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/next-js-project-with-griffel-react-f22mwn"},"CodeSandbox"),"."),(0,o.kt)("h3",{id:"configuring-a-project"},"Configuring a project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"_document.js")," file under your ",(0,o.kt)("inlineCode",{parentName:"li"},"pages")," folder with the following content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// highlight-next-line\nimport { createDOMRenderer, renderToStyleElements } from '@griffel/react';\nimport Document, { Html, Head, Main, NextScript } from 'next/document';\n\nclass MyDocument extends Document {\n  static async getInitialProps(ctx) {\n    // highlight-start\n    // \ud83d\udc47 creates a renderer\n    const renderer = createDOMRenderer();\n    const originalRenderPage = ctx.renderPage;\n\n    ctx.renderPage = () =>\n      originalRenderPage({\n        enhanceApp: App => props => <App {...props} renderer={renderer} />,\n      });\n    // highlight-end\n\n    const initialProps = await Document.getInitialProps(ctx);\n    // highlight-start\n    const styles = renderToStyleElements(renderer);\n\n    return {\n      ...initialProps,\n      // \ud83d\udc47 adding our styles elements to output\n      styles: [...initialProps.styles, ...styles],\n    };\n    // highlight-end\n  }\n\n  render() {\n    return (\n      <Html>\n        <Head />\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n\nexport default MyDocument;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create or modify an ",(0,o.kt)("inlineCode",{parentName:"li"},"_app.js")," file under your ",(0,o.kt)("inlineCode",{parentName:"li"},"pages")," folder with the following content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createDOMRenderer, RendererProvider } from '@griffel/react';\n\nfunction MyApp({ Component, pageProps, renderer }) {\n  return (\n    // \ud83d\udc47 accepts a renderer passed from the <Document /> component or creates a default one\n    <RendererProvider renderer={renderer || createDOMRenderer()}>\n      <Component {...pageProps} />\n    </RendererProvider>\n  );\n}\n\nexport default MyApp;\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You should now be able to server render components with Griffel styles in any of your pages:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  button: { fontWeight: 'bold' },\n});\n\nexport default function Home() {\n  const classes = useClasses();\n\n  return <Button classeName={classes.button}>Hello world!</Button>;\n}\n")))}u.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);