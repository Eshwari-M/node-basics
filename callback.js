function prepareOrder() {
    console.log("Preparing the order....."); //3 step - 2nd line
    serveOrder(); //4 step
}

function serveOrder() {
    console.log("Serving the order!!"); //5th step - 3rd line
}

console.log("Customer arrived!"); //1 step - 1st line
prepareOrder(); //2 step
console.log("Next Customer"); //6th step - 4th line of execution