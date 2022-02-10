"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[602],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={slug:"november-2020-milestone",title:"LoopBack 4 November 2020 Milestone Update",date:new Date("2020-12-08T00:00:00.000Z"),authors:"jannyhou",tags:["Community","LoopBack","Milestone Update"]},s=void 0,p={permalink:"/blog/november-2020-milestone",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020/2020-12-08-november-milestone.md",source:"@site/blog/2020/2020-12-08-november-milestone.md",title:"LoopBack 4 November 2020 Milestone Update",description:"Originally published on strongloop.com",date:"2020-12-08T00:00:00.000Z",formattedDate:"December 8, 2020",tags:[{label:"Community",permalink:"/blog/tags/community"},{label:"LoopBack",permalink:"/blog/tags/loop-back"},{label:"Milestone Update",permalink:"/blog/tags/milestone-update"}],readingTime:2.68,truncated:!0,authors:[{name:"Janny Hou",title:"LoopBack Maintainer",url:"https://github.com/jannyhou",imageURL:"https://avatars2.githubusercontent.com/u/12554153",key:"jannyhou"}],frontMatter:{slug:"november-2020-milestone",title:"LoopBack 4 November 2020 Milestone Update",date:"2020-12-08T00:00:00.000Z",authors:"jannyhou",tags:["Community","LoopBack","Milestone Update"]},prevItem:{title:"Welcome",permalink:"/blog/welcome"},nextItem:{title:"LoopBack 4 October 2020 Milestone Update",permalink:"/blog/october-2020-milestone"}},c={authorsImageUrls:[void 0]},u=[{value:"Context",id:"context",children:[],level:2},{value:"Documentation",id:"documentation",children:[],level:2},{value:"REST",id:"rest",children:[],level:2},{value:"Repository",id:"repository",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Enriching LoopBack and its Community - You are Invited!",id:"enriching-loopback-and-its-community---you-are-invited",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Originally published on strongloop.com")),(0,r.kt)("p",null,"Hope you had a wonderful Thanksgiving for those who celebrate it! In November, LoopBack team focused on improving the context module and documentation, as well as bug fixes. The Toronto squad participated in the ",(0,r.kt)("a",{parentName:"p",href:"https://www-01.ibm.com/ibm/cas/cascon/"},"CASCONxEVOKE")," conference. Instead of a physical booth, we held a virtual one online. We welcomed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nflaig"},"@nflaig")," as the new maintainer of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next"},(0,r.kt)("inlineCode",{parentName:"a"},"loopback-next")),"."),(0,r.kt)("p",null,"Read more to know about the highlighted improvements:"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A new phase ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," was added to the application life cycle events. It is used when a component need to contribute bindings asynchronously. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class MyComponent implements Component, LifeCycleObserver {\n  // ...\n  async init() {\n    // Contribute bindings via `init`\n    // This cannot be done via constructor since it's synchronous.\n    const val = await readFromConfig();\n    this.app.bind('abc').to(val);\n    this.status = 'initialized';\n    this.initialized = true;\n  }\n}\n")),(0,r.kt)("p",{parentName:"li"},"You can check the ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Component.html#component-life-cycle"},"Component")," page to learn about its usage.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"toInjectable()")," was introduced as a shortcut to decorate a common/provider/dynamic-value-factory class and automatically creating binding for them. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@injectable({scope: BindingScope.SINGLETON})\nclass MyController {\n  constructor(@inject('my-options') private options: MyOptions) {\n    // ...\n  }\n}\n\nbinding.toInjectable(MyController);\n")),(0,r.kt)("p",{parentName:"li"},"The decorator's usage is well documented on page ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Binding.html#an-injectable-class"},"Binding"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6701"},"#6701")," updated test cases to reflect how the design types of array/undefined/complex properties are retrieved.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Method injection is allowed for the lifecycle methods in PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6740"},"#6740"),". For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class MyObserverWithMethodInjection implements LifeCycleObserver {\n  status = 'not-initialized';\n  init(@inject('prefix') prefix: string) {\n    this.status = `${prefix}:initialized`;\n  }\n  start(@inject('prefix') prefix: string) {\n    this.status = `${prefix}:started`;\n  }\n  stop(@inject('prefix') prefix: string) {\n    this.status = `${prefix}:stopped`;\n  }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In some cases, your Express middleware wants to access LoopBack's RequestContext to resolve certain bindings. This can be done via ",(0,r.kt)("inlineCode",{parentName:"p"},"MIDDLEWARE_CONTEXT")," property of the Express request object, which is set up by LoopBack when the ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," is instantiated. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {MIDDLEWARE_CONTEXT, RequestContext} from '@loopback/rest';\nfunction expressHandler(req, res, next) {\n  const reqCtx = (req as any)[MIDDLEWARE_CONTEXT];\n  // Now you have access to the LoopBack RequestContext\n}\n")))),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The guide for calling REST APIs and SOAP services were separated to make the steps involved clearer. You can check the overview page ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Accessing-services.html"},"Accessing services")," and its sub-topics ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Calling-soap-web-services.html"},"Calling SOAP web services")," and ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Calling-rest-apis.html"},"Calling REST APIs")," for details.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For troubleshooting, we added steps for creating breakpoints in vscode in the ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Troubleshooting.html#creating-breakpoints"},"documentation"),". You can find more details in PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/6743"},"#6743"),". "))),(0,r.kt)("h2",{id:"rest"},"REST"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Matching a URL or hostname against a regular expression that contains an unescaped dot as part of the hostname might match more hostnames than expected. PR ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/6813"},"#6813")," updated the regular expression of hostnames accordingly.")),(0,r.kt)("h2",{id:"repository"},"Repository"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/6755"},"#6755")," threw 400 ",(0,r.kt)("inlineCode",{parentName:"li"},"BadRequestError")," for invalid inclusion relation name by rejecting the request with statusCode as 400.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PR ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/pull/6598"},"#6598")," updated artifacts of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/tree/master/examples/todo-list"},"todo-list")," example to the latest style generated by the LoopBack CLI.")),(0,r.kt)("h2",{id:"enriching-loopback-and-its-community---you-are-invited"},"Enriching LoopBack and its Community - You are Invited!"),(0,r.kt)("p",null,"As mentioned in our ",(0,r.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/2020-community-contribution/"},"recent blog post"),", your contribution is important to make LoopBack a sustainable open source project. "),(0,r.kt)("p",null,"Here is what you can do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw"},"Join LoopBack Slack community")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Look for first-contribution-friendly issues")),(0,r.kt)("li",{parentName:"ul"},"Give us feedback and join our discussion in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next"},"our GitHub repo"))),(0,r.kt)("p",null,"Let's make LoopBack a better framework together!"))}d.isMDXComponent=!0}}]);