
console.log("Restaurant received 3 customer orders.");
console.log("1. Preparing order 1...");

setTimeout(() => {
    console.log("2. Order 1 is ready for pickup.");
    console.log("3. Payment for order 1 is processed.");
    console.log("4. Starting preparation of order 2.");

    setTimeout(() => {
        console.log("5. Order 2 is ready for pickup.");
        console.log("6. Starting preparation of order 3.");

        setTimeout(() => {
            console.log("7. Order 3 is ready for pickup.");
            console.log("8. Payment for order 2 is processed.");
            console.log("9. Payment for order 3 is processed.");
            console.log("All orders are completed successfully!");
        }, 2000);

    }, 2000);

}, 3000);
