if (self.CavalryLogger) { CavalryLogger.start_js(["Tw79i"]); }

__d("ChannelConstants",[],(function(a,b,c,d,e,f){var g="channel/";a={CHANNEL_MANUAL_RECONNECT_DEFER_MSEC:2e3,MUTE_WARNING_TIME_MSEC:25e3,WARNING_COUNTDOWN_THRESHOLD_MSEC:15e3,ON_SHUTDOWN:g+"shutdown",ON_INVALID_HISTORY:g+"invalid_history",ON_CONFIG:g+"config",ON_ENTER_STATE:g+"enter_state",ON_EXIT_STATE:g+"exit_state",ATTEMPT_RECONNECT:g+"attempt_reconnect",RTI_SESSION:g+"new_rti_address",CONSOLE_LOG:g+"message:console_log",GET_RTI_SESSION_REQUEST:g+"rti_session_request",SKYWALKER:g+"skywalker",CHANNEL_ESTABLISHED:g+"established",OK:"ok",ERROR:"error",ERROR_MAX:"error_max",ERROR_MISSING:"error_missing",ERROR_MSG_TYPE:"error_msg_type",ERROR_SHUTDOWN:"error_shutdown",ERROR_STALE:"error_stale",SYS_OWNER:"sys_owner",SYS_NONOWNER:"sys_nonowner",SYS_ONLINE:"sys_online",SYS_OFFLINE:"sys_offline",SYS_TIMETRAVEL:"sys_timetravel",HINT_AUTH:"shutdown auth",HINT_CONN:"shutdown conn",HINT_DISABLED:"shutdown disabled",HINT_INVALID_STATE:"shutdown invalid state",HINT_MAINT:"shutdown maint",HINT_UNSUPPORTED:"shutdown unsupported",reason_Unknown:0,reason_AsyncError:1,reason_TooLong:2,reason_Refresh:3,reason_RefreshDelay:4,reason_UIRestart:5,reason_NeedSeq:6,reason_PrevFailed:7,reason_IFrameLoadGiveUp:8,reason_IFrameLoadRetry:9,reason_IFrameLoadRetryWorked:10,reason_PageTransitionRetry:11,reason_IFrameLoadMaxSubdomain:12,reason_NoChannelInfo:13,reason_NoChannelHost:14,CAPABILITY_VOIP_INTEROP:8,CAPABILITY_ACTIVE_ON_DESKTOP_APP:16384,CAPABILITY_PLAYING_INSTANT_GAME:2097152,FANTAIL_SERVICE:"WebchatClient",SUBSCRIBE:"subscribe",UNSUBSCRIBE:"unsubscribe",FAKE_DFF:"fake_dff",THROTTLED:g+"throttled",JUMPSTART:g+"jumpstart",ENTITY_PRESENCE_ACTIVE_PING:"entity_presence/active_ping",ENTITY_PRESENCE_SKIPPED_PING:"entity_presence/skipped_ping",SUBSCRIPTION_STATE:{SUBSCRIBE:"s",MUTATE_CONTEXT:"m",UNSUBSCRIBE:"u"},DEFAULT_MAX_SUBSCRIPTIONS:300,DEFAULT_EVICTION_BATCH_SIZE:20,DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE:300,DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES:3,getArbiterType:function(a){return g+"message:"+a},getRTISkywalkerArbiterType:function(a,b){return g+"skywalker:"+a+":"+b}};e.exports=a}),null);
__d("PresenceConfig",["PresenceConfigInitialData"],(function(a,b,c,d,e,f){var g=Object.assign({},b("PresenceConfigInitialData"));a={get:function(a,b){return a in g?g[a]:b}};e.exports=a}),null);
__d("JSLogger",["lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:!1};function h(a){if(a=="/"||a.indexOf("/",1)<0)return!1;var b=/^\/(v\d+\.\d\d?|head)\//.test(a);return b?/^\/(dialog|plugins)\//.test(a.substring(a.indexOf("/",1))):/^\/(dialog|plugins)\//.test(a)}function i(b){b instanceof Error&&a.ErrorUtils&&(b=a.ErrorUtils.normalizeError(b));try{return JSON.stringify(b)}catch(a){return"{}"}}function j(a,b,c){g.counts[a]||(g.counts[a]={}),g.counts[a][b]||(g.counts[a][b]=0),c=c==null?1:Number(c),g.counts[a][b]+=isFinite(c)?c:0}g.logAction=function(a,b,c){__p&&__p();if(this.type=="bump")j(this.cat,a,b);else if(this.type=="rate")b&&j(this.cat,a+"_n",c),j(this.cat,a+"_d",c);else{c={cat:this.cat,type:this.type,event:a,data:b!=null?i(b):null,date:Date.now(),seq:g.seq++};g.head=g.head?g.head.next=c:g.tail=c;while(g.head.seq-g.tail.seq>g.MAX_HISTORY)g.tail=g.tail.next;return c}};function c(c){__p&&__p();if(!g.categories[c]){g.categories[c]={};var d=function(d){__p&&__p();var e={cat:c,type:d};g.categories[c][d]=function(){__p&&__p();g.forwarding=!1;var c=null;if(b("lowerFacebookDomain").isValidDocumentDomain())return;c=g.logAction;if(h(location.pathname))g.forwarding=!1;else try{c=a.top.require("JSLogger")._.logAction,g.forwarding=c!==g.logAction}catch(a){}c&&c.apply(e,arguments)}};d("debug");d("log");d("warn");d("error");d("bump");d("rate")}return g.categories[c]}function d(a,b){var c=[];for(var b=b||g.tail;b;b=b.next)if(!a||a(b)){var d={type:b.type,cat:b.cat,date:b.date,event:b.event,seq:b.seq};b.data&&(d.data=JSON.parse(b.data));c.push(d)}return c}e.exports={_:g,DUMP_EVENT:"jslogger/dump",create:c,getEntries:d}}),null);
__d("PluginLoggedOutUserTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setHref=function(a){this.$1.href=a;return this};c.setIsSDK=function(a){this.$1.is_sdk=a;return this};c.setPluginAppID=function(a){this.$1.plugin_app_id=a;return this};c.setPluginName=function(a){this.$1.plugin_name=a;return this};c.setRefererURL=function(a){this.$1.referer_url=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={href:!0,is_sdk:!0,plugin_app_id:!0,plugin_name:!0,referer_url:!0,time:!0,weight:!0};e.exports=a}),null);
__d("DOMControl",["DataStore","$"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.root=b("$").fromIDOrElement(a),this.updating=!1,b("DataStore").set(a,"DOMControl",this)}var c=a.prototype;c.getRoot=function(){return this.root};c.beginUpdate=function(){if(this.updating)return!1;this.updating=!0;return!0};c.endUpdate=function(){this.updating=!1};c.update=function(a){if(!this.beginUpdate())return this;this.onupdate(a);this.endUpdate()};c.onupdate=function(a){};a.getInstance=function(a){return b("DataStore").get(a,"DOMControl")};return a}();e.exports=a}),null);
__d("FBIDCheck",[],(function(a,b,c,d,e,f){"use strict";var g=/^[1-9]\d*$/;a={isUser_deprecated:function(a){if(!a||typeof a==="string"&&!g.test(a))return!1;a=parseInt(a,10);return!a?!1:a>0&&a<22e8||a>=1e14&&a<=100099999989999||a>=89e12&&a<=89999999999999||a>=6000001e7&&a<=60000019999999}};e.exports=a}),null);
__d("FocusEvent",["Event","Run","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h=!1;function i(a,b){if(g[a]){b=g[a].indexOf(b);b>=0&&g[a].splice(b,1);g[a].length===0&&delete g[a]}}function j(a){var b=a.getTarget();if(g[b.id]&&g[b.id].length>0){var c=a.type==="focusin"||a.type==="focus";g[b.id].forEach(function(a){a(c)})}}function k(){if(h)return;b("Event").listen(document.documentElement,"focusout",j);b("Event").listen(document.documentElement,"focusin",j);h=!0}a={listen:function(a,c){__p&&__p();k();var d=b("getOrCreateDOMID")(a);g[d]||(g[d]=[]);g[d].push(c);var e=!1;function f(){e||(i(d,c),h&&(h.remove(),h=null),e=!0)}var h=b("Run").onLeave(function(){b("ge")(d)||f()});return{remove:function(){f()}}}};e.exports=a}),null);
__d("isStringNullOrEmpty",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||a===""}e.exports=a}),null);
__d("tooltipPropsFor",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){if(!a)return{};a={"data-tooltip-content":a,"data-hover":"tooltip"};b&&(a["data-tooltip-position"]=b);c&&(a["data-tooltip-alignh"]=c);return a}e.exports=a}),null);
__d("TooltipData",["DataStore","DOM","FBLogger","URI","getElementText","ifRequired","isStringNullOrEmpty","isTextNode","killswitch","tooltipPropsFor"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){__p&&__p();var c=a.getAttribute("data-tooltip-delay");c=c?parseInt(c,10)||1e3:0;if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),content:a.getAttribute("data-tooltip-content"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction")},b("DataStore").get(a,"tooltip"));else{var d;d=(d=b("DataStore").get(a,"tooltip"))!=null?d:{};var e=d.content;d=babelHelpers.objectWithoutPropertiesLoose(d,["content"]);var f=a.getAttribute("data-tooltip-content");!b("isStringNullOrEmpty")(e)&&!b("isStringNullOrEmpty")(f)&&b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',a.getAttribute("data-tooltip-content"));return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction"),content:(a=(c=f)!=null?c:e)!=null?a:null},d)}}function i(a,c){var d=h(a);if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))b("DataStore").set(a,"tooltip",{content:c.content||d.content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick});else{!b("isStringNullOrEmpty")(c.content)&&!b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content"))&&b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',a.getAttribute("data-tooltip-content"));b("DataStore").set(a,"tooltip",{content:c.content||((a=b("DataStore").get(a,"tooltip"))!=null?a:{}).content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick})}}function j(a,b){i(a,b),a.setAttribute("data-hover","tooltip")}function k(a,b){}var l={remove:function(a,c){c=c===void 0?{}:c;c=c.onlyCleanupDataStore;c=c===void 0?!1:c;b("DataStore").remove(a,"tooltip");c||(a.removeAttribute("data-hover"),a.removeAttribute("data-tooltip-position"),a.removeAttribute("data-tooltip-alignh"),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.hide()}))},set:function(a,c,d,e){__p&&__p();k(a,c);if(c instanceof(g||(g=b("URI"))))a.setAttribute("data-tooltip-uri",c),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.fetchIfNecessary(a)});else if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")){var f=l._store({context:a,content:c,position:d,alignH:e});typeof f.content!=="string"?a.setAttribute("data-tooltip-content",b("getElementText")(f.content)):a.setAttribute("data-tooltip-content",f.content);l.refreshIfActive(a)}else a.removeAttribute("data-tooltip-content"),l._store({context:a,content:c,position:d,alignH:e}),l.refreshIfActive(a)},refreshIfActive:function(a){b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.show(a)})},_store:function(a){var c=a.context,d=a.content,e=a.position;a=a.alignH;k(c,d);b("isTextNode")(d)&&(d=b("getElementText")(d));var f=!1;typeof d!=="string"?d=b("DOM").create("div",{},d):f=d==="";a={alignH:a,content:d,position:e,suppress:f};j(c,a);return a},propsFor:b("tooltipPropsFor"),enableDisplayOnOverflow:function(a){a.removeAttribute("data-tooltip-display"),j(a,{overflowDisplay:!0})},enablePersistOnClick:function(a){a.removeAttribute("data-pitloot-persistOnClick"),j(a,{persistOnClick:!0})},suppress:function(a,b){i(a,{suppress:b})},_get:h};e.exports=l}),null);
__d("Focus",["cx","CSS","Event","FocusEvent","KeyStatus","TooltipData","ifRequired"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("KeyStatus").isKeyDown,i={set:function(a,c){c===void 0&&(c=!1);if(a){var d=b("ifRequired")("VirtualCursorStatus",function(a){return a.isVirtualCursorTriggered()},function(){return!1});c||h()||d?j(a):i.setWithoutOutline(a)}},setWithoutOutline:function(a){if(a){b("CSS").addClass(a,"_5f0v");var c=b("Event").listen(a,"blur",function(){a&&b("CSS").removeClass(a,"_5f0v"),c.remove()});b("TooltipData").suppress(a,!0);j(a);b("TooltipData").suppress(a,!1)}},relocate:function(a,c){b("CSS").addClass(a,"_5f0v");return b("FocusEvent").listen(a,this.performRelocation.bind(this,a,c))},performRelocation:function(a,c,d){b("CSS").addClass(a,"_5f0v");a=b("ifRequired")("FocusRing",function(a){return a.usingKeyboardNavigation()},function(){return!0});d=d&&a;b("CSS").conditionClass(c,"_3oxt",d);b("CSS").conditionClass(c,"_16jm",d)}};function j(a){try{a.tabIndex=a.tabIndex,a.focus()}catch(a){}}e.exports=i}),null);
__d("Input",["CSS","DOMControl","DOMQuery"],(function(a,b,c,d,e,f){__p&&__p();var g={isWhiteSpaceOnly:function(a){return!/\S/.test(a||"")},isEmpty:function(a){return g.isWhiteSpaceOnly(a.value)},getValue:function(a){return g.isEmpty(a)?"":a.value},getValueRaw:function(a){return a.value},setValue:function(a,c){a.value=c||"";c=b("DOMControl").getInstance(a);c&&c.resetHeight&&c.resetHeight()},setPlaceholder:function(a,b){a.setAttribute("aria-label",b),a.setAttribute("placeholder",b)},reset:function(a){a.value="",a.style.height=""},setSubmitOnEnter:function(a,c){b("CSS").conditionClass(a,"enter_submit",c)},getSubmitOnEnter:function(a){return b("CSS").hasClass(a,"enter_submit")},setMaxLength:function(a,b){b>0?a.setAttribute("maxlength",b):a.removeAttribute("maxlength")}};e.exports=g}),null);
__d("normalizeBoundingClientRect",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){a=a.ownerDocument.documentElement;var c=a?a.clientLeft:0;a=a?a.clientTop:0;var d=Math.round(b.left)-c;c=Math.round(b.right)-c;var e=Math.round(b.top)-a;b=Math.round(b.bottom)-a;return{left:d,right:c,top:e,bottom:b,width:c-d,height:b-e}}e.exports=a}),null);
__d("getElementRect",["containsNode","normalizeBoundingClientRect"],(function(a,b,c,d,e,f){function a(a){var c;c=a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement;return!a||!("getBoundingClientRect"in a)||!b("containsNode")(c,a)?{left:0,right:0,top:0,bottom:0,width:0,height:0}:b("normalizeBoundingClientRect")(a,a.getBoundingClientRect())}e.exports=a}),null);
__d("getElementPosition",["getElementRect"],(function(a,b,c,d,e,f){function a(a){a=b("getElementRect")(a);return{x:a.left,y:a.top,width:a.right-a.left,height:a.bottom-a.top}}e.exports=a}),null);
__d("Form",["DataStore","DOM","DOMQuery","DTSG","DTSGUtils","Input","LSD","PHPQuerySerializer","Random","SprinkleConfig","URI","getElementPosition","isFacebookURI","isNode"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i="FileList"in window,j="FormData"in window;function k(a){var c={};(g||(g=b("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a){if(a){a=/^([^=]*)(?:=(.*))?$/.exec(a);var d=(h||(h=b("URI"))).decodeComponent(a[1]),e=a[2]!==void 0;e=e?(h||(h=b("URI"))).decodeComponent(a[2]):null;c[d]=e}});return c}var l={getInputs:function(a){a===void 0&&(a=document);return[].concat(b("DOMQuery").scry(a,"input"),b("DOMQuery").scry(a,"select"),b("DOMQuery").scry(a,"textarea"),b("DOMQuery").scry(a,"button"))},getInputsByName:function(a){var b={};l.getInputs(a).forEach(function(a){var c=b[a.name];b[a.name]=typeof c==="undefined"?a:[a].concat(c)});return b},getSelectValue:function(a){return a.options[a.selectedIndex].value},setSelectValue:function(a,b){for(var c=0;c<a.options.length;++c)if(a.options[c].value==b){a.selectedIndex=c;break}},getRadioValue:function(a){for(var b=0;b<a.length;b++)if(a[b].checked)return a[b].value;return null},getElements:function(a){return a.tagName=="FORM"&&a.elements!=a?Array.from(a.elements):l.getInputs(a)},getAttribute:function(a,b){return(a.getAttributeNode(b)||{}).value||null},setDisabled:function(a,c){l.getElements(a).forEach(function(a){if(a.disabled!==void 0){var d=b("DataStore").get(a,"origDisabledState");c?(d===void 0&&b("DataStore").set(a,"origDisabledState",a.disabled),a.disabled=c):d===!1&&(a.disabled=!1)}})},forEachValue:function(a,c,d){__p&&__p();l.getElements(a).forEach(function(a){__p&&__p();if(!a.name||a.disabled)return;if(a.type==="submit")return;if(a.type==="reset"||a.type==="button"||a.type==="image")return;if((a.type==="radio"||a.type==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var c=0,e=a.options.length;c<e;c++){var f=a.options[c];f.selected&&d("select",a.name,f.value)}return}if(a.type==="file"){if(i){f=a.files;for(var c=0;c<f.length;c++)d("file",a.name,f.item(c))}return}d(a.type,a.name,b("Input").getValue(a))}),c&&c.name&&c.type==="submit"&&b("DOMQuery").contains(a,c)&&b("DOMQuery").isNodeOfType(c,["input","button"])&&d("submit",c.name,c.value)},createFormData:function(a,c){__p&&__p();if(!j)return null;var d=new FormData();if(a)if(b("isNode")(a))l.forEachValue(a,c,function(b,a,c){d.append(a,c)});else{c=k(a);for(var e in c)c[e]==null?d.append(e,""):d.append(e,c[e])}return d},serialize:function(a,b){var c={};l.forEachValue(a,b,function(a,b,d){if(a==="file")return;l._serializeHelper(c,b,d)});return l._serializeFix(c)},_serializeHelper:function(a,b,c){__p&&__p();var d=Object.prototype.hasOwnProperty,e=/([^\]]+)\[([^\]]*)\](.*)/.exec(b);if(e){if(!a[e[1]]||!d.call(a,e[1])){a[e[1]]=d={};if(a[e[1]]!==d)return}d=0;if(e[2]==="")while(a[e[1]][d]!==void 0)d++;else d=e[2];e[3]===""?a[e[1]][d]=c:l._serializeHelper(a[e[1]],d.concat(e[3]),c)}else a[b]=c},_serializeFix:function(a){__p&&__p();for(var b in a)a[b]instanceof Object&&(a[b]=l._serializeFix(a[b]));var c=Object.keys(a);if(c.length===0||c.some(isNaN))return a;c.sort(function(a,b){return a-b});var d=0,e=c.every(function(a){return+a===d++});return e?c.map(function(b){return a[b]}):a},post:function(a,c,d,e){__p&&__p();e===void 0&&(e=!0);a=new(h||(h=b("URI")))(a);var f=document.createElement("form");f.action=a.toString();f.method="POST";f.style.display="none";var g=!b("isFacebookURI")(a);if(d){if(g){f.rel="noopener";if(d==="_blank"){d=btoa(b("Random").uint32());var i=window.open("about:blank",d);i===void 0||(i.opener=null)}}f.target=d}if(e&&(!g&&a.getSubdomain()!=="apps")){i=b("DTSG").getToken();i&&(c.fb_dtsg=i,b("SprinkleConfig").param_name&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(i)));b("LSD").token&&(c.lsd=b("LSD").token,b("SprinkleConfig").param_name&&!i&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(b("LSD").token)))}l.createHiddenInputs(c,f);b("DOMQuery").getRootElement().appendChild(f);f.submit();return!1},createHiddenInputs:function(a,c,d,e){__p&&__p();e===void 0&&(e=!1);d=d||{};a=k(a);for(var f in a){if(a[f]===null)continue;if(d[f]&&e)d[f].value=a[f];else{var g=b("DOM").create("input",{type:"hidden",name:f,value:a[f]});d[f]=g;c.appendChild(g)}}return d},getFirstElement:function(a,c){__p&&__p();c===void 0&&(c=['input[type="text"]',"textarea",'input[type="password"]','input[type="button"]','input[type="submit"]']);var d=[];for(var e=0;e<c.length;e++){d=b("DOMQuery").scry(a,c[e]);for(var f=0;f<d.length;f++){var g=d[f];try{var h=b("getElementPosition")(g);if(h.y>0&&h.x>0)return g}catch(a){}}}return null},focusFirst:function(a){a=l.getFirstElement(a);if(a){a.focus();return!0}return!1}};e.exports=l}),null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function(a,b,c,d,e,f){__p&&__p();var g={buildRequest:function(a,c){__p&&__p();var d=(b("Form").getAttribute(a,"method")||"GET").toUpperCase();c=c&&b("Parent").byTag(c,"button")||c;var e=c&&b("Parent").byClass(c,"stat_elem")||a;if(b("CSS").hasClass(e,"async_saving"))return null;if(c&&(c.form!==a||c.nodeName!="INPUT"&&c.nodeName!="BUTTON"||c.type!="submit")){var f=b("DOMQuery").scry(a,".enter_submit_target")[0];f&&(c=f)}f=b("Form").serialize(a,c);b("Form").setDisabled(a,!0);c=b("Form").getAttribute(a,"ajaxify")||b("Form").getAttribute(a,"action");var g=!!b("Form").getAttribute(a,"data-cors");b("trackReferrer")(a,c);return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d=="GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null,a,!1)).setHandler(function(c){b("Event").fire(a,"success",{response:c})}).setErrorHandler(function(c){b("Event").fire(a,"error",{response:c})!==!1&&b("AsyncResponse").defaultErrorHandler(c)}).setFinallyHandler(b("Form").setDisabled.bind(null,a,!1))},send:function(a,b){a=g.buildRequest(a,b);a&&a.send();return a}};e.exports=g}),null);
__d("debounceCore",["TimeSlice"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d,e,f){__p&&__p();d===void 0&&(d=null);e===void 0&&(e=setTimeout);f===void 0&&(f=clearTimeout);var g;function h(){for(var f=arguments.length,i=new Array(f),j=0;j<f;j++)i[j]=arguments[j];h.reset();var k=b("TimeSlice").guard(function(){g=null,a.apply(d,i)},"debounceCore");k.__SMmeta=a.__SMmeta;g=e(k,c)}h.reset=function(){f(g),g=null};h.isPending=function(){return g!=null};return h}e.exports=a}),null);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f){function a(a,c,d,e){c===void 0&&(c=100);var f=function(a,c,d){return b("setTimeout")(a,c,d,!e)};return b("debounceCore")(a,c,d,f,b("clearTimeout"))}e.exports=a}),null);
__d("debounceAcrossTransitions",["debounce"],(function(a,b,c,d,e,f){function a(a,c,d){return b("debounce")(a,c,d,!0)}e.exports=a}),null);
__d("PluginOptin",["DOMEvent","DOMEventListener","PlatformWidgetEndpoint","PluginLoggedOutUserTypedLogger","PluginMessage","PopupWindow","URI","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a,c){Object.assign(this,{return_params:(g||(g=b("URI"))).getRequestURI().getQueryData(),login_params:{},optin_params:{},plugin:a,api_key:c}),this.addReturnParams({ret:"optin"}),delete this.return_params.hash}Object.assign(h.prototype,{addReturnParams:function(a){Object.assign(this.return_params,a);return this},addLoginParams:function(a){Object.assign(this.login_params,a);return this},addOptinParams:function(a){Object.assign(this.optin_params,a);return this},start:function(){var a=this.api_key||127760087237610;(g||(g=b("URI"))).getRequestURI().getQueryData().kid_directed_site&&(this.login_params.kid_directed_site=!0);this.login_params.referrer=document.referrer;var c=new(g||(g=b("URI")))(b("PlatformWidgetEndpoint").dialog("plugin.optin")).addQueryData(this.optin_params).addQueryData({app_id:a,secure:g.getRequestURI().isSecure(),social_plugin:this.plugin,return_params:JSON.stringify(this.return_params),login_params:JSON.stringify(this.login_params)});b("UserAgent_DEPRECATED").mobile()?c.setSubdomain("m"):c.addQueryData({display:"popup"});this.return_params.act!==null&&this.return_params.act==="send"&&new(b("PluginLoggedOutUserTypedLogger"))().setPluginAppID(a).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();this.popup=b("PopupWindow").open(c.toString(),420,450);b("PluginMessage").listen();return this}});h.starter=function(a,b,c,d){a=new h(a);a.addReturnParams(b||{});a.addLoginParams(c||{});a.addOptinParams(d||{});return a.start.bind(a)};h.listen=function(a,c,d,e,f){b("DOMEventListener").add(a,"click",function(a){new(b("DOMEvent"))(a).kill(),h.starter(c,d,e,f)()})};e.exports=h}),null);
__d("PluginConnectButton",["Arbiter","CSS","DOM","DOMEvent","DOMEventListener","Focus","FormSubmit","PlatformWidgetEndpoint","Plugin","PluginOptin","URI"],(function(a,b,c,d,e,f){__p&&__p();var g,h="new",i=b("Arbiter").subscribe,j=function(a,c){return b("DOMEventListener").add(a,"click",c)};function a(a){__p&&__p();this.config=a;this.busy=!1;var c=b("DOM").find(a.form,".pluginConnectButton");this.buttons=c;this.node_connected=b("DOM").find(c,".pluginConnectButtonConnected");this.node_disconnected=b("DOM").find(c,".pluginConnectButtonDisconnected");var d=function(a){new(b("DOMEvent"))(a).kill(),this.busy||(this.submit(),this.busy=this.canpersonalize)}.bind(this);j(this.node_disconnected,d);a.buttontype===1?j(b("DOM").find(c,".pluginButtonX button"),d):a.buttontype===2&&j(this.node_connected,d);j(this.node_connected,function(a){return b("Arbiter").inform(b("Plugin").DIALOG,a)});c=this.update.bind(this);i(b("Plugin").CONNECT,c,h);i(b("Plugin").DISCONNECT,c,h);i(b("Plugin").ERROR,this.error.bind(this),h)}Object.assign(a.prototype,{update:function(a,c){__p&&__p();this.busy=!1;var d=this.config;if(c.identifier!==d.identifier)return;c=a===b("Plugin").CONNECT;a=b("PlatformWidgetEndpoint").plugins(d.plugin);a+="/"+(c?"disconnect":"connect");b("CSS")[c?"show":"hide"](this.node_connected);b("CSS")[c?"hide":"show"](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==="button"){var e=c?this.node_connected:this.node_disconnected;e=b("DOM").find(e,"button");e.disabled=!1;b("Focus").set(e)}}catch(a){}d.connected=c;d.form.setAttribute("action",a);d.form.setAttribute("ajaxify",a)},error:function(a,c){this.busy=!1;if(c.action in{connect:1,disconnect:1}){b("DOM").setContent(this.buttons,c.content);a=b("DOM").scry(this.buttons,".confirmButton");a.length===1&&b("Focus").set(a[0])}},submit:function(){if(!this.config.canpersonalize)return this.login();b("FormSubmit").send(this.config.form);this.fireStateToggle()},fireStateToggle:function(){var a=this.config;a.connected?b("Plugin").disconnect(a.identifier):b("Plugin").connect(a.identifier)},login:function(){var a=this.config.plugin;new(b("PluginOptin"))(a,(g||(g=b("URI"))).getRequestURI().getQueryData().api_key).addReturnParams({act:"connect"}).addLoginParams({social_plugin_action:this.config.pluginaction,kid_directed_site:this.config.kidDirectedSite}).start()}});e.exports=a}),null);
__d("Button",["csx","cx","CSS","DataStore","DOM","Event","Parent","emptyFunction","isNode"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="uiButtonDisabled",j="uiButtonDepressed",k="_42fr",l="_42fs",m="button:blocker",n="href",o="ajaxify";function p(a,c){var d=b("DataStore").get(a,m);c?d&&(d.remove(),b("DataStore").remove(a,m)):d||b("DataStore").set(a,m,b("Event").listen(a,"click",b("emptyFunction").thatReturnsFalse,b("Event").Priority.URGENT))}function q(a){a=b("Parent").byClass(a,"uiButton")||b("Parent").bySelector(a,"._42ft");if(!a)throw new Error("invalid use case");return a}function r(a){return b("DOM").isNodeOfType(a,"a")}function s(a){return b("DOM").isNodeOfType(a,"button")}function t(a){return b("CSS").matchesSelector(a,"._42ft")}var u={getInputElement:function(a){a=q(a);if(r(a))throw new Error("invalid use case");return s(a)?a:b("DOM").find(a,"input")},isEnabled:function(a){return!(b("CSS").hasClass(q(a),i)||b("CSS").hasClass(q(a),k))},setEnabled:function(a,c){__p&&__p();a=q(a);var d=t(a)?k:i;b("CSS").conditionClass(a,d,!c);if(r(a)){d=a.getAttribute("href");var e=a.getAttribute("ajaxify"),f=b("DataStore").get(a,n,"#"),g=b("DataStore").get(a,o);c?(d||a.setAttribute("href",f),!e&&g&&a.setAttribute("ajaxify",g),a.removeAttribute("tabIndex")):(d&&d!==f&&b("DataStore").set(a,n,d),e&&e!==g&&b("DataStore").set(a,o,e),a.removeAttribute("href"),a.removeAttribute("ajaxify"),a.setAttribute("tabIndex","-1"));p(a,c)}else{f=u.getInputElement(a);f.disabled=!c;p(f,c)}},setDepressed:function(a,c){a=q(a);var d=t(a)?l:j;b("CSS").conditionClass(a,d,c)},isDepressed:function(a){a=q(a);var c=t(a)?l:j;return b("CSS").hasClass(a,c)},setLabel:function(a,c){__p&&__p();a=q(a);if(t(a)){var d=[];c&&d.push(c);var e=b("DOM").scry(a,".img");for(var f=0;f<e.length;f++){var g=e[f],h=g.parentNode;h.classList&&(h.classList.contains("_4o_3")||h.classList.contains("_-xe"))?a.firstChild===h?d.unshift(h):d.push(h):a.firstChild==g?d.unshift(g):d.push(g)}b("DOM").setContent(a,d)}else if(r(a)){h=b("DOM").find(a,"span.uiButtonText");b("DOM").setContent(h,c)}else u.getInputElement(a).value=c;g=t(a)?"_42fv":"uiButtonNoText";b("CSS").conditionClass(a,g,!c)},getIcon:function(a){a=q(a);return b("DOM").scry(a,".img")[0]},setIcon:function(a,c){if(c&&!b("isNode")(c))return;var d=u.getIcon(a);if(!c){d&&b("DOM").remove(d);return}b("CSS").addClass(c,"customimg");d!=c&&(d?b("DOM").replace(d,c):b("DOM").prependContent(q(a),c))}};e.exports=u}),null);
__d("randomInt",["invariant"],(function(a,b,c,d,e,f,g){function a(a,b){var c=arguments.length;c>0&&c<=2||g(0,1179,c);c===1&&(b=a,a=0);b=b;b>a||g(0,1180,b,a);var d=this.random||Math.random;return Math.floor(a+d()*(b-a))}e.exports=a}),null);
__d("ClientIDs",["randomInt"],(function(a,b,c,d,e,f){var g={};a={getNewClientID:function(){var a=Date.now();a=a+":"+(b("randomInt")(0,4294967295)+1);g[a]=!0;return a},isExistingClientID:function(a){return!!g[a]}};e.exports=a}),null);
__d("getContextualParent",["ge"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c===void 0&&(c=!1);var d=!1;a=a;do{if(a instanceof Element){var e=a.getAttribute("data-ownerid");if(e){a=b("ge")(e);d=!0;continue}}a=a.parentNode}while(c&&a&&!d);return a}e.exports=a}),null);
__d("throttle",["TimeSlice","TimeSliceInteractionSV","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d){return g(a,c,d,b("setTimeout"),!1)}Object.assign(a,{acrossTransitions:function(a,c,d){return g(a,c,d,b("setTimeoutAcrossTransitions"),!1)},withBlocking:function(a,c,d){return g(a,c,d,b("setTimeout"),!0)},acrossTransitionsWithBlocking:function(a,c,d){return g(a,c,d,b("setTimeoutAcrossTransitions"),!0)}});function g(a,c,d,e,f){__p&&__p();var g=c==null?100:c,h,i,j=0,k=null,l=[],m=b("TimeSlice").guard(function(){__p&&__p();j=Date.now();if(i){var b=function(b){a.apply(h,b)}.bind(null,i),c=l.length;while(--c>=0)b=l[c].bind(null,b);l=[];b();i=null;k=e(m,g)}else k=null},"throttle_"+g+"_ms",{propagationType:b("TimeSlice").PropagationType.EXECUTION,registerCallStack:!0});m.__SMmeta=a.__SMmeta;return function(){b("TimeSliceInteractionSV").ref_counting_fix&&l.push(b("TimeSlice").getGuardedContinuation("throttleWithContinuation")),i=arguments,h=this,d!==void 0&&(h=d),(k===null||Date.now()-j>g)&&(f?m():k=e(m,0))}}e.exports=a}),null);