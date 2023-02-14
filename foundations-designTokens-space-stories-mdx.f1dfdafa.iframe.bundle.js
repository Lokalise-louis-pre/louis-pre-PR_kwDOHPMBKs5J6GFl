"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[7097],{"./src/foundations/designTokens/space.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,spacing:()=>spacing});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_storybook_addons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addons/dist/esm/public_api.js"),_storybook_core_events__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/core-events/dist/esm/index.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/esm/index.js"),_storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-links/react.js"),_utils_styled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/theme/spacing.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/utils/theme/color.ts"),_space__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/foundations/designTokens/space.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=(args,context)=>{window.setTimeout((()=>{_storybook_addons__WEBPACK_IMPORTED_MODULE_4__.ZP.getChannel().emit(_storybook_core_events__WEBPACK_IMPORTED_MODULE_5__.NAVIGATE_URL,`?path=/docs/${context.id}`)}),0);const colorTheme="#2D2E30"===context?.globals?.backgrounds?.value?"dark":"light",StyledColorContainer=_utils_styled__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px;
		background-color: ${context?.globals?.backgrounds?.value};
		&& * {
			color: ${"dark"===colorTheme?"#ffffff":void 0};
		}
	`,ItemBlock=_utils_styled__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
		width: ${props=>(0,_utils_theme__WEBPACK_IMPORTED_MODULE_7__.W)(props.space)};
		height: ${props=>(0,_utils_theme__WEBPACK_IMPORTED_MODULE_7__.W)(props.space)};
		outline: 1px solid ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_8__.$)("green.600")};
		background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_8__.$)("green.200")};
	`,ItemWrapper=_utils_styled__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
		display: flex;
		align-items: center;
		gap: 10px;
	`,StyledCode=_utils_styled__WEBPACK_IMPORTED_MODULE_6__.ZP.code`
		min-width: 110px;
	`,StyledCodeValue=_utils_styled__WEBPACK_IMPORTED_MODULE_6__.ZP.code`
		min-width: 60px;
		color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_8__.$)("content.secondary")};
	`;return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.zx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.np.light),mdxType:"ThemeProvider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(StyledColorContainer,{mdxType:"StyledColorContainer"},Object.entries(_space__WEBPACK_IMPORTED_MODULE_10__.D).flatMap((([key,value])=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(ItemWrapper,{key,mdxType:"ItemWrapper"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(StyledCode,{mdxType:"StyledCode"},"spacing('",key,"')"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(StyledCodeValue,{mdxType:"StyledCodeValue"},value),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(ItemBlock,{space:key,mdxType:"ItemBlock"}))))))};Template.displayName="Template";const makeShortcode=name=>function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",props)},layoutProps=(makeShortcode("StyledColorContainer"),makeShortcode("ItemWrapper"),makeShortcode("StyledCode"),makeShortcode("StyledCodeValue"),makeShortcode("ItemBlock"),{Template});function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Foundations/Design Tokens/Spacing",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}},controls:{disable:!0},actions:{disable:!0}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"spacing"},"Spacing"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#spacing-options"},"Spacing Options"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Refer to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__.Z,{kind:"Foundations/Theming/Theme Helpers",mdxType:"LinkTo"},"Theme Helpers")," for additional information on how to use spacing in components."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"installation"},"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},"import { spacing } from '@lokalise/louis';\n\nconst StyledBox = styled.div`\n    padding: ${spacing(2)};\n`;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=5398%3A24541",target:"_blank"},"Figma Source File | Spacing"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"spacing-options"},"Spacing Options"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Spacing",mdxType:"Story"},Template.bind({})))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const spacing=Template.bind({});spacing.storyName="Spacing",spacing.parameters={storySource:{source:"(args, context) => {\n  window.setTimeout(() => {\n    addons.getChannel().emit(NAVIGATE_URL, `?path=/docs/${context.id}`);\n  }, 0);\n  const colorTheme = context?.globals?.backgrounds?.value === '#2D2E30' ? 'dark' : 'light';\n  const StyledColorContainer = styled.div`\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 20px;\n\t\tpadding: 20px;\n\t\tbackground-color: ${context?.globals?.backgrounds?.value};\n\t\t&& * {\n\t\t\tcolor: ${colorTheme === 'dark' ? '#ffffff' : undefined};\n\t\t}\n\t`;\n  const ItemBlock = styled.div`\n\t\twidth: ${props => spacingHelper(props.space)};\n\t\theight: ${props => spacingHelper(props.space)};\n\t\toutline: 1px solid ${color('green.600')};\n\t\tbackground-color: ${color('green.200')};\n\t`;\n  const ItemWrapper = styled.div`\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 10px;\n\t`;\n  const StyledCode = styled.code`\n\t\tmin-width: 110px;\n\t`;\n  const StyledCodeValue = styled.code`\n\t\tmin-width: 60px;\n\t\tcolor: ${color('content.secondary')};\n\t`;\n  return <ThemeProvider theme={ensure(themes.light)}>\n\t\t\t<StyledColorContainer>\n\t\t\t\t{Object.entries(space).flatMap(([key, value]) => <ItemWrapper key={key}>\n\t\t\t\t\t\t<StyledCode>spacing('{key}')</StyledCode>\n\t\t\t\t\t\t<StyledCodeValue>{value}</StyledCodeValue>\n\t\t\t\t\t\t<ItemBlock space={key} />\n\t\t\t\t\t</ItemWrapper>)}\n\t\t\t</StyledColorContainer>\n\t\t</ThemeProvider>;\n}"}};const componentMeta={title:"Foundations/Design Tokens/Spacing",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}},controls:{disable:!0},actions:{disable:!0}},includeStories:["spacing"]},mdxStoryNameToKey={Spacing:"spacing"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","spacing"]},"./node_modules/@storybook/addon-links/react.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>addon_links_react});__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js");var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/utils.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["kind","story","children"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var isPlainLeftClick=function isPlainLeftClick(e){return!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)},LinkTo=function(_PureComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(LinkTo,_PureComponent);var _super=_createSuper(LinkTo);function LinkTo(){var _this;_classCallCheck(this,LinkTo);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).state={href:"/"},_this.updateHref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _this$props,kind,story,href;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _this$props=_this.props,kind=_this$props.kind,story=_this$props.story,_context.next=3,(0,utils.ew)(kind,story);case 3:href=_context.sent,_this.setState({href});case 5:case"end":return _context.stop()}}),_callee)}))),_this.handleClick=function(){(0,utils.c4)(_this.props)},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(LinkTo,[{key:"componentDidMount",value:function componentDidMount(){this.updateHref()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props2=this.props,kind=_this$props2.kind,story=_this$props2.story;prevProps.kind===kind&&prevProps.story===story||this.updateHref()}},{key:"render",value:function render(){var _this2=this,_this$props3=this.props,children=(_this$props3.kind,_this$props3.story,_this$props3.children),rest=_objectWithoutProperties(_this$props3,_excluded),href=this.state.href;return react.createElement("a",_extends({href,onClick:function onClick(e){return function cancelled(e){var cb=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(_e){};isPlainLeftClick(e)&&(e.preventDefault(),cb(e))}(e,_this2.handleClick)}},rest),children)}}]),LinkTo}(react.PureComponent);LinkTo.defaultProps={kind:null,story:null,children:void 0};const addon_links_react=LinkTo},"./node_modules/@storybook/addons/dist/esm/public_api.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@storybook/addons/dist/esm/index.js").KP},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}}}]);
//# sourceMappingURL=foundations-designTokens-space-stories-mdx.f1dfdafa.iframe.bundle.js.map