device_type='computer';var js_cod_stp = '1';var cod_cm_services = 'CC;;T2B';var domain="";
var currentPage="";
var platform="";

Hilite = {
    elementid: "content",
    exact: true,
    max_nodes: 1000,
    onload: false,
    style_name: "hilite",
    style_name_suffix: true,
    debug_referrer: ""
};
Hilite.search_engines = [
    ["google\\.", "q"],
    ["search\\.yahoo\\.", "p"],
    ["search\\.msn\\.", "q"],
    ["search\\.live\\.", "q"],
    ["search\\.aol\\.", "query"],
    ["ask\\.com", "q"],
    ["altavista\\.", "q"],
    ["feedster\\.", "q"],
    ["search\\.lycos\\.", "query"],
    ["alltheweb\\.", "q"],
    ["technorati\\.com/search/([^\\?/]+)", 1],
    ["dogpile\\.com/info\\.dogpl/search/web/([^\\?/]+)", 1, true]
];
Hilite.decodeReferrer = function(d) {
    var g = null;
    for (var c = 0; c < Hilite.search_engines.length; c++) {
        var f = Hilite.search_engines[c];
        var e = new RegExp("^http://(www\\.)?" + f[0], "i");
        var b = d.match(e);
        if (b) {
            var a;
            if (isNaN(f[1])) {
                a = Hilite.decodeReferrerQS(d, f[1])
            } else {
                a = b[f[1] + 1]
            }
            if (a) {
                a = decodeURIComponent(a);
                if (f.length > 2 && f[2]) {
                    a = decodeURIComponent(a)
                }
                a = a.replace(/\'|"/g, "");
                a = a.replace(/\+/g, " ");
                return a
            }
            break
        }
    }
    return null
};
Hilite.decodeReferrerQS = function(h, e) {
    var i = h.indexOf("?");
    var d;
    var f = 0;
    if (i >= 0) {
        var g = new String(h.substring(i + 1));
        i = 0;
        d = 0;
        var c = g.split("=");
        var a = c.length - 1;
        if (g.indexOf(e, i) >= 0) {
            while ((i >= 0) && ((d = g.indexOf("=", i)) >= 0)) {
                var j, b;
                f++;
                j = g.substring(i, d);
                i = g.indexOf("&", d) + 1;
                if (j == e) {
                    if (i <= 0) {
                        return g.substring(d + 1)
                    } else {
                        return g.substring(d + 1, i - 1)
                    }
                }
                if (f > a) {
                    return null
                }
            }
        }
    }
    return null
};
Hilite.hilite = function() {
    var a = Hilite.debug_referrer ? Hilite.debug_referrer : document.referrer;
    var b = null;
    a = Hilite.decodeReferrer(a);
    if (a) {
        return a
    } else {
        return ""
    }
};
urlref = document.referrer;
if(urlref.indexOf("www.google.com")!=-1||urlref.indexOf("search.yahoo.com")!=-1||urlref.indexOf("search.msn.com")!=-1||urlref.indexOf("search.live.com")!=-1||urlref.indexOf("search.aol.com")!=-1||urlref.indexOf("alltheweb.com")!=-1||urlref.indexOf("altavista.com")!=-1||urlref.indexOf("technorati.com")!=-1||urlref.indexOf("dogpile.com")!=-1){
//if ( document.getElementById('basicHeadline'))
//document.getElementById('basicHeadline').innerHTML = Hilite.hilite();
}

referrerData=Hilite.hilite();
//alert(cod_CartSubTotal());

function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
    //console.log("expire date => "+exdate.toUTCString()+"==>"+exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    //console.log("cookie value ==> "+c_name + "=" + c_value);
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
        if (x == c_name) {
    		return unescape(y);
	    }
	 }
}


