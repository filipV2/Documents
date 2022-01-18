/*const statement = "Nauka programowania jest "
let choice = prompt("Co sądzisz o nauce programowania?");
alert(statement + choice );*/
//lancuch szablonowy pozwala wyswitlic wartosc zmiennej wewnatrz stringe

let choice = prompt("Co sądzisz o nauce programowania?");
let statement = `Nauka programowania jest ${choice}`; //pod escape
alert(statement);
