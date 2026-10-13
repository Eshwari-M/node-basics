console.log("1. Teacher entered..."); // no timer -> it will give us the immediate o/p

setTimeout(() => {
    console.log("2. Teacher brought chocolates..."); // schedules the callback for later
}, 2000); // 2 sec

console.log("3. Students opened their books.");

setTimeout(() => {
    console.log("4. Teacher brought textbook..."); // schedules the callback for later
}, 3000); // 3 sec
// zero milliseconds does not mean the callback interrupts the current code. The synchronous statements execute first, then the timer callback gets a chance to run.

console.log("Start");

function EatLunch() {
    console.log("Eating lunch");
}
setTimeout(() => {
    console.log("Lunch break finished");
}, 1000);

EatLunch();
console.log("Back to Class");

/*
Call Stack: Tracks functions currently executing.
Event Loop: Helps coordinate when queued callbacks can execute.
Timer: Schedules a callback to become eligible after a delay.
*/

/*
setTimeout() -> Schedules a timer callback after a minimum delay.
process.nextTick() -> Runs after the current JavaScript operation
                     completes, before Node.js continues to the event loop.
setImmediate() -> Schedules a callback for the event loop's check phase.

Note: The relative execution order of setTimeout() and setImmediate()
cannot always be predicted. It depends on the execution context
and event loop timing.
*/

console.log("1. Class started...");

process.nextTick(() => {
    console.log("2. Next tick");
});

setTimeout(() => {
    console.log("3. Time out");
}, 0);

setImmediate(() => {
    console.log("4. Immediate");
});

console.log("5. Teacher continues.");
