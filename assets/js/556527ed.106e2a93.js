"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[850],{7184:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/my-test-blog/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021/2021-08-26-welcome/index.md","source":"@site/blog/2021/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/my-test-blog/blog/tags/facebook"},{"label":"hello","permalink":"/my-test-blog/blog/tags/hello"},{"label":"docusaurus","permalink":"/my-test-blog/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"Diana Lau","title":"LoopBack Maintainer","url":"https://github.com/dhmlau","imageURL":"https://avatars2.githubusercontent.com/u/25489897","key":"dhmlau"},{"name":"Raymond Feng","title":"LoopBack Maintainer","url":"https://github.com/raymondfeng","imageURL":"https://avatars0.githubusercontent.com/u/540892","key":"raymondfeng"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["dhmlau","raymondfeng"],"tags":["facebook","hello","docusaurus"]},"nextItem":{"title":"LoopBack 4 November 2020 Milestone Update","permalink":"/my-test-blog/blog/november-2020-milestone"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"november-2020-milestone","metadata":{"permalink":"/my-test-blog/blog/november-2020-milestone","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020/2020-12-08-november-milestone.md","source":"@site/blog/2020/2020-12-08-november-milestone.md","title":"LoopBack 4 November 2020 Milestone Update","description":"Originally published on strongloop.com","date":"2020-12-08T00:00:00.000Z","formattedDate":"December 8, 2020","tags":[{"label":"Community","permalink":"/my-test-blog/blog/tags/community"},{"label":"LoopBack","permalink":"/my-test-blog/blog/tags/loop-back"},{"label":"Milestone Update","permalink":"/my-test-blog/blog/tags/milestone-update"}],"readingTime":2.68,"truncated":true,"authors":[{"name":"Janny Hou","title":"LoopBack Maintainer","url":"https://github.com/jannyhou","imageURL":"https://avatars2.githubusercontent.com/u/12554153","key":"jannyhou"}],"frontMatter":{"slug":"november-2020-milestone","title":"LoopBack 4 November 2020 Milestone Update","date":"2020-12-08T00:00:00.000Z","authors":"jannyhou","tags":["Community","LoopBack","Milestone Update"]},"prevItem":{"title":"Welcome","permalink":"/my-test-blog/blog/welcome"},"nextItem":{"title":"LoopBack 4 October 2020 Milestone Update","permalink":"/my-test-blog/blog/october-2020-milestone"}},"content":"_Originally published on strongloop.com_\\n\\n\\nHope you had a wonderful Thanksgiving for those who celebrate it! In November, LoopBack team focused on improving the context module and documentation, as well as bug fixes. The Toronto squad participated in the [CASCONxEVOKE](https://www-01.ibm.com/ibm/cas/cascon/) conference. Instead of a physical booth, we held a virtual one online. We welcomed [@nflaig](https://github.com/nflaig) as the new maintainer of [`loopback-next`](https://github.com/strongloop/loopback-next).\\n\\nRead more to know about the highlighted improvements:\\n\\n\x3c!--truncate--\x3e\\n\\n## Context\\n\\n- A new phase `init()` was added to the application life cycle events. It is used when a component need to contribute bindings asynchronously. For example:\\n\\n  ```ts\\n  export class MyComponent implements Component, LifeCycleObserver {\\n    // ...\\n    async init() {\\n      // Contribute bindings via `init`\\n      // This cannot be done via constructor since it\'s synchronous.\\n      const val = await readFromConfig();\\n      this.app.bind(\'abc\').to(val);\\n      this.status = \'initialized\';\\n      this.initialized = true;\\n    }\\n  }\\n  ```\\n  You can check the [Component](https://loopback.io/doc/en/lb4/Component.html#component-life-cycle) page to learn about its usage.\\n\\n- `toInjectable()` was introduced as a shortcut to decorate a common/provider/dynamic-value-factory class and automatically creating binding for them. For example:\\n  ```ts\\n  @injectable({scope: BindingScope.SINGLETON})\\n  class MyController {\\n    constructor(@inject(\'my-options\') private options: MyOptions) {\\n      // ...\\n    }\\n  }\\n\\n  binding.toInjectable(MyController);\\n  ```\\n  The decorator\'s usage is well documented on page [Binding](https://loopback.io/doc/en/lb4/Binding.html#an-injectable-class).\\n\\n- PR [#6701](https://github.com/strongloop/loopback-next/pull/6701) updated test cases to reflect how the design types of array/undefined/complex properties are retrieved.\\n\\n- Method injection is allowed for the lifecycle methods in PR [#6740](https://github.com/strongloop/loopback-next/pull/6740). For example:\\n\\n  ```ts\\n  class MyObserverWithMethodInjection implements LifeCycleObserver {\\n    status = \'not-initialized\';\\n    init(@inject(\'prefix\') prefix: string) {\\n      this.status = `${prefix}:initialized`;\\n    }\\n    start(@inject(\'prefix\') prefix: string) {\\n      this.status = `${prefix}:started`;\\n    }\\n    stop(@inject(\'prefix\') prefix: string) {\\n      this.status = `${prefix}:stopped`;\\n    }\\n  }\\n  ```\\n\\n- In some cases, your Express middleware wants to access LoopBack\'s RequestContext to resolve certain bindings. This can be done via `MIDDLEWARE_CONTEXT` property of the Express request object, which is set up by LoopBack when the `RequestContext` is instantiated. For example:\\n\\n  ```ts\\n  import {MIDDLEWARE_CONTEXT, RequestContext} from \'@loopback/rest\';\\n  function expressHandler(req, res, next) {\\n    const reqCtx = (req as any)[MIDDLEWARE_CONTEXT];\\n    // Now you have access to the LoopBack RequestContext\\n  }\\n  ```\\n\\n## Documentation\\n\\n- The guide for calling REST APIs and SOAP services were separated to make the steps involved clearer. You can check the overview page [Accessing services](https://loopback.io/doc/en/lb4/Accessing-services.html) and its sub-topics [Calling SOAP web services](https://loopback.io/doc/en/lb4/Calling-soap-web-services.html) and [Calling REST APIs](https://loopback.io/doc/en/lb4/Calling-rest-apis.html) for details.\\n\\n- For troubleshooting, we added steps for creating breakpoints in vscode in the [documentation](https://loopback.io/doc/en/lb4/Troubleshooting.html#creating-breakpoints). You can find more details in PR [#6743](https://github.com/strongloop/loopback-next/pull/6743). \\n\\n## REST\\n\\n- Matching a URL or hostname against a regular expression that contains an unescaped dot as part of the hostname might match more hostnames than expected. PR [#6813](https://github.com/strongloop/loopback-next/pull/6813) updated the regular expression of hostnames accordingly.\\n\\n## Repository\\n\\n- [#6755](https://github.com/strongloop/loopback-next/pull/6755) threw 400 `BadRequestError` for invalid inclusion relation name by rejecting the request with statusCode as 400.\\n\\n## Examples\\n\\n- PR [#6598](https://github.com/strongloop/loopback-next/pull/6598) updated artifacts of the [todo-list](https://github.com/strongloop/loopback-next/tree/master/examples/todo-list) example to the latest style generated by the LoopBack CLI.\\n\\n## Enriching LoopBack and its Community - You are Invited!\\n\\nAs mentioned in our [recent blog post](https://strongloop.com/strongblog/2020-community-contribution/), your contribution is important to make LoopBack a sustainable open source project. \\n\\nHere is what you can do:\\n- [Join LoopBack Slack community](https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw)\\n- [Look for first-contribution-friendly issues](https://github.com/strongloop/loopback-next/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)\\n- Give us feedback and join our discussion in [our GitHub repo](https://github.com/strongloop/loopback-next)\\n\\nLet\'s make LoopBack a better framework together!"},{"id":"october-2020-milestone","metadata":{"permalink":"/my-test-blog/blog/october-2020-milestone","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020/2020-11-05-october-milestone.md","source":"@site/blog/2020/2020-11-05-october-milestone.md","title":"LoopBack 4 October 2020 Milestone Update","description":"Originally published on strongloop.com","date":"2020-11-05T00:00:00.000Z","formattedDate":"November 5, 2020","tags":[{"label":"Community","permalink":"/my-test-blog/blog/tags/community"},{"label":"LoopBack","permalink":"/my-test-blog/blog/tags/loop-back"}],"readingTime":2.9,"truncated":true,"authors":[{"name":"Janny Hou","title":"LoopBack Maintainer","url":"https://github.com/jannyhou","imageURL":"https://avatars2.githubusercontent.com/u/12554153","key":"jannyhou"}],"frontMatter":{"title":"LoopBack 4 October 2020 Milestone Update","date":"2020-11-05T00:00:00.000Z","authors":"jannyhou","slug":"october-2020-milestone","tags":["Community","LoopBack"]},"prevItem":{"title":"LoopBack 4 November 2020 Milestone Update","permalink":"/my-test-blog/blog/november-2020-milestone"},"nextItem":{"title":"Community Q&A Monthly Digest - Oct 2020","permalink":"/my-test-blog/blog/2020-oct-slack-qa"}},"content":"_Originally published on strongloop.com_\\n\\nIn October, we were excited to see an increasing number of community contributions as people joined the [Hacktoberfest](https://strongloop.com/strongblog/2020-hacktoberfest/) event. This month we had pretty balanced improvements in each area of the framework, including context, health check, OpenAPI specification and documentations. Keep reading to learn about the recently added features!\\n\\n\x3c!--truncate--\x3e\\n\\nWe welcomed [@mrmodise](https://github.com/mrmodise) as the maintainer of [`loopback4-shopping-example`](https://github.com/strongloop/loopback4-example-shopping). And we\'d like to thank everyone [@nflaig](https://github.com/nflaig), [@MattiaPrimavera](https://github.com/MattiaPrimavera), [@mdbetancourt](https://github.com/mdbetancourt), [@mrmodise](https://github.com/mrmodise), [@frbuceta](https://github.com/frbuceta), [@HrithikMittal](https://github.com/HrithikMittal), [@simlt](https://github.com/simlt), [@hectorleiva](https://github.com/hectorleiva), [@pktippa](https://github.com/pktippa), [@VergilSkye](https://github.com/VergilSkye), [@kerolloz](https://github.com/kerolloz), [@arondn2](https://github.com/arondn2), [@mayank-SFIN571](https://github.com/mayank-SFIN571) for your contributions in October!\\n\\nHere are the highlighted improvements:\\n\\n## Context\\n\\n- A set of fine-grained scopes `APPLICATION`, `SERVER` and `REQUEST` has been introduced to allow better\\nscoping of binding resolutions. The limitation of the previous scopes is explained in section [choose the right scope](https://loopback.io/doc/en/lb4/Binding.html#choose-the-right-scope), and section [resolve a binding value by key and scope within a context hierarchy](https://loopback.io/doc/en/lb4/Binding.html#resolve-a-binding-value-by-key-and-scope-within-a-context-hierarchy) explains how different scopes determine the binding resolutions.\\n\\n## REST\\n\\n- Allowed array query parameter for a single value, like `{tags: \'hello\'}` where parameter `tags` is a string array. See PR [#6542](https://github.com/strongloop/loopback-next/pull/6542).\\n\\n- Supported property level configuration for hidden fields, like `@property({type: \'string\', hidden: true}) password: string`. This is the shortcut for specifying the hidden properties in model settings. See PR [#6484](https://github.com/strongloop/loopback-next/pull/6484).\\n\\n- `save()` method throwing error due to missing `idName` is fixed in PR [#6640](https://github.com/strongloop/loopback-next/pull/6640).\\n\\n- `modifySpec()` turns to an async function to allow async spec updates. See PR [#6655](https://github.com/strongloop/loopback-next/pull/6655).\\n\\n## Build\\n\\n- A force clean rebuild was added to the pre-start script for the LoopBack 4 examples. You can run `npm start` after removing artifacts without manually cleaning the `/dist` files. See PR [#6588](https://github.com/strongloop/loopback-next/pull/6588).\\n\\n- Turned on `exit` for mocha tests for the created LoopBack applications. See PR [#6475](https://github.com/strongloop/loopback-next/pull/6475).\\n\\n## Extensions\\n\\n- Module [@loopback/socketio](https://github.com/strongloop/loopback-next/tree/master/extensions/socketio) was added to use socket.io to expose controllers as WebSocket friendly endpoints.\\n\\n- Enable/disable the metrics endpoints in explorer when mounting the metric and health extensions. See PR [#6646](https://github.com/strongloop/loopback-next/pull/6646) and PR [#6645](https://github.com/strongloop/loopback-next/pull/6645).\\n\\n- Only add `MetricsObserver`, `MetricsPushObserver` and expose `/metrics` endpoints when they are enabled. See PR [#6644](https://github.com/strongloop/loopback-next/pull/6644).\\n\\n- The health check for applications running in container now returns a more accurate HTTP status code based on the state. For example, checking `/health` for application in states \'STARTING\', \'STOPPING\' or \'STOPPED\' returns 503. You can find more details in PR [#6648](https://github.com/strongloop/loopback-next/pull/6648).\\n\\n## Documentation Restructure\\n\\n- LoopBack 4 targets both API developers and extension developers, while the current website doesn\'t distinguish them clearly. This month we restructured the sidebar to classify the documentation into two parts: \\"Building LoopBack Applications\\" and \\"Extending LoopBack Framework\\". You can check [https://loopback.io/doc/en/lb4/Customizing-server-configuration.html](https://loopback.io/doc/en/lb4/Customizing-server-configuration.html) to view the new layout.\\n\\n- The instructions for implementing HTTP redirects and mounting an Express router are extracted into a standalone page under \\"How-to guides\\". You can check [https://loopback.io/doc/en/lb4/Customizing-routes.html](https://loopback.io/doc/en/lb4/Customizing-routes.html) to view the content.\\n\\n- Moved server recipes to how-to guides [Customizing-server-configuration](https://loopback.io/doc/en/lb4/Customizing-server-configuration.html). See PR [#6663](https://github.com/strongloop/loopback-next/pull/6663).\\n\\n## Examples\\n\\nTwo examples were added last month:\\n\\n- Example [webpack](https://github.com/strongloop/loopback-next/tree/master/examples/webpack) was added to demo LoopBack running inside the browser as client-side JavaScript application.\\n\\n- Example [socketio](https://github.com/strongloop/loopback-next/tree/master/examples/socketio) gives a basic implementation of socketio with LoopBack 4.\\n\\nYou can also download the examples by using the `lb4 example` command.\\n\\n## Enriching LoopBack and its Community - You are Invited!\\n\\nAs mentioned in our [recent blog post](https://strongloop.com/strongblog/2020-community-contribution/), your contribution is important to make LoopBack a sustainable open source project. \\n\\nHere is what you can do:\\n- [Join LoopBack Slack community](https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw)\\n- [Look for first-contribution-friendly issues](https://github.com/strongloop/loopback-next/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)\\n- Give us feedback and join our discussion in [our GitHub repo](https://github.com/strongloop/loopback-next)\\n\\nLet\'s make LoopBack a better framework together!"},{"id":"2020-oct-slack-qa","metadata":{"permalink":"/my-test-blog/blog/2020-oct-slack-qa","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020/2020-10-28-oct-slack-qanda.md","source":"@site/blog/2020/2020-10-28-oct-slack-qanda.md","title":"Community Q&A Monthly Digest - Oct 2020","description":"Originally published on strongloop.com","date":"2020-10-28T00:00:00.000Z","formattedDate":"October 28, 2020","tags":[{"label":"LoopBack","permalink":"/my-test-blog/blog/tags/loop-back"},{"label":"Community","permalink":"/my-test-blog/blog/tags/community"}],"readingTime":3.415,"truncated":true,"authors":[{"name":"dhmlau"}],"frontMatter":{"title":"Community Q&A Monthly Digest - Oct 2020","date":"2020-10-28T00:00:00.000Z","author":"dhmlau","slug":"2020-oct-slack-qa","tags":["LoopBack","Community"]},"prevItem":{"title":"LoopBack 4 October 2020 Milestone Update","permalink":"/my-test-blog/blog/october-2020-milestone"}},"content":"_Originally published on strongloop.com_\\n\\nIt\'s been 6 months since we created the [Slack channel](https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw) for LoopBack community. Thanks to your support, over 500 members had joined and new members are joining almost everyday! Let\'s take a look at the October edition of the \u201cCommunity Q&A Monthly Digest\u201d, capturing some of the Q&A in this forum. \\n\\n\x3c!--truncate--\x3e\\n\\n---\\n\\n**Question:** How to get the raw request in LoopBack 4 in a function without changing the parsing for the entire app?\\n\\n**Answer:** \\nIt\'s possible to get the raw request body with `x-parser`: [https://loopback.io/doc/en/lb4/Parsing-requests.html#extend-request-body-parsing](https://loopback.io/doc/en/lb4/Parsing-requests.html#extend-request-body-parsing). \\n-- _Answered by @Rifa Achrinza_\\n\\n--- \\n\\n**Question:** Is there any solution for tracking database migration, for example, migrations has been already run and possible rollback of migration? \\n\\n**Answer:**\\nI created a module which tracks migrations and executes scripts based on the db version compared to the app version, see [https://www.npmjs.com/package/loopback4-migration](https://www.npmjs.com/package/loopback4-migration). \\n--_Answered by @nflaig_\\n\\n\\nIdeally, LoopBack generates the DDL for users to review, and then it\u2019s up to the users to run it or not. It\'s a feature to be implemented, see [https://github.com/strongloop/loopback-next/issues/4757](https://github.com/strongloop/loopback-next/issues/4757).\\n--_Answered by @Diana Lau_\\n\\n\\n--- \\n\\n**Question:** I want to check whether a specified `categoryId` exists in a Mongo datasource, how can I do that? For example,\\n\\n```json\\n{\\"categories\\" : [\\n    {\\n        \\"categoryId\\" : \\"e759c15e-3552-4557-aa6b-c1396674c7e6\\",\\n        \\"name\\" : \\"test\\"\\n    },\\n    {\\n        \\"categoryId\\" : \\"e759c15e-3552-4557-aa6b-c1396674c7e5\\",\\n        \\"name\\" : \\"test1\\"\\n    }\\n]}\\n```\\n\\nI tried `await this.usersRepository.find({\'categories.categoryId\': \'e759c15e-3552-4557-aa6b-c1396674c7e5\'});` but getting an error message below:\\n```\\n> { \'categories.categoryId\': string; }\' is not assignable to parameter of type \'Filter<Users>\'. Object literal may only specify known properties, and \'\'categories.categoryId\'\' does not exist in type \'Filter<Users>\'\\n```\\n\\n**Answer:** \\nThe object you pass into `.find()` needs to be a `Filter` object. Make sure you `import { Filter } from \'@loopback/repository\';`, then you can: \\n```ts\\nconst existingCategoryFilter: Filter = {\\n  //...filter properties in here...\\n};\\nlet existingCategories = await this.categoryRepository.find(existingCategoryFilter);\\n```\\n-- Answered by @Jackson Hyde\\n\\nTo add on what @Jackson Hyde has mentioned, due to limitations on TypeScript types, nested objects are not included in the typings. Hence, you\'ll also need to override TypeScript\'s check by adding `// @ts-ignore` just before the repository function.\\n-- Answered by @Rifa Achrinza\\n\\n--- \\n\\n**Question:** I want to implement JWT refresh token in LoopBack 4. Can you suggest any good tutorial?\\n\\n**Answer:** You can follow this [https://loopback.io/doc/en/lb4/JWT-authentication-extension.html](https://loopback.io/doc/en/lb4/JWT-authentication-extension.html). \\n--_Answered by @Pratik Jaiswal_\\n\\n--- \\n\\n\\n**Question:** I used LoopBack CLI to create a \\"SHIPPING\\" model but it tries to do lowercase \\"Shipping\\" in the SQL with the quotes. An error occurred in the SQL statement because it is case sensitive with the quotes around it. How can I fix this? I\'m on LoopBack 4 and using the `loopback-connector-ibmi`.\\n\\n**Answer:**\\nDid u try to give the name in your model?\\n```ts\\n@model({name: \'member_membership\'})\\nexport class MemberMembership extends Entity {\\n    //...\\n}\\n```\\nSo `member_membership` is the table in the database.\\n-- Answered by @Mohammed\\n\\nThe `name` property customizes the model name, which is default to the class name if not provided. The model name is then used as the default for table name unless you further customize it for specific databases.\\n-- Answered by @Raymond Feng\\n\\n\\n--- \\n**Question:** I have a CORS issue with `passport-login` example when trying to establish connection with Google using Angular Frontend. I keep getting CORS error:\\n> Access to XMLHttpRequest at \'https://accounts.google.com/o/oauth2/v2/auth?...\' (redirected from \'http://localhost:3000/api/auth/thirdparty/google\') from origin \'http://localhost:4200\' has been blocked by CORS policy: Response to preflight request doesn\'t pass access control check: No \'Access-Control-Allow-Origin\' header is present on the requested resource.\\"\\n\\nBut the application is working fine with jade.\\n\\n**Answer:**\\nIn your login component you could do something like:\\n```ts\\nOAUTH2_LINK_GOOGLE = this.api_url+\'/api/auth/thirdparty/google?redirect_uri=\' + this.redir_url\\n  onGoogleSignIn() {\\n    window.location.href = this.OAUTH2_LINK_GOOGLE;\\n  }\\n```\\nBind the Google link to the above in the HTML code.\\n\\n-- Answered by @marg330\\n\\n---\\n\\n\\n## Enriching LoopBack and its Community - You are Invited!\\n\\nAs mentioned in our [recent blog post](https://strongloop.com/strongblog/2020-community-contribution/), your contribution is important to make LoopBack a sustainable open source project. \\n\\nHere is what you can do:\\n- [Join LoopBack Slack community](https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw)\\n- [Look for first-contribution-friendly issues](https://github.com/strongloop/loopback-next/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)\\n- Give us feedback and join our discussion in [our GitHub repo](https://github.com/strongloop/loopback-next)\\n\\nLet\'s make LoopBack a better framework together!"}]}')}}]);