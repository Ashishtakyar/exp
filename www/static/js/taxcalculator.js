function IsNumeric(strString)
//  check for valid numeric strings	
{
    var strValidChars = "0123456789";
    var strChar;
    var blnResult = true;

    if (strString.length == 0) return false;

    //  test strString consists of valid characters listed above
    for (i = 0; i < strString.length && blnResult == true; i++) {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1) {
            blnResult = false;
        }
    }
    return blnResult;
}


function ClearTax() {
    document.getElementById("gross").value = "";
    //document.getElementById("exp").value = "";
    document.getElementById("ded").value = "";
    document.getElementById("diff").value = "";

    return false;

}

function getAllowanceAdjustment() {
    var allowanceadjustment = 0;
    if (document.getElementById("hasmedical").checked ) allowanceadjustment += 1000
    if (document.getElementById("hascar").checked ) allowanceadjustment += 3000
    if (document.getElementById("hastaxdebt").checked ) allowanceadjustment += 1000
    if (document.getElementById("notsure") && document.getElementById("notsure").checked ) allowanceadjustment += 0
    return allowanceadjustment
}

function calculateTax() {
    var nic = 0,
        nic2 = 0,
        nic3 = 0,
        pers = 0,
        pers1 = 0,
        pers2 = 0,
        pers3 = 0,
        pers4 = 0,
        pers5 = 0,
        nic9 = 0,
        nic10 = 0,
        txtwrk = '';

    if (document.getElementById("gross").value == "") {
        //alert("Please enter Gross Pay");
        document.getElementById("gross").focus();
        return false;
    }

    txtwrk = document.getElementById("gross").value
    document.getElementById("gross").value = txtwrk.replace(/,/g, '')

    if (IsNumeric(document.getElementById("gross").value) == false) {
        //alert("Please Enter numeric value!");
        document.getElementById("gross").value = "";
        document.getElementById("gross").focus();
        return false;
    }

    //        if(document.getElementById("exp").value != "")
    //          {
    //             if (IsNumeric(document.getElementById("exp").value) == false) 
    //                {
    //                    alert("Please Enter numeric value!");
    //                    document.getElementById("exp").value="";
    //                    document.getElementById("exp").focus();
    //                    return false;
    //                }
    //          }

    if (document.getElementById("ded").value != "") {
        if (IsNumeric(document.getElementById("ded").value) == false) {
            //alert("Please Enter numeric value!");
            document.getElementById("ded").value = "";
            document.getElementById("ded").focus();
            return false;
        }
    }

    var net = +document.getElementById("gross").value;




    if (document.getElementById("year").value == "1112") {

        // calculate adjustments to basic allowance
        // every 2 pounds above 100,000 results in a 1 pound decrease in the allowance	

        allowance = 7475
        allowanceadjustment = getAllowanceAdjustment();

        if (net > 100000) {
            allowanceadjustment = (net - 100000) / 2

            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance
            }
        }

        allowance = allowance - allowanceadjustment
        //alert('Allowance ' + allowance);

        // calculate gross amount minus the allowance

        nic = net - allowance
        //alert('gross - allowance ' + nic)

        // calculate tax payable in each tax band 

        if (nic > 0) {

            // 0 - £35,000 taxed at 20%			

            if (nic >= 35000) {
                pers1 = 35000 * 20 / 100;
                nic2 = nic - 35000;
                //alert('20% tax ' + pers1);
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
                //alert('20% tax ' + pers1);
            }

            // £35,001 - £150,000 taxed at 40%			

            if (nic2 >= 115000) {
                pers2 = 115000 * 40 / 100;
                nic3 = nic2 - 115000;
                //alert('40% tax ' + pers2);
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
                //alert('40% tax ' + pers2);
            }

            // £150,001 + taxed at 50%			

            if (nic3 > 0) {
                pers3 = nic3 * 50 / 100;
                //alert('50% tax ' + pers3);
            }

        }
        pers = pers1 + pers2 + pers3;
        //Endif              
    }


    if (document.getElementById("year").value == "1213") {

        // calculate adjustments to basic allowance
        // every 2 pounds above 100,000 results in a 1 pound decrease in the allowance	

        allowance = 8105
        allowanceadjustment = getAllowanceAdjustment();

        if (net > 100000) {
            allowanceadjustment = (net - 100000) / 2

            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance
            }
        }

        allowance = allowance - allowanceadjustment
        //alert('Allowance ' + allowance);

        // calculate gross amount minus the allowance

        nic = net - allowance
        //alert('gross - allowance ' + nic)

        // calculate tax payable in each tax band 

        if (nic > 0) {

            // 0 - £34,370 taxed at 20%			

            if (nic >= 34370) {
                pers1 = 34370 * 20 / 100;
                nic2 = nic - 34370;
                //alert('20% tax ' + pers1);
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
                //alert('20% tax ' + pers1);
            }

            // £34,371 - £150,000 taxed at 40%			

            if (nic2 >= 115630) {
                pers2 = 115630 * 40 / 100;
                nic3 = nic2 - 115630;
                //alert('40% tax ' + pers2);
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
                //alert('40% tax ' + pers2);
            }

            // £150,001 + taxed at 50%			

            if (nic3 > 0) {
                pers3 = nic3 * 50 / 100;
                //alert('50% tax ' + pers3);
            }

        }
        pers = pers1 + pers2 + pers3;
        //Endif              
    }


    if (document.getElementById("year").value == "1314") {

        // calculate adjustments to basic allowance
        // every 2 pounds above 100,000 results in a 1 pound decrease in the allowance	

        allowance = 9440
        allowanceadjustment = getAllowanceAdjustment();

        if (net > 100000) {
            allowanceadjustment = (net - 100000) / 2

            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance
            }
        }

        allowance = allowance - allowanceadjustment
        //alert('Allowance ' + allowance);

        // calculate gross amount minus the allowance

        nic = net - allowance
        //alert('gross - allowance ' + nic)

        // calculate tax payable in each tax band 

        if (nic > 0) {

            // 0 - £32,010 taxed at 20%			

            if (nic >= 32010) {
                pers1 = 32010 * 20 / 100;
                nic2 = nic - 32010;
                //alert('20% tax ' + pers1);
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
                //alert('20% tax ' + pers1);
            }

            // £32,011 - £150,000 taxed at 40%			

            if (nic2 >= 117990) {
                pers2 = 117990 * 40 / 100;
                nic3 = nic2 - 117990;
                //alert('40% tax ' + pers2);
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
                //alert('40% tax ' + pers2);
            }

            // £150,001 + taxed at 45%			

            if (nic3 > 0) {
                pers3 = nic3 * 45 / 100;
                //alert('45% tax ' + pers3);
            }

        }
        pers = pers1 + pers2 + pers3;
        //Endif              
    }

    if (document.getElementById("year").value == "1415") {

        // calculate adjustments to basic allowance
        // every 2 pounds above 100,000 results in a 1 pound decrease in the allowance	

        allowance = 10000
        allowanceadjustment = getAllowanceAdjustment();allowanceadjustment = 0

        if (net > 100000) {
            allowanceadjustment = (net - 100000) / 2

            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance
            }
        }

        allowance = allowance - allowanceadjustment
        //alert('Allowance ' + allowance);

        // calculate gross amount minus the allowance

        nic = net - allowance
        //alert('gross - allowance ' + nic)

        // calculate tax payable in each tax band 

        if (nic > 0) {

            // 0 - £32,010 taxed at 20%			

            if (nic >= 31865) {
                pers1 = 31865 * 20 / 100;
                nic2 = nic - 31865;
                //alert('20% tax ' + pers1);
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
                //alert('20% tax ' + pers1);
            }

            // £32,011 - £150,000 taxed at 40%			

            if (nic2 >= 118136) {
                pers2 = 118136 * 40 / 100;
                nic3 = nic2 - 118136;
                //alert('40% tax ' + pers2);
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
                //alert('40% tax ' + pers2);
            }

            // £150,001 + taxed at 45%			

            if (nic3 > 0) {
                pers3 = nic3 * 45 / 100;
                //alert('45% tax ' + pers3);
            }

        }
        pers = pers1 + pers2 + pers3;
        //Endif                
    }
    if (document.getElementById("year").value == "1516") {

        // calculate adjustments to basic allowance
        // every 2 pounds above 100,000 results in a 1 pound decrease in the allowance	

        allowance = 10600;
        allowanceadjustment = getAllowanceAdjustment();

        if (net > 100000) {
            allowanceadjustment = (net - 100000) / 2;

            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance;
            }
        }

        allowance = allowance - allowanceadjustment;
        //alert('Allowance ' + allowance);

        // calculate gross amount minus the allowance

        nic = net - allowance;
        //alert('gross - allowance ' + nic)

        // calculate tax payable in each tax band 

        if (nic > 0) {

            // 0 - £32,010 taxed at 20%			

            if (nic >= 31785) {
                pers1 = 31785 * 20 / 100;
                nic2 = nic - 31785;
                //alert('20% tax ' + pers1);
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
                //alert('20% tax ' + pers1);
            }

            // £32,011 - £150,000 taxed at 40%			

            if (nic2 >= 118216) {
                pers2 = 118216 * 40 / 100;
                nic3 = nic2 - 118216;
                //alert('40% tax ' + pers2);
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
                //alert('40% tax ' + pers2);
            }

            // £150,001 + taxed at 45%			

            if (nic3 > 0) {
                pers3 = nic3 * 45 / 100;
                //alert('45% tax ' + pers3);
            }

        }
        pers = pers1 + pers2 + pers3;
        //Endif                
    }
    if (document.getElementById("year").value == "1617") {

        allowance = 11000;
        allowanceadjustment = getAllowanceAdjustment();

        if (net > 100000) {
            allowanceadjustment = (net - 100000) / 2;
            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance;
            }
        }

        allowance = allowance - allowanceadjustment;
        nic = net - allowance;
        if (nic > 0) {
            if (nic >= 32000) {
                pers1 = 32000 * 20 / 100;
                nic2 = nic - 32000;
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
            }
            if (nic2 >= 150001) {
                pers2 = 150001 * 40 / 100;
                nic3 = nic2 - 150001;
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
            }

            if (nic3 > 0) {
                pers3 = nic3 * 45 / 100;
            }
        }
        pers = pers1 + pers2 + pers3;
    }
    if (document.getElementById("year").value == "1718") {

        allowance = 11500; // Personal Allowance Up to £11,500 @ 0%
        allowanceadjustment = getAllowanceAdjustment();

        if (net > 100000) {
            allowanceadjustment = (net - 100000) / 2;
            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance;
            }
        }

        allowance = allowance - allowanceadjustment;
        nic = net - allowance;
        if (nic > 0) {
            //Basic rate £11,501 to £45,000 @ 20%
            if (nic >= 33500) { // £11,500 - £45,000=33500
                pers1 = 33500 * 20 / 100;
                nic2 = nic - 33500; //Remainder for next calculation
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
            }
            // Higher rate £45,001 to £150,000 @ 40%
            if (nic2 >= 29555) { // Here nic2=29555
                pers2 = 29555 * 40 / 100;
                nic3 = nic2 - 29555; //Remainder for next calculation
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
            }

            //Additional rate over £150,000 @ 45%
            // £150,001 + taxed at 45%    
            if (nic3 > 0) {
                pers3 = nic3 * 45 / 100; //Remainder for next calculation
            }
        }
        pers = pers1 + pers2 + pers3;
    }
    if (document.getElementById("year").value == "1819") {

        allowance = 11850; // Personal Allowance Up to £11,850 @ 0%
        allowanceadjustment = getAllowanceAdjustment();

        if (net > 100000) { // net mean gross value
            allowanceadjustment = (net - 100000) / 2;
            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance;
            }
        }

        allowance = allowance - allowanceadjustment;
        nic = net - allowance;

        if (nic > 0) {
            // Basic rate 0 to £34,500 @ 20%
            if (nic >= 34500) { // 34500 - 0 = 34500
                pers1 = 34500 * 20 / 100;
                nic2 = nic - 34500;
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
            }

            // Higher rate £34,501 to £150,000 @ 40%
            if (nic2 >= 115500) { //34500 - 150000 = 115500
                pers2 = 115500 * 40 / 100;
                nic3 = nic2 - 115500;
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
            }

            // £150,001 + taxed at 45%

            if (nic3 > 0) {
                pers3 = nic3 * 45 / 100;
            }
        }
        pers = pers1 + pers2 + pers3;
    }

    if (document.getElementById("year").value == "1920") {
        allowance = 12500; // Personal Allowance Up to £11,850 @ 0%
        allowanceadjustment = getAllowanceAdjustment();

       

        if (net > 100000) { // net mean gross value
            allowanceadjustment = (net - 100000) / 2;
            if (allowanceadjustment > allowance) {
                allowanceadjustment = allowance;
            }
        }

        allowance = allowance - allowanceadjustment;
        nic = net - allowance;

        if (nic > 0) {
            // Basic rate 0 to £34,500 @ 20%
            if (nic >= 34500) { // 34500 - 0 = 34500
                pers1 = 34500 * 20 / 100;
                nic2 = nic - 34500;
            } else {
                pers1 = nic * 20 / 100;
                nic2 = 0;
            }

            // Higher rate £34,501 to £150,000 @ 40%
            if (nic2 >= 115500) { //34500 - 150000 = 115500
                pers2 = 115500 * 40 / 100;
                nic3 = nic2 - 115500;
            } else {
                pers2 = nic2 * 40 / 100;
                nic3 = 0;
            }

            // £150,001 + taxed at 45%

            if (nic3 > 0) {
                pers3 = nic3 * 45 / 100;
            }
        }
        pers = pers1 + pers2 + pers3;
    }

    var nic8 = pers;
    //   console.log("total"+nic8)
    var tax = +document.getElementById("ded").value - nic8;
    tax = tax.toFixed(0);

    return tax;

    /*
    if (document.getElementById("ded").value > nic8) {
        //alert("Congratulations! you are due a refund of \u00A3 " + tax + " No need to wait, you can get started straight away. Either download a TAXPACK from our website or call our freephone number 0800 007 5703 for some further advice, or to request a TAXPACK posted to your address");
        document.getElementById("diff").value = tax;
    }
    else {
        //alert("You have underpaid your tax by" + tax);
        document.getElementById("diff").value = "";
    }

    return false;*/

}