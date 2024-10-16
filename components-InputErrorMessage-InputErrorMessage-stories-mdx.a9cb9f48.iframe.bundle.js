"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[2548],{"./node_modules/@lokalise/styled/dist/hooks/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>s});const s=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Fg},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/InputErrorMessage/InputErrorMessage.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,multipleMessages:()=>multipleMessages});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),_useInputErrorMessages__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/InputErrorMessage/useInputErrorMessages.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const{isInvalid,errorMessages}=(0,_useInputErrorMessages__WEBPACK_IMPORTED_MODULE_3__.A)(args.error);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,{children:errorMessages})};const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={error:"Single error message"},defaultStory.parameters={storySource:{source:"args => {\n  const {\n    isInvalid,\n    errorMessages\n  } = useInputErrorMessages(args.error);\n  return <InputErrorMessage>{errorMessages}</InputErrorMessage>;\n}"}};const multipleMessages=Template.bind({});multipleMessages.storyName="Multiple Messages",multipleMessages.args={error:["This is an array of error messages\n","Which you can use to show multiple input errors\n","This is an array of error messages\n","By passing multiple children to InputErrorMessage"]},multipleMessages.parameters={storySource:{source:"args => {\n  const {\n    isInvalid,\n    errorMessages\n  } = useInputErrorMessages(args.error);\n  return <InputErrorMessage>{errorMessages}</InputErrorMessage>;\n}"}};const componentMeta={title:"Components/Forms/InputErrorMessage",parameters:{controls:{sort:"requiredFirst"},docs:{source:{type:"code"}}},component:_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,argTypes:{error:{control:{type:"object"}}},tags:["stories-mdx"],includeStories:["defaultStory","multipleMessages"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Forms/InputErrorMessage",component:_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,parameters:{controls:{sort:"requiredFirst"},docs:{source:{type:"code"}}},argTypes:{error:{control:{type:"object"}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"inputerrormessage",children:"InputErrorMessage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"InputErrorMessage is used to display one or more form validation error messages next to input fields."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["InputErrorMessage exports a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"useInputErrorMessages"})," hook that accepts 1 or more error messages or a boolean,\nand returns an object with an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"isInvalid"})," boolean if there are errors, and an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"errorMessages"})," array with an object for each error containing the message and a generated unique ID.\nThe ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"errorMessages"})," array can be passed as a child to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"InputErrorMessage"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:"import { InputErrorMessage, useInputErrorMessages } from '@lokalise/louis';\n\nexport default () => {\n\tconst { isInvalid, errorMessages } = useInputErrorMessages('Error message for an input field');\n\n\treturn <InputErrorMessage>{errorMessages}</InputErrorMessage>;\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{error:"Single error message"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"multiple-messages",children:"Multiple Messages"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["There are duplicated messages in the example below, but they will be shown only once when using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"useInputErrorMessages"})," hook."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Multiple Messages",args:{error:["This is an array of error messages\n","Which you can use to show multiple input errors\n","This is an array of error messages\n","By passing multiple children to InputErrorMessage"]},children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","defaultStory","multipleMessages"]},"./src/components/InputErrorMessage/InputErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>InputErrorMessage});var useTheme=__webpack_require__("./node_modules/@lokalise/styled/dist/hooks/useTheme.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),theme=__webpack_require__("./src/utils/theme/index.ts");const Error=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__Error",componentId:"sc-1wn0241-0"})([""," color:",";display:grid;gap:",";grid-template-columns:min-content auto;align-items:center;"],(0,theme.cp)("body.tiny.default"),(0,theme.S3)("color.background.action.danger.default"),(0,theme.W0)(1)),MultiErrorContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__MultiErrorContainer",componentId:"sc-1wn0241-1"})(["display:grid;gap:",";"],(0,theme.W0)(1)),IconContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__IconContainer",componentId:"sc-1wn0241-2"})(["align-self:flex-start;font-size:16px;display:flex;align-items:center;"]);var icons_Error=__webpack_require__("./src/foundations/icons/Error.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isInputMessage=error=>(error=>"object"==typeof error&&null!==error)(error)&&"string"==typeof error.message&&"string"==typeof error.id,normalizeChildren=(children,id)=>{if(null===children)return[];if(errors=children,Array.isArray(errors)&&errors.every(isInputMessage))return children;var errors;return[...new Set("string"==typeof children?[children]:children)].map(((message,index)=>({message,id:[id,index].filter((x=>void 0!==x)).join("-")})))},InputErrorMessage=({children,id,className})=>{const theme=(0,useTheme.F)();if(null===children)return null;const uniqueErrors=normalizeChildren(children,id);return 0===uniqueErrors.length?null:(0,jsx_runtime.jsx)(MultiErrorContainer,{"aria-live":"assertive",className,children:uniqueErrors.map((child=>!!child.message&&(0,jsx_runtime.jsxs)(Error,{id:`${child.id}`,children:[(0,jsx_runtime.jsx)(IconContainer,{children:(0,jsx_runtime.jsx)(icons_Error.j,{color:theme.color.background.action.danger.default})}),child.message]},`${child.id}`)))})};InputErrorMessage.displayName="InputErrorMessage";try{InputErrorMessage.displayName="InputErrorMessage",InputErrorMessage.__docgenInfo={description:"",displayName:"InputErrorMessage",props:{children:{defaultValue:null,description:"One or more error message objects with error text to render and ID.",name:"children",required:!0,type:{name:"DeprecatedMessages | InputErrorMessage[]"}},id:{defaultValue:null,description:"**Deprecated**: Should not provide `id` when providing error message objects\n@deprecated in favor of error message objects",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"]={docgenInfo:InputErrorMessage.__docgenInfo,name:"InputErrorMessage",path:"src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputErrorMessage/useInputErrorMessages.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useInputErrorMessages});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useInputErrorMessages=error=>{const errorId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),isInvalid=Array.isArray(error)?error.length>0:!!error,errorMessages=(error=>{switch(typeof error){case"boolean":case"undefined":return[];case"string":return[error];default:return[...new Set(error)]}})(error).map(((message,index)=>({message,id:`${errorId}-${index}`})));return{isInvalid,errorMessages}}},"./src/foundations/icons/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Error});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Error=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M9.92837 1.25405C9.32941 1.25889 8.73257 1.49035 8.28287 1.9474L1.92056 8.41469C1.02117 9.32879 1.0333 10.8177 1.94742 11.7171L8.4147 18.0794C9.3288 18.9788 10.8177 18.9667 11.7171 18.0525L18.0794 11.5861C18.0797 11.5858 18.08 11.5855 18.0802 11.5853C18.9789 10.6707 18.9667 9.18226 18.0526 8.28285L11.5853 1.92055C11.1282 1.47085 10.5273 1.2492 9.92837 1.25405ZM9.93895 2.49591C10.2154 2.49367 10.4925 2.59886 10.7088 2.81166L17.1761 9.17397C17.6086 9.59956 17.6138 10.2766 17.1883 10.7096L10.826 17.1761C10.4004 17.6086 9.72373 17.6139 9.29117 17.1883L2.82388 10.826C2.39133 10.4004 2.38607 9.72372 2.81167 9.29115L9.17398 2.82387C9.38678 2.60759 9.6625 2.49814 9.93895 2.49591ZM9.99022 5.40769C9.82475 5.41028 9.66705 5.47839 9.55172 5.59707C9.43639 5.71576 9.37283 5.87535 9.37499 6.04083V11.0408C9.37382 11.1236 9.38912 11.2059 9.42 11.2827C9.45089 11.3596 9.49674 11.4295 9.55489 11.4885C9.61304 11.5475 9.68234 11.5943 9.75875 11.6263C9.83516 11.6583 9.91716 11.6747 9.99999 11.6747C10.0828 11.6747 10.1648 11.6583 10.2412 11.6263C10.3176 11.5943 10.3869 11.5475 10.4451 11.4885C10.5032 11.4295 10.5491 11.3596 10.58 11.2827C10.6109 11.2059 10.6262 11.1236 10.625 11.0408V6.04083C10.6261 5.95724 10.6104 5.87429 10.5789 5.79688C10.5473 5.71946 10.5006 5.64916 10.4414 5.59012C10.3822 5.53109 10.3118 5.48453 10.2343 5.4532C10.1568 5.42186 10.0738 5.40639 9.99022 5.40769ZM9.99999 12.9158C9.77898 12.9158 9.56701 13.0036 9.41073 13.1599C9.25445 13.3162 9.16666 13.5281 9.16666 13.7492C9.16666 13.9702 9.25445 14.1821 9.41073 14.3384C9.56701 14.4947 9.77898 14.5825 9.99999 14.5825C10.221 14.5825 10.433 14.4947 10.5892 14.3384C10.7455 14.1821 10.8333 13.9702 10.8333 13.7492C10.8333 13.5281 10.7455 13.3162 10.5892 13.1599C10.433 13.0036 10.221 12.9158 9.99999 12.9158Z"})});Error.displayName="Error";try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/foundations/icons/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const commonStyles=styled_components_browser_esm.iv`
	pointer-events: all;
	box-sizing: border-box;
	color: var(--louis-svgicon-color);
	fill: currentColor;
	font-size: var(--louis-svgicon-size);
`,SvgRoot=styled_components_browser_esm.ZP.svg.withConfig({displayName:"icons__SvgRoot",componentId:"sc-4ot8tf-0"})(["",";width:1em;height:1em;"],commonStyles);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reservedKeywords=["currentColor","inherit"],colorDefaults={color:"inherit",fill:"currentColor",stroke:void 0},SvgIcon=({color="inherit",size="inherit",ariaLabel,children,...props})=>{return(0,jsx_runtime.jsx)(SvgRoot,{style:{"--louis-svgicon-color":(colorType="color",inputColor=color,inputColor&&!reservedKeywords.includes(inputColor)?inputColor:colorDefaults[colorType]),"--louis-svgicon-size":size},...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children});var colorType,inputColor};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-InputErrorMessage-InputErrorMessage-stories-mdx.a9cb9f48.iframe.bundle.js.map