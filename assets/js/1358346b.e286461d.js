"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[712],{3056:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>v,default:()=>k,frontMatter:()=>b,metadata:()=>y,toc:()=>h});var n=r(7896),a=r(1461),l=r(2784),o=r(876),i=r(6930),u=r(4499),s=r(6277);const c="tabItem_yrY8";function p(e){var t,r,a,o=e.lazy,i=e.block,p=e.defaultValue,f=e.values,m=e.groupId,d=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,l.useState)(h),T=O[0],E=O[1],x=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&E(j)}var P=function(e){var t=e.currentTarget,r=x.indexOf(t),n=v[r].value;n!==T&&(N(t),E(n),null!=m&&w(m,n))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},d)},v.map((function(e){var t=e.value,r=e.label,a=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,l.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,i.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}const m=function(e){var t=e.children,r=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:r,className:n},t)};var d=["components"],b={sidebar_position:1},v="Install",y={unversionedId:"react/install",id:"react/install",title:"Install",description:"By default Griffel is a runtime css-in-js engine, you can simply install and use it in code directly:",source:"@site/docs/react/install.mdx",sourceDirName:"react",slug:"/react/install",permalink:"/react/install",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reactSidebar",next:{title:"makeStyles",permalink:"/react/api/make-styles"}},h=[],g={toc:h};function k(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install"},"Install"),(0,o.kt)("p",null,"By default Griffel is a runtime css-in-js engine, you can simply install and use it in code directly:"),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(m,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @griffel/react\n"))),(0,o.kt)(m,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @griffel/react\n")))),(0,o.kt)("p",null,"For quick start you can use ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/griffel-react-template-p5e8mh"},"CodeSandbox template")," or check our ",(0,o.kt)("a",{parentName:"p",href:"/try-it-out"},"try it out feature"),"."))}k.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);