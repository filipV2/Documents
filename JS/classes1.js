class warzywo
{
    name = "noname";
    price = "0";
    ameount = 0;
}
let warzywa =new Array(3);
for(let i=0;i<3;i++)
{
    warzywa[i]=new warzywo
    warzywa[i].name=prompt("podaj nazwe warzywa");
    warzywa[i].price=prompt("podaj cene warzywa");
    warzywa[i].ameount=prompt("podaj ilosc warzywa");
}
for(let i=0;i<3;i++) {
    if (warzywa[i].price < 5) {
        document.write('nazwa warzywa <br>');
        document.write(warzywa[i].name+'<br>');
        document.write('cena warzywa <br>');
        document.write(warzywa[i].price+'<br>');
        document.write('ilosc warzywa <br>');
        document.write(warzywa[i].ameount+'<br>');
    }
}


