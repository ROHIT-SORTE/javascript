// let a = 2;
// let b = 4;

// function fnOne() {
//     a = 10;
//     let b = 5;

//     function fnTwo() {
//         b = 20;

//         function fnThree() {
//           a = b+5;
//             console.log("1st", a+b);
//         };
//         fnThree();
//     };

//     console.log("2nd", a+b);
//     fnTwo();
// };
// fnOne();
// console.log("3rd", a+b);


function india()
{
let b=2;
var a=30;
console.log(a+b);
function mh()
{
  let a=15;
  console.log("mh",a+b);
  if(true)
  {
    let b=5;
    console.log(a+b);
    
  }
}
function bh()
{
  if(true)
  {
    let b=2;
    console.log(a+b);  
  }
  a=8;
  function ben()
  {
    let a=23;
    b=9;
    console.log("ben",a+b);
  }
  ben();
  console.log(a,b);
}mh();
console.log(a,b);
bh();
console.log(a,b);
}
india();