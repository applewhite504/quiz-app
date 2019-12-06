$(function () {
    if ($("#ys_cartPage").length > 0) {
        $(".ys_quantity").append($(".ys_updateQty input[type='submit']"));
    }
    if ($("#ys_shipBillPage").length > 0) {
        var cS = $("<div id=contactInfo></div>");

        cS.addClass("ys_majorSection");

        cS.append("<h4 class=ys_subSectionHeader>Your contact email address</h4>");
        cS.append($("#ys_billingEmail"));

        $("h4:contains('Email Notification')").remove();

        $("#ys_buyerInfo").prepend(cS);
        $("#labelratings input[type='checkbox']").prop("checked", true);

        $("#ys_shipBillOtherInfo").append("<div class=leftc></div>");
        $("#ys_shipBillOtherInfo").append("<div class=rightc></div>");

        $("#ys_shipBillOtherInfo .leftc").append($("h4:contains('Coupon Code (optional)')"));
        $("#ys_shipBillOtherInfo .leftc").append($("#ys_coupon"));

        $("#ys_shipBillOtherInfo .rightc").append($("h4:contains('Comments')"));
        $("#ys_shipBillOtherInfo .rightc").append($("#ys_comments"));
    }
    $(".ys_basket th").each(function (i) {
        if ($(this).html() == "Unit Price") {
            $(this).html("Price").addClass("ys_unitPrice");
        }
        if ($(this).html() == "In Stock") {
            $(this).html("Price").addClass("ys_inStock");
        }
    });
    if ($(window).width() < 480) {
        $(".ys_basket .ys_orderLine td").each(function () {
            var c = $(this).attr("colspan");
            if (c != undefined && parseInt(c) > 1) {
                $(this).attr("colspan", parseInt(c) - 2);
            }
        });
    }
});
var nakamoaGtsConfig = {
    store_id: "yhst-95566119198410",
    domain: "www.kaleidoscopestoyou.com",
    gts_id: "549641",
    gts_subaccount_id: "2319450",
    shippingMethods: {
        "$12.99 Flat Rate Ground UPS (USA48)": { maxDays: 4 },
        "UPS Ground": { maxDays: 4 },
        "Priority Mail USA Only": { maxDays: 4 },
        "UPS Next Day Air": { maxDays: 1 },
        "UPS Next Day Air Saver": { maxDays: 1 },
        "UPS 2nd Day Air": { maxDays: 2 },
        "UPS 3 Day Select": { maxDays: 3 },
        "UPS Next Day Air Early A.M.": { maxDays: 1 },
        "Global Priority Air Mail USPS (International) 7 to 10 Business Days)": { maxDays: 10 },
        "Express Air Mail USPS ( International) 5 - 7 DAYS": { maxDays: 7 },
        "UPS Worldwide Express": { maxDays: 10 },
        "UPS Worldwide Expedited": { maxDays: 10 },
        "Fed Ex 2 Day U.S.A. Only": { maxDays: 2 },
        "FedEx Standard Overnight USA Only": { maxDays: 2 },
        "FedEx Priority Overnight USA Only": { maxDays: 2 },
        "Express Air Mail USPS (USA Only)": { maxDays: 2 }
    },
    defaultShippingDays: 7,
    iframeStyles: { width: "670px", height: "460px", position: "absolute", top: "50px", left: "90px", border: "0px", "z-index": "2000000", "display": "none" },
    cutOffTime: 14,
    timeZone: -6,
    checkoutRedirectMode: "iframe",
    checkoutDomain: "checkout.kaleidoscopestoyou.com",
    customDatesCalculationFunction: function (e) {
        var a = {},
            customIds = "custom,custom-kaleidoscopes-for-promotional-corporate-businesses,cubigjaka,pr,customjazzys,kaleidoscope3,signed-art-glass-marbles-jeff-price-5,signed-art-glass-marbles-jeff-price-6,custom-wedding-table-favors-kaleidoscopes-small-jazzy-custom,wedding-table-favors-kaleidoscopes-small-jazzy-standard,corporate-gifts,personalized-kaleidoscope,promotional-kaleidoscopes-laser-engraved,masowolaen,businessgift,businessgifts1,corporategift,engravedgift,custom,laserengraved,brpowiblveba,promotional-kaleidoscope-laser-engraved-wood,promotional-kaleidoscopes-laser-engraved-wooden,kaleidoscope-brushed-silver-teleidoscope-7-inch-with--rosewood-base-kaleido-corporate,kelimokawicu,tourist-gifts-kaleidoscopes-big-jazzy,tourist-gifts-ideas-kaleidoscopes-big-jazzy,tourist-gift-shop-merchandise-kaleidoscopes-small-jazzy-custom,tourist-gift-shop-merchandise-kaleidoscopes-small-jazzy-standard,culisu4,bigjakaco,bigjakaka,unique-save-the-date-ideas-small-jazzy-kaleidoscope,lions-international-logo-unique-gifts-kaleidoscope".split(","),
            hasEngraving = false,
            hasCustomItem = false;

        a["processing"] = e["configuration"].processingDays;
        a["shipping"] = e["configuration"].defaultShippingDays;

        for (var i = 0; i < window.ids.length; i++) {
            for (var j = 0; j < customIds.length; j++) {
                if (window.ids[i] == customIds[j]) {
                    hasCustomItem = true;
                    break;
                }
            }
            if (hasCustomItem)
                break;
        }
        var cart = $.parseJSON($.lk.cookie("GTS_CART"));
        if (cart) {
            for (var i = 0; i < cart.length; i++) {
                var I = cart[i];
                if (I[0] && I[0].length > 0) {
                    for (var j = 0; j < I[0].length; j++) {
                        if (I[0][j].name == "Engraving Line 1" || I[0][j].name == "Engraving Line 2") {
                            hasEngraving = true;
                            break;
                        }
                    }
                }
                if (hasEngraving)
                    break;
            }
            $.lk.cookie("GTS_CART", undefined, { "delete": true });
        }

        if (hasCustomItem)
            a["processing"] = 4;
        else
            if (hasEngraving)
                a["processing"] = 3;

        if (e.configuration.shippingMethods && e.configuration.shippingMethods[e.shippingMethod] != undefined) {
            a["shipping"] = e.configuration.shippingMethods[e.shippingMethod].maxDays;
        }

        return a;
    }
}