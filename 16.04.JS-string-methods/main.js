// length
// charAt
// uppercase/lovercase
// indexOf
// lastIndexOf
// startsWith
// endsWith
// trim
// substr
// substring
// padStart/padEnd
// includes
// slice
// split
// replace
// replaceAll
// concat
// match

let str = "Hello World!";

console.log(str.length);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));

// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

//indexOf, lastIndexOf

// console.log(str.indexOf("l"));
// console.log(str.indexOf("l", 3));
// console.log(str.lastIndexOf("l"));

//startsWith vs endsWith
// console.log(str.startsWith("!")); // flase
// console.log(str.startsWith("Hel"));  // true
// console.log(str.endsWith("d!")); // true
// console.log(str.endsWith("b!")); //false

console.log(str.substring(3)); //lo World!
console.log(str.substring(3, 7)); // lo W

console.log(str.slice(3)); //lo World!
console.log(str.slice(3, 7)); //lo W

console.log(str.slice(-4));
console.log(str.slice(-4, -2));

// trim

console.log("       Amirov Kanan         ");
console.log("       Amirov Kanan         ".trim());
console.log("       hello         ".trimStart());
console.log("       hello        ".trimEnd());

console.log("1234 1234 1234 1234".padStart(50, "*"));
console.log("1234 1234 1234 1234".padEnd(50, "*"));

console.log("1234 1234 1234 1234".slice(-4).padStart(16, "*")); //************1234
console.log("1234 1234 1234 1234".slice(-4).padStart(16, "*").padEnd(20, "#")); //************1234####

console.log("hello".split());
console.log("hello".split(""));
console.log("hello world lorem".split(" "));
console.log("hello,world".split(","));

//includes

console.log(str.includes("osas")); //false
console.log(str.includes("o")); //true

console.log("salam".concat(" aleykum", " necesen"));

console.log("salam hello privet hello".replace("hello", "hi"));
console.log("salam hello privet hello".replaceAll("hello", "hi"));

console.log("salam124 HellO56".replace(/[1-9]/gi, ""));
// console.log("salam124 HellO56".replace(/[A-Z]/g, ""));

console.log("salam 67 privet".match(/[1-9]/g));
