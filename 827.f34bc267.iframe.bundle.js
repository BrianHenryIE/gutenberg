(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[827,2473],{"./node_modules/@ariakit/react-core/esm/__chunks/IO2C6XLJ.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Y:function(){return Radio},x:function(){return useRadio}});var _ZQKNDRGB_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/ZQKNDRGB.js"),_CQCRBYV6_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/CQCRBYV6.js"),_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js"),_2ID5JPOO_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2ID5JPOO.js"),_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6WEF4WY5.js"),_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js");var useRadio=(0,_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store,name:name,value:value,checked:checked}=_b,props=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","name","value","checked"]);const context=(0,_ZQKNDRGB_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_2ID5JPOO_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,props.as||"input"),props.type),disabled=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.EE)(props),[propertyUpdated,schedulePropertyUpdate]=(0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__.NW)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;element&&(nativeRadio||(void 0!==isChecked&&(element.checked=isChecked),void 0!==name&&(element.name=name),void 0!==value&&(element.value=`${value}`)))}),[propertyUpdated,nativeRadio,isChecked,name,value]);const onChange=(0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0,schedulePropertyUpdate()),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves:moves,activeId:activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id:id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange:onChange,onClick:onClick,onFocus:onFocus}),props=(0,_CQCRBYV6_js__WEBPACK_IMPORTED_MODULE_7__.E)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store,clickOnEnter:!nativeRadio},props)),(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({name:nativeRadio?name:void 0,value:nativeRadio?value:void 0,checked:isChecked},props)})),Radio=(0,_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.W5)((props=>{const htmlProps=useRadio(props);return(0,_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/R72A2MDW.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return useRadioStore}});var VUP7S67H=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/VUP7S67H.js"),_2ID5JPOO=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2ID5JPOO.js"),FGW7QUD2=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/FGW7QUD2.js"),GME4NYXR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/GME4NYXR.js"),D23ES3Z4=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js"),_2SMRF6AD=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/2SMRF6AD.js");function createRadioStore(_a={}){var _a2,props=(0,_2SMRF6AD.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,FGW7QUD2.t)((0,_2SMRF6AD.EZ)((0,_2SMRF6AD.ih)({},props),{focusLoop:(0,D23ES3Z4.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,_2SMRF6AD.EZ)((0,_2SMRF6AD.ih)({},composite.getState()),{value:(0,D23ES3Z4.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,GME4NYXR.MT)(initialState,composite,props.store);return(0,_2SMRF6AD.EZ)((0,_2SMRF6AD.ih)((0,_2SMRF6AD.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,_2ID5JPOO.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,VUP7S67H.b)(store,update,props),(0,_2ID5JPOO.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./node_modules/@ariakit/react-core/esm/__chunks/ZQKNDRGB.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Hz:function(){return useRadioProviderContext},Wh:function(){return useRadioContext},o:function(){return RadioScopedContextProvider}});var _X3ATWMYX_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/X3ATWMYX.js"),ctx=(0,__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js").re)([_X3ATWMYX_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_X3ATWMYX_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./node_modules/@ariakit/react-core/esm/radio/radio-group.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return RadioGroup}});var _chunks_ZQKNDRGB_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/ZQKNDRGB.js"),_chunks_7PHIY4AC_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7PHIY4AC.js"),_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js"),_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6WEF4WY5.js"),_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store}=_b,props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_ZQKNDRGB_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_ZQKNDRGB_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_7PHIY4AC_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store},props))})),RadioGroup=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.LM)((props=>{const htmlProps=useRadioGroup(props);return(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./node_modules/remove-accents/index.js":function(module){var characterMap={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ả":"A","Ạ":"A","Ẩ":"A","Ẫ":"A","Ậ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ẻ":"E","Ẽ":"E","Ẹ":"E","Ể":"E","Ễ":"E","Ệ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ỉ":"I","Ị":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ỏ":"O","Ọ":"O","Ổ":"O","Ỗ":"O","Ộ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ớ":"O","Ợ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ủ":"U","Ụ":"U","Ử":"U","Ữ":"U","Ự":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ả":"a","ạ":"a","ẩ":"a","ẫ":"a","ậ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ẻ":"e","ẽ":"e","ẹ":"e","ể":"e","ễ":"e","ệ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ỉ":"i","ị":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ỏ":"o","ọ":"o","ổ":"o","ỗ":"o","ộ":"o","ờ":"o","ở":"o","ỡ":"o","ớ":"o","ợ":"o","ù":"u","ú":"u","û":"u","ü":"u","ủ":"u","ụ":"u","ử":"u","ữ":"u","ự":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z","й":"и","Й":"И","ё":"е","Ё":"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{YF:function(){return useFloating},x7:function(){return arrow}});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options:options,fn(state){const{element:element,padding:padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding:padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element,padding:padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement:placement="bottom",strategy:strategy="absolute",middleware:middleware=[],platform:platform,elements:{reference:externalReference,floating:externalFloating}={},transform:transform=!0,whileElementsMounted:whileElementsMounted,open:open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy:strategy,placement:placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement:placement,strategy:strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference:setReference,setFloating:setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update:update,refs:refs,elements:elements,floatingStyles:floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:function(){return LayoutGroup}});var react=__webpack_require__("./node_modules/react/index.js"),LayoutGroupContext=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");const DeprecatedLayoutGroupContext=(0,react.createContext)(null);var use_force_update=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-force-update.mjs");const notify=node=>!node.isLayoutDirty&&node.willUpdate(!1);function nodeGroup(){const nodes=new Set,subscriptions=new WeakMap,dirtyAll=()=>nodes.forEach(notify);return{add:node=>{nodes.add(node),subscriptions.set(node,node.addEventListener("willUpdate",dirtyAll))},remove:node=>{nodes.delete(node);const unsubscribe=subscriptions.get(node);unsubscribe&&(unsubscribe(),subscriptions.delete(node)),dirtyAll()},dirty:dirtyAll}}const shouldInheritGroup=inherit=>!0===inherit,LayoutGroup=({children:children,id:id,inherit:inherit=!0})=>{const layoutGroupContext=(0,react.useContext)(LayoutGroupContext.p),deprecatedLayoutGroupContext=(0,react.useContext)(DeprecatedLayoutGroupContext),[forceRender,key]=(0,use_force_update.N)(),context=(0,react.useRef)(null),upstreamId=layoutGroupContext.id||deprecatedLayoutGroupContext;null===context.current&&((inherit=>shouldInheritGroup(!0===inherit)||"id"===inherit)(inherit)&&upstreamId&&(id=id?upstreamId+"-"+id:upstreamId),context.current={id:id,group:shouldInheritGroup(inherit)&&layoutGroupContext.group||nodeGroup()});const memoizedContext=(0,react.useMemo)((()=>({...context.current,forceRender:forceRender})),[key]);return react.createElement(LayoutGroupContext.p.Provider,{value:memoizedContext},children)}},"./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return useReducedMotion}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}},"./packages/components/node_modules/framer-motion/dist/es/utils/use-force-update.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:function(){return useForceUpdate}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./packages/components/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{t:function(){return useIsMounted}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}}}]);