domain='kaleidoscopestoyou_com';currentPage='SUCCESS';platform='ys';var store_id='4579';var enable_generic_tracking='1';var userDate='2019-12-06';var returnVisit='0';strqry='&store=kaleidoscopestoyou_com&page_type=SUCCESS&triggers=0&agent=&referrer=';session = 'ra2lh6u6c84ggh1qvibtadd2h4';	//Shopper type
	strqry = strqry + "&stp=" + js_cod_stp;

	var uniqueuserid=getCookie('cod_uniqueuserid_'+store_id);
    //console.log("Step 1 : " + uniqueuserid);
  	if (uniqueuserid!=null && uniqueuserid!='')//cookie is there
  	{
		session = uniqueuserid;
        if(returnVisit=="1")
	        strqry=strqry+"&retVisit=1";
        else
         	strqry=strqry+"&retVisit=0";
  	}
  	else{
    	//console.log('cod_uniqueuserid_'+store_id+' ==> '+session);
  		setCookie('cod_uniqueuserid_'+store_id,session,365);
   	}

	//$LAB.script(COD.Services.getServiceURL()+'services/fingerprint/js/ua-parser.min.js').wait()
		$LAB.script(COD.Services.getServiceURL()+'services/fingerprint/js/swfobject.js').wait(function(){

		strqry=strqry+"&cookie="+session;
		strqry=strqry+"&ch=0";

		//console.log("Step 0 : " + strqry);

		strqry=strqry+"&userAgent="+navigator.userAgent;
		strqry=strqry+"&appCodeName="+navigator.appCodeName;
		strqry=strqry+"&appName="+navigator.appName;
		strqry=strqry+"&appVersion="+navigator.appVersion;
		strqry=strqry+"&platform="+navigator.platform;
		strqry=strqry+"&cm_user_service="+cod_cm_services;
		strqry=strqry+"&device_type="+device_type;

		//saban: send fp if TPC disabled
		if(getCookie('cod_fp') != undefined) {
			strqry=strqry+"&fp="+getCookie('cod_fp');
			strqry=strqry+"&d="+domain;
		}

		if(strqry==""){
			strqry="&cookie="+uniqueuserid;
		}

	   // console.log(strqry);

	   //saban (08/11/2016): Additional shopper, device and visit data to track for shopper-assist/datamart
		strqry=strqry+"&referrer="+encodeURIComponent(document.referrer); //referrer
		strqry=strqry+"&page_url="+encodeURIComponent(window.location.href); //page url

		//cart items if any
		try {
			var codCartIds = cod_getCartIds();
			strqry=strqry+"&cart_items="+encodeURIComponent(codCartIds);
		} catch(e){}

        //strqry = strqry + "&page_hit=1"; //to track page hit.
        strqry = strqry + "&page_hit=" + enable_generic_tracking; //to track page hit based on settings "Enable Generic Tracking" set on store profile page
		strqry=strqry+"&screen_width=" + screen.width; //Screen width
		strqry=strqry+"&screen_height=" + screen.height; //Screen width
		strqry=strqry+"&screen_color_depth=" + screen.colorDepth; //Screen color
		strqry=strqry+"&java_enabled=" + ((navigator.javaEnabled()==true)? '1':'0'); //Java support
		var flashVersion = swfobject.getFlashPlayerVersion();
		strqry=strqry+"&flash_version=" + ((flashVersion==='undefined')? '' : flashVersion.major + '.' + flashVersion.minor + '.' + flashVersion.release); //Flash plugin version
		//Browser Language
		var browserLang = navigator.language || navigator.userLanguage;
		strqry=strqry+"&browser_language="+ ((browserLang!=='undefined')? browserLang : '');

		/*try {
			var parser = new UAParser();
			if(typeof parser !== 'undefined'){
				var uaObj = parser.getResult();
				strqry=strqry+"&browser_name=" + ((typeof uaObj.browser.name !== 'undefined')? uaObj.browser.name:"");
				strqry=strqry+"&browser_version=" + ((typeof uaObj.browser.version !== 'undefined')? uaObj.browser.version:'') ;
				strqry=strqry+"&engine_name=" + ((typeof uaObj.engine.name !== 'undefined')? uaObj.engine.name:'') ;
				strqry=strqry+"&engine_version=" + ((typeof uaObj.engine.version !== 'undefined')? uaObj.engine.version:'') ;
				strqry=strqry+"&os_name=" + ((typeof uaObj.os.name !== 'undefined')? uaObj.os.name:'') ;
				strqry=strqry+"&os_version=" + ((typeof uaObj.os.version !== 'undefined')? uaObj.os.version:'') ;
				strqry=strqry+"&device_model=" + ((typeof uaObj.device.model !== 'undefined')? uaObj.device.model:'') ;
				strqry=strqry+"&device_type_ua=" + ((typeof uaObj.device.type !== 'undefined')? uaObj.device.type:'') ;
				strqry=strqry+"&device_vendor=" + ((typeof uaObj.device.vendor !== 'undefined')? uaObj.device.vendor:'') ;
			}
		} catch(e){}*/

		//console.log(strqry);

		var iframet2b = document.createElement('iframe');
		iframet2b.style.display = 'none';
		iframet2b.setAttribute('name','abreportInitial');
		iframet2b.setAttribute('width','0');
		iframet2b.setAttribute('height','0');
		iframet2b.setAttribute('id','abreportInitial');
        iframet2b.setAttribute('src','https://www.conversionsondemand.com/codadmin2/index.php?q=store_general_report_track'+strqry);
		document.body.appendChild(iframet2b);
	});(function() {
if (!document.getElementsByClassName) {
    var indexOf = [].indexOf || function(prop) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === prop) return i;
        }
        return -1;
    };
    getElementsByClassName = function(className, context) {
        var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function() {
            var all = context.getElementsByTagName("*"),
                elements = [],
                i = 0;
            for (; i < all.length; i++) {
                if (all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(elements, all[i]) === -1) elements.push(all[i]);
            }
            return elements;
        })();
        return elems;
    };
    document.getElementsByClassName = function(className) {
        return getElementsByClassName(className, document);
    };
    if(Element) {
        Element.prototype.getElementsByClassName = function(className) {
            return getElementsByClassName(className, this);
        };
    }
}
})();

_cod_store_id="4579";
_cod_platform_id=COD_CONFIG.platform;
_cod_base_url=COD.Settings._baseURL;
/*_cod_unique_user_id=COD.Utils.GetCookie("cod_uniqueuserid_"+_cod_store_id);*/
_cod_unique_user_id = COD.Utils.GetCookie("cod_uniqueuserid_" + _cod_store_id);

