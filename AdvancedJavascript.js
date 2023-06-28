
// let a = 10
// function outer()
// {
//     let b = 20
//     function inner()
//     {
//         let c = 30
//         console.log(a, b, c)
//     }
//     inner()
// }
// outer()


// function outer()
// {
//     let counter = 0 ;
//     function inner()
//     {
//         counter++;
//         console.log(counter)
//     }
//     inner()
// }
// outer()

//function currying
// function sum(a,b,c)
// {
//     return a+b+c
// }
// console.log(sum(10,20,30))
//function currying is we have to set from sum(a,b,c)
//to sum(a)(b)(c)
// so the first step of currying is we define a function currying that takes function as input the function is over required function
//then what we do is suppose we have 3 arguments and call return function(argument 1) and then inside this we call for the second function
//with second argument and then inside this we call third function with third argument nice at last with this function we just return the 
// fn with all the arguments and then invoke this curry function by passing argument function as the original sum function 

// function curry(fn)  
// {
//     return function(a)
//     {
//         return function(b)
//         {
//             return function(c)
//         {
//             return fn(a,b,c);
//         }
//         }
//     }
// }
// const CurrySum = curry(sum);
// console.log(CurrySum(10)(20)(30))
/// lets make another function from this for example 
// function trying(divisior,divident,remainder)
// {
//     return divident*divisior + remainder;
// }

// function curry(fn)
// {
//     return function(a)
//     {
//         return function(b)
//         {
//             return function(c)
//             {
//                return fn(a,b,c)
//             }
//         }
//     }
// }
// const ans = curry(trying)
// console.log(ans(10)(20)(30))




//this keyword
//1. implict binding
// const person = {
//     name : 'Kritika',
//     // saymyname: function(){
//     //     console.log(`My name is ${this.name}`)
//     // }
// }

// // person.saymyname()


// // 2. explict binding
// function saymyname(){
//     console.log(`my name is ${this.name}`)
// }
// saymyname.call(person)

//3. new binding
// function Person(name){
//     this.name = name
// }
// const p1 = new Person('Kritika')
// const p2 = new Person('bansal')
// console.log(p1.name)
// console.log(p2.name)

//4. default  function
//saymyname()
// order of precedence//
// 1. new binding
// 2. explicit binding
// 3. implicit binding
// 4. default binding



//prototype
// function Person(fname,lname){
//     this.firstname = fname
//     this.lastname = lname
// }
// const person1 = new Person('kritika','bansal')
// const person2 = new Person('darsh','chandnani')
 
// Person.prototype.fullname = function(){
//        return this.firstname + " " + this.lastname
// }
// console.log(person1.fullname())
// console.log(person2.fullname())


//prototypal inheritance
// function Person(fname,lname){
//     this.firstname = fname
//     this.lastname = lname
// }
// Person.prototype.fullname = function(){
//     return this.firstname + " " + this.lastname
// }
// const person1 = new Person('kritika','bansal')
// function Superhero(fname,lname){
//     Person.call(this,fname,lname)
//     this.issuperhero = true
// }
// Superhero.prototype.fightcrime = function(){
//     console.log('fighting crime')
// }

// Superhero.prototype = Object.create(Person.prototype)
// const batman = new  Superhero()
// console.log(batman.fullname())

