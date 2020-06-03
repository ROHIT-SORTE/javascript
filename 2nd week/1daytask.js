var obj = {
  value: 50,
  number: {
      a: 10,
      b: 20
  }
};
var fnOne = function(obj, cb) {
  let a = obj.number.a;
  let b = obj.number.b;

  cb(a, b, obj);
  console.log("2nd", obj.value - a);
};

function fnTwo(n1, n2, obj) {
  console.log("1st", n1 + n2);
  obj.value = n1+n2;
};

fnOne(obj, fnTwo);