if(COD.Utils.GetCookie("cod_offer_track_fororder_"+_cod_store_id)){
    //alert(COD.Utils.GetCookie("cod_offer_track_fororder_"+_cod_store_id));
    cookieval=COD.Utils.GetCookie("cod_offer_track_fororder_"+_cod_store_id);
    cookieval=cookieval.split("%23%5E");

    if(cookieval[1]=="CC"){
        _cod_service_id=16;
        _cod_ostatus="CC"
        _cod_coupon=cookieval[0];
		_cod_cc_mobile=cookieval[2];
		_cod_device_type=cookieval[3];

        //added for tracking CC trigger type and trigger page
        if(COD.Utils.GetCookie("cod_offer_cc_trigger_"+_cod_store_id)){
        	cc_val=COD.Utils.GetCookie("cod_offer_cc_trigger_"+_cod_store_id);
            cc_val=cc_val.split("%23%5E");
            _cod_trigger_type=cc_val[0];
            _cod_trigger_page=cc_val[1];
        }
    } else {
        _cod_service_id = 18;
        _cod_ostatus = "T2B"
        _cod_coupon = cookieval[0];
        _cod_trigger_type = -1;
        _cod_trigger_page = COD.Utils.GetCookie("cod_offer_t2b_trigger_" + _cod_store_id);
        _cod_cc_mobile = 0;
        _cod_device_type = "";
    }
	//hide coupon code on success page.
	var coupon_obj = document.getElementsByClassName("applied-reduction-code");
	if(coupon_obj.length>0){
		for (i = 0; i < coupon_obj.length; i++) {
			coupon_obj[i].innerHTML="";
		}
	}
}else{
	_cod_service_id=0;
    _cod_ostatus="N";
    _cod_coupon="";
    _cod_trigger_type=-1;
    _cod_trigger_page=-1;
    _cod_cc_mobile=0;
	_cod_device_type="";
}
_cod_device_type = "computer"; //global device_type for all orders
if (COD.Utils.GetCookie("cod_offer_track_fororder_cm_" + _cod_store_id)) {
    _cod_cm_id = COD.Utils.GetCookie("cod_offer_track_fororder_cm_" + _cod_store_id);
    _cod_filter_id = COD.Utils.GetCookie("cod_offer_track_fororder_filter_" + _cod_store_id);
    _cod_instance_id = (_cod_service_id == 16)? COD.Utils.GetCookie("cod_cc_cm_instance_id_" + _cod_store_id) : 0;
    _cod_instance_id = (_cod_service_id == 18)? COD.Utils.GetCookie("cod_t2b_cm_instance_id_" + _cod_store_id) : 0;
    _cod_is_offers = COD.Utils.GetCookie("cod_offer_track_fororder_is_offers_" + _cod_store_id);
} else {
    _cod_is_offers = 0;
    _cod_cm_id = 0;
    _cod_filter_id = 0;
    _cod_instance_id = 0;
}
//ENG 7
if(COD.Utils.GetCookie("cod_cwb_track_fororder_"+_cod_store_id)){
	_cod_cwb = COD.Utils.GetCookie("cod_cwb_track_fororder_"+_cod_store_id);//1#^0#^PRODUCT
   	_cod_cwb_chunks = _cod_cwb.split("%23%5E");
    
    _cod_cwb = _cod_cwb_chunks[0];
    _cod_cwb_type = _cod_cwb_chunks[1]; //require to change from cookie
    _cod_cwb_page = _cod_cwb_chunks[2];
    _cod_cwb_category = _cod_cwb_chunks[3];
    _cod_cwb_theme = _cod_cwb_chunks[4];
    _cod_cwb_color = _cod_cwb_chunks[5];
}else{
	_cod_cwb = 0;
    _cod_cwb_type = 0; //not applicable
    _cod_cwb_page = ''; //not applicable
    _cod_cwb_category = ''; //not applicable
    _cod_cwb_theme = ''; //not applicable
    _cod_cwb_color = ''; //not applicable
}


/*Yahoo Confirmation page */
/*if(_cod_platform_id=="ys"){
   var cod_ab_orderSubTotal = orderSubTotal;
   var cod_ab_orderTotal = orderTotal;
   var cod_ab_orderNum = orderNum;
   var cod_ab_numOfItems = numOfItems;
   var cod_ab_product_items = items;
   var cod_ab_product_ids = ids;
   var cod_ab_product_codes = codes;
   var cod_ab_product_qtys = qtys;
   var cod_ab_product_price = price;
}*/

//Other platform support (COD-1687)
if(_cod_platform_id=="other") {
 var cod_page_guid;
 var cod_ab_orderSubTotal;
 var cod_ab_orderTotal;
 var cod_ab_orderNum;
 var cod_ab_orderSubTotalDiscounted;
 var cod_ab_orderEmail;
 var cod_ab_orderName;
 var cod_ab_numOfItems;
 var cod_ab_product_items;
 var cod_ab_product_ids;
 var cod_ab_product_codes;
 var cod_ab_product_qtys;
 var cod_ab_product_price;

 //Temp code (COD-1687)
 /*var cod_orderSubTotal = '298.99';
 var cod_orderTotal = '298.99';
 var cod_orderNum = orderNum;//'yhst-19545536468398-T827';
 var cod_orderSubTotalDiscounted = '0.0';
 var cod_orderEmail = "eci.dev@gmail.com";
 var cod_orderName = "Eci Dev";
 var cod_numOfItems = '3';
 var cod_product_items = ['Guitar 001','Mobile 003','Bag 002'];
 var cod_product_ids = ['guitar001','mobile003','bag002'];
 var cod_product_codes = ['guitar001','mobile003','bag002'];
 var cod_product_qtys = ['1','1','1'];
 var cod_product_price = ['49.99','100','149'];
 var cod_page_guid = "SUCCESS";

 var cod_orderEmail = "eci.dev@gmail.com";
 var cod_orderName = "Eci Dev";
 var cod_orderEmail = document.querySelector("#ys_billToEmail").innerHTML;
 var cod_orderName = document.querySelector("#ys_billToAddress .ys_name").innerHTML;
 var cod_page_guid = "SUCCESS";*/

 cod_getOrderInformation();
}

