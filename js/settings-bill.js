// get a reference to the sms or call radio buttons
var radioBtns = document.querySelector(".billItemTypeWithSettings");
// get references to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings")
//get a reference to the add button
var addBtn = document.querySelector(".button-primary")
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callSett = 0;
var smsSett = 0;
var totalSett = 0;
// create a variables that will keep track of all three totals.
var total = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", billTypeSetting)
//add an event listener for when the add button is pressed
addBtn.addEventListener("click", billTypeSetting)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function billTypeSetting(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value;
        if (billItemTypeWithSettings === "call"){
            callSett += 2.75;
        }
        else if (billItemTypeWithSettings === "sms"){
            smsSett += 0.75;
        }
    }

    // callTotalTwoElem.innerHTML = callsTotal.toFixed(2);
    // smsTotalTwoElem.innerHTML = smssTotal.toFixed(2);
    // var overallCost = callsTotal + smssTotal;
    // totalTwoElem.innerHTML = overallCost.toFixed(2);

    // if (overallCost >= 30) {
    //     // adding the danger class will make the text red
    //     totalTwoElem.classList.add("warning");
    //     // totalTwoElem.classList.remove("danger");
    // }
    // else if (overallCost >= 50) {
    //     totalTwoElem.classList.remove("warning");
    //     totalTwoElem.classList.add("danger");
    // }
}