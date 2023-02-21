//string
var str1 = 'Hello, World!';  
console.log(str1)
//number
var a=47;  // positive integer value
console.log(a)

var b=629.5;  // floating point
console.log(b)

var c=-5; // negetive interger
console.log(c)

//boolean
var a =10;
var b=9;
a==b // returns false

//object
var student = {firstName: 'john', class: 7};
console.log(student)

//undefine
var var1;
(typeof var1)


//Finding an object's class
function Func() {}
let func = new Func();
typeof Func; // == "function"
typeof func; // == "object"
console.log(typeof Func);
console.log(typeof func);

#Getting object type by constructor name

#string
Object.prototype.toString.call("String")

#number
Object.prototype.toString.call(42)

#boolean
Object.prototype.toString.call(true)

#function
Object.prototype.toString.call(function(){})

#object
Object.prototype.toString.call(Object())
or Object.prototype.toString.call({})

#date
Object.prototype.toString.call(new Date(2015,10,21))

#regex
Object.prototype.toString.call(new RegExp()) or Object.prototype.toString.call(/foo/);

#array
Object.prototype.toString.call([]);

#null
Object.prototype.toString.call(null);

#undefined
Object.prototype.toString.call(undefined);

#error
Object.prototype.toString.call(Error());

