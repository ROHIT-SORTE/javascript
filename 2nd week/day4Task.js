
// const info = {
//     name: "rohit",
//     age : "28",
//     hobbies : ["volleyball", "football", "riding bike", "travelling", "social working"],

//     getdata : function () {
//             return function(){
//                 console.log(this.name); //name is not accessible because the scope of 
//                                         //the this is upper scope which is function and 
//                                         //object prototype only valid in method not in function.
                
//             }
//         },
// }
// info.getdata()();



// const info = {
//     name: "rohit",
//     age : "28",
//     hobbies : ["volleyball", "football", "riding bike", "travelling", "social working"],

//     getdata : function () {
//             return function(){
//                 console.log(info.name);   // to access we can use like this
                
//             }
//         },
// }
// info.getdata()();



// const arr = ['start', [[['node', 'express', 'javascript'],['react', 'css', 'javascript']]], 'end'];

// console.log(arr[1][0][0][2]);
// console.log(arr[1][0][1][2]);
 




// const obj = {
//     start: "start",
//     tech: {
//         backend: {
//             language: "javascript",
//             eng: "node",
//             framework: "express"
//         },
//         frontend: {
//             ui: "html",
//             design: "css"
//         }
//     },
//     end: "end"
// }

// const a=obj.tech.backend.language;
// console.log(a);





const obj = {
  start: "start",
  tech: {
      fe: ["html", "css", "react"],
      be: ["node", "express", "mongodb"],
      language: [{ common: ["python", "javascript"] }]
  },
  end: "end"
}
const a= obj.tech.language[0].common[1];
console.log(a);



