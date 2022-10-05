//Declare with string 

import { ifError } from "assert";
import { kStringMaxLength } from "buffer";



// let movietitle:string="The amazing spiderman 2";
// movietitle.toUpperCase;



//movietitle=44; // this is not true because the movietitle is a string



// let school:string="University of Cambodia(UC)";
// let StudentName:string="Pov Chanra";
// let StudentPlace:string="Phnom Penh"
// let StudentGender:string="Male";
 


//Declare with Boolean

// let Name:boolean=true;
// Name=true;
// Name=false;// this is truely the Name declared Boolean
// //Name=44 // this cannot declare correctly because the Name declare like boolean


//Declare with Number

// let StudentID:number=57058
// StudentID="4433" // is not true;
// StudentID=true // is not true, the StudentID must be only number;
// StudentID+=1;


// Number
// let money:number;
// money=44;
// money=55;
// money=77;
// money=true // is not true the money must be only number
// money="Hello world" // is not true the money must be only number;

//Null and Defined

// let Nothing:null=null;
// let woo:undefined=undefined;


//type inference


// let show="0lifeComming"
// show=true;// above is a string cannot be boolea
// show =false;
// show="you are my everything" //this is true;


// let logical=true;
// logical=22;//only boolean
// logical="you are everything"//only boolean
// logical=null;//only boolean
// logical=undefined//only boolean
// logical=false;//this is true



// let Goods=false;
// Goods=44;//must be boolean
// Goods="you are good"//must be boolean
// Goods=true;
// Goods=null;//must be boolean
// Goods=undefined//must be boolean


// let Age=25;
// Age=true;//only number
// Age="Good"//only number


//Type any
// allow for all type of variable



// let free:any=33;
// free=true;
// free=false
// free="Hello"
// free=null;
// free=undefined;
// free.toUpperCase();


//other
// const movies=["Spiderman2","power ranger"," the AntMan"]
// let foundmovies;
// for(let movie of movies){
//     if(movie==="power ranger"){
//         foundmovies=="power ranger"
//     }
// }
// foundmovies();
// foundmovies+=1;
// foundmovies.aaskldjas()



//other
// const movies=["spiderman","power","AntMan"]
// let foundmovies;
// for(let movie of movies){
//     if(movie==="power"){
//         foundmovies=="power";
//     }
// }
// foundmovies();
// foundmovies+=1;
// foundmovies.aaskldjas();


//function

// function number(num:number){
//     return num+3;
// }
// number(true)//is not true
// number(44) // true



// function Student(name:string){
//     return name;
// }
// Student(33)//only string
// Student('Chan Dara');
// Student(false) //only string
// Student(true);// only string



//function 

// function Student(name:string){
//     return name;
// }
// Student('ChanDara')
// Student(true)// only string
// Student(34)//only string



//function

// function Student(name:string,id:number){
//     return name;id;
// }
// console.log(Student('chan dara',33545))



//Array type

// let User:string[]=["Chanda","Dara","Kosal","Meas"]
// User.push("Dara");
// User.push("Koma");
// console.log(User)


// let UserID:number[]=[4,5,3,2]
// let UserName:string[]=['kosal',"Lee","Dar"]
// console.log(UserID)


// let User:string[]=[]
// User.push("Kev")
// User.push('Brathna')
// User.push("Nhen")
// User.push("Bonna")



// const ageList:number[]=[33,44,54,65]
// ageList[0]=29;
// ageList[3]=54;

// const bools:boolean[]=[]
// type Point={
//     x:number;
//     y:number;
// }
// const coords:Point[]=[]
// coords.push({x:33,y:44})

// const ageList:number[]=[]
// ageList[0]=22;
// ageList[3]=45;
// ageList[5]=57;
// const bools:boolean[]=[]
// type Point={
//     x:number;
//     y:number;
// }
// const coords:Point[]=[]
// coords.push({x:33,y:45})

/*const ageList:number[]=[]
ageList[0]=45;
ageList[1]=55;
const bools:boolean[]=[]
type Point={
    x:number;
    y:number
}
const coords:Point[]=[]
coords.push({x:33,y:44})*/


// const List:number[]=[]
// List[0]=43;
// List[1]=67;
// const bools:boolean[]=[]
// type Wait={
//     x:number;
//     y:number
// }
// const coords:Wait[]=[]
// coords.push({x:56,y:43})



