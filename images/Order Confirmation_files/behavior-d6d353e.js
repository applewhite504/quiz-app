var behavior={valueSetMap:{},init:function(){if(navigator.userAgent.match(/Netscape6/)){var e=YAHOO.util.Dom.getElementsByClassName("ys_subSection","div","ys_buyerInfo");YAHOO.util.Dom.setStyle(e,"display","block");var c=YAHOO.util.Dom.getElementsByClassName("ys_subSectionHeaderImg","a","ys_buyerInfo");for(var d=0,a=c.length;d<a;d++){c[d].parentNode.removeChild(c[d])}return}var b=YAHOO.util.Dom.getElementsByClassName("ys_subSectionHeaderImg","a",document);YAHOO.util.Event.addListener(b,"click",this.toggle.subsectionChanger);YAHOO.util.Event.on(["ys_expand_all_link"],"click",this.toggle.expandAllSections);if(hideBillingAddressEnabled){YAHOO.util.Event.on(["useShippingRadio","useBillingRadio","useStoredBillingRadio"],"click",this.toggle.sameAsShipDisplay);this.toggle.sameAsShipDisplay()}if(typeof(storedPaymentsEnabled)!="undefined"&&storedPaymentsEnabled){YAHOO.util.Event.on(["useStoredCardRadio","useNewCardRadio"],"click",this.toggle.useStoredCardDisplay);this.toggle.useStoredCardDisplay();if(sectionIdVal=="ysco.ship-bill"||sectionIdVal=="ysco.one-page"){YAHOO.util.Event.on(["shipping-full-name","shipping-address1","shipping-address2","shipping-city","shipping-state","shipping-zip","shipping-country"],"change",this.toggle.creditCardDisplay)}}},findCollapsibleContainer:function(c){var b=c.parentNode;while(!YAHOO.util.Dom.hasClass(b,"ys_subSectionHeader")||(!b.tagName)||(b.tagName!="H4")){if(b==undefined){return}b=b.parentNode}if(b==undefined){return}var a=b.nextSibling;while(a.nodeType!=1||a.tagName!="DIV"||!YAHOO.util.Dom.hasClass(a,"ys_subSection")){a=a.nextSibling}return[a,b]},toggle:{toggleSubsections:function(d,f){for(var g=0;g<d.length;g++){var h=d[g];var b=behavior.findCollapsibleContainer(h);if(b==undefined||b[0]==undefined||b[1]==undefined){continue}else{var e=b[0];var j=b[1];if((f!=undefined)&&f){e.style.display=""}else{e.style.display=(e.style.display!="none"?"none":"")}var a=(e.style.display!="none"?"ys_showIcon":"ys_hideIcon");var k=(e.style.display!="none"?"ys_hideIcon":"ys_showIcon");YAHOO.util.Dom.removeClass(h,a);YAHOO.util.Dom.addClass(h,k);var c=(e.style.display!="none"?hideIconAlt:showIconAlt);h.innerHTML=c;j.setAttribute("state",(e.style.display!="none"?"1":"0"))}}},subsectionChanger:function(d,a){var c=YAHOO.util.Event.getTarget(d);YAHOO.util.Event.stopEvent(d);var b=new Array(c);behavior.toggle.toggleSubsections(b,false)},sameAsShipDisplay:function(h,b){var a=YAHOO.util.Dom.get("useShippingRadio");var g=YAHOO.util.Dom.get("useStoredBillingRadio");var i=YAHOO.util.Dom.get("useStoredBillingRadio");var d=YAHOO.util.Dom.get("ys_storedBillingInfo");var c=YAHOO.util.Dom.get("useBillingRadio");var f=YAHOO.util.Dom.get("ys_billingInputs");if(a!=undefined&&a.checked!=undefined&a.checked){f.style.display="none";if(d!=undefined&&i!=undefined){d.style.display="none"}}else{if(i!=undefined&&i.checked!=undefined&&i.checked){f.style.display="none";d.style.display=""}else{if(c&&c.checked){f.style.display="";if(d!=undefined&&i!=undefined){d.style.display="none"}}}}},useStoredCardDisplay:function(s,d){var i=YAHOO.util.Dom.get("useStoredCardRadio");var m=YAHOO.util.Dom.get("card-cvv");if(i!=undefined){var u=YAHOO.util.Dom.get("ysco_new_card_input");var f=YAHOO.util.Dom.get("ysco_stored_card_input");var r=YAHOO.util.Dom.get("ys_newCreditCard");var l=YAHOO.util.Dom.get("labelcard-number");var j=YAHOO.util.Dom.get("labelcard-exp-month");var c=YAHOO.util.Dom.get("labelcard-exp-year");var o=YAHOO.util.Dom.get("cc-expire-alert-msg");var n=YAHOO.util.Dom.get("ys_pmt_ccExpYear");var a=YAHOO.util.Dom.get("ys_pmt_ccExpMon");var k=YAHOO.util.Dom.get("card-exp-year");var p=YAHOO.util.Dom.get("card-exp-month");var b=YAHOO.util.Dom.get("ys_pmt_ccReenterdFlag");if(typeof(s)!=="undefined"){YAHOO.util.Dom.get("card-number").value="";if(m!=undefined){m.value=""}}if(i.checked){YAHOO.util.Dom.get("paymentSelection_0").value=0;if(YAHOO.util.Dom.get("storedCardType").value!=""){togCvn(YAHOO.util.Dom.get("storedCardType").value,true)}if(trustedComputer==1&&isColdAddress!=1&&isMaxCVVLimit!=1){l.style.display="none"}else{b.value="1"}if(o.innerHTML!==""){j.style.display="";c.style.display=""}else{j.style.display="none";c.style.display="none"}r.style.display="none";o.style.display="";if(typeof(s)!=="undefined"){k.value=n.value;p.value=a.value}f.style.display=""}else{YAHOO.util.Dom.get("paymentSelection_0").value=1;var g=YAHOO.util.Dom.get("newCardType").value;togCvn(g);b.value="0";o.style.display="none";l.style.display="";r.style.display="";j.style.display="";c.style.display="";f.style.display="none";if(typeof(s)!=="undefined"){k.value="";p.value=""}}var q=YAHOO.util.Dom.get("paymentSelection_1");var t=YAHOO.util.Dom.get("paymentSelection_2");if(q!=undefined){if(q.value==1){var h=YAHOO.util.Dom.getPreviousSibling("ys_billingAddress");if(YAHOO.util.Dom.hasClass(h,"ys_subSectionHeader")){YAHOO.util.Dom.getPreviousSibling("ys_billingAddress").style.display="none"}YAHOO.util.Dom.get("yscp_spBillingBlock").style.display="none";YAHOO.util.Dom.get("paymentSelection_0").value=0;if(i.checked){YAHOO.util.Dom.get("ccSelectionType").value=1;YAHOO.util.Dom.get("useStoredCardRadio").value=0}else{YAHOO.util.Dom.get("ccSelectionType").value=0}return}}if(t!=undefined){if(t.value==1){var h=YAHOO.util.Dom.getPreviousSibling("ys_billingAddress");if(YAHOO.util.Dom.hasClass(h,"ys_subSectionHeader")){YAHOO.util.Dom.getPreviousSibling("ys_billingAddress").style.display="none"}YAHOO.util.Dom.get("yscp_spBillingBlock").style.display="none";YAHOO.util.Dom.get("paymentSelection_0").value=0;if(i.checked){YAHOO.util.Dom.get("ccSelectionType").value=1;YAHOO.util.Dom.get("useStoredCardRadio").value=0}else{YAHOO.util.Dom.get("ccSelectionType").value=0}return}}}},creditCardDisplay:function(){var d=YAHOO.util.Dom.get("useStoredCardRadio");var b=YAHOO.util.Dom.get("yscp_trustedMsgBlock");if(d!=undefined){isColdAddress=true;var c=YAHOO.util.Dom.get("ys_pmt_ccReenterdFlag");if(d.checked){var a=YAHOO.util.Dom.get("labelcard-number");if(a.style.display!=""){a.style.display=""}c.value="1";b.style.display="block"}}},expandAllSections:function(c,b){var a=YAHOO.util.Dom.getElementsByClassName("ys_subSectionHeaderImg","a",document);behavior.toggle.toggleSubsections(a,true)}},addValueSet:function(b,a){behavior.valueSetMap[b]=a},applyValueSet:function(j,b,h){var d=document.getElementById(j);var k;if(d.nodeName.toLowerCase()=="select"){k=d.options[d.selectedIndex].value}else{k=d.value}var f=behavior.valueSetMap[k];var c=document.getElementById(b);c.innerHTML="";var g=0;for(var e=0;e<f.length;e++){var a=document.createElement("option");a.innerHTML=f[e]._content;a.value=f[e].value;if(h==a.value){a.selected=true;g=e}c.appendChild(a)}},submitLoginForm:function(a){var e=document.getElementById("cr-cust-id");var h=document.getElementById("cr-cust-password");var g=document.getElementById("cr-choose-cust-id");var d=document.getElementById("cr-choose-cust-password");var i=document.getElementById("cr-cust-verify-password");var b=document.getElementById("cr-cust-id-hdn");var c=document.getElementById("cr-cust-password-hdn");var f=document.getElementById("cr-cust-verify-password-hdn");if(a=="eventName.crLoginEvent"){b.value=e.value;c.value=h.value}else{if(a=="eventName.crRegEvent"){b.value=g.value;c.value=d.value;f.value=i.value}}}};YAHOO.util.Event.on(window,"load",behavior.init,behavior,true);