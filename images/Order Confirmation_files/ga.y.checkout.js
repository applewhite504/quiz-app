(function ($, C) {
    var W = window,
		D = W.document,
		N = null,
		S = { "yhst-99239380869547": true, "yhst-25423176375299": true, "yhst-65361177377116": true, "kaleidoscopestoyou": true, "blaircandy": true, "yhst-20906297561931": true, "htmarket": true, "autogeek": true, "autopia": true, "yhst-25423176375299": true, "yhst-4673793187882": true, "yhst-12922226196918": true, "dentakit": true, "yhst-172607161-1": true, "thesaddleshop": true, "superiornut": true, "yhst-71015718095253":true, "yhst-172513769-2":true, "yhst-172506923-2":true };

    if (S[W.storeId] !== true) return;

    function trackEvent(c, a, l, i, f) {
        if (window.ga == null || window.ga == undefined) return;
        var t = ga.getByName('YSBTracker');
        if (t) {
            ga('YSBTracker.send', {
                hitType: 'event',
                eventCategory: c,
                eventAction: a,
                eventLabel: l,
                nonInteraction: i,
                hitCallback: f
            });
        }
    }
    function IE(x) { return !iE(x); }
    function iE(x) { return x == N || x == undefined; }

    function cC(c) {
        var s = "";

        if (IE(c["path"])) {
            s += "path=" + c["path"];
        }
        if (IE(c["domain"])) {
            s += (s=="" ? "" : ";") + "domain=" + c["domain"];
        }
        if (IE(c["expires"])) {
            s += (s == "" ? "" : ";") + "expires=" + c["expires"];
        }
        return s;
    }

    function setCookie(n, v, c) {
        try {
            D.cookie = n + "=" + encodeURIComponent(v) + "; " + cC(c);
        } catch (e) {
        }
    }
    function removeCookie(n) {
        setCookie(n, null, { domain: C.checkout_domain, path: "/" + W.storeId, expires: "Sun, 15 Jul 2012 00:00:01 GMT" });
    }
    function getCookie(n, b) {
        for (var cs = D.cookie.split(";"), i = 0; i < cs.length; i++) {
            var c = TT(cs[i]);
            if (c.substring(0, n.length + 1) == n + "=") return decodeURIComponent(c.substring(n.length + 1))
        }
        return N;
    }

    function exeF(x) {
        if (IE(x))
            return x();
    }
    function getPage() {
        if ($("#ys_onePage").length == 1) return "Cart/Ship/Bill";
        if ($("#ys_shippingPage").length == 1) return "Ship";
        if ($("#ys_billingPage").length == 1) return "Bill";
        if ($("#ys_cartPage").length == 1) return "Cart";
        if ($("#ys_shipBillPage").length == 1) return "Ship/Bill";
        if ($("#ys_reviewPage").length == 1) return "Review";
        if ($("#ys_confirmationPage").length == 1) return "Confirmation";
    }
    function getId(x) {
        var hr = $(x).attr("href"),
			a = hr.split("/");
        if (a[a.length - 1].lastIndexOf(".html") > 0)
            return a[a.length - 1].substring(0, a[a.length - 1].lastIndexOf(".html"));
        return null;
    }
    function cancelEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    function doCoupon() {
        $("#gc-redemption-code").change(function () {
            trackEvent("NAKAMOA CHECKOUT", "Coupon Change", $(this).val(), 1, N);
            setCookie("CouponValue", $(this).val(), { domain: C.checkout_domain, path: "/" + W.storeId });
        });
    }

    function doCheckoutErrors() {
        $("#ys_warningMessages>li, #ys_errorMessages>li").each(function () {
            var h = $(this).html();
            if (!iE(h) && typeof h != "string" && h.length > 0) h = h[0].innerHTML;
            if (IE(h)) {
                h = h.replace(/"/gi, "");
                if (h == "Sorry, the coupon code you entered does not exist.") {
                    var c = getCookie("CouponValue");
                    if (c != undefined && c != null && c != "") h = h.replace(/code/gi, "code '" + c + "'");
                    removeCookie("CouponValue");
                }
                trackEvent("NAKAMOA CHECKOUT", "Checkout Errors/Warnings", h, 1, N);
            }
        })
    }
    function doCart() {
        $(".ys_itemInfo strong a,.ys_itemInfo .ys_itemImg a").each(function () {
            var x = getId(this);
            if (x != null) {
                $(this).click(function (e) {
                    var link = this;
                    trackEvent("NAKAMOA CHECKOUT", "Click Product Link", "Cart", 0, function () {
                        window.location.href = $(link).attr("href");
                    });
                    cancelEvent(e);
                });
            }
        });
        $(".ys_itemInfo em a").click(function (e) {

            var link = this,
                h = getId($("strong a", $(this).closest(".ys_itemInfo")));

            trackEvent("NAKAMOA CHECKOUT", "Click Button", "Remove item",
				0,
				function () {
				    window.location.href = $(link).attr("href");
				}
			);

            cancelEvent(e);
        });
        $(".ys_quantity input[name$=\"_m_quantity\"]").change(function () {
            trackEvent("NAKAMOA CHECKOUT", "Cart Item Qty Changed", "", 1);
        });
    }
    function doButtons() {

        $(".ys_updateQty input").click(function (e) {
            if ($(this).hasClass("clicked")) return;
            var button = this;
            trackEvent("NAKAMOA CHECKOUT", "Click Button", "Update Quantity", 0,
				function () {
				    $(button).addClass("clicked").click();
				}
			);
            cancelEvent(e);
        });

        $("#ys_proceedContainer input.ysco_img_btn").click(function (e) {
            if ($(this).hasClass("clicked")) return;
            var button = this;
            trackEvent("NAKAMOA CHECKOUT", "Click Button", "Checkout - " + getPage(), 0,
				function () {
				    $(button).addClass("clicked").click();
				}
			);
            cancelEvent(e);
        });
        $(".ys_pageActions .ys_first a").click(function (e) {
            var link = this;
            trackEvent("NAKAMOA CHECKOUT", "Click Button", "Keep Shopping - " + getPage(), 0,
				function () {
				    window.location.href = $(link).attr("href");
				}
			);
            cancelEvent(e);
        });
    }
    function doPayments() {
        $("#labelcard-type select").change(function () {
            trackEvent("NAKAMOA CHECKOUT", "Payment CC Change", $(this).val(), 0, N);
        });

        $("#cvn_enabled em a").click(function () {
            var link = this;
            trackEvent("NAKAMOA CHECKOUT", "Click Button", "What Is CVV", 0, N);
        });
        $("#ys_paypalTerms input").click(function (e) {
            if ($(this).hasClass("clicked")) return;
            var button = this,
				b = $(this).attr("name") == "eventName.gotoPaypalEvent" ? "Express" : ($(this).attr("name") == "eventName.gotoBillMeLaterEvent" ? "PayPal Bill Me Later" : "Other");

            trackEvent("NAKAMOA CHECKOUT", "Click Button", "PayPal - " + b, 0,
				function () {
				    $(button).addClass("clicked").click();
				}
			);
            cancelEvent(e);
        });

        $("#nak_amazon_button img").click(function () {
            trackEvent("NAKAMOA CHECKOUT", "Click Button", "Amazon Pay", 0, N				
			);
        });
    }
    function doShipping() {
    }
    function doRelated() {
        $(".ystore-cross-sell-cell a").each(function () {
            var x = getId(this);
            if (x != null) {
                $(this).click(function (e) {
                    var link = this;
                    trackEvent("NAKAMOA CHECKOUT", "Click Product Link", "Related", 0, function () {
                        window.location.href = $(link).attr("href");
                    });
                    cancelEvent(e);
                });
            }
        });

        $(".ystore-cross-sell-cell a.ysco_img_btn").each(function () {
            var x = getId(this);
            if (x != null) {
                $(this).click(function (e) {
                    var link = this;
                    trackEvent("NAKAMOA CHECKOUT", "Click Button", "Related Add To Cart", 0, function () {
                        window.location.href = $(link).attr("href");
                    });
                    cancelEvent(e);
                });
            }
        });
    }
    function pdLinksClicks() {
        $(".pd_checkoutBtn a").click(function (e) {
            var link = this;
            trackEvent("NAKAMOA CHECKOUT", "Click Button", "PD - " + $(this).html() + " - " + getPage(), 0, function () {
                window.location.href = $(link).attr("href");
            });
            cancelEvent(e);
        });
    }
    function doPD() {
        window.setTimeout(pdLinksClicks, 500);
    }

    function initBadges() {

        $("#ll_badge").mouseover(function () {
            trackEvent("NAKAMOA CHECKOUT", "Show Badge", "Yahoo - " + getPage(), 0, N);
        });

        $("#gts_container").mouseover(function () {
            trackEvent("NAKAMOA CHECKOUT", "Show Badge", "Google - " + getPage(), 0, N);
        });

        $("a[href^='https://www.mcafeesecure.com']").click(function () {
            trackEvent("NAKAMOA CHECKOUT", "Show Badge", "McAfee - " + getPage(), 0, N);
        });
    };

    function doBadges() {
        window.setTimeout(initBadges, 2000);
    }
    function initInternational() {
        $("#vwdICButtonContainer input[type='image']").click(function (e) {
            if ($(this).hasClass("clicked")) return;
            var button = this;
            trackEvent("NAKAMOA CHECKOUT", "Click Button", "International Checkout", 0,
				function () {
				    $(button).addClass("clicked").click();
				}
			);
            cancelEvent(e);
        });
    }
    function doInternational() {
        window.setTimeout(initInternational, 500);
    }
    function init() {

        var o = true;

        if (IE(C.beforeInit)) o = exeF(C.beforeInit);

        if (o) {
            doCoupon();
            doCheckoutErrors();
            doCart();
            doShipping();
            doPayments();
            doRelated();
            doPD();
            doButtons();
            doBadges();
            doInternational();
        }

        if (IE(C.afterInit)) exeF(C.afterInit);
    }

    $(function () {
        window.setTimeout(init, 500);
    });

})(jQuery, yahooGaConfig);