//Learn X in Y minuts

// There are 3 basic types in TypeScript
// let isDone: boolean=false;
// let lines: number=42;
// let Name: string="Adders";

// But you can omit the type annotation fi the variables are derived
// from explicit literals

// let isDone=false;
// let lines=42;
// let name="Aders";

// When it's impossibe to know, there is the "Any" type
// let notSure: any=4;
// notSure="maybe a string instead";
// notSure=false; // okay, definitely a boolean

//Use const keyword for constants

// const numLivesForCat=9;
// numLivesForCat=1; //error

//For collections, there are typed arrays and generic arrays
// let list: number[]=[1,2,3];
// Alternaltively, using the generic array type
// let list: Array<number>=[1,2,3];

// For enumerations:
// enum Color{Red,Green,Blue};
// let c: Color=Color.Green;
// console.log(Color[c]); //"Green"

// Lastly, "void" is used in the special case of a function returning nothing
// function bigHorribleAlbert():void{
//     alert("I'm a little annoying box!");


// }

// // Function are first class citizens, support the lambda "fat arrow" syntax and
// //use type inference

// // the following are equivalent, the same signature
// //will be inferred by the compiler, and same JavaScript will be emitted
// let f1=function(i: number):number{return i*i;}
// //Return type inferred
// let f2 =function(i:number) {return i*i;}
// //"Fat arrow syntax" 
// let f3=(i:number): number=>{return i*i;}
// // "Fat arrow" syntax with return type inferred
// let f4=(i:number)=>{return i*i;}
// //"Fat arrow" syntax with return type inferred, braceless means no retrun keyword needed;
// let f5=(i:number)=>i*i;
// // interfaces are structural, anything taht has the properties is compliant with the interface
// interface Person{
//     name: string;
//     // Optional properties, markded with a "?"
//     age?: number;
//     // And of course functions
//     move(): void;
// }
// // Object that implements the "Person" interface
// // Can be treated as a Person since it has the name and move properties
// let p: Person={
//     name: "Bobby", move: ()=>{}
// };
// //Objects that have the optional property:
// let validPerson: Person={name: "Bobby", age: 42, move:()=>{}}
// // Is not a person because age is not a number
// let invalidPerson: Person={name: " Bobby", age: true};

// //interfaces can also describle a function type
// interface SearchFunce{
//     (source: string, subString:string): boolean;
// }
// // Only the parameters' types are important, names are not important.
// let mySearch: SearchFunce;
// mySearch=function(src: string, sub:string){
//     return src.search(sub)!=-1;
// }

// // Classes - members are public by default
// class Point{
//     // Properties
//     x:number;
// // Constructor - the public/private keyword in this context will gernerate
// // the boiler plate code for the property and the initialization in the constructor.
// //In this example, "y" will be defined just like "x" is, but with less code
// //Default values are also supported
// constructor(x:number,public y: number=0){
//     this.x=x;
// }
// //function
// dist(): number{return Math.sqrt(this.x*this.x+this.y*this.y);}
// //Static members
// static origin =new Point(0,0);
// }
// // Classes can be explicitly marked as implementing an interface.
// // Any missing properties will then cause and error at compile-time.
// class PointPerson implements Person{
//     name: string
//     move(){}
// }
//  let p1=new Point(10,20);
//  let p2=new Point(25); //y will be 0

//  // Inheritance
//  class Point3D extends Point{
//     constructor(x: number,y: number, public z: number=0){
//         super(x,y); // Explicit call to super class constructor is mandatory
//     }
//     // Overwrite
//     dist(): number{
//         let d=super.dist();
//         return Math.sqrt(d*d+this.z*this.z);
//     }
//  }

//  // Modules, "." can be used as separator for sub modules
//  module Geometry{
//     export class Square{
//         constructor(public sideLength: number=0){

//         }
//         area(){
//             return Math.pow(this.sideLength,2);
//         }
//     }
//  }
//  let s1 =new Geometry.Square(5);
//  //Local alias for referencing a module
//  import G=Geometry;
//  let s2 =new  G.Square(10);
//  //Generics
//  //Classes
//  class Tuple<T1,T2>{
//     constructor(public item: T1,public item2: T2){

//     }
//  }
//  // Interfaces
//  interface Pair<T>{
//     item1: T;
//     item2: T;
//  }

