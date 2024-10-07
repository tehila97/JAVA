
// In my opinion, what came out is first START and then END. 
// This is because the beginning setting time is 0.
// Or alternatively, the END can be earlier than the START where a time function is defined. -- 
// delete?

// console.log("Start");
// setTimeout(() => {
//  console.log("Inside setTimeout with 0ms");
// }, 0);
// console.log("End");

// **************************************************************************************

// It will first print START and then - timeout 3: after 0ms because it is the shortest that 
// is defined for it to run and it appears before the time for which no time is defined at all, which is END.
// After END will appear
// Then fine "Timeout 2: after 30ms"  
// and at the end of timeout 1: after 50ms

// Why do some setTimeout logs appear before others? --
// they sometimes appear in the wrong order they appear in the code because their time is set differently
// for each line

// console.log("Start");
// setTimeout(() => {
//  console.log("Timeout 1: After 50ms");
// }, 50);
// setTimeout(() => {
//  console.log("Timeout 2: After 30ms");
// }, 30);
// setTimeout(() => {
//  console.log("Timeout 3: After 0ms");
// }, 0);
// console.log("End");

// It turned out that I was wrong and END appeared before Timeout 3: After 0ms

// **************************************************************************************

// First 
// Last 
// for loop -- Inside Timeout 2: After 0ms 
// Inside Timeout 1: After 20ms

// console.log("First");
// setTimeout(() => {
//  console.log("Inside Timeout 1: After 20ms");
// }, 20);
// for (let i = 0; i < 1000000000; i++) {
//     // Simulate a long-running task
//    }
//    setTimeout(() => {
//     console.log("Inside Timeout 2: After 0ms");
//    }, 0);
//    console.log("Last");

// **************************************************************************************

// expected output:
// Start - Because it is not defined by time
// End - Because it is not defined by time  
// First Timeout - Because it is set to time 0
// Second Timeout - Because it is set to time 50
// Nested Timeout - Because it is set to time 100

// console.log("Start");
// setTimeout(() => {
//  console.log("First Timeout");
//  setTimeout(() => {
//  console.log("Nested Timeout");
//  }, 0);
// }, 100);
// setTimeout(() => {
//  console.log("Second Timeout");
// }, 50);
// console.log("End");

// I was wrong because it first runs the short total time Second Timeout before it runs the long total
// time First Timeout and Nested Timeout

// **************************************************************************************

// expected output:
// Start - Because it is not defined by time
// Timeout 1: After 50ms - Because it is not Interval and the setTimeout comes first
// Start
// Timeout 1: After 50ms - Because it is not Interval and the setTimeout comes first
// Interval: Every 30ms - Because it is Interval and it comes Second 

// console.log("Start");
// setInterval(() => {
//  console.log("Interval: Every 30ms");
// }, 30);
// setTimeout(() => {
//  console.log("Timeout 1: After 50ms");
//  console.log("Start");
// setInterval(() => {
//  console.log("Interval: Every 30ms");
// }, 30);
// setTimeout(() => {
//  console.log("Timeout 1: After 50ms");

// I was wrong, the correct answer - 
// Start 
// Interval: Every 30ms 
// Timeout 1: After 50ms
// Interval: Every 30ms
// Timeout 2: After 50ms

