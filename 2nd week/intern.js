// var e;
// function intern(s)
// {
// 	s=4;
// 	console.log(e);
// }
// intern(e);
//  e=8;
// console.log(e);


// const burger =function (souce)
// {
// 	const topping = function(mayo)
// 	{
// 		return souce(mayo);
// 	};
// 	return topping;
// }
// const topping = function(name)
// {
// 	return name();
// }

// const mayonese = function()
// {
// 	return "mayo burger";
// }

// const prepare = burger(topping);

// const ready = prepare(mayonese);


// console.log("122",ready ,typeof ready);


// const booking = function (book,user)
// {
// 	const tatkal = function (start)
// 	{
// 		return start(user);
// 	};
// 	return book(tatkal);
// }
// const counter = function(irctc)
// {
// 	function book(person)
// 	{
// 		return "confirmed" +person
// 	}
// 	return irctc(book);
// }
// const ticket = booking(counter,"user");

// console.log("122",ticket,"type=>", typeof ticket);



// const hello = function(param)
// {
// 	console.log("a", param);
// }

// const fn = function()
// {
// 	console.log("string");
// }
// hello(fn);




const hellofn = function(param)
{
	const inside = function()
	{
		console.log("inside");
	};
	return inside;
}