//  // And functions
//  let pairToTuple=function<T>(p: Pair<T>){
//     return new Tuple(p.item1, p.item2);
//  };
//  let tuple=pairToTuple({item1:"hello", item2: "world"});
//  // Includeing references to a definition file:
//  /// <reference path=" jquery.d.ts"/>
//  // Template Strings(strings that use backitcks)
//  // String INterpolation with Template Strings
//  let name='Tyrone';
//  let greeting='Hi ${name}, how are you'
//  // Multiline Strings with Template Strings
//  let Multiline='This is an example of a multiline string';
//  //Readonly: new Feature in TypeScript 3.1
//  interface Person{
//     readonly name: string;
//     readonly age: number;
//  }
//  var p1: Person={name: "Tyrone",age:42};
//  p1.age=25; // Error, p1 age is read-only

//  var p2={name:"John", age:60};
//  var p3:Perso=p2; // Ok, read-only alias for p2
//  p3.age=35; //Error, p3.age is read-only
//  p2.age=45;//ok but also changes p3.age becauseof aliasing

//  class Car{
//     readonly make:string;
//     readonly model:string;
//     readonly year=2018;
//     constructor(){
//         this.make="Unknow Make"; // Assignment permitted in constructor
//         this.make="Unknow Model"; // Assignment permitted n constructor
//     }
//  }
//  let numbers: Array<number>=[0,1,2,3,4];
//  let moreNumbers: ReadonlyArray<number>=numbers;
//  moreNumbers[5]=5;//Error, elements are read-only
//  moreNumbers.push(5);// Error, no push method(because it multates array)
//  moreNumbers.length=3;// Error,length is read-only
//  numbers=moreNumbers;// Error, multating methods are missing

//  //Tagged UNion Types for modelling state that can be in one of many shapes
//  type State=
//  |{type:"loading"}
//  |{type:"success",value: number}
//  |{type:"error", message: string};

//  declare const state: State;
//  if(state.type==="success"){
//     console.log(state.value);
//  }else if(state.type==="error"){
//     console.error(state.message);
//  }

//  // Template Listeral Types
//  // Use to create complex string types
//  type OrderSize="regular" |"large";
//  type OrderItem="Espresso" | "Capppuccino";
//  type Order='A ${OrderSize} ${OrderItem}';

//  let order1: Order="A regular Cappuccino";
//  let order2: Order="A Large Espresso";
//  let order3: Order="A small Espresso";//error
//  //Iterators and Generators
//  // for.. of statement
//  //iterate over the list of values on the object being iterated
//  let arrayOfType=[1,"string",false];
//  for(const val of arrayOfAnyType){
//     console.log(val); // 1,"string", false
//  }
//  let list=[4,5,6];
//  for(const i of list){
//     console.log(i);//4,5,6
//  }
//  // for..in statement
//  //iterate over the list of keys on the object  being iterated
//  for (const i in list){
//     console.log(i); //0,1,2
//  }
//  // Type Asseration
//  let foo={}//Creatin foo as an empty object
//  foo.bar=123//Error property 'bar' does not exitst on '{};
//  foo.baz='hello world'// Error: property 'baz' does not exitst on '{}'
//  //Because the inferred type of foo is '{}'(an object with 0 properties),you are not allowed to add bar and baz to it. However with type assertion, the following will pass:
//  interface Foo{
//     bar:number;
//     baz:string;
//  }
//  let foo={}as Foo;//type asseration here
//  foo.bar=123;
//  foo.baz='hello world';




//Review Basic Typescript
// let ame:string="mana"
// console.log(ame)


//Let's add types to our simple examples from easrlier:


// function add(x:number, y:number):number{
//     return x+y
// }
// console.log(add(3,4))

// let myAdd=function(x:number,y:number){
//     return x+y;
// }
// console.log(myAdd(4,5))



// function add(x:number,y:number):number{
//     return x+y;
// }
// let myAdd=function(x:number,y:number):number{
//     return x+y;
// }



// let myAdd:(x:number,y:number)=>number=function
// (x:number,y:number):number{
//     return x+y;
// }
// console.log(myAdd(5,8))


// function multiply(a:number,b:number):number{
//     return a+b;
// }

// function multiply(a:number,b?:number):number{
//     if(b){//if b has value(not underfined)
// return a+b
//     }else{
//         return a
//     }
// }

