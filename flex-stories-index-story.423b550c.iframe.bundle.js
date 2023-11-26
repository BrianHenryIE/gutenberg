/*! For license information please see flex-stories-index-story.423b550c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6869],{"./packages/components/src/context/constants.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_3:function(){return CONNECTED_NAMESPACE},cT:function(){return COMPONENT_NAMESPACE},rE:function(){return CONNECT_STATIC_NAMESPACE}});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/context/context-connect.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:function(){return hasConnectNamespace},Iq:function(){return contextConnect},Kc:function(){return contextConnectWithoutRef}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/context/context-system-provider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G8:function(){return ContextSystemProvider},eb:function(){return useComponentsContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useComponentsContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children:children,value:value})=>{const contextValue=function useContextSystemBridge({value:value}){const parentContext=useComponentsContext(),valueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default()(valueRef.current,value)&&valueRef.current!==value&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value:value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ComponentsContext.Provider,{value:contextValue,children:children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/context/get-styled-class-name-from-key.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return getStyledClassNameFromKey}});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/context/use-context-system.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return useContextSystem}});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/flex/flex-block/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return flex_block_component}});__webpack_require__("./node_modules/react/index.js");var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/flex/flex-item/hook.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedFlexBlock(props,forwardedRef){const flexBlockProps=function useFlexBlock(props){const otherProps=(0,use_context_system.y)(props,"FlexBlock");return(0,hook.i)({isBlock:!0,...otherProps})}(props);return(0,jsx_runtime.jsx)(component.Z,{...flexBlockProps,ref:forwardedRef})}UnconnectedFlexBlock.displayName="UnconnectedFlexBlock";const FlexBlock=(0,context_connect.Iq)(UnconnectedFlexBlock,"FlexBlock");var flex_block_component=FlexBlock;try{FlexBlock.displayName="FlexBlock",FlexBlock.__docgenInfo={description:"`FlexBlock` is a primitive layout component that adaptively resizes content\nwithin layout containers like `Flex`.\n\n```jsx\nimport { Flex, FlexBlock } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Flex>\n      <FlexBlock>...</FlexBlock>\n    </Flex>\n  );\n}\n```",displayName:"FlexBlock",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/flex/flex-block/component.tsx#FlexBlock"]={docgenInfo:FlexBlock.__docgenInfo,name:"FlexBlock",path:"packages/components/src/flex/flex-block/component.tsx#FlexBlock"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/flex/flex/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var _context__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/context/context-connect.ts"),_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/flex/flex/hook.ts"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/flex/context.ts"),_view__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/view/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedFlex(props,forwardedRef){const{children:children,isColumn:isColumn,...otherProps}=(0,_hook__WEBPACK_IMPORTED_MODULE_2__.k)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_context__WEBPACK_IMPORTED_MODULE_3__.G.Provider,{value:{flexItemDisplay:isColumn?"block":void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_view__WEBPACK_IMPORTED_MODULE_4__.Z,{...otherProps,ref:forwardedRef,children:children})})}UnconnectedFlex.displayName="UnconnectedFlex";const Flex=(0,_context__WEBPACK_IMPORTED_MODULE_5__.Iq)(UnconnectedFlex,"Flex");__webpack_exports__.Z=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"`Flex` is a primitive layout component that adaptively aligns child content\nhorizontally or vertically. `Flex` powers components like `HStack` and\n`VStack`.\n\n`Flex` is used with any of its two sub-components, `FlexItem` and\n`FlexBlock`.\n\n```jsx\nimport { Flex, FlexBlock, FlexItem } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Flex>\n      <FlexItem>\n        <p>Code</p>\n      </FlexItem>\n      <FlexBlock>\n        <p>Poetry</p>\n      </FlexBlock>\n    </Flex>\n  );\n}\n```",displayName:"Flex",props:{align:{defaultValue:{value:"'center'"},description:"Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:"Spacing in between each child can be adjusted by using `gap`.\n\nCan either be a number (which will act as a multiplier to the library's\ngrid system base of 4px), or a literal CSS value string.",name:"gap",required:!1,type:{name:"SpaceInput"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/flex/flex/component.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"packages/components/src/flex/flex/component.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/hooks/use-update-effect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View",__webpack_exports__.Z=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/deprecated/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return deprecated}});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since:since,version:version,alternative:alternative,plugin:plugin,link:link,hint:hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.Kw)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./node_modules/deepmerge/dist/cjs.js":function(module){var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":function(module){module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{P:function(){return isPlainObject}})},"./node_modules/no-case/dist.es2015/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return noCase}});function lowerCase(str){return str.toLowerCase()}var DEFAULT_SPLIT_REGEXP=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],DEFAULT_STRIP_REGEXP=/[^A-Z0-9]+/gi;function noCase(input,options){void 0===options&&(options={});for(var _a=options.splitRegexp,splitRegexp=void 0===_a?DEFAULT_SPLIT_REGEXP:_a,_b=options.stripRegexp,stripRegexp=void 0===_b?DEFAULT_STRIP_REGEXP:_b,_c=options.transform,transform=void 0===_c?lowerCase:_c,_d=options.delimiter,delimiter=void 0===_d?" ":_d,result=replace(replace(input,splitRegexp,"$1\0$2"),stripRegexp,"\0"),start=0,end=result.length;"\0"===result.charAt(start);)start++;for(;"\0"===result.charAt(end-1);)end--;return result.slice(start,end).split("\0").map(transform).join(delimiter)}function replace(input,re,value){return re instanceof RegExp?input.replace(re,value):re.reduce((function(input,re){return input.replace(re,value)}),input)}},"./node_modules/param-case/dist.es2015/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return paramCase}});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist_es2015=__webpack_require__("./node_modules/no-case/dist.es2015/index.js");function paramCase(input,options){return void 0===options&&(options={}),function dotCase(input,options){return void 0===options&&(options={}),(0,dist_es2015.B)(input,(0,tslib_es6.pi)({delimiter:"."},options))}(input,(0,tslib_es6.pi)({delimiter:"-"},options))}},"./packages/components/src/flex/stories/index.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},ResponsiveDirection:function(){return ResponsiveDirection},__namedExportsOrder:function(){return __namedExportsOrder}});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/flex/flex-block/component.tsx"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/flex/flex-item/component.tsx"),_view__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/view/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components/Flex",subcomponents:{FlexBlock:___WEBPACK_IMPORTED_MODULE_2__.Z,FlexItem:___WEBPACK_IMPORTED_MODULE_3__.Z},argTypes:{align:{control:{type:"text"}},as:{control:{type:"text"}},children:{control:{type:null}},gap:{control:{type:"text"}},justify:{control:{type:"text"}},isReversed:{table:{disable:!0}}},parameters:{sourceLink:"packages/components/src/flex",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}};__webpack_exports__.default=meta;const GrayBox=({children:children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_4__.Z,{style:{backgroundColor:"#eee",padding:10},children:children});GrayBox.displayName="GrayBox";const Default=({...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrayBox,{children:"Item 1"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrayBox,{children:"Item 2"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrayBox,{children:"Item 3"})})]});Default.displayName="Default",Default.args={};const ResponsiveDirection=({...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrayBox,{children:"Item 1"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrayBox,{children:"Item 2"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrayBox,{children:"Item 3"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrayBox,{children:"Item 4"})})]});ResponsiveDirection.displayName="ResponsiveDirection",ResponsiveDirection.args={direction:["column","row"]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  return <Flex {...args}>\n            <FlexItem>\n                <GrayBox>Item 1</GrayBox>\n            </FlexItem>\n            <FlexItem>\n                <GrayBox>Item 2</GrayBox>\n            </FlexItem>\n            <FlexItem>\n                <GrayBox>Item 3</GrayBox>\n            </FlexItem>\n        </Flex>;\n}",...Default.parameters?.docs?.source}}},ResponsiveDirection.parameters={...ResponsiveDirection.parameters,docs:{...ResponsiveDirection.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  return <Flex {...args}>\n            <FlexItem>\n                <GrayBox>Item 1</GrayBox>\n            </FlexItem>\n            <FlexBlock>\n                <GrayBox>Item 2</GrayBox>\n            </FlexBlock>\n            <FlexItem>\n                <GrayBox>Item 3</GrayBox>\n            </FlexItem>\n            <FlexItem>\n                <GrayBox>Item 4</GrayBox>\n            </FlexItem>\n        </Flex>;\n}",...ResponsiveDirection.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ResponsiveDirection"]}}]);