console.log("First");

Promise.resolve().then(() => {
    console.log("Second");
});

setTimeout(() => {
    console.log("Third");
},0);

console.log("Fourth");console.log("First");

Promise.resolve().then(() => {
    console.log("Second");
});

setTimeout(() => {
    console.log("Third");
},0);

console.log("Fourth");