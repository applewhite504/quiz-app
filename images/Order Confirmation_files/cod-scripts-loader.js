if(typeof(console) ==='undefined'){
 console={};
 console.log = function(e){}
}
function isCodInIframe() {			
	try
	{	
		var isCodInIframeFlag = (window.location != window.parent.location) ? true : false;	
        if (isCodInIframeFlag) {
			var ifr_src =window.frameElement.src;
			//added by prajjwal to check 
			var is_tracking = ifr_src.includes("finishorder.php");
            var isCodInIframeFlag = (window.frameElement.id == "preview_pane" || is_tracking) ? false : true; //if yahoo iframe or bigcommerce tracking code for optimized single page checkout
        }	
		return isCodInIframeFlag;				
	}
	catch (e)  
	{		
		var isCodInIframeFlag = (window.location != window.parent.location) ? true : false;		
		return isCodInIframeFlag;
	}	
}
//if(!isCodInIframe())
	//return false;
/*http://www.dustindiaz.com/async-method-queues/*/
function Queue() {this._methods = [];this._response = null;this._flushed = false;}
Queue.prototype = {
 add: function(fn) {if (this._flushed) {fn(this._response);} else {this._methods.push(fn);}},
 flush: function(resp) {if (this._flushed){ return; }this._response = resp;this._flushed = true;while (this._methods[0]) {this._methods.shift()(resp);}}
};
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.1 (c) Kyle Simpson
    MIT License
*/
                                                                                         
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){setTimeout(a.finished_listeners[c],0)}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g();a.onreadystatechange=null}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){I(b);d=null}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){setTimeout(e.ready_listeners[a],0)}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){setTimeout(j,0)}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j]()}catch(err){console.log(err);/*alert(err)*/}}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.push(d,1);c.splice.call(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);																																					

