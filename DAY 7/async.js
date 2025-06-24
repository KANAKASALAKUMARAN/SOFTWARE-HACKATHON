// let count=0;

// let timer = setInterval(()=> 
//     {count++;
//         console.log("Hello agian");
//     if(count>5){
//     clearInterval(timer);
// }
// },2000);


// console.log("hello form async");
// function doTask(taskName, callback) {
//   console.log(`Starting ${taskName}....`);
//   setTimeout(() => {
//     console.log(`${taskName} completed!`);
//     callback();
//   }, 5000);
// }

// doTask("Regading Book", ()=>{
//   console.log("Now reading chapter 10");
// });
let order = new Promise((resolve, reject) => {
  let isOverWorking = true;
  setTimeout(() => {
    if(isOverWorking) {
      resolve("Order is ready");
    } else {
      reject("Order delay");
    }
  }, 3000);
});

order
  .then((message) => console.log("Success: ",message))
  .catch((error) => {
    console.log("Error: ",error);
  });
  
function orderFunction (){
    let order = new Promise((resolve, reject) => {
        let isOverWorking = true;
        setTimeout(() => {
          if(isOverWorking) {
            resolve("Order is ready");
          } else {
            reject("Order delay");
          }
        }, 3000);
      });
      return order;
}
async function orderFood(){
    try{
        let message = await orderFunction();
        console.log("Success: ",message);
    } catch(error){
        console.log("Error: ",error);
    }
}