// function multiply(a:number,b:number=2):number{
//     return a-b
// }

// object type

// function printName(person:{first:string,last:string}):void{
//     console.log('${person.first}')
// }
// let Name:string="mana";
// console.log(Name)


// function student(name:string,age:number,id:number){
//     return name;age;id;
// }
// console.log(student('mana',33,44))



// function

// const add=(a:number,b:number,c?:number| string)=>{
//     console.log(a+b);
//     console.log(c);
// }
// add(5,10)

// const add=(a:number,b:number,c?:number|string)=>{
//     console.log(a-b);
//     console.log(c)
// }
// add(4,55)

// const add=(a:number,b:number,c?:number|string)=>{
//     console.log(a-b)
//     console.log(c)

// }
// add(20,4)




// const add=(a:number,b:number,c?:number|string)=>{
//     console.log(a*b)
//     console.log(c)
// }
// add(5,20)


// const add=(a:number,b:number,c?:number|string)=>{
// console.log(a+b)
// console.log(c)
// }
// add(4,8)




// const add=(a:number,b:number,c?:number|string)=>{

//     console.log(a-b)
//     console.log(c)
// }
// add(4,77)


// const add=(a:number,b:number,c?:number|string)=>{
// console.log(a-b)
// console.log(c)
// }
// add(45,66)


// let addition=(num1:number,num2:number,num3:number|string=20)=>{
//     console.log(num1-num1)
//     console.log(num3)
// }
// addition(44,55)


// const division=(a:number,b:number,c?:number|string )=>{
//     console.log(a/b)
//     console.log(c)}
//     division(45,44)




// const minus=(a:number,b:number):number=>{
//     return a+b;
// }
// let result=minus(10,7)



// function mul(a:number,b?:number):number{
//     if(b){
//         return a+b
//     }
//     else{
//         return a;
//     }
// }
// console.log(mul(44))




// const User=(a:number,b:number,c?:number|string)=>{
//     console.log(a+b);
//     console.log(c)
// }
// User(44,33)


// Use Void
// Use Never

// let User=(a:number,b:number,c?:number)=>{
//     console.log(b)
//     console.log(c)
//     console.log(a)
// }
// User(45,55,)


// function User(name:string):void{
//     console.log(name)
// }
// User("mana")


// function Student(name:string,id:number):void{
//     return undefined;
// }


// let Mana=(name:string,id:number,age:number,place:string):string=>{
//     return name;id;age;place;
//     console.log(name,id,age,place)
// }
// console.log("mana",33,44,"PP")


//Review function 

// let User=(name:string,age:number,id:number,place:string):string=>{
//     return name;id;age;place;
//     console.log(name,id,place,age)
// }
// console.log('Hiang',33,44,55)




// let User=(name:string,age:number,id:number,place:string):string=>{
//     return name;id;age;place;
// }
// console.log('Mana',44,44,44)

// let User=(a:number,b:number,c?:number|string)=>{
// console.log(a-b)
// }
// console.log(User(3,4))


// let Test=(a:number,b:number,c:number|string=4):number=>{
//     return a+b;
// }
// console.log(3,44)

// function User(Person:{firstname:string;lastname:string}):void{
//     console.log('${Person.firstname}${Person.lastname}');
// }
// User({firstname:'Socha',lastname:'Ra'})


// function Person(man:{first:string;last:string}):void{
//     console.log('${man.first}${man.last}');
// }
// Person({first:"Soteara",last:"Pich"})


// function Person(man:{first:string;last:string}){
//     console.log('${man.first}${man.last}')
// }
// Person({first:"Mana",last:"Co"})

// function Person(man:{first:string;last:string}):void{
//     console.log('${man.first}${man.last}')
// }
// Person({first:"Gona",last:"Da"})


// function Person(man:{first:string;last:string}):void{
//     console.log('${man.first}${man.last}')
// }
// Person({first:"socho",last:"God"})


// function Dollar(Money:{first:string;last:string}){
//     console.log('${Money.first}${Money.last}')
// }
// Dollar({first:"Mana",last:"God"})



// function Dollar(Money:{first:string;last:string}):void{
//     console.log('${Money.first}${Money.last}')
// }
// console.log({first:"Mana",last:"Hiang"})

