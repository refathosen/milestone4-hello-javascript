console.log(5>10); // false
console.log(5<10); // true
console.log(5>=5); // true
console.log(5<=3); // false
console.log(5==5); // true
console.log(5!='5'); // false
console.log(5==='5'); // false
console.log(5!=='5'); // true

let peyeraPrice = 100;
let mangoPrice = 120;

console.log(peyeraPrice < mangoPrice); // true
console.log(peyeraPrice > mangoPrice); // false


/**
 * == (loose equality: only match value)
 * === (strict equality: match both value and type)
 * != (loose inequality : only match value)
 * !== (strict inequality: match both value and type)
 */

console.log(10 == '10'); // true
console.log(10 === '10'); // false
console.log(10 != '10'); // false
console.log(10 !== '10'); // true