/*BigCommerce Confirmation page */
/*if(_cod_platform_id=="bigcommerce"){
   var cod_ab_orderSubTotal =  '%%ORDER_SUBTOTAL%%';
   var cod_ab_orderTotal = '%%ORDER_AMOUNT%%';
   var cod_ab_orderNum = '%%ORDER_ID%%';  
   var cod_ab_orderSubTotalDiscounted = '%%ORDER_SUBTOTAL_DISCOUNTED%%';
   var cod_ab_orderEmail = '%%ORDER_EMAIL%%';
}  */ 
   /*var cod_ab_orderSubTotal =  '125.50';
   var cod_ab_orderTotal = '130.00';
   var cod_ab_orderNum = 'Big-Order-120507';  
   var cod_ab_orderSubTotalDiscounted = '5';
   var cod_ab_orderEmail = 'prshakya@veriskhealth.com';*/



/*Mageto Confirmation page */
/*if(_cod_platform_id=="magento" || _cod_platform_id=="magentoenterprise"){
	var cod_ab_orderSubTotal = ['180','250','60'];
	var cod_ab_orderTotal = ['180','250','60'];
	var cod_ab_orderNum=['10001','10022','10003'];
	var cod_ab_numOfItems=['2','3','1'];
	var cod_ab_product_items=[['p1','p2'],['p3','p4','p5'],['p2']];
	var cod_ab_product_ids=[['1','2'],['3','4','5'],['2']];
	var cod_ab_product_codes=[['c1','c2'],['c3','c4','c5'],['c2']];
	var cod_ab_product_qtys=[['2','1'],['3','1','2'],['3']];
	var cod_ab_product_price=[['30.00','25.04'],['25.00','20.09','20.00'],['35.50']];
	var cod_ab_orderSubTotalDiscounted = ['5','10','8'];
}*/
   

var _cod_ab_orderSubTotal = typeof(cod_ab_orderSubTotal) ==='undefined' ? '' : cod_ab_orderSubTotal;
var _cod_ab_orderTotal = typeof(cod_ab_orderTotal) ==='undefined' ? '' : cod_ab_orderTotal;
if(_cod_platform_id=="magento" || _cod_platform_id=="magentoenterprise"){
}else{
	_cod_ab_orderTotal = _cod_ab_orderTotal.toString().replace(/\,/g,'');
	_cod_ab_orderSubTotal = _cod_ab_orderSubTotal.toString().replace(/\,/g,'');
}
var _cod_ab_orderNum = typeof(cod_ab_orderSubTotal) ==='undefined' ? '' : cod_ab_orderNum;
var _cod_ab_numOfItems = typeof(cod_ab_numOfItems) ==='undefined' ? '' : cod_ab_numOfItems;
var _cod_ab_product_items = (typeof(cod_ab_product_items) === 'undefined' || !(cod_ab_product_items instanceof Array)) ? '' : cod_ab_product_items;
var _cod_ab_product_ids = (typeof(cod_ab_product_ids) === 'undefined' || !(cod_ab_product_ids instanceof Array)) ? '' : cod_ab_product_ids;
var _cod_ab_product_codes = (typeof(cod_ab_product_codes) === 'undefined' || !(cod_ab_product_codes instanceof Array)) ? '' : cod_ab_product_codes;
var _cod_ab_product_qtys = (typeof(cod_ab_product_qtys) === 'undefined' || !(cod_ab_product_qtys instanceof Array)) ? '' : cod_ab_product_qtys;
var _cod_ab_product_price = (typeof(cod_ab_product_price) === 'undefined' || !(cod_ab_product_price instanceof Array)) ? '' : cod_ab_product_price;
var _cod_ab_orderEmail = typeof(cod_ab_orderEmail) ==='undefined' ? '' : cod_ab_orderEmail;
var _cod_ab_orderSubTotalDiscounted = typeof(cod_ab_orderSubTotalDiscounted) === 'undefined' ? '' : cod_ab_orderSubTotalDiscounted;

//_cod_ab_orderSubTotal = (typeof(cod_ab_orderSubTotal) === 'undefined' || !(cod_ab_orderSubTotal instanceof Array))?[]:cod_ab_orderSubTotal;

var dd = document.getElementById('codScripts');
var ifr = document.createElement('iframe');
ifr.name = 'ifrPost';
ifr.width = '1px';
ifr.height = '1px';
ifr.style.display = 'none';
//ifr.src = 'http://pbajracharya/test.php';

dd.appendChild(ifr);

