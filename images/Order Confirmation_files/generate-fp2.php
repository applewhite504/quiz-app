var cod_third_party_cookie_disabled = 'true';var enable_fp = 'true';if(enable_fp === 'true'){
    if(cod_third_party_cookie_disabled === 'true'){
        // Get FP from cookie if already set
        if(COD.Utils.GetCookie("cod_fp")!=""){
            COD_TPC.callback({'initial':1, 'fp':COD.Utils.GetCookie("cod_fp")});
        }
        else {
            $LAB.script(COD.Services.getServiceURL()+"services/fingerprint/js/ua-parser.min.js").wait()
			.script(COD.Services.getServiceURL()+"services/fingerprint/js/fingerprint2.min.js")
                    .wait(function(){
                        var d1 = new Date();
                        var fp = new Fingerprint2();
                        fp.get(function(result) {
                            var d2 = new Date();
                            var outString = "fp: " + result + " (" + (d2 - d1) + "ms)";
                            if(typeof window.console !== "undefined") {
                                console.log(outString);
                                //alert(outString);
                            }

                            // save FP in session cookie
                            COD.Utils.SetCookie("cod_fp",result,0,"/");
                            COD_TPC.callback({'initial':1, 'fp':result});
                        });
                    });
        }
    }
    else {
        COD_TPC.callback({'initial':1, 'fp':''});
    }
}
else {
    COD_TPC.callback({'initial':1, 'fp':''});
}