// function Dollar(Money:{first:string;last:string}):void{
//     console.log('${Money.first}${Money.last}');
// }
// console.log({first:"Socheara",last:"Good"})

// let coodinate:{a:number,b:number,c:number}={a:33,b:44,c:9}

// let coodinate:{a:number,b:number,c:number}={a:44,b:56,c:5}

// let User:{a:number,b:string,c:number}={a:54,b:"Mana",c:44}


//let Num:{a:number,b:string,c:string}={a:44,c:"mana",b:"Banaba"}

//  let Username:{a:number,b:number,c:number}={a:33,b:88,c:56}
// function RandomUsername():{a:number,b:number,c:number}{
//     return{a:Math.random(),b:Math.random(),c:Math.random()}
// }


// let Username:{a:number,b:number,c:number}={a:43,b:45,c:54}
// function RandomUsername():{a:number,b:number,c:number}{
//     return {a:Math.random(),b:Math.random(),c:Math.random()}
// }

// let Train:{a:number,b:number,c:number}={a:34,b:56,c:98}
// function RandomTrain():{a:number,b:number,c:number}{
//     return {a:Math.random(),b:Math.random(),c:Math.random()}
// }

// let Test:{a:number,b:number,c:number}={a:34,c:56,b:77}
// function RandomTest():{a:number,b:number,c:number}{
//     return{a:Math.random(),c:Math.random(),b:Math.random()}
// }



// let Test1:{a:number,b:number,c:number}={a:34,b:56,c:77}
// function RandomTest ():{a:number,c:number,b:number}{
//     return {a:Math.random(),b:Math.random(),c:Math.random()}
// }


// let Train:{a:number,b:number,c:number}={a:45,b:98,c:87}
// function randomTrain():{a:number,c:number,b:number}{
//     return {a:Math.random(),b:Math.random(),c:Math.random()}
// }

// function greeta(person:{name: string;age:number}){
//     return "hello"+person.name;
//   }

// function greet(person:{name:string;age:number}){
//     return "hello"+person.name;
// }

// function Test(person:{name:string;age:number}){
//     return "hello"+person.age;
// }



// function Test(person:{name:string;age:number}){
//     return "hello"+person.age;
// }
// function TrainTest(Person:{name:string;age:number}){
//     return "hello world"+Person.age;
// }


// let Name:{Age:number,Tall:number,Id:number}={Age:34,Tall:1.55,Id:45746}
// console.log(Name)



// function Name(a:number,b:number,c?:number|string):number{
//     return a+b;
// }
// console.log(Name(65,55))


// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };

//   const Person:{name:string,age:number,tall:number}={name:"Mana",age:23,tall:44};



  // let Person={
  //   name:"mana"
  // };
  // Person.name="Hiang";//no error
  // Person.name=43// error


//   let dog={
//     name:"tony"
//   };
//   dog.name="Greatttttttty"// no error
//   dog.name=33;//error no need number

// let person={
//     age:44
// }
// person.age="Kodao"//error 



// let person={name:"Tony"}
// person.name=33//error

// let person={
//   age:43
// }
// person.age="mana"//error cannot use string because the first need to put only number

// let dog={
//   age:2.3,name:"Tony",tall:44
// }
// dog.name="Hello world";// not error
// dog.tall=44;//not error

// const car: { type: string, mileage?: number } = { // no error
//   type: "Toyota"
// };
// car.mileage = 2000;


// let car:{type:string,mileag?:number}={type:"toyota"}
// car.mileag=4444;



// let car :{type:string;name?:string;worth?:number}={
//   type:"blue"
// };
// car.name="forth";
// car.worth=33;


// let car:{name:string,color:string,worth:number}={name:"Halender",color:"blue",worth:33}


// let person:{arm:number,leg?:number,head?:string,ear?:number}={
//   arm:3
// }
// person.leg=2;
// person.head="good";
// person.ear=2;
// console.log(person)


// const Dog:{
//   Name:string,age:number,tall:number,place?:string
// }={Name:"Kiki",age:0.5,tall:1};Dog.place="Phnom Penh";


// const Cat:{Name:string,age:number,tall?:number,place?:string}={Name:"Devid",age:0.4,}
// Cat.place="Phnom Penh"
// Cat.tall=0.9;


