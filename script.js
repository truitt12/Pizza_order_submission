let order = ["Your order is: "];
let orderPrice = 0;
let d = new Date;


function orderReset(){

    localStorage.clear();
    document.getElementById("edit").innerHTML = "";
    document.getElementById("time").innerHTML = "";
    order = [];
    
}


function displayOrder (){


    //Setting order to local storage
let readableObj = JSON.stringify(order)
localStorage.setItem("order",readableObj)

//Calling order from storage
let ObjectUnfolded = JSON.parse(localStorage.getItem("order"));
console.warn(order);
document.getElementById("edit").innerHTML = ObjectUnfolded;
}



function clicky (){

//alert("Hello")
// Getting value fields 

// object array


let pizzaSize = document.querySelector('input[name="size"]:checked').value;
// adding price value to order
if(pizzaSize == "Large"){
    orderPrice += 15
}

if(pizzaSize == "Medium"){
    orderPrice += 10
}

if(pizzaSize == "Small"){
    orderPrice += 6
}



// Creating order array
order.push(pizzaSize);

// Looping through text box values 
let toppings = document.getElementsByName("toppings");
let toppingArray = []
for(var i = 0; i < toppings.length; i++ ){

    if (toppings[i].checked   === true && toppings[i].value == "sausage"  ){
        

        order.push(toppings[i].value);

        orderPrice += 3
        toppingArray.push(toppings[i].value);
        
        

       
    } 

    if (toppings[i].checked   === true && toppings[i].value == "pepperoni"  ){
        

        order.push(toppings[i].value);
        orderPrice += 2

        toppingArray.push(toppings[i].value);
        
        

       
    } 

    if (toppings[i].checked   === true && toppings[i].value == "pineapple"  ){
        
        orderPrice += 1
        order.push(toppings[i].value);


        toppingArray.push(toppings[i].value);
        
        

       
    } 
}

//Testing and deubugging

 //alert(toppingArray);
//alert(orderPrice);

let method = document.getElementById("delivery").value;


order.push(orderPrice)
order.push(method);
//console.warn(order);




alert("Your order has been saved!  your total will be $" + orderPrice )
document.getElementById("time").innerHTML = "Your order was placed at " + d;


}
