/*class warzywo
{
    name = "noname";
    price = "0";
    ameount = 0;
}
let clothes = new Set();//new poniewaz powstaje nowy obiekt
clothes.add('por');
clothes.add('pomidor');
clothes.add('ziemniak');
//clothes.delete("sweter");
//alert(clothes.has("kalesony"));
//alert(clothes.size)
//clothes.add('sweter');
//clothes.add(5);
let por=new warzywo;
por.name='por';
por.amount=50;
por.price=2;
clothes.add(por);
for (let item of clothes.keys())alert(item.amount);*/

/*let vegetables =  new Set();

const pomidor = {
    name: "Pomidor",
    price: 5,
    amount: 10
}

const por = {
    name: "Por",
    price: 6,
    amount: 2
}

const marchew = {
    name: "Marchew",
    price: 2,
    amount: 40
}



vegetables.add(pomidor);
vegetables.add(por);
vegetables.add(marchew);
debugger;
let answer = prompt("Czy chcesz wyszukać po cenie, ilosci czy wyświetlić listę warzyw?");

if (answer === "cena") {
    let prc_answer = +prompt("Ile maksymalnie możesz zapłacic za kilogram warzyw?");
    vegetables.forEach(function (vegetable) {
        if (prc_answer < vegetable.price) {
            vegetables.delete(vegetable);
        }
    });
}
else if (answer ==="ilosc") {
    let amo_answer = prompt("Jaka minimalna ilość warzyw cię interesuje?");

    vegetables.forEach(function (vegetable) {
        if (amo_answer > vegetable.amount) {
            vegetables.delete(vegetable);
        }
    });
} else if (answer != "lista") {
    throw new Error('Wybrałeś złą opcję')
}

vegetables.forEach(function(vegetable) {
    console.log(vegetable);
})*/
/*class FoodClass
{
    Name = "Name";
    Price = 0.00;
    Amount = 0;
}
let FoodSet = new Set();

let Fruit1 = new FoodClass;
Fruit1.Name = "Orange";
Fruit1.Amount = 12;
Fruit1.Price = 3.4;
FoodSet.add(Fruit1);

let Fruit2 = new FoodClass;
Fruit2.Name = "Apple";
Fruit2.Amount = 3;
Fruit2.Price = 9.4;
FoodSet.add(Fruit2);

let Fruit3 = new FoodClass;
Fruit3.Name = "Pear";
Fruit3.Price = 2.1;
Fruit3.Amount = 12;
FoodSet.add(Fruit3);

for (let item of FoodSet )
{
    document.write("Name: "+item.Name+"<br>");
    document.write("Price: "+item.Price+"<br>");
    document.write("Amount: "+item.Amount+"<br>");
}
document.write("<br><br><br>");
choice = prompt("find by (==) name / (<) price / (>) amount");
target = prompt("input data");
document.write("You chose to search by "+choice+" with parameter "+target+":<br><br>");
switch (choice)
{
    case "name":
        for (let item of FoodSet )
            if (item.Name !== target)
                FoodSet.delete(item);
        break;
    case "price":
        for (let item of FoodSet )
            if (item.Price > +target)
                FoodSet.delete(item);
        break;
    case "amount":
        for (let item of FoodSet )
            if (item.Amount < +target)
                FoodSet.delete(item);
        break;
}
for (let item of FoodSet )
{
    document.write("Name: "+item.Name+"<br>");
    document.write("Price: "+item.Price+"<br>");
    document.write("Amount: "+item.Amount+"<br>");
}*/
class warzywo
{
    name = 'namespace';
    price = '0';
    amount_in_storage = '0';
}

let n=0;
let warzyw = new Set();

let por = new warzywo;
por.name = 'por';
por.price = 2;
por.amount_in_storage = 40;

warzyw.add(por);

let marchew = new warzywo;
marchew.name = 'marchew';
marchew.price = 0.5;
marchew.amount_in_storage = 70;

warzyw.add(marchew);

let pomidor = new warzywo;
pomidor.name = 'pomidor';
pomidor.price = 0.4;
pomidor.amount_in_storage = 57;

warzyw.add(pomidor);

let choice_what = prompt("Podaj za pomocą czego chcesz wyszukać?");

//looking from name
if(choice_what === "nazwa") {
    let choice = prompt("Podaj czego szukasz");

    for (let item of warzyw) {
        if (choice === item.name) {
            document.write(item.name + '<br>');
            document.write(item.price + ' złotych za sztukę <br>');
            document.write(item.amount_in_storage + ' sztuk <br><br>');
            n = 1;
        }
    }

    if(n!=1)
    {
        document.write("Nie ma takiego<br>");
        n=1;
    }
}
//looking from price
if(choice_what === "cena") {
    let choice2 = prompt("Jaką cenę szukasz");

    for (let item of warzyw) {
        if (+choice2 >= item.price) {
            document.write(item.name + '<br>');
            document.write(item.price + ' złotych za sztukę <br>');
            document.write(item.amount_in_storage + ' sztuk <br><br>');
            n = 1;
        }
    }

    if(n!=1)
    {
        document.write("Nie ma takiego<br>");
        n=1;
    }
}

//looking from amount
if(choice_what === "ilosc") {
    let choice3 = prompt("Ile szukasz");

    for (let item of warzyw) {
        if (+choice3 <= item.amount_in_storage) {
            document.write(item.name + '<br>');
            document.write(item.price + ' złotych za sztukę <br>');
            document.write(item.amount_in_storage + ' sztuk <br><br>');
            n = 1;
        }
    }

    if(n!=1)
    {
        document.write("Nie ma takiego<br>");
        n=1;
    }
}


document.write("-----------------------------<br>");
for(let item of warzyw)
{
    document.write(item.name + '<br>');
    document.write(item.price + ' złotych za sztukę <br>');
    document.write(item.amount_in_storage + ' sztuk <br><br>');
}