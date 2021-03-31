// get reference to the sms or call radio buttons
var radioBtn = document.querySelector(".billItemTypeRadio")
//get reference to the add button
var radioAddBtn = document.querySelector(".radioBillAddBtn")

//create variables that will keep track of the totals
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");
var callsTotal = 0;
var smssTotal = 0;

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//get bill type to add from the radio button
function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value;
        if (billItemType === "call") {
            callsTotal += 2.75;
        }
        else if (billItemType === "sms") {
            smssTotal += 0.75;
        }
    }

    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElem.innerHTML = smssTotal.toFixed(2);
    var overallCost = callsTotal + smssTotal;
    totalTwoElem.innerHTML = overallCost.toFixed(2);
    

    // color the total based on the criteria
    if (overallCost >= 30 && overallCost < 50) {
        // adding the warning class will make the text orange
        totalTwoElem.classList.add("warning");
    }
    else if (overallCost >= 50) {
        // adding the warning class will make the text red
        totalTwoElem.classList.add("danger");
    }
}
radioAddBtn.addEventListener("click", radioBill);