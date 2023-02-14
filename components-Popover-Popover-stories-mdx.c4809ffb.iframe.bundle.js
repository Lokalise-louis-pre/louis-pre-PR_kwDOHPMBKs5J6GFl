"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[614],{"./src/components/Popover/Popover.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PopoverContent:()=>PopoverContent,Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,delay:()=>delay,offset:()=>offset,onClick:()=>onClick,onDisabledHover:()=>onDisabledHover,onHover:()=>onHover,placement:()=>placement,portal:()=>portal});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_utils_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/color.ts"),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.tsx"),_Popover__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Popover/Popover.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PopoverContent=Object.assign(_utils_styled__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
		color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.$)("content.primary")};
	`,{displayName:"div"}),Template=args=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Popover__WEBPACK_IMPORTED_MODULE_5__.J,_extends({},args,{mdxType:"Popover"}));Template.displayName="Template";const layoutProps={PopoverContent,Template};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/Popover",component:_Popover__WEBPACK_IMPORTED_MODULE_5__.J,parameters:{controls:{sort:"requiredFirst",exclude:["children","content","components"]},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{style:{margin:"45px"}},Story())],mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"popover"},"Popover"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Popover is used to display in-product help content, attached to the child element passed to it."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Popover depends on:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://floating-ui.com/",target:"_blank"},"Floating UI"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"installation"},"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Popover } from '@lokalise/louis';\n\nexport default () => (\n  <Popover content=\"Popover content\">Hello World</Popover>;\n)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21088",target:"_blank"},"Figma Source File | Popover"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"props"},"Props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.$4,{of:_Popover__WEBPACK_IMPORTED_MODULE_5__.J,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"trigger-event"},"Trigger Event"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"On Click",args:{withArrow:!0,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"On click")},mdxType:"Story"},Template.bind({})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"On Hover",args:{withArrow:!0,triggerEvent:"hover",content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"On hover")},mdxType:"Story"},Template.bind({})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"On Disabled Hover",args:{withArrow:!0,triggerEvent:"hover",content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",disabled:!0,mdxType:"Button"},"On disabled hover"))},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"offset"},"Offset"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Offset",args:{withArrow:!1,offset:5,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"Offset: 5")},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"placements"},"Placements"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Placement",args:{withArrow:!0,placement:"right",open:!0,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Right"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"Right")},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"delay"},"Delay"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Delay",args:{triggerEvent:"hover",delay:2e3,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"Delay 2 seconds")},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"render-in-portal"},"Render in Portal"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Portal",args:{inPortal:!0,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"},mdxType:"PopoverContent"},"Rendered in `div.louis-portal`"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",mdxType:"Button"},"Open in Portal")},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const onClick=Template.bind({});onClick.storyName="On Click",onClick.args={withArrow:!0,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"On click")},onClick.parameters={storySource:{source:"args => <Popover {...args} />"}};const onHover=Template.bind({});onHover.storyName="On Hover",onHover.args={withArrow:!0,triggerEvent:"hover",content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"On hover")},onHover.parameters={storySource:{source:"args => <Popover {...args} />"}};const onDisabledHover=Template.bind({});onDisabledHover.storyName="On Disabled Hover",onDisabledHover.args={withArrow:!0,triggerEvent:"hover",content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline",disabled:!0},"On disabled hover"))},onDisabledHover.parameters={storySource:{source:"args => <Popover {...args} />"}};const offset=Template.bind({});offset.storyName="Offset",offset.args={withArrow:!1,offset:5,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"Offset: 5")},offset.parameters={storySource:{source:"args => <Popover {...args} />"}};const placement=Template.bind({});placement.storyName="Placement",placement.args={withArrow:!0,placement:"right",open:!0,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Right"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"Right")},placement.parameters={storySource:{source:"args => <Popover {...args} />"}};const delay=Template.bind({});delay.storyName="Delay",delay.args={triggerEvent:"hover",delay:2e3,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Popover content"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"Delay 2 seconds")},delay.parameters={storySource:{source:"args => <Popover {...args} />"}};const portal=Template.bind({});portal.storyName="Portal",portal.args={inPortal:!0,content:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(PopoverContent,{style:{padding:"16px"}},"Rendered in `div.louis-portal`"),children:(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{variant:"outline"},"Open in Portal")},portal.parameters={storySource:{source:"args => <Popover {...args} />"}};const componentMeta={title:"Components/Popover",parameters:{controls:{sort:"requiredFirst",exclude:["children","content","components"]},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{style:{margin:"45px"}},Story())],component:_Popover__WEBPACK_IMPORTED_MODULE_5__.J,includeStories:["onClick","onHover","onDisabledHover","offset","placement","delay","portal"]},mdxStoryNameToKey={"On Click":"onClick","On Hover":"onHover","On Disabled Hover":"onDisabledHover",Offset:"offset",Placement:"placement",Delay:"delay",Portal:"portal"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["PopoverContent","Template","onClick","onHover","onDisabledHover","offset","placement","delay","portal"]},"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),useMergeRefs=__webpack_require__("./src/utils/hooks/useMergeRefs.ts"),Portal=__webpack_require__("./src/components/Portal/Portal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(Portal.h,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}var styles=__webpack_require__("./src/components/Popover/styles.ts"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs");const getDelayValue=delay=>"number"==typeof delay?delay:delay?250:0;const mapModifiers=modifier=>{if("preventOverflow"===modifier.name)return(0,floating_ui_core_browser_min.uY)(modifier.options);if("offset"===modifier.name)return(0,floating_ui_core_browser_min.cv)(modifier.options);if("flip"===modifier.name)return(0,floating_ui_core_browser_min.RR)(modifier.options);if("hide"===modifier.name)return(0,floating_ui_core_browser_min.Cp)(modifier.options);if("arrow"===modifier.name)return(0,floating_ui_react_dom_esm.x7)(modifier.options);throw new Error("Unsupported modifier")},offsetMiddleware=_ref=>{let{withArrow=!1,offset:offsetValue}=_ref;return(0,floating_ui_core_browser_min.cv)(withArrow?10:4*(offsetValue??0))},Popover=(0,react.forwardRef)(((_ref2,ref)=>{let{placement="bottom",popoverContent,content=popoverContent,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},middlewares=[],modifiers=[],offset:offsetValue,withArrow=!1,open,visibleCallback,onOpenChange=visibleCallback,showPopover=!0,forceVisible=!1,inPortal=!1,positioning="absolute",role="dialog",...rest}=_ref2;const arrowRef=(0,react.useRef)(null);let fallbackOpen=open;showPopover?showPopover&&forceVisible&&(fallbackOpen=!0):fallbackOpen=!1;const autoPlacementMiddleware="auto"===placement?[(0,floating_ui_core_browser_min.X5)()]:[(0,floating_ui_core_browser_min.RR)()],fallbackPlacement="auto"===placement?"bottom":placement,{open:isOpen,setOpen,x,y,reference,floating,getFloatingProps,getReferenceProps,middlewareData,context}=function usePopover(_ref){let{open:controlledOpen,defaultIsOpen,delay,placement="bottom",triggerEvent="click",onOpenChange:setControlledOpen,middlewares=[],strategy:customStrategy,role="dialog"}=_ref;const[uncontrolledOpen,setUncontrolledOpen]=(0,react.useState)(!!defaultIsOpen),open=controlledOpen??uncontrolledOpen,setOpen=(0,react.useCallback)((visible=>{setUncontrolledOpen(visible),setControlledOpen&&setControlledOpen(visible)}),[setControlledOpen]),{context,floating,x,y,reference,strategy,middlewareData}=(0,floating_ui_react_esm.YF)({open,onOpenChange:setOpen,placement,strategy:customStrategy,middleware:middlewares,whileElementsMounted:floating_ui_dom_browser_min.Me}),interactions=(0,floating_ui_react_esm.NI)([(0,floating_ui_react_esm.eS)(context,{enabled:"click"===triggerEvent}),(0,floating_ui_react_esm.XI)(context,{enabled:"hover"===triggerEvent,delay:{open:getDelayValue(delay)}}),(0,floating_ui_react_esm.KK)(context),(0,floating_ui_react_esm.qs)(context,{role}),(0,floating_ui_react_esm.bQ)(context)]),id=(0,floating_ui_react_esm.PC)(),labelId=`${id}-label`,descriptionId=`${id}-description`;return(0,react.useMemo)((()=>({...interactions,context,descriptionId,floating,labelId,middlewareData,open,reference,setOpen,strategy,x,y})),[interactions,context,descriptionId,floating,labelId,middlewareData,open,reference,setOpen,strategy,x,y])}({open:fallbackOpen,onOpenChange,strategy:positioning,role,delay,placement:fallbackPlacement,triggerEvent,middlewares:[...autoPlacementMiddleware,(0,floating_ui_core_browser_min.uY)(),(0,floating_ui_react_dom_esm.x7)({element:arrowRef,padding:5}),offsetMiddleware({withArrow,offset:offsetValue}),...middlewares,...modifiers.map(mapModifiers)]});let clone=null;const resolvedChildren="function"==typeof children?children(isOpen):children,mergedRef=(0,useMergeRefs.q)((input=resolvedChildren,(0,react.isValidElement)(input)?resolvedChildren.ref:null),reference,ref);var input;return clone="string"==typeof resolvedChildren||"number"==typeof resolvedChildren?(0,jsx_runtime.jsx)("span",{ref:reference,...getReferenceProps(),children:resolvedChildren}):(0,react.cloneElement)(resolvedChildren,{ref:mergedRef,...getReferenceProps(resolvedChildren.props)}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,isOpen&&content&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:floating,style:{position:positioning,top:y??0,left:x??0},...rest,...getFloatingProps(),children:["function"==typeof content?content(setOpen):content,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:arrowRef,placement:context.placement,style:{left:middlewareData.arrow?.x,bottom:middlewareData.arrow?.y}})]})})]})}));Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{content:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"content",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"Children | ((visible: boolean) => Children)"}},role:{defaultValue:{value:"dialog"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"alertdialog"'},{value:'"dialog"'},{value:'"grid"'},{value:'"listbox"'},{value:'"menu"'},{value:'"tooltip"'},{value:'"tree"'}]}},placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:null,description:"Controls the visibility of the popover.\nIf provided, the popover will be opened/closed in controlled mode.\nUnset (by default) will let Popover decides in uncontrolled mode.",name:"open",required:!1,type:{name:"boolean"}},defaultIsOpen:{defaultValue:null,description:"If `true`, the popover will be initially opened.",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},delay:{defaultValue:{value:"false"},description:"Set delayed appearance of the popover when `triggerEvent` is 'hover'.\nSet to `true` will use default value of 250 milliseconds.\nSet to a custom number will make it delays with that amount in milliseconds.",name:"delay",required:!1,type:{name:"number | boolean"}},onOpenChange:{defaultValue:null,description:"Callback when state of popover changed\nFunction executed when the visibility of the popover changes.",name:"onOpenChange",required:!1,type:{name:"(((open: boolean) => void) & ((open: boolean) => void))"}},middlewares:{defaultValue:{value:"[]"},description:"useFloating middlewares.",name:"middlewares",required:!1,type:{name:"Middleware[]"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},positioning:{defaultValue:{value:"absolute"},description:"Sets the positioning of the popover.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.\n@deprecated in favor of 'open'",name:"showPopover",required:!1,type:{name:"boolean"}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.\n@deprecated in favor of 'content'",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},modifiers:{defaultValue:{value:"[]"},description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.\n@deprecated in favor of 'middlewares'",name:"modifiers",required:!1,type:{name:"Modifier[]"}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.\n\n**DEPRECATED** in favor of `onOpenChange`\n@deprecated in favor of `onOpenChange`",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},forceVisible:{defaultValue:{value:"false"},description:"Toggles whether the popover is visible without user interaction.\n@deprecated in favor of 'open'",name:"forceVisible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/variants.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/theme/fontFamily.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/theme/typography.ts");const bottom=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	top: -5px;

	&::before {
		border-left-width: 1px;
		border-left-style: solid;
		border-top-width: 1px;
		border-top-style: solid;
	}
`,top=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	bottom: -5px;

	&::before {
		border-right-width: 1px;
		border-right-style: solid;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
`,left=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	right: -5px;

	&::before {
		border-right-width: 1px;
		border-right-style: solid;
		border-top-width: 1px;
		border-top-style: solid;
	}
`,right=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	left: -5px;

	&::before {
		border-left-width: 1px;
		border-left-style: solid;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
`,Arrow=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Popover__Arrow",componentId:"sc-3ptc01-0"})(["position:absolute;width:8px;height:8px;z-index:",";&::before{position:absolute;width:8px;height:8px;z-index:",";content:'';display:block;transform:rotate(45deg);background-color:",";border-color:",";}",""],(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.o)("placement",{top,bottom,left,right,"right-end":right,"right-start":right,"left-start":left,"auto-end":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"auto-start":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,auto:_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"bottom-end":bottom,"bottom-start":bottom,"left-end":left,"top-end":top,"top-start":top},"auto")),Content=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Popover__Content",componentId:"sc-3ptc01-1"})(["padding:0;border-radius:",";background-color:",";border:1px solid ",";box-shadow:0 0 5px rgba(0,0,0,0.2);z-index:",";color:",";font-family:",";",";width:max-content;"],(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.q)("md"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("popover"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("content.primary"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.I)("default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_6__.c)("description"))},"./src/components/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const useIsomorphicLayoutEffect=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect,Portal=_ref=>{let{children,containerRef,type="div",className}=_ref;const isServer="undefined"==typeof window||"undefined"==typeof document,portalNode=(0,react.useMemo)((()=>isServer?null:document.createElement(type)),[isServer,type]);return portalNode&&(portalNode.className=className?`louis-portal ${className}`:"louis-portal"),useIsomorphicLayoutEffect((()=>{if(isServer||!portalNode)return;const host=containerRef?.current||document.body;return host.appendChild(portalNode),()=>{host.contains(portalNode)&&host.removeChild(portalNode)}}),[containerRef,type,isServer]),!isServer&&portalNode?(0,react_dom.createPortal)(children,portalNode):null};Portal.displayName="Portal";try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"div"},description:"The DOM element type to render, default 'div'.",name:"type",required:!1,type:{name:"string"}},containerRef:{defaultValue:null,description:"Container element where the Portal will render. If not set the\nportal will be appended to the body of the component's owner document\n(typically this is the `document.body`).",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useMergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isFunction.js"),_function__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_function__WEBPACK_IMPORTED_MODULE_1__);function assignRef(ref,value){if(null!=ref)if(_function__WEBPACK_IMPORTED_MODULE_1___default()(ref))ref(value);else try{ref.current=value}catch(error){throw new Error(`Cannot assign value "${JSON.stringify(value)}" to ref "${ref.toString()}"`)}}function useMergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{refs.forEach((ref=>{assignRef(ref,node)}))}),refs)}},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))}}]);
//# sourceMappingURL=components-Popover-Popover-stories-mdx.c4809ffb.iframe.bundle.js.map