var cod_totalTimer;
var COD = {};
COD.DOM = {
  _doc: document,
	$:function(el){return this._doc.getElementById(el);},
	setStyle:function(el,name,value){
		try{
		var el_style = this.$(el).style;
		el_style[name]=value;
		}catch(e){}
	},
	getStyle:function(el,styleProp){
	  var x = this.$(el);var y ='';
	  if (x.currentStyle){
		 var y = x.currentStyle[styleProp];
	  }	else if (window.getComputedStyle){
		  var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
	  }
	  return y;
	}
};
COD.Settings = {
	_readyState : false,
	_baseURL : 'https://www.conversionsondemand.com/codadmin2/',
	_serviceURL : 'https://www.conversionsondemand.com/codadmin2/framework/',
	_currentPage : '',
	_currentDomain : '',
	_currentPlatform : '',
	setDefaults : function(params) {
		this._currentPage = params.page;
		this._currentDomain = params.stoken;
		this._currentPlatform = params.platform;
	}
};
COD.Platforms = {};
COD.Services = (function() {
	var _modules = {
		'count' : 0,
		'names' : [],
		'hooks' : {}
	};
	var _hooks = [ 'onPageLoad', 'onPageExit', 'onClick' ];
	var _plugin_platform = '';
	return {
		getServiceURL : function() {
			return COD.Settings._serviceURL;
		},
		getBaseURL : function() {
			return COD.Settings._baseURL;
		},
		/*LoadModules : function(module) {
			for ( var i = 0; i < module.length; i++) {
				if (typeof (COD.Settings[module[i]]) !== 'undefined'
						&& COD.Settings[module[i]].Activate === 1) {
					var scr_src = COD.Settings._serviceURL + 'core/' + 'cod-'
							+ module[i].toLowerCase() + '-module.js?ts='
							+ Math.floor(Math.random() * 10000);
					$LAB.queueScript(scr_src);
				}
			}
		},*/
		/*Init : function(params) {
			console.log(COD.Settings);
			if (!params) {
				//return;
			}
			COD.Settings.setDefaults(params);
			//this.LoadModules(params.modules);
		},*/
		Attach : function(module) {
			function arraySort(a, b) {
				return a.priority > b.priority;
			}
			var _hookQueue = new Queue();
			try {
				var _moduleInstance = this[module.name].call();
				var _dependencies = _moduleInstance.dependencies();
				if (_dependencies.js) {
					for ( var j = 0; j < _dependencies.js.length; j++) {
						$LAB.queueScript(_dependencies.js[j]);

					}
				}
				if (_dependencies.css) {
					for ( var j = 0; j < _dependencies.css.length; j++) {
						var style = document.createElement('link');
						style.rel = 'stylesheet';
						style.type = 'text/css';
						style.href = _dependencies.css[j];
						var h = document.getElementById('codScripts');
						h.parentNode.insertBefore(style, h);
					}
				}
				/*
				 * var _plugin_platform_js = COD.Settings._serviceURL + 'plugins/' +
				 * 'cod-' + COD.Settings._currentPlatform + '-plugin.js?ts=' +
				 * Math.floor(Math.random() * 10000); if (_modules.count === 0) {

				 * $LAB.queueScript(_plugin_platform_js); }
				 */
				_modules.names.push(module.name);
				_modules.count++;
				var _moduleHooks = _moduleInstance.hooks();
				for ( var j = 0; j < _hooks.length; j++) {
					if (_moduleHooks.hasOwnProperty(_hooks[j])) {
						_moduleHooks[_hooks[j]].sort(arraySort);
					}
				}
				$LAB.queueWait(function() {
					var strHooks = _hooks.join(',');
					for ( var keys in _moduleHooks) {
						if (strHooks.indexOf(keys) !== -1
								&& _moduleHooks[keys] instanceof Array) {
							if (_moduleHooks[keys].length > 0) {
								for ( var j = 0; j < _moduleHooks[keys].length; j++) {
									var _moduleHookName = _moduleHooks[keys][j]['hook'];
									var _moduleHookParams = {};
									if ('params' in _moduleHooks[keys][j]) {
										_moduleHookParams = _moduleHooks[keys][j]['params'];
									}
									_moduleInstance[_moduleHookName](_moduleInstance,
											_moduleHookParams);
								}
							}
						}
					}
				});
				$LAB.runQueue();
			} catch (e) {
				//console.log(e);
				//alert(e);
				return;
			}
		},
		Render : function() {
			$LAB.runQueue();
		}
	};
})();
COD.Utils = (function() {
	String.prototype.CODescapeHTML = function() {
			return this.split('&').join('&amp;').split('"').join('&quot;').split('<').join('&lt;');
	}
    /*Array.prototype.CODgetUniqueArray = function(){
        var u = {}, a = [];
        for(var i = 0, l = this.length; i < l; ++i){
          if(u.hasOwnProperty(this[i])) {
             continue;
          }
          a.push(this[i]);
          u[this[i]] = 1;
        }
        return a;
    }*/
	return {
ParseUriLow: function(str) {
            var o = {
                strictMode: false,
                key: ["source", "protocol", "authority", "userInfo", "user",
                    "password", "host", "port", "relative", "path", "directory",
                    "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, m = o.parser[o.strictMode ? "strict" : "loose"].exec(str), uri = {}, z, i = 14;
            while (i--)
                uri[o.key[i]] = m[i] || "";
            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
                if ($1)
                    uri[o.q.name][$1.toLowerCase()] = $2;
            });
            return uri;
        },
        ParseUri : function(str) {
			var o = {
				strictMode : false,
				key : [ "source", "protocol", "authority", "userInfo", "user",
						"password", "host", "port", "relative", "path", "directory",
						"file", "query", "anchor" ],
				q : {
					name : "queryKey",
					parser : /(?:^|&)([^&=]*)=?([^&]*)/g
				},
				parser : {
					strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
					loose : /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
				}
			}, m = o.parser[o.strictMode ? "strict" : "loose"].exec(str), uri = {}, z, i = 14;
			while (i--)
				uri[o.key[i]] = m[i] || "";
			uri[o.q.name] = {};
			uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
				if ($1)
					uri[o.q.name][$1] = $2;
			});
			return uri;
		},
		// Cookie functions
		GetCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for ( var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1, c.length);
				}
				if (c.indexOf(nameEQ) == 0) {
					return c.substring(nameEQ.length, c.length);
				}
				;
			}
			return "";
		},
		SetCookie : function(name, value, expires, path, domain, secure) {
			var cookieString = name + "=" + escape(value)
					+ ((expires) ? ";expires=" + expires.toGMTString() : "")
					+ ((path) ? ";path=" + path : "")
					+ ((domain) ? ";domain=" + domain : "") + ((secure) ? ";secure" : "");
			document.cookie = cookieString;
		},		
		// End Cookie functions
		// Getting hostname of a store domain (usefull for getting exact domain for subdomain url)		
		get_hostname: function () {			

			var TLDs = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", 
			
			"as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", 
			
			"bm", "bn", "bo", "br", "bs", "bt", "buzz", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", 
			
			"ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", 
			
			"dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", 
			
			"ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", 
			
			"gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", 
			
			"iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", 
			
			"kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", 
			
			"me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", 
			
			"museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", 
			
			"np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", 
			
			"ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", 
			
			"si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", 
			
			"tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", 
			
			"ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", 
			
			"xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", 
			
			"xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", 
			
			"xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", 
			
			"xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", 
			
			"xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", 
			
			"xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", 
			
			"xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", 
			
			"yt", "za", "zm", "zw"].join();			
			
				var url = document.location.hostname;
			
				var parts = url.split('.');
				if (parts[0] === 'www' && parts[1] !== 'com'){
					parts.shift()
				}
				var ln = parts.length
				  , i = ln
				  , minLength = parts[parts.length-1].length
				  , part
			
				// iterate backwards
				while(part = parts[--i]){
					// stop when we find a non-TLD part
					if (i === 0                    // 'asia.com' (last remaining must be the SLD)
						|| i < ln-2                // TLDs only span 2 levels
						|| part.length < minLength // 'www.cn.com' (valid TLD as second-level domain)
						|| TLDs.indexOf(part) < 0  // officialy not a TLD
					){
						if(minLength>=3) {				
							if(typeof(parts[i+1])!='undefined')
								return part + '.' + parts[i+1];				
							else
								return part;				
						}
						else {
							if(typeof(parts[i+2])!='undefined')
								return part + '.' + parts[i+1] + '.' + parts[i+2];
							else
								return part + '.' + parts[i+1];
						}
					}
				}
		},
		// Event Handlers
		AddEvent : function(elm, evType, fn) {
			if (elm.addEventListener) {
				elm.addEventListener(evType, fn, false);
				return true;
			} else if (elm.attachEvent) {
				var r = elm.attachEvent('on' + evType, fn);
				return r;
			} else {
				elm['on' + evType] = fn;
			}
		},
		RemoveEvent : function(obj, type, fn) {
			if (obj.removeEventListener)
				obj.removeEventListener(type, fn, false);
			else if (obj.detachEvent) {
				obj.detachEvent("on" + type, obj[type + fn]);
				obj[type + fn] = null;
				obj["e" + type + fn] = null;
			}
		},
		// End Event Handlers
		getElementsByClassName : function(searchClass, node, tag) {
			var retnode = [];
			var myclass = new RegExp('\\b' + searchClass + '\\b');
			if (typeof (node) === 'undefined') {
				node = document;
			}
			if (typeof (tag) === 'undefined') {
				tag = '*';
			}
			var elem = node.getElementsByTagName(tag);
			for ( var i = 0; i < elem.length; i++) {
				var classes = elem[i].className;
				if (myclass.test(classes))
					retnode.push(elem[i]);
			}
			return retnode;
		},
		InArray : function(needle, haystack, strict) {
			var found = false, key, strict = !!strict;
			for (key in haystack) {
				if ((strict && haystack[key] === needle)
						|| (!strict && haystack[key] == needle)) {
					found = true;
					break;
				}
			}
			return found;
		},
		isArray: function (obj) {
			// Use compiler's own isArray when available
			if (Array.isArray) {				
				return Array.isArray(obj);
			}		 
			// Retain references to variables for performance		
			var objectToStringFn = Object.prototype.toString,
			arrayToStringResult = objectToStringFn.call([]);
			return objectToStringFn.call(obj) === arrayToStringResult;
			
		},
		
		array_sum: function (array) {
			// discuss at: http://phpjs.org/functions/array_sum/
			// original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			// bugfixed by: Nate
			// bugfixed by: Gilbert
			// improved by: David Pilia (http://www.beteck.it/)
			// improved by: Brett Zamir (http://brett-zamir.me)
			// modified by: Shishir Raj Adhikari (shishir.adhikari@gmail.com)
			// example 1: array_sum([4, 9, 182.6]);
			// returns 1: 195.6
			// example 2: total = []; index = 0.1; for (y=0; y < 12; y++){total[y] = y + index;}
			// example 2: array_sum(total);
			// returns 2: 67.2
		 
		 	// input sanitation				
			// return zero if the input is not an array
			if (Object.prototype.toString.call(array) !== '[object Array]') {
				return 0;
			}
			//return zero if array is blank
			if (array.length==0) return 0;
			
			if ('function' === typeof Array.prototype.reduce) {		  	
				return array.reduce(function(a, b){ if (isNaN(parseFloat(a))) a = 0;  if (isNaN(parseFloat(b))) b = 0; return parseFloat(a) + parseFloat(b); });
			}
			
			var key, sum = 0;
			
			if (array && typeof array === 'object' && array.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
				return array.sum.apply(array, Array.prototype.slice.call(arguments, 0));
			}
						
			for (key in array) {
				if (!isNaN(parseFloat(array[key]))) {
				  sum += parseFloat(array[key]);
				}
			}
			
			return sum;
		},
		GetOrd : function(string){
		          //SOURCE: http://phpjs.org/functions/ord/
    	          var str = string + '';
                  code = str.charCodeAt(0);
                  if (0xD800 <= code && code <= 0xDBFF) { 
                    var hi = code;
                    if (str.length === 1) {
                      return code; 
                    }
                    var low = str.charCodeAt(1);
                    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
                  }
                  if (0xDC00 <= code && code <= 0xDFFF) {
                    return code;
                  }
                  code = "&#"+code+";";
                  return code;
	    },
		str_replace_custom: function (sval, repval, subject) {
			// original by: Shishir Raj Adhikari (shishir.adhikari@gmail.com)
			// for string type
			// example1: COD.Utils.str_replace_custom("\\$","",'$12.5');
			// example2: COD.Utils.str_replace_custom("\\.5","",'$12.5');
			// example3: COD.Utils.str_replace_custom("2","",'$12.5');
			// example4: COD.Utils.str_replace_custom("abc","",'abc12.5'); 
			//			 OR COD.Utils.str_replace_custom("\\abc","",'abc12.5');
			
			// for array type
			// example1: COD.Utils.str_replace_custom("\\$","",new Array('$12.5', '$5.5'));
			// example2: COD.Utils.str_replace_custom("\\.5","",new Array('$12.5', '$5.5'));
			// example3: COD.Utils.str_replace_custom("2","",new Array('$12.5', '$5.5'));
			// example3: COD.Utils.str_replace_custom("abc","",new Array('abc12.5', 'abc5.5')); 
			// 			OR COD.Utils.str_replace_custom("\\abc","",new Array('abc12.5', 'abc5.5'));
						
			// input sanitation
			// return the string iteslf if the input is not an array
			if (Object.prototype.toString.call(subject) !== '[object Array]') {					
				return subject.replace(new RegExp(sval,'gi'), repval);				
			}
			// return blank if array is blank
			if (subject.length==0) return '';
			
			// joining the separator
			var _strjoin = subject.join("~").toString();
			return _strjoin.replace(new RegExp(sval,'gi'), repval).split('~');			
		},	
		preloadimages:function(){},
		qualifyURLImg : function(url) {
			var img = document.createElement('img');
			img.src = url; // set string url
			url = img.src; // get qualified url
			img.src = null; // no server request
			return url;
		},		
		qualifyURL : function (url) {
			if(url!="") {
				var element = document.createElement('span');
				element.innerHTML = '<a href="'+url.CODescapeHTML()+'">&nbsp;</a>';
				return element.firstChild.href;
			} else {
				return document.location;
			}
		},		
		/* string trimmers in javascript */
		trim : function(stringToTrim) {
			return stringToTrim.replace(/^\s+|\s+$/g, "");
		},
		ltrim : function(stringToTrim) {
			return stringToTrim.replace(/^\s+/, "");
		},
		rtrim : function(stringToTrim) {
			return stringToTrim.replace(/\s+$/, "");
		}, /* string trimmers in javascript */
		serialize:function(mixed_value){
		   function serialize (mixed_value) {
    // http://kevin.vanzonneveld.net
    // +   original by: Arpad Ray (mailto:arpad@php.net)
    // +   improved by: Dino
    // +   bugfixed by: Andrej Pavlovic
    // +   bugfixed by: Garagoth
    // +      input by: DtTvB (http://dt.in.th/2008-09-16.string-length-in-bytes.html)
    // +   bugfixed by: Russell Walker (http://www.nbill.co.uk/)
    // +   bugfixed by: Jamie Beck (http://www.terabit.ca/)
    // +      input by: Martin (http://www.erlenwiese.de/)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
    // +   improved by: Le Torbi (http://www.letorbi.de/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
    // +   bugfixed by: Ben (http://benblume.co.uk/)
    // -    depends on: utf8_encode
    // %          note: We feel the main purpose of this function should be to ease the transport of data between php & js
    // %          note: Aiming for PHP-compatibility, we have to translate objects to arrays
    // *     example 1: serialize(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}'
    // *     example 2: serialize({firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'});
    // *     returns 2: 'a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}'
    var _utf8Size = function (str) {
        var size = 0,
            i = 0,
            l = str.length,
            code = '';
        for (i = 0; i < l; i++) {
            code = str.charCodeAt(i);
            if (code < 0x0080) {
                size += 1;
            } else if (code < 0x0800) {
                size += 2;
            } else {
                size += 3;
            }
        }
        return size;
    };
    var _getType = function (inp) {
        var type = typeof inp,
            match;
        var key;

        if (type === 'object' && !inp) {
            return 'null';
        }
        if (type === "object") {
            if (!inp.constructor) {
                return 'object';
            }
            var cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                cons = match[1].toLowerCase();
            }
            var types = ["boolean", "number", "string", "array"];
            for (key in types) {
                if (cons == types[key]) {
                    type = types[key];
                    break;
                }
            }
        }
        return type;
    };
    var type = _getType(mixed_value);
    var val, ktype = '';

    switch (type) {
    case "function":
        val = "";
        break;
    case "boolean":
        val = "b:" + (mixed_value ? "1" : "0");
        break;
    case "number":
        val = (Math.round(mixed_value) == mixed_value ? "i" : "d") + ":" + mixed_value;
        break;
    case "string":
        val = "s:" + _utf8Size(mixed_value) + ":\"" + mixed_value + "\"";
        break;
    case "array":
    case "object":
        val = "a";
/*
            if (type == "object") {
                var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
                if (objname == undefined) {
                    return;
                }
                objname[1] = this.serialize(objname[1]);
                val = "O" + objname[1].substring(1, objname[1].length - 1);
            }
            */
        var count = 0;
        var vals = "";
        var okey;
        var key;
        for (key in mixed_value) {
            if (mixed_value.hasOwnProperty(key)) {
                ktype = _getType(mixed_value[key]);
                if (ktype === "function") {
                    continue;
                }

                okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                vals += serialize(okey) + serialize(mixed_value[key]);
                count++;
            }
        }
        val += ":" + count + ":{" + vals + "}";
        break;
    case "undefined":
        // Fall-through
    default:
        // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
        val = "N";
        break;
    }
    if (type !== "object" && type !== "array") {
        val += ";";
    }
    return val;
}
    return serialize(mixed_value)
		}
	
	};
})();

