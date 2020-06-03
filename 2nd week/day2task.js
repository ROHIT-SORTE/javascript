// function fnOne(cb)  //passing the ref of cb
// {
//      return cb;        // return cb ref
    
// }
// function cb()       //cb() returns string 'Hello World'
// {
//     return 'Hello World !!';
// }
// const resOne = fnOne(cb);   //passing ref of cb as parameter to fnOne 
// const resTwo = resOne();    //calling fun cb() 
// console.log("1st", resOne);
// console.log("2nd", resTwo);


// function fnOne(cb)      //passing cb() function as a parameter
// {
//     const value = "Hello";
//     return cb(value);   //return value hello
// }

// function cb(str) 
// {
//     const value =  " world";
//     return str + value;     //value str= world and return hello + world
// }

// const result = fnOne(cb);   //calling fnOne
// console.log(result);        // print Hello world


// function fnOne(cb, next)    //passing two parameter as a reference
// {                           //passing cb and next function a reference and 
//   return cb(next);          //returning cb function
// }

// function cb(argFn)          
// {
//   return argFn(' write code.')  //calling next(str)
// }

// function next(str) 
// {
//   return 'I' + str;         //return I + str (write code)
// }

// const result = fnOne(cb, next); //calling fnOne function
// console.log(result);    //print i write code

function fnOne(str, cb)     //str is javascript and cb is reference
{
  
    function fnTwo(msg, adj) //msg => javascript
    {
        return msg + ' is ' + adj;
    }

  return cb(str, fnTwo);
}

function cb(msg, next)      //next ref to fnTwo nd pass flexible to adj
{
  return next(msg, 'Flexible');     //calling fnTwo and passing flexible to function
}

const result = fnOne('Javascript', cb);     //calling fnOne passing param javascript and cb ref
console.log(result);    //return javascript is flexible