//begin added by prajjwal for monitoring $1 and $2 case; No need to sync in GIT This is a temporary code for experiment
/*var ifr1 = document.createElement('iframe');
 var raw_str = "StoreID : "+_cod_store_id+"<br>Subtotal : "+_cod_ab_orderSubTotal+"<br>Total : "+_cod_ab_orderTotal+"<br>Order Num : "+_cod_ab_orderNum+"<br>Email : "+_cod_ab_orderEmail+"<br>";
 ifr1.name = 'ifrPost1';
 ifr1.width = '1px';
 ifr1.height='1px';
 ifr1.style.display  = 'none';
 ifr1.src = 'http://www.conversionsondemand.com/codadmin2/custom-data/track_order_amount.php?data='+raw_str;
 dd.appendChild(ifr1);*/
//end added by prajjwal for monitoring $1 and $2 case;

var ff1 = document.createElement('form');
ff1.method = 'POST';
ff1.target = 'ifrPost';
ff1.action = _cod_base_url + "index.php?q=general_report&action=track_order&store_id=" + _cod_store_id;
//saban (14/2/2017): Get email in yahoo platform
if(_cod_platform_id=="ys"){
    var elem = document.getElementById('ys_billToEmail');
    if(elem){
        var arr = elem.innerText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        if(arr && arr.length > 0){
            _cod_ab_orderEmail = arr[0];
        }
    }
}
//alert(ff1.action);
//alert(COD.Utils.serialize(_cod_ab_orderNum))
ff1.innerHTML = '<input type="hidden" name="store_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_store_id)) + '" />';
ff1.innerHTML += '<input type="hidden" name="unique_user_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_unique_user_id)) + '" />';
ff1.innerHTML += '<input type="hidden" name="platform_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_platform_id)) + '" />';
ff1.innerHTML += '<input type="hidden" name="service_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_service_id)) + '" />';
ff1.innerHTML += '<input type="hidden" name="coupon" value="' + encodeURIComponent(COD.Utils.serialize(_cod_coupon)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_orderNum)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_subtotal" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_orderSubTotal)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_total" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_orderTotal)) + '" />';
ff1.innerHTML += '<input type="hidden" name="num" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_orderSubTotal)) + '" />';
ff1.innerHTML += '<input type="hidden" name="status" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ostatus)) + '" />';
ff1.innerHTML += '<input type="hidden" name="email" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_orderEmail)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_items" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_product_items)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_ids" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_product_ids)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_codes" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_product_codes)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_qtys" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_product_qtys)) + '" />';
ff1.innerHTML += '<input type="hidden" name="order_price" value="' + encodeURIComponent(COD.Utils.serialize(_cod_ab_product_price)) + '" />';
ff1.innerHTML += '<input type="hidden" name="trigger_type" value="' + encodeURIComponent(COD.Utils.serialize(_cod_trigger_type)) + '" />';
ff1.innerHTML += '<input type="hidden" name="trigger_page" value="' + encodeURIComponent(COD.Utils.serialize(_cod_trigger_page)) + '" />';
ff1.innerHTML += '<input type="hidden" name="cwb_value" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cwb)) + '" />';
ff1.innerHTML += '<input type="hidden" name="cwb_type" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cwb_type)) + '" />';
ff1.innerHTML += '<input type="hidden" name="cwb_page" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cwb_page)) + '" />';
ff1.innerHTML += '<input type="hidden" name="cwb_category" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cwb_category)) + '" />';
ff1.innerHTML += '<input type="hidden" name="cwb_theme" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cwb_theme)) + '" />';
ff1.innerHTML += '<input type="hidden" name="cwb_color" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cwb_color)) + '" />';
ff1.innerHTML += '<input type="hidden" name="ttb_ez_value" value="0" />';
ff1.innerHTML += '<input type="hidden" name="ttb_ez_id" value="0" />';
ff1.innerHTML += '<input type="hidden" name="cc_ez_value" value="0" />';
ff1.innerHTML += '<input type="hidden" name="cc_ez_id" value="0" />';
ff1.innerHTML += '<input type="hidden" name="is_offers" value="' + _cod_is_offers + '" />';
ff1.innerHTML += '<input type="hidden" name="cm_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cm_id)) + '" />';
ff1.innerHTML += '<input type="hidden" name="filter_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_filter_id)) + '" />';
ff1.innerHTML += '<input type="hidden" name="cc_mobile_mode" value="' + encodeURIComponent(COD.Utils.serialize(_cod_cc_mobile)) + '" />';
ff1.innerHTML += '<input type="hidden" name="device_type" value="' + encodeURIComponent(COD.Utils.serialize(_cod_device_type)) + '" />';
ff1.innerHTML += '<input type="hidden" name="instance_id" value="' + encodeURIComponent(COD.Utils.serialize(_cod_instance_id)) + '" />';

//if(_cod_platform_id!="other"){ //commented to support order tracking for non-offers supported platform
    dd.appendChild(ff1);
    ff1.submit();
//}

