"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[542],{7095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=r(7896),i=r(1461),o=(r(2784),r(876)),d=(r(465),["components"]),s={sidebar_position:5},a="Child Window",c={unversionedId:"react/guides/child-window-rendering",id:"react/guides/child-window-rendering",title:"Child Window",description:"When rendering in the main browser window, many components will need access to window or document to apply styles, listening for events, or measuring things. However it is possible to render to child windows and elements hosted in iframes. The same technique can be used to render styles in Shadow DOM.",source:"@site/docs/react/guides/child-window-rendering.md",sourceDirName:"react/guides",slug:"/react/guides/child-window-rendering",permalink:"/react/guides/child-window-rendering",draft:!1,editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/guides/child-window-rendering.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"reactSidebar",previous:{title:"Server-Side Rendering",permalink:"/react/guides/ssr-usage"},next:{title:"Introduction",permalink:"/react/ahead-of-time-compilation/introduction"}},l={},u=[{value:"Configure rendering",id:"configure-rendering",level:2}],m={toc:u};function p(e){var n=e.components,r=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"child-window"},"Child Window"),(0,o.kt)("p",null,"When rendering in the main browser window, many components will need access to window or document to apply styles, listening for events, or measuring things. However it is possible to render to child windows and elements hosted in iframes. The same technique can be used to render styles in Shadow DOM."),(0,o.kt)("h2",{id:"configure-rendering"},"Configure rendering"),(0,o.kt)("p",null,"We need to configure a renderer for ",(0,o.kt)("inlineCode",{parentName:"p"},"makeStyles()")," and pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"targetDocument")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"RendererProvider"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createDOMRenderer, RendererProvider } from '@griffel/react';\nimport React from 'react';\n\nfunction MyComponent(props) {\n  const { children, targetDocument } = props;\n  const renderer = React.useMemo(() => createDOMRenderer(targetDocument), [targetDocument]);\n\n  return (\n    <RendererProvider renderer={renderer} targetDocument={targetDocument}>\n      {children}\n    </RendererProvider>\n  );\n}\n")),(0,o.kt)("p",null,"You can check out the complete example in ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/griffel-react-rendering-into-iframe-btezpu"},"CodeSandbox"),"."))}p.isMDXComponent=!0}}]);