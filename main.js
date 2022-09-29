var initialPrice    = document.querySelector("#initial-price");
var quantityOfStock = document.querySelector("#quantity-of-stock");
var currentPrice    = document.querySelector("#current-price");
var checkButton     = document.querySelector("#check-button");
var outputBox       = document.querySelector("#output-box");


checkButton.addEventListener("click", checkButtonHandler);

function checkButtonHandler () {
    var ip  = Number(initialPrice.value) ;
    var qty  = Number(quantityOfStock.value) ;
    var curr  = Number(currentPrice.value) ;

    if (ip && qty && curr ){
        calculateProfitAndLoss (ip,qty,curr);
       
     
    }
    else{
        outputBox.innerHTML="Please Enter All The Feild "
        

       
    }
    

}


function calculateProfitAndLoss (initial,quantity,current){
    if (initial > current) {  
    var loss = (initial- current)* quantity;
    var lossPercentage = (loss*100 )/initial;
    showMessage(
        `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
      );
      outputBox.style.color= "red" 

    
}else

    if (current > initial ){  
    var profit = ( current-initial)* quantity;
    var profitPercentage = (profit*100)/initial
    showMessage(
        `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
        

      );
      outputBox.style.color= "green" 

    


}else{
    showMessage("Dont worry there is no loss and  no profit");
    outputBox.style.color= "blue" 


}


}
function showMessage (msg){
    outputBox.innerHTML = msg
}


