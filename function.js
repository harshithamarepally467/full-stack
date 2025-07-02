// console.log("Hello World");
// function sayHello(){
//     console.log("Hello from sayHello function");

// }
// sayHello();
// console.log("This is a simple JavaScript program");


// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("Hello World");
// },5000);
// console.log("three");

// console.log("four");

//call back example
// a callback is a function that is passed as an argument to another function and is executed after the completion of that function

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,ds){
//     ds(a,b);
// }
// calculator(5,10,sum);

// direct execution

// calculator(5,10,(a,b)=>{
//     console.log(a+b);
// });

// console.log("one");
// console.log("two");
// const hello = ()=>{
//     console.log("hello world");
// }
// setTimeout(hello,5000);
// console.log("three");
// console.log("four");


//time for ,for loop is n^2
//nested for loops example

// for(let i=0;i<5;i++)
// {
//   let str="";
//   for(let j=0;j<5;j++)
//   {
//     str +=j;
//   }
//   console.log(i,str);
// }

// function getData(dataid){
//     setTimeout(() =>{
//         console.log("fetching data for id:",dataid);
//     },5000);
// }

// getData(1);
// getData(2);
// getData(3);

// function getData(dataid,getnextdata){
//     setTimeout(() => {
//         console.log("fetching data for id:",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     },5000);
// }

// getData(1,()=>{
//     console.log("getting data 2.....")
//     getData(2,()=>{
//         console.log("getting data 3.....")
//         getData(3);
//     });
// });

// callbackhell nested call back stacked below one another

// to over come this we will use promises
// promise for eventually completion of an operation

// promise is an object that represents the eventual completion or failure of an asynchronous operartion and its resulting value.it allows you to write asynchronous code in a more manageable way,avoiding callback hell.

// promise Syntax
// const myPromise  = new Promise
// ((resolve,reject)=>{..})
// asynchronous operation is successful
// reject is called when the asynchronous operation fails


// const myPromise = new Promise((resolve,reject)=>{
//     // asynchronous operation
//     setTimeout(() =>{
//         const success = false;
//         // simulate succeess or failure
//         if(success){
//             resolve("Data fetched successfully");
//         } else {
//             reject("error fetching data");
//         }
//     },2000);
// });


// myPromise
//     .then((data) =>{
//         console.log("promise resolved with data:",data);
//     })
//     .catch((error)=>{

//         console.log("promise rejected with error",error);
//     });

    // using th promise
    // the thenn() method is called when the promise is resolved successfully
    // the catch()method is called when the promise is rejected with an error
    // the finally() method is called when the promise is settled,regardless


//     let promise = new promise((resolve,reject)=>{
//         console.log("iam a promise");
//         if(1<0){
//             resolve(123);
//         }
//         reject ("something went wrong");
//     }
// );


// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     if (1 < 0) {
//         resolve(123);
//     } else {
//         reject("Something went wrong");
//     }
// });

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("fetching data for id:",dataid);
            resolve("success");
        },2000);
    });
}
let result = getData(123);
result;

// chaining multiple data fetches
getData(101)
  .then(result =>{
    console.log("first fetch:",result);
    return getData(102);
  })
  .then(result => {
    console.log("second fetch:",result);
    return getData(103);
  })
   .then(result => {
    console.log("third fetch:",result);
   });