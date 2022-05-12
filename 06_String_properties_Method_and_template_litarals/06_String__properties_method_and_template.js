console.log("This is string tutorial");

let str = "Good morning";
let str2 = "sanjay";
// console.log(str+' '+str2);


// // STRING FUNCTION📌📌📌
let about= "This is sanjay paul, i am from westbengal, my state is...";
console.log(about);
//concat function
// about = about.concat("i am 19 year old");
// console.log(about);

//length function
// console.log(about.length);

//toLowerCase function
// console.log(about.toLowerCase());

//toUpperCase function
// console.log(about.toUpperCase());

//endwith function
// console.log(about.endsWith("bengal."));

//includes function
// console.log(about.includes("bsdfadf"));

// // indexing fuction in string
// console.log(about[2]);
// console.log(about.charAt(6));
// console.log(about.indexOf('is'));
// console.log(about.lastIndexOf('is'));
// console.log(about.substring(0, 6));
// console.log(about.slice(0, -5));

//split function
// console.log(about.split('i'));

//replace function
// console.log(about.replace('This','it'));

//TEMPLATE LITERALS📌📌📌
let Name ="Sanjay";
let fruit1 ="Mango";
let fruit2 = "Orange";

let print = `Hello ${Name}
            <h1>This is heading...</h1> 
            <p>Your like ${fruit1} and ${fruit2}</p> `
document.body.innerHTML = print;

// // Quick quize
let name2 = "Sanjay";
let greet = "Good morning";
let fString = `<h2> Hello ${name2}, ${greet} </h2>`;
document.body.innerHTML = fString;

