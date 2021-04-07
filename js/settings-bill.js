// get reference to the sms or call radio buttons
var radioBtns = document.querySelector(".billItemTypeWithSettings");
// get reference to all the the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

// get reference to all the the totals
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings")

//get a reference to the add button
var addTheBillBtn = document.querySelector(".addTheBillBtn");

//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings");

// create variables that will keep track of all the settings
var callSetting = 0;
var smsSetting = 0;
var warningSetting = 0;
var criticalSetting = 0;

// create variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var bill = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", function(){
    callSetting = callCostSetting.value;
    smsSetting = smsCostSetting.value;
    warningSetting = warningLevelSetting.value;
    criticalSetting = criticalLevelSetting.value;
    colors(bill);
});

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeWithSettings radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
addTheBillBtn.addEventListener("click", function(){
    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (billItemTypeWithSettings) {
        var selectedBtn = billItemTypeWithSettings.value;
        if (selectedBtn === "call" && bill < parseFloat(criticalLevelSetting.value)){
            callTotal += parseFloat(callCostSetting.value);
        }
        else if (selectedBtn === "sms" && bill < parseFloat(criticalLevelSetting.value)){
            smsTotal += parseFloat(smsCostSetting.value);
        }
        else {
            callTotal += 0;
            smsTotal += 0;
        }
    }

    if (selectedBtn === "call"  && callCostSetting.value == ""){
        callTotal = 0;
    }

    if (selectedBtn === "sms"  && smsCostSetting.value == ""){
        smsTotal = 0;
    }

    //display totals
    callTotalSettings.innerHTML = callTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    bill = callTotal + smsTotal;
    totalSettings.innerHTML = bill.toFixed(2);
    colors(bill);
});

    //change colours
    var colors = function (bill) {
    if (bill < parseFloat(warningLevelSetting.value)){
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");
    }
    else if (bill >= parseFloat(warningLevelSetting.value) && bill < parseFloat(criticalLevelSetting.value)) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    else if (bill >= parseFloat(criticalLevelSetting.value)) {
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning")
    }
}