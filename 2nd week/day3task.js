// function fnOne(n) 
// {
//     return n*n;
// };(function(fn) //passing reference function as a parameter to fnOne
//     {
//     const result = fn(3); //calling fnOne function by passing value 3; 3*3=9
//     console.log("Result =>", result);  //return Result =>9
//     })(fnOne)   //IIFE passing fnOne as a parameter.


// function sqFn(n) {  
//   return n*n;   //return 5*5=25
// };

// (function(paramFn) {  // passing parameter as a reference and function has a cb()
//   const result = paramFn(sqFn);  //calling sqFn function and passing value 5
//   console.log("Result =>", result);     //print result=> 25
// })(function(cb) {      //calling and passing function as a parameter to another
//   return cb(5);
// })



// const obj = {
//   a: 5,
//   b: 15,
//   c: 25
// };

// (function(ob, fn) {
//   fn(function(a,b) {    // calling function and passing another function to line 37
//     ob.a = a+b;         // 2.again value of override with 40
//   })
//   console.log("Result =>", ob.a + ob.b); //return result a=40 + b=15 = 55
// })(obj, function(next) {    //calling function and passing obj and function(next) as parameter to line 31
//     obj.a = obj.c;      // 1.value of a override with 25
//     return next(obj.a, obj.b); //calling function and return result values toline 30
// });



let n = 2;

(function(cb1, cb2) {   //passing n=4 to cb1 and n=16 to cb2
  const res = cb2(cb1(n));  //calling function inside function
  console.log("Result =>", res);    //return result=>16
})(function(n) {  // calling IIFE and passing two functions 1st is on line 47
  return n*n;     // which return 2*2=4, now n=4
  }, function(n) {  // second function is line 49 
  return n*n;       //which returning value 4*4=16 now n=16
})
