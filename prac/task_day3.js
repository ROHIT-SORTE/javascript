var a = 5;
b = 10;
function foo() {
    a = 15;
    var b = 20;
    function bar() {
        a=25;
        b=30;
    }
    bar();
}
foo();
console.log(a, b);
var b;
