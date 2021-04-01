// get reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
//get reference to the add button
var AddToBillBtnElem = document.querySelector(".addToBillBtn");
//create variables that will keep track of the totals
var callTotalOneElem = document.querySelector(".callTotalOne"); 
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne");
var callTot = 0;
var smsTot= 0;

//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callTot += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTot += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElem.innerHTML = callTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callTotal + smsTotal;
    totalOneElem.innerHTML = totalCost.toFixed(2);

    // color the total based on the criteria
    if (totalCost >= 50){
        totalOneElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElem.classList.add("warning");
    }
}
    AddToBillBtnElem.addEventListener("click", textBillTotal);

