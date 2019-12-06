(function ($) {
    var si = window.nak_ca_info;
    if (si == undefined) return;
    var version = "1.0",
        W = window,
        D = W.document,
        L = $.lk,
        J = false,
        K = false,
        debug = W.location.href.indexOf("/localhost/") > 0,
        S = {
            site_dispatcher_iframe: "site_dispatcher_iframe",
            c: "lk_cart_id",
            l: "lk_cart",
            f: "lk_customer",
            fs: "#cp-email,#shipping-phone,#billing-phone,#billing-email,#cp-full-name,#billing-full-name,#shipping-full-name,#billing-first-name,#shipping-first-name,#billing-last-name,#shipping-last-name,#shipping-zip,#billing-zip"
        },
        C = {
            store: si.store,
            store_id: si.store_id,
            store_domain: si.store_domain,
            checkout_domain: si.checkout_domain == undefined ? "store.yahoo.net" : si.checkout_domain,
            cart_abanandon_service: W.location.protocol + (debug ? "//localhost/NakamoaCartAbandonment/" : "//cartabandonment.nakamoa.com/services/"),
            dispatcher_url: "//lib.store.yahoo.net/lib/" + si.store + "/site-dispatcher.html",
            format: "i",
            emailSelector: si.emailSelector==null || si.emailSelector==undefined ? "#billing-email" : si.emailSelector,
            moveEmailToTop: si.moveEmailToTop == null || si.moveEmailToTop == undefined ? true : si.moveEmailToTop,
            emailSectionHeader: "Contact Email",
            save_browsing: false,
            ping_activity: true,
            include_images: si.include_images,
            pingTimeInterval: 45 * 60 * 100, //4 and half minutes,
            yahooBasketCookie: "ysco_key_browser_session_cookie",
            beforeInit: si.beforeInit,
            afterInit: si.afterInit
        },
        H = null,
        Q = [];

    function getPageType() {
        if (W.location.href.indexOf(C.checkout_domain) >= 0) {
            if (W.lk_ga_page == "shopping_cart" || $("#ys_cartPage").length > 0) return "cart";
            if (W.lk_ga_page == "checkout" || $("#ys_shipBillPage").length > 0) return "shipbill";
            if (!L.iE(W.orderNum) && (W.lk_ga_page == "confirmation" || W.location.href.indexOf("sectionId=ysco.confirm") > 0)) return "confirmation";
            if (W.lk_ga_page == "review" || $("#ys_reviewPage").length > 0) return "review";

            return "checkout";
        } else {
            if (W.location.href.indexOf(C.store_domain) > 0) return "site";
        }
        
        return "";
    }
    function gF(a) {
        for (var i = 0; i < a.length; i++) {
            if (typeof a[i] == "function") {
                var r = L.exeF(a[i]);
                if (!L.iE(r)) return r;
            } else {
                var x = $(a[i]);
                if (x.length > 0 && (x.val() != "" && x.val() != null && x.val() != undefined)) {
                    return x.val();
                }
            }
        }
    }
    function isE(a) {
        if (a != null)
            for (var i in a)
                if (!L.iE(a[i])) return a;
        return null;
    }
    function getFields() {
        return cA([
            gF([checkPD, "#cp-email", C.emailSelector]),
            gF(["#cp-full-name", "#billing-full-name", "#shipping-full-name"]),
            gF(["#billing-first-name", "#shipping-first-name"]),
            gF(["#billing-last-name", "#shipping-last-name"]),
            gF(["#billing-phone", "#shipping-phone"]),
            gF(["#billing-zip", "#shipping-zip"])
        ])
    }
    function checkPD() {
        var c = L.cookie("pdUserInfo_" + C.store + "_0");
        if (!L.iE(c)) {
            var a = c.split("&");
            if (a.length > 1) return a[1];
        }
        return null;
    }
    function cA(a) {
        var b = [];
        for (var i = 0; i < a.length; i++) {
            if (!L.iE(a[i])) b.push(a[i]); else b.push(0);
        }
        return b;
    }
    function getPage() {
        var x = getPageType();
        if (x == "site") return W.location.pathname;
        return "/" + x;
    }
    function getCart() {
        return [
            parseFloat(W.orderTotal.replace(/\"/gi, "")),
            parseFloat(W.orderShipping.replace(/\"/gi, "")),
            parseFloat(W.orderTax.replace(/\"/gi, "")),
            getPage(),
            (function () {
                var a = [];
                for (var i = 0; i < ids.length; i++)
                    a.push([
                        ids[i],
                        parseInt(qtys[i].replace(/\"/gi, "")),
                        parseFloat(price[i].replace(/\"/gi, "")),
                        (function (x) {
                            if (x == ids[i]) return 0;
                            return x;
                        })(codes[i]),
                        window.cart.items[i]["name"],
                        (function (x) {
                            if (C.include_images !== true) return 0;
                            x = x.replace(/http\:\/\/ep\.yimg\.com\//gi, "");
                            if (L.startWith(x, "ay/")) x = x.substring(x.lastIndexOf("/") + 1);
                            return x;
                        })(itemImages[i]),
                        (function (x) {
                            var o = [];
                            $("table.ys_basket tbody > tr").each(function (z) {
                                if (!$(this).hasClass("ys_updateQty") && !$(this).hasClass("ys_orderLine") && z == x) {
                                    $("ul#ys_itemOptions li", this).each(function () {
                                        o.push($(this).html());
                                    });
                                }
                            });
                            if (o.length == 0) return 0;
                            return o;
                        })(i)
                    ]);
                return a;
            })()
        ];
    }
    function getInternalCartId() {
        var x = L.cookie(C.yahooBasketCookie);
        if (x != null) {
            var m = x.match(/^value=([\w-_]+)/);
            if (m != null) {
                var a = x.split("&");
                return a[0].replace(/value=/gi, "");
            }
        }
        return null;
    }
    function gC(x) {
        return L.cookie(x);
    }
    function gCC() {
        return C.store + "_" + S.c;
    }
    function getCartId() {
        return gC(gCC());
    }
    function cIF(a, d) {
        $(D.body == null ? $("html") : D.body).append("<iframe width=1 height=1 style=\"display:none;position:absolute;visibility:hidden;\" src=\"about:blank\" id=\"" + S.site_dispatcher_iframe + "\" name=\"" + S.site_dispatcher_iframe + "\"></iframe>");
        $("#" + S.site_dispatcher_iframe).attr("src", C.dispatcher_url + "?callback=" + a + "&callback_data=" + encodeURIComponent(d));
    }
    function cIn(n, v) {
        return $("<input type=hidden name=\"" + n + "\" value=\"" + v + "\">");
    }
    W.LK_Cart_Abandon = {
        Callback: function (data) {
            if (data) {
                if (data.needReload) {
                    if (W.location.href.indexOf(C.checkout_domain) >= 0) {
                        if (data.items != undefined && data.items != null && data.items.length > 0) {
                            var add=[];
                            for (var i = 0; i < data.items.length; i++) {
                                var a = true;
                                for (var j = 0; j < W.ids; j++) {
                                    if (W.ids[j] == data.items[i][0]) {
                                        a = false;
                                        break;
                                    }
                                }
                                if (a) add.push(data.items[i]);
                            }
                            if (add.length > 0) {
                                var f = $("<form id=\"newitems\" style=\"display:none\" method=\"post\" action=\"" + W.location.protocol + "//" + (C.checkout_domain=="store.yahoo.net" ? ("order." + C.checkout_domain): C.checkout_domain) + "/" + C.store + "/cgi-bin/wg-order?" + C.store + "\"></form>");
                                $(f).append(cIn("vwcatalog", C.store));
                                $(f).append(cIn("multiple-add", "1"));
                                for (var i = 0; i < add.length; i++) {
                                    $(f).append(cIn("vwitem" + i, add[i][0]));
                                    $(f).append(cIn("vwquantity" + i, add[i][1]));
                                    if (add[i].length > 2 && add[i][2] != undefined && add[i][2] != "") {
                                        var a = add[i][2].split(",");
                                        for (var j = 0; j < a.length; j++) {
                                            var n = a[j].substring(0, a[j].indexOf(":")-1),
                                                v = a[j].substring(a[j].indexOf(":") + 1);
                                            $(f).append(cIn("vwattr" + i + "_" + $.trim(n), $.trim(v)));
                                        }                                        
                                    }
                                }
                                $(f).append($("<input type=submit name=\"submitBtn\" id=\"submitBtn\" value=\"submit\">"));
                                if (!L.iE(data.cartId)) L.cookie(gCC(), data.cartId, { path: '/', domain: '.' + C.checkout_domain });
                                $(D.body).append(f);
                                W.setTimeout(function () {
                                    $("#newitems")[0].submit();
                                }, 100);
                            }
                        }
                    }
                } else {
                    if (W.location.href.indexOf(C.checkout_domain) >= 0) {
                        if (data.isNew == "true" && !L.iE(data.cartId)) L.cookie(gCC(), data.cartId, { path: '/', domain: '.' + C.checkout_domain });
                        if (data.needUpdate == "true") aQ("update");
                    } else {
                        if (data.isNew == "true" && !L.iE(data.cartId)) L.cookie(gCC(), data.cartId, { path: '/', domain: '.' + C.store_domain });
                    }
                }
            }
        },
        Update: function () {
            var f = getFields(),
                x = isE(f);
            if (x == null) return;
            var c = getCart(),
                fx = L.toJSON(x),
                jx = L.toJSON(c);
            sessionStorage.setItem(S.f, fx);
            sessionStorage.setItem(S.l, jx);
            aQ("update");
        }
    }
    function aQ(a) {
        Q.push(a);
    }
    function cQ() {
        var i = new Image(),
               z = getCartId(),
               Z = getInternalCartId(),
               o = W.orderNum;
        i.src = C.cart_abanandon_service + C.store_id + "/process/5?f=i&c=" + encodeURIComponent(L.toJSON([Z, z, o])) + "&p=" + encodeURIComponent(W.location.href) + "&_u=" + (new Date()).getMilliseconds();
    }
    function gHS() {
        if (H != null) return H.substring(H.indexOf("=") + 1)
        return W.location.hash.substring(W.location.hash.indexOf("=")+1)
    }
    function pQ() {
        if (K || Q.length == 0) return;
        K = true;
        var x = false, y = false, u = false, m = false;
        for (var i = 0; i < Q.length; i++) {
            if (Q[i] == "update") x = true;
            if (Q[i] == "ping") y = true;
            if (Q[i] == "order") u = true;
            if (Q[i] == "check") m = true;
        }
        Q = [];
        if (!x && !y && !u && !m) return;
        var a = 1,
            f = "s"
        d = null;
        if (m) {
            a = 6;
            d = [gHS()];
            W.location.hash = "";
        } else {
            if (u) {
                a = 2;
                d = [getPage(), W.orderNum];
            } else {
                if (!x && y) {
                    a = 0;
                    if (getPageType() == "confirmation") {
                        d = [getPage(), W.orderNum];
                    } else {
                        d = [getPage()];
                    }
                } else {
                    d = [getCart(), getFields()];
                }
            }
        }
        if (f == "s") {
            var s = D.createElement('script'),
                z = getCartId(),
                Z = getInternalCartId();
            s.type = 'text/javascript';
            s.async = true;
            s.src = C.cart_abanandon_service + C.store_id + "/process/" + a + "?f=s&c=" + encodeURIComponent(L.toJSON([Z, z, d])) + "&p=" + encodeURIComponent(W.location.href) + "&_u=" + (new Date()).getMilliseconds();
            var fs = D.getElementsByTagName('script')[0];
            fs.parentNode.insertBefore(s, fs);
        } else {
            var i = new Image(),
                z = getCartId(),
                Z = getInternalCartId();
            i.src = C.cart_abanandon_service + C.store_id + "/process/" + a + "?f=i&c=" + encodeURIComponent(L.toJSON([Z, z, d])) + "&p=" + encodeURIComponent(W.location.href) + "&_u=" + (new Date()).getMilliseconds();
        }
        K = false;
    }
    function hasSS() {
        return !L.iE(getCartId());
    }
    function icC() {
        var c = getCart(),
            o = sessionStorage.getItem(S.l),
            x = L.toJSON(c);
        if (L.iE(o)) {
            sessionStorage.setItem(S.l, x);
            return true;
        }
        if (o == x)
            return false;
        sessionStorage.setItem(S.l, x);
        return true;
    }
    function M(e) {
        if (e.origin !== "http://lib.store.yahoo.net") return;
        if (!L.iE(e.data)) L.cookie(gCC(), e.data, { path: "/", domain: "." + C.store_domain });
        aQ("ping");
    }
    function rC() {
        var h = W.location.hash;
        if (!L.iE(h) && h.indexOf("caid=") >= 0) {
            H = W.location.hash;
            return true;
        }
        return false;
    }
    function iP() {
        W.setInterval(function () {
            aQ("ping");
        }, C.pingTimeInterval);
        aQ("ping");
    }
    function II() {
        var p = getPageType();
        switch (p) {
            case "confirmation":
                cQ();
                aQ("order");
                L.cookie(gCC(), undefined, { "delete": true, path: '/', domain: '.' + C.checkout_domain });
                pQ();
                break;
            case "shipbill":
            case "cart":
                if (rC()) {
                    aQ("check");
                    break;
                }
            case "checkout":
                if (C.ping_activity && hasSS()) {
                    if (icC()) {
                        aQ("update");
                    } else {
                        iP();
                    }
                };
                break;
            case "site":
                if (C.ping_activity) {
                    if (hasSS())
                        iP();
                    else {
                        if (!L.iE(D.referrer) && D.referrer.indexOf(C.store_domain) == -1) {
                            L.addEventListener("message", M);
                            cIF("LK_Cart_Abandon_Dispatcher", gCC());
                        }
                    }
                }
                break;
        }
        W.iTI = W.setTimeout(I, 1500);//if jquery loading fails
    }
    function I() {
        if (J) return;
        L.exeF(C.beforeInit);
        J = true;
        if (getPageType() != "site") {
            W.mTIndex = 0;
            W.mTI = W.setInterval(function () {
                if ($(C.emailSelector).length > 0 || W.mTIndex > 100) {
                    $(C.emailSelector).change(function () {
                        W.LK_Cart_Abandon.Update();
                    });
                    W.clearInterval(mTI);
                }
                W.mTIndex++;
            }, 100);
            $(S.fs).change(function () {
                W.LK_Cart_Abandon.Update();
            });
            if (C.moveEmailToTop && $("#ys_shipBillPage").length > 0) {

                $("#ys_buyerInfo").prepend("<div id='ys_emailInfo' class='ys_majorSection'></div>");

                $("div#ys_emailInfo").append("<h3 state='1' class='ys_sectionHeader'>" + C.emailSectionHeader + "</h3>");
                $("div#ys_emailInfo").append("<div class='ys_subSection'></div>");

                $("div#ys_emailInfo .ys_subSection").append($("#labelbilling-email").clone(true));

                $("#ys_billingEmail #labelbilling-email").remove();
            }
        }
        W.qTI = W.setInterval(pQ, 1000);
        L.exeF(C.afterInit);
    }
    $(function () {
        I();
    });
    II();
})(jQuery);