var COD_TPC = {
	'init' : function() {
		var dt = new Date();
		var d = COD.DOM.$('codScripts');
		var s = document.createElement('script');
		s.src = COD.Settings._serviceURL + 'cookieCheck_initial.js.php?dt='
				+ dt.getTime();
		d.parentNode.insertBefore(s, d);
	},
	'module':function(m){
		COD.Settings.modules = m; 
		COD.Settings.setDefaults(COD_CONFIG);
	},
	'init_global':function(params){
		var dt_add = new Date();
		var d_add = COD.DOM.$('codScripts');
		var s_add = document.createElement('script');
		s_add.src = COD.Settings._serviceURL + 'global_script.php?p='+COD_CONFIG.platform+'&d='+COD_CONFIG.stoken+'&dt='
				+ dt_add.getTime();
		d_add.parentNode.insertBefore(s_add, d_add);
		/*this._currentDomain = params.stoken;
		this._currentPlatform = params.platform;*/
    },
    'init_fingerprint': function(){
        var dt_add = new Date();
        var d_add = COD.DOM.$('codScripts');
        var s_add = document.createElement('script');
        s_add.src = COD.Settings._serviceURL + 'generate-fp2.php?d=' + COD_CONFIG.stoken + '&dt=' + dt_add.getTime();
        d_add.parentNode.insertBefore(s_add, d_add);
	},
	'page_guid' : function() {
		var _default_guid = 'NON-PRODUCT';
		try {
			if (typeof (cod_cdt_isNotProductPage) === 'number'
					&& cod_cdt_isNotProductPage === 1) {
				return 'NON-PRODUCT';
			}
			if (typeof (cod_cdt_isProductPage) === 'number'
					&& cod_cdt_isProductPage === 1) {
				return 'PRODUCT';
			}
			if (typeof (cod_cdt_isShoppingCart) === 'number'
					&& cod_cdt_isShoppingCart === 1) {
				return 'CART';
			}
			if (typeof (cc_current_page_display) !== 'undefined'
					&& cc_current_page_display == 'cc_display_cart_page') {
				return 'CART';
			}
			if (typeof (cod_cdt_isShippingBilling) === 'number'
					&& cod_cdt_isShippingBilling === 1) {
				return 'CHECKOUT';
			}
			if (typeof (cc_current_page_display) !== 'undefined') {
				if (cc_current_page_display == 'cc_display_cart_page') {
					return 'CART';
				} else if (cc_current_page_display == 'cc_display_shopping_page') {
					return 'CHECKOUT';
				}
			}
			if (typeof (cod_page_guid) !== 'undefined') {
				return cod_page_guid;
			}
		} catch (e) {
		}
		return _default_guid;
	},
	'cod_checkTotal':function(){
		if(typeof(cod_ProductPageSubTotal) !== 'undefined') { 
			cod_ProductPageSubTotal(); clearInterval(cod_totalTimer); 
		} 
	},
	'callback' : function(params) {
		var codIsIframed=isCodInIframe();
		//console.log("codIsIframed",codIsIframed);
		if (params.initial && typeof(codIsIframed)!="undefined" && !codIsIframed) {
			var dt = new Date();
			COD_CONFIG.page = COD_TPC.page_guid();
			if(typeof(jQuery) == 'undefined'){jq= 0;} else { jq=1;}					
			var _cod_rand = new Date();//5-10			

	                var _client_uri = COD.Utils.ParseUriLow(window.location);
	                var _utm_keys = {'utm_source':'uso','utm_medium':'utmm','utm_term':'utt','utm_campaign':'utca','utm_content':'utco','gclid':'ugld'};
	                var utm_query_string = '';
	                for (ux in _utm_keys) {
	                if (_client_uri.queryKey[ux] !== undefined && _client_uri.queryKey[ux].length > 0) {
	                    utm_query_string += '&' + _utm_keys[ux] + '=' + _client_uri.queryKey[ux];
	                    }
	                }
			var _settings_loader = COD.Settings._serviceURL
					+ 'cod-services-loader.php?d=' + COD_CONFIG.stoken + '&p='
                    + COD_CONFIG.platform + '&pg=' + COD_CONFIG.page + '&jq=' + jq + utm_query_string + '&urfs=' + encodeURIComponent(document.referrer)+ '&fp=' + params.fp + '&cod_tmp_rands=' + _cod_rand.getTime();//5-10
			$LAB.script(_settings_loader).wait( function(){
				COD.Services.Render();
				if(COD_CONFIG.page ==='PRODUCT' || COD_CONFIG.page ==='NON-PRODUCT'){ 
				//console.log("aye");
					cod_totalTimer = setInterval(function(){COD_TPC.cod_checkTotal();},100); 
				} else if(COD_CONFIG.page ==='CART'){
					if(typeof(cod_CartSubTotal)!="undefined"){
				   subtotal  =  cod_CartSubTotal() ;
					 var cartTrack = document.createElement('script');
                        cartTrack.src = COD.Services.getServiceURL() + 'cod-cart-track.php?r=cc_subtotal&p=' + COD.Settings._currentPlatform + '&d=' + COD.Settings._currentDomain + '&t=' + subtotal + '&fp=' + COD.Utils.GetCookie('cod_fp') + '&cod_tmp_rands=' + _cod_rand.getTime();//5-10;
					 
var codScriptsDiv = document.getElementById('codScripts');
codScriptsDiv.parentNode.insertBefore(cartTrack, codScriptsDiv);
					}
				} else if(COD_CONFIG.page ==='CHECKOUT'){
					if(typeof(cod_CartSubTotal)!="undefined"){
				   subtotal  =  cod_CartSubTotal() ;
				   //console.log(currentCartTotal);
				   if(typeof(currentCartTotal)!="undefined" && subtotal==0){
					   subtotal=currentCartTotal;
					}
					 var cartTrack = document.createElement('script');
                        cartTrack.src = COD.Services.getServiceURL() + 'cod-cart-track.php?r=cc_subtotal&p=' + COD.Settings._currentPlatform + '&d=' + COD.Settings._currentDomain + '&t=' + subtotal + '&fp=' + COD.Utils.GetCookie('cod_fp') + '&cod_tmp_rands=' + _cod_rand.getTime();//5-10;
					 
var codScriptsDiv = document.getElementById('codScripts');
codScriptsDiv.parentNode.insertBefore(cartTrack, codScriptsDiv);

				 var cartTracks = document.createElement('script');
                        cartTrack.src = COD.Services.getServiceURL() + 'core/ttb.php?find=subtotal&r=cc_subtotal&p=' + COD.Settings._currentPlatform + '&d=' + COD.Settings._currentDomain + '&t=' + subtotal + '&fp=' + COD.Utils.GetCookie('cod_fp') + '&cod_tmp_rands=' + _cod_rand.getTime();//5-10;
					 
var codScriptsDivs = document.getElementById('codScripts');
codScriptsDivs.parentNode.insertBefore(cartTracks, codScriptsDivs);

					}
				}
			});
		}
	}
};
COD_TPC.init();//EOL
//EOC