if(COD.Utils.GetCookie("cod_offer_track_fororder_"+_cod_store_id)){
    var this_exdate=new Date();
    this_exdate.setDate(this_exdate.getDate() - 1000);
    var this_cookie_domain = COD.Utils.get_hostname();
    COD.Utils.SetCookie("cod_offer_track_fororder_" + _cod_store_id, '', this_exdate, "/", this_cookie_domain, "");
    COD.Utils.SetCookie("cod_offer_track_fororder_cm_" + _cod_store_id, '', this_exdate, "/", this_cookie_domain, "");
    COD.Utils.SetCookie("cod_offer_track_fororder_filter_" + _cod_store_id, '', this_exdate, "/", this_cookie_domain, "");
    COD.Utils.SetCookie("cod_offer_cc_trigger_" + _cod_store_id, '', this_exdate, "/", this_cookie_domain, "");
    COD.Utils.SetCookie("cod_cc_cm_instance_id_" + _cod_store_id, '', this_exdate, "/", this_cookie_domain, "");
    COD.Utils.SetCookie("cod_offer_track_fororder_is_offers_" + _cod_store_id, '', this_exdate, "/", this_cookie_domain, "");
}
// ENG 7 -  require to unset cookie
if(COD.Utils.GetCookie("cod_cwb_track_fororder_"+_cod_store_id)){
    COD.Utils.SetCookie("cod_cwb_track_fororder_"+_cod_store_id, '', this_exdate, "/", this_cookie_domain, "");
}

