var array = ["88", "999", "12", "123", "230"]; 
//armazenando max e min da lista
var max = (Math.max(...array));
var min = (Math.min(...array));
//imprimindo resultado
console.log(max);
console.log(min);

//convertendo para string
var max_str = max.toString();
var min_str = min.toString();



//verificando se virou string:
console.log(typeof max_str);
console.log(typeof min_str);

console.log(array.indexOf(max_str));
console.log(array.indexOf(min_str));

