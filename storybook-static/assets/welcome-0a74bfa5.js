import{a as o,j as a,F as r}from"./jsx-runtime-913be41c.js";import{M as i,a as s}from"./index-94c197af.js";import{u as m}from"./index-f54c3cf8.js";import"./index-2506bfc3.js";import"./iframe-2d7acfa0.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-11801e73.js";import"./index-0dfb046a.js";import"./index-d37d4223.js";import"./isNativeReflectConstruct-98f790dd.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-db3e6ef4.js";import"./index-356e4a49.js";const p=`# Platform Components

A collection of react components for reuse across the platform. Built with [Theme UI](https://theme-ui.com/) for styling.

These components are stored within the [Community Platform monorepo](https://github.com/ONEARMY/community-platform) and configured as a standalone package using [Yarn workspaces](https://yarnpkg.com/features/workspaces/).  
The aim of packaging these components separately is to:

1. Encourage separation between presentation layer and business logic
2. Reduce the overhead for contributors looking to work **only** on the component layer without needing to spin up the entire application locally.

We are using [Storybook](https://storybook.js.org/) to provide a browser accessible interface for our components.

> Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

(Optional) For anyone unfamiliar with Storybook looking to better understand the tool, we recommend reading their guide on [What's a Story](https://storybook.js.org/docs/react/get-started/whats-a-story).

## Getting started

After [cloning the repo](https://github.com/ONEARMY/community-platform), you can start the Storybook instance, which will make the application available in your browser at [http://localhost:6006](http://localhost:6006/).

\`\`\`
cd ./packages/components
yarn install
yarn start
\`\`\`

## Creating a new Component

You can quickly create a new component using the command \`yarn new-component MyNewComponentName\`, which
will generate the following items:

\`\`\`
src/
  MyNewComponentName/
    MyNewComponentName.tsx # Component
    MyNewComponentName.stories.tsx # Storybook documentation
\`\`\`
`;function j(t={}){const{wrapper:n}=Object.assign({},m(),t.components);return n?o(n,Object.assign({},t,{children:o(e,{})})):e();function e(){return a(r,{children:[o(i,{title:"Welcome"}),`
`,o(s,{children:p})]})}}export{j as default};
//# sourceMappingURL=welcome-0a74bfa5.js.map