//Update billing email captured on order confirmation page with store order ID (COD-1542)
setTimeout(function(){
    var cod_iframe = document.createElement("iframe");
    cod_iframe.style.display = "none";
    cod_iframe.setAttribute("name", "cod_email_capture_confirmation");
    cod_iframe.setAttribute("width", "0");
    cod_iframe.setAttribute("height", "0");
    cod_iframe.setAttribute("id", "cod_email_capture_confirmation");
    cod_iframe.setAttribute("src", _cod_base_url + "index.php?q=cod_email_capture&store_id=" + _cod_store_id + "&service_id=" + _cod_service_id + "&platform=" + _cod_platform_id + "&unique_user_id=" + _cod_unique_user_id + "&store_order_id=" + _cod_ab_orderNum + "&d=" + COD.Settings._currentDomain + "&fp=" + COD.Utils.GetCookie("cod_fp") + "&cod_tmp_rands=" + Math.random());
    document.body.appendChild(cod_iframe);
}, 100);
var cod_store_id = '4579';function codValidateEmail(email) {
    var cod_email_capture_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return cod_email_capture_re.test(email);
}
if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, ''); 
    }
}
var cod_email_capture_script = document.createElement("script");
cod_email_capture_script.type = "text/javascript";
var cod_email_capture_code = '/*var cod_store_id = COD.Settings["CartCloser"].COD_StoreID;*/var cod_service_id = 0;var cod_platform_id = COD_CONFIG.platform;var cod_base_url = COD.Settings._baseURL;var cod_unique_user_id = COD.Utils.GetCookie("cod_uniqueuserid_" + cod_store_id);var cod_billing_email = null;var cod_billing_fname = null;var cod_billing_checkout = "";/*Locate email field*/function codLocateEmailField() {    if (cod_platform_id == "ys") {        if (document.getElementById("billing-email") !== null) { /*Use Guest Checkout*/            cod_billing_email = document.getElementById("billing-email");        }        else if (document.getElementById("cp-email") !== null) { /*Login*/            cod_billing_email = document.getElementById("cp-email");        }    } else if (cod_platform_id == "magento" || cod_platform_id == "magentoenterprise") {        if (document.getElementById("billing:email") !== null) { /*Checkout as guest*/            cod_billing_email = document.getElementById("billing:email");        }        else if (document.getElementById("login-email") !== null) { /*Login*/            cod_billing_email = document.getElementById("login-email");        }    } else if (cod_platform_id == "bigcommerce") {        if (document.getElementById("FormField_1") !== null) { /*Checkout as guest*/            cod_billing_email = document.getElementById("FormField_1");        }        else if (document.getElementById("email") !== null) { /*login*/            cod_billing_email = document.getElementById("email");        }    } else if (cod_platform_id == "3dcart") {        if (document.getElementsByName("email")[0] !== null) { /*Checkout as guest*/            cod_billing_email =  document.getElementsByName("email")[0];        }        else if (document.getElementById("billing_email") !== null) { /*login*/            cod_billing_email = document.getElementById("billing_email");        }    } else if (cod_platform_id == "shopifyplus") {        if (document.getElementById("checkout_email") !== null) { /*Checkout as guest*/            cod_billing_email = document.getElementById("checkout_email");        }    } else if (cod_platform_id == "other") {        if (document.querySelector(".cod_checkout_email") !== null) {            cod_billing_email = document.querySelector(".cod_checkout_email");        }    }    return cod_billing_email;}/*Locate first name field*/function codLocateFirstNameField() {    if (cod_platform_id == "ys") {        if (document.getElementById("shipping-full-name") !== null) { /*Use Guest Checkout*/            cod_billing_fname = document.getElementById("shipping-full-name");        } else if (document.getElementById("shipping-first-name") !== null) { /*Use Guest Checkout*/            cod_billing_fname = document.getElementById("shipping-first-name");        }    } else if (cod_platform_id == "magento" || cod_platform_id == "magentoenterprise") {        if (document.getElementById("billing:firstname") !== null) { /*Checkout as guest*/            cod_billing_fname = document.getElementById("billing:firstname");        }    } else if (cod_platform_id == "bigcommerce") {        if (document.getElementById("FormField_4") !== null) { /*Checkout as guest*/            cod_billing_fname = document.getElementById("FormField_4");        }        else if (document.getElementById("firstNameInput") !== null) { /*billing*/            cod_billing_fname = document.getElementById("firstNameInput");        }        else if (document.getElementById("shipping-firstName") !== null) { /*shipping*/            cod_billing_fname = document.getElementById("shipping-firstName");        }        else if (document.getElementById("billing-firstName") !== null) { /*billing*/            cod_billing_fname = document.getElementById("billing-firstName");        }    } else if (cod_platform_id == "3dcart") {        if (document.getElementById("billing_firstname") !== null) {            cod_billing_fname =  document.getElementById("billing_firstname");        }         else if (document.getElementById("shipping_firstname") !== null) {            cod_billing_fname =  document.getElementById("shipping_firstname");        }    } else if (cod_platform_id == "shopifyplus") {        if (document.getElementById("checkout_shipping_address_first_name") !== null) {            cod_billing_fname = document.getElementById("checkout_shipping_address_first_name");        }    } else if (cod_platform_id == "other") {        if (document.querySelector(".cod_checkout_name") !== null) {            cod_billing_fname = document.querySelector(".cod_checkout_name");        }    }    return cod_billing_fname;}/*RESTful call for email and first name tracking*/function codEmailCaptureTracking(cod_billing_email, cod_billing_fname, id) {    var cod_iframe = document.createElement("iframe");    cod_iframe.style.display = "none";    cod_iframe.setAttribute("name", "cod_email_capture");    cod_iframe.setAttribute("width", "0");    cod_iframe.setAttribute("height", "0");    cod_iframe.setAttribute("id", "cod_email_capture");    cod_iframe.setAttribute("src", cod_base_url + "index.php?q=cod_email_capture&store_id=" + cod_store_id + "&service_id=" + cod_service_id + "&platform=" + cod_platform_id + "&unique_user_id=" + cod_unique_user_id + "&billing_email=" + cod_billing_email + "&billing_fname=" + cod_billing_fname + "&d=" + COD.Settings._currentDomain + "&fp=" + COD.Utils.GetCookie("cod_fp") + "&cod_tmp_rand" + id + "=" + Math.random());    document.body.appendChild(cod_iframe);}if (typeof Element.prototype.addEventListener === "undefined") {    Element.prototype.addEventListener = function (e, callback) {        e = "on" + e;        return this.attachEvent(e, callback);    };}/*Locate the fresh generated email and first name fields with iterating code in interval*/var cod_cnt = 0;var _trackField = setInterval(function(){        if (document.getElementById("CheckoutStepBillingAddress") !== null) {        cod_billing_checkout = document.querySelector("#CheckoutStepBillingAddress .ExpressCheckoutContent").style.display;    } else if (document.getElementById("checkoutShippingAddress") !== null) {        cod_billing_checkout = "block";    } else {        cod_billing_checkout = "";    }    /*Bigcommerce store only*/    if(cod_platform_id == "bigcommerce" && cod_billing_checkout == "block") {        cod_billing_email = codLocateEmailField();        cod_billing_email_val = (cod_billing_email !== null)? cod_billing_email.value.trim() : "";        cod_billing_fname = codLocateFirstNameField();        cod_billing_fname_val = (cod_billing_fname !== null)? cod_billing_fname.value.trim() : "";        /*Newly generated email field*/        if(cod_billing_email !== null && typeof cod_billing_email !== "undefined") {            cod_billing_email.addEventListener("blur", function() {                cod_billing_email_val = cod_billing_email.value.trim();                cod_billing_fname_val = (cod_billing_fname !== null)? cod_billing_fname.value.trim() : "";                if (codValidateEmail(cod_billing_email_val)) {                    /*setTimeout(function(){*/                        codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 1);                    /*}, 500);*/                }            });            if (codValidateEmail(cod_billing_email_val)) {                codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 2);            }            clearInterval(_trackField);        }        /*Newly generated firstname field*/        if(cod_billing_fname !== null && typeof cod_billing_fname !== "undefined") {            cod_billing_fname.addEventListener("blur", function() {                cod_billing_fname_val = cod_billing_fname.value.trim();                cod_billing_email_val = (cod_billing_email !== null)? cod_billing_email.value.trim() : "";                if (cod_billing_fname_val !== "") {                    /*setTimeout(function(){*/                        codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 5);                    /*}, 500);*/                }            });            if (cod_billing_fname_val !== "") {                codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 2);            }            clearInterval(_trackField);        }        /*Upon clicking Edit button to modify email in stores using Optimized one-page checkout*/        var cod_checkout_edit_buttons;        if(document.querySelector(".optimizedCheckout-buttonSecondary") !== null && typeof document.querySelector(".optimizedCheckout-buttonSecondary") !== "undefined") {            cod_checkout_edit_buttons = document.querySelectorAll(".optimizedCheckout-buttonSecondary, .stepHeader-body.stepHeader-column");                        for (var i = 0; i < cod_checkout_edit_buttons.length; i++) {                cod_checkout_edit_buttons[i].addEventListener("click", function() {                    setTimeout(function(){                        /*cod_billing_email = codLocateEmailField();*/                        cod_billing_email = document.querySelector("#email");                        if(cod_billing_email !== null && typeof cod_billing_email !== "undefined") {                            cod_billing_email.addEventListener("blur", function() {                                cod_billing_fname_val = (cod_billing_fname !== null)? cod_billing_fname.value.trim() : "";                                cod_billing_email_val = cod_billing_email.value.trim();                                if (codValidateEmail(cod_billing_email_val)) {                                    codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 7);                                }                            });                        }                        /*Upon clicking Continue As Guest button to modify first name in stores using Optimized one-page checkout*/                        if(document.getElementById("checkout-customer-continue") !== null && typeof document.getElementById("checkout-customer-continue") !== "undefined") {                            document.getElementById("checkout-customer-continue").addEventListener("click", function() {                                setTimeout(function(){                                    /*cod_billing_fname = codLocateFirstNameField();*/                                    cod_billing_fname = document.querySelector("#firstNameInput");                                    if(cod_billing_fname !== null && typeof cod_billing_fname !== "undefined") {                                        cod_billing_fname.addEventListener("blur", function() {                                            cod_billing_fname_val = cod_billing_fname.value.trim();                                            cod_billing_email_val = (cod_billing_email !== null)? cod_billing_email.value.trim() : "";                                            if (cod_billing_fname_val !== "") {                                                codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 8);                                            }                                        });                                    }                                    var cod_checkout_edit_buttons = document.querySelectorAll(".optimizedCheckout-buttonSecondary, .stepHeader-body.stepHeader-column");                                                for (var i = 0; i < cod_checkout_edit_buttons.length; i++) {                                        cod_checkout_edit_buttons[i].addEventListener("click", function() {                                            setTimeout(function(){                                                /*cod_billing_email = codLocateEmailField();*/                                                cod_billing_email = document.querySelector("#email");                                                if(cod_billing_email !== null && typeof cod_billing_email !== "undefined") {                                                    cod_billing_email.addEventListener("blur", function() {                                                        cod_billing_fname_val = (cod_billing_fname !== null)? cod_billing_fname.value.trim() : "";                                                        cod_billing_email_val = cod_billing_email.value.trim();                                                        if (codValidateEmail(cod_billing_email_val)) {                                                            codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 7);                                                        }                                                    });                                                }                                                /*Upon clicking Continue As Guest button to modify first name in stores using Optimized one-page checkout*/                                                if(document.getElementById("checkout-customer-continue") !== null && typeof document.getElementById("checkout-customer-continue") !== "undefined") {                                                    document.getElementById("checkout-customer-continue").addEventListener("click", function() {                                                        setTimeout(function(){                                                            /*cod_billing_fname = codLocateFirstNameField();*/                                                            cod_billing_fname = document.querySelector("#firstNameInput");                                                            if(cod_billing_fname !== null && typeof cod_billing_fname !== "undefined") {                                                                cod_billing_fname.addEventListener("blur", function() {                                                                    cod_billing_fname_val = cod_billing_fname.value.trim();                                                                    cod_billing_email_val = (cod_billing_email !== null)? cod_billing_email.value.trim() : "";                                                                    if (cod_billing_fname_val !== "") {                                                                        codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 8);                                                                    }                                                                });                                                            }                                                        }, 1000);                                                    });                                                }                                            }, 100);                                        });                                    }                                }, 1000);                            });                        }                    }, 100);                });            }        }    }    /*Stores other than Bigcommerce*/    else if(cod_platform_id !== "bigcommerce") {        cod_billing_email = codLocateEmailField();        cod_billing_email_val = (cod_billing_email !== null)? cod_billing_email.value.trim() : "";        cod_billing_fname = codLocateFirstNameField();        cod_billing_fname_val = (cod_billing_fname !== null)? cod_billing_fname.value.trim() : "";        if (codValidateEmail(cod_billing_email_val) || cod_billing_fname_val !== "") {            codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 3);        }        clearInterval(_trackField);    }    if(cod_cnt == 100){        clearInterval(_trackField);    }    cod_cnt++;},2000);/*For email and firstname fields already generated on page load*//*if(cod_platform_id !== "bigcommerce" || document.getElementById("micro-app-ng-checkout") !== null) {*/setTimeout(function(){/*To ensure email field is completed loaded before executing below code*/    if(cod_platform_id !== "bigcommerce" || document.querySelector(".ExpressCheckout") === null) {        cod_billing_email = codLocateEmailField();        cod_billing_email_val = (cod_billing_email !== null)? cod_billing_email.value.trim() : "";        cod_billing_fname = codLocateFirstNameField();        cod_billing_fname_val = (cod_billing_fname !== null)? cod_billing_fname.value.trim() : "";        if(cod_billing_email !== null && typeof cod_billing_email !== "undefined") {            cod_billing_email.addEventListener("blur", function() {                cod_billing_email_val = cod_billing_email.value.trim();                cod_billing_fname_val = (cod_billing_fname !== null)? cod_billing_fname.value.trim() : "";                if (codValidateEmail(cod_billing_email_val)) {                    codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 4);                }            });        }        if(cod_billing_fname !== null && typeof cod_billing_fname !== "undefined") {            cod_billing_fname.addEventListener("blur", function() {                cod_billing_fname_val = cod_billing_fname.value.trim();                cod_billing_email_val = (cod_billing_email !== null)? cod_billing_email.value.trim() : "";                if (cod_billing_fname_val !== "") {                    codEmailCaptureTracking(cod_billing_email_val, cod_billing_fname_val, 6);                }            });        }    }}, 500);';
try {
    cod_email_capture_script.appendChild(document.createTextNode(cod_email_capture_code));
    document.body.appendChild(cod_email_capture_script);
} catch (e) {
    cod_email_capture_script.text = cod_email_capture_code;
    document.body.appendChild(cod_email_capture_script);
}