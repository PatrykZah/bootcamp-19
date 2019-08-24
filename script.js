const sayHello = () => alert('Hello world!');
sayHello();



console.log('task 1')

	const Hello = 'Hello'
	const World = 'World'
	const HelloWorld = `${Hello} ${World}`
	console.log(HelloWorld)

console.log('task 2')

	var multiply = (x,y=1) => {return x*y}
	
	console.log(
		multiply(2, 5), // 10
		multiply(6, 6), // 36
		multiply(5) // ?
	)
	
console.log('task 3')
	var average = (...args) => {
		let sum = 0
		args.forEach((Value) => sum+=Value)
		return sum/args.length
	}
	
	console.log(
		average(1), // 1
		average(1, 3), // 2
		average(1, 3, 6, 6) // 4
	)

console.log('task 4')
	const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
	console.log(average(...grades))

console.log('task 5')
	const data = [1, 4, 'Iwona', false, 'Nowak']
	
	const [ , ,firstname, , lastname] = data
	console.log(firstname,lastname)
