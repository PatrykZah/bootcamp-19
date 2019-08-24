'use strict';

var sayHello = function sayHello() {
	return alert('Hello world!');
};
sayHello();

console.log('task 1');

var Hello = 'Hello';
var World = 'World';
var HelloWorld = Hello + ' ' + World;
console.log(HelloWorld);

console.log('task 2');

var multiply = function multiply(x) {
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return x * y;
};

console.log(multiply(2, 5), // 10
multiply(6, 6), // 36
multiply(5) // ?
);

console.log('task 3');
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (Value) {
		return sum += Value;
	});
	return sum / args.length;
};

console.log(average(1), // 1
average(1, 3), // 2
average(1, 3, 6, 6) // 4
);

console.log('task 4');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

console.log('task 5');
var data = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = data[2],
    lastname = data[4];

console.log(firstname, lastname);