// const NameAgeMap:{[index:string]:string}={}
// NameAgeMap.Mana="Good";
// NameAgeMap.Channa="Better";
// NameAgeMap.Sovan="Fairmly";
// NameAgeMap.Chinda="Exellent";
// NameAgeMap.Grima="good";
// NameAgeMap.Dara="Better";
// console.log(NameAgeMap)




//Start Array


// const PersonName:string[]=[]
// PersonName.push("Mana")
// PersonName.push("Channa")
// PersonName.push("Chiva")
// PersonName.push("Chivon")
// PersonName.push("Dara")
// PersonName.push("Koma")
// console.log(PersonName)


// let DogName:string[]=[]
// DogName.push("Devit")
// DogName.push("Boy")
// DogName.push("Mama")
// DogName.push("Greeta")
// DogName.push("Tur")
// console.log(DogName)


// Use readony to prevent from changing;
// const Name:readonly string[]=[]
// Name.push("Hello")//error


// let Names=["Hello"]
// Names.push("Mana")
// Names.push(33)



// let Numbers=[12,33,44,64]
// Numbers.push("Hello")//error
// Numbers.push(4)// no error
// Numbers.push("How are you ")//error
// console.log(Numbers)

// const active:string[]=[]
// active.push("hello")
// active.push("Hello world")
// active.push("good")
// active.push("good luck")
// console.log(active)


// let Name:Array<string>=[]
// Name.push("Dara")
// Name.push("Jackson")
// Name.push("Chanda")
// Name.push("Greeting")
// Name.push("Good")
// console.log(Name)

// Use Type to declare

// type Mana={x:number,y:string}
// let Train:Mana[]=[]
// Train.push({x:33,y:"Hello"})

// type Point={a:number,b:string,c:number,d:string,e:boolean,f:any}
// let Mana:Point[]=[]
// Mana.push({a:333,b:"Hello",c:44,d:"Hello",e:true,f:33})
// console.log(Mana)



// let Name:string[][]=[["Hello Somnang"],["How are you today"],["That's OK I'm find"]]


// let UserName:number[][][]=[[[33],[44],[45],[56],[43],[34]]]





// Union type



// function Name(code:number|string){
//   console.log(code)
// }
// Name(444)
//Name("Hello world")


// let Name=(code:number|string)=>{
//   console.log(code)
// }
// console.log(Name("Hello wold"))
// console.log(Name(33))



// function Name(code:string|number){
//   console.log(code)
// }
// Name("hello")
// Name(44)

// function Name(name:string|number){
//   console.log(`my name is &{name}`)
// }


// function User(price:number|string,tax:number){
//   if(typeof price==="string"){
//    price.replace("$"," ")
//   }
//   else{
//     tax*price;
//   }
// }
// console.log(User(33,44))// undefined

// let user:number|string[]=["hello world"]

// const Person:number|string|boolean|any[]=[true]


// type Mana={x:number,y:string}
// let Train:Mana[]=[]
// Train.push({x:33,y:"Hello"})

// type Point={a:number,b:string,c:number,d:string,e:boolean,f:any}
// let Mana:Point[]=[]
// Mana.push({a:333,b:"Hello",c:44,d:"Hello",e:true,f:33})
// console.log(Mana)


// type Person={x:number,y:string,c:string}
// let Dog:Person[]=[]
// Dog.push({x:44,y:"hello",c:"Banteaymeanchey"})
// console.log(Dog)


// type User={x:number,y:string,c:number}
// let Cat:User[]=[]
// Cat.push({x:44,y:"Hello",c:44})
// console.log(Cat)



// type Personal={a:number,b:number,c:string}
// let Train:Personal[]=[]
// Train.push({a:44,b:44,c:"Hello world"})
// console.log(Train)


// type interface={name:string,age:number,tall:number}
// let Find:interface[]=[]
// Find.push({name:"Mana",age:25,tall:1.65})
// console.log(Find)



// type enter={name:string,age:number,id:number}
// let findIt:enter[]=[]
// findIt.push({name:"Hello world",age:25,id:3454})
// console.log(findIt)


// type findme={name:string,age:number,id:number}
// let okay:findme[]=[]
// okay.push({name:"Mana",age:25,id:57058})
// console.log(okay)



// type findme={name:string,age:number,id:number}
// let Ok:findme[]=[]
// Ok.push({name:"Mana",age:25,id:57058})
// console.log(Ok)


