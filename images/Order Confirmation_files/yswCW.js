if (!yswCW) {
	var yswCW = {

		//set all to false by default
		settings: {
			"addValidation": false,
			"addProperties": false,
			"moveEmail": false,
			"addCCImages": false,
			"hideCoupon": false,
			"moveErrors": false,
			"quickCorrect": false,
			"showDropDown": false,
			"inlineCCImage": false,
			"validateCC": false,
			"APOFPO": false,
			"CVNImage": false,
			"autocomplete": false
		},

		stateDropdownHTML: {},
		$CCInput: yswJQ172('#card-number'),
		$CCInputLabel: yswJQ172('#labelcard-number'),
		$CCType: yswJQ172('#card-type'),
		cardNumber: "",
		cardLength: "",
		cardType: "",
		cardFlag: "",
		cardRaw: "",
		cards: "",
		allowedCards: [],
		emailInput: "",
		$emailHeader: "",
		payPal: (yswJQ172('#ys_paypalBilling').length > 0 ? true : false), 
		creditCardsClasses: "",
		fields: {
			//selector : placeholder, type, validation, required, errors
			'#card-number': ['Card Number','tel',null,true,['credit card number']],
			'#card-exp-month': [null,null,null,true,['credit card expiration date']],
			'#card-exp-year': [null,null,null,true,['credit card expiration date']],
			'#billing-email': ['Email Address','email',null,true,['email address']],
			'#shipping-full-name': ['Full Name',null,null,true,['shipping name']],
			'#shipping-first-name': ['First Name',null,null,true,['shipping name','shipping first name']],
			'#shipping-last-name': ['Last Name',null,null,true,['shipping last name','shipping name']],
			'#shipping-address1': ['Address',null,null,true,['shipping street address 1']],
			'#shipping-city': ['City',null,null,true,['shipping city']],
			'#shipping-state': [null,null,null,true,['shipping state']],
			'#shipping-zip': [null,null,null,true,['shipping zip']],
			'#shipping-phone': ['Phone Number','tel',null,true,['shipping phone']],
			'#billing-full-name': ['Full Name',null,null,true,['billing name']],
			'#billing-first-name': ['First Name',null,null,true,['billing name','billing first name']],
			'#billing-last-name': ['Last Name',null,null,true,['billing name','billing last name']],
			'#billing-address1': [null,null,null,true,['billing street address 1']],
			'#billing-city': ['City',null,null,true,['billing city']],
			'#billing-state': [null,null,null,true,['billing state']],
			'#billing-zip': [null,null,null,true,['billing zip']],
			'#billing-phone': ['Phone Number','tel',null,true,['billing phone']],
			'#labelmerchant-selected-shipping-methods': [null,null,null,true,['shipping method']]
		},
		creditCards: [
			{
				type: 'maestro',
				pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
				length: [12, 13, 14, 15, 16, 17, 18, 19],
				cvcLength: [3],
				name: "MaestroCard",
				inUse: true,
				luhnCheck: true
			}, {
				type: 'dinersclub',
				pattern: /^(36|38|30[0-5])/,
				length: [14],
				cvcLength: [3],
				name: "Diners Club",
				inUse: true,
				luhnCheck: true
			}, {
				type: 'laser',
				pattern: /^(6706|6771|6709)/,
				length: [16, 17, 18, 19],
				cvcLength: [3],
				name: "Laser",
				inUse: true,
				luhnCheck: true
			}, {
				type: 'jcb',
				pattern: /^35/,
				length: [16],
				cvcLength: [3],
				name: "JCB",
				inUse: true,
				luhnCheck: true
			}, {
				type: 'unionpay',
				pattern: /^62/,
				length: [16, 17, 18, 19],
				cvcLength: [3],
				name: "UnionPay",
				inUse: true,
				luhnCheck: false
			}, {
				type: 'discover',
				pattern: /^(6011|65|64[4-9]|622)/,
				length: [16],
				cvcLength: [3],
				name: "Discover",
				inUse: true,
				luhnCheck: true
			}, {
				type: 'mastercard',
				pattern: /^5[1-5]/,
				length: [16],
				cvcLength: [3],
				name: "MasterCard",
				inUse: true,
				luhnCheck: true
			}, {
				type: 'amex',
				pattern: /^3[47]/,
				length: [15],
				cvcLength: [3, 4],
				name: "American Express",
				inUse: true,
				luhnCheck: true
			}, {
				type: 'visa',
				pattern: /^4/,
				length: [13, 14, 15, 16],
				cvcLength: [3],
				name: "Visa",
				inUse: true,
				luhnCheck: true
			}
		],
		addProperties: function() {
			if (this.settings.addProperties && yswJQ172('#ys_billingPage,#ys_shipBillPage,#ys_shippingPage,#ys_onePage').length) {

				//autofocus on first field
				//yswJQ172("#shipping-first-name, #shipping-full-name").focus();
				yswJQ172.each(yswCW.fields, function(key, value) {
					if (value[0]) { // if has placeholder
						yswJQ172(key).prop("placeholder",value[0]);
					}
					
					if (value[1]) {
						//type attribute can't be changed with jquery because past IE 8 and lower won't allow you to change the Type property
						//jQuery(key).prop("type",value[1]);
						
						//works in all browswer except IE 8 and Lower.  But its ok since they jquery.validate will just use the property. It just won't correct types in HTML5 or jquery Validate
						if (yswJQ172(key).length > 0) {
							yswJQ172(key).get(0).setAttribute("type",value[1]);
						}
					}
					
					//Adds Required properties only if addValidation is checked.
					if (yswCW.settings.addValidation){ 
						if (value[3]) { //Will set the required property used by jquery.validate and HTML 5
							if(yswCW.payPal && (key=="#card-number" || key=="#card-exp-year" || key=="#card-exp-month")) {
							} else {
								yswJQ172(key).prop('required',value[3]);
							}
						}
					}
					
				});

				//Remove Max Length Attr from all inputs.
				yswJQ172('input[maxlength],input[maxLength]').removeAttr('maxlength').removeAttr('maxLength');
			}
		},
		hideCoupon: function() {
			if (this.settings.hideCoupon) {
				yswJQ172("#ys_coupon").hide();
			}
		},
		addValidation: function() {
			if (this.settings.addValidation && yswJQ172('#ys_billingPage,#ys_shipBillPage,#ys_shippingPage,#ys_onePage').length) { //Basically checks to make sure that the value is not empty before submitting.
				var form  = yswJQ172('form[name="CheckoutForm"]');
				form.attr('novalidate','novalidate');
				//Set Shipping Calculator and any other items with secondary button
				yswJQ172('input[name="eventName.updateShippingMethodEvent"],.ys_secondary').addClass('cancel').attr("formnovalidate",true);
				
				//onblur remove error
				yswJQ172(':input[required]').blur(function(){
					if(yswJQ172(this).val() != ""){
						yswJQ172(this).removeClass('error').closest('label').removeClass('error').find('.ysw-error').remove();
					}
				});
				
				form.removeAttr('onsubmit');
				yswJQ172('.ys_pageActions').hover(function(){
					//form.submit(function(e) { return false; }); //might need for shower curtains
					yswJQ172('input[name="eventName.sbContinueEvent"],input[name="eventName.opContinueEvent"]').removeAttr('onclick').die('click').off('click').unbind('click').click(function(e){
						if(yswCW.validateForm()){
							//form.trigger('submit');
							return true;
						} else {
							yswJQ172('input.error:first').focus();
							return false;
						}
					});
				},
				function(){
					form.off('submit');
				});
			}//end page check
		},
		validateForm: function(){
			var valid = true;
			yswJQ172(':input[required]').each(function(){
				//remove errors
				yswJQ172(this).removeClass('error').closest('label').removeClass('error').find('.ysw-error').remove();
				if(!yswJQ172(this).attr('disabled')){
					//Check For Empty
					if(yswJQ172(this).val() == ""){
						//Set Valid to False
						valid = false;
						//Add Class to Input
						var fieldName = yswJQ172(this).closest('label').find('strong').text();
						fieldName = fieldName.replace(':','')
						yswJQ172(this).addClass('error').closest('label').addClass('error').append('<div class="ysw-error">Enter your '+fieldName+'</div>');
					}
				}
			});
			
			//Should we Validate CC.
			if(this.settings.validateCC && !yswCW.payPal){
				//Validate Credit Card
				if (yswJQ172('#card-number').length > 0) {
					if(yswJQ172('#card-number').val() != ""){
						//check for card
						var card = false,
							cardLength = yswJQ172('#card-number').val().length,
							lengthPass = false;
						card = yswCW.getCard(yswJQ172('#card-number').val());
						if(!card){ valid = false; }
						//check card length
						for(var i=0, len=card.length.length; i<len; i++){
							if(card.length[i] === cardLength){
								lengthPass = true;
							}
						}
						if(!lengthPass){ 
							valid = false; 
							yswJQ172('#card-number').addClass('error').closest('label').addClass('error').append('<div class="ysw-error">Credit Card Number Invalid</div>');
						}
						//LuhnCheck
						if(valid){
							if(card.luhnCheck === true){
								if(!yswCW.luhnCheck(yswJQ172('#card-number').val())){
									valid = false;
									yswJQ172('#card-number').addClass('error').closest('label').addClass('error').append('<div class="ysw-error">Credit Card Number Invalid</div>');
								}
							}
						}
					}
				}
				//Validate CC date.
				if (yswJQ172('#card-exp-year').length > 0) {
					if(yswJQ172('#card-exp-month').val() != "" && yswJQ172('#card-exp-year').val() != ""){
						var minMonth = new Date().getMonth() + 1,
							minYear = new Date().getFullYear(),
							month = parseInt(yswJQ172('#card-exp-month').val(), 10),
							year = parseInt(yswJQ172('#card-exp-year').val(), 10);
						valid = (year > minYear || (year === minYear && month >= minMonth));
						if(!valid){
							yswJQ172('#card-exp-month').addClass('error').closest('label').addClass('error').append('<div class="ysw-error">Expiration Date Invalid</div>');
							yswJQ172('#card-exp-year').addClass('error').closest('label').addClass('error');
						}
					}//end empty check
				}//end check
			}//end validate check
			return valid;
		},
		luhnCheck: function(num){
			var digit, digits, odd=true, sum=0;
			digits = (num + '').split('').reverse();
			for (var i = 0, len = digits.length; i < len; i++) {
				digit = digits[i];
				digit = parseInt(digit, 10);
				if ((odd = !odd)) {
					digit *= 2;
				}
				if (digit > 9) {
					digit -= 9;
				}
				sum += digit;
			}
			return sum % 10 === 0;
		},
		getCard: function(num) {
			var card, i, len;
			num = (num + '').replace(/\D/g, '');
			for (i = 0, len = yswCW.creditCards.length; i < len; i++) {
				card = yswCW.creditCards[i];
				if (card.pattern.test(num) && card.inUse === true) {
					return card;
				}
			}
		},
		setAllowedCards: function(){
			yswCW.$CCType.children('option').each(function(){yswCW.allowedCards.push(yswJQ172(this).val()); }); //get Allowed Cards into an array
			yswCW.cards = '<div class="ysw-checkout-credit-cards">';
			for (var i = 0, len = yswCW.creditCards.length; i < len; i++) {
				var card = yswCW.creditCards[i];
				if(yswJQ172.inArray( card.name, yswCW.allowedCards ) == -1){
					card.inUse = false;
				} else {
					yswCW.cards += '<img class="'+card.type+'" src="https://yswhosting.com/sandbox/don/checkoutwizard/img/'+card.type+'.png" alt="'+card.name+'" />';
					yswCW.creditCardsClasses += " "+card.type;//sets the classes that will need to be removed.
				}
			}
			yswCW.cards += '</div>';
		},
		onlyNumbers: function(e) {
			var input;
			if (e.metaKey || e.ctrlKey) {
				return true;
			}
			if (e.which === 32) {
				return false;
			}
			if (e.which === 0) {
				return true;
			}
			if (e.which < 33) {
				return true;
			}
			input = String.fromCharCode(e.which);
			return !!/[\d\s]/.test(input);
		},
		scanCCImages: function(e) {
			var cardNumber = this.value || "",
				cardType = false,
				card = false,
				cardMaxLength = 16;//default card length
			var cardLength = cardNumber.length * 1;
			//Get Card from Card Number
			card = yswCW.getCard(cardNumber);
			//Check if Card is selected.  
			if(!card){
				//Remove Classes
				yswJQ172('.active').removeClass('active');
				yswJQ172('.card-selected').removeClass('card-selected');
				yswCW.$CCInput.removeClass(yswCW.creditCardsClasses);
			} else {
				cardMaxLength = card.length[card.length.length - 1] * 1;
				cardType = card.type;
				//Sets a Max Character limit
				if (cardLength > cardMaxLength) {
					 yswJQ172(this).val(yswJQ172(this).val().substr(0, cardMaxLength));
					 return;
				}
				//Sets Card Image for both inlineCCImage and addCCImage.
				yswJQ172('.'+cardType).addClass('active').parent().addClass('card-selected');
				yswCW.$CCInput.addClass(cardType);
				//remove selected
				yswJQ172('#card-type').find('option').removeAttr('selected');
				// Loop through each card option and sets Card Option.
				yswJQ172('#card-type option').each(function() {
					// String to search for in case value is not an exact match
					var s = yswJQ172(this).val().toLowerCase();
					// If option matches exactly add selected attribute
					// else search for possible substring
					if(yswJQ172(this).val() == card.name) {
					
						yswJQ172(this).prop('selected','selected');

					}/* else if(s.indexOf("am") != -1) { // Not sure about this lower case stuff
					
						yswJQ172(this).attr('selected','selected');
						
					}*/
				});
				/*CVN Image Swap*/
				if(yswCW.settings.CVNImage) {
					/*Check to Make sure CVN Image exists*/
					if(yswJQ172('#ys_cvnImage').length > 0 && yswJQ172('#ys_cvnAmexImage').length > 0){
						if(cardType == "amex"){
							yswJQ172('#ys_cvnImage').hide();
							yswJQ172('#ys_cvnAmexImage').show();
						} else {
							yswJQ172('#ys_cvnImage').show();
							yswJQ172('#ys_cvnAmexImage').hide();
						}
					}
				}
			}//end check if card exists.

			/*
			American Express: starts with 34 or 37 and has 15 digits.
			Discover: starts with 6011 or 65. All have 16 digits.
			MasterCard: starts with the numbers 51 through 55. All have 16 digits.
			Visa: starts with a 4. New cards have 16 digits. Old cards have 13.
			*/
		},
		inlineCCImage: function(){
			if (this.settings.inlineCCImage) {
				//if we're on a page containing the input for Credit Cards
				if(yswCW.$CCInput.length > 0) {
					yswCW.$CCType.parent('label').hide();
					yswCW.$CCInput.parent().addClass('ysw-inline-cc-img');
					yswCW.setAllowedCards();
					yswCW.scanCCImages();
					yswCW.$CCInput.on( "keypress", yswCW.onlyNumbers );
					yswCW.$CCInput.on( "input", yswCW.scanCCImages );
				}
			}
		},
		addCCImages: function() {
			if (this.settings.addCCImages) {

				//if we're on a page containing the input for Credit Cards
				if(yswCW.$CCInput.length > 0) {
					//hide the select
					yswCW.$CCType.parent('label').hide();
					yswCW.setAllowedCards();
					//yswCW.cards set in function setAllowedCards
					yswJQ172(yswCW.cards).insertBefore(yswCW.$CCInputLabel);
					yswCW.scanCCImages();
					yswCW.$CCInput.on( "keypress", yswCW.onlyNumbers );
					yswCW.$CCInput.on( "input", yswCW.scanCCImages );
				}
			}
		},
		moveEmail: function() {
			if (this.settings.moveEmail) {

				if(yswJQ172('#ys_billingEmail').length > 0) {

					var emailInput = '#ys_billingEmail',
						$emailHeader = yswJQ172(emailInput).prev('h4'),
						emailFirstChild = '#ys_billingInfo .ys_subSectionHeader:nth-child(2)';

					yswJQ172(emailInput).insertBefore(emailFirstChild);
					$emailHeader.insertBefore(emailInput);
				}
			}
		},
		moveErrors: function() {
			if (this.settings.moveErrors) {

				// $('#ys_userMessages').insertAfter('#ys_cartInfo');
				// $('#ys_pageMessage').insertAfter('#ys_userMessages');
				
				yswJQ172('#ys_userMessages').insertAfter('#ys_cartInfo');
				window.location="#ys_userMessages";
				
			}
		},
		quickCorrect: function() {
			if (this.settings.quickCorrect) {
				if (yswJQ172('#ys_errorMessages').length > 0) {

					yswJQ172.each(yswCW.fields, function(key, value) {
						var errors = value[4];
						for(var i = 0, len=errors.length; i<len; i++){
							//Check if Error and Field Exists.
							if( yswJQ172('#ys_errorMessages li:containsNC('+errors[i]+')').length && yswJQ172(key).length ){
								yswJQ172('#ys_errorMessages li:containsNC('+errors[i]+')').append(' <a href="'+key+'" data-input="'+key+'" class="errorLink">Quick Correct</a>');
								yswJQ172(key).addClass('inputError');
							}
						}
					});

					yswJQ172('.errorLink').click(function(){
						var input = yswJQ172(this).data('input');
						yswJQ172(input).addClass('fixError').focus();
					});
				}//end ys_errorMessages
			}//check if quickCorrect setting is correct.
		},
		stateDropdownUS: function(type) {
			if (this.settings.showDropDown) {
			// If dropdown for state does not exist...
				if(!yswJQ172('#label'+type+'-state select').length) {
					if(yswJQ172('#'+type+'-country').val() == "US") {
						yswJQ172('#'+type+'-state').hide();
						var setState = yswJQ172('#'+type+'-state').val();
						var stateDropdownHTML = '';
						stateDropdownHTML += '<select name="ysw-'+type+'-state-dropdownHTML" id="ysw-'+type+'-state-dropdownHTML">'
							stateDropdownHTML += '<option value="">Select State</option>';
							stateDropdownHTML += '<option value="AL">Alabama</option>';
							stateDropdownHTML += '<option value="AK">Alaska</option>';
							//if(yswCW.APOFPO){stateDropdownHTML += '<option value="AS">American Samoa</option>';}
							stateDropdownHTML += '<option value="AZ">Arizona</option>';
							stateDropdownHTML += '<option value="AR">Arkansas</option>';
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="AA">Armed Forces Americas (AA)</option>';}
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="AE">Armed Forces Africa (AE)</option>';}
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="AE">Armed Forces Canada (AE)</option>';}
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="AE">Armed Forces Europe (AE)</option>';}
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="AE">Armed Forces Middle East (AE)</option>';}
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="AP">Armed Forces Pacific (AP)</option>';}
							stateDropdownHTML += '<option value="CA">California</option>';
							stateDropdownHTML += '<option value="CO">Colorado</option>';
							stateDropdownHTML += '<option value="CT">Connecticut</option>';
							stateDropdownHTML += '<option value="DE">Delaware</option>';
							stateDropdownHTML += '<option value="DC">District of Columbia</option>';
							//if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="FE">Federated States of Micronesia</option>';}
							stateDropdownHTML += '<option value="FL">Florida</option>';
							stateDropdownHTML += '<option value="GA">Georgia</option>';
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="GU">Guam GU</option>';}
							stateDropdownHTML += '<option value="HI">Hawaii</option>';
							stateDropdownHTML += '<option value="ID">Idaho</option>';
							stateDropdownHTML += '<option value="IL">Illinois</option>';
							stateDropdownHTML += '<option value="IN">Indiana</option>';
							stateDropdownHTML += '<option value="IA">Iowa</option>';
							stateDropdownHTML += '<option value="KS">Kansas</option>';
							stateDropdownHTML += '<option value="KY">Kentucky</option>';
							stateDropdownHTML += '<option value="LA">Louisiana</option>';
							stateDropdownHTML += '<option value="ME">Maine</option>';
							//if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="MH">Marshall Islands</option>';}
							stateDropdownHTML += '<option value="MD">Maryland</option>';
							stateDropdownHTML += '<option value="MA">Massachusetts</option>';
							stateDropdownHTML += '<option value="MI">Michigan</option>';
							stateDropdownHTML += '<option value="MN">Minnesota</option>';
							stateDropdownHTML += '<option value="MO">Missouri</option>';
							stateDropdownHTML += '<option value="MS">Mississippi</option>';
							stateDropdownHTML += '<option value="MT">Montana</option>';
							stateDropdownHTML += '<option value="NE">Nebraska</option>';
							stateDropdownHTML += '<option value="NV">Nevada</option>';
							stateDropdownHTML += '<option value="NH">New Hampshire</option>';
							stateDropdownHTML += '<option value="NJ">New Jersey</option>';
							stateDropdownHTML += '<option value="NM">New Mexico</option>';
							stateDropdownHTML += '<option value="NY">New York</option>';
							stateDropdownHTML += '<option value="NC">North Carolina</option>';
							stateDropdownHTML += '<option value="ND">North Dakota</option>';
							//if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="MP">Northern Mariana Islands</option>';}
							stateDropdownHTML += '<option value="OH">Ohio</option>';
							stateDropdownHTML += '<option value="OK">Oklahoma</option>';
							stateDropdownHTML += '<option value="OR">Oregon</option>';
							stateDropdownHTML += '<option value="PA">Pennsylvania</option>';
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="PR">Puerto Rico</option>';}
							stateDropdownHTML += '<option value="RI">Rhode Island</option>';
							stateDropdownHTML += '<option value="SC">South Carolina</option>';
							stateDropdownHTML += '<option value="SD">South Dakota</option>';
							stateDropdownHTML += '<option value="TN">Tennessee</option>';
							stateDropdownHTML += '<option value="TX">Texas</option>';
							stateDropdownHTML += '<option value="UT">Utah</option>';
							stateDropdownHTML += '<option value="VT">Vermont</option>';
							if(yswCW.settings.APOFPO){stateDropdownHTML += '<option value="VI">Virgin Islands</option>';}
							stateDropdownHTML += '<option value="VA">Virginia</option>';
							stateDropdownHTML += '<option value="WA">Washington</option>';
							stateDropdownHTML += '<option value="WV">West Virginia</option>';
							stateDropdownHTML += '<option value="WI">Wisconsin</option>';
							stateDropdownHTML += '<option value="WY">Wyoming</option>';
						stateDropdownHTML += '</select>';

						yswCW.stateDropdownHTML[type] = stateDropdownHTML;
						yswJQ172('#label'+type+'-state').append(yswCW.stateDropdownHTML[type]);

						//Set State
						if(setState != ""){
							yswJQ172('#ysw-'+type+'-state-dropdownHTML option').filter(function() {
								if(yswJQ172(this).text() == setState || yswJQ172(this).val() == setState){
									return true;
								} else{
									return false;
								} 
							}).prop('selected', true);
						}
						
						// If the user changes the country after page has loaded
						yswJQ172("#"+type+"-country").change(function() {
	
							if(yswJQ172('#'+type+'-country').val() == "US") {
								if(yswJQ172('#ysw-'+type+'-state-dropdownHTML').length < 1) {
									var setState = yswJQ172('#'+type+'-state').val();
									yswJQ172('#'+type+'-state').hide();
									yswJQ172('#label'+type+'-state').append(yswCW.stateDropdownHTML[type]);
									//Set State
									if(setState != ""){
										yswJQ172('#ysw-'+type+'-state-dropdownHTML option').filter(function() {
											if(yswJQ172(this).text() == setState || yswJQ172(this).val() == setState){
												return true;
											} else {
												return false;
											} 
										}).prop('selected', true);
									}
								}
							} else {
								yswJQ172('#'+type+'-state').show();
								yswJQ172('#'+type+'-state').removeAttr('required');
								yswJQ172('#'+type+'-state').removeAttr('aria-required');
								yswJQ172('#ysw-'+type+'-state-dropdownHTML').remove();
							}
						});
						
						// If the user changes the state dropdown box
						yswJQ172("#ysw-"+type+"-state-dropdownHTML").live('change', function() {
							var selectedState = yswJQ172('#ysw-'+type+'-state-dropdownHTML option:selected').val();
							yswJQ172('#'+type+'-state').val(selectedState);
						});
					}//end Check US Country Select
				}//end check State input
			}//end settings.showDropDown
		},
		checkCity: function() {
			
			if(yswJQ172('#shipping-city').val() === '') {
				
				yswJQ172('#labelshipping-city,#shipping-city').addClass('error');
				yswJQ172('#labelshipping-city').append('<div class="ysw-error">Enter your City</div>').focus();
			}
		},
		autocomplete: function() {

			if (this.settings.autocomplete) {

				//Start the Autocomplete
				initialize();

				//When focusing on the autocomplete input
				yswJQ172("body").on("click", "#shipping-address1", function() {
					geolocate();
				});
			}
		},
		go: function() {

			yswJQ172(document).ready(function() {
				//If it's the Shipping & Billing page OR One-Page
				if(yswJQ172('#ys_shipBillPage').length > 0 || yswJQ172('#ys_onePage').length > 0) {
					yswCW.hideCoupon();
					yswCW.addProperties();
					yswCW.addValidation();
					yswCW.moveEmail();
					yswCW.addCCImages();
					yswCW.inlineCCImage();
					yswCW.moveErrors();
					yswCW.quickCorrect();
					yswCW.stateDropdownUS('shipping');
					yswCW.stateDropdownUS('billing');
					yswCW.autocomplete();
				}
			});
		}
	};
};