// type tryagain={test:string,find:number,meeting:number}
// let That:tryagain[]=[]
// That.push({test:"english level 3",find:3,meeting:8})
// console.log(That)



// Let's to learn tuple and enum

//defined our tuple
// let LearnTuple:[string,number,boolean]
// //Initialize correctly
// LearnTuple=['hello',44,true]
// console.log(LearnTuple)


// let Ourtuple:[string,number,boolean,any]
// Ourtuple=['mana',44,true,false]


// let Tuple:[boolean,any,number,string]
// Tuple=[true,false,44,'hello world']



// let Tuple:[boolean,number,string,any]
// Tuple=[true,44,'Mana',false]


// let Tuple:[number,boolean,string]
// Tuple=[44,333,'hello']//error boolean


// let ReadonlyTuple:readonly[string,boolean,number,any]
// ReadonlyTuple=['hello',true,33,false]
// console.log(ReadonlyTuple)



// let LearnReadOnlyTuple:readonly[string,boolean,number,any]
// LearnReadOnlyTuple=['hello',true,44,false]


// let grap:[x:number,y:boolean,z:string]
// grap=[44,true,'hello']
// console.log(grap)



// let ourPlan:[answer:boolean,age:number,wish:string]=[true,33,'Good luck']
// console.log(ourPlan)


// enum person{
//   head,ear,arm,leg
// }
// let Person=person.arm
// console.log(Person)



// enum Start{car,dog,eliphan,pig}
// let start=Start.pig
// console.log(start)



// enum Practice{java,pyphon,JavaScript}
// let practice=Practice.java
// console.log(practice)


// enum User{name,age,id}
// console.log(User.name)


// enum Person{name,age,id}
// console.log(Person.age)


// enum Pro{Number
//   ,Age=25
//   ,Tall=1.65
//   ,ID=57058
//   ,IQ=90}
//   console.log(Pro.IQ)



// enum User{Name="Mana",age=25,ID=57058}
// console.log(User.ID)


//strign enum

// enum Pro{
//   Name="Dara",
//   Place="Phnom Penh",
//   FullName="Sing Dara"
// }
// console.log(Pro.Name)


// let Pro:string|number[]=[]
// Pro.push(33)
// console.log(Pro)

// class Person{color:string}
// const person=new Person
// class Person{private Name:string}
// interface Point{

// x:number
// y:number
// }
// let Nam:Point={x:3,y:33}


// interface Person{
//   a:number
//   y:string
// }
// let Name:Person={a:44,y:"Hello"}

// interface Pro{Name:string,Place:string}
// let pro:Pro={Name:"Mana",Place:'Phnom Penh'}


// interface Pro{Name:string,age:number}
// let pro:Pro={Name:'Non',age:44}
// console.log(pro)


// interface Pro{Name:string,age:number}
// let pro:Pro={Name:"Hello",age:44}
// console.log(pro)


// interface Pro{Name:string,id:number}
// let pro:Pro={Name:"Hehe",id:44}
// console.log(pro)


// interface Pro{Name:string,ID:number}
// let pro:Pro={Name:"mana",ID:44}
// console.log(pro)



// interface User{Name:string,Id:number}
// let user:User={Name:'hello',Id:44}

//Aliases



// type CarYear=number;
// type CarModel=string;
// type CarColor=string;
// type Car={year:CarYear,model:CarModel,color:CarColor}

// let caryear:CarYear=2022;
// let carmodel:CarModel="Toyota"
// let carcolor:CarColor="Black"
// const car:Car={year:caryear,model:carmodel,color:carcolor}
// console.log(car)


//Interfact

// interface Pro{Car:string,Moto:string,Plane:string}
// let pro={Car:"Cambodia",Moto:"Kavasaki",Plane:"USA"}



// interface Car{Color:string,Model:string}
// let car={Color:"blue",Model:"Toyota"}
// console.log(car)


//Generic

// function Pro<S,T>(v1:S,v2:T):[S,T]{
//   return [v1,v2]
// }
// console.log(Pro<string,number>("Hello",44))



// function User<S,T>(v1:S,v2:T):[S,T]{
//   return [v1,v2]
// }
// console.log(User<string,boolean>("Hello",true))



// function Hello<X,Y>(v1:X,v2:Y):[X,Y]{
//   return [v1,v2]
// }
// console.log()
// let message : string = "Hello";